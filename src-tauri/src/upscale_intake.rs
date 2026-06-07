use crate::app_paths::{path_to_string, AppPaths};
use crate::logging::{new_log_entry, write_audit_log_event, write_log_entry};
use crate::settings::get_app_settings_for_paths;
use chrono::Utc;
use rusqlite::{params, Connection, OptionalExtension};
use serde::Serialize;
use sha2::{Digest, Sha256};
use std::fs;
use std::io::{ErrorKind, Read};
use std::path::{Path, PathBuf};
use std::process::Command;
use std::sync::atomic::{AtomicU64, Ordering};

const MAX_IMAGE_SIZE_BYTES: u64 = 250 * 1024 * 1024;
const SUPPORTED_EXTENSIONS: &[&str] = &["png", "jpg", "jpeg", "webp", "tif", "tiff", "bmp"];
const SUPPORTED_OUTPUT_FORMATS: &[&str] = &["png", "jpg", "tiff", "webp"];
const SUPPORTED_SCALE_FACTORS: &[i64] = &[2, 4, 8];
static ID_COUNTER: AtomicU64 = AtomicU64::new(1);

#[derive(Debug, Clone, Serialize)]
pub struct ImageImportSummary {
    pub selected: usize,
    pub imported: usize,
    pub queued: usize,
    pub duplicates: usize,
    pub skipped: usize,
    pub errors: usize,
}

