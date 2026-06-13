import { invoke } from "@tauri-apps/api/core";
import type {
  EngineBinaryStatus,
  EngineDiscoveryStatus,
  EngineExpectedLayout,
  EngineModelStatus,
  EngineTestRunResult
} from "../types/app";

export async function discoverRealEsrganEngine(): Promise<EngineDiscoveryStatus> {
  return invokeChecked("discover_realesrgan_engine", isEngineDiscoveryStatus);
}

export async function getRealEsrganExpectedLayout(): Promise<EngineExpectedLayout> {
  return invokeChecked("get_realesrgan_expected_layout", isEngineExpectedLayout);
}

export async function runRealEsrganSafeTest(): Promise<EngineTestRunResult> {
  return invokeChecked("run_realesrgan_safe_test", isEngineTestRunResult);
}

export async function clearRealEsrganTestOutput(): Promise<EngineDiscoveryStatus> {
  return invokeChecked("clear_realesrgan_test_output", isEngineDiscoveryStatus);
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

function isEngineBinaryStatus(value: unknown): value is EngineBinaryStatus {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.exists) &&
    isString(value.path) &&
    isString(value.file_name) &&
    isNullableNumber(value.size_bytes) &&
    isNullableString(value.last_modified)
  );
}

function isNullableEngineBinaryStatus(
  value: unknown
): value is EngineBinaryStatus | null {
  return value === null || isEngineBinaryStatus(value);
}

function isEngineModelStatus(value: unknown): value is EngineModelStatus {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.models_dir_exists) &&
    isString(value.models_dir) &&
    isNumber(value.model_files_count) &&
    isBoolean(value.has_param_file) &&
    isBoolean(value.has_bin_file) &&
    Array.isArray(value.sample_files) &&
    value.sample_files.every(isString)
  );
}

function isEngineDiscoveryStatus(value: unknown): value is EngineDiscoveryStatus {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isString(value.engine_dir) &&
    isNullableEngineBinaryStatus(value.binary) &&
    isEngineModelStatus(value.models) &&
    isBoolean(value.version_json_exists) &&
    isBoolean(value.can_run_basic_command) &&
    isNullableString(value.detected_version_text) &&
    isString(value.message)
  );
}

function isEngineTestRunResult(value: unknown): value is EngineTestRunResult {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isBoolean(value.attempted) &&
    isString(value.command_preview) &&
    isNullableNumber(value.exit_code) &&
    isString(value.stdout_preview) &&
    isString(value.stderr_preview) &&
    isNullableString(value.output_file) &&
    isString(value.message)
  );
}

function isEngineExpectedLayout(value: unknown): value is EngineExpectedLayout {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.engine_dir) &&
    isString(value.expected_binary_path) &&
    isString(value.expected_models_dir) &&
    isString(value.expected_version_json) &&
    isString(value.expected_test_input_path) &&
    isString(value.expected_test_output_path) &&
    Array.isArray(value.instructions) &&
    value.instructions.every(isString)
  );
}
