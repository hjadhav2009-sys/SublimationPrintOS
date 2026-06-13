use crate::app_paths::{path_to_string, AppPaths};
use crate::engine::engine_paths;
use crate::file_utils::{ensure_regular_file_metadata, mime_type_for_extension, sha256_file};
use crate::logging::{new_log_entry, write_audit_log_event, write_log_entry};
use chrono::Utc;
use rusqlite::{params, Connection, OptionalExtension};
use serde::{Deserialize, Serialize};
use std::fs::{self, File, OpenOptions};
use std::io::{ErrorKind, Read};
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};
use std::sync::atomic::{AtomicU64, Ordering};
use std::thread;
use std::time::{Duration, Instant};

const PROCESS_TIMEOUT_SECONDS: u64 = 10 * 60;
const PREVIEW_LIMIT: usize = 4000;
const MAX_BATCH_LIMIT: i64 = 100;
const MAX_PHASE1_TARGET_LONG_EDGE: u32 = 10_000;
const TARGET_8K_LONG_EDGE: u32 = 7_680;
const MAX_FINAL_RESIZE_MEGAPIXELS: f64 = 90.0;
const ENGINE_NOT_READY_MESSAGE: &str =
    "Real-ESRGAN engine is not installed in the managed engine folder. Use Engine Setup below. Queue items were not changed.";
const ENGINE_NOT_READY_BATCH_MESSAGE: &str = "Engine is not ready. Queue items were not changed.";
const MISSING_RAW_MESSAGE: &str =
    "Raw image copy is missing from AppData. Re-import the original image or remove this queue item.";
const INVALID_RAW_PATH_MESSAGE: &str =
    "Raw image path is not a safe AppData raw file.";
const INTERRUPTED_JOB_MESSAGE: &str =
    "Processing was interrupted before completion. Start the image again.";
const CANCELLED_PROCESSING_MESSAGE: &str = "Processing was cancelled by user.";
const PROCESSING_TIMEOUT_MESSAGE: &str =
    "Processing timed out after 10 minutes. Try Production Fast, smaller target, or Large Output Safe.";
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

