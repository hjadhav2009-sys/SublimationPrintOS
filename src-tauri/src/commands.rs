use crate::app_paths::{path_to_string, required_folder_descriptors, resolve_app_paths};
use crate::database::{
    get_database_status_for_paths, initialize_database, run_database_health_check_for_paths,
    DatabaseHealthCheck, DatabaseStatus,
};
use crate::settings::{
    get_app_settings_for_paths, get_settings_summary_for_paths, reset_app_settings_for_paths,
    save_app_settings_for_paths, validate_app_settings_for_payload, AppSettings,
    SettingsSaveResult, SettingsSummary, SettingsValidationResult,
};
use crate::storage::{ensure_storage, get_storage_status_for_paths, StorageStatus};
use serde::Serialize;
use tauri::AppHandle;

#[derive(Serialize)]
pub struct PhaseInfo {
    phase: String,
    name: String,
    status: String,
    local_first: bool,
}

#[derive(Serialize)]
pub struct FoundationStatus {
    ok: bool,
    app_data_dir: String,
    database_path: String,
    folders_created: usize,
    folders_existing: usize,
    folders_missing: usize,
    schema_version: i64,
    storage_ok: bool,
    database_ok: bool,
    message: String,
}

#[tauri::command]
pub fn get_app_version() -> String {
    env!("CARGO_PKG_VERSION").to_string()
}

#[tauri::command]
pub fn get_phase_info() -> PhaseInfo {
    PhaseInfo {
        phase: "Phase 0".to_string(),
        name: "Foundation".to_string(),
        status: "Scaffold only".to_string(),
        local_first: true,
    }
}

#[tauri::command]
pub fn ping_backend() -> String {
    "pong".to_string()
}

#[tauri::command]
pub fn initialize_foundation(app: AppHandle) -> Result<FoundationStatus, String> {
    let (paths, storage_summary, schema_version) = ensure_foundation_ready(&app)?;
    let database_status = get_database_status_for_paths(&paths);
    let ok = storage_summary.status.ok && database_status.ok;

    Ok(FoundationStatus {
        ok,
        app_data_dir: path_to_string(&paths.app_data_dir),
        database_path: path_to_string(&paths.database_path),
        folders_created: storage_summary.folders_created,
        folders_existing: storage_summary.folders_existing,
        folders_missing: storage_summary.status.missing_folders_count,
        schema_version,
        storage_ok: storage_summary.status.ok,
        database_ok: database_status.ok,
        message: if ok {
            "Foundation initialized".to_string()
        } else {
            "Foundation initialized with warnings".to_string()
        },
    })
}

#[tauri::command]
pub fn get_storage_status(app: AppHandle) -> Result<StorageStatus, String> {
    let paths = resolve_app_paths(&app)?;
    Ok(get_storage_status_for_paths(&paths))
}

#[tauri::command]
pub fn get_database_status(app: AppHandle) -> Result<DatabaseStatus, String> {
    let paths = resolve_app_paths(&app)?;
    Ok(get_database_status_for_paths(&paths))
}

#[tauri::command]
pub fn run_database_health_check(app: AppHandle) -> Result<DatabaseHealthCheck, String> {
    let paths = resolve_app_paths(&app)?;
    Ok(run_database_health_check_for_paths(&paths))
}

#[tauri::command]
pub fn get_required_app_folders() -> Vec<crate::app_paths::AppFolderDescriptor> {
    required_folder_descriptors()
}

#[tauri::command]
pub fn get_app_settings(app: AppHandle) -> Result<AppSettings, String> {
    let (paths, _storage_summary, _schema_version) = ensure_foundation_ready(&app)?;
    get_app_settings_for_paths(&paths)
}

#[tauri::command]
pub fn save_app_settings(
    app: AppHandle,
    settings: AppSettings,
) -> Result<SettingsSaveResult, String> {
    let (paths, _storage_summary, _schema_version) = ensure_foundation_ready(&app)?;
    save_app_settings_for_paths(&paths, settings)
}

#[tauri::command]
pub fn reset_app_settings(app: AppHandle) -> Result<AppSettings, String> {
    let (paths, _storage_summary, _schema_version) = ensure_foundation_ready(&app)?;
    reset_app_settings_for_paths(&paths)
}

#[tauri::command]
pub fn get_settings_summary(app: AppHandle) -> Result<SettingsSummary, String> {
    let (paths, _storage_summary, _schema_version) = ensure_foundation_ready(&app)?;
    get_settings_summary_for_paths(&paths)
}

#[tauri::command]
pub fn validate_app_settings(settings: AppSettings) -> SettingsValidationResult {
    validate_app_settings_for_payload(settings)
}

fn ensure_foundation_ready(
    app: &AppHandle,
) -> Result<(crate::app_paths::AppPaths, crate::storage::StorageInitSummary, i64), String> {
    let paths = resolve_app_paths(app)?;
    let storage_summary = ensure_storage(&paths)?;
    let schema_version = initialize_database(&paths)?;
    Ok((paths, storage_summary, schema_version))
}
