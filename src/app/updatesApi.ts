import { invoke } from "@tauri-apps/api/core";
import type {
  OfflineUpdatePackage,
  OfflineUpdateStatus,
  StageUpdateResult,
  UpdateManifest
} from "../types/app";

export async function getOfflineUpdateStatus(): Promise<OfflineUpdateStatus> {
  return invokeChecked("get_offline_update_status", isOfflineUpdateStatus);
}

export async function validateOfflineUpdatePackage(
  folderName: string
): Promise<OfflineUpdatePackage> {
  return invokeChecked(
    "validate_offline_update_package",
    isOfflineUpdatePackage,
    { folderName }
  );
}

export async function stageOfflineUpdatePackage(
  folderName: string
): Promise<StageUpdateResult> {
  return invokeChecked("stage_offline_update_package", isStageUpdateResult, {
    folderName
  });
}

export async function clearStagedUpdate(): Promise<OfflineUpdateStatus> {
  return invokeChecked("clear_staged_update", isOfflineUpdateStatus, {
    confirm: "CLEAR_STAGED_UPDATE"
  });
}

export async function createSampleUpdateManifest(): Promise<OfflineUpdateStatus> {
  return invokeChecked("create_sample_update_manifest", isOfflineUpdateStatus);
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

function isNullableString(value: unknown): value is string | null {
  return value === null || isString(value);
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(isString);
}

function isUpdateChannel(
  value: unknown
): value is UpdateManifest["channel"] {
  return (
    value === "alpha" ||
    value === "beta" ||
    value === "stable" ||
    value === "test"
  );
}

function isUpdateManifest(value: unknown): value is UpdateManifest {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.package_id) &&
    isString(value.app_name) &&
    isString(value.version) &&
    isString(value.phase) &&
    isString(value.created_at) &&
    isUpdateChannel(value.channel) &&
    isString(value.notes) &&
    isNullableString(value.requires_app_min_version) &&
    Array.isArray(value.files)
  );
}

function isNullableUpdateManifest(
  value: unknown
): value is UpdateManifest | null {
  return value === null || isUpdateManifest(value);
}

function isOfflineUpdatePackage(
  value: unknown
): value is OfflineUpdatePackage {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.folder_name) &&
    isString(value.folder_path) &&
    isBoolean(value.manifest_exists) &&
    isBoolean(value.manifest_valid) &&
    isNullableUpdateManifest(value.manifest) &&
    isStringArray(value.errors) &&
    isStringArray(value.warnings)
  );
}

function isOfflineUpdateStatus(value: unknown): value is OfflineUpdateStatus {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isString(value.updates_dir) &&
    isString(value.downloaded_dir) &&
    isString(value.staged_dir) &&
    isString(value.rollback_dir) &&
    Array.isArray(value.packages) &&
    value.packages.every(isOfflineUpdatePackage) &&
    isString(value.message)
  );
}

function isStageUpdateResult(value: unknown): value is StageUpdateResult {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isNullableString(value.staged_package_dir) &&
    isString(value.message)
  );
}