#[derive(Debug, Clone, Serialize)]
pub struct UpscaleQueueAssetHealthItem {
    pub queue_item_id: String,
    pub original_name: String,
    pub status: String,
    pub relative_path: String,
    pub health: String,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct UpscaleQueueAssetHealth {
    pub ok: bool,
    pub checked: usize,
    pub healthy: usize,
    pub missing_raw: usize,
    pub invalid_path: usize,
    pub items: Vec<UpscaleQueueAssetHealthItem>,
    pub message: String,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct UpscaleProcessingPlanInput {
    pub mode: String,
    pub scale: Option<i64>,
    pub target_long_edge_px: Option<u32>,
    pub quality_mode: String,
    pub output_format: String,
    pub tile_size: serde_json::Value,
    pub preset_id: Option<String>,
    pub preset_label: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
pub struct StartUpscaleProcessingJobResult {
    pub ok: bool,
    pub job_id: String,
    pub queue_item_id: String,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct UpscaleProcessingJobStatus {
    pub ok: bool,
    pub job_id: String,
    pub queue_item_id: String,
    pub status: String,
    pub stage: String,
    pub progress_label: String,
    pub started_at: Option<String>,
    pub completed_at: Option<String>,
    pub output_relative_path: Option<String>,
    pub error: Option<String>,
    pub stdout_preview: String,
    pub stderr_preview: String,
    pub message: String,
    pub target_label: String,
    pub quality_mode: String,
    pub tile_size: String,
    pub preset_id: Option<String>,
    pub preset_label: Option<String>,
    pub resolved_tile_size: i64,
    pub pass_count: usize,
    pub source_width: u32,
    pub source_height: u32,
    pub target_width: u32,
    pub target_height: u32,
    pub target_megapixels: f64,
    pub size_category: String,
    pub engine_pid: Option<i64>,
    pub cancel_requested_at: Option<String>,
    pub cancelled_at: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
pub struct UpscaleInterruptedJobRepairResult {
    pub ok: bool,
    pub repaired_jobs: usize,
    pub repaired_queue_items: usize,
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
    models_dir: PathBuf,
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
    cancelled: bool,
}

struct CommandCancelContext<'a> {
    paths: &'a AppPaths,
    job_id: &'a str,
}

enum ProcessingPreflightError {
    RawAssetUnavailable(String),
    Other(String),
}

enum RawAssetHealth {
    Healthy(PathBuf),
    MissingRaw,
    InvalidPath,
}

#[derive(Debug, Clone, Copy)]
struct ImageDimensions {
    width: u32,
    height: u32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct PlannedUpscaleJob {
    preset_id: Option<String>,
    preset_label: Option<String>,
    mode: String,
    target_label: String,
    quality_mode: String,
    output_format: String,
    tile_size_label: String,
    tile_size: i64,
    #[serde(default)]
    resolved_tile_size: i64,
    #[serde(default)]
    pass_count: usize,
    source_width: u32,
    source_height: u32,
    target_width: u32,
    target_height: u32,
    target_megapixels: f64,
    size_category: String,
    passes: Vec<i64>,
    needs_final_resize: bool,
}

struct JobOutputPlan {
    file_name: String,
    relative_path: String,
    output_dir: PathBuf,
    output_path: PathBuf,
    temp_dir: PathBuf,
}

pub fn process_upscale_queue_item_for_paths(
    paths: &AppPaths,
    queue_item_id: String,
) -> Result<UpscaleProcessItemResult, String> {
    process_queue_item(paths, &validate_id("queue_item_id", &queue_item_id)?)
}

pub fn start_upscale_processing_job_for_paths(
    paths: &AppPaths,
    queue_item_id: String,
    plan: UpscaleProcessingPlanInput,
) -> Result<StartUpscaleProcessingJobResult, String> {
    let queue_item_id = validate_id("queue_item_id", &queue_item_id)?;
    let connection = open_processing_connection(paths)?;

    if let Some(active_job) = active_upscale_processing_job(&connection)? {
        return Ok(StartUpscaleProcessingJobResult {
            ok: false,
            job_id: active_job.job_id,
            queue_item_id,
            message: "Another image is processing. Wait for it to finish.".to_string(),
        });
    }

    let item = load_processing_queue_item(&connection, &queue_item_id)?;
    if item.status != "queued" && item.status != "failed" {
        return Ok(StartUpscaleProcessingJobResult {
            ok: false,
            job_id: String::new(),
            queue_item_id: item.id,
            message: "Queue item is not queued or failed".to_string(),
        });
    }

    let engine = match ensure_realesrgan_engine_ready(paths) {
        Ok(engine) => engine,
        Err(_) => {
            return Ok(StartUpscaleProcessingJobResult {
                ok: false,
                job_id: String::new(),
                queue_item_id: item.id,
                message: ENGINE_NOT_READY_BATCH_MESSAGE.to_string(),
            });
        }
    };

    let preflight = match preflight_processing_item(paths, &item, &engine) {
        Ok(preflight) => preflight,
        Err(ProcessingPreflightError::RawAssetUnavailable(error)) => {
            let _ = fail_queue_item_before_processing(paths, &connection, &item.id, &error)?;
            return Ok(StartUpscaleProcessingJobResult {
                ok: false,
                job_id: String::new(),
                queue_item_id: item.id,
                message: error,
            });
        }
        Err(ProcessingPreflightError::Other(error)) => {
            return Ok(StartUpscaleProcessingJobResult {
                ok: false,
                job_id: String::new(),
                queue_item_id: item.id,
                message: error,
            });
        }
    };

    let source_dimensions = read_image_dimensions(&preflight.raw_path)?;
    let planned = build_upscale_processing_plan(&plan, source_dimensions)?;
    let job_id = new_local_id("upscale-job");
    insert_upscale_processing_job(&connection, &job_id, &item.id, &planned)?;
    drop(connection);

    let worker_paths = paths.clone();
    let worker_job_id = job_id.clone();
    tauri::async_runtime::spawn_blocking(move || {
        if let Err(error) = run_upscale_processing_job(worker_paths.clone(), worker_job_id.clone()) {
            let _ = mark_upscale_processing_job_failed_for_paths(
                &worker_paths,
                &worker_job_id,
                "failed",
                &error,
                "",
                "",
            );
        }
    });

    Ok(StartUpscaleProcessingJobResult {
        ok: true,
        job_id,
        queue_item_id: item.id,
        message: "Processing in background. You can keep the app open. Do not start another image until this finishes.".to_string(),
    })
}

pub fn get_upscale_processing_job_for_paths(
    paths: &AppPaths,
    job_id: String,
) -> Result<UpscaleProcessingJobStatus, String> {
    let job_id = validate_id("job_id", &job_id)?;
    let connection = open_processing_connection(paths)?;
    load_upscale_processing_job(&connection, &job_id)
}

pub fn get_active_upscale_processing_job_for_paths(
    paths: &AppPaths,
) -> Result<Option<UpscaleProcessingJobStatus>, String> {
    let connection = open_processing_connection(paths)?;
    active_upscale_processing_job(&connection)
}

pub fn request_cancel_upscale_processing_job_for_paths(
    paths: &AppPaths,
    job_id: String,
    confirm: String,
) -> Result<UpscaleProcessingJobStatus, String> {
    if confirm != "CANCEL_UPSCALE_PROCESSING_JOB" {
        return Err("Cancel upscale processing job confirmation did not match".to_string());
    }

    let job_id = validate_id("job_id", &job_id)?;
    let connection = open_processing_connection(paths)?;
    let now = Utc::now().to_rfc3339();
    let changed = connection
        .execute(
            "
            UPDATE upscale_processing_jobs
            SET status = 'cancel_requested',
                stage = 'cancel_requested',
                progress_label = 'Stopping processing safely',
                cancel_requested_at = COALESCE(cancel_requested_at, ?1),
                updated_at = ?1
            WHERE id = ?2 AND status IN ('pending', 'running', 'cancel_requested')
            ",
            params![now, job_id],
        )
        .map_err(|error| format!("Unable to request upscale job cancellation: {error}"))?;

    if changed == 0 {
        let existing = connection
            .query_row(
                "SELECT status FROM upscale_processing_jobs WHERE id = ?1",
                params![job_id],
                |row| row.get::<_, String>(0),
            )
            .optional()
            .map_err(|error| format!("Unable to inspect upscale job for cancellation: {error}"))?;

        if existing.is_none() {
            return Err("Upscale processing job was not found".to_string());
        }
        return Err("Only active upscale jobs can be cancelled".to_string());
    }

    load_upscale_processing_job(&connection, &job_id)
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
            message: "No ready images in queue.".to_string(),
        });
    };

    let engine = match ensure_realesrgan_engine_ready(paths) {
        Ok(engine) => engine,
        Err(error) => return Ok(engine_not_ready_batch_result(error)),
    };

    let result = process_queue_item_with_engine(paths, &next_id, &engine)?;
    let completed = usize::from(result.status == "completed");
    let failed = usize::from(result.status == "failed" || !result.ok);

    Ok(UpscaleProcessBatchResult {
        ok: result.ok,
        attempted: 1,
        completed,
        failed,
        message: batch_message_for_counts(1, completed, failed),
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
        } else if result.status == "failed" || !result.ok {
            failed += 1;
        }
        results.push(result);
    }

    let attempted = results.len();
    let ok = failed == 0;
    let message = batch_message_for_counts(attempted, completed, failed);

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

pub fn get_upscale_queue_asset_health_for_paths(
    paths: &AppPaths,
) -> Result<UpscaleQueueAssetHealth, String> {
    let connection = open_processing_connection(paths)?;
    queue_asset_health(paths, &connection)
}

pub fn repair_missing_raw_queue_items_for_paths(
    paths: &AppPaths,
    confirm: String,
) -> Result<UpscaleQueueAssetHealth, String> {
    if confirm != "REPAIR_MISSING_RAW_QUEUE_ITEMS" {
        return Err("Repair missing raw queue items confirmation did not match".to_string());
    }

    let connection = open_processing_connection(paths)?;
    let items = queue_asset_health_items(paths, &connection, "q.status IN ('queued', 'failed')")?;
    let now = Utc::now().to_rfc3339();
    let mut changed = 0usize;

    for item in items
        .iter()
        .filter(|item| item.health == "missing_raw" || item.health == "invalid_path")
    {
        changed += connection
            .execute(
                "
                UPDATE upscale_queue_items
                SET status = 'failed',
                    output_file_asset_id = NULL,
                    output_relative_path = NULL,
                    processing_started_at = NULL,
                    processing_completed_at = ?1,
                    processing_duration_ms = NULL,
                    processing_error = ?2,
                    engine_command_preview = NULL,
                    engine_stdout_preview = NULL,
                    engine_stderr_preview = NULL,
                    updated_at = ?1
                WHERE id = ?3 AND status IN ('queued', 'failed')
                ",
                params![now, MISSING_RAW_MESSAGE, item.queue_item_id],
            )
            .map_err(|error| format!("Unable to mark missing raw queue item failed: {error}"))?;
    }

    log_processing_event(
        paths,
        if changed == 0 { "info" } else { "warn" },
        "missing_raw_queue_items_repaired",
        "Missing raw queue items marked failed",
        serde_json::json!({
            "items_marked_failed": changed
        }),
    )?;

    queue_asset_health(paths, &connection)
}

pub fn repair_interrupted_upscale_processing_job_for_paths(
    paths: &AppPaths,
    confirm: String,
) -> Result<UpscaleInterruptedJobRepairResult, String> {
    if confirm != "REPAIR_INTERRUPTED_UPSCALE_JOB" {
        return Err("Repair interrupted upscale job confirmation did not match".to_string());
    }

    let connection = open_processing_connection(paths)?;
    let mut statement = connection
        .prepare(
            "
            SELECT id, queue_item_id
            FROM upscale_processing_jobs
            WHERE status IN ('pending', 'running', 'cancel_requested')
            ORDER BY created_at ASC
            ",
        )
        .map_err(|error| format!("Unable to prepare interrupted job query: {error}"))?;
    let rows = statement
        .query_map([], |row| Ok((row.get::<_, String>(0)?, row.get::<_, String>(1)?)))
        .map_err(|error| format!("Unable to query interrupted jobs: {error}"))?;

    let mut jobs = Vec::new();
    for row in rows {
        jobs.push(row.map_err(|error| format!("Unable to read interrupted job row: {error}"))?);
    }
    drop(statement);

    let now = Utc::now().to_rfc3339();
    let mut repaired_jobs = 0usize;
    let mut repaired_queue_items = 0usize;

    for (job_id, queue_item_id) in jobs {
        repaired_jobs += connection
            .execute(
                "
                UPDATE upscale_processing_jobs
                SET status = 'failed',
                    stage = 'interrupted',
                    progress_label = 'Job was marked interrupted',
                    error_message = ?1,
                    engine_pid = NULL,
                    completed_at = ?2,
                    updated_at = ?2
                WHERE id = ?3 AND status IN ('pending', 'running', 'cancel_requested')
                ",
                params![INTERRUPTED_JOB_MESSAGE, now, job_id],
            )
            .map_err(|error| format!("Unable to repair interrupted upscale job: {error}"))?;

        repaired_queue_items += connection
            .execute(
                "
                UPDATE upscale_queue_items
                SET status = 'failed',
                    processing_error = ?1,
                    processing_completed_at = ?2,
                    updated_at = ?2
                WHERE id = ?3 AND status = 'processing'
                ",
                params![INTERRUPTED_JOB_MESSAGE, now, queue_item_id],
            )
            .map_err(|error| {
                format!("Unable to repair queue item for interrupted upscale job: {error}")
            })?;
    }

    log_processing_event(
        paths,
        if repaired_jobs > 0 { "warn" } else { "info" },
        "interrupted_upscale_job_repaired",
        "Interrupted upscale processing job repair checked",
        serde_json::json!({
            "repaired_jobs": repaired_jobs,
            "repaired_queue_items": repaired_queue_items
        }),
    )?;

    Ok(UpscaleInterruptedJobRepairResult {
        ok: true,
        repaired_jobs,
        repaired_queue_items,
        message: if repaired_jobs > 0 {
            "Interrupted processing job repaired. You can start processing again.".to_string()
        } else {
            "No interrupted processing job was found.".to_string()
        },
    })
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
        Err(ProcessingPreflightError::RawAssetUnavailable(error)) => {
            return fail_queue_item_before_processing(paths, &connection, &item.id, &error);
        }
        Err(ProcessingPreflightError::Other(error)) => {
            return Ok(non_processing_result(&item.id, &item.status, &error));
        }
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
        &preflight.engine.models_dir,
        &preflight.raw_path,
        &output_plan.output_path,
        item.desired_scale_factor,
        128,
        &item.desired_output_format,
        &stdout_path,
        &stderr_path,
        None,
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
            message: "Processed 1 image successfully.".to_string(),
            error: None,
            stdout_preview: run_result.stdout_preview,
            stderr_preview: run_result.stderr_preview,
        })
    } else {
        let mut error = if run_result.timed_out {
            PROCESSING_TIMEOUT_MESSAGE.to_string()
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

fn fail_queue_item_before_processing(
    paths: &AppPaths,
    connection: &Connection,
    queue_item_id: &str,
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
                processing_started_at = NULL,
                processing_completed_at = ?1,
                processing_duration_ms = NULL,
                processing_error = ?2,
                engine_command_preview = NULL,
                engine_stdout_preview = NULL,
                engine_stderr_preview = NULL,
                updated_at = ?1
            WHERE id = ?3 AND status IN ('queued', 'failed')
            ",
            params![completed_at, error, queue_item_id],
        )
        .map_err(|update_error| format!("Unable to mark queue item failed: {update_error}"))?;

    log_processing_event(
        paths,
        "warn",
        "upscale_raw_asset_missing",
        "Upscale raw asset missing",
        serde_json::json!({
            "queue_item_id": queue_item_id,
            "error": error
        }),
    )?;

    Ok(UpscaleProcessItemResult {
        ok: false,
        queue_item_id: queue_item_id.to_string(),
        status: "failed".to_string(),
        output_file_asset_id: None,
        output_relative_path: None,
        duration_ms: None,
        message: error.to_string(),
        error: Some(error.to_string()),
        stdout_preview: String::new(),
        stderr_preview: String::new(),
    })
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
) -> Result<ProcessingPreflight, ProcessingPreflightError> {
    validate_output_format(&item.desired_output_format).map_err(ProcessingPreflightError::Other)?;
    validate_scale_factor(item.desired_scale_factor).map_err(ProcessingPreflightError::Other)?;
    if item.raw_asset_type != "raw_image" {
        return Err(ProcessingPreflightError::Other(
            "Queue item does not reference a raw image asset".to_string(),
        ));
    }

    let raw_path = match inspect_raw_asset_path(paths, &item.raw_relative_path) {
        RawAssetHealth::Healthy(path) => path,
        RawAssetHealth::MissingRaw | RawAssetHealth::InvalidPath => {
            return Err(ProcessingPreflightError::RawAssetUnavailable(
                MISSING_RAW_MESSAGE.to_string(),
            ));
        }
    };
    ensure_regular_file_metadata(&raw_path, "Raw image asset")
        .map_err(ProcessingPreflightError::Other)?;

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
        ensure_realesrgan_model_files_ready(&engine.models_dir)?;

        Ok(EngineRuntimePaths {
            engine_dir: engine.engine_dir,
            binary_path: engine.binary_path,
            models_dir: engine.models_dir,
        })
    }();

    result.map_err(|_| ENGINE_NOT_READY_MESSAGE.to_string())
}

fn ensure_realesrgan_model_files_ready(models_dir: &Path) -> Result<(), String> {
    let mut has_param_file = false;
    let mut has_bin_file = false;

    let entries = fs::read_dir(models_dir).map_err(|_| ENGINE_NOT_READY_MESSAGE.to_string())?;
    for entry in entries {
        let entry = entry.map_err(|_| ENGINE_NOT_READY_MESSAGE.to_string())?;
        let path = entry.path();
        let metadata =
            fs::symlink_metadata(&path).map_err(|_| ENGINE_NOT_READY_MESSAGE.to_string())?;
        let file_type = metadata.file_type();
        if file_type.is_symlink() || !file_type.is_file() {
            continue;
        }

        match path
            .extension()
            .and_then(|extension| extension.to_str())
            .map(|extension| extension.to_lowercase())
            .as_deref()
        {
            Some("param") => has_param_file = true,
            Some("bin") => has_bin_file = true,
            _ => {}
        }
    }

    if has_param_file && has_bin_file {
        Ok(())
    } else {
        Err(ENGINE_NOT_READY_MESSAGE.to_string())
    }
}

fn engine_not_ready_batch_result(message: String) -> UpscaleProcessBatchResult {
    UpscaleProcessBatchResult {
        ok: false,
        attempted: 0,
        completed: 0,
        failed: 0,
        results: Vec::new(),
        message: if message == ENGINE_NOT_READY_MESSAGE {
            ENGINE_NOT_READY_BATCH_MESSAGE.to_string()
        } else {
            message
        },
    }
}

fn batch_message_for_counts(attempted: usize, completed: usize, failed: usize) -> String {
    if attempted == 0 {
        "No ready images in queue.".to_string()
    } else if failed == 0 && completed == 1 {
        "Processed 1 image successfully.".to_string()
    } else if failed == 0 {
        format!("Processed {completed} images successfully.")
    } else {
        format!("Batch summary: {attempted} attempted, {completed} completed, {failed} failed.")
    }
}

fn run_upscale_processing_job(paths: AppPaths, job_id: String) -> Result<(), String> {
    let connection = open_processing_connection(&paths)?;
    let (queue_item_id, planned) = load_upscale_processing_job_plan(&connection, &job_id)?;

    mark_upscale_processing_job_running(
        &connection,
        &job_id,
        "validating",
        "Checking engine, raw file, and output plan",
    )?;

    let item = load_processing_queue_item(&connection, &queue_item_id)?;
    if item.status != "queued" && item.status != "failed" {
        mark_upscale_processing_job_failed(
            &connection,
            &job_id,
            "failed",
            "Queue item is not queued or failed",
            "",
            "",
        )?;
        return Ok(());
    }

    let engine = match ensure_realesrgan_engine_ready(&paths) {
        Ok(engine) => engine,
        Err(_) => {
            mark_upscale_processing_job_failed(
                &connection,
                &job_id,
                "failed",
                ENGINE_NOT_READY_BATCH_MESSAGE,
                "",
                "",
            )?;
            return Ok(());
        }
    };

    let preflight = match preflight_processing_item(&paths, &item, &engine) {
        Ok(preflight) => preflight,
        Err(ProcessingPreflightError::RawAssetUnavailable(error)) => {
            let _ = fail_queue_item_before_processing(&paths, &connection, &item.id, &error)?;
            mark_upscale_processing_job_failed(
                &connection,
                &job_id,
                "failed",
                &error,
                "",
                "",
            )?;
            return Ok(());
        }
        Err(ProcessingPreflightError::Other(error)) => {
            mark_upscale_processing_job_failed(
                &connection,
                &job_id,
                "failed",
                &error,
                "",
                "",
            )?;
            return Ok(());
        }
    };

    if is_upscale_processing_job_cancel_requested(&connection, &job_id)? {
        let _ = fail_processing_item(
            &paths,
            &connection,
            &item.id,
            &planned_command_preview(&planned),
            "",
            "",
            0,
            CANCELLED_PROCESSING_MESSAGE,
        )?;
        mark_upscale_processing_job_cancelled(&connection, &job_id, "", "")?;
        return Ok(());
    }

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
                engine_command_preview = ?2,
                engine_stdout_preview = NULL,
                engine_stderr_preview = NULL,
                updated_at = ?1
            WHERE id = ?3 AND status IN ('queued', 'failed')
            ",
            params![processing_started_at, planned_command_preview(&planned), item.id],
        )
        .map_err(|error| format!("Unable to mark queue item processing: {error}"))?;

