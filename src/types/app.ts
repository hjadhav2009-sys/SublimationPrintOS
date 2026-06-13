export type RouteId =
  | "dashboard"
  | "designStore"
  | "designStudio"
  | "printSheetBuilder"
  | "settings"
  | "health"
  | "upscale"
  | "logs"
  | "updates"
  | "shortcuts"
  | "alphaChecklist";

export interface RouteDefinition {
  id: RouteId;
  path: string;
  title: string;
}

export interface NavigationItem {
  routeId: RouteId;
  label: string;
  description: string;
  badge?: string;
  isLocked?: boolean;
}

export interface NavigationGroup {
  id: string;
  label: string;
  items: NavigationItem[];
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

export type OpenFolderKey =
  | "app_data"
  | "logs"
  | "diagnostics"
  | "latest_diagnostic_report"
  | "recovery"
  | "recovery_snapshots"
  | "engine"
  | "upscaled"
  | "updates"
  | "updates_downloaded"
  | "updates_staged"
  | "updates_rollback";

export interface OpenFolderResult {
  ok: boolean;
  key: OpenFolderKey;
  path: string;
  message: string;
}

export interface ManagedFolderInfo {
  key: OpenFolderKey;
  label: string;
  path: string;
  exists: boolean;
}

export interface ManagedFolderPaths {
  folders: ManagedFolderInfo[];
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

export type LogLevel = "debug" | "info" | "warn" | "error";

export type LogModule =
  | "app"
  | "foundation"
  | "database"
  | "storage"
  | "settings"
  | "health"
  | "diagnostics"
  | "upscale"
  | "frontend";

export type LogSource =
  | "app.log"
  | "errors.log"
  | "database.log"
  | "settings.log"
  | "diagnostics.log"
  | "audit_logs";

export interface AppLogEntry {
  timestamp: string;
  level: LogLevel;
  module: LogModule;
  event: string;
  message: string;
  metadata: Record<string, unknown> | null;
}

export interface RecentLogEntry {
  source: LogSource;
  timestamp: string;
  level: LogLevel;
  module: LogModule;
  event: string;
  message: string;
}

export interface LogCommandResult {
  ok: boolean;
  message: string;
}

export interface RecentLogsResult {
  ok: boolean;
  entries: RecentLogEntry[];
  message: string;
}

export interface DiagnosticLogFileStatus {
  file_name: string;
  exists: boolean;
  size_bytes: number;
  last_modified: string | null;
}

export interface DiagnosticsSummary {
  ok: boolean;
  app_data_dir: string;
  database_path: string;
  logs_dir: string;
  diagnostics_dir: string;
  log_files: DiagnosticLogFileStatus[];
  schema_version: number | null;
  settings_available: boolean;
  recent_error_count: number;
  message: string;
}

export interface DiagnosticReportResult {
  ok: boolean;
  report_dir: string;
  files_written: string[];
  message: string;
}

export interface FrontendLogEvent {
  level: LogLevel;
  module: LogModule;
  event: string;
  message: string;
  metadata: Record<string, unknown> | null;
}

export interface RecoverySession {
  session_id: string;
  started_at: string;
  last_heartbeat_at: string;
  clean_shutdown: boolean;
  app_version: string;
  phase: "Phase 0";
  active_route: string | null;
  notes: string | null;
}

export interface RecoverySnapshot {
  snapshot_id: string;
  created_at: string;
  session_id: string;
  reason: string;
  active_route: string | null;
  settings_summary: Record<string, unknown> | null;
  foundation_summary: Record<string, unknown> | null;
  diagnostics_summary: Record<string, unknown> | null;
}

export interface RecoverySnapshotSummary {
  snapshot_id: string;
  created_at: string;
  reason: string;
  file_name: string;
}

export interface RecoveryStatus {
  ok: boolean;
  recovery_dir: string;
  current_session: RecoverySession | null;
  previous_unclean_session: RecoverySession | null;
  snapshots: RecoverySnapshotSummary[];
  message: string;
}

export interface RecoveryActionResult {
  ok: boolean;
  status: RecoveryStatus;
  message: string;
}

export interface EngineBinaryStatus {
  exists: boolean;
  path: string;
  file_name: string;
  size_bytes: number | null;
  last_modified: string | null;
}

export interface EngineModelStatus {
  models_dir_exists: boolean;
  models_dir: string;
  model_files_count: number;
  has_param_file: boolean;
  has_bin_file: boolean;
  sample_files: string[];
}

export interface EngineDiscoveryStatus {
  ok: boolean;
  engine_dir: string;
  binary: EngineBinaryStatus | null;
  models: EngineModelStatus;
  version_json_exists: boolean;
  can_run_basic_command: boolean;
  detected_version_text: string | null;
  message: string;
}

export interface EngineTestRunResult {
  ok: boolean;
  attempted: boolean;
  command_preview: string;
  exit_code: number | null;
  stdout_preview: string;
  stderr_preview: string;
  output_file: string | null;
  message: string;
}

export interface EngineExpectedLayout {
  engine_dir: string;
  expected_binary_path: string;
  expected_models_dir: string;
  expected_version_json: string;
  expected_test_input_path: string;
  expected_test_output_path: string;
  instructions: string[];
}

export type ImageImportItemStatus =
  | "queued"
  | "duplicate"
  | "skipped"
  | "error";

export interface ImageImportSummary {
  selected: number;
  imported: number;
  queued: number;
  duplicates: number;
  skipped: number;
  errors: number;
}

export interface ImageImportItemResult {
  original_name: string;
  source_path_preview: string;
  status: ImageImportItemStatus;
  file_asset_id: string | null;
  queue_item_id: string | null;
  message: string;
}

export interface ImageImportResult {
  ok: boolean;
  summary: ImageImportSummary;
  items: ImageImportItemResult[];
  message: string;
}

export type UpscaleQueueStatus =
  | "queued"
  | "processing"
  | "completed"
  | "failed"
  | "removed";

export interface UpscaleQueueItem {
  id: string;
  file_asset_id: string;
  original_name: string;
  relative_path: string;
  asset_type: string;
  mime_type: string | null;
  size_bytes: number | null;
  sha256: string | null;
  status: UpscaleQueueStatus;
  desired_scale_factor: 2 | 4 | 8;
  desired_output_format: "png" | "jpg" | "tiff" | "webp";
  source_kind: string;
  notes: string | null;
  output_file_asset_id: string | null;
  output_relative_path: string | null;
  processing_started_at: string | null;
  processing_completed_at: string | null;
  processing_error: string | null;
  processing_duration_ms: number | null;
  engine_command_preview: string | null;
  engine_stdout_preview: string | null;
  engine_stderr_preview: string | null;
  created_at: string;
  updated_at: string;
}

export interface UpscaleQueueSummary {
  queued: number;
  processing: number;
  completed: number;
  failed: number;
  removed: number;
  total: number;
}

export interface UpscaleQueueResponse {
  ok: boolean;
  items: UpscaleQueueItem[];
  summary: UpscaleQueueSummary;
  message: string;
}

export interface UpscaleIntakeSummary {
  ok: boolean;
  raw_asset_dir: string;
  queue: UpscaleQueueSummary;
  message: string;
}

export interface UpscaleProcessItemResult {
  ok: boolean;
  queue_item_id: string;
  status: UpscaleQueueStatus;
  output_file_asset_id: string | null;
  output_relative_path: string | null;
  duration_ms: number | null;
  message: string;
  error: string | null;
  stdout_preview: string;
  stderr_preview: string;
}

export interface UpscaleProcessBatchResult {
  ok: boolean;
  attempted: number;
  completed: number;
  failed: number;
  results: UpscaleProcessItemResult[];
  message: string;
}

export interface UpscaleProcessingStatus {
  ok: boolean;
  queued: number;
  processing: number;
  completed: number;
  failed: number;
  removed: number;
  message: string;
}

export type UpscaleProcessingPlanMode =
  | "scale"
  | "target_long_edge"
  | "target_8k";

export type UpscaleProcessingQualityMode = "safe" | "balanced" | "ultra";

export type UpscaleProcessingTileSize = "auto" | 64 | 128 | 256 | 512;

export interface UpscaleProcessingPlanInput {
  mode: UpscaleProcessingPlanMode;
  scale: 2 | 4 | 8 | 10 | null;
  target_long_edge_px: number | null;
  quality_mode: UpscaleProcessingQualityMode;
  output_format: "png" | "jpg" | "webp";
  tile_size: UpscaleProcessingTileSize;
}

export interface StartUpscaleProcessingJobResult {
  ok: boolean;
  job_id: string;
  queue_item_id: string;
  message: string;
}

export type UpscaleProcessingJobState =
  | "pending"
  | "running"
  | "completed"
  | "failed"
  | "cancel_requested";

export interface UpscaleProcessingJobStatus {
  ok: boolean;
  job_id: string;
  queue_item_id: string;
  status: UpscaleProcessingJobState;
  stage: string;
  progress_label: string;
  started_at: string | null;
  completed_at: string | null;
  output_relative_path: string | null;
  error: string | null;
  stdout_preview: string;
  stderr_preview: string;
  message: string;
  target_label: string;
  quality_mode: string;
  tile_size: string;
}

export type UpscaleQueueAssetHealthStatus =
  | "healthy"
  | "missing_raw"
  | "invalid_path";

export interface UpscaleQueueAssetHealthItem {
  queue_item_id: string;
  original_name: string;
  status: UpscaleQueueStatus;
  relative_path: string;
  health: UpscaleQueueAssetHealthStatus;
  message: string;
}

export interface UpscaleQueueAssetHealth {
  ok: boolean;
  checked: number;
  healthy: number;
  missing_raw: number;
  invalid_path: number;
  items: UpscaleQueueAssetHealthItem[];
  message: string;
}

export interface UpdateManifest {
  package_id: string;
  app_name: string;
  version: string;
  phase: string;
  created_at: string;
  channel: "alpha" | "beta" | "stable" | "test";
  notes: string;
  requires_app_min_version: string | null;
  files: unknown[];
}

export interface OfflineUpdatePackage {
  folder_name: string;
  folder_path: string;
  manifest_exists: boolean;
  manifest_valid: boolean;
  manifest: UpdateManifest | null;
  errors: string[];
  warnings: string[];
}

export interface OfflineUpdateStatus {
  ok: boolean;
  updates_dir: string;
  downloaded_dir: string;
  staged_dir: string;
  rollback_dir: string;
  packages: OfflineUpdatePackage[];
  message: string;
}

export interface StageUpdateResult {
  ok: boolean;
  staged_package_dir: string | null;
  message: string;
}

export type AdvancedHealthCategory =
  | "system"
  | "storage"
  | "database"
  | "settings"
  | "logs"
  | "diagnostics"
  | "recovery"
  | "updates"
  | "engine"
  | "security";

export interface AdvancedHealthCheckItem {
  key: string;
  label: string;
  category: AdvancedHealthCategory;
  status: HealthCheckStatus;
  message: string;
  details: string | null;
}

export interface AdvancedHealthSummary {
  pass: number;
  warn: number;
  fail: number;
}

export interface AdvancedHealthReport {
  ok: boolean;
  generated_at: string;
  checks: AdvancedHealthCheckItem[];
  summary: AdvancedHealthSummary;
  message: string;
}

export type ShortcutAction =
  | "dashboard"
  | "settings"
  | "health"
  | "logs"
  | "upscale"
  | "updates"
  | "shortcuts"
  | "create_recovery_snapshot"
  | "refresh_health_check";

export interface ShortcutDefinition {
  id: string;
  label: string;
  keys: string[];
  description: string;
  action: ShortcutAction;
  phase: "Phase 0";
}
