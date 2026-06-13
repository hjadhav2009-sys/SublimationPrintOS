use crate::app_paths::{path_to_string, AppPaths};
use crate::engine::engine_paths;
use crate::file_utils::{ensure_regular_file_metadata, mime_type_for_extension, sha256_file};
use crate::logging::{new_log_entry, write_audit_log_event, write_log_entry};
use chrono::Utc;
use rusqlite::{params, Connection, OptionalExtension};
use serde::Serialize;
use std::fs::{self, File, OpenOptions};
use std::io::ErrorKind;
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};
use std::sync::atomic::{AtomicU64, Ordering};
use std::thread;
use std::time::{Duration, Instant};

const PROCESS_TIMEOUT_SECONDS: u64 = 10 * 60;
const PREVIEW_LIMIT: usize = 4000;
const MAX_BATCH_LIMIT: i64 = 100;
const ENGINE_NOT_READY_MESSAGE: &str =
    "Real-ESRGAN engine is not installed in the managed engine folder. Use Engine Setup below. Queue items were not changed.";
static ID_COUNTER: AtomicU64 = AtomicU64::new(1);

#[derive(Debug, Clone, Serialize)]
pub struct UpscaleProcessItemResult {
    pub ok: bool,
    pub queue_item_id: String,
    pub status: String,
    pub output_file_asset_id: Option<String>,
    pub output_relative_path: Option<String>,
    pub duration_ms: Option<i64>,
    pub message: String,
    pub error: Option<String>,
    pub stdout_preview: String,
    pub stderr_preview: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct UpscaleProcessBatchResult {
    pub ok: bool,
    pub attempted: usize,
    pub completed: usize,
    pub failed: usize,
    pub results: Vec<UpscaleProcessItemResult>,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct UpscaleProcessingStatus {
    pub ok: bool,
    pub queued: usize,
    pub processing: usize,
    pub completed: usize,
    pub failed: usize,
    pub removed: usize,
    pub message: String,
}

#[derive(Debug, Clone)]
struct ProcessingQueueItem {
    id: String,
    file_asset_id: String,
    raw_relative_path: String,
    raw_asset_type: String,
    status: String,
    desired_scale_factor: i64,
    desired_output_format: String,
}

struct OutputPlan {
    file_name: String,
    relative_path: String,
    output_dir: PathBuf,
    output_path: PathBuf,
}

#[derive(Debug, Clone)]
struct EngineRuntimePaths {
    engine_dir: PathBuf,
    binary_path: PathBuf,
}

struct ProcessingPreflight {
    raw_path: PathBuf,
    engine: EngineRuntimePaths,
}

struct CommandRunResult {
    exit_code: Option<i32>,
    stdout_preview: String,
    stderr_preview: String,
    timed_out: bool,
}

pub fn process_upscale_queue_item_for_paths(
    paths: &AppPaths,
    queue_item_id: String,
) -> Result<UpscaleProcessItemResult, String> {
    process_queue_item(paths, &validate_id("queue_item_id", &queue_item_id)?)
}

pub fn process_next_upscale_queue_item_for_paths(
    paths: &AppPaths,
) -> Result<UpscaleProcessBatchResult, String> {
    let connection = open_processing_connection(paths)?;
    let next_id = next_queued_item_id(&connection)?;
    drop(connection);

    let Some(next_id) = next_id else {
        return Ok(UpscaleProcessBatchResult {
            ok: true,
            attempted: 0,
            completed: 0,
            failed: 0,
            results: Vec::new(),
            message: "No queued upscale items are waiting".to_string(),
        });
    };

    let engine = match ensure_realesrgan_engine_ready(paths) {
        Ok(engine) => engine,
        Err(error) => return Ok(engine_not_ready_batch_result(error)),
    };

    let result = process_queue_item_with_engine(paths, &next_id, &engine)?;
    let completed = usize::from(result.status == "completed");
    let failed = usize::from(result.status == "failed");

    Ok(UpscaleProcessBatchResult {
        ok: result.ok,
        attempted: 1,
        completed,
        failed,
        message: result.message.clone(),
        results: vec![result],
    })
}

pub fn process_all_queued_upscale_items_for_paths(
    paths: &AppPaths,
    limit: Option<i64>,
) -> Result<UpscaleProcessBatchResult, String> {
    let limit = limit.unwrap_or(20);
    if !(1..=MAX_BATCH_LIMIT).contains(&limit) {
        return Err("Batch limit must be between 1 and 100".to_string());
    }

    let engine = match ensure_realesrgan_engine_ready(paths) {
        Ok(engine) => engine,
        Err(error) => return Ok(engine_not_ready_batch_result(error)),
    };

    let connection = open_processing_connection(paths)?;
    let queue_item_ids = queued_item_ids(&connection, limit)?;
    drop(connection);

    log_processing_event(
        paths,
        "info",
        "upscale_batch_started",
        "Upscale processing batch started",
        serde_json::json!({
            "requested_limit": limit,
            "selected": queue_item_ids.len()
        }),
    )?;

    let mut results = Vec::new();
    let mut completed = 0usize;
    let mut failed = 0usize;

    for queue_item_id in queue_item_ids {
        let result = process_queue_item_with_engine(paths, &queue_item_id, &engine)?;
        if result.status == "completed" {
            completed += 1;
        } else if result.status == "failed" {
            failed += 1;
        }
        results.push(result);
    }

    let attempted = results.len();
    let ok = failed == 0;
    let message = if attempted == 0 {
        "No queued upscale items are waiting".to_string()
    } else if ok {
        format!("Processed {completed} queued upscale item(s)")
    } else {
        format!("Processed {attempted} queued upscale item(s): {completed} completed, {failed} failed")
    };

    log_processing_event(
        paths,
        if ok { "info" } else { "warn" },
        "upscale_batch_completed",
        "Upscale processing batch completed",
        serde_json::json!({
            "attempted": attempted,
            "completed": completed,
            "failed": failed
        }),
    )?;

    Ok(UpscaleProcessBatchResult {
        ok,
        attempted,
        completed,
        failed,
        results,
        message,
    })
}

pub fn retry_failed_upscale_queue_item_for_paths(
    paths: &AppPaths,
    queue_item_id: String,
) -> Result<UpscaleProcessItemResult, String> {
    let queue_item_id = validate_id("queue_item_id", &queue_item_id)?;
    let connection = open_processing_connection(paths)?;
    let current_status = connection
        .query_row(
            "SELECT status FROM upscale_queue_items WHERE id = ?1",
            params![queue_item_id],
            |row| row.get::<_, String>(0),
        )
        .optional()
        .map_err(|error| format!("Unable to load queue item for retry: {error}"))?;

    match current_status.as_deref() {
        Some("failed") => {}
        Some(status) => {
            return Ok(non_processing_result(
                &queue_item_id,
                status,
                "Only failed queue items can be retried",
            ));
        }
        None => return Err("Queue item was not found".to_string()),
    }

    let engine = match ensure_realesrgan_engine_ready(paths) {
        Ok(engine) => engine,
        Err(error) => {
            return Ok(non_processing_result(&queue_item_id, "failed", &error));
        }
    };

    connection
        .execute(
            "
            UPDATE upscale_queue_items
            SET status = 'queued',
                processing_error = NULL,
                processing_started_at = NULL,
                processing_completed_at = NULL,
                processing_duration_ms = NULL,
                engine_stdout_preview = NULL,
                engine_stderr_preview = NULL,
                updated_at = ?1
            WHERE id = ?2 AND status = 'failed'
            ",
            params![Utc::now().to_rfc3339(), queue_item_id],
        )
        .map_err(|error| format!("Unable to reset failed queue item for retry: {error}"))?;
    drop(connection);

    process_queue_item_with_engine(paths, &queue_item_id, &engine)
}

pub fn get_upscale_processing_status_for_paths(
    paths: &AppPaths,
) -> Result<UpscaleProcessingStatus, String> {
    let connection = open_processing_connection(paths)?;
    processing_status(&connection)
}

pub fn repair_stale_processing_items_for_paths(
    paths: &AppPaths,
    confirm: String,
) -> Result<UpscaleProcessingStatus, String> {
    if confirm != "REPAIR_STALE_PROCESSING" {
        return Err("Repair stale processing confirmation did not match".to_string());
    }

    let connection = open_processing_connection(paths)?;
    let now = Utc::now().to_rfc3339();
    let changed = connection
        .execute(
            "
            UPDATE upscale_queue_items
            SET status = 'failed',
                processing_completed_at = ?1,
                processing_error = 'Processing was interrupted before completion',
                updated_at = ?1
            WHERE status = 'processing'
            ",
            params![now],
        )
        .map_err(|error| format!("Unable to repair stale processing items: {error}"))?;

    log_processing_event(
        paths,
        "warn",
        "stale_processing_repaired",
        "Stale upscale processing items repaired",
        serde_json::json!({
            "items_marked_failed": changed
        }),
    )?;

    processing_status(&connection)
}

fn process_queue_item(
    paths: &AppPaths,
    queue_item_id: &str,
) -> Result<UpscaleProcessItemResult, String> {
    let connection = open_processing_connection(paths)?;
    let item = load_processing_queue_item(&connection, queue_item_id)?;
    if item.status != "queued" && item.status != "failed" {
        return Ok(non_processing_result(
            &item.id,
            &item.status,
            "Queue item is not queued or failed",
        ));
    }
    drop(connection);

    let engine = match ensure_realesrgan_engine_ready(paths) {
        Ok(engine) => engine,
        Err(error) => return Ok(non_processing_result(&item.id, &item.status, &error)),
    };

    process_queue_item_with_engine(paths, queue_item_id, &engine)
}

fn process_queue_item_with_engine(
    paths: &AppPaths,
    queue_item_id: &str,
    engine: &EngineRuntimePaths,
) -> Result<UpscaleProcessItemResult, String> {
    let connection = open_processing_connection(paths)?;
    let item = load_processing_queue_item(&connection, queue_item_id)?;

    if item.status != "queued" && item.status != "failed" {
        return Ok(non_processing_result(
            &item.id,
            &item.status,
            "Queue item is not queued or failed",
        ));
    }

    let preflight = match preflight_processing_item(paths, &item, engine) {
        Ok(preflight) => preflight,
        Err(error) => return Ok(non_processing_result(&item.id, &item.status, &error)),
    };

    let started = Instant::now();
    let processing_started_at = Utc::now().to_rfc3339();
    connection
        .execute(
            "
            UPDATE upscale_queue_items
            SET status = 'processing',
                processing_started_at = ?1,
                processing_completed_at = NULL,
                processing_error = NULL,
                processing_duration_ms = NULL,
                output_file_asset_id = NULL,
                output_relative_path = NULL,
                engine_command_preview = NULL,
                engine_stdout_preview = NULL,
                engine_stderr_preview = NULL,
                updated_at = ?1
            WHERE id = ?2 AND status IN ('queued', 'failed')
            ",
            params![processing_started_at, item.id],
        )
        .map_err(|error| format!("Unable to mark queue item processing: {error}"))?;

    log_processing_event(
        paths,
        "info",
        "upscale_processing_started",
        "Upscale processing started",
        serde_json::json!({
            "queue_item_id": item.id,
            "file_asset_id": item.file_asset_id,
            "scale": item.desired_scale_factor,
            "format": item.desired_output_format
        }),
    )?;

    let command_preview = command_preview(item.desired_scale_factor);
    let processing_result = process_queue_item_after_marked_processing(
        paths,
        &connection,
        &item,
        &preflight,
        &command_preview,
        started,
    );

    match processing_result {
        Ok(result) => Ok(result),
        Err(error) => {
            let duration_ms = elapsed_ms(started);
            let result = fail_processing_item(
                paths,
                &connection,
                &item.id,
                &command_preview,
                "",
                "",
                duration_ms,
                &error,
            )?;
            Ok(result)
        }
    }
}

fn process_queue_item_after_marked_processing(
    paths: &AppPaths,
    connection: &Connection,
    item: &ProcessingQueueItem,
    preflight: &ProcessingPreflight,
    command_preview: &str,
    started: Instant,
) -> Result<UpscaleProcessItemResult, String> {
    let output_plan = build_output_plan(paths, item)?;
    if output_plan.output_path.exists() {
        remove_file_if_safe(
            &output_plan.output_dir,
            &output_plan.output_path,
            "Existing partial upscale output",
        )?;
    }
    ensure_child_path_inside_parent_for_creation(
        &output_plan.output_dir,
        &output_plan.output_path,
        "Upscaled output file",
    )?;

    let stdout_path = unique_temp_path(&output_plan.output_dir, &item.id, "stdout")?;
    let stderr_path = unique_temp_path(&output_plan.output_dir, &item.id, "stderr")?;
    ensure_child_path_inside_parent_for_creation(
        &output_plan.output_dir,
        &stdout_path,
        "Engine stdout temp file",
    )?;
    ensure_child_path_inside_parent_for_creation(
        &output_plan.output_dir,
        &stderr_path,
        "Engine stderr temp file",
    )?;

    let run_result = run_processing_command(
        &preflight.engine.binary_path,
        &preflight.engine.engine_dir,
        &preflight.raw_path,
        &output_plan.output_path,
        item.desired_scale_factor,
        &stdout_path,
        &stderr_path,
    )?;

    let duration_ms = elapsed_ms(started);
    let output_exists = output_plan.output_path.is_file();
    if !run_result.timed_out && run_result.exit_code == Some(0) && output_exists {
        ensure_existing_path_inside(
            &output_plan.output_dir,
            &output_plan.output_path,
            "Upscaled output file",
        )?;
        ensure_regular_file_metadata(&output_plan.output_path, "Upscaled output file")?;
        let metadata = fs::metadata(&output_plan.output_path)
            .map_err(|error| format!("Unable to inspect upscaled output file: {error}"))?;
        let sha256 = sha256_file(&output_plan.output_path, "Upscaled output file")?;
        let output_file_asset_id = insert_upscaled_file_asset(
            connection,
            &output_plan.file_name,
            &output_plan.relative_path,
            &item.desired_output_format,
            metadata.len(),
            &sha256,
        )?;
        let completed_at = Utc::now().to_rfc3339();

        connection
            .execute(
                "
                UPDATE upscale_queue_items
                SET status = 'completed',
                    output_file_asset_id = ?1,
                    output_relative_path = ?2,
                    processing_completed_at = ?3,
                    processing_duration_ms = ?4,
                    processing_error = NULL,
                    engine_command_preview = ?5,
                    engine_stdout_preview = ?6,
                    engine_stderr_preview = ?7,
                    updated_at = ?3
                WHERE id = ?8
                ",
                params![
                    output_file_asset_id,
                    output_plan.relative_path,
                    completed_at,
                    duration_ms,
                    command_preview,
                    run_result.stdout_preview,
                    run_result.stderr_preview,
                    item.id
                ],
            )
            .map_err(|error| format!("Unable to mark queue item completed: {error}"))?;

        log_processing_event(
            paths,
            "info",
            "upscale_processing_completed",
            "Upscale processing completed",
            serde_json::json!({
                "queue_item_id": item.id,
                "output_file_asset_id": output_file_asset_id,
                "output_relative_path": output_plan.relative_path,
                "duration_ms": duration_ms
            }),
        )?;

        Ok(UpscaleProcessItemResult {
            ok: true,
            queue_item_id: item.id.clone(),
            status: "completed".to_string(),
            output_file_asset_id: Some(output_file_asset_id),
            output_relative_path: Some(output_plan.relative_path),
            duration_ms: Some(duration_ms),
            message: "Upscale processing completed".to_string(),
            error: None,
            stdout_preview: run_result.stdout_preview,
            stderr_preview: run_result.stderr_preview,
        })
    } else {
        let mut error = if run_result.timed_out {
            "Real-ESRGAN processing timed out after 10 minutes".to_string()
        } else if run_result.exit_code != Some(0) {
            format!("Real-ESRGAN exited with code {:?}", run_result.exit_code)
        } else {
            "Real-ESRGAN reported success but no output file was created".to_string()
        };

        if output_plan.output_path.exists() {
            match remove_file_if_safe(
                &output_plan.output_dir,
                &output_plan.output_path,
                "Partial upscale output",
            ) {
                Ok(()) => error.push_str(". Partial output was removed."),
                Err(cleanup_error) => {
                    error.push_str(&format!(
                        ". Partial output cleanup failed: {cleanup_error}"
                    ));
                }
            }
        }

        fail_processing_item(
            paths,
            connection,
            &item.id,
            command_preview,
            &run_result.stdout_preview,
            &run_result.stderr_preview,
            duration_ms,
            &error,
        )
    }
}

fn fail_processing_item(
    paths: &AppPaths,
    connection: &Connection,
    queue_item_id: &str,
    command_preview: &str,
    stdout_preview: &str,
    stderr_preview: &str,
    duration_ms: i64,
    error: &str,
) -> Result<UpscaleProcessItemResult, String> {
    let completed_at = Utc::now().to_rfc3339();
    connection
        .execute(
            "
            UPDATE upscale_queue_items
            SET status = 'failed',
                output_file_asset_id = NULL,
                output_relative_path = NULL,
                processing_completed_at = ?1,
                processing_duration_ms = ?2,
                processing_error = ?3,
                engine_command_preview = ?4,
                engine_stdout_preview = ?5,
                engine_stderr_preview = ?6,
                updated_at = ?1
            WHERE id = ?7
            ",
            params![
                completed_at,
                duration_ms,
                error,
                command_preview,
                stdout_preview,
                stderr_preview,
                queue_item_id
            ],
        )
        .map_err(|update_error| format!("Unable to mark queue item failed: {update_error}"))?;

    log_processing_event(
        paths,
        "error",
        "upscale_processing_failed",
        "Upscale processing failed",
        serde_json::json!({
            "queue_item_id": queue_item_id,
            "error": preview_text(error, 500),
            "duration_ms": duration_ms
        }),
    )?;

    Ok(UpscaleProcessItemResult {
        ok: false,
        queue_item_id: queue_item_id.to_string(),
        status: "failed".to_string(),
        output_file_asset_id: None,
        output_relative_path: None,
        duration_ms: Some(duration_ms),
        message: error.to_string(),
        error: Some(error.to_string()),
        stdout_preview: stdout_preview.to_string(),
        stderr_preview: stderr_preview.to_string(),
    })
}

fn preflight_processing_item(
    paths: &AppPaths,
    item: &ProcessingQueueItem,
    engine: &EngineRuntimePaths,
) -> Result<ProcessingPreflight, String> {
    validate_output_format(&item.desired_output_format)?;
    validate_scale_factor(item.desired_scale_factor)?;
    if item.raw_asset_type != "raw_image" {
        return Err("Queue item does not reference a raw image asset".to_string());
    }

    let raw_root = ensure_assets_subdir(paths, "raw", "Raw assets folder")?;
    let raw_path = resolve_managed_relative_path(
        paths,
        &raw_root,
        &item.raw_relative_path,
        "assets/raw",
        "Raw image asset path",
    )?;
    ensure_regular_file_metadata(&raw_path, "Raw image asset")?;

    Ok(ProcessingPreflight {
        raw_path,
        engine: engine.clone(),
    })
}

fn ensure_realesrgan_engine_ready(paths: &AppPaths) -> Result<EngineRuntimePaths, String> {
    let result = || -> Result<EngineRuntimePaths, String> {
        let engine = engine_paths(paths);
        let models_root = paths.app_data_dir.join("models");

        ensure_real_directory_metadata(&models_root, "Models folder")?;
        ensure_existing_path_inside(&paths.app_data_dir, &models_root, "Models folder")?;
        ensure_real_directory_metadata(&engine.engine_dir, "Real-ESRGAN engine directory")?;
        ensure_existing_path_inside(
            &models_root,
            &engine.engine_dir,
            "Real-ESRGAN engine directory",
        )?;
        ensure_regular_file_metadata(&engine.binary_path, "Real-ESRGAN engine binary")?;
        ensure_real_directory_metadata(&engine.models_dir, "Real-ESRGAN models folder")?;
        ensure_existing_path_inside(
            &engine.engine_dir,
            &engine.binary_path,
            "Real-ESRGAN engine binary",
        )?;
        ensure_existing_path_inside(
            &engine.engine_dir,
            &engine.models_dir,
            "Real-ESRGAN models folder",
        )?;

        Ok(EngineRuntimePaths {
            engine_dir: engine.engine_dir,
            binary_path: engine.binary_path,
        })
    }();

    result.map_err(|_| ENGINE_NOT_READY_MESSAGE.to_string())
}

fn engine_not_ready_batch_result(message: String) -> UpscaleProcessBatchResult {
    UpscaleProcessBatchResult {
        ok: false,
        attempted: 0,
        completed: 0,
        failed: 0,
        results: Vec::new(),
        message,
    }
}

fn load_processing_queue_item(
    connection: &Connection,
    queue_item_id: &str,
) -> Result<ProcessingQueueItem, String> {
    connection
        .query_row(
            "
            SELECT
                q.id,
                q.file_asset_id,
                f.relative_path,
                f.asset_type,
                q.status,
                q.desired_scale_factor,
                q.desired_output_format
            FROM upscale_queue_items q
            JOIN file_assets f ON f.id = q.file_asset_id
            WHERE q.id = ?1
            ",
            params![queue_item_id],
            |row| {
                Ok(ProcessingQueueItem {
                    id: row.get(0)?,
                    file_asset_id: row.get(1)?,
                    raw_relative_path: row.get(2)?,
                    raw_asset_type: row.get(3)?,
                    status: row.get(4)?,
                    desired_scale_factor: row.get(5)?,
                    desired_output_format: row.get(6)?,
                })
            },
        )
        .optional()
        .map_err(|error| format!("Unable to load queue item: {error}"))?
        .ok_or_else(|| "Queue item was not found".to_string())
}

fn next_queued_item_id(connection: &Connection) -> Result<Option<String>, String> {
    connection
        .query_row(
            "
            SELECT id
            FROM upscale_queue_items
            WHERE status = 'queued'
            ORDER BY created_at ASC
            LIMIT 1
            ",
            [],
            |row| row.get::<_, String>(0),
        )
        .optional()
        .map_err(|error| format!("Unable to find next queued item: {error}"))
}

fn queued_item_ids(connection: &Connection, limit: i64) -> Result<Vec<String>, String> {
    let mut statement = connection
        .prepare(
            "
            SELECT id
            FROM upscale_queue_items
            WHERE status = 'queued'
            ORDER BY created_at ASC
            LIMIT ?1
            ",
        )
        .map_err(|error| format!("Unable to prepare queued item query: {error}"))?;
    let rows = statement
        .query_map(params![limit], |row| row.get::<_, String>(0))
        .map_err(|error| format!("Unable to query queued items: {error}"))?;

    let mut ids = Vec::new();
    for row in rows {
        ids.push(row.map_err(|error| format!("Unable to read queued item row: {error}"))?);
    }

    Ok(ids)
}

fn processing_status(connection: &Connection) -> Result<UpscaleProcessingStatus, String> {
    let mut status = UpscaleProcessingStatus {
        ok: true,
        queued: 0,
        processing: 0,
        completed: 0,
        failed: 0,
        removed: 0,
        message: "Upscale processing status loaded".to_string(),
    };
    let mut statement = connection
        .prepare("SELECT status, COUNT(*) FROM upscale_queue_items GROUP BY status")
        .map_err(|error| format!("Unable to prepare processing status query: {error}"))?;
    let rows = statement
        .query_map([], |row| {
            Ok((row.get::<_, String>(0)?, row.get::<_, i64>(1)?))
        })
        .map_err(|error| format!("Unable to query processing status: {error}"))?;

    for row in rows {
        let (queue_status, count) =
            row.map_err(|error| format!("Unable to read processing status row: {error}"))?;
        let count = usize::try_from(count).unwrap_or(0);
        match queue_status.as_str() {
            "queued" => status.queued = count,
            "processing" => status.processing = count,
            "completed" => status.completed = count,
            "failed" | "error" => status.failed += count,
            "removed" => status.removed = count,
            _ => {}
        }
    }

    Ok(status)
}

fn insert_upscaled_file_asset(
    connection: &Connection,
    original_name: &str,
    relative_path: &str,
    extension: &str,
    size_bytes: u64,
    sha256: &str,
) -> Result<String, String> {
    let id = new_local_id("asset");
    let now = Utc::now().to_rfc3339();
    let size_bytes = i64::try_from(size_bytes)
        .map_err(|_| "Upscaled file size could not be represented in SQLite".to_string())?;

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
            VALUES (?1, ?2, ?3, 'upscaled_image', ?4, ?5, ?6, ?7, ?7)
            ",
            params![
                id,
                original_name,
                relative_path,
                mime_type_for_extension(extension),
                size_bytes,
                sha256,
                now
            ],
        )
        .map_err(|error| format!("Unable to register upscaled image asset: {error}"))?;

    Ok(id)
}

fn build_output_plan(paths: &AppPaths, item: &ProcessingQueueItem) -> Result<OutputPlan, String> {
    let upscaled_root = ensure_assets_subdir(paths, "upscaled", "Upscaled assets folder")?;
    let day = Utc::now().format("%Y%m%d").to_string();
    let output_dir = upscaled_root.join(&day);
    ensure_child_path_inside_parent_for_creation(
        &upscaled_root,
        &output_dir,
        "Upscaled output day folder",
    )?;
    ensure_directory_exists_without_symlink(&output_dir, "Upscaled output day folder")?;
    ensure_existing_path_inside(&upscaled_root, &output_dir, "Upscaled output day folder")?;

    let safe_queue_id = sanitize_file_stem(&item.id);
    let file_name = format!(
        "{safe_queue_id}-x{}.{}",
        item.desired_scale_factor, item.desired_output_format
    );
    let relative_path = format!("assets/upscaled/{day}/{file_name}");
    let output_path = output_dir.join(&file_name);
    let resolved = resolve_output_relative_path(paths, &upscaled_root, &relative_path)?;
    if resolved != output_path {
        return Err("Upscaled output path resolved unexpectedly and was blocked".to_string());
    }

    Ok(OutputPlan {
        file_name,
        relative_path,
        output_dir,
        output_path,
    })
}

fn ensure_assets_subdir(paths: &AppPaths, name: &str, label: &str) -> Result<PathBuf, String> {
    ensure_directory_exists_without_symlink(&paths.app_data_dir, "AppData folder")?;
    let assets_dir = paths.app_data_dir.join("assets");
    ensure_child_path_inside_parent_for_creation(&paths.app_data_dir, &assets_dir, "Assets folder")?;
    ensure_directory_exists_without_symlink(&assets_dir, "Assets folder")?;
    ensure_existing_path_inside(&paths.app_data_dir, &assets_dir, "Assets folder")?;

    let target = assets_dir.join(name);
    ensure_child_path_inside_parent_for_creation(&assets_dir, &target, label)?;
    ensure_directory_exists_without_symlink(&target, label)?;
    ensure_existing_path_inside(&assets_dir, &target, label)?;
    Ok(target)
}

fn resolve_managed_relative_path(
    paths: &AppPaths,
    managed_root: &Path,
    relative_path: &str,
    expected_prefix: &str,
    label: &str,
) -> Result<PathBuf, String> {
    let relative_path = validated_relative_path(relative_path, expected_prefix, label)?;
    let relative_root = platform_relative_path(expected_prefix)?;
    let managed_relative_path = relative_path
        .strip_prefix(&relative_root)
        .map_err(|_| format!("{label} resolved outside managed folder and was blocked"))?;
    if managed_relative_path.as_os_str().is_empty() {
        return Err(format!("{label} resolved outside managed folder and was blocked"));
    }

    let resolved_path = managed_root.join(managed_relative_path);
    if resolved_path != paths.app_data_dir.join(&relative_path) {
        return Err(format!("{label} resolved outside AppData and was blocked"));
    }
    ensure_existing_path_inside(managed_root, &resolved_path, label)?;
    Ok(resolved_path)
}

fn resolve_output_relative_path(
    paths: &AppPaths,
    upscaled_root: &Path,
    relative_path: &str,
) -> Result<PathBuf, String> {
    let relative_path = validated_relative_path(
        relative_path,
        "assets/upscaled",
        "Upscaled output relative path",
    )?;
    let relative_root = platform_relative_path("assets/upscaled")?;
    let managed_relative_path = relative_path
        .strip_prefix(&relative_root)
        .map_err(|_| "Upscaled output path resolved outside managed folder and was blocked".to_string())?;
    if managed_relative_path.as_os_str().is_empty() {
        return Err("Upscaled output path resolved outside managed folder and was blocked".to_string());
    }

    let resolved_path = upscaled_root.join(managed_relative_path);
    if resolved_path != paths.app_data_dir.join(&relative_path) {
        return Err("Upscaled output path resolved outside AppData and was blocked".to_string());
    }
    Ok(resolved_path)
}

fn validated_relative_path(
    relative_path: &str,
    expected_prefix: &str,
    label: &str,
) -> Result<PathBuf, String> {
    let trimmed = relative_path.trim();
    if trimmed.is_empty()
        || trimmed.contains('\\')
        || trimmed.starts_with('/')
        || trimmed.split('/').any(|part| part.is_empty())
    {
        return Err(format!("{label} is not a safe AppData relative path"));
    }

    let path = platform_relative_path(trimmed)?;
    let prefix = platform_relative_path(expected_prefix)?;
    if path.is_absolute()
        || path.components().any(|component| {
            matches!(
                component,
                std::path::Component::CurDir
                    | std::path::Component::ParentDir
                    | std::path::Component::Prefix(_)
                    | std::path::Component::RootDir
            )
        })
        || !path.starts_with(&prefix)
    {
        return Err(format!("{label} resolved outside its managed folder and was blocked"));
    }

    Ok(path)
}

fn platform_relative_path(relative_path: &str) -> Result<PathBuf, String> {
    if relative_path.contains('\\') {
        return Err("Backslash path separators are not accepted in managed relative paths".to_string());
    }
    Ok(relative_path.split('/').collect())
}

fn run_processing_command(
    executable: &Path,
    current_dir: &Path,
    input_path: &Path,
    output_path: &Path,
    scale: i64,
    stdout_path: &Path,
    stderr_path: &Path,
) -> Result<CommandRunResult, String> {
    let stdout_file = create_new_temp_file(stdout_path, "engine stdout temp file")?;
    let stderr_file = match create_new_temp_file(stderr_path, "engine stderr temp file") {
        Ok(file) => file,
        Err(error) => {
            drop(stdout_file);
            cleanup_temp_files(stdout_path, stderr_path);
            return Err(error);
        }
    };

    let mut command = Command::new(executable);
    command
        .arg("-i")
        .arg(input_path)
        .arg("-o")
        .arg(output_path)
        .arg("-s")
        .arg(scale.to_string())
        .current_dir(current_dir)
        .stdin(Stdio::null())
        .stdout(Stdio::from(stdout_file))
        .stderr(Stdio::from(stderr_file));

    #[cfg(windows)]
    {
        use std::os::windows::process::CommandExt;
        command.creation_flags(0x08000000);
    }

    let mut child = match command.spawn() {
        Ok(child) => child,
        Err(error) => {
            drop(command);
            cleanup_temp_files(stdout_path, stderr_path);
            return Err(format!("Unable to start Real-ESRGAN processing: {error}"));
        }
    };
    let started_at = Instant::now();
    let mut timed_out = false;
    let exit_code = loop {
        match child.try_wait() {
            Ok(Some(status)) => break status.code(),
            Ok(None) => {}
            Err(error) => {
                let _ = child.kill();
                let _ = child.wait();
                cleanup_temp_files(stdout_path, stderr_path);
                return Err(format!("Unable to monitor Real-ESRGAN processing: {error}"));
            }
        }

        if started_at.elapsed() >= Duration::from_secs(PROCESS_TIMEOUT_SECONDS) {
            timed_out = true;
            let _ = child.kill();
            let status = match child.wait() {
                Ok(status) => status,
                Err(error) => {
                    cleanup_temp_files(stdout_path, stderr_path);
                    return Err(format!(
                        "Unable to stop timed out Real-ESRGAN processing: {error}"
                    ));
                }
            };
            break status.code();
        }

        thread::sleep(Duration::from_millis(150));
    };

    let stdout_preview = fs::read_to_string(stdout_path)
        .map(|content| preview_text(&content, PREVIEW_LIMIT))
        .unwrap_or_default();
    let stderr_preview = fs::read_to_string(stderr_path)
        .map(|content| preview_text(&content, PREVIEW_LIMIT))
        .unwrap_or_default();
    let temp_parent = stdout_path
        .parent()
        .ok_or_else(|| "Engine temp file has no parent folder".to_string())?;
    let _ = remove_file_if_safe(temp_parent, stdout_path, "Engine stdout temp file");
    let _ = remove_file_if_safe(temp_parent, stderr_path, "Engine stderr temp file");

    Ok(CommandRunResult {
        exit_code,
        stdout_preview,
        stderr_preview,
        timed_out,
    })
}

fn cleanup_temp_files(stdout_path: &Path, stderr_path: &Path) {
    if let Some(parent) = stdout_path.parent() {
        let _ = remove_file_if_safe(parent, stdout_path, "Engine stdout temp file");
        let _ = remove_file_if_safe(parent, stderr_path, "Engine stderr temp file");
    }
}

fn create_new_temp_file(path: &Path, label: &str) -> Result<File, String> {
    match fs::symlink_metadata(path) {
        Ok(_) => return Err(format!("{label} already exists and was blocked")),
        Err(error) if error.kind() != ErrorKind::NotFound => {
            return Err(format!("{label} could not be inspected: {error}"));
        }
        Err(_) => {}
    }

    OpenOptions::new()
        .write(true)
        .create_new(true)
        .open(path)
        .map_err(|error| format!("Unable to create {label}: {error}"))
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
            fs::create_dir(path).map_err(|error| format!("Unable to create {label}: {error}"))?;
            ensure_real_directory_metadata(path, label)
        }
        Err(error) => Err(format!("{label} could not be inspected: {error}")),
    }
}