    log_processing_event(
        &paths,
        "info",
        "upscale_background_job_started",
        "Upscale background job started",
        serde_json::json!({
            "job_id": job_id,
            "queue_item_id": item.id,
            "target": planned.target_label,
            "quality_mode": planned.quality_mode,
            "tile_size": planned.tile_size
        }),
    )?;

    match execute_planned_upscale_job(&paths, &connection, &job_id, &item, &preflight, &planned, started) {
        Ok(result) => {
            mark_upscale_processing_job_completed(
                &connection,
                &job_id,
                &result.output_relative_path,
                &result.stdout_preview,
                &result.stderr_preview,
            )?;
            Ok(())
        }
        Err(error) => {
            let _ = fail_processing_item(
                &paths,
                &connection,
                &item.id,
                &planned_command_preview(&planned),
                &error.stdout_preview,
                &error.stderr_preview,
                error.duration_ms,
                &error.message,
            )?;
            if error.cancelled {
                mark_upscale_processing_job_cancelled(
                    &connection,
                    &job_id,
                    &error.stdout_preview,
                    &error.stderr_preview,
                )?;
            } else {
                mark_upscale_processing_job_failed(
                    &connection,
                    &job_id,
                    "failed",
                    &error.message,
                    &error.stdout_preview,
                    &error.stderr_preview,
                )?;
            }
            Ok(())
        }
    }
}

struct PlannedJobCompletion {
    output_relative_path: String,
    stdout_preview: String,
    stderr_preview: String,
}

struct PlannedJobFailure {
    message: String,
    stdout_preview: String,
    stderr_preview: String,
    duration_ms: i64,
    cancelled: bool,
}

