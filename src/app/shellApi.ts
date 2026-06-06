import { invoke } from "@tauri-apps/api/core";
import type {
  ManagedFolderInfo,
  ManagedFolderPaths,
  OpenFolderKey,
  OpenFolderResult
} from "../types/app";

export async function openManagedFolder(
  key: OpenFolderKey
): Promise<OpenFolderResult> {
  return invokeChecked("open_managed_folder", isOpenFolderResult, { key });
}

export async function getManagedFolderPaths(): Promise<ManagedFolderPaths> {
  return invokeChecked("get_managed_folder_paths", isManagedFolderPaths);
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

function isOpenFolderKey(value: unknown): value is OpenFolderKey {
  return (
    value === "app_data" ||
    value === "logs" ||
    value === "diagnostics" ||
    value === "latest_diagnostic_report" ||
    value === "recovery" ||
    value === "recovery_snapshots" ||
    value === "engine" ||
    value === "updates" ||
    value === "updates_downloaded" ||
    value === "updates_staged" ||
    value === "updates_rollback"
  );
}

function isOpenFolderResult(value: unknown): value is OpenFolderResult {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isOpenFolderKey(value.key) &&
    isString(value.path) &&
    isString(value.message)
  );
}

function isManagedFolderInfo(value: unknown): value is ManagedFolderInfo {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isOpenFolderKey(value.key) &&
    isString(value.label) &&
    isString(value.path) &&
    isBoolean(value.exists)
  );
}

function isManagedFolderPaths(value: unknown): value is ManagedFolderPaths {
  if (!isRecord(value)) {
    return false;
  }

  return Array.isArray(value.folders) && value.folders.every(isManagedFolderInfo);
}
