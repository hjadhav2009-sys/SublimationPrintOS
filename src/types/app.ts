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