fn remove_file_if_safe(parent: &Path, path: &Path, label: &str) -> Result<(), String> {
    ensure_existing_path_inside(parent, path, label)?;
    ensure_regular_file_metadata(path, label)?;
    fs::remove_file(path).map_err(|error| format!("Unable to remove {label}: {error}"))
}

fn unique_temp_path(parent: &Path, queue_item_id: &str, kind: &str) -> Result<PathBuf, String> {
    let safe_queue_id = sanitize_file_stem(queue_item_id);
    for _ in 0..10 {
        let path = parent.join(format!(
            ".{safe_queue_id}-{}-{kind}.tmp",
            Utc::now().timestamp_micros()
        ));
        match fs::symlink_metadata(&path) {
            Ok(_) => continue,
            Err(error) if error.kind() == ErrorKind::NotFound => return Ok(path),
            Err(error) => return Err(format!("Engine temp file could not be inspected: {error}")),
        }
    }

    Err("Unable to allocate a safe engine temp file".to_string())
}

fn validate_id(field: &str, value: &str) -> Result<String, String> {
    let trimmed = value.trim();
    if trimmed.is_empty() || trimmed.chars().count() > 80 {
        return Err(format!("{field} is invalid"));
    }
    Ok(trimmed.to_string())
}

fn validate_scale_factor(value: i64) -> Result<(), String> {
    if matches!(value, 2 | 4 | 8) {
        Ok(())
    } else {
        Err("Scale factor must be one of 2, 4, or 8".to_string())
    }
}

