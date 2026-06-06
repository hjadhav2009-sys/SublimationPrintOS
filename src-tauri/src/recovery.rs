use crate::app_paths::{path_to_string, AppPaths};
use crate::database::get_database_status_for_paths;
use crate::diagnostics::get_diagnostics_summary_for_paths;
use crate::logging::{new_log_entry, write_audit_log_event, write_log_entry};
use crate::settings::get_settings_summary_for_paths;
use crate::storage::get_storage_status_for_paths;
use chrono::Utc;
use serde::{Deserialize, Serialize};
use serde_json::Value;
use std::fs;
use std::path::{Path, PathBuf};
use std::process;

const CURRENT_SESSION_FILE: &str = "current-session.json";
const LAST_CLEAN_SESSION_FILE: &str = "last-clean-session.json";
const RECOVERY_INDEX_FILE: &str = "recovery-index.json";
const SNAPSHOTS_DIR: &str = "snapshots";
const MAX_REASON_LENGTH: usize = 120;
const MAX_ACTIVE_ROUTE_LENGTH: usize = 80;
const MAX_SNAPSHOT_SUMMARIES: usize = 50;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RecoverySession {
    pub session_id: String,
    pub started_at: String,
    pub last_heartbeat_at: String,
    pub clean_shutdown: bool,
    pub app_version: String,
    pub phase: String,
    pub active_route: Option<String>,
    pub notes: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RecoverySnapshot {
    pub snapshot_id: String,
    pub created_at: String,
    pub session_id: String,
    pub reason: String,
    pub active_route: Option<String>,
    pub settings_summary: Option<Value>,
    pub foundation_summary: Option<Value>,
    pub diagnostics_summary: Option<Value>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RecoverySnapshotSummary {
    pub snapshot_id: String,
    pub created_at: String,
    pub reason: String,
    pub file_name: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct RecoveryStatus {
    pub ok: bool,
    pub recovery_dir: String,
    pub current_session: Option<RecoverySession>,
    pub previous_unclean_session: Option<RecoverySession>,
    pub snapshots: Vec<RecoverySnapshotSummary>,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct RecoveryActionResult {
    pub ok: bool,
    pub status: RecoveryStatus,
    pub message: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct RecoveryIndex {
    previous_unclean_session: Option<RecoverySession>,
    previous_unclean_dismissed: bool,
    snapshots: Vec<RecoverySnapshotSummary>,
    updated_at: String,
}

pub fn initialize_recovery_for_paths(
    paths: &AppPaths,
    active_route: Option<String>,
) -> Result<RecoveryStatus, String> {
    ensure_recovery_dirs(paths)?;
    let active_route = validate_optional_active_route(active_route)?;
    let mut index = read_index(paths)?;

    if let Some(existing_session) = read_json_optional::<RecoverySession>(&current_session_path(paths))? {
        if !existing_session.clean_shutdown {
            index.previous_unclean_session = Some(existing_session);
            index.previous_unclean_dismissed = false;
        }
    }

    let now = Utc::now().to_rfc3339();
    let session = RecoverySession {
        session_id: generate_id("session"),
        started_at: now.clone(),
        last_heartbeat_at: now,
        clean_shutdown: false,
        app_version: env!("CARGO_PKG_VERSION").to_string(),
        phase: "Phase 0".to_string(),
        active_route,
        notes: Some("Phase 0 recovery marker only".to_string()),
    };

    write_json_atomic(&current_session_path(paths), &session)?;
    index.snapshots = snapshot_summaries_from_files(paths)?;
    write_index(paths, &mut index)?;

    write_log_entry(
        paths,
        &new_log_entry(
            "info",
            "foundation",
            "recovery_initialized",
            "Recovery initialized",
            Some(serde_json::json!({
                "session_id": session.session_id,
                "phase": "Phase 0"
            })),
        )?,
    )?;
    write_audit_log_event(
        paths,
        "recovery_initialized",
        "Recovery initialized",
        Some(serde_json::json!({
            "session_id": session.session_id
        })),
    )?;

    build_status(paths)
}

pub fn update_recovery_heartbeat_for_paths(
    paths: &AppPaths,
    active_route: Option<String>,
) -> Result<RecoveryStatus, String> {
    ensure_recovery_dirs(paths)?;
    let active_route = validate_optional_active_route(active_route)?;
    let mut session = read_current_session(paths)?;
    session.last_heartbeat_at = Utc::now().to_rfc3339();
    session.active_route = active_route;
    session.clean_shutdown = false;
    write_json_atomic(&current_session_path(paths), &session)?;
    build_status(paths)
}

pub fn mark_recovery_clean_shutdown_for_paths(paths: &AppPaths) -> Result<RecoveryStatus, String> {
    ensure_recovery_dirs(paths)?;
    let mut session = read_current_session(paths)?;
    session.last_heartbeat_at = Utc::now().to_rfc3339();
    session.clean_shutdown = true;
    write_json_atomic(&current_session_path(paths), &session)?;
    write_json_atomic(&last_clean_session_path(paths), &session)?;

    write_log_entry(
        paths,
        &new_log_entry(
            "info",
            "foundation",
            "clean_shutdown_recorded",
            "Clean shutdown recorded",
            Some(serde_json::json!({
                "session_id": session.session_id
            })),
        )?,
    )?;
    write_audit_log_event(
        paths,
        "clean_shutdown_recorded",
        "Clean shutdown recorded",
        Some(serde_json::json!({
            "session_id": session.session_id
        })),
    )?;

    build_status(paths)
}

pub fn get_recovery_status_for_paths(paths: &AppPaths) -> Result<RecoveryStatus, String> {
    build_status(paths)
}

pub fn create_recovery_snapshot_for_paths(
    paths: &AppPaths,
    reason: String,
    active_route: Option<String>,
) -> Result<RecoveryActionResult, String> {
    ensure_recovery_dirs(paths)?;
    let reason = validate_reason(reason)?;
    let active_route = validate_optional_active_route(active_route)?;
    let now = Utc::now();
    let created_at = now.to_rfc3339();
    let snapshot_id = generate_id("snapshot");
    let session_id = read_json_optional::<RecoverySession>(&current_session_path(paths))?
        .map(|session| session.session_id)
        .unwrap_or_else(|| generate_id("snapshot-session"));

    let settings_summary = get_settings_summary_for_paths(paths)
        .map(|summary| serde_json::json!({ "ok": true, "summary": summary }))
        .unwrap_or_else(|error| serde_json::json!({ "ok": false, "message": error }));
    let foundation_summary = serde_json::json!({
        "storage": get_storage_status_for_paths(paths),
        "database": get_database_status_for_paths(paths)
    });
    let diagnostics_summary = get_diagnostics_summary_for_paths(paths)
        .map(|summary| serde_json::json!({ "ok": true, "summary": summary }))
        .unwrap_or_else(|error| serde_json::json!({ "ok": false, "message": error }));

    let snapshot = RecoverySnapshot {
        snapshot_id: snapshot_id.clone(),
        created_at,
        session_id,
        reason: reason.clone(),
        active_route,
        settings_summary: Some(settings_summary),
        foundation_summary: Some(foundation_summary),
        diagnostics_summary: Some(diagnostics_summary),
    };
    let file_name = format!("snapshot-{}.json", now.format("%Y%m%d-%H%M%S"));
    write_json_atomic(&snapshots_dir(paths).join(&file_name), &snapshot)?;

    let mut index = read_index(paths)?;
    index.snapshots = snapshot_summaries_from_files(paths)?;
    write_index(paths, &mut index)?;

    write_log_entry(
        paths,
        &new_log_entry(
            "info",
            "foundation",
            "recovery_snapshot_created",
            "Recovery snapshot created",
            Some(serde_json::json!({
                "snapshot_id": snapshot_id,
                "reason": reason
            })),
        )?,
    )?;
    write_audit_log_event(
        paths,
        "recovery_snapshot_created",
        "Recovery snapshot created",
        Some(serde_json::json!({
            "snapshot_id": snapshot.snapshot_id,
            "file_name": file_name
        })),
    )?;

    let status = build_status(paths)?;
    Ok(RecoveryActionResult {
        ok: true,
        status,
        message: "Recovery snapshot created".to_string(),
    })
}

pub fn dismiss_previous_recovery_warning_for_paths(
    paths: &AppPaths,
) -> Result<RecoveryStatus, String> {
    ensure_recovery_dirs(paths)?;
    let mut index = read_index(paths)?;
    index.previous_unclean_dismissed = true;
    write_index(paths, &mut index)?;
    build_status(paths)
}

pub fn clear_recovery_snapshots_for_paths(
    paths: &AppPaths,
    confirm: String,
) -> Result<RecoveryStatus, String> {
    if confirm != "CLEAR_RECOVERY_SNAPSHOTS" {
        return Err("Clear recovery snapshots confirmation did not match".to_string());
    }

    ensure_recovery_dirs(paths)?;
    for entry in fs::read_dir(snapshots_dir(paths))
        .map_err(|error| format!("Unable to read recovery snapshots folder: {error}"))?
    {
        let entry = entry.map_err(|error| format!("Unable to inspect snapshot entry: {error}"))?;
        let path = entry.path();
        if path.is_file() {
            fs::remove_file(&path).map_err(|error| {
                format!("Unable to delete snapshot file {}: {error}", path_to_string(&path))
            })?;
        }
    }

    let mut index = read_index(paths)?;
    index.snapshots = Vec::new();
    write_index(paths, &mut index)?;

    write_log_entry(
        paths,
        &new_log_entry(
            "info",
            "foundation",
            "recovery_snapshots_cleared",
            "Recovery snapshots cleared",
            None,
        )?,
    )?;
    write_audit_log_event(
        paths,
        "recovery_snapshots_cleared",
        "Recovery snapshots cleared",
        None,
    )?;

    build_status(paths)
}

fn build_status(paths: &AppPaths) -> Result<RecoveryStatus, String> {
    let recovery_path = recovery_dir(paths);
    let current_session = read_json_optional::<RecoverySession>(&current_session_path(paths))?;
    let index = read_index(paths)?;
    let previous_unclean_session = if index.previous_unclean_dismissed {
        None
    } else {
        index.previous_unclean_session
    };
    let snapshots = snapshot_summaries_from_files(paths).or_else(|_| Ok::<_, String>(index.snapshots))?;
    let ok = recovery_path.is_dir()
        && snapshots_dir(paths).is_dir()
        && current_session.is_some()
        && previous_unclean_session.is_none();

    let message = if previous_unclean_session.is_some() {
        "Previous unclean app session detected".to_string()
    } else if current_session.is_some() {
        "Recovery ready".to_string()
    } else {
        "Recovery not initialized".to_string()
    };

    Ok(RecoveryStatus {
        ok,
        recovery_dir: path_to_string(&recovery_path),
        current_session,
        previous_unclean_session,
        snapshots,
        message,
    })
}

fn ensure_recovery_dirs(paths: &AppPaths) -> Result<(), String> {
    fs::create_dir_all(snapshots_dir(paths))
        .map_err(|error| format!("Unable to create recovery snapshots folder: {error}"))
}

fn recovery_dir(paths: &AppPaths) -> PathBuf {
    paths.app_data_dir.join("jobs").join("recovery")
}

fn snapshots_dir(paths: &AppPaths) -> PathBuf {
    recovery_dir(paths).join(SNAPSHOTS_DIR)
}

fn current_session_path(paths: &AppPaths) -> PathBuf {
    recovery_dir(paths).join(CURRENT_SESSION_FILE)
}

fn last_clean_session_path(paths: &AppPaths) -> PathBuf {
    recovery_dir(paths).join(LAST_CLEAN_SESSION_FILE)
}

fn recovery_index_path(paths: &AppPaths) -> PathBuf {
    recovery_dir(paths).join(RECOVERY_INDEX_FILE)
}

fn read_current_session(paths: &AppPaths) -> Result<RecoverySession, String> {
    read_json_optional(&current_session_path(paths))?
        .ok_or_else(|| "Recovery session has not been initialized yet".to_string())
}

fn read_index(paths: &AppPaths) -> Result<RecoveryIndex, String> {
    Ok(read_json_optional::<RecoveryIndex>(&recovery_index_path(paths))?.unwrap_or_else(|| {
        RecoveryIndex {
            previous_unclean_session: None,
            previous_unclean_dismissed: false,
            snapshots: Vec::new(),
            updated_at: Utc::now().to_rfc3339(),
        }
    }))
}

fn write_index(paths: &AppPaths, index: &mut RecoveryIndex) -> Result<(), String> {
    index.updated_at = Utc::now().to_rfc3339();
    index.snapshots.sort_by(|left, right| right.created_at.cmp(&left.created_at));
    index.snapshots.truncate(MAX_SNAPSHOT_SUMMARIES);
    write_json_atomic(&recovery_index_path(paths), index)
}

fn snapshot_summaries_from_files(paths: &AppPaths) -> Result<Vec<RecoverySnapshotSummary>, String> {
    let snapshot_path = snapshots_dir(paths);
    if !snapshot_path.is_dir() {
        return Ok(Vec::new());
    }

    let mut summaries = Vec::new();
    for entry in fs::read_dir(&snapshot_path)
        .map_err(|error| format!("Unable to read recovery snapshots folder: {error}"))?
    {
        let entry = entry.map_err(|error| format!("Unable to inspect snapshot file: {error}"))?;
        let path = entry.path();
        if !path.is_file() || path.extension().and_then(|value| value.to_str()) != Some("json") {
            continue;
        }

        if let Ok(Some(snapshot)) = read_json_optional::<RecoverySnapshot>(&path) {
            summaries.push(RecoverySnapshotSummary {
                snapshot_id: snapshot.snapshot_id,
                created_at: snapshot.created_at,
                reason: snapshot.reason,
                file_name: entry.file_name().to_string_lossy().into_owned(),
            });
        }
    }

    summaries.sort_by(|left, right| right.created_at.cmp(&left.created_at));
    summaries.truncate(MAX_SNAPSHOT_SUMMARIES);
    Ok(summaries)
}

fn read_json_optional<T>(path: &Path) -> Result<Option<T>, String>
where
    T: for<'de> Deserialize<'de>,
{
    if !path.exists() {
        return Ok(None);
    }

    let content = fs::read_to_string(path)
        .map_err(|error| format!("Unable to read {}: {error}", path_to_string(path)))?;
    let value = serde_json::from_str::<T>(&content)
        .map_err(|error| format!("Unable to parse {}: {error}", path_to_string(path)))?;
    Ok(Some(value))
}

fn write_json_atomic<T>(path: &Path, value: &T) -> Result<(), String>
where
    T: Serialize,
{
    let parent = path
        .parent()
        .ok_or_else(|| format!("Unable to resolve parent folder for {}", path_to_string(path)))?;
    fs::create_dir_all(parent)
        .map_err(|error| format!("Unable to create folder {}: {error}", path_to_string(parent)))?;

    let tmp_path = path.with_extension("tmp");
    let content = serde_json::to_vec_pretty(value)
        .map_err(|error| format!("Unable to serialize {}: {error}", path_to_string(path)))?;
    fs::write(&tmp_path, content)
        .map_err(|error| format!("Unable to write temp file {}: {error}", path_to_string(&tmp_path)))?;

    if path.exists() {
        fs::remove_file(path)
            .map_err(|error| format!("Unable to replace {}: {error}", path_to_string(path)))?;
    }

    fs::rename(&tmp_path, path).map_err(|error| {
        format!(
            "Unable to rename temp file {} to {}: {error}",
            path_to_string(&tmp_path),
            path_to_string(path)
        )
    })
}

fn validate_reason(reason: String) -> Result<String, String> {
    let trimmed = reason.trim();
    if trimmed.is_empty() {
        return Err("Recovery snapshot reason is required".to_string());
    }

    if trimmed.chars().count() > MAX_REASON_LENGTH {
        return Err(format!(
            "Recovery snapshot reason must be {MAX_REASON_LENGTH} characters or fewer"
        ));
    }

    Ok(trimmed.to_string())
}

fn validate_optional_active_route(active_route: Option<String>) -> Result<Option<String>, String> {
    match active_route {
        Some(value) => {
            let trimmed = value.trim();
            if trimmed.is_empty() {
                Ok(None)
            } else if trimmed.chars().count() > MAX_ACTIVE_ROUTE_LENGTH {
                Err(format!(
                    "Active route must be {MAX_ACTIVE_ROUTE_LENGTH} characters or fewer"
                ))
            } else {
                Ok(Some(trimmed.to_string()))
            }
        }
        None => Ok(None),
    }
}

fn generate_id(prefix: &str) -> String {
    format!(
        "{}-{}-{}",
        prefix,
        Utc::now().timestamp_millis(),
        process::id()
    )
}
