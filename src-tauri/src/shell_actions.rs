use crate::app_paths::{path_to_string, AppPaths};
use crate::engine::engine_paths;
use crate::logging::{
    diagnostics_dir, logs_dir, new_log_entry, write_audit_log_event, write_log_entry,
};
use serde::Serialize;
use std::fs;
use std::path::{Path, PathBuf};
use std::process::Command;
use std::time::{SystemTime, UNIX_EPOCH};

#[derive(Debug, Clone, Serialize)]
pub struct OpenFolderResult {
    pub ok: bool,
    pub key: String,
    pub path: String,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct ManagedFolderInfo {
    pub key: String,
    pub label: String,
    pub path: String,
    pub exists: bool,
}

#[derive(Debug, Clone, Serialize)]
pub struct ManagedFolderPaths {
    pub folders: Vec<ManagedFolderInfo>,
}

struct ManagedFolderTarget {
    key: &'static str,
    label: &'static str,
    path: PathBuf,
    create_if_missing: bool,
}

const MANAGED_FOLDER_KEYS: &[(&str, &str)] = &[
    ("app_data", "AppData"),
    ("logs", "Logs"),
    ("diagnostics", "Diagnostics"),
    ("latest_diagnostic_report", "Latest Diagnostic Report"),
    ("recovery", "Recovery"),
    ("recovery_snapshots", "Recovery Snapshots"),
    ("engine", "Real-ESRGAN Engine"),
    ("updates", "Updates"),
    ("updates_downloaded", "Downloaded Updates"),
    ("updates_staged", "Staged Updates"),
    ("updates_rollback", "Rollback Updates"),
];

pub fn get_managed_folder_paths_for_paths(
    paths: &AppPaths,
) -> Result<ManagedFolderPaths, String> {
    let mut folders = Vec::new();

    for (key, label) in MANAGED_FOLDER_KEYS {
        if *key == "latest_diagnostic_report" {
            let latest = latest_diagnostic_report_dir(paths)?;
            folders.push(ManagedFolderInfo {
                key: (*key).to_string(),
                label: (*label).to_string(),
                path: latest
                    .as_ref()
                    .map(|path| path_to_string(path))
                    .unwrap_or_default(),
                exists: latest.as_ref().map(|path| path.is_dir()).unwrap_or(false),
            });
            continue;
        }

        let target = managed_folder_target(paths, key)?;
        folders.push(ManagedFolderInfo {
            key: target.key.to_string(),
            label: target.label.to_string(),
            path: path_to_string(&target.path),
            exists: target.path.is_dir(),
        });
    }

    Ok(ManagedFolderPaths { folders })
}

pub fn open_managed_folder_for_paths(
    paths: &AppPaths,
    key: String,
) -> Result<OpenFolderResult, String> {
    let normalized_key = key.trim().to_lowercase();
    let target = managed_folder_target(paths, &normalized_key)?;

    if target.create_if_missing {
        fs::create_dir_all(&target.path).map_err(|error| {
            format!(
                "Unable to create managed folder {}: {error}",
                path_to_string(&target.path)
            )
        })?;
    }

    if !target.path.is_dir() {
        return Err(format!(
            "Managed folder is not available yet: {}",
            target.label
        ));
    }

    ensure_target_inside_app_data(paths, &target.path)?;
    open_folder(&target.path)?;

    let metadata = serde_json::json!({
        "key": target.key,
        "path": path_to_string(&target.path),
        "allowlisted": true
    });
    write_log_entry(
        paths,
        &new_log_entry(
            "info",
            "frontend",
            "managed_folder_opened",
            "Managed folder opened",
            Some(metadata.clone()),
        )?,
    )?;
    write_audit_log_event(
        paths,
        "managed_folder_opened",
        "Managed folder opened",
        Some(metadata),
    )?;

    Ok(OpenFolderResult {
        ok: true,
        key: target.key.to_string(),
        path: path_to_string(&target.path),
        message: format!("Opened {} folder", target.label),
    })
}

fn managed_folder_target(paths: &AppPaths, key: &str) -> Result<ManagedFolderTarget, String> {
    match key {
        "app_data" => Ok(target("app_data", "AppData", paths.app_data_dir.clone(), true)),
        "logs" => Ok(target("logs", "Logs", logs_dir(paths), true)),
        "diagnostics" => Ok(target("diagnostics", "Diagnostics", diagnostics_dir(paths), true)),
        "latest_diagnostic_report" => latest_diagnostic_report_dir(paths)?
            .map(|path| target("latest_diagnostic_report", "Latest Diagnostic Report", path, false))
            .ok_or_else(|| "No diagnostic report folder found yet".to_string()),
        "recovery" => Ok(target(
            "recovery",
            "Recovery",
            paths.app_data_dir.join("jobs").join("recovery"),
            true,
        )),
        "recovery_snapshots" => Ok(target(
            "recovery_snapshots",
            "Recovery Snapshots",
            paths
                .app_data_dir
                .join("jobs")
                .join("recovery")
                .join("snapshots"),
            true,
        )),
        "engine" => Ok(target(
            "engine",
            "Real-ESRGAN Engine",
            engine_paths(paths).engine_dir,
            true,
        )),
        "updates" => Ok(target(
            "updates",
            "Updates",
            paths.app_data_dir.join("updates"),
            true,
        )),
        "updates_downloaded" => Ok(target(
            "updates_downloaded",
            "Downloaded Updates",
            paths.app_data_dir.join("updates").join("downloaded"),
            true,
        )),
        "updates_staged" => Ok(target(
            "updates_staged",
            "Staged Updates",
            paths.app_data_dir.join("updates").join("staged"),
            true,
        )),
        "updates_rollback" => Ok(target(
            "updates_rollback",
            "Rollback Updates",
            paths.app_data_dir.join("updates").join("rollback"),
            true,
        )),
        _ => Err(format!("Managed folder key is not allowlisted: {key}")),
    }
}

fn target(
    key: &'static str,
    label: &'static str,
    path: PathBuf,
    create_if_missing: bool,
) -> ManagedFolderTarget {
    ManagedFolderTarget {
        key,
        label,
        path,
        create_if_missing,
    }
}

fn latest_diagnostic_report_dir(paths: &AppPaths) -> Result<Option<PathBuf>, String> {
    let diagnostics = diagnostics_dir(paths);
    if !diagnostics.is_dir() {
        return Ok(None);
    }

    let mut candidates: Vec<(SystemTime, PathBuf)> = Vec::new();
    for entry in fs::read_dir(&diagnostics).map_err(|error| {
        format!(
            "Unable to read diagnostics folder {}: {error}",
            path_to_string(&diagnostics)
        )
    })? {
        let entry = entry.map_err(|error| format!("Unable to inspect diagnostics entry: {error}"))?;
        let file_name = entry.file_name().to_string_lossy().into_owned();
        if !file_name.starts_with("report-") {
            continue;
        }

        let path = entry.path();
        let metadata = fs::symlink_metadata(&path).map_err(|error| {
            format!(
                "Unable to inspect diagnostic report folder {}: {error}",
                path_to_string(&path)
            )
        })?;
        if metadata.file_type().is_dir() {
            candidates.push((metadata.modified().unwrap_or(UNIX_EPOCH), path));
        }
    }

    candidates.sort_by(|left, right| {
        right
            .0
            .cmp(&left.0)
            .then_with(|| path_to_string(&right.1).cmp(&path_to_string(&left.1)))
    });

    Ok(candidates.into_iter().map(|(_modified, path)| path).next())
}

fn ensure_target_inside_app_data(paths: &AppPaths, target_path: &Path) -> Result<(), String> {
    let app_root = paths.app_data_dir.canonicalize().map_err(|error| {
        format!(
            "Unable to inspect AppData folder {}: {error}",
            path_to_string(&paths.app_data_dir)
        )
    })?;
    let target = target_path.canonicalize().map_err(|error| {
        format!(
            "Unable to inspect managed folder {}: {error}",
            path_to_string(target_path)
        )
    })?;

    if target == app_root || target.starts_with(&app_root) {
        Ok(())
    } else {
        Err("Managed folder target resolved outside AppData and was blocked".to_string())
    }
}

fn open_folder(path: &Path) -> Result<(), String> {
    let mut command = platform_open_command(path);

    #[cfg(windows)]
    {
        use std::os::windows::process::CommandExt;
        command.creation_flags(0x08000000);
    }

    command.spawn().map_err(|error| {
        format!(
            "Unable to open managed folder {}: {error}",
            path_to_string(path)
        )
    })?;

    Ok(())
}

#[cfg(target_os = "windows")]
fn platform_open_command(path: &Path) -> Command {
    let mut command = Command::new("explorer");
    command.arg(path);
    command
}

#[cfg(target_os = "macos")]
fn platform_open_command(path: &Path) -> Command {
    let mut command = Command::new("open");
    command.arg(path);
    command
}

#[cfg(all(unix, not(target_os = "macos")))]
fn platform_open_command(path: &Path) -> Command {
    let mut command = Command::new("xdg-open");
    command.arg(path);
    command
}
