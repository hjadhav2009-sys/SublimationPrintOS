import { invoke } from "@tauri-apps/api/core";
import type {
  RecoveryActionResult,
  RecoverySession,
  RecoverySnapshotSummary,
  RecoveryStatus
} from "../types/app";

export async function initializeRecovery(
  activeRoute: string | null
): Promise<RecoveryStatus> {
  return invokeChecked("initialize_recovery", isRecoveryStatus, {
    activeRoute
  });
}

export async function updateRecoveryHeartbeat(
  activeRoute: string | null
): Promise<RecoveryStatus> {
  return invokeChecked("update_recovery_heartbeat", isRecoveryStatus, {
    activeRoute
  });
}

export async function markRecoveryCleanShutdown(): Promise<RecoveryStatus> {
  return invokeChecked("mark_recovery_clean_shutdown", isRecoveryStatus);
}

export async function getRecoveryStatus(): Promise<RecoveryStatus> {
  return invokeChecked("get_recovery_status", isRecoveryStatus);
}

export async function createRecoverySnapshot(
  reason: string,
  activeRoute: string | null
): Promise<RecoveryActionResult> {
  return invokeChecked("create_recovery_snapshot", isRecoveryActionResult, {
    reason,
    activeRoute
  });
}

export async function dismissPreviousRecoveryWarning(): Promise<RecoveryStatus> {
  return invokeChecked("dismiss_previous_recovery_warning", isRecoveryStatus);
}

export async function clearRecoverySnapshots(): Promise<RecoveryStatus> {
  return invokeChecked("clear_recovery_snapshots", isRecoveryStatus, {
    confirm: "CLEAR_RECOVERY_SNAPSHOTS"
  });
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

function isRecoverySession(value: unknown): value is RecoverySession {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.session_id) &&
    isString(value.started_at) &&
    isString(value.last_heartbeat_at) &&
    isBoolean(value.clean_shutdown) &&
    isString(value.app_version) &&
    value.phase === "Phase 0" &&
    isNullableString(value.active_route) &&
    isNullableString(value.notes)
  );
}

function isNullableRecoverySession(
  value: unknown
): value is RecoverySession | null {
  return value === null || isRecoverySession(value);
}

function isRecoverySnapshotSummary(
  value: unknown
): value is RecoverySnapshotSummary {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.snapshot_id) &&
    isString(value.created_at) &&
    isString(value.reason) &&
    isString(value.file_name)
  );
}

function isRecoveryStatus(value: unknown): value is RecoveryStatus {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isString(value.recovery_dir) &&
    isNullableRecoverySession(value.current_session) &&
    isNullableRecoverySession(value.previous_unclean_session) &&
    Array.isArray(value.snapshots) &&
    value.snapshots.every(isRecoverySnapshotSummary) &&
    isString(value.message)
  );
}

function isRecoveryActionResult(value: unknown): value is RecoveryActionResult {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isRecoveryStatus(value.status) &&
    isString(value.message)
  );
}