fn execute_planned_upscale_job(
    paths: &AppPaths,
    connection: &Connection,
    job_id: &str,
    item: &ProcessingQueueItem,
    preflight: &ProcessingPreflight,
    planned: &PlannedUpscaleJob,
    started: Instant,
) -> Result<PlannedJobCompletion, PlannedJobFailure> {
    let output_plan = match build_job_output_plan(paths, item, job_id, planned) {
        Ok(plan) => plan,
        Err(error) => return Err(job_failure(error, "", "", elapsed_ms(started))),
    };

    if let Err(error) = ensure_child_path_inside_parent_for_creation(
        &output_plan.output_dir,
        &output_plan.output_path,
        "Upscaled output file",
    ) {
        return Err(job_failure(error, "", "", elapsed_ms(started)));
    }

    let mut current_input = preflight.raw_path.clone();
    let mut stdout_preview = String::new();
    let mut stderr_preview = String::new();

    for (index, scale) in planned.passes.iter().enumerate() {
        let pass_number = index + 1;
        let is_final_engine_output =
            pass_number == planned.passes.len() && !planned.needs_final_resize;
        let pass_output = if is_final_engine_output {
            output_plan.output_path.clone()
        } else {
            output_plan
                .temp_dir
                .join(format!("pass-{pass_number}-x{scale}.png"))
        };
        let pass_format = if is_final_engine_output {
            planned.output_format.as_str()
        } else {
            "png"
        };
        let stdout_path = match unique_temp_path(&output_plan.temp_dir, job_id, "stdout") {
            Ok(path) => path,
            Err(error) => return Err(job_failure(error, &stdout_preview, &stderr_preview, elapsed_ms(started))),
        };
        let stderr_path = match unique_temp_path(&output_plan.temp_dir, job_id, "stderr") {
            Ok(path) => path,
            Err(error) => return Err(job_failure(error, &stdout_preview, &stderr_preview, elapsed_ms(started))),
        };

        if let Err(error) = mark_upscale_processing_job_progress(
            connection,
            job_id,
            "real_esrgan",
            &format!("Real-ESRGAN pass {pass_number} of {}", planned.passes.len()),
        ) {
            return Err(job_failure(error, &stdout_preview, &stderr_preview, elapsed_ms(started)));
        }

        let run_result = match run_processing_command(
            &preflight.engine.binary_path,
            &preflight.engine.engine_dir,
            &preflight.engine.models_dir,
            &current_input,
            &pass_output,
            *scale,
            planned.tile_size,
            pass_format,
            &stdout_path,
            &stderr_path,
            Some(CommandCancelContext {
                paths,
                job_id,
            }),
        ) {
            Ok(result) => result,
            Err(error) => {
                cleanup_failed_job_paths(&output_plan);
                return Err(job_failure(error, &stdout_preview, &stderr_preview, elapsed_ms(started)));
            }
        };

        append_preview(&mut stdout_preview, &run_result.stdout_preview);
        append_preview(&mut stderr_preview, &run_result.stderr_preview);

        if run_result.cancelled {
            cleanup_failed_job_paths(&output_plan);
            return Err(job_cancelled_failure(
                &stdout_preview,
                &stderr_preview,
                elapsed_ms(started),
            ));
        }

        if run_result.timed_out || run_result.exit_code != Some(0) || !pass_output.is_file() {
            let message = if run_result.timed_out {
                PROCESSING_TIMEOUT_MESSAGE.to_string()
            } else if run_result.exit_code != Some(0) {
                format!("Real-ESRGAN exited with code {:?}", run_result.exit_code)
            } else {
                "Real-ESRGAN reported success but no output file was created".to_string()
            };
            cleanup_failed_job_paths(&output_plan);
            return Err(job_failure(message, &stdout_preview, &stderr_preview, elapsed_ms(started)));
        }

        current_input = pass_output;
    }

    match is_upscale_processing_job_cancel_requested(connection, job_id) {
        Ok(true) => {
            cleanup_failed_job_paths(&output_plan);
            return Err(job_cancelled_failure(
                &stdout_preview,
                &stderr_preview,
                elapsed_ms(started),
            ));
        }
        Ok(false) => {}
        Err(error) => return Err(job_failure(error, &stdout_preview, &stderr_preview, elapsed_ms(started))),
    }

    if planned.needs_final_resize {
        if planned.target_megapixels > MAX_FINAL_RESIZE_MEGAPIXELS {
            cleanup_failed_job_paths(&output_plan);
            return Err(job_failure(
                "Final resize needs more memory. Try safe 4x output or smaller target.".to_string(),
                &stdout_preview,
                &stderr_preview,
                elapsed_ms(started),
            ));
        }

        if estimated_max_intermediate_megapixels(planned) > 180.0 {
            cleanup_failed_job_paths(&output_plan);
            return Err(job_failure(
                "Final resize needs more memory. Try safe 4x output or smaller target.".to_string(),
                &stdout_preview,
                &stderr_preview,
                elapsed_ms(started),
            ));
        }

        if let Err(error) = mark_upscale_processing_job_progress(
            connection,
            job_id,
            "final_resize",
            "Creating exact final output",
        ) {
            return Err(job_failure(error, &stdout_preview, &stderr_preview, elapsed_ms(started)));
        }

        if let Err(error) = resize_final_image(
            &current_input,
            &output_plan.output_path,
            planned.target_width,
            planned.target_height,
            &planned.output_format,
        ) {
            cleanup_failed_job_paths(&output_plan);
            return Err(job_failure(error, &stdout_preview, &stderr_preview, elapsed_ms(started)));
        }

        match is_upscale_processing_job_cancel_requested(connection, job_id) {
            Ok(true) => {
                cleanup_failed_job_paths(&output_plan);
                return Err(job_cancelled_failure(
                    &stdout_preview,
                    &stderr_preview,
                    elapsed_ms(started),
                ));
            }
            Ok(false) => {}
            Err(error) => {
                return Err(job_failure(
                    error,
                    &stdout_preview,
                    &stderr_preview,
                    elapsed_ms(started),
                ));
            }
        }
    }

    if !output_plan.output_path.is_file() {
        cleanup_failed_job_paths(&output_plan);
        return Err(job_failure(
            "Upscale job finished without a final output file.".to_string(),
            &stdout_preview,
            &stderr_preview,
            elapsed_ms(started),
        ));
    }

    if let Err(error) = ensure_existing_path_inside(
        &output_plan.output_dir,
        &output_plan.output_path,
        "Upscaled output file",
    ) {
        cleanup_failed_job_paths(&output_plan);
        return Err(job_failure(error, &stdout_preview, &stderr_preview, elapsed_ms(started)));
    }
    if let Err(error) = ensure_regular_file_metadata(&output_plan.output_path, "Upscaled output file") {
        cleanup_failed_job_paths(&output_plan);
        return Err(job_failure(error, &stdout_preview, &stderr_preview, elapsed_ms(started)));
    }

    let duration_ms = elapsed_ms(started);
    let metadata = match fs::metadata(&output_plan.output_path) {
        Ok(metadata) => metadata,
        Err(error) => {
            cleanup_failed_job_paths(&output_plan);
            return Err(job_failure(
                format!("Unable to inspect upscaled output file: {error}"),
                &stdout_preview,
                &stderr_preview,
                duration_ms,
            ));
        }
    };
    let sha256 = match sha256_file(&output_plan.output_path, "Upscaled output file") {
        Ok(value) => value,
        Err(error) => {
            cleanup_failed_job_paths(&output_plan);
            return Err(job_failure(error, &stdout_preview, &stderr_preview, duration_ms));
        }
    };
    let output_file_asset_id = match insert_upscaled_file_asset(
        connection,
        &output_plan.file_name,
        &output_plan.relative_path,
        &planned.output_format,
        metadata.len(),
        &sha256,
    ) {
        Ok(id) => id,
        Err(error) => {
            cleanup_failed_job_paths(&output_plan);
            return Err(job_failure(error, &stdout_preview, &stderr_preview, duration_ms));
        }
    };
    let completed_at = Utc::now().to_rfc3339();

    if let Err(error) = connection.execute(
        "
        UPDATE upscale_queue_items
        SET status = 'completed',
            output_file_asset_id = ?1,
            output_relative_path = ?2,
            processing_completed_at = ?3,
            processing_duration_ms = ?4,
            processing_error = NULL,
            engine_stdout_preview = ?5,
            engine_stderr_preview = ?6,
            updated_at = ?3
        WHERE id = ?7
        ",
        params![
            output_file_asset_id,
            output_plan.relative_path,
            completed_at,
            duration_ms,
            stdout_preview,
            stderr_preview,
            item.id
        ],
    ) {
        cleanup_failed_job_paths(&output_plan);
        return Err(job_failure(
            format!("Unable to mark queue item completed: {error}"),
            &stdout_preview,
            &stderr_preview,
            duration_ms,
        ));
    }

    let _ = remove_dir_if_safe(
        &output_plan
            .temp_dir
            .parent()
            .map(Path::to_path_buf)
            .unwrap_or_else(|| paths.app_data_dir.join("processing").join("upscale-temp")),
        &output_plan.temp_dir,
        "Upscale job temp folder",
    );

    let _ = log_processing_event(
        paths,
        "info",
        "upscale_background_job_completed",
        "Upscale background job completed",
        serde_json::json!({
            "job_id": job_id,
            "queue_item_id": item.id,
            "output_file_asset_id": output_file_asset_id,
            "output_relative_path": output_plan.relative_path,
            "duration_ms": duration_ms
        }),
    );

    Ok(PlannedJobCompletion {
        output_relative_path: output_plan.relative_path,
        stdout_preview,
        stderr_preview,
    })
}

fn job_failure(
    message: String,
    stdout_preview: &str,
    stderr_preview: &str,
    duration_ms: i64,
) -> PlannedJobFailure {
    PlannedJobFailure {
        message,
        stdout_preview: stdout_preview.to_string(),
        stderr_preview: stderr_preview.to_string(),
        duration_ms,
        cancelled: false,
    }
}

fn job_cancelled_failure(
    stdout_preview: &str,
    stderr_preview: &str,
    duration_ms: i64,
) -> PlannedJobFailure {
    PlannedJobFailure {
        message: CANCELLED_PROCESSING_MESSAGE.to_string(),
        stdout_preview: stdout_preview.to_string(),
        stderr_preview: stderr_preview.to_string(),
        duration_ms,
        cancelled: true,
    }
}

fn insert_upscale_processing_job(
    connection: &Connection,
    job_id: &str,
    queue_item_id: &str,
    planned: &PlannedUpscaleJob,
) -> Result<(), String> {
    let now = Utc::now().to_rfc3339();
    let plan_json = serde_json::to_string(planned)
        .map_err(|error| format!("Unable to store upscale processing plan: {error}"))?;
    connection
        .execute(
            "
            INSERT INTO upscale_processing_jobs (
                id,
                queue_item_id,
                status,
                stage,
                progress_label,
                plan_json,
                output_relative_path,
                error_message,
                stdout_preview,
                stderr_preview,
                started_at,
                completed_at,
                created_at,
                updated_at
            )
            VALUES (?1, ?2, 'pending', 'queued', 'Waiting for background worker', ?3, NULL, NULL, '', '', NULL, NULL, ?4, ?4)
            ",
            params![job_id, queue_item_id, plan_json, now],
        )
        .map_err(|error| format!("Unable to create upscale processing job: {error}"))?;
    Ok(())
}

fn mark_upscale_processing_job_running(
    connection: &Connection,
    job_id: &str,
    stage: &str,
    progress_label: &str,
) -> Result<(), String> {
    let now = Utc::now().to_rfc3339();
    connection
        .execute(
            "
            UPDATE upscale_processing_jobs
            SET status = 'running',
                stage = ?1,
                progress_label = ?2,
                started_at = COALESCE(started_at, ?3),
                updated_at = ?3
            WHERE id = ?4 AND status = 'pending'
            ",
            params![stage, progress_label, now, job_id],
        )
        .map_err(|error| format!("Unable to update upscale processing job: {error}"))?;
    Ok(())
}

fn mark_upscale_processing_job_progress(
    connection: &Connection,
    job_id: &str,
    stage: &str,
    progress_label: &str,
) -> Result<(), String> {
    let now = Utc::now().to_rfc3339();
    connection
        .execute(
            "
            UPDATE upscale_processing_jobs
            SET stage = ?1,
                progress_label = ?2,
                updated_at = ?3
            WHERE id = ?4 AND status != 'cancel_requested'
            ",
            params![stage, progress_label, now, job_id],
        )
        .map_err(|error| format!("Unable to update upscale processing job progress: {error}"))?;
    Ok(())
}

fn mark_upscale_processing_job_completed(
    connection: &Connection,
    job_id: &str,
    output_relative_path: &str,
    stdout_preview: &str,
    stderr_preview: &str,
) -> Result<(), String> {
    let now = Utc::now().to_rfc3339();
    connection
        .execute(
            "
            UPDATE upscale_processing_jobs
            SET status = 'completed',
                stage = 'completed',
                progress_label = 'Output saved',
                output_relative_path = ?1,
                error_message = NULL,
                stdout_preview = ?2,
                stderr_preview = ?3,
                engine_pid = NULL,
                completed_at = ?4,
                updated_at = ?4
            WHERE id = ?5
            ",
            params![output_relative_path, stdout_preview, stderr_preview, now, job_id],
        )
        .map_err(|error| format!("Unable to complete upscale processing job: {error}"))?;
    Ok(())
}

fn mark_upscale_processing_job_failed(
    connection: &Connection,
    job_id: &str,
    stage: &str,
    error_message: &str,
    stdout_preview: &str,
    stderr_preview: &str,
) -> Result<(), String> {
    let now = Utc::now().to_rfc3339();
    connection
        .execute(
            "
            UPDATE upscale_processing_jobs
            SET status = 'failed',
                stage = ?1,
                progress_label = 'Job failed',
                output_relative_path = NULL,
                error_message = ?2,
                stdout_preview = ?3,
                stderr_preview = ?4,
                engine_pid = NULL,
                completed_at = ?5,
                updated_at = ?5
            WHERE id = ?6
            ",
            params![stage, error_message, stdout_preview, stderr_preview, now, job_id],
        )
        .map_err(|error| format!("Unable to fail upscale processing job: {error}"))?;
    Ok(())
}

