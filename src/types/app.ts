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
