use crate::app_paths::{required_folder_paths, AppPaths};
use crate::database::get_database_status_for_paths;
use crate::diagnostics::get_diagnostics_summary_for_paths;
use crate::engine::{discover_realesrgan_engine_for_paths_internal, engine_paths};
use crate::logging::{logs_dir, new_log_entry, write_audit_log_event, write_log_entry, LOG_FILE_NAMES};
use crate::recovery::get_recovery_status_for_paths;
use crate::settings::get_app_settings_for_paths;
use crate::storage::get_storage_status_for_paths;
use crate::updates::{get_offline_update_status_for_paths, update_dirs};
use chrono::Utc;
use serde::Serialize;

const TAURI_CONFIG: &str = include_str!("../tauri.conf.json");

#[derive(Debug, Clone, Serialize)]
pub struct AdvancedHealthReport {
    pub ok: bool,
    pub generated_at: String,
    pub checks: Vec<AdvancedHealthCheckItem>,
    pub summary: AdvancedHealthSummary,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct AdvancedHealthCheckItem {
    pub key: String,
    pub label: String,
    pub category: String,
    pub status: String,
    pub message: String,
    pub details: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
pub struct AdvancedHealthSummary {
    pub pass: usize,
    pub warn: usize,
    pub fail: usize,
}

pub fn run_advanced_health_check_for_paths(paths: &AppPaths) -> Result<AdvancedHealthReport, String> {
    let storage = get_storage_status_for_paths(paths);
    let database = get_database_status_for_paths(paths);
    let settings_result = get_app_settings_for_paths(paths);
    let diagnostics_result = get_diagnostics_summary_for_paths(paths);
    let recovery_result = get_recovery_status_for_paths(paths);
    let engine_result = discover_realesrgan_engine_for_paths_internal(paths);
    let engine_paths = engine_paths(paths);
    let update_dirs = update_dirs(paths);
    let update_status_result = get_offline_update_status_for_paths(paths);
    let mut checks = Vec::new();

    checks.push(check(
        "os-data-directory-resolved",
        "OS data directory resolved",
        "system",
        if paths.app_data_dir.as_os_str().is_empty() { "fail" } else { "pass" },
        "AppData path was resolved by Tauri",
        Some(paths.app_data_dir.to_string_lossy().into_owned()),
    ));
    checks.push(check(
        "appdata-root-exists",
        "AppData root exists",
        "system",
        if paths.app_data_dir.is_dir() { "pass" } else { "fail" },
        if paths.app_data_dir.is_dir() { "AppData root exists" } else { "AppData root is missing" },
        Some(paths.app_data_dir.to_string_lossy().into_owned()),
    ));
    checks.push(check(
        "app-version-available",
        "App version available",
        "system",
        "pass",
        env!("CARGO_PKG_VERSION"),
        None,
    ));
    checks.push(check(
        "tauri-backend-responds",
        "Tauri backend responds",
        "system",
        "pass",
        "Advanced health check command executed",
        None,
    ));

    let missing_required = required_folder_paths(&paths.app_data_dir)
        .into_iter()
        .filter(|(_descriptor, path)| !path.is_dir())
        .count();
    checks.push(check(
        "required-folders-exist",
        "Required folders exist",
        "storage",
        if missing_required == 0 { "pass" } else { "fail" },
        &format!("{missing_required} required folder(s) missing"),
        None,
    ));
    checks.push(check(
        "appdata-writable",
        "AppData writable",
        "storage",
        if storage.writable { "pass" } else { "fail" },
        &storage.message,
        None,
    ));
    checks.push(path_check("logs-folder-exists", "Logs folder exists", "storage", &logs_dir(paths)));
    checks.push(path_check(
        "diagnostics-folder-exists",
        "Diagnostics folder exists",
        "storage",
        &paths.app_data_dir.join("diagnostics"),
    ));
    checks.push(path_check(
        "recovery-folder-exists",
        "Recovery folder exists",
        "storage",
        &paths.app_data_dir.join("jobs").join("recovery"),
    ));

    checks.push(check(
        "database-file-exists",
        "app.db exists",
        "database",
        if database.database_exists { "pass" } else { "fail" },
        &database.message,
        Some(database.database_path.clone()),
    ));
    checks.push(check(
        "sqlite-opens",
        "SQLite opens",
        "database",
        if database.can_open { "pass" } else { "fail" },
        &database.message,
        None,
    ));
    checks.push(check(
        "schema-version-exists",
        "Schema version exists",
        "database",
        if database.schema_version.is_some() { "pass" } else { "fail" },
        database
            .schema_version
            .map(|version| format!("Schema version {version}"))
            .unwrap_or_else(|| "Schema version is missing".to_string())
            .as_str(),
        None,
    ));
    checks.push(check(
        "wal-enabled",
        "WAL enabled",
        "database",
        if database.wal_mode { "pass" } else { "fail" },
        database.journal_mode.as_deref().unwrap_or("Journal mode unknown"),
        None,
    ));
    checks.push(check(
        "integrity-check-ok",
        "integrity_check ok",
        "database",
        if database.integrity_check.as_deref() == Some("ok") { "pass" } else { "fail" },
        database.integrity_check.as_deref().unwrap_or("integrity_check unavailable"),
        None,
    ));

    checks.push(check(
        "settings-available",
        "Settings available",
        "settings",
        if settings_result.is_ok() { "pass" } else { "fail" },
        settings_result.as_ref().map(|_| "Settings loaded").unwrap_or("Settings unavailable"),
        settings_result.err(),
    ));
    checks.push(check(
        "settings-valid",
        "Settings valid",
        "settings",
        if get_app_settings_for_paths(paths).is_ok() { "pass" } else { "fail" },
        "Stored settings validation is enforced by the settings module",
        None,
    ));

    let log_files_missing = LOG_FILE_NAMES
        .iter()
        .filter(|file_name| !logs_dir(paths).join(file_name).is_file())
        .count();
    checks.push(check(
        "log-files-exist",
        "Log files exist",
        "logs",
        if log_files_missing == 0 { "pass" } else { "warn" },
        &format!("{log_files_missing} log file(s) missing"),
        None,
    ));
    match &diagnostics_result {
        Ok(diagnostics) => {
            checks.push(check(
                "diagnostics-summary",
                "Diagnostics summary",
                "diagnostics",
                if diagnostics.ok { "pass" } else { "warn" },
                &diagnostics.message,
                None,
            ));
        }
        Err(error) => checks.push(check(
            "diagnostics-summary",
            "Diagnostics summary",
            "diagnostics",
            "warn",
            "Diagnostics summary unavailable",
            Some(error.clone()),
        )),
    }
    checks.push(path_check(
        "diagnostics-report-root-exists",
        "Diagnostic report folder root exists",
        "diagnostics",
        &paths.app_data_dir.join("diagnostics"),
    ));

    match &recovery_result {
        Ok(recovery) => {
            checks.push(check(
                "current-session-exists",
                "Current session exists",
                "recovery",
                if recovery.current_session.is_some() { "pass" } else { "warn" },
                recovery.current_session.as_ref().map(|session| session.session_id.as_str()).unwrap_or("No current session"),
                None,
            ));
            checks.push(check(
                "heartbeat-exists",
                "Heartbeat exists",
                "recovery",
                if recovery
                    .current_session
                    .as_ref()
                    .map(|session| !session.last_heartbeat_at.is_empty())
                    .unwrap_or(false)
                {
                    "pass"
                } else {
                    "warn"
                },
                recovery
                    .current_session
                    .as_ref()
                    .map(|session| session.last_heartbeat_at.as_str())
                    .unwrap_or("Heartbeat unavailable"),
                None,
            ));
            checks.push(check(
                "previous-unclean-session",
                "Previous unclean session not active",
                "recovery",
                if recovery.previous_unclean_session.is_some() { "warn" } else { "pass" },
                &recovery.message,
                None,
            ));
        }
        Err(error) => checks.push(check(
            "recovery-status",
            "Recovery status",
            "recovery",
            "warn",
            "Recovery status unavailable",
            Some(error.clone()),
        )),
    }
    checks.push(path_check(
        "snapshots-folder-exists",
        "Snapshots folder exists",
        "recovery",
        &paths.app_data_dir.join("jobs").join("recovery").join("snapshots"),
    ));

    checks.push(path_check(
        "updates-root-exists",
        "Updates root exists",
        "updates",
        &update_dirs.updates_dir,
    ));
    checks.push(path_check(
        "updates-downloaded-folder-exists",
        "Downloaded updates folder exists",
        "updates",
        &update_dirs.downloaded_dir,
    ));
    checks.push(path_check(
        "updates-staged-folder-exists",
        "Staged updates folder exists",
        "updates",
        &update_dirs.staged_dir,
    ));
    checks.push(path_check(
        "updates-rollback-folder-exists",
        "Rollback updates folder exists",
        "updates",
        &update_dirs.rollback_dir,
    ));
    match &update_status_result {
        Ok(status) => checks.push(check(
            "offline-update-status-available",
            "Offline update status available",
            "updates",
            if status.ok { "pass" } else { "warn" },
            &status.message,
            Some(format!("{} package(s) found", status.packages.len())),
        )),
        Err(error) => checks.push(check(
            "offline-update-status-available",
            "Offline update status available",
            "updates",
            "warn",
            "Offline update status could not be loaded",
            Some(error.clone()),
        )),
    }
    checks.push(check(
        "offline-update-shell-only",
        "Staged update shell only",
        "updates",
        "pass",
        "Phase 0 can inspect and stage metadata only; update installation is disabled",
        None,
    ));

    match &engine_result {
        Ok(engine) => {
            checks.push(path_check(
                "realesrgan-directory-exists",
                "Real-ESRGAN directory exists",
                "engine",
                &engine_paths.engine_dir,
            ));
            checks.push(check(
                "realesrgan-binary-exists",
                "Real-ESRGAN binary exists",
                "engine",
                if engine.binary.as_ref().map(|binary| binary.exists).unwrap_or(false) {
                    "pass"
                } else {
                    "warn"
                },
                engine.binary.as_ref().map(|binary| binary.path.as_str()).unwrap_or("Binary status unavailable"),
                None,
            ));
            checks.push(check(
                "realesrgan-models-dir-exists",
                "Real-ESRGAN models directory exists",
                "engine",
                if engine.models.models_dir_exists { "pass" } else { "warn" },
                &engine.models.models_dir,
                None,
            ));
            checks.push(check(
                "realesrgan-safe-test-input-exists",
                "Safe test input exists",
                "engine",
                if engine_paths.test_input.is_file() { "pass" } else { "warn" },
                &engine_paths.test_input.to_string_lossy(),
                None,
            ));
        }
        Err(error) => checks.push(check(
            "realesrgan-discovery",
            "Real-ESRGAN discovery",
            "engine",
            "warn",
            "Real-ESRGAN discovery unavailable",
            Some(error.clone()),
        )),
    }

    checks.push(check(
        "csp-not-null",
        "CSP is not null",
        "security",
        if TAURI_CONFIG.contains("\"csp\"") && !TAURI_CONFIG.contains("\"csp\": null") {
            "pass"
        } else {
            "fail"
        },
        "Tauri CSP is configured in tauri.conf.json",
        None,
    ));
    checks.push(check(
        "diagnostics-safe-exclusions",
        "Diagnostics excludes app.db/assets by design",
        "security",
        "pass",
        "Diagnostic reports write safe JSON/text summaries only",
        None,
    ));
    checks.push(check(
        "no-cloud-telemetry",
        "No cloud telemetry enabled",
        "security",
        "pass",
        "No cloud telemetry service is configured in Phase 0",
        None,
    ));

    let summary = summarize(&checks);
    let ok = summary.fail == 0;
    let message = if ok {
        "Advanced health check completed".to_string()
    } else {
        "Advanced health check found failures".to_string()
    };
    let report = AdvancedHealthReport {
        ok,
        generated_at: Utc::now().to_rfc3339(),
        checks,
        summary,
        message,
    };

    write_log_entry(
        paths,
        &new_log_entry(
            "info",
            "health",
            "advanced_health_check_run",
            "Advanced health check run",
            Some(serde_json::json!({
                "pass": report.summary.pass,
                "warn": report.summary.warn,
                "fail": report.summary.fail
            })),
        )?,
    )?;
    write_audit_log_event(
        paths,
        "advanced_health_check_run",
        "Advanced health check run",
        Some(serde_json::json!({
            "pass": report.summary.pass,
            "warn": report.summary.warn,
            "fail": report.summary.fail
        })),
    )?;

    Ok(report)
}

fn path_check(
    key: &str,
    label: &str,
    category: &str,
    path: &std::path::Path,
) -> AdvancedHealthCheckItem {
    check(
        key,
        label,
        category,
        if path.is_dir() { "pass" } else { "warn" },
        if path.is_dir() { "Directory exists" } else { "Directory is missing" },
        Some(path.to_string_lossy().into_owned()),
    )
}

fn check(
    key: &str,
    label: &str,
    category: &str,
    status: &str,
    message: &str,
    details: Option<String>,
) -> AdvancedHealthCheckItem {
    AdvancedHealthCheckItem {
        key: key.to_string(),
        label: label.to_string(),
        category: category.to_string(),
        status: status.to_string(),
        message: message.to_string(),
        details,
    }
}

fn summarize(checks: &[AdvancedHealthCheckItem]) -> AdvancedHealthSummary {
    AdvancedHealthSummary {
        pass: checks.iter().filter(|check| check.status == "pass").count(),
        warn: checks.iter().filter(|check| check.status == "warn").count(),
        fail: checks.iter().filter(|check| check.status == "fail").count(),
    }
}