fn mark_upscale_processing_job_cancelled(
    connection: &Connection,
    job_id: &str,
    stdout_preview: &str,
    stderr_preview: &str,
) -> Result<(), String> {
    let now = Utc::now().to_rfc3339();
    connection
        .execute(
            "
            UPDATE upscale_processing_jobs
            SET status = 'failed',
                stage = 'cancelled',
                progress_label = 'Processing cancelled',
                output_relative_path = NULL,
                error_message = ?1,
                stdout_preview = ?2,
                stderr_preview = ?3,
                engine_pid = NULL,
                cancelled_at = ?4,
                completed_at = ?4,
                updated_at = ?4
            WHERE id = ?5
            ",
            params![CANCELLED_PROCESSING_MESSAGE, stdout_preview, stderr_preview, now, job_id],
        )
        .map_err(|error| format!("Unable to mark upscale processing job cancelled: {error}"))?;
    Ok(())
}

fn mark_upscale_processing_job_engine_pid(
    connection: &Connection,
    job_id: &str,
    engine_pid: Option<i64>,
) -> Result<(), String> {
    let now = Utc::now().to_rfc3339();
    connection
        .execute(
            "
            UPDATE upscale_processing_jobs
            SET engine_pid = ?1,
                updated_at = ?2
            WHERE id = ?3
            ",
            params![engine_pid, now, job_id],
        )
        .map_err(|error| format!("Unable to update Real-ESRGAN engine pid: {error}"))?;
    Ok(())
}

fn is_upscale_processing_job_cancel_requested(
    connection: &Connection,
    job_id: &str,
) -> Result<bool, String> {
    connection
        .query_row(
            "SELECT status = 'cancel_requested' FROM upscale_processing_jobs WHERE id = ?1",
            params![job_id],
            |row| row.get::<_, i64>(0),
        )
        .optional()
        .map(|value| value.unwrap_or(0) == 1)
        .map_err(|error| format!("Unable to inspect upscale job cancellation state: {error}"))
}

fn mark_upscale_processing_job_failed_for_paths(
    paths: &AppPaths,
    job_id: &str,
    stage: &str,
    error_message: &str,
    stdout_preview: &str,
    stderr_preview: &str,
) -> Result<(), String> {
    let connection = open_processing_connection(paths)?;
    mark_upscale_processing_job_failed(
        &connection,
        job_id,
        stage,
        error_message,
        stdout_preview,
        stderr_preview,
    )
}

fn active_upscale_processing_job(
    connection: &Connection,
) -> Result<Option<UpscaleProcessingJobStatus>, String> {
    let job_id = connection
        .query_row(
            "
            SELECT id
            FROM upscale_processing_jobs
            WHERE status IN ('pending', 'running', 'cancel_requested')
            ORDER BY created_at ASC
            LIMIT 1
            ",
            [],
            |row| row.get::<_, String>(0),
        )
        .optional()
        .map_err(|error| format!("Unable to inspect active upscale processing job: {error}"))?;

    job_id
        .map(|id| load_upscale_processing_job(connection, &id))
        .transpose()
}

fn load_upscale_processing_job(
    connection: &Connection,
    job_id: &str,
) -> Result<UpscaleProcessingJobStatus, String> {
    connection
        .query_row(
            "
            SELECT
                id,
                queue_item_id,
                status,
                COALESCE(stage, ''),
                COALESCE(progress_label, ''),
                started_at,
                completed_at,
                output_relative_path,
                error_message,
                COALESCE(stdout_preview, ''),
                COALESCE(stderr_preview, ''),
                plan_json,
                engine_pid,
                cancel_requested_at,
                cancelled_at
            FROM upscale_processing_jobs
            WHERE id = ?1
            ",
            params![job_id],
            |row| {
                let plan_json: Option<String> = row.get(11)?;
                let planned = plan_json
                    .as_deref()
                    .and_then(|value| serde_json::from_str::<PlannedUpscaleJob>(value).ok());
                let status: String = row.get(2)?;
                let output_relative_path: Option<String> = row.get(7)?;
                let error: Option<String> = row.get(8)?;
                let message = job_status_message(&status, output_relative_path.as_deref(), error.as_deref());
                Ok(UpscaleProcessingJobStatus {
                    ok: status != "failed",
                    job_id: row.get(0)?,
                    queue_item_id: row.get(1)?,
                    status,
                    stage: row.get(3)?,
                    progress_label: row.get(4)?,
                    started_at: row.get(5)?,
                    completed_at: row.get(6)?,
                    output_relative_path,
                    error,
                    stdout_preview: row.get(9)?,
                    stderr_preview: row.get(10)?,
                    message,
                    target_label: planned
                        .as_ref()
                        .map(|plan| plan.target_label.clone())
                        .unwrap_or_else(|| "Unknown target".to_string()),
                    quality_mode: planned
                        .as_ref()
                        .map(|plan| plan.quality_mode.clone())
                        .unwrap_or_else(|| "unknown".to_string()),
                    tile_size: planned
                        .as_ref()
                        .map(|plan| plan.tile_size_label.clone())
                        .unwrap_or_else(|| "unknown".to_string()),
                    preset_id: planned.as_ref().and_then(|plan| plan.preset_id.clone()),
                    preset_label: planned.as_ref().and_then(|plan| plan.preset_label.clone()),
                    resolved_tile_size: planned
                        .as_ref()
                        .map(|plan| {
                            if plan.resolved_tile_size > 0 {
                                plan.resolved_tile_size
                            } else {
                                plan.tile_size
                            }
                        })
                        .unwrap_or(0),
                    pass_count: planned
                        .as_ref()
                        .map(|plan| {
                            if plan.pass_count > 0 {
                                plan.pass_count
                            } else {
                                plan.passes.len()
                            }
                        })
                        .unwrap_or(0),
                    source_width: planned.as_ref().map(|plan| plan.source_width).unwrap_or(0),
                    source_height: planned.as_ref().map(|plan| plan.source_height).unwrap_or(0),
                    target_width: planned.as_ref().map(|plan| plan.target_width).unwrap_or(0),
                    target_height: planned.as_ref().map(|plan| plan.target_height).unwrap_or(0),
                    target_megapixels: planned
                        .as_ref()
                        .map(|plan| plan.target_megapixels)
                        .unwrap_or(0.0),
                    size_category: planned
                        .as_ref()
                        .map(|plan| plan.size_category.clone())
                        .unwrap_or_else(|| "unknown".to_string()),
                    engine_pid: row.get(12)?,
                    cancel_requested_at: row.get(13)?,
                    cancelled_at: row.get(14)?,
                })
            },
        )
        .optional()
        .map_err(|error| format!("Unable to load upscale processing job: {error}"))?
        .ok_or_else(|| "Upscale processing job was not found".to_string())
}

fn load_upscale_processing_job_plan(
    connection: &Connection,
    job_id: &str,
) -> Result<(String, PlannedUpscaleJob), String> {
    connection
        .query_row(
            "
            SELECT queue_item_id, plan_json
            FROM upscale_processing_jobs
            WHERE id = ?1
            ",
            params![job_id],
            |row| {
                let queue_item_id: String = row.get(0)?;
                let plan_json: String = row.get(1)?;
                Ok((queue_item_id, plan_json))
            },
        )
        .optional()
        .map_err(|error| format!("Unable to load upscale processing job plan: {error}"))?
        .ok_or_else(|| "Upscale processing job was not found".to_string())
        .and_then(|(queue_item_id, plan_json)| {
            serde_json::from_str::<PlannedUpscaleJob>(&plan_json)
                .map(|planned| (queue_item_id, planned))
                .map_err(|error| format!("Unable to parse upscale processing plan: {error}"))
        })
}

fn job_status_message(
    status: &str,
    output_relative_path: Option<&str>,
    error: Option<&str>,
) -> String {
    match status {
        "completed" => output_relative_path
            .map(|path| format!("Output saved: {path}"))
            .unwrap_or_else(|| "Upscale job completed".to_string()),
        "failed" => error.unwrap_or("Upscale job failed").to_string(),
        "pending" => "Upscale job is waiting to start".to_string(),
        "running" => "Upscale job is running in the background".to_string(),
        "cancel_requested" => "Upscale job cancellation requested".to_string(),
        _ => "Upscale job loaded".to_string(),
    }
}

fn build_upscale_processing_plan(
    input: &UpscaleProcessingPlanInput,
    source: ImageDimensions,
) -> Result<PlannedUpscaleJob, String> {
    let preset_id = normalized_optional_plan_text(input.preset_id.as_deref(), 60);
    let preset_label = normalized_optional_plan_text(input.preset_label.as_deref(), 90);
    let quality_mode = validate_quality_mode(&input.quality_mode)?;
    let output_format = validate_job_output_format(&input.output_format)?;
    let mode = input.mode.trim().to_lowercase();
    let (target_width, target_height, target_label, passes, needs_final_resize) =
        match mode.as_str() {
            "scale" => {
                let scale = input
                    .scale
                    .ok_or_else(|| "Choose an output scale before processing".to_string())?;
                if !matches!(scale, 2 | 4 | 8 | 10) {
                    return Err("Scale must be 2x, 4x, 8x, or 10x".to_string());
                }
                let target_width = checked_scaled_dimension(source.width, scale)?;
                let target_height = checked_scaled_dimension(source.height, scale)?;
                let passes = if matches!(scale, 2 | 4) {
                    vec![scale]
                } else if quality_mode == "ultra" {
                    vec![4, 4]
                } else {
                    vec![4]
                };
                (
                    target_width,
                    target_height,
                    format!("{scale}x {}", size_hint_for_scale(scale)),
                    passes,
                    matches!(scale, 8 | 10),
                )
            }
            "target_8k" => {
                let (target_width, target_height) = fit_long_edge(source, TARGET_8K_LONG_EDGE)?;
                let source_long_edge = source.width.max(source.height);
                (
                    target_width,
                    target_height,
                    "8K long edge".to_string(),
                    if source_long_edge >= TARGET_8K_LONG_EDGE {
                        Vec::new()
                    } else {
                        vec![4]
                    },
                    true,
                )
            }
            "target_long_edge" => {
                let target_long_edge = input
                    .target_long_edge_px
                    .ok_or_else(|| "Enter a custom long edge before processing".to_string())?;
                if target_long_edge < 1000 {
                    return Err("Custom long edge must be at least 1000 px".to_string());
                }
                if target_long_edge > MAX_PHASE1_TARGET_LONG_EDGE {
                    return Err(
                        "Phase 1 limit is 10000 px long edge. Use a production workstation mode later."
                            .to_string(),
                    );
                }
                let (target_width, target_height) = fit_long_edge(source, target_long_edge)?;
                let source_long_edge = source.width.max(source.height);
                (
                    target_width,
                    target_height,
                    format!("{target_long_edge}px long edge"),
                    if source_long_edge >= target_long_edge {
                        Vec::new()
                    } else {
                        vec![4]
                    },
                    true,
                )
            }
            _ => return Err("Output target mode is not supported".to_string()),
        };

    let target_megapixels = megapixels(target_width, target_height);
    let size_category = output_size_category(target_megapixels).to_string();
    let (tile_size, tile_size_label) = resolve_tile_size(
        &input.tile_size,
        &quality_mode,
        target_megapixels,
        preset_id.as_deref(),
    )?;
    let pass_count = passes.len();

    Ok(PlannedUpscaleJob {
        preset_id,
        preset_label,
        mode,
        target_label,
        quality_mode,
        output_format,
        tile_size_label,
        tile_size,
        resolved_tile_size: tile_size,
        pass_count,
        source_width: source.width,
        source_height: source.height,
        target_width,
        target_height,
        target_megapixels,
        size_category,
        passes,
        needs_final_resize,
    })
}

