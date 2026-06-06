import { invoke } from "@tauri-apps/api/core";
import type {
  AdvancedHealthCategory,
  AdvancedHealthCheckItem,
  AdvancedHealthReport,
  AdvancedHealthSummary,
  HealthCheckStatus
} from "../types/app";

export async function runAdvancedHealthCheck(): Promise<AdvancedHealthReport> {
  return invokeChecked("run_advanced_health_check", isAdvancedHealthReport);
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

function isHealthStatus(value: unknown): value is HealthCheckStatus {
  return value === "pass" || value === "warn" || value === "fail";
}

function isAdvancedHealthCategory(value: unknown): value is AdvancedHealthCategory {
  return (
    value === "system" ||
    value === "storage" ||
    value === "database" ||
    value === "settings" ||
    value === "logs" ||
    value === "diagnostics" ||
    value === "recovery" ||
    value === "updates" ||
    value === "engine" ||
    value === "security"
  );
}

function isAdvancedHealthSummary(value: unknown): value is AdvancedHealthSummary {
  if (!isRecord(value)) {
    return false;
  }

  return isNumber(value.pass) && isNumber(value.warn) && isNumber(value.fail);
}

function isAdvancedHealthCheckItem(
  value: unknown
): value is AdvancedHealthCheckItem {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.key) &&
    isString(value.label) &&
    isAdvancedHealthCategory(value.category) &&
    isHealthStatus(value.status) &&
    isString(value.message) &&
    isNullableString(value.details)
  );
}

function isAdvancedHealthReport(value: unknown): value is AdvancedHealthReport {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isString(value.generated_at) &&
    Array.isArray(value.checks) &&
    value.checks.every(isAdvancedHealthCheckItem) &&
    isAdvancedHealthSummary(value.summary) &&
    isString(value.message)
  );
}
