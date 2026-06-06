use serde::Serialize;
use std::path::{Path, PathBuf};
use tauri::{AppHandle, Manager};

const APP_DIR_NAME: &str = "SublimationPrintOS";
const DATABASE_FILE_NAME: &str = "app.db";

const REQUIRED_FOLDERS: &[(&str, &str)] = &[
    ("settings", "settings"),
    ("assets", "assets"),
    ("assets_raw", "assets/raw"),
    ("assets_upscaled", "assets/upscaled"),
    ("assets_approved", "assets/approved"),
    ("assets_rejected", "assets/rejected"),
    ("assets_thumbnails", "assets/thumbnails"),
    ("assets_thumbnails_small", "assets/thumbnails/small"),
    ("assets_thumbnails_medium", "assets/thumbnails/medium"),
    ("assets_thumbnails_large", "assets/thumbnails/large"),
    ("assets_temp", "assets/temp"),
    ("models", "models"),
    ("models_realesrgan", "models/realesrgan"),
    ("jobs", "jobs"),
    ("jobs_upscale", "jobs/upscale"),
    ("jobs_exports", "jobs/exports"),
    ("jobs_recovery", "jobs/recovery"),
    ("logs", "logs"),
    ("backups", "backups"),
    ("backups_daily", "backups/daily"),
    ("backups_before_update", "backups/before-update"),
    ("backups_before_migration", "backups/before-migration"),
    ("updates", "updates"),
    ("updates_downloaded", "updates/downloaded"),
    ("updates_staged", "updates/staged"),
    ("updates_rollback", "updates/rollback"),
    ("diagnostics", "diagnostics"),
];

#[derive(Debug, Clone)]
pub struct AppPaths {
    pub app_data_dir: PathBuf,
    pub database_path: PathBuf,
}

#[derive(Debug, Clone, Serialize)]
pub struct AppFolderDescriptor {
    pub key: String,
    pub relative_path: String,
}

pub fn resolve_app_paths(app: &AppHandle) -> Result<AppPaths, String> {
    let data_dir = app
        .path()
        .data_dir()
        .map_err(|error| format!("Unable to resolve OS data directory: {error}"))?;
    let app_data_dir = data_dir.join(APP_DIR_NAME);
    let database_path = app_data_dir.join(DATABASE_FILE_NAME);

    Ok(AppPaths {
        app_data_dir,
        database_path,
    })
}

pub fn required_folder_descriptors() -> Vec<AppFolderDescriptor> {
    REQUIRED_FOLDERS
        .iter()
        .map(|(key, relative_path)| AppFolderDescriptor {
            key: (*key).to_string(),
            relative_path: (*relative_path).to_string(),
        })
        .collect()
}

pub fn required_folder_paths(app_data_dir: &Path) -> Vec<(AppFolderDescriptor, PathBuf)> {
    required_folder_descriptors()
        .into_iter()
        .map(|descriptor| {
            let path = app_data_dir.join(relative_to_platform_path(&descriptor.relative_path));
            (descriptor, path)
        })
        .collect()
}

pub fn path_to_string(path: &Path) -> String {
    path.to_string_lossy().into_owned()
}

fn relative_to_platform_path(relative_path: &str) -> PathBuf {
    relative_path.split('/').collect()
}