fn validate_quality_mode(value: &str) -> Result<String, String> {
    let normalized = value.trim().to_lowercase();
    if matches!(normalized.as_str(), "safe" | "balanced" | "ultra") {
        Ok(normalized)
    } else {
        Err("Quality mode must be safe, balanced, or ultra".to_string())
    }
}

fn validate_job_output_format(value: &str) -> Result<String, String> {
    let normalized = value.trim().to_lowercase();
    if matches!(normalized.as_str(), "png" | "jpg" | "webp") {
        Ok(normalized)
    } else {
        Err("Output format must be png, jpg, or webp".to_string())
    }
}

fn normalized_optional_plan_text(value: Option<&str>, max_chars: usize) -> Option<String> {
    value
        .map(str::trim)
        .filter(|value| !value.is_empty())
        .map(|value| value.chars().take(max_chars).collect())
}

fn resolve_tile_size(
    value: &serde_json::Value,
    quality_mode: &str,
    target_megapixels: f64,
    preset_id: Option<&str>,
) -> Result<(i64, String), String> {
    if let Some(tile_size) = value.as_i64() {
        if matches!(tile_size, 64 | 128 | 256 | 512) {
            return Ok((tile_size, tile_size.to_string()));
        }
        return Err("Tile size must be auto, 64, 128, 256, or 512".to_string());
    }

    if value.as_str().unwrap_or_default().eq_ignore_ascii_case("auto") {
        let is_very_heavy = target_megapixels >= 50.0;
        let tile_size = match preset_id.unwrap_or_default() {
            "production_fast" => {
                if target_megapixels < 25.0 {
                    256
                } else if target_megapixels <= 50.0 {
                    128
                } else {
                    64
                }
            }
            "production_quality" => {
                if target_megapixels < 25.0 {
                    256
                } else {
                    128
                }
            }
            "large_output_safe" => {
                if is_very_heavy {
                    64
                } else {
                    128
                }
            }
            "ultra_detail" => {
                if is_very_heavy {
                    64
                } else {
                    128
                }
            }
            "quick_test" => {
                if target_megapixels >= 25.0 || quality_mode == "safe" {
                    128
                } else {
                    256
                }
            }
            _ => {
                if target_megapixels >= 50.0 {
                    64
                } else if target_megapixels >= 25.0 || quality_mode == "safe" {
                    128
                } else {
                    256
                }
            }
        };
        return Ok((tile_size, format!("auto ({tile_size})")));
    }

    Err("Tile size must be auto, 64, 128, 256, or 512".to_string())
}

fn checked_scaled_dimension(value: u32, scale: i64) -> Result<u32, String> {
    let value = u64::from(value);
    let scale = u64::try_from(scale).map_err(|_| "Scale factor is invalid".to_string())?;
    let scaled = value
        .checked_mul(scale)
        .ok_or_else(|| "Target output dimensions are too large".to_string())?;
    u32::try_from(scaled).map_err(|_| "Target output dimensions are too large".to_string())
}

fn fit_long_edge(source: ImageDimensions, target_long_edge: u32) -> Result<(u32, u32), String> {
    let long_edge = source.width.max(source.height);
    if long_edge == 0 {
        return Err("Source image dimensions are invalid".to_string());
    }
    let width = ((u64::from(source.width) * u64::from(target_long_edge))
        + (u64::from(long_edge) / 2))
        / u64::from(long_edge);
    let height = ((u64::from(source.height) * u64::from(target_long_edge))
        + (u64::from(long_edge) / 2))
        / u64::from(long_edge);
    Ok((
        u32::try_from(width.max(1)).map_err(|_| "Target output width is too large".to_string())?,
        u32::try_from(height.max(1)).map_err(|_| "Target output height is too large".to_string())?,
    ))
}

fn read_image_dimensions(path: &Path) -> Result<ImageDimensions, String> {
    ensure_regular_file_metadata(path, "Raw image asset")?;
    let header = read_image_header(path, 65_536)?;
    parse_image_dimensions(&header)
        .ok_or_else(|| "Unable to read raw image dimensions from supported image header".to_string())
}

fn read_image_header(path: &Path, limit: usize) -> Result<Vec<u8>, String> {
    let mut file = File::open(path)
        .map_err(|error| format!("Unable to open raw image for dimension read: {error}"))?;
    let mut buffer = vec![0u8; limit];
    let read = file
        .read(&mut buffer)
        .map_err(|error| format!("Unable to read raw image header: {error}"))?;
    buffer.truncate(read);
    Ok(buffer)
}

fn parse_image_dimensions(bytes: &[u8]) -> Option<ImageDimensions> {
    parse_png_dimensions(bytes)
        .or_else(|| parse_jpeg_dimensions(bytes))
        .or_else(|| parse_webp_dimensions(bytes))
        .or_else(|| parse_bmp_dimensions(bytes))
        .or_else(|| parse_tiff_dimensions(bytes))
}

fn parse_png_dimensions(bytes: &[u8]) -> Option<ImageDimensions> {
    if bytes.len() < 24 || &bytes[0..8] != b"\x89PNG\r\n\x1a\n" {
        return None;
    }
    Some(ImageDimensions {
        width: u32::from_be_bytes(bytes[16..20].try_into().ok()?),
        height: u32::from_be_bytes(bytes[20..24].try_into().ok()?),
    })
}

fn parse_jpeg_dimensions(bytes: &[u8]) -> Option<ImageDimensions> {
    if bytes.len() < 4 || bytes[0] != 0xff || bytes[1] != 0xd8 {
        return None;
    }

    let mut index = 2usize;
    while index + 9 < bytes.len() {
        while index < bytes.len() && bytes[index] != 0xff {
            index += 1;
        }
        while index < bytes.len() && bytes[index] == 0xff {
            index += 1;
        }
        if index >= bytes.len() {
            return None;
        }

        let marker = bytes[index];
        index += 1;
        if marker == 0xd9 || marker == 0xda {
            return None;
        }
        if index + 2 > bytes.len() {
            return None;
        }
        let segment_length = u16::from_be_bytes(bytes[index..index + 2].try_into().ok()?) as usize;
        if segment_length < 2 || index + segment_length > bytes.len() {
            return None;
        }

        if matches!(
            marker,
            0xc0 | 0xc1 | 0xc2 | 0xc3 | 0xc5 | 0xc6 | 0xc7 | 0xc9 | 0xca | 0xcb | 0xcd | 0xce | 0xcf
        ) {
            if segment_length < 7 {
                return None;
            }
            let height = u16::from_be_bytes(bytes[index + 3..index + 5].try_into().ok()?) as u32;
            let width = u16::from_be_bytes(bytes[index + 5..index + 7].try_into().ok()?) as u32;
            return Some(ImageDimensions { width, height });
        }

        index += segment_length;
    }

    None
}

fn parse_webp_dimensions(bytes: &[u8]) -> Option<ImageDimensions> {
    if bytes.len() < 30 || &bytes[0..4] != b"RIFF" || &bytes[8..12] != b"WEBP" {
        return None;
    }

    match &bytes[12..16] {
        b"VP8X" if bytes.len() >= 30 => {
            let width = 1 + read_24_le(&bytes[24..27])?;
            let height = 1 + read_24_le(&bytes[27..30])?;
            Some(ImageDimensions { width, height })
        }
        b"VP8 " if bytes.len() >= 30 => {
            let width = u16::from_le_bytes(bytes[26..28].try_into().ok()?) as u32 & 0x3fff;
            let height = u16::from_le_bytes(bytes[28..30].try_into().ok()?) as u32 & 0x3fff;
            Some(ImageDimensions { width, height })
        }
        b"VP8L" if bytes.len() >= 25 => {
            let b0 = bytes[21] as u32;
            let b1 = bytes[22] as u32;
            let b2 = bytes[23] as u32;
            let b3 = bytes[24] as u32;
            let width = 1 + (((b1 & 0x3f) << 8) | b0);
            let height = 1 + ((b3 << 6) | (b2 << 2) | ((b1 & 0xc0) >> 6));
            Some(ImageDimensions { width, height })
        }
        _ => None,
    }
}

fn parse_bmp_dimensions(bytes: &[u8]) -> Option<ImageDimensions> {
    if bytes.len() < 26 || &bytes[0..2] != b"BM" {
        return None;
    }
    let width = i32::from_le_bytes(bytes[18..22].try_into().ok()?);
    let height = i32::from_le_bytes(bytes[22..26].try_into().ok()?);
    if width == 0 || height == 0 {
        return None;
    }
    Some(ImageDimensions {
        width: width.unsigned_abs(),
        height: height.unsigned_abs(),
    })
}