#[derive(Debug, Clone, Serialize)]
pub struct ImageImportItemResult {
    pub original_name: String,
    pub source_path_preview: String,
    pub status: String,
    pub file_asset_id: Option<String>,
    pub queue_item_id: Option<String>,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct ImageImportResult {
    pub ok: bool,
    pub summary: ImageImportSummary,
    pub items: Vec<ImageImportItemResult>,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct UpscaleQueueItem {
    pub id: String,
    pub file_asset_id: String,
    pub original_name: String,
    pub relative_path: String,
    pub asset_type: String,
    pub mime_type: Option<String>,
    pub size_bytes: Option<i64>,
    pub sha256: Option<String>,
    pub status: String,
    pub desired_scale_factor: i64,
    pub desired_output_format: String,
    pub source_kind: String,
    pub notes: Option<String>,
    pub created_at: String,
    pub updated_at: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct UpscaleQueueSummary {
    pub queued: usize,
    pub removed: usize,
    pub error: usize,
    pub total: usize,
}

#[derive(Debug, Clone, Serialize)]
pub struct UpscaleQueueResponse {
    pub ok: bool,
    pub items: Vec<UpscaleQueueItem>,
    pub summary: UpscaleQueueSummary,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct UpscaleIntakeSummary {
    pub ok: bool,
    pub raw_asset_dir: String,
    pub queue: UpscaleQueueSummary,
    pub message: String,
}

struct QueueDefaults {
    desired_scale_factor: i64,
    desired_output_format: String,
}

struct ExistingAsset {
    id: String,
    relative_path: String,
}

pub fn import_images_with_dialog_for_paths(paths: &AppPaths) -> Result<ImageImportResult, String> {
    let selected_paths = open_image_file_dialog()?;

    if selected_paths.is_empty() {
        return Ok(empty_import_result("No files selected"));
    }

    import_candidate_paths(paths, selected_paths, "file_dialog")
}

pub fn import_images_from_folder_dialog_for_paths(
    paths: &AppPaths,
) -> Result<ImageImportResult, String> {
    let selected_folder = open_folder_dialog()?;

    let Some(selected_folder) = selected_folder else {
        return Ok(empty_import_result("No folder selected"));
    };

    ensure_regular_directory(&selected_folder)?;

    let mut candidate_paths = Vec::new();
    let entries = fs::read_dir(&selected_folder).map_err(|error| {
        format!(
            "Unable to read selected folder {}: {error}",
            preview_path(&selected_folder)
        )
    })?;

    for entry in entries {
        let entry = entry.map_err(|error| format!("Unable to read folder entry: {error}"))?;
        candidate_paths.push(entry.path());
    }

    import_candidate_paths(paths, candidate_paths, "folder_dialog")
}

pub fn get_upscale_queue_for_paths(
    paths: &AppPaths,
    include_removed: bool,
) -> Result<UpscaleQueueResponse, String> {
    let connection = open_upscale_connection(paths)?;
    queue_response(&connection, include_removed)
}

pub fn update_upscale_queue_item_settings_for_paths(
    paths: &AppPaths,
    queue_item_id: String,
    desired_scale_factor: i64,
    desired_output_format: String,
) -> Result<UpscaleQueueItem, String> {
    validate_scale_factor(desired_scale_factor)?;
    let desired_output_format = validate_output_format(&desired_output_format)?;
    let queue_item_id = validate_id("queue_item_id", &queue_item_id)?;
    let connection = open_upscale_connection(paths)?;
    let updated_at = Utc::now().to_rfc3339();

    let changed = connection
        .execute(
            "
            UPDATE upscale_queue_items
            SET desired_scale_factor = ?1,
                desired_output_format = ?2,
                updated_at = ?3
            WHERE id = ?4 AND status = 'queued'
            ",
            params![
                desired_scale_factor,
                desired_output_format,
                updated_at,
                queue_item_id
            ],
        )
        .map_err(|error| format!("Unable to update queue item settings: {error}"))?;

    if changed == 0 {
        return Err("Queue item was not found or is not queued".to_string());
    }

    get_queue_item_by_id(&connection, &queue_item_id)
}

pub fn remove_upscale_queue_item_for_paths(
    paths: &AppPaths,
    queue_item_id: String,
) -> Result<UpscaleQueueResponse, String> {
    let queue_item_id = validate_id("queue_item_id", &queue_item_id)?;
    let connection = open_upscale_connection(paths)?;
    let updated_at = Utc::now().to_rfc3339();

    let changed = connection
        .execute(
            "
            UPDATE upscale_queue_items
            SET status = 'removed',
                updated_at = ?1
            WHERE id = ?2 AND status = 'queued'
            ",
            params![updated_at, queue_item_id],
        )
        .map_err(|error| format!("Unable to remove queue item: {error}"))?;

    if changed == 0 {
        return Err("Queue item was not found or is not queued".to_string());
    }

    log_upscale_event(
        paths,
        "upscale_queue_item_removed",
        "Upscale queue item removed",
        serde_json::json!({
            "queue_item_id": queue_item_id
        }),
    )?;

    queue_response(&connection, false)
}

pub fn clear_upscale_queue_for_paths(
    paths: &AppPaths,
    confirm: String,
) -> Result<UpscaleQueueResponse, String> {
    if confirm != "CLEAR_UPSCALE_QUEUE" {
        return Err("Clear queue confirmation did not match".to_string());
    }

    let connection = open_upscale_connection(paths)?;
    let updated_at = Utc::now().to_rfc3339();
    let changed = connection
        .execute(
            "
            UPDATE upscale_queue_items
            SET status = 'removed',
                updated_at = ?1
            WHERE status IN ('queued', 'error')
            ",
            params![updated_at],
        )
        .map_err(|error| format!("Unable to clear upscale queue: {error}"))?;

    log_upscale_event(
        paths,
        "upscale_queue_cleared",
        "Upscale queue cleared",
        serde_json::json!({
            "items_marked_removed": changed
        }),
    )?;

    queue_response(&connection, false)
}

pub fn get_upscale_intake_summary_for_paths(
    paths: &AppPaths,
) -> Result<UpscaleIntakeSummary, String> {
    let connection = open_upscale_connection(paths)?;
    let queue = queue_summary(&connection)?;

    Ok(UpscaleIntakeSummary {
        ok: true,
        raw_asset_dir: path_to_string(&raw_assets_dir(paths)),
        queue,
        message: "Upscale intake summary loaded".to_string(),
    })
}

fn import_candidate_paths(
    paths: &AppPaths,
    candidate_paths: Vec<PathBuf>,
    source_kind: &str,
) -> Result<ImageImportResult, String> {
    let selected = candidate_paths.len();
    if selected == 0 {
        return Ok(empty_import_result("No image files found"));
    }

    log_upscale_event(
        paths,
        "image_intake_started",
        "Image intake started",
        serde_json::json!({
            "selected": selected,
            "source_kind": source_kind
        }),
    )?;

    let raw_root_dir = ensure_raw_assets_root(paths)?;

    let connection = open_upscale_connection(paths)?;
    let defaults = queue_defaults(paths);
    let mut summary = ImageImportSummary {
        selected,
        imported: 0,
        queued: 0,
        duplicates: 0,
        skipped: 0,
        errors: 0,
    };
    let mut items = Vec::new();

    for candidate_path in candidate_paths {
        let item = process_candidate_path(
            paths,
            &connection,
            &defaults,
            &raw_root_dir,
            &candidate_path,
            source_kind,
        );
        match item.status.as_str() {
            "queued" => {
                summary.queued += 1;
                if item.message.contains("Imported") {
                    summary.imported += 1;
                }
            }
            "duplicate" => summary.duplicates += 1,
            "skipped" => summary.skipped += 1,
            "error" => summary.errors += 1,
            _ => {}
        }
        items.push(item);
    }

    log_upscale_event(
        paths,
        "image_intake_completed",
        "Image intake completed",
        serde_json::json!({
            "selected": summary.selected,
            "imported": summary.imported,
            "queued": summary.queued,
            "duplicates": summary.duplicates,
            "skipped": summary.skipped,
            "errors": summary.errors,
            "source_kind": source_kind
        }),
    )?;

    let message = if summary.errors > 0 {
        "Image intake completed with errors".to_string()
    } else if summary.queued > 0 {
        "Image intake completed".to_string()
    } else {
        "No new images were queued".to_string()
    };

    Ok(ImageImportResult {
        ok: summary.errors == 0,
        summary,
        items,
        message,
    })
}

fn process_candidate_path(
    paths: &AppPaths,
    connection: &Connection,
    defaults: &QueueDefaults,
    raw_root_dir: &Path,
    source_path: &Path,
    source_kind: &str,
) -> ImageImportItemResult {
    let original_name = source_path
        .file_name()
        .and_then(|value| value.to_str())
        .unwrap_or("unknown")
        .to_string();
    let source_path_preview = preview_path(source_path);

    let extension = match supported_extension(source_path) {
        Some(extension) => extension,
        None => {
            return item_result(
                original_name,
                source_path_preview,
                "skipped",
                None,
                None,
                "Unsupported file type",
            );
        }
    };

    let metadata = match fs::symlink_metadata(source_path) {
        Ok(metadata) => metadata,
        Err(error) => {
            return item_result(
                original_name,
                source_path_preview,
                "error",
                None,
                None,
                &format!("Unable to read file metadata: {error}"),
            );
        }
    };

    if metadata.file_type().is_symlink() {
        return item_result(
            original_name,
            source_path_preview,
            "error",
            None,
            None,
            "Image file is a symlink and was blocked",
        );
    }

    if !metadata.is_file() {
        return item_result(
            original_name,
            source_path_preview,
            "skipped",
            None,
            None,
            "Skipped because this is not a regular image file",
        );
    }

    if metadata.len() > MAX_IMAGE_SIZE_BYTES {
        return item_result(
            original_name,
            source_path_preview,
            "error",
            None,
            None,
            "File exceeds Phase 1 intake limit of 250 MB.",
        );
    }

    let sha256 = match sha256_file(source_path) {
        Ok(value) => value,
        Err(error) => {
            return item_result(
                original_name,
                source_path_preview,
                "error",
                None,
                None,
                &error,
            );
        }
    };

    let now = Utc::now();
    let day = now.format("%Y%m%d").to_string();
    let relative_path = format!("assets/raw/{day}/{sha256}.{extension}");
    let destination_dir = raw_root_dir.join(&day);
    let destination_path = destination_dir.join(format!("{sha256}.{extension}"));

    let (file_asset_id, inserted_asset) = match find_existing_asset(connection, &sha256) {
        Ok(Some(asset)) => {
            let asset_path = match resolve_raw_relative_path(
                paths,
                raw_root_dir,
                &asset.relative_path,
                "Existing raw image asset path",
            ) {
                Ok(path) => path,
                Err(error) => {
                    return item_result(
                        original_name,
                        source_path_preview,
                        "error",
                        Some(asset.id),
                        None,
                        &error,
                    );
                }
            };
            if !asset_path.exists() {
                if let Err(error) = copy_raw_asset(
                    source_path,
                    raw_root_dir,
                    &destination_dir,
                    &destination_path,
                ) {
                    return item_result(
                        original_name,
                        source_path_preview,
                        "error",
                        Some(asset.id),
                        None,
                        &error,
                    );
                }
                if let Err(error) =
                    update_asset_relative_path(connection, &asset.id, &relative_path)
                {
                    return item_result(
                        original_name,
                        source_path_preview,
                        "error",
                        Some(asset.id),
                        None,
                        &error,
                    );
                }
            } else if let Err(error) =
                ensure_regular_file_metadata(&asset_path, "Existing raw image asset")
            {
                return item_result(
                    original_name,
                    source_path_preview,
                    "error",
                    Some(asset.id),
                    None,
                    &error,
                );
            }
            (asset.id, false)
        }
        Ok(None) => {
            if let Err(error) =
                copy_raw_asset(source_path, raw_root_dir, &destination_dir, &destination_path)
            {
                return item_result(
                    original_name,
                    source_path_preview,
                    "error",
                    None,
                    None,
                    &error,
                );
            }
            match insert_file_asset(
                connection,
                &original_name,
                &relative_path,
                mime_type_for_extension(&extension),
                metadata.len(),
                &sha256,
            ) {
                Ok(asset_id) => (asset_id, true),
                Err(error) => {
                    return item_result(
                        original_name,
                        source_path_preview,
                        "error",
                        None,
                        None,
                        &error,
                    );
                }
            }
        }
        Err(error) => {
            return item_result(
                original_name,
                source_path_preview,
                "error",
                None,
                None,
                &error,
            );
        }
    };

    match find_active_queue_item(connection, &file_asset_id) {
        Ok(Some(queue_item_id)) => item_result(
            original_name,
            source_path_preview,
            "duplicate",
            Some(file_asset_id),
            Some(queue_item_id),
            "Image is already queued",
        ),
        Ok(None) => {
            match insert_queue_item(connection, &file_asset_id, defaults, source_kind) {
                Ok(queue_item_id) => {
                    let message = if inserted_asset {
                        "Imported raw image and added it to the queue"
                    } else {
                        "Reused existing raw image asset and added it to the queue"
                    };
                    let _ = log_upscale_event(
                        paths,
                        "upscale_queue_item_added",
                        "Upscale queue item added",
                        serde_json::json!({
                            "queue_item_id": queue_item_id,
                            "file_asset_id": file_asset_id,
                            "source_kind": source_kind
                        }),
                    );
                    item_result(
                        original_name,
                        source_path_preview,
                        "queued",
                        Some(file_asset_id),
                        Some(queue_item_id),
                        message,
                    )
                }
                Err(error) => item_result(
                    original_name,
                    source_path_preview,
                    "error",
                    Some(file_asset_id),
                    None,
                    &error,
                ),
            }
        }
        Err(error) => item_result(
            original_name,
            source_path_preview,
            "error",
            Some(file_asset_id),
            None,
            &error,
        ),
    }
}

fn queue_response(
    connection: &Connection,
    include_removed: bool,
) -> Result<UpscaleQueueResponse, String> {
    let items = get_queue_items(connection, include_removed)?;
    let summary = queue_summary(connection)?;

    Ok(UpscaleQueueResponse {
        ok: true,
        items,
        summary,
        message: "Upscale queue loaded".to_string(),
    })
}

fn get_queue_items(
    connection: &Connection,
    include_removed: bool,
) -> Result<Vec<UpscaleQueueItem>, String> {
    let where_clause = if include_removed {
        ""
    } else {
        "WHERE q.status != 'removed'"
    };
    let sql = format!(
        "
        SELECT
            q.id,
            q.file_asset_id,
            f.original_name,
            f.relative_path,
            f.asset_type,
            f.mime_type,
            f.size_bytes,
            f.sha256,
            q.status,
            q.desired_scale_factor,
            q.desired_output_format,
            q.source_kind,
            q.notes,
            q.created_at,
            q.updated_at
        FROM upscale_queue_items q
        JOIN file_assets f ON f.id = q.file_asset_id
        {where_clause}
        ORDER BY q.created_at DESC
        "
    );

    let mut statement = connection
        .prepare(&sql)
        .map_err(|error| format!("Unable to prepare queue query: {error}"))?;
    let rows = statement
        .query_map([], queue_item_from_row)
        .map_err(|error| format!("Unable to query upscale queue: {error}"))?;

    let mut items = Vec::new();
    for row in rows {
        items.push(row.map_err(|error| format!("Unable to read queue row: {error}"))?);
    }

    Ok(items)
}

fn get_queue_item_by_id(connection: &Connection, id: &str) -> Result<UpscaleQueueItem, String> {
    connection
        .query_row(
            "
            SELECT
                q.id,
                q.file_asset_id,
                f.original_name,
                f.relative_path,
                f.asset_type,
                f.mime_type,
                f.size_bytes,
                f.sha256,
                q.status,
                q.desired_scale_factor,
                q.desired_output_format,
                q.source_kind,
                q.notes,
                q.created_at,
                q.updated_at
            FROM upscale_queue_items q
            JOIN file_assets f ON f.id = q.file_asset_id
            WHERE q.id = ?1
            ",
            params![id],
            queue_item_from_row,
        )
        .map_err(|error| format!("Unable to load updated queue item: {error}"))
}

fn queue_summary(connection: &Connection) -> Result<UpscaleQueueSummary, String> {
    let mut summary = UpscaleQueueSummary {
        queued: 0,
        removed: 0,
        error: 0,
        total: 0,
    };
    let mut statement = connection
        .prepare("SELECT status, COUNT(*) FROM upscale_queue_items GROUP BY status")
        .map_err(|error| format!("Unable to prepare queue summary query: {error}"))?;
    let rows = statement
        .query_map([], |row| {
            Ok((row.get::<_, String>(0)?, row.get::<_, i64>(1)?))
        })
        .map_err(|error| format!("Unable to query queue summary: {error}"))?;

    for row in rows {
        let (status, count) =
            row.map_err(|error| format!("Unable to read queue summary row: {error}"))?;
        let count = usize::try_from(count).unwrap_or(0);
        summary.total += count;
        match status.as_str() {
            "queued" => summary.queued = count,
            "removed" => summary.removed = count,
            "error" => summary.error = count,
            _ => {}
        }
    }

    Ok(summary)
}

fn queue_item_from_row(row: &rusqlite::Row<'_>) -> rusqlite::Result<UpscaleQueueItem> {
    Ok(UpscaleQueueItem {
        id: row.get(0)?,
        file_asset_id: row.get(1)?,
        original_name: row.get(2)?,
        relative_path: row.get(3)?,
        asset_type: row.get(4)?,
        mime_type: row.get(5)?,
        size_bytes: row.get(6)?,
        sha256: row.get(7)?,
        status: row.get(8)?,
        desired_scale_factor: row.get(9)?,
        desired_output_format: row.get(10)?,
        source_kind: row.get(11)?,
        notes: row.get(12)?,
        created_at: row.get(13)?,
        updated_at: row.get(14)?,
    })
}

fn open_upscale_connection(paths: &AppPaths) -> Result<Connection, String> {
    let connection = Connection::open(&paths.database_path).map_err(|error| {
        format!(
            "Unable to open upscale queue database at {}: {error}",
            path_to_string(&paths.database_path)
        )
    })?;

    connection
        .execute_batch("PRAGMA foreign_keys = ON;")
        .map_err(|error| format!("Unable to enable SQLite foreign keys: {error}"))?;

    Ok(connection)
}

fn queue_defaults(paths: &AppPaths) -> QueueDefaults {
    get_app_settings_for_paths(paths)
        .map(|settings| QueueDefaults {
            desired_scale_factor: if SUPPORTED_SCALE_FACTORS
                .contains(&settings.upscale.default_scale_factor)
            {
                settings.upscale.default_scale_factor
            } else {
                4
            },
            desired_output_format: if SUPPORTED_OUTPUT_FORMATS
                .contains(&settings.upscale.default_output_format.as_str())
            {
                settings.upscale.default_output_format
            } else {
                "png".to_string()
            },
        })
        .unwrap_or_else(|_| QueueDefaults {
            desired_scale_factor: 4,
            desired_output_format: "png".to_string(),
        })
}

fn find_existing_asset(
    connection: &Connection,
    sha256: &str,
) -> Result<Option<ExistingAsset>, String> {
    connection
        .query_row(
            "
            SELECT id, relative_path
            FROM file_assets
            WHERE sha256 = ?1 AND asset_type = 'raw_image'
            ORDER BY created_at ASC
            LIMIT 1
            ",
            params![sha256],
            |row| {
                Ok(ExistingAsset {
                    id: row.get(0)?,
                    relative_path: row.get(1)?,
                })
            },
        )
        .optional()
        .map_err(|error| format!("Unable to check existing raw image asset: {error}"))
}

fn insert_file_asset(
    connection: &Connection,
    original_name: &str,
    relative_path: &str,
    mime_type: &str,
    size_bytes: u64,
    sha256: &str,
) -> Result<String, String> {
    let id = new_local_id("asset");
    let now = Utc::now().to_rfc3339();
    let size_bytes = i64::try_from(size_bytes)
        .map_err(|_| "Image size could not be represented in SQLite".to_string())?;

    connection
        .execute(
            "
            INSERT INTO file_assets (
                id,
                original_name,
                relative_path,
                asset_type,
                mime_type,
                size_bytes,
                sha256,
                created_at,
                updated_at
            )
            VALUES (?1, ?2, ?3, 'raw_image', ?4, ?5, ?6, ?7, ?7)
            ",
            params![id, original_name, relative_path, mime_type, size_bytes, sha256, now],
        )
        .map_err(|error| format!("Unable to register raw image asset: {error}"))?;

    Ok(id)
}

fn update_asset_relative_path(
    connection: &Connection,
    asset_id: &str,
    relative_path: &str,
) -> Result<(), String> {
    connection
        .execute(
            "
            UPDATE file_assets
            SET relative_path = ?1,
                updated_at = ?2
            WHERE id = ?3
            ",
            params![relative_path, Utc::now().to_rfc3339(), asset_id],
        )
        .map_err(|error| format!("Unable to update raw image asset path: {error}"))?;

    Ok(())
}

fn find_active_queue_item(
    connection: &Connection,
    file_asset_id: &str,
) -> Result<Option<String>, String> {
    connection
        .query_row(
            "
            SELECT id
            FROM upscale_queue_items
            WHERE file_asset_id = ?1 AND status = 'queued'
            LIMIT 1
            ",
            params![file_asset_id],
            |row| row.get::<_, String>(0),
        )
        .optional()
        .map_err(|error| format!("Unable to check active queue duplicate: {error}"))
}

fn insert_queue_item(
    connection: &Connection,
    file_asset_id: &str,
    defaults: &QueueDefaults,
    source_kind: &str,
) -> Result<String, String> {
    let id = new_local_id("queue");
    let now = Utc::now().to_rfc3339();
    connection
        .execute(
            "
            INSERT INTO upscale_queue_items (
                id,
                file_asset_id,
                status,
                desired_scale_factor,
                desired_output_format,
                source_kind,
                notes,
                created_at,
                updated_at
            )
            VALUES (?1, ?2, 'queued', ?3, ?4, ?5, NULL, ?6, ?6)
            ",
            params![
                id,
                file_asset_id,
                defaults.desired_scale_factor,
                defaults.desired_output_format,
                source_kind,
                now
            ],
        )
        .map_err(|error| format!("Unable to add image to upscale queue: {error}"))?;

    Ok(id)
}

fn copy_raw_asset(
    source_path: &Path,
    raw_root_dir: &Path,
    destination_dir: &Path,
    destination_path: &Path,
) -> Result<(), String> {
    ensure_regular_file_metadata(source_path, "Source image")?;
    ensure_child_path_inside_parent_for_creation(
        raw_root_dir,
        destination_dir,
        "Raw image day folder",
    )?;
    ensure_directory_exists_without_symlink(destination_dir, "Raw image day folder")?;
    ensure_existing_path_inside(raw_root_dir, destination_dir, "Raw image day folder")?;
    ensure_child_path_inside_parent_for_creation(
        destination_dir,
        destination_path,
        "Raw image destination file",
    )?;

    if destination_path.exists() {
        ensure_existing_path_inside(
            destination_dir,
            destination_path,
            "Existing raw image file",
        )?;
        ensure_regular_file_metadata(destination_path, "Existing raw image file")?;
        return Ok(());
    }

    let temp_path = unique_temp_path(destination_dir)?;
    ensure_child_path_inside_parent_for_creation(
        destination_dir,
        &temp_path,
        "Temporary raw image copy",
    )?;

    fs::copy(source_path, &temp_path).map_err(|error| {
        let _ = remove_temp_file_if_safe(destination_dir, &temp_path);
        format!("Unable to copy raw image into AppData: {error}")
    })?;

    ensure_existing_path_inside(destination_dir, &temp_path, "Temporary raw image copy")?;
    ensure_regular_file_metadata(&temp_path, "Temporary raw image copy")?;

    fs::rename(&temp_path, destination_path).map_err(|error| {
        let _ = remove_temp_file_if_safe(destination_dir, &temp_path);
        format!("Unable to finalize raw image copy: {error}")
    })
}

fn ensure_regular_directory(path: &Path) -> Result<(), String> {
    let metadata = fs::symlink_metadata(path)
        .map_err(|error| format!("Unable to inspect selected folder: {error}"))?;
    if metadata.file_type().is_symlink() {
        return Err("Selected folder is a symlink and was blocked".to_string());
    }
    if !metadata.is_dir() {
        return Err("Selected folder is not a real directory".to_string());
    }
    Ok(())
}

fn ensure_raw_assets_root(paths: &AppPaths) -> Result<PathBuf, String> {
    let assets_dir = paths.app_data_dir.join("assets");
    let raw_root_dir = assets_dir.join("raw");

    ensure_directory_exists_without_symlink(&paths.app_data_dir, "AppData folder")?;
    ensure_child_path_inside_parent_for_creation(
        &paths.app_data_dir,
        &assets_dir,
        "Assets folder",
    )?;
    ensure_directory_exists_without_symlink(&assets_dir, "Assets folder")?;
    ensure_existing_path_inside(&paths.app_data_dir, &assets_dir, "Assets folder")?;

    ensure_child_path_inside_parent_for_creation(
        &assets_dir,
        &raw_root_dir,
        "Raw assets folder",
    )?;
    ensure_directory_exists_without_symlink(&raw_root_dir, "Raw assets folder")?;
    ensure_existing_path_inside(&assets_dir, &raw_root_dir, "Raw assets folder")?;

    Ok(raw_root_dir)
}

fn ensure_real_directory_metadata(path: &Path, label: &str) -> Result<(), String> {
    let metadata = fs::symlink_metadata(path)
        .map_err(|error| format!("{label} could not be inspected: {error}"))?;
    if metadata.file_type().is_symlink() {
        return Err(format!("{label} is a symlink and was blocked"));
    }
    if !metadata.is_dir() {
        return Err(format!("{label} is not a real directory"));
    }
    Ok(())
}

fn ensure_regular_file_metadata(path: &Path, label: &str) -> Result<(), String> {
    let metadata = fs::symlink_metadata(path)
        .map_err(|error| format!("{label} could not be inspected: {error}"))?;
    if metadata.file_type().is_symlink() {
        return Err(format!("{label} is a symlink and was blocked"));
    }
    if !metadata.is_file() {
        return Err(format!("{label} is not a regular file"));
    }
    Ok(())
}

fn ensure_existing_path_inside(parent: &Path, child: &Path, label: &str) -> Result<(), String> {
    ensure_real_directory_metadata(parent, "Expected parent directory")?;
    let child_metadata = fs::symlink_metadata(child)
        .map_err(|error| format!("{label} could not be inspected: {error}"))?;
    if child_metadata.file_type().is_symlink() {
        return Err(format!("{label} is a symlink and was blocked"));
    }

    let parent = parent
        .canonicalize()
        .map_err(|error| format!("Expected parent directory could not be resolved: {error}"))?;
    let child = child
        .canonicalize()
        .map_err(|error| format!("{label} could not be resolved: {error}"))?;

    if !child.starts_with(&parent) {
        return Err(format!("{label} resolved outside its expected folder and was blocked"));
    }

    Ok(())
}

fn ensure_child_path_inside_parent_for_creation(
    parent: &Path,
    child: &Path,
    label: &str,
) -> Result<(), String> {
    match fs::symlink_metadata(child) {
        Ok(_) => return ensure_existing_path_inside(parent, child, label),
        Err(error) if error.kind() != ErrorKind::NotFound => {
            return Err(format!("{label} could not be inspected: {error}"));
        }
        Err(_) => {}
    }

    ensure_real_directory_metadata(parent, "Expected parent directory")?;
    let parent_canonical = parent
        .canonicalize()
        .map_err(|error| format!("Expected parent directory could not be resolved: {error}"))?;
    let child_parent = child
        .parent()
        .ok_or_else(|| format!("{label} has no parent directory"))?;
    ensure_real_directory_metadata(child_parent, "Child parent directory")?;
    let child_parent_canonical = child_parent
        .canonicalize()
        .map_err(|error| format!("Child parent directory could not be resolved: {error}"))?;

    if !child_parent_canonical.starts_with(&parent_canonical) {
        return Err(format!("{label} resolved outside its expected folder and was blocked"));
    }

    if child.file_name().is_none() {
        return Err(format!("{label} is not a valid child path"));
    }

    Ok(())
}

fn ensure_directory_exists_without_symlink(path: &Path, label: &str) -> Result<(), String> {
    match fs::symlink_metadata(path) {
        Ok(_) => ensure_real_directory_metadata(path, label),
        Err(error) if error.kind() == ErrorKind::NotFound => {
            fs::create_dir(path)
                .map_err(|error| format!("Unable to create {label}: {error}"))?;
            ensure_real_directory_metadata(path, label)
        }
        Err(error) => Err(format!("{label} could not be inspected: {error}")),
    }
}

fn resolve_raw_relative_path(
    paths: &AppPaths,
    raw_root_dir: &Path,
    relative_path: &str,
    label: &str,
) -> Result<PathBuf, String> {
    let relative_path = platform_relative_path(relative_path);
    let raw_relative_root = PathBuf::from("assets").join("raw");
    if relative_path.is_absolute()
        || relative_path
            .components()
            .any(|component| {
                matches!(
                    component,
                    std::path::Component::CurDir
                        | std::path::Component::ParentDir
                        | std::path::Component::Prefix(_)
                        | std::path::Component::RootDir
                )
            })
        || !relative_path.starts_with(&raw_relative_root)
    {
        return Err(format!("{label} resolved outside raw assets folder and was blocked"));
    }

    let raw_relative_path = relative_path
        .strip_prefix(&raw_relative_root)
        .map_err(|_| format!("{label} resolved outside raw assets folder and was blocked"))?;
    if raw_relative_path.as_os_str().is_empty() {
        return Err(format!("{label} resolved outside raw assets folder and was blocked"));
    }

    let resolved_path = raw_root_dir.join(raw_relative_path);
    if resolved_path != paths.app_data_dir.join(relative_path) {
        return Err(format!("{label} resolved outside raw assets folder and was blocked"));
    }

    match fs::symlink_metadata(&resolved_path) {
        Ok(_) => ensure_existing_path_inside(raw_root_dir, &resolved_path, label)?,
        Err(error) if error.kind() == ErrorKind::NotFound => {}
        Err(error) => return Err(format!("{label} could not be inspected: {error}")),
    }

    Ok(resolved_path)
}

fn unique_temp_path(destination_dir: &Path) -> Result<PathBuf, String> {
    for _ in 0..10 {
        let temp_path = destination_dir.join(format!(".{}.tmp", new_local_id("copy")));
        match fs::symlink_metadata(&temp_path) {
            Ok(_) => continue,
            Err(error) if error.kind() == ErrorKind::NotFound => return Ok(temp_path),
            Err(error) => {
                return Err(format!(
                    "Temporary raw image copy could not be inspected: {error}"
                ));
            }
        }
    }

    Err("Unable to allocate a safe temporary raw image copy path".to_string())
}

fn remove_temp_file_if_safe(destination_dir: &Path, temp_path: &Path) -> Result<(), String> {
    ensure_existing_path_inside(destination_dir, temp_path, "Temporary raw image copy")?;
    ensure_regular_file_metadata(temp_path, "Temporary raw image copy")?;
    fs::remove_file(temp_path)
        .map_err(|error| format!("Unable to remove temporary raw image copy: {error}"))
}

fn sha256_file(path: &Path) -> Result<String, String> {
    ensure_regular_file_metadata(path, "Source image")?;

    let mut file = fs::File::open(path)
        .map_err(|error| format!("Unable to open selected image for SHA-256 hashing: {error}"))?;
    let mut hasher = Sha256::new();
    let mut buffer = [0_u8; 64 * 1024];

    loop {
        let bytes_read = file
            .read(&mut buffer)
            .map_err(|error| format!("Unable to read selected image for SHA-256 hashing: {error}"))?;
        if bytes_read == 0 {
            break;
        }
        hasher.update(&buffer[..bytes_read]);
    }

    Ok(format!("{:x}", hasher.finalize()))
}

fn supported_extension(path: &Path) -> Option<String> {
    let extension = path.extension()?.to_str()?.to_lowercase();
    SUPPORTED_EXTENSIONS
        .contains(&extension.as_str())
        .then_some(extension)
}

fn mime_type_for_extension(extension: &str) -> &'static str {
    match extension {
        "png" => "image/png",
        "jpg" | "jpeg" => "image/jpeg",
        "webp" => "image/webp",
        "tif" | "tiff" => "image/tiff",
        "bmp" => "image/bmp",
        _ => "application/octet-stream",
    }
}

fn validate_scale_factor(value: i64) -> Result<(), String> {
    if SUPPORTED_SCALE_FACTORS.contains(&value) {
        Ok(())
    } else {
        Err("Scale factor must be one of 2, 4, or 8".to_string())
    }
}

fn validate_output_format(value: &str) -> Result<String, String> {
    let normalized = value.trim().to_lowercase();
    if SUPPORTED_OUTPUT_FORMATS.contains(&normalized.as_str()) {
        Ok(normalized)
    } else {
        Err("Output format must be one of png, jpg, tiff, or webp".to_string())
    }
}

fn validate_id(field: &str, value: &str) -> Result<String, String> {
    let trimmed = value.trim();
    if trimmed.is_empty() || trimmed.chars().count() > 80 {
        return Err(format!("{field} is invalid"));
    }
    Ok(trimmed.to_string())
}

fn raw_assets_dir(paths: &AppPaths) -> PathBuf {
    paths.app_data_dir.join("assets").join("raw")
}

fn open_image_file_dialog() -> Result<Vec<PathBuf>, String> {
    let script = r#"
        Add-Type -AssemblyName System.Windows.Forms
        $dialog = New-Object System.Windows.Forms.OpenFileDialog
        $dialog.Title = 'Import local images'
        $dialog.Multiselect = $true
        $dialog.Filter = 'Supported images (*.png;*.jpg;*.jpeg;*.webp;*.tif;*.tiff;*.bmp)|*.png;*.jpg;*.jpeg;*.webp;*.tif;*.tiff;*.bmp'
        if ($dialog.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) {
          ConvertTo-Json -InputObject @($dialog.FileNames) -Compress
        } else {
          '[]'
        }
    "#;
    let output = Command::new("powershell")
        .args(["-NoProfile", "-STA", "-Command", script])
        .output()
        .map_err(|error| format!("Unable to open native image picker: {error}"))?;

    if !output.status.success() {
        return Err("Native image picker failed to open".to_string());
    }

    let stdout = String::from_utf8_lossy(&output.stdout);
    let trimmed = stdout.trim();
    if trimmed.is_empty() {
        return Ok(Vec::new());
    }

    serde_json::from_str::<Vec<String>>(trimmed)
        .map(|items| items.into_iter().map(PathBuf::from).collect())
        .map_err(|error| format!("Unable to parse native image picker result: {error}"))
}

fn open_folder_dialog() -> Result<Option<PathBuf>, String> {
    let script = r#"
        Add-Type -AssemblyName System.Windows.Forms
        $dialog = New-Object System.Windows.Forms.FolderBrowserDialog
        $dialog.Description = 'Import first-level images from folder'
        if ($dialog.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) {
          $dialog.SelectedPath | ConvertTo-Json -Compress
        } else {
          'null'
        }
    "#;
    let output = Command::new("powershell")
        .args(["-NoProfile", "-STA", "-Command", script])
        .output()
        .map_err(|error| format!("Unable to open native folder picker: {error}"))?;

    if !output.status.success() {
        return Err("Native folder picker failed to open".to_string());
    }

    let stdout = String::from_utf8_lossy(&output.stdout);
    let trimmed = stdout.trim();
    if trimmed == "null" || trimmed.is_empty() {
        return Ok(None);
    }

    serde_json::from_str::<String>(trimmed)
        .map(|path| Some(PathBuf::from(path)))
        .map_err(|error| format!("Unable to parse native folder picker result: {error}"))
}

fn new_local_id(prefix: &str) -> String {
    let counter = ID_COUNTER.fetch_add(1, Ordering::Relaxed);
    format!("{prefix}-{}-{counter}", Utc::now().timestamp_micros())
}

fn platform_relative_path(relative_path: &str) -> PathBuf {
    relative_path.split('/').collect()
}

fn preview_path(path: &Path) -> String {
    let file_name = path
        .file_name()
        .and_then(|value| value.to_str())
        .unwrap_or("unknown");
    let parent_name = path
        .parent()
        .and_then(|parent| parent.file_name())
        .and_then(|value| value.to_str())
        .unwrap_or("selected folder");
    format!("{parent_name}/{file_name}")
}

fn item_result(
    original_name: String,
    source_path_preview: String,
    status: &str,
    file_asset_id: Option<String>,
    queue_item_id: Option<String>,
    message: &str,
) -> ImageImportItemResult {
    ImageImportItemResult {
        original_name,
        source_path_preview,
        status: status.to_string(),
        file_asset_id,
        queue_item_id,
        message: message.to_string(),
    }
}

fn empty_import_result(message: &str) -> ImageImportResult {
    ImageImportResult {
        ok: true,
        summary: ImageImportSummary {
            selected: 0,
            imported: 0,
            queued: 0,
            duplicates: 0,
            skipped: 0,
            errors: 0,
        },
        items: Vec::new(),
        message: message.to_string(),
    }
}

fn log_upscale_event(
    paths: &AppPaths,
    event_type: &str,
    message: &str,
    metadata: serde_json::Value,
) -> Result<(), String> {
    write_audit_log_event(paths, event_type, message, Some(metadata.clone()))?;
    let entry = new_log_entry("info", "upscale", event_type, message, Some(metadata))?;
    write_log_entry(paths, &entry)
}
