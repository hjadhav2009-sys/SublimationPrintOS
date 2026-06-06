use crate::app_paths::{path_to_string, AppPaths};
use crate::logging::{new_log_entry, write_audit_log_event, write_log_entry};
use chrono::Utc;
use serde::{Deserialize, Serialize};
use serde_json::Value;
use std::fs;
use std::io::ErrorKind;
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
    let dirs = update_dirs(paths);
    let source_dir = dirs.downloaded_dir.join(&folder_name);

    if let Err(error) =
        ensure_real_directory_inside(&dirs.downloaded_dir, &source_dir, "Update package folder")
    {
        return Ok(package_error(&folder_name, &source_dir, error));
    }

    Ok(package_status(paths, &folder_name, &source_dir))
}

pub fn stage_offline_update_package_for_paths(
    paths: &AppPaths,
    folder_name: String,
) -> Result<StageUpdateResult, String> {
    let folder_name = validate_folder_name(folder_name)?;
    ensure_update_dirs(paths)?;
    let dirs = update_dirs(paths);
    let source_dir = dirs.downloaded_dir.join(&folder_name);
    ensure_real_directory_inside(&dirs.downloaded_dir, &source_dir, "Update package folder")?;

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

    let manifest_source = source_dir.join(MANIFEST_FILE_NAME);
    ensure_regular_file_inside(&source_dir, &manifest_source, "update-manifest.json")?;
    ensure_real_directory_inside(&dirs.updates_dir, &dirs.staged_dir, "updates/staged")?;
    let staged_package_dir = dirs.staged_dir.join(&folder_name);
    reset_directory_contents(&dirs.staged_dir, &staged_package_dir, "Staged package folder")?;

    fs::copy(
        &manifest_source,
        staged_package_dir.join(MANIFEST_FILE_NAME),
    )
    .map_err(|error| format!("Unable to stage update manifest: {error}"))?;

    let readme_source = source_dir.join(README_FILE_NAME);
    match fs::symlink_metadata(&readme_source) {
        Ok(_) => {
            ensure_regular_file_inside(&source_dir, &readme_source, "README.txt")?;
            fs::copy(&readme_source, staged_package_dir.join(README_FILE_NAME))
                .map_err(|error| format!("Unable to stage update README.txt: {error}"))?;
        }
        Err(error) if error.kind() == ErrorKind::NotFound => {}
        Err(error) => return Err(format!("Unable to inspect README.txt: {error}")),
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
    ensure_real_directory_inside(&dirs.updates_dir, &dirs.staged_dir, "updates/staged")?;
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
    let dirs = update_dirs(paths);
    let sample_dir = dirs.downloaded_dir.join(SAMPLE_FOLDER_NAME);
    ensure_child_path_inside_parent_for_creation(
        &dirs.downloaded_dir,
        &sample_dir,
        "Sample update folder",
    )?;
    ensure_directory_exists_without_symlink(&sample_dir, "Sample update folder")?;
    ensure_real_directory_inside(&dirs.downloaded_dir, &sample_dir, "Sample update folder")?;

    let manifest_path = sample_dir.join(MANIFEST_FILE_NAME);
    let message = match fs::symlink_metadata(&manifest_path) {
        Ok(metadata) if metadata.file_type().is_symlink() => {
            return Err("update-manifest.json is a symlink and was blocked".to_string());
        }
        Ok(metadata) if metadata.file_type().is_file() => {
            ensure_regular_file_inside(&sample_dir, &manifest_path, "update-manifest.json")?;
            "Sample update manifest already exists and was not overwritten".to_string()
        }
        Ok(_) => return Err("update-manifest.json exists but is not a regular file".to_string()),
        Err(error) if error.kind() == ErrorKind::NotFound => {
            ensure_child_path_inside_parent_for_creation(
                &sample_dir,
                &manifest_path,
                "update-manifest.json",
            )?;
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
        }
        Err(error) => return Err(format!("Unable to inspect update-manifest.json: {error}")),
    };

    let readme_path = sample_dir.join(README_FILE_NAME);
    match fs::symlink_metadata(&readme_path) {
        Ok(metadata) if metadata.file_type().is_symlink() => {
            return Err("README.txt is a symlink and was blocked".to_string());
        }
        Ok(metadata) if metadata.file_type().is_file() => {
            ensure_regular_file_inside(&sample_dir, &readme_path, "README.txt")?;
        }
        Ok(_) => return Err("README.txt exists but is not a regular file".to_string()),
        Err(error) if error.kind() == ErrorKind::NotFound => {
            ensure_child_path_inside_parent_for_creation(&sample_dir, &readme_path, "README.txt")?;
            fs::write(
                &readme_path,
                "SublimationPrintOS Phase 0 sample update package.\n\nThis sample does not install anything, execute anything, or replace app files.\nOnly update-manifest.json and this README can be staged in Phase 0.\n",
            )
            .map_err(|error| format!("Unable to write sample update README.txt: {error}"))?;
        }
        Err(error) => return Err(format!("Unable to inspect README.txt: {error}")),
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
        if metadata.file_type().is_symlink() {
            continue;
        }
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
    paths: &AppPaths,
    folder_name: &str,
    folder_path: &Path,
) -> OfflineUpdatePackage {
    let mut errors = Vec::new();
    let mut warnings = Vec::new();
    let dirs = update_dirs(paths);
    let manifest_path = folder_path.join(MANIFEST_FILE_NAME);
    let manifest_exists = fs::symlink_metadata(&manifest_path)
        .map(|metadata| metadata.file_type().is_file())
        .unwrap_or(false);
    let mut manifest = None;

    if let Err(error) =
        ensure_real_directory_inside(&dirs.downloaded_dir, folder_path, "Update package folder")
    {
        errors.push(error);
        return OfflineUpdatePackage {
            folder_name: folder_name.to_string(),
            folder_path: path_to_string(folder_path),
            manifest_exists,
            manifest_valid: false,
            manifest,
            errors,
            warnings,
        };
    }

    match fs::symlink_metadata(&manifest_path) {
        Ok(_) => match read_manifest(folder_path, &manifest_path) {
            Ok(parsed_manifest) => {
                validate_manifest(&parsed_manifest, &mut errors);
                manifest = Some(parsed_manifest);
            }
            Err(error) => errors.push(error),
        },
        Err(error) if error.kind() == ErrorKind::NotFound => {
            errors.push("update-manifest.json is missing".to_string());
        }
        Err(error) => errors.push(format!("Unable to inspect update-manifest.json: {error}")),
    }

    let payload_path = folder_path.join("payload");
    match fs::symlink_metadata(&payload_path) {
        Ok(metadata) if metadata.file_type().is_symlink() => warnings.push(
            "Payload path is a symlink and will be ignored by the Phase 0 shell".to_string(),
        ),
        Ok(_) => warnings.push(
            "Payload folder is present; Phase 0 will not copy, execute, or install it"
                .to_string(),
        ),
        Err(error) if error.kind() == ErrorKind::NotFound => {}
        Err(error) => warnings.push(format!("Unable to inspect payload path: {error}")),
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

fn read_manifest(source_dir: &Path, path: &Path) -> Result<UpdateManifest, String> {
    ensure_regular_file_inside(source_dir, path, "update-manifest.json")?;
    let metadata = fs::symlink_metadata(path)
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

fn package_error(folder_name: &str, folder_path: &Path, error: String) -> OfflineUpdatePackage {
    OfflineUpdatePackage {
        folder_name: folder_name.to_string(),
        folder_path: path_to_string(folder_path),
        manifest_exists: false,
        manifest_valid: false,
        manifest: None,
        errors: vec![error],
        warnings: Vec::new(),
    }
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
        ok: is_real_directory(&dirs.updates_dir)
            && is_real_directory(&dirs.downloaded_dir)
            && is_real_directory(&dirs.staged_dir)
            && is_real_directory(&dirs.rollback_dir),
        updates_dir: path_to_string(&dirs.updates_dir),
        downloaded_dir: path_to_string(&dirs.downloaded_dir),
        staged_dir: path_to_string(&dirs.staged_dir),
        rollback_dir: path_to_string(&dirs.rollback_dir),
        packages,
        message,
    }
}

fn is_real_directory(path: &Path) -> bool {
    fs::symlink_metadata(path)
        .map(|metadata| metadata.file_type().is_dir() && !metadata.file_type().is_symlink())
        .unwrap_or(false)
}

fn ensure_update_dirs(paths: &AppPaths) -> Result<(), String> {
    let dirs = update_dirs(paths);
    ensure_directory_exists_without_symlink(&dirs.updates_dir, "updates root")?;
    ensure_real_directory_inside(&paths.app_data_dir, &dirs.updates_dir, "updates root")?;

    for (dir, label) in [
        (&dirs.downloaded_dir, "updates/downloaded"),
        (&dirs.staged_dir, "updates/staged"),
        (&dirs.rollback_dir, "updates/rollback"),
    ] {
        ensure_child_path_inside_parent_for_creation(&dirs.updates_dir, dir, label)?;
        ensure_directory_exists_without_symlink(dir, label)?;
        ensure_real_directory_inside(&dirs.updates_dir, dir, label)?;
    }

    Ok(())
}

fn reset_directory_contents(parent: &Path, dir: &Path, label: &str) -> Result<(), String> {
    ensure_child_path_inside_parent_for_creation(parent, dir, label)?;
    ensure_directory_exists_without_symlink(dir, label)?;
    ensure_real_directory_inside(parent, dir, label)?;
    clear_directory_contents(dir)
}

fn clear_directory_contents(dir: &Path) -> Result<(), String> {
    match fs::symlink_metadata(dir) {
        Ok(metadata) if metadata.file_type().is_symlink() => {
            return Err("Folder to clear is a symlink and was blocked".to_string());
        }
        Ok(metadata) if !metadata.file_type().is_dir() => return Ok(()),
        Ok(_) => {}
        Err(error) if error.kind() == ErrorKind::NotFound => return Ok(()),
        Err(error) => {
            return Err(format!(
                "Unable to inspect folder {}: {error}",
                path_to_string(dir)
            ));
        }
    }

    let canonical_dir = dir.canonicalize().map_err(|error| {
        format!(
            "Unable to inspect folder {}: {error}",
            path_to_string(dir)
        )
    })?;

    if !canonical_dir.is_dir() {
        return Ok(());
    }

    for entry in fs::read_dir(dir)
        .map_err(|error| format!("Unable to read folder {}: {error}", path_to_string(dir)))?
    {
        let entry = entry.map_err(|error| format!("Unable to inspect folder entry: {error}"))?;
        let path = entry.path();
        let metadata = fs::symlink_metadata(&path)
            .map_err(|error| format!("Unable to inspect {}: {error}", path_to_string(&path)))?;
        if metadata.file_type().is_symlink() {
            remove_symlink_entry(&path)?;
        } else if metadata.file_type().is_dir() {
            let canonical_child = path.canonicalize().map_err(|error| {
                format!(
                    "Unable to inspect staged folder {}: {error}",
                    path_to_string(&path)
                )
            })?;
            if !canonical_child.starts_with(&canonical_dir) {
                return Err(
                    "Staged package folder resolved outside updates/staged and was blocked"
                        .to_string(),
                );
            }
            fs::remove_dir_all(&path)
                .map_err(|error| format!("Unable to remove folder {}: {error}", path_to_string(&path)))?;
        } else {
            fs::remove_file(&path)
                .map_err(|error| format!("Unable to remove file {}: {error}", path_to_string(&path)))?;
        }
    }

    Ok(())
}

fn ensure_directory_exists_without_symlink(path: &Path, label: &str) -> Result<(), String> {
    match fs::symlink_metadata(path) {
        Ok(metadata) if metadata.file_type().is_symlink() => {
            Err(format!("{label} is a symlink and was blocked"))
        }
        Ok(metadata) if metadata.file_type().is_dir() => Ok(()),
        Ok(_) => Err(format!("{label} exists but is not a real directory")),
        Err(error) if error.kind() == ErrorKind::NotFound => {
            fs::create_dir_all(path)
                .map_err(|create_error| {
                    format!(
                        "Unable to create {label} folder {}: {create_error}",
                        path_to_string(path)
                    )
                })?;
            ensure_no_symlink(path, label)?;
            Ok(())
        }
        Err(error) => Err(format!(
            "Unable to inspect {label} {}: {error}",
            path_to_string(path)
        )),
    }
}

fn ensure_child_path_inside_parent_for_creation(
    parent: &Path,
    child: &Path,
    label: &str,
) -> Result<(), String> {
    ensure_real_directory_metadata(parent, &format!("Parent folder for {label}"))?;

    match fs::symlink_metadata(child) {
        Ok(metadata) if metadata.file_type().is_symlink() => {
            return Err(format!("{label} is a symlink and was blocked"));
        }
        Ok(_) => return ensure_existing_path_inside(parent, child, label),
        Err(error) if error.kind() == ErrorKind::NotFound => {}
        Err(error) => {
            return Err(format!(
                "Unable to inspect {label} {}: {error}",
                path_to_string(child)
            ));
        }
    }

    let parent_canonical = parent.canonicalize().map_err(|error| {
        format!(
            "Unable to inspect parent folder for {label} {}: {error}",
            path_to_string(parent)
        )
    })?;
    let child_parent = child.parent().ok_or_else(|| {
        format!(
            "Unable to resolve parent folder for {label} {}",
            path_to_string(child)
        )
    })?;
    let child_parent_canonical = child_parent.canonicalize().map_err(|error| {
        format!(
            "Unable to inspect parent folder for {label} {}: {error}",
            path_to_string(child_parent)
        )
    })?;

    if child_parent_canonical.starts_with(&parent_canonical) {
        Ok(())
    } else {
        Err(format!("{label} resolved outside its managed parent folder and was blocked"))
    }
}

fn ensure_real_directory_inside(parent: &Path, child: &Path, label: &str) -> Result<(), String> {
    ensure_real_directory_metadata(parent, &format!("Parent folder for {label}"))?;
    ensure_real_directory_metadata(child, label)?;
    ensure_existing_path_inside(parent, child, label)
}

fn ensure_regular_file_inside(parent: &Path, file: &Path, label: &str) -> Result<(), String> {
    ensure_real_directory_metadata(parent, &format!("Parent folder for {label}"))?;
    ensure_regular_file_metadata(file, label)?;
    ensure_existing_path_inside(parent, file, label)
}

fn ensure_no_symlink(path: &Path, label: &str) -> Result<(), String> {
    match fs::symlink_metadata(path) {
        Ok(metadata) if metadata.file_type().is_symlink() => {
            Err(format!("{label} is a symlink and was blocked"))
        }
        Ok(_) => Ok(()),
        Err(error) if error.kind() == ErrorKind::NotFound => Ok(()),
        Err(error) => Err(format!(
            "Unable to inspect {label} {}: {error}",
            path_to_string(path)
        )),
    }
}

fn ensure_real_directory_metadata(path: &Path, label: &str) -> Result<(), String> {
    let metadata = fs::symlink_metadata(path).map_err(|error| {
        if error.kind() == ErrorKind::NotFound {
            format!("{label} does not exist")
        } else {
            format!("Unable to inspect {label} {}: {error}", path_to_string(path))
        }
    })?;

    if metadata.file_type().is_symlink() {
        return Err(format!("{label} is a symlink and was blocked"));
    }

    if !metadata.file_type().is_dir() {
        return Err(format!("{label} exists but is not a real directory"));
    }

    Ok(())
}

fn ensure_regular_file_metadata(path: &Path, label: &str) -> Result<(), String> {
    let metadata = fs::symlink_metadata(path).map_err(|error| {
        if error.kind() == ErrorKind::NotFound {
            format!("{label} is missing")
        } else {
            format!("Unable to inspect {label} {}: {error}", path_to_string(path))
        }
    })?;

    if metadata.file_type().is_symlink() {
        return Err(format!("{label} is a symlink and was blocked"));
    }

    if !metadata.file_type().is_file() {
        return Err(format!("{label} exists but is not a regular file"));
    }

    Ok(())
}

fn ensure_existing_path_inside(parent: &Path, child: &Path, label: &str) -> Result<(), String> {
    let parent_canonical = parent.canonicalize().map_err(|error| {
        format!(
            "Unable to inspect parent folder for {label} {}: {error}",
            path_to_string(parent)
        )
    })?;
    let child_canonical = child.canonicalize().map_err(|error| {
        format!(
            "Unable to inspect {label} {}: {error}",
            path_to_string(child)
        )
    })?;

    if child_canonical.starts_with(&parent_canonical) {
        Ok(())
    } else {
        Err(format!("{label} resolved outside its managed parent folder and was blocked"))
    }
}

fn remove_symlink_entry(path: &Path) -> Result<(), String> {
    fs::remove_file(path).or_else(|file_error| {
        fs::remove_dir(path).map_err(|dir_error| {
            format!(
                "Unable to remove symlink {}: file removal failed with {file_error}; directory removal failed with {dir_error}",
                path_to_string(path)
            )
        })
    })
}