fn parse_tiff_dimensions(bytes: &[u8]) -> Option<ImageDimensions> {
    if bytes.len() < 8 {
        return None;
    }
    let little_endian = if &bytes[0..2] == b"II" {
        true
    } else if &bytes[0..2] == b"MM" {
        false
    } else {
        return None;
    };
    let magic = read_u16_endian(bytes, 2, little_endian)?;
    if magic != 42 {
        return None;
    }
    let ifd_offset = read_u32_endian(bytes, 4, little_endian)? as usize;
    if ifd_offset + 2 > bytes.len() {
        return None;
    }
    let entry_count = read_u16_endian(bytes, ifd_offset, little_endian)? as usize;
    let mut width = None;
    let mut height = None;
    for entry_index in 0..entry_count {
        let offset = ifd_offset + 2 + (entry_index * 12);
        if offset + 12 > bytes.len() {
            return None;
        }
        let tag = read_u16_endian(bytes, offset, little_endian)?;
        let value_type = read_u16_endian(bytes, offset + 2, little_endian)?;
        let value = if value_type == 3 {
            u32::from(read_u16_endian(bytes, offset + 8, little_endian)?)
        } else {
            read_u32_endian(bytes, offset + 8, little_endian)?
        };
        match tag {
            256 => width = Some(value),
            257 => height = Some(value),
            _ => {}
        }
        if width.is_some() && height.is_some() {
            break;
        }
    }
    Some(ImageDimensions {
        width: width?,
        height: height?,
    })
}

fn read_24_le(bytes: &[u8]) -> Option<u32> {
    if bytes.len() < 3 {
        return None;
    }
    Some(u32::from(bytes[0]) | (u32::from(bytes[1]) << 8) | (u32::from(bytes[2]) << 16))
}

fn read_u16_endian(bytes: &[u8], offset: usize, little_endian: bool) -> Option<u16> {
    let slice: [u8; 2] = bytes.get(offset..offset + 2)?.try_into().ok()?;
    Some(if little_endian {
        u16::from_le_bytes(slice)
    } else {
        u16::from_be_bytes(slice)
    })
}

fn read_u32_endian(bytes: &[u8], offset: usize, little_endian: bool) -> Option<u32> {
    let slice: [u8; 4] = bytes.get(offset..offset + 4)?.try_into().ok()?;
    Some(if little_endian {
        u32::from_le_bytes(slice)
    } else {
        u32::from_be_bytes(slice)
    })
}

fn build_job_output_plan(
    paths: &AppPaths,
    item: &ProcessingQueueItem,
    job_id: &str,
    planned: &PlannedUpscaleJob,
) -> Result<JobOutputPlan, String> {
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
    let safe_job_id = sanitize_file_stem(job_id);
    let safe_target = sanitize_file_stem(&planned.target_label);
    let file_name = format!(
        "{safe_queue_id}-{safe_target}-{safe_job_id}.{}",
        planned.output_format
    );
    let relative_path = format!("assets/upscaled/{day}/{file_name}");
    let output_path = output_dir.join(&file_name);
    let resolved = resolve_output_relative_path(paths, &upscaled_root, &relative_path)?;
    if resolved != output_path {
        return Err("Upscaled output path resolved unexpectedly and was blocked".to_string());
    }

    let temp_dir = ensure_job_temp_dir(paths, job_id)?;

    Ok(JobOutputPlan {
        file_name,
        relative_path,
        output_dir,
        output_path,
        temp_dir,
    })
}

fn ensure_job_temp_dir(paths: &AppPaths, job_id: &str) -> Result<PathBuf, String> {
    ensure_directory_exists_without_symlink(&paths.app_data_dir, "AppData folder")?;
    let processing_dir = paths.app_data_dir.join("processing");
    ensure_child_path_inside_parent_for_creation(
        &paths.app_data_dir,
        &processing_dir,
        "Processing folder",
    )?;
    ensure_directory_exists_without_symlink(&processing_dir, "Processing folder")?;
    ensure_existing_path_inside(&paths.app_data_dir, &processing_dir, "Processing folder")?;

    let temp_root = processing_dir.join("upscale-temp");
    ensure_child_path_inside_parent_for_creation(&processing_dir, &temp_root, "Upscale temp folder")?;
    ensure_directory_exists_without_symlink(&temp_root, "Upscale temp folder")?;
    ensure_existing_path_inside(&processing_dir, &temp_root, "Upscale temp folder")?;

    let temp_dir = temp_root.join(sanitize_file_stem(job_id));
    ensure_child_path_inside_parent_for_creation(&temp_root, &temp_dir, "Upscale job temp folder")?;
    ensure_directory_exists_without_symlink(&temp_dir, "Upscale job temp folder")?;
    ensure_existing_path_inside(&temp_root, &temp_dir, "Upscale job temp folder")?;
    Ok(temp_dir)
}

fn resize_final_image(
    input_path: &Path,
    output_path: &Path,
    target_width: u32,
    target_height: u32,
    output_format: &str,
) -> Result<(), String> {
    ensure_regular_file_metadata(input_path, "Resize input image")?;
    if output_format == "webp" {
        return Err(
            "Final resize to WEBP is not available in Phase 1. Choose PNG or JPG for exact 8x, 10x, or 8K output."
                .to_string(),
        );
    }

    run_windows_final_resize(input_path, output_path, target_width, target_height, output_format)?;
    ensure_regular_file_metadata(output_path, "Upscaled output file")
}

fn run_windows_final_resize(
    input_path: &Path,
    output_path: &Path,
    target_width: u32,
    target_height: u32,
    output_format: &str,
) -> Result<(), String> {
    let script = r#"
param(
  [string]$InputPath,
  [string]$OutputPath,
  [int]$TargetWidth,
  [int]$TargetHeight,
  [string]$OutputFormat
)
Add-Type -AssemblyName PresentationCore
$bitmap = New-Object System.Windows.Media.Imaging.BitmapImage
$bitmap.BeginInit()
$bitmap.CacheOption = [System.Windows.Media.Imaging.BitmapCacheOption]::OnLoad
$bitmap.UriSource = [System.Uri]::new($InputPath)
$bitmap.EndInit()
$bitmap.Freeze()
$scaleX = [double]$TargetWidth / [double]$bitmap.PixelWidth
$scaleY = [double]$TargetHeight / [double]$bitmap.PixelHeight
$transform = New-Object System.Windows.Media.ScaleTransform -ArgumentList $scaleX, $scaleY
$resized = New-Object System.Windows.Media.Imaging.TransformedBitmap -ArgumentList $bitmap, $transform
$resized.Freeze()
if ($OutputFormat -eq 'jpg') {
  $encoder = New-Object System.Windows.Media.Imaging.JpegBitmapEncoder
  $encoder.QualityLevel = 95
} else {
  $encoder = New-Object System.Windows.Media.Imaging.PngBitmapEncoder
}
$encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($resized))
$stream = [System.IO.File]::Open($OutputPath, [System.IO.FileMode]::CreateNew, [System.IO.FileAccess]::Write)
try {
  $encoder.Save($stream)
} finally {
  $stream.Dispose()
}
"#;

    let mut command = Command::new("powershell");
    command
        .arg("-NoProfile")
        .arg("-NonInteractive")
        .arg("-ExecutionPolicy")
        .arg("Bypass")
        .arg("-Command")
        .arg(script)
        .arg(path_to_string(input_path))
        .arg(path_to_string(output_path))
        .arg(target_width.to_string())
        .arg(target_height.to_string())
        .arg(output_format)
        .stdin(Stdio::null())
        .stdout(Stdio::piped())
        .stderr(Stdio::piped());

    #[cfg(windows)]
    {
        use std::os::windows::process::CommandExt;
        command.creation_flags(0x08000000);
    }

    let output = command
        .output()
        .map_err(|error| format!("Unable to start final resize: {error}"))?;
    if output.status.success() {
        Ok(())
    } else {
        let stderr = String::from_utf8_lossy(&output.stderr);
        Err(format!(
            "Final resize needs more memory. Try safe 4x output or smaller target. Details: {}",
            preview_text(stderr.trim(), 500)
        ))
    }
}

fn cleanup_failed_job_paths(output_plan: &JobOutputPlan) {
    if output_plan.output_path.exists() {
        let _ = remove_file_if_safe(
            &output_plan.output_dir,
            &output_plan.output_path,
            "Failed partial upscale output",
        );
    }
    if let Some(temp_parent) = output_plan.temp_dir.parent() {
        let _ = remove_dir_if_safe(temp_parent, &output_plan.temp_dir, "Upscale job temp folder");
    }
}

fn remove_dir_if_safe(parent: &Path, path: &Path, label: &str) -> Result<(), String> {
    ensure_existing_path_inside(parent, path, label)?;
    ensure_real_directory_metadata(path, label)?;
    fs::remove_dir_all(path).map_err(|error| format!("Unable to remove {label}: {error}"))
}

fn append_preview(target: &mut String, value: &str) {
    if value.is_empty() {
        return;
    }
    if !target.is_empty() {
        target.push('\n');
    }
    target.push_str(value);
    *target = preview_text(target, PREVIEW_LIMIT);
}

fn planned_command_preview(planned: &PlannedUpscaleJob) -> String {
    if planned.passes.is_empty() {
        format!(
            "final resize to {}x{} {}",
            planned.target_width, planned.target_height, planned.output_format
        )
    } else {
        format!(
            "{} pass(es), tile {}, final {}x{} {}",
            planned.passes.len(),
            planned.tile_size_label,
            planned.target_width,
            planned.target_height,
            planned.output_format
        )
    }
}

fn megapixels(width: u32, height: u32) -> f64 {
    (f64::from(width) * f64::from(height)) / 1_000_000.0
}

