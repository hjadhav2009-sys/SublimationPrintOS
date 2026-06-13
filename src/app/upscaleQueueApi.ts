import { invoke } from "@tauri-apps/api/core";
import type {
  ImageImportItemResult,
  ImageImportItemStatus,
  ImageImportResult,
  ImageImportSummary,
  UpscaleIntakeSummary,
  UpscaleQueueItem,
  UpscaleQueueResponse,
  UpscaleQueueStatus,
  UpscaleQueueSummary
} from "../types/app";

export async function importImagesWithDialog(): Promise<ImageImportResult> {
  return invokeChecked("import_images_with_dialog", isImageImportResult);
}

export async function importImagesFromFolderDialog(): Promise<ImageImportResult> {
  return invokeChecked(
    "import_images_from_folder_dialog",
    isImageImportResult
  );
}

export async function getUpscaleQueue(
  includeRemoved = false
): Promise<UpscaleQueueResponse> {
  return invokeChecked("get_upscale_queue", isUpscaleQueueResponse, {
    includeRemoved
  });
}

export async function updateUpscaleQueueItemSettings(
  queueItemId: string,
  desiredScaleFactor: UpscaleQueueItem["desired_scale_factor"],
  desiredOutputFormat: UpscaleQueueItem["desired_output_format"]
): Promise<UpscaleQueueItem> {
  return invokeChecked("update_upscale_queue_item_settings", isUpscaleQueueItem, {
    queueItemId,
    desiredScaleFactor,
    desiredOutputFormat
  });
}

export async function removeUpscaleQueueItem(
  queueItemId: string
): Promise<UpscaleQueueResponse> {
  return invokeChecked("remove_upscale_queue_item", isUpscaleQueueResponse, {
    queueItemId
  });
}

export async function clearUpscaleQueue(): Promise<UpscaleQueueResponse> {
  return invokeChecked("clear_upscale_queue", isUpscaleQueueResponse, {
    confirm: "CLEAR_UPSCALE_QUEUE"
  });
}

export async function getUpscaleIntakeSummary(): Promise<UpscaleIntakeSummary> {
  return invokeChecked(
    "get_upscale_intake_summary",
    isUpscaleIntakeSummary
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

function isImageImportItemStatus(value: unknown): value is ImageImportItemStatus {
  return (
    value === "queued" ||
    value === "duplicate" ||
    value === "skipped" ||
    value === "error"
  );
}

function isScaleFactor(
  value: unknown
): value is UpscaleQueueItem["desired_scale_factor"] {
  return value === 2 || value === 4 || value === 8;
}

function isOutputFormat(
  value: unknown
): value is UpscaleQueueItem["desired_output_format"] {
  return value === "png" || value === "jpg" || value === "tiff" || value === "webp";
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

function isImageImportSummary(value: unknown): value is ImageImportSummary {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isNumber(value.selected) &&
    isNumber(value.imported) &&
    isNumber(value.queued) &&
    isNumber(value.duplicates) &&
    isNumber(value.skipped) &&
    isNumber(value.errors)
  );
}

function isImageImportItemResult(
  value: unknown
): value is ImageImportItemResult {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.original_name) &&
    isString(value.source_path_preview) &&
    isImageImportItemStatus(value.status) &&
    isNullableString(value.file_asset_id) &&
    isNullableString(value.queue_item_id) &&
    isString(value.message)
  );
}

function isImageImportResult(value: unknown): value is ImageImportResult {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isImageImportSummary(value.summary) &&
    Array.isArray(value.items) &&
    value.items.every(isImageImportItemResult) &&
    isString(value.message)
  );
}

function isUpscaleQueueSummary(value: unknown): value is UpscaleQueueSummary {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isNumber(value.queued) &&
    isNumber(value.processing) &&
    isNumber(value.completed) &&
    isNumber(value.failed) &&
    isNumber(value.removed) &&
    isNumber(value.total)
  );
}

function isUpscaleQueueItem(value: unknown): value is UpscaleQueueItem {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.id) &&
    isString(value.file_asset_id) &&
    isString(value.original_name) &&
    isString(value.relative_path) &&
    isString(value.asset_type) &&
    isNullableString(value.mime_type) &&
    isNullableNumber(value.size_bytes) &&
    isNullableString(value.sha256) &&
    isQueueStatus(value.status) &&
    isScaleFactor(value.desired_scale_factor) &&
    isOutputFormat(value.desired_output_format) &&
    isString(value.source_kind) &&
    isNullableString(value.notes) &&
    isNullableString(value.output_file_asset_id) &&
    isNullableString(value.output_relative_path) &&
    isNullableString(value.processing_started_at) &&
    isNullableString(value.processing_completed_at) &&
    isNullableString(value.processing_error) &&
    isNullableNumber(value.processing_duration_ms) &&
    isNullableString(value.engine_command_preview) &&
    isNullableString(value.engine_stdout_preview) &&
    isNullableString(value.engine_stderr_preview) &&
    isString(value.created_at) &&
    isString(value.updated_at)
  );
}

function isUpscaleQueueResponse(value: unknown): value is UpscaleQueueResponse {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    Array.isArray(value.items) &&
    value.items.every(isUpscaleQueueItem) &&
    isUpscaleQueueSummary(value.summary) &&
    isString(value.message)
  );
}

function isUpscaleIntakeSummary(value: unknown): value is UpscaleIntakeSummary {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isString(value.raw_asset_dir) &&
    isUpscaleQueueSummary(value.queue) &&
    isString(value.message)
  );
}