fn validate_output_format(value: &str) -> Result<(), String> {
    if matches!(value, "png" | "jpg" | "tiff" | "webp") {
        Ok(())
    } else {
        Err("Output format must be one of png, jpg, tiff, or webp".to_string())
    }
}

fn sanitize_file_stem(value: &str) -> String {
    let sanitized: String = value
        .chars()
        .take(80)
        .map(|character| {
            if character.is_ascii_alphanumeric() || character == '-' || character == '_' {
                character
            } else {
                '_'
            }
        })
        .collect();

    if sanitized.is_empty() {
        "queue-item".to_string()
    } else {
        sanitized
    }
}

fn command_preview(scale: i64) -> String {
    format!("{} -i <raw-image> -o <output> -s {scale}", expected_binary_file_name())
}

fn expected_binary_file_name() -> &'static str {
    if cfg!(windows) {
        "realesrgan-ncnn-vulkan.exe"
    } else {
        "realesrgan-ncnn-vulkan"
    }
}

fn non_processing_result(
    queue_item_id: &str,
    status: &str,
    message: &str,
) -> UpscaleProcessItemResult {
    UpscaleProcessItemResult {
        ok: false,
        queue_item_id: queue_item_id.to_string(),
        status: status.to_string(),
        output_file_asset_id: None,
        output_relative_path: None,
        duration_ms: None,
        message: message.to_string(),
        error: Some(message.to_string()),
        stdout_preview: String::new(),
        stderr_preview: String::new(),
    }
}

