import { invoke } from "@tauri-apps/api/core";
import type {
  AppPreferences,
  AppSettings,
  CompanySettings,
  ProductionDefaults,
  RouteId,
  SettingsSaveResult,
  SettingsSummary,
  SettingsValidationError,
  SettingsValidationResult,
  UpdatePreferences,
  UpscaleDefaults
} from "../types/app";

export async function getAppSettings(): Promise<AppSettings> {
  return invokeChecked("get_app_settings", isAppSettings);
}

export async function saveAppSettings(
  settings: AppSettings
): Promise<SettingsSaveResult> {
  return invokeChecked("save_app_settings", isSettingsSaveResult, { settings });
}

export async function resetAppSettings(): Promise<AppSettings> {
  return invokeChecked("reset_app_settings", isAppSettings);
}

export async function getSettingsSummary(): Promise<SettingsSummary> {
  return invokeChecked("get_settings_summary", isSettingsSummary);
}

export async function validateAppSettings(
  settings: AppSettings
): Promise<SettingsValidationResult> {
  return invokeChecked("validate_app_settings", isSettingsValidationResult, {
    settings
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

function isRouteId(value: unknown): value is RouteId {
  return (
    value === "dashboard" ||
    value === "settings" ||
    value === "health" ||
    value === "upscale" ||
    value === "logs" ||
    value === "updates" ||
    value === "shortcuts"
  );
}

function isTheme(value: unknown): value is AppPreferences["theme"] {
  return value === "dark" || value === "light";
}

function isLanguage(value: unknown): value is AppPreferences["language"] {
  return value === "en" || value === "hi" || value === "mr";
}

function isUnit(value: unknown): value is ProductionDefaults["default_unit"] {
  return value === "mm" || value === "inch" || value === "px";
}

function isDpi(value: unknown): value is ProductionDefaults["default_dpi"] {
  return value === 300 || value === 600;
}

function isPagePreset(
  value: unknown
): value is ProductionDefaults["default_page_preset"] {
  return value === "A4" || value === "A3" || value === "13x19" || value === "custom";
}

function isScaleFactor(
  value: unknown
): value is UpscaleDefaults["default_scale_factor"] {
  return value === 2 || value === 4 || value === 8;
}

function isOutputFormat(
  value: unknown
): value is UpscaleDefaults["default_output_format"] {
  return value === "png" || value === "jpg" || value === "tiff" || value === "webp";
}

function isCompanySettings(value: unknown): value is CompanySettings {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.company_name) &&
    isString(value.operator_name) &&
    isString(value.default_workspace_name)
  );
}

function isAppPreferences(value: unknown): value is AppPreferences {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isTheme(value.theme) &&
    isLanguage(value.language) &&
    isRouteId(value.startup_page) &&
    isNumber(value.autosave_interval_minutes) &&
    isNumber(value.recent_files_limit)
  );
}

function isProductionDefaults(value: unknown): value is ProductionDefaults {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isUnit(value.default_unit) &&
    isDpi(value.default_dpi) &&
    isPagePreset(value.default_page_preset) &&
    isNumber(value.default_margin_mm) &&
    isNumber(value.default_gap_mm) &&
    isNumber(value.default_bleed_mm)
  );
}

function isUpscaleDefaults(value: unknown): value is UpscaleDefaults {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isScaleFactor(value.default_scale_factor) &&
    isOutputFormat(value.default_output_format) &&
    isBoolean(value.preserve_transparency) &&
    isBoolean(value.use_gpu_when_available)
  );
}

function isUpdatePreferences(value: unknown): value is UpdatePreferences {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.check_updates_on_startup) &&
    isBoolean(value.allow_offline_update_package)
  );
}

function isAppSettings(value: unknown): value is AppSettings {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isCompanySettings(value.company) &&
    isAppPreferences(value.app) &&
    isProductionDefaults(value.production) &&
    isUpscaleDefaults(value.upscale) &&
    isUpdatePreferences(value.updates) &&
    isNullableString(value.updated_at)
  );
}

function isSettingsSaveResult(value: unknown): value is SettingsSaveResult {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    isAppSettings(value.settings) &&
    isString(value.message)
  );
}

function isSettingsValidationError(
  value: unknown
): value is SettingsValidationError {
  if (!isRecord(value)) {
    return false;
  }

  return isString(value.field) && isString(value.message);
}

function isSettingsValidationResult(
  value: unknown
): value is SettingsValidationResult {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isBoolean(value.ok) &&
    Array.isArray(value.errors) &&
    value.errors.every(isSettingsValidationError) &&
    isString(value.message)
  );
}

function isSettingsSummary(value: unknown): value is SettingsSummary {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.company_name) &&
    isTheme(value.theme) &&
    isLanguage(value.language) &&
    isUnit(value.default_unit) &&
    isDpi(value.default_dpi) &&
    isScaleFactor(value.default_scale_factor) &&
    isNullableString(value.updated_at_latest)
  );
}
