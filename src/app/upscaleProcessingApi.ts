import { invoke } from "@tauri-apps/api/core";
import type {
  StartUpscaleProcessingJobResult,
  UpscaleProcessBatchResult,
  UpscaleProcessItemResult,
  UpscaleProcessingJobState,
  UpscaleProcessingJobStatus,
  UpscaleProcessingPlanInput,
  UpscaleProcessingStatus,
  UpscaleQueueAssetHealth,
  UpscaleQueueAssetHealthItem,
  UpscaleQueueAssetHealthStatus,
  UpscaleQueueStatus
} from "../types/app";

export async function processUpscaleQueueItem(
  queueItemId: string
): Promise<UpscaleProcessItemResult> {
  return invokeChecked("process_upscale_queue_item", isUpscaleProcessItemResult, {
    queueItemId
  });
}

export async function startUpscaleProcessingJob(
  queueItemId: string,
  plan: UpscaleProcessingPlanInput
): Promise<StartUpscaleProcessingJobResult> {
  return invokeChecked(
    "start_upscale_processing_job",
    isStartUpscaleProcessingJobResult,
    { queueItemId, plan }
  );
}

export async function getUpscaleProcessingJob(
  jobId: string
): Promise<UpscaleProcessingJobStatus> {
  return invokeChecked(
    "get_upscale_processing_job",
    isUpscaleProcessingJobStatus,
    { jobId }
  );
}

export async function getActiveUpscaleProcessingJob(): Promise<UpscaleProcessingJobStatus | null> {
  return invokeChecked(
    "get_active_upscale_processing_job",
    isNullableUpscaleProcessingJobStatus
  );
}

export async function processNextUpscaleQueueItem(): Promise<UpscaleProcessBatchResult> {
  return invokeChecked(
    "process_next_upscale_queue_item",
    isUpscaleProcessBatchResult
  );
}

export async function processAllQueuedUpscaleItems(
  limit: number
): Promise<UpscaleProcessBatchResult> {
  return invokeChecked(
    "process_all_queued_upscale_items",
    isUpscaleProcessBatchResult,
    { limit }
  );
}

export async function retryFailedUpscaleQueueItem(
  queueItemId: string
): Promise<UpscaleProcessItemResult> {
  return invokeChecked(
    "retry_failed_upscale_queue_item",
    isUpscaleProcessItemResult,
    { queueItemId }
  );
}

export async function getUpscaleProcessingStatus(): Promise<UpscaleProcessingStatus> {
  return invokeChecked(
    "get_upscale_processing_status",
    isUpscaleProcessingStatus
  );
}

export async function getUpscaleQueueAssetHealth(): Promise<UpscaleQueueAssetHealth> {
  return invokeChecked(
    "get_upscale_queue_asset_health",
    isUpscaleQueueAssetHealth
  );
}

export async function repairMissingRawQueueItems(): Promise<UpscaleQueueAssetHealth> {
  return invokeChecked(
    "repair_missing_raw_queue_items",
    isUpscaleQueueAssetHealth,
    { confirm: "REPAIR_MISSING_RAW_QUEUE_ITEMS" }
  );
}

export async function repairStaleProcessingItems(): Promise<UpscaleProcessingStatus> {
  return invokeChecked(
    "repair_stale_processing_items",
    isUpscaleProcessingStatus,
    { confirm: "REPAIR_STALE_PROCESSING" }
  );
}

async function invokeChecked<T>(
  command: string,
  isExpected: (value: unknown) => value is T,
  args?: Record<string, unknown>
): Promise<T> {
  const response = await invoke<unknown>(command, args);
  if (!isExpected(response)) {
    throw new Error(`Unexpected response from ${command}`);
  }
  return response;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

function isNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function isNullableString(value: unknown): value is string | null {
  return value === null || isString(value);
}

function isNullableNumber(value: unknown): value is number | null {
  return value === null || isNumber(value);
}

function isQueueStatus(value: unknown): value is UpscaleQueueStatus {
  return (
    value === "queued" ||
    value === "processing" ||
    value === "completed" ||
    value === "failed" ||
    value === "removed"
  );
}

function isQueueAssetHealthStatus(
  value: unknown
): value is UpscaleQueueAssetHealthStatus {
  return value === "healthy" || value === "missing_raw" || value === "invalid_path";
}

function isJobState(value: unknown): value is UpscaleProcessingJobState {
  return (
    value === "pending" ||
    value === "running" ||
    value === "completed" ||
    value === "failed" ||
    value === "cancel_requested"
  );
}

function isStartUpscaleProcessingJobResult(
  value: unknown
): value is StartUpscaleProcessingJobResult {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isString(value.job_id) &&
    isString(value.queue_item_id) &&
    isString(value.message)
  );
}

function isUpscaleProcessingJobStatus(
  value: unknown
): value is UpscaleProcessingJobStatus {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isString(value.job_id) &&
    isString(value.queue_item_id) &&
    isJobState(value.status) &&
    isString(value.stage) &&
    isString(value.progress_label) &&
    isNullableString(value.started_at) &&
    isNullableString(value.completed_at) &&
    isNullableString(value.output_relative_path) &&
    isNullableString(value.error) &&
    isString(value.stdout_preview) &&
    isString(value.stderr_preview) &&
    isString(value.message) &&
    isString(value.target_label) &&
    isString(value.quality_mode) &&
    isString(value.tile_size)
  );
}

function isNullableUpscaleProcessingJobStatus(
  value: unknown
): value is UpscaleProcessingJobStatus | null {
  return value === null || isUpscaleProcessingJobStatus(value);
}

function isUpscaleProcessItemResult(
  value: unknown
): value is UpscaleProcessItemResult {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isString(value.queue_item_id) &&
    isQueueStatus(value.status) &&
    isNullableString(value.output_file_asset_id) &&
    isNullableString(value.output_relative_path) &&
    isNullableNumber(value.duration_ms) &&
    isString(value.message) &&
    isNullableString(value.error) &&
    isString(value.stdout_preview) &&
    isString(value.stderr_preview)
  );
}

function isUpscaleProcessBatchResult(
  value: unknown
): value is UpscaleProcessBatchResult {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isNumber(value.attempted) &&
    isNumber(value.completed) &&
    isNumber(value.failed) &&
    Array.isArray(value.results) &&
    value.results.every(isUpscaleProcessItemResult) &&
    isString(value.message)
  );
}

function isUpscaleProcessingStatus(
  value: unknown
): value is UpscaleProcessingStatus {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isNumber(value.queued) &&
    isNumber(value.processing) &&
    isNumber(value.completed) &&
    isNumber(value.failed) &&
    isNumber(value.removed) &&
    isString(value.message)
  );
}

function isUpscaleQueueAssetHealthItem(
  value: unknown
): value is UpscaleQueueAssetHealthItem {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.queue_item_id) &&
    isString(value.original_name) &&
    isQueueStatus(value.status) &&
    isString(value.relative_path) &&
    isQueueAssetHealthStatus(value.health) &&
    isString(value.message)
  );
}

function isUpscaleQueueAssetHealth(
  value: unknown
): value is UpscaleQueueAssetHealth {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isNumber(value.checked) &&
    isNumber(value.healthy) &&
    isNumber(value.missing_raw) &&
    isNumber(value.invalid_path) &&
    Array.isArray(value.items) &&
    value.items.every(isUpscaleQueueAssetHealthItem) &&
    isString(value.message)
  );
}
