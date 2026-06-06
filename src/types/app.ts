export type RouteId =
  | "dashboard"
  | "settings"
  | "health"
  | "upscale"
  | "logs"
  | "updates"
  | "shortcuts";

export interface RouteDefinition {
  id: RouteId;
  path: string;
  title: string;
}

export interface NavigationItem {
  routeId: RouteId;
  label: string;
  description: string;
}

export interface PhaseInfo {
  phase: string;
  name: string;
  mode: string;
  storage: string;
  database: string;
  aiEngine: string;
  status: string;
}

export interface DashboardCard {
  id: string;
  title: string;
  status: string;
  summary: string;
  nextStep: string;
}

export interface SettingsSection {
  id: string;
  title: string;
  fields: string[];
}

export interface HealthCheckItem {
  id: string;
  label: string;
  status: string;
}

export interface ShortcutItem {
  keys: string;
  action: string;
}

export interface FoundationStatus {
  ok: boolean;
  app_data_dir: string;
  database_path: string;
  folders_created: number;
  folders_existing: number;
  folders_missing: number;
  schema_version: number;
  storage_ok: boolean;
  database_ok: boolean;
  message: string;
}

export interface AppFolderDescriptor {
  key: string;
  relative_path: string;
}

export interface FolderStatus {
  key: string;
  relative_path: string;
  absolute_path: string;
  exists: boolean;
}

export interface StorageStatus {
  ok: boolean;
  app_data_dir: string;
  writable: boolean;
  missing_folders_count: number;
  folders: FolderStatus[];
  message: string;
}

export interface DatabaseStatus {
  ok: boolean;
  database_path: string;
  database_exists: boolean;
  can_open: boolean;
  schema_version: number | null;
  journal_mode: string | null;
  wal_mode: boolean;
  integrity_check: string | null;
  message: string;
}

export type HealthCheckStatus = "pass" | "warn" | "fail";

export interface DatabaseHealthCheckItem {
  key: string;
  label: string;
  status: HealthCheckStatus;
  message: string;
}

export interface DatabaseHealthCheck {
  ok: boolean;
  database_path: string;
  checks: DatabaseHealthCheckItem[];
  message: string;
}

export interface CompanySettings {
  company_name: string;
  operator_name: string;
  default_workspace_name: string;
}

export interface AppPreferences {
  theme: "dark" | "light";
  language: "en" | "hi" | "mr";
  startup_page: RouteId;
  autosave_interval_minutes: number;
  recent_files_limit: number;
}

export interface ProductionDefaults {
  default_unit: "mm" | "inch" | "px";
  default_dpi: 300 | 600;
  default_page_preset: "A4" | "A3" | "13x19" | "custom";
  default_margin_mm: number;
  default_gap_mm: number;
  default_bleed_mm: number;
}

export interface UpscaleDefaults {
  default_scale_factor: 2 | 4 | 8;
  default_output_format: "png" | "jpg" | "tiff" | "webp";
  preserve_transparency: boolean;
  use_gpu_when_available: boolean;
}

export interface UpdatePreferences {
  check_updates_on_startup: boolean;
  allow_offline_update_package: boolean;
}

export interface AppSettings {
  company: CompanySettings;
  app: AppPreferences;
  production: ProductionDefaults;
  upscale: UpscaleDefaults;
  updates: UpdatePreferences;
  updated_at: string | null;
}

export interface SettingsSaveResult {
  ok: boolean;
  settings: AppSettings;
  message: string;
}

export interface SettingsValidationError {
  field: string;
  message: string;
}

export interface SettingsValidationResult {
  ok: boolean;
  errors: SettingsValidationError[];
  message: string;
}

export interface SettingsSummary {
  company_name: string;
  theme: AppPreferences["theme"];
  language: AppPreferences["language"];
  default_unit: ProductionDefaults["default_unit"];
  default_dpi: ProductionDefaults["default_dpi"];
  default_scale_factor: UpscaleDefaults["default_scale_factor"];
  updated_at_latest: string | null;
}
