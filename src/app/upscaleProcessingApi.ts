import { invoke } from "@tauri-apps/api/core";
import type {
  UpscaleProcessBatchResult,
  UpscaleProcessItemResult,
  UpscaleProcessingStatus,
  UpscaleQueueStatus
} from "../types/app";

export async function processUpscaleQueueItem(
  queueItemId: string
): Promise<UpscaleProcessItemResult> {
  return invokeChecked("process_upscale_queue_item", isUpscaleProcessItemResult, {
    queueItemId
  });
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