fn estimated_max_intermediate_megapixels(planned: &PlannedUpscaleJob) -> f64 {
    let mut scale = 1.0f64;
    let mut max_mp = megapixels(planned.source_width, planned.source_height);
    for pass in &planned.passes {
        scale *= *pass as f64;
        let width = f64::from(planned.source_width) * scale;
        let height = f64::from(planned.source_height) * scale;
        max_mp = max_mp.max((width * height) / 1_000_000.0);
    }
    max_mp
}

fn output_size_category(megapixels: f64) -> &'static str {
    if megapixels < 8.0 {
        "small"
    } else if megapixels < 25.0 {
        "medium"
    } else if megapixels < 50.0 {
        "heavy"
    } else {
        "very heavy"
    }
}

fn size_hint_for_scale(scale: i64) -> &'static str {
    match scale {
        2 => "quick test",
        4 => "standard",
        8 => "large",
        10 => "large",
        _ => "custom",
    }
}

fn queue_asset_health(
    paths: &AppPaths,
    connection: &Connection,
) -> Result<UpscaleQueueAssetHealth, String> {
    let items = queue_asset_health_items(paths, connection, "q.status != 'removed'")?;
    Ok(queue_asset_health_from_items(items))
}

fn queue_asset_health_items(
    paths: &AppPaths,
    connection: &Connection,
    where_clause: &str,
) -> Result<Vec<UpscaleQueueAssetHealthItem>, String> {
    let sql = format!(
        "
        SELECT
            q.id,
            f.original_name,
            q.status,
            f.relative_path
        FROM upscale_queue_items q
        JOIN file_assets f ON f.id = q.file_asset_id
        WHERE {where_clause}
        ORDER BY q.created_at ASC
        "
    );
    let mut statement = connection
        .prepare(&sql)
        .map_err(|error| format!("Unable to prepare queue asset health query: {error}"))?;
    let rows = statement
        .query_map([], |row| {
            Ok((
                row.get::<_, String>(0)?,
                row.get::<_, String>(1)?,
                row.get::<_, String>(2)?,
                row.get::<_, String>(3)?,
            ))
        })
        .map_err(|error| format!("Unable to query queue asset health: {error}"))?;

    let mut items = Vec::new();
    for row in rows {
        let (queue_item_id, original_name, status, relative_path) =
            row.map_err(|error| format!("Unable to read queue asset health row: {error}"))?;
        let health = inspect_raw_asset_path(paths, &relative_path);
        let (health, message) = raw_asset_health_details(&health);
        items.push(UpscaleQueueAssetHealthItem {
            queue_item_id,
            original_name,
            status,
            relative_path,
            health: health.to_string(),
            message: message.to_string(),
        });
    }

    Ok(items)
}

fn queue_asset_health_from_items(items: Vec<UpscaleQueueAssetHealthItem>) -> UpscaleQueueAssetHealth {
    let checked = items.len();
    let healthy = items.iter().filter(|item| item.health == "healthy").count();
    let missing_raw = items
        .iter()
        .filter(|item| item.health == "missing_raw")
        .count();
    let invalid_path = items
        .iter()
        .filter(|item| item.health == "invalid_path")
        .count();
    let ok = missing_raw == 0 && invalid_path == 0;
    let message = if ok {
        "Queue files are healthy.".to_string()
    } else {
        format!(
            "Queue file check found {missing_raw} missing raw and {invalid_path} invalid path item(s)."
        )
    };

    UpscaleQueueAssetHealth {
        ok,
        checked,
        healthy,
        missing_raw,
        invalid_path,
        items,
        message,
    }
}

fn inspect_raw_asset_path(paths: &AppPaths, relative_path: &str) -> RawAssetHealth {
    inspect_raw_asset_path_result(paths, relative_path).unwrap_or(RawAssetHealth::InvalidPath)
}

fn inspect_raw_asset_path_result(
    paths: &AppPaths,
    relative_path: &str,
) -> Result<RawAssetHealth, String> {
    let relative_path = match validated_relative_path(
        relative_path,
        "assets/raw",
        "Raw image asset path",
    ) {
        Ok(value) => value,
        Err(_) => return Ok(RawAssetHealth::InvalidPath),
    };
    let relative_root = platform_relative_path("assets/raw")?;
    let raw_relative_path = match relative_path.strip_prefix(&relative_root) {
        Ok(value) if !value.as_os_str().is_empty() => value,
        _ => return Ok(RawAssetHealth::InvalidPath),
    };

    let raw_root = paths.app_data_dir.join("assets").join("raw");
    let resolved_path = raw_root.join(raw_relative_path);
    if resolved_path != paths.app_data_dir.join(&relative_path) {
        return Ok(RawAssetHealth::InvalidPath);
    }

    match fs::symlink_metadata(&raw_root) {
        Ok(metadata) if metadata.file_type().is_symlink() || !metadata.is_dir() => {
            return Ok(RawAssetHealth::InvalidPath);
        }
        Ok(_) => {}
        Err(error) if error.kind() == ErrorKind::NotFound => {
            return Ok(RawAssetHealth::MissingRaw);
        }
        Err(_) => return Ok(RawAssetHealth::InvalidPath),
    }

    match fs::symlink_metadata(&resolved_path) {
        Ok(metadata) => {
            let file_type = metadata.file_type();
            if file_type.is_symlink() || !file_type.is_file() {
                return Ok(RawAssetHealth::InvalidPath);
            }
            ensure_existing_path_inside(&raw_root, &resolved_path, "Raw image asset")
                .map_err(|_| INVALID_RAW_PATH_MESSAGE.to_string())?;
            Ok(RawAssetHealth::Healthy(resolved_path))
        }
        Err(error) if error.kind() == ErrorKind::NotFound => {
            if missing_raw_path_ancestors_are_safe(&raw_root, &resolved_path) {
                Ok(RawAssetHealth::MissingRaw)
            } else {
                Ok(RawAssetHealth::InvalidPath)
            }
        }
        Err(_) => Ok(RawAssetHealth::InvalidPath),
    }
}

fn missing_raw_path_ancestors_are_safe(raw_root: &Path, missing_path: &Path) -> bool {
    let Some(mut current) = missing_path.parent() else {
        return false;
    };

    while current != raw_root {
        if !current.starts_with(raw_root) {
            return false;
        }

        match fs::symlink_metadata(current) {
            Ok(metadata) if metadata.file_type().is_symlink() || !metadata.is_dir() => {
                return false;
            }
            Ok(_) => {}
            Err(error) if error.kind() == ErrorKind::NotFound => {}
            Err(_) => return false,
        }

        let Some(parent) = current.parent() else {
            return false;
        };
        current = parent;
    }

    true
}

fn raw_asset_health_details(health: &RawAssetHealth) -> (&'static str, &'static str) {
    match health {
        RawAssetHealth::Healthy(_) => ("healthy", "Raw image copy is present."),
        RawAssetHealth::MissingRaw => ("missing_raw", MISSING_RAW_MESSAGE),
        RawAssetHealth::InvalidPath => ("invalid_path", INVALID_RAW_PATH_MESSAGE),
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
    models_dir: &Path,
    input_path: &Path,
    output_path: &Path,
    scale: i64,
    tile_size: i64,
    output_format: &str,
    stdout_path: &Path,
    stderr_path: &Path,
    cancel_context: Option<CommandCancelContext<'_>>,
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
        .arg("-t")
        .arg(tile_size.to_string())
        .arg("-m")
        .arg(models_dir)
        .arg("-f")
        .arg(output_format)
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

    if let Some(context) = cancel_context.as_ref() {
        let connection = open_processing_connection(context.paths)?;
        if let Err(error) =
            mark_upscale_processing_job_engine_pid(&connection, context.job_id, Some(i64::from(child.id())))
        {
            let _ = child.kill();
            let _ = child.wait();
            cleanup_temp_files(stdout_path, stderr_path);
            return Err(error);
        }
    }

    let started_at = Instant::now();
    let mut timed_out = false;
    let mut cancelled = false;
    let exit_code = loop {
        match child.try_wait() {
            Ok(Some(status)) => break status.code(),
            Ok(None) => {}
            Err(error) => {
                let _ = child.kill();
                let _ = child.wait();
                cleanup_temp_files(stdout_path, stderr_path);
                if let Some(context) = cancel_context.as_ref() {
                    let _ = open_processing_connection(context.paths).and_then(|connection| {
                        mark_upscale_processing_job_engine_pid(&connection, context.job_id, None)
                    });
                }
                return Err(format!("Unable to monitor Real-ESRGAN processing: {error}"));
            }
        }

        if let Some(context) = cancel_context.as_ref() {
            let connection = open_processing_connection(context.paths)?;
            if is_upscale_processing_job_cancel_requested(&connection, context.job_id)? {
                cancelled = true;
                let _ = child.kill();
                let status = match child.wait() {
                    Ok(status) => status,
                    Err(error) => {
                        cleanup_temp_files(stdout_path, stderr_path);
                        let _ = mark_upscale_processing_job_engine_pid(
                            &connection,
                            context.job_id,
                            None,
                        );
                        return Err(format!(
                            "Unable to stop cancelled Real-ESRGAN processing: {error}"
                        ));
                    }
                };
                let _ = mark_upscale_processing_job_engine_pid(&connection, context.job_id, None);
                break status.code();
            }
        }

        if started_at.elapsed() >= Duration::from_secs(PROCESS_TIMEOUT_SECONDS) {
            timed_out = true;
            let _ = child.kill();
            let status = match child.wait() {
                Ok(status) => status,
                Err(error) => {
                    cleanup_temp_files(stdout_path, stderr_path);
                    if let Some(context) = cancel_context.as_ref() {
                        let _ = open_processing_connection(context.paths).and_then(|connection| {
                            mark_upscale_processing_job_engine_pid(
                                &connection,
                                context.job_id,
                                None,
                            )
                        });
                    }
                    return Err(format!(
                        "Unable to stop timed out Real-ESRGAN processing: {error}"
                    ));
                }
            };
            break status.code();
        }

        thread::sleep(Duration::from_millis(300));
    };

    if let Some(context) = cancel_context.as_ref() {
        let _ = open_processing_connection(context.paths).and_then(|connection| {
            mark_upscale_processing_job_engine_pid(&connection, context.job_id, None)
        });
    }

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
        cancelled,
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
