import { invoke } from "@tauri-apps/api/core";
import type {
  DiagnosticLogFileStatus,
  DiagnosticReportResult,
  DiagnosticsSummary,
  FrontendLogEvent,
  LogCommandResult,
  LogLevel,
  LogModule,
  LogSource,
  RecentLogEntry,
  RecentLogsResult
} from "../types/app";

export async function initializeLogging(): Promise<DiagnosticsSummary> {
  return invokeChecked("initialize_logging", isDiagnosticsSummary);
}

export async function recordFrontendEvent(
  event: FrontendLogEvent
): Promise<LogCommandResult> {
  return invokeChecked("record_frontend_event", isLogCommandResult, {
    level: event.level,
    module: event.module,
    event: event.event,
    message: event.message,
    metadata: event.metadata
  });
}

export async function getRecentLogs(limit = 50): Promise<RecentLogsResult> {
  return invokeChecked("get_recent_logs", isRecentLogsResult, { limit });
}

export async function getDiagnosticsSummary(): Promise<DiagnosticsSummary> {
  return invokeChecked("get_diagnostics_summary", isDiagnosticsSummary);
}

export async function createDiagnosticReport(): Promise<DiagnosticReportResult> {
  return invokeChecked("create_diagnostic_report", isDiagnosticReportResult);
}

export async function clearLogFiles(): Promise<DiagnosticsSummary> {
  return invokeChecked("clear_log_files", isDiagnosticsSummary, {
    confirm: "CLEAR_LOCAL_LOGS"
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

function isNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function isNullableString(value: unknown): value is string | null {
  return value === null || isString(value);
}

function isNullableNumber(value: unknown): value is number | null {
  return value === null || isNumber(value);
}

function isLogLevel(value: unknown): value is LogLevel {
  return (
    value === "debug" ||
    value === "info" ||
    value === "warn" ||
    value === "error"
  );
}

function isLogModule(value: unknown): value is LogModule {
  return (
    value === "app" ||
    value === "foundation" ||
    value === "database" ||
    value === "storage" ||
    value === "settings" ||
    value === "health" ||
    value === "diagnostics" ||
    value === "upscale" ||
    value === "frontend"
  );
}

function isLogSource(value: unknown): value is LogSource {
  return (
    value === "app.log" ||
    value === "errors.log" ||
    value === "database.log" ||
    value === "settings.log" ||
    value === "diagnostics.log" ||
    value === "audit_logs"
  );
}

function isLogCommandResult(value: unknown): value is LogCommandResult {
  if (!isRecord(value)) {
    return false;
  }

  return isBoolean(value.ok) && isString(value.message);
}

function isRecentLogEntry(value: unknown): value is RecentLogEntry {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isLogSource(value.source) &&
    isString(value.timestamp) &&
    isLogLevel(value.level) &&
    isLogModule(value.module) &&
    isString(value.event) &&
    isString(value.message)
  );
}

function isRecentLogsResult(value: unknown): value is RecentLogsResult {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    Array.isArray(value.entries) &&
    value.entries.every(isRecentLogEntry) &&
    isString(value.message)
  );
}

function isDiagnosticLogFileStatus(
  value: unknown
): value is DiagnosticLogFileStatus {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.file_name) &&
    isBoolean(value.exists) &&
    isNumber(value.size_bytes) &&
    isNullableString(value.last_modified)
  );
}

function isDiagnosticsSummary(value: unknown): value is DiagnosticsSummary {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isString(value.app_data_dir) &&
    isString(value.database_path) &&
    isString(value.logs_dir) &&
    isString(value.diagnostics_dir) &&
    Array.isArray(value.log_files) &&
    value.log_files.every(isDiagnosticLogFileStatus) &&
    isNullableNumber(value.schema_version) &&
    isBoolean(value.settings_available) &&
    isNumber(value.recent_error_count) &&
    isString(value.message)
  );
}

function isDiagnosticReportResult(
  value: unknown
): value is DiagnosticReportResult {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isString(value.report_dir) &&
    Array.isArray(value.files_written) &&
    value.files_written.every(isString) &&
    isString(value.message)
  );
}