fn elapsed_ms(started: Instant) -> i64 {
    i64::try_from(started.elapsed().as_millis()).unwrap_or(i64::MAX)
}

fn preview_text(value: &str, limit: usize) -> String {
    value.chars().take(limit).collect()
}

fn new_local_id(prefix: &str) -> String {
    let counter = ID_COUNTER.fetch_add(1, Ordering::Relaxed);
    format!("{prefix}-{}-{counter}", Utc::now().timestamp_micros())
}

fn log_processing_event(
    paths: &AppPaths,
    level: &str,
    event_type: &str,
    message: &str,
    metadata: serde_json::Value,
) -> Result<(), String> {
    write_audit_log_event(paths, event_type, message, Some(metadata.clone()))?;
    let entry = new_log_entry(level, "upscale", event_type, message, Some(metadata))?;
    write_log_entry(paths, &entry)
}

fn open_processing_connection(paths: &AppPaths) -> Result<Connection, String> {
    let connection = Connection::open(&paths.database_path).map_err(|error| {
        format!(
            "Unable to open upscale processing database at {}: {error}",
            path_to_string(&paths.database_path)
        )
    })?;

    connection
        .execute_batch("PRAGMA foreign_keys = ON;")
        .map_err(|error| format!("Unable to enable SQLite foreign keys: {error}"))?;

    Ok(connection)
}
