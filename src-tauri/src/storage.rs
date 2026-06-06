use crate::app_paths::{
    path_to_string, required_folder_paths, AppFolderDescriptor, AppPaths,
};
use chrono::Utc;
use serde::Serialize;
use std::fs;
use std::fs::OpenOptions;
use std::io::Write;

#[derive(Debug, Clone, Serialize)]
pub struct FolderStatus {
    pub key: String,
    pub relative_path: String,
    pub absolute_path: String,
    pub exists: bool,
}

#[derive(Debug, Clone, Serialize)]
pub struct StorageStatus {
    pub ok: bool,
    pub app_data_dir: String,
    pub writable: bool,
    pub missing_folders_count: usize,
    pub folders: Vec<FolderStatus>,
    pub message: String,
}

#[derive(Debug, Clone)]
pub struct StorageInitSummary {
    pub folders_created: usize,
    pub folders_existing: usize,
    pub status: StorageStatus,
}

pub fn ensure_storage(paths: &AppPaths) -> Result<StorageInitSummary, String> {
    let mut folders_created = 0;
    let mut folders_existing = 0;

    if paths.app_data_dir.is_dir() {
        folders_existing += 1;
    } else if paths.app_data_dir.exists() {
        return Err(format!(
            "AppData path exists but is not a directory: {}",
            path_to_string(&paths.app_data_dir)
        ));
    } else {
        fs::create_dir_all(&paths.app_data_dir).map_err(|error| {
            format!(
                "Unable to create app data directory {}: {error}",
                path_to_string(&paths.app_data_dir)
            )
        })?;
        folders_created += 1;
    }

    for (_descriptor, folder_path) in required_folder_paths(&paths.app_data_dir) {
        if folder_path.is_dir() {
            folders_existing += 1;
        } else if folder_path.exists() {
            return Err(format!(
                "Required folder path exists but is not a directory: {}",
                path_to_string(&folder_path)
            ));
        } else {
            fs::create_dir_all(&folder_path).map_err(|error| {
                format!(
                    "Unable to create required folder {}: {error}",
                    path_to_string(&folder_path)
                )
            })?;
            folders_created += 1;
        }
    }

    let status = get_storage_status_for_paths(paths);

    Ok(StorageInitSummary {
        folders_created,
        folders_existing,
        status,
    })
}

pub fn get_storage_status_for_paths(paths: &AppPaths) -> StorageStatus {
    let folders: Vec<FolderStatus> = required_folder_paths(&paths.app_data_dir)
        .into_iter()
        .map(|(descriptor, folder_path)| folder_status(descriptor, &folder_path))
        .collect();

    let missing_folders_count = folders.iter().filter(|folder| !folder.exists).count();
    let (writable, write_message) = check_writable(paths);
    let ok = paths.app_data_dir.is_dir() && missing_folders_count == 0 && writable;
    let message = if ok {
        "Storage ready".to_string()
    } else if let Some(write_message) = write_message {
        write_message
    } else {
        format!("Storage has {missing_folders_count} missing required folder(s)")
    };

    StorageStatus {
        ok,
        app_data_dir: path_to_string(&paths.app_data_dir),
        writable,
        missing_folders_count,
        folders,
        message,
    }
}

fn folder_status(descriptor: AppFolderDescriptor, folder_path: &std::path::Path) -> FolderStatus {
    FolderStatus {
        key: descriptor.key,
        relative_path: descriptor.relative_path,
        absolute_path: path_to_string(folder_path),
        exists: folder_path.is_dir(),
    }
}

fn check_writable(paths: &AppPaths) -> (bool, Option<String>) {
    if !paths.app_data_dir.is_dir() {
        return (
            false,
            Some("AppData directory does not exist yet".to_string()),
        );
    }

    let test_path = paths.app_data_dir.join(format!(
        ".foundation-write-test-{}.tmp",
        Utc::now().timestamp_millis()
    ));

    match OpenOptions::new()
        .create_new(true)
        .write(true)
        .open(&test_path)
    {
        Ok(mut file) => {
            if let Err(error) = file.write_all(b"write-test") {
                let _ = fs::remove_file(&test_path);
                return (
                    false,
                    Some(format!(
                        "Unable to write test file in AppData directory: {error}"
                    )),
                );
            }
            drop(file);
            if let Err(error) = fs::remove_file(&test_path) {
                return (
                    false,
                    Some(format!(
                        "Write test succeeded but cleanup failed for {}: {error}",
                        path_to_string(&test_path)
                    )),
                );
            }
            (true, None)
        }
        Err(error) => (
            false,
            Some(format!(
                "Unable to create write test file in AppData directory: {error}"
            )),
        ),
    }
}
