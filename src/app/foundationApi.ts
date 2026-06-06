import { invoke } from "@tauri-apps/api/core";
import type {
  AppFolderDescriptor,
  DatabaseHealthCheck,
  DatabaseHealthCheckItem,
  DatabaseStatus,
  FolderStatus,
  FoundationStatus,
  StorageStatus
} from "../types/app";

export async function initializeFoundation(): Promise<FoundationStatus> {
  return invokeChecked("initialize_foundation", isFoundationStatus);
}

export async function getStorageStatus(): Promise<StorageStatus> {
  return invokeChecked("get_storage_status", isStorageStatus);
}

export async function getDatabaseStatus(): Promise<DatabaseStatus> {
  return invokeChecked("get_database_status", isDatabaseStatus);
}

export async function runDatabaseHealthCheck(): Promise<DatabaseHealthCheck> {
  return invokeChecked("run_database_health_check", isDatabaseHealthCheck);
}

export async function getRequiredAppFolders(): Promise<AppFolderDescriptor[]> {
  return invokeChecked("get_required_app_folders", isAppFolderDescriptorArray);
}

export function commandErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return "Unexpected backend error";
}

async function invokeChecked<T>(
  command: string,
  isExpected: (value: unknown) => value is T
): Promise<T> {
  const response = await invoke<unknown>(command);
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

function isFoundationStatus(value: unknown): value is FoundationStatus {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isString(value.app_data_dir) &&
    isString(value.database_path) &&
    isNumber(value.folders_created) &&
    isNumber(value.folders_existing) &&
    isNumber(value.folders_missing) &&
    isNumber(value.schema_version) &&
    isBoolean(value.storage_ok) &&
    isBoolean(value.database_ok) &&
    isString(value.message)
  );
}

function isAppFolderDescriptor(value: unknown): value is AppFolderDescriptor {
  if (!isRecord(value)) {
    return false;
  }

  return isString(value.key) && isString(value.relative_path);
}

function isAppFolderDescriptorArray(
  value: unknown
): value is AppFolderDescriptor[] {
  return Array.isArray(value) && value.every(isAppFolderDescriptor);
}

function isFolderStatus(value: unknown): value is FolderStatus {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.key) &&
    isString(value.relative_path) &&
    isString(value.absolute_path) &&
    isBoolean(value.exists)
  );
}

function isStorageStatus(value: unknown): value is StorageStatus {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isString(value.app_data_dir) &&
    isBoolean(value.writable) &&
    isNumber(value.missing_folders_count) &&
    Array.isArray(value.folders) &&
    value.folders.every(isFolderStatus) &&
    isString(value.message)
  );
}

function isDatabaseStatus(value: unknown): value is DatabaseStatus {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isString(value.database_path) &&
    isBoolean(value.database_exists) &&
    isBoolean(value.can_open) &&
    isNullableNumber(value.schema_version) &&
    isNullableString(value.journal_mode) &&
    isBoolean(value.wal_mode) &&
    isNullableString(value.integrity_check) &&
    isString(value.message)
  );
}

function isHealthStatus(value: unknown): value is "pass" | "warn" | "fail" {
  return value === "pass" || value === "warn" || value === "fail";
}

function isDatabaseHealthCheckItem(
  value: unknown
): value is DatabaseHealthCheckItem {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.key) &&
    isString(value.label) &&
    isHealthStatus(value.status) &&
    isString(value.message)
  );
}

function isDatabaseHealthCheck(value: unknown): value is DatabaseHealthCheck {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isString(value.database_path) &&
    Array.isArray(value.checks) &&
    value.checks.every(isDatabaseHealthCheckItem) &&
    isString(value.message)
  );
}
