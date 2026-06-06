use crate::app_paths::{path_to_string, AppPaths};
use crate::logging::{new_log_entry, write_audit_log_event, write_log_entry};
use chrono::Utc;
use serde::{Deserialize, Serialize};
use serde_json::Value;
use std::fs;
use std::path::{Path, PathBuf};

const MANIFEST_FILE_NAME: &str = "update-manifest.json";
const README_FILE_NAME: &str = "README.txt";
const STAGE_INFO_FILE_NAME: &str = "stage-info.json";
const SAMPLE_FOLDER_NAME: &str = "sample-phase0-update";
const MAX_FOLDER_NAME_LENGTH: usize = 120;
const MAX_MANIFEST_BYTES: u64 = 256 * 1024;

#[derive(Debug, Clone)]
pub struct UpdateDirs {
    pub updates_dir: PathBuf,
    pub downloaded_dir: PathBuf,
    pub staged_dir: PathBuf,
    pub rollback_dir: PathBuf,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UpdateManifest {
    pub package_id: String,
    pub app_name: String,
    pub version: String,
    pub phase: String,
    pub created_at: String,
    pub channel: String,
    pub notes: String,
    pub requires_app_min_version: Option<String>,
    pub files: Vec<Value>,
}

#[derive(Debug, Clone, Serialize)]
pub struct OfflineUpdatePackage {
    pub folder_name: String,
    pub folder_path: String,
    pub manifest_exists: bool,
    pub manifest_valid: bool,
    pub manifest: Option<UpdateManifest>,
    pub errors: Vec<String>,
    pub warnings: Vec<String>,
}

#[derive(Debug, Clone, Serialize)]
pub struct OfflineUpdateStatus {
    pub ok: bool,
    pub updates_dir: String,
    pub downloaded_dir: String,
    pub staged_dir: String,
    pub rollback_dir: String,
    pub packages: Vec<OfflineUpdatePackage>,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct StageUpdateResult {
    pub ok: bool,
    pub staged_package_dir: Option<String>,
    pub message: String,
}

pub fn update_dirs(paths: &AppPaths) -> UpdateDirs {
    let updates_dir = paths.app_data_dir.join("updates");
    UpdateDirs {
        downloaded_dir: updates_dir.join("downloaded"),
        staged_dir: updates_dir.join("staged"),
        rollback_dir: updates_dir.join("rollback"),
        updates_dir,
    }
}

pub fn get_offline_update_status_for_paths(
    paths: &AppPaths,
) -> Result<OfflineUpdateStatus, String> {
    let packages = scan_offline_update_packages(paths)?;
    Ok(status_with_message(paths, packages, None))
}

pub fn validate_offline_update_package_for_paths(
    paths: &AppPaths,
    folder_name: String,
) -> Result<OfflineUpdatePackage, String> {
    let folder_name = validate_folder_name(folder_name)?;
    ensure_update_dirs(paths)?;
    Ok(package_status(paths, &folder_name, &update_dirs(paths).downloaded_dir.join(&folder_name)))
}

pub fn stage_offline_update_package_for_paths(
    paths: &AppPaths,
    folder_name: String,
) -> Result<StageUpdateResult, String> {
    let folder_name = validate_folder_name(folder_name)?;
    ensure_update_dirs(paths)?;
    let dirs = update_dirs(paths);
    let source_dir = dirs.downloaded_dir.join(&folder_name);
    let package = package_status(paths, &folder_name, &source_dir);

    if !package.manifest_valid {
        return Ok(StageUpdateResult {
            ok: false,
            staged_package_dir: None,
            message: format!(
                "Offline update package is not valid: {}",
                package.errors.join("; ")
            ),
        });
    }

    let staged_package_dir = dirs.staged_dir.join(&folder_name);
    reset_directory_contents(&staged_package_dir)?;

    fs::copy(
        source_dir.join(MANIFEST_FILE_NAME),
        staged_package_dir.join(MANIFEST_FILE_NAME),
    )
    .map_err(|error| format!("Unable to stage update manifest: {error}"))?;

    let readme_source = source_dir.join(README_FILE_NAME);
    if readme_source.is_file() {
        fs::copy(&readme_source, staged_package_dir.join(README_FILE_NAME))
            .map_err(|error| format!("Unable to stage update README.txt: {error}"))?;
    }

    let stage_info = serde_json::json!({
        "staged_at": Utc::now().to_rfc3339(),
        "source_folder": folder_name,
        "phase0_shell_only": true,
        "payload_copied": false
    });
    fs::write(
        staged_package_dir.join(STAGE_INFO_FILE_NAME),
        serde_json::to_vec_pretty(&stage_info)
            .map_err(|error| format!("Unable to serialize stage info: {error}"))?,
    )
    .map_err(|error| format!("Unable to write stage-info.json: {error}"))?;

    let metadata = serde_json::json!({
        "folder_name": folder_name,
        "staged_package_dir": path_to_string(&staged_package_dir),
        "payload_copied": false,
        "phase0_shell_only": true
    });
    write_log_entry(
        paths,
        &new_log_entry(
            "info",
            "foundation",
            "offline_update_package_staged",
            "Offline update package metadata staged",
            Some(metadata.clone()),
        )?,
    )?;
    write_audit_log_event(
        paths,
        "offline_update_package_staged",
        "Offline update package metadata staged",
        Some(metadata),
    )?;

    Ok(StageUpdateResult {
        ok: true,
        staged_package_dir: Some(path_to_string(&staged_package_dir)),
        message: "Offline update metadata staged. Payload was not copied or executed.".to_string(),
    })
}

pub fn clear_staged_update_for_paths(
    paths: &AppPaths,
    confirm: String,
) -> Result<OfflineUpdateStatus, String> {
    if confirm != "CLEAR_STAGED_UPDATE" {
        return Err("Clear staged update confirmation did not match".to_string());
    }

    ensure_update_dirs(paths)?;
    let dirs = update_dirs(paths);
    clear_directory_contents(&dirs.staged_dir)?;

    let metadata = serde_json::json!({
        "staged_dir": path_to_string(&dirs.staged_dir),
        "downloaded_preserved": true,
        "rollback_preserved": true
    });
    write_log_entry(
        paths,
        &new_log_entry(
            "info",
            "foundation",
            "staged_update_cleared",
            "Staged offline update metadata cleared",
            Some(metadata.clone()),
        )?,
    )?;
    write_audit_log_event(
        paths,
        "staged_update_cleared",
        "Staged offline update metadata cleared",
        Some(metadata),
    )?;

    let packages = scan_offline_update_packages(paths)?;
    Ok(status_with_message(
        paths,
        packages,
        Some("Staged offline update metadata cleared".to_string()),
    ))
}

pub fn create_sample_update_manifest_for_paths(
    paths: &AppPaths,
) -> Result<OfflineUpdateStatus, String> {
    ensure_update_dirs(paths)?;
    let sample_dir = update_dirs(paths).downloaded_dir.join(SAMPLE_FOLDER_NAME);
    fs::create_dir_all(&sample_dir).map_err(|error| {
        format!(
            "Unable to create sample update folder {}: {error}",
            path_to_string(&sample_dir)
        )
    })?;

    let manifest_path = sample_dir.join(MANIFEST_FILE_NAME);
    let message = if manifest_path.exists() {
        "Sample update manifest already exists and was not overwritten".to_string()
    } else {
        let manifest = UpdateManifest {
            package_id: "spos-phase0-sample".to_string(),
            app_name: "SublimationPrintOS".to_string(),
            version: "0.1.1-sample".to_string(),
            phase: "Phase 0".to_string(),
            created_at: Utc::now().to_rfc3339(),
            channel: "test".to_string(),
            notes: "Local offline update test package. Phase 0 validates metadata only.".to_string(),
            requires_app_min_version: Some(env!("CARGO_PKG_VERSION").to_string()),
            files: Vec::new(),
        };
        fs::write(
            &manifest_path,
            serde_json::to_vec_pretty(&manifest)
                .map_err(|error| format!("Unable to serialize sample manifest: {error}"))?,
        )
        .map_err(|error| format!("Unable to write sample update manifest: {error}"))?;
        "Sample update manifest created".to_string()
    };

    let readme_path = sample_dir.join(README_FILE_NAME);
    if !readme_path.exists() {
        fs::write(
            &readme_path,
            "SublimationPrintOS Phase 0 sample update package.\n\nThis sample does not install anything, execute anything, or replace app files.\nOnly update-manifest.json and this README can be staged in Phase 0.\n",
        )
        .map_err(|error| format!("Unable to write sample update README.txt: {error}"))?;
    }

    let packages = scan_offline_update_packages(paths)?;
    Ok(status_with_message(paths, packages, Some(message)))
}

fn scan_offline_update_packages(paths: &AppPaths) -> Result<Vec<OfflineUpdatePackage>, String> {
    ensure_update_dirs(paths)?;
    let downloaded_dir = update_dirs(paths).downloaded_dir;
    let mut packages = Vec::new();

    for entry in fs::read_dir(&downloaded_dir).map_err(|error| {
        format!(
            "Unable to read downloaded updates folder {}: {error}",
            path_to_string(&downloaded_dir)
        )
    })? {
        let entry = entry.map_err(|error| format!("Unable to inspect update package entry: {error}"))?;
        let path = entry.path();
        let metadata = fs::symlink_metadata(&path).map_err(|error| {
            format!(
                "Unable to inspect update package folder {}: {error}",
                path_to_string(&path)
            )
        })?;
        if !metadata.file_type().is_dir() {
            continue;
        }

        let folder_name = entry.file_name().to_string_lossy().into_owned();
        packages.push(package_status(paths, &folder_name, &path));
    }

    packages.sort_by(|left, right| left.folder_name.cmp(&right.folder_name));
    Ok(packages)
}

fn package_status(
    _paths: &AppPaths,
    folder_name: &str,
    folder_path: &Path,
) -> OfflineUpdatePackage {
    let mut errors = Vec::new();
    let mut warnings = Vec::new();
    let manifest_path = folder_path.join(MANIFEST_FILE_NAME);
    let manifest_exists = manifest_path.is_file();
    let mut manifest = None;

    if !folder_path.is_dir() {
        errors.push("Package folder does not exist".to_string());
    }

    if !manifest_exists {
        errors.push("update-manifest.json is missing".to_string());
    } else {
        match read_manifest(&manifest_path) {
            Ok(parsed_manifest) => {
                validate_manifest(&parsed_manifest, &mut errors);
                manifest = Some(parsed_manifest);
            }
            Err(error) => errors.push(error),
        }
    }

    if folder_path.join("payload").exists() {
        warnings.push(
            "Payload folder is present; Phase 0 will not copy, execute, or install it".to_string(),
        );
    }

    let manifest_valid = errors.is_empty() && manifest.is_some();
    OfflineUpdatePackage {
        folder_name: folder_name.to_string(),
        folder_path: path_to_string(folder_path),
        manifest_exists,
        manifest_valid,
        manifest,
        errors,
        warnings,
    }
}

fn read_manifest(path: &Path) -> Result<UpdateManifest, String> {
    let metadata = fs::metadata(path)
        .map_err(|error| format!("Unable to inspect update-manifest.json: {error}"))?;
    if metadata.len() > MAX_MANIFEST_BYTES {
        return Err("update-manifest.json is too large for Phase 0 validation".to_string());
    }

    let content = fs::read_to_string(path)
        .map_err(|error| format!("Unable to read update-manifest.json: {error}"))?;
    serde_json::from_str::<UpdateManifest>(&content)
        .map_err(|error| format!("Unable to parse update-manifest.json: {error}"))
}

fn validate_manifest(manifest: &UpdateManifest, errors: &mut Vec<String>) {
    if manifest.app_name != "SublimationPrintOS" {
        errors.push("app_name must equal SublimationPrintOS".to_string());
    }

    validate_required_text("package_id", &manifest.package_id, 120, errors);
    validate_required_text("version", &manifest.version, 40, errors);
    validate_required_text("created_at", &manifest.created_at, 120, errors);

    if !manifest.phase.starts_with("Phase") {
        errors.push("phase must start with Phase".to_string());
    }

    if !["alpha", "beta", "stable", "test"].contains(&manifest.channel.as_str()) {
        errors.push("channel must be alpha, beta, stable, or test".to_string());
    }

    if manifest.notes.chars().count() > 1000 {
        errors.push("notes must be 1000 characters or fewer".to_string());
    }

    if let Some(version) = &manifest.requires_app_min_version {
        if version.chars().count() > 40 {
            errors.push("requires_app_min_version must be 40 characters or fewer".to_string());
        }
    }
}

fn validate_required_text(
    field: &str,
    value: &str,
    max_length: usize,
    errors: &mut Vec<String>,
) {
    if value.trim().is_empty() {
        errors.push(format!("{field} is required"));
    }

    if value.chars().count() > max_length {
        errors.push(format!("{field} must be {max_length} characters or fewer"));
    }
}

fn validate_folder_name(folder_name: String) -> Result<String, String> {
    let trimmed = folder_name.trim();
    if trimmed.is_empty() {
        return Err("Update package folder_name is required".to_string());
    }

    if trimmed.chars().count() > MAX_FOLDER_NAME_LENGTH {
        return Err(format!(
            "Update package folder_name must be {MAX_FOLDER_NAME_LENGTH} characters or fewer"
        ));
    }

    if trimmed == "." || trimmed.contains("..") || trimmed.contains('/') || trimmed.contains('\\') {
        return Err("Update package folder_name must be a first-level folder name only".to_string());
    }

    Ok(trimmed.to_string())
}

fn status_with_message(
    paths: &AppPaths,
    packages: Vec<OfflineUpdatePackage>,
    message_override: Option<String>,
) -> OfflineUpdateStatus {
    let dirs = update_dirs(paths);
    let invalid_count = packages.iter().filter(|package| !package.manifest_valid).count();
    let message = message_override.unwrap_or_else(|| {
        if packages.is_empty() {
            "No offline update packages found".to_string()
        } else if invalid_count > 0 {
            format!(
                "Found {} offline update package(s); {invalid_count} need attention",
                packages.len()
            )
        } else {
            format!("Found {} valid offline update package(s)", packages.len())
        }
    });

    OfflineUpdateStatus {
        ok: dirs.updates_dir.is_dir()
            && dirs.downloaded_dir.is_dir()
            && dirs.staged_dir.is_dir()
            && dirs.rollback_dir.is_dir(),
        updates_dir: path_to_string(&dirs.updates_dir),
        downloaded_dir: path_to_string(&dirs.downloaded_dir),
        staged_dir: path_to_string(&dirs.staged_dir),
        rollback_dir: path_to_string(&dirs.rollback_dir),
        packages,
        message,
    }
}

fn ensure_update_dirs(paths: &AppPaths) -> Result<(), String> {
    let dirs = update_dirs(paths);
    for dir in [
        &dirs.updates_dir,
        &dirs.downloaded_dir,
        &dirs.staged_dir,
        &dirs.rollback_dir,
    ] {
        fs::create_dir_all(dir)
            .map_err(|error| format!("Unable to create update folder {}: {error}", path_to_string(dir)))?;
    }

    Ok(())
}

fn reset_directory_contents(dir: &Path) -> Result<(), String> {
    fs::create_dir_all(dir).map_err(|error| {
        format!(
            "Unable to create staged update folder {}: {error}",
            path_to_string(dir)
        )
    })?;
    clear_directory_contents(dir)
}

fn clear_directory_contents(dir: &Path) -> Result<(), String> {
    if !dir.is_dir() {
        return Ok(());
    }

    for entry in fs::read_dir(dir)
        .map_err(|error| format!("Unable to read folder {}: {error}", path_to_string(dir)))?
    {
        let entry = entry.map_err(|error| format!("Unable to inspect folder entry: {error}"))?;
        let path = entry.path();
        let metadata = fs::symlink_metadata(&path)
            .map_err(|error| format!("Unable to inspect {}: {error}", path_to_string(&path)))?;
        if metadata.file_type().is_dir() {
            fs::remove_dir_all(&path)
                .map_err(|error| format!("Unable to remove folder {}: {error}", path_to_string(&path)))?;
        } else {
            fs::remove_file(&path)
                .map_err(|error| format!("Unable to remove file {}: {error}", path_to_string(&path)))?;
        }
    }

    Ok(())
}
