import type {
  DashboardCard,
  HealthCheckItem,
  PhaseInfo,
  SettingsSection,
  ShortcutItem
} from "../types/app";

export const phaseInfo: PhaseInfo = {
  phase: "Phase 0",
  name: "Foundation",
  mode: "Offline Mode",
  storage: "Local",
  database: "SQLite foundation",
  aiEngine: "Not configured yet",
  status: "Foundation active"
};

export const dashboardCards: DashboardCard[] = [
  {
    id: "foundation-status",
    title: "Foundation Status",
    status: "Active foundation",
    summary: "React, TypeScript, Vite, Tauri, AppData, and SQLite foundation files are prepared.",
    nextStep: "Keep this as the base for later local-first production features."
  },
  {
    id: "appdata-storage",
    title: "AppData Storage",
    status: "Foundation added",
    summary: "Local AppData folder creation is handled by the Tauri backend.",
    nextStep: "Use this storage root for later Phase 0 settings, logs, and assets."
  },
  {
    id: "sqlite-database",
    title: "SQLite Database",
    status: "Foundation added",
    summary: "Local app.db creation and foundation migrations are handled by the backend.",
    nextStep: "Add feature-specific tables only in later scoped prompts."
  },
  {
    id: "settings-system",
    title: "Settings System",
    status: "Coming in next prompt",
    summary: "The settings table exists, but the settings UI is still read-only placeholder data.",
    nextStep: "Persist typed settings locally after storage exists."
  },
  {
    id: "realesrgan-engine",
    title: "Real-ESRGAN Engine",
    status: "Coming in later prompt",
    summary: "Phase 0 placeholder only; no image processing is implemented.",
    nextStep: "Wire engine discovery and test execution in a later task."
  },
  {
    id: "health-check",
    title: "Health Check",
    status: "Foundation checks added",
    summary: "AppData and SQLite health checks are available for Phase 0 foundation validation.",
    nextStep: "Add GPU and Real-ESRGAN diagnostics in a later task."
  },
  {
    id: "crash-recovery",
    title: "Crash Recovery",
    status: "Coming in later prompt",
    summary: "Phase 0 placeholder for recovery planning.",
    nextStep: "Add local crash markers and recovery flows later."
  },
  {
    id: "installer",
    title: "Installer",
    status: "Coming in later prompt",
    summary: "Phase 0 placeholder for Windows packaging readiness.",
    nextStep: "Configure production icons, signing, and installer metadata later."
  }
];

export const settingsSections: SettingsSection[] = [
  {
    id: "company-settings",
    title: "Company Settings",
    fields: ["Company name", "Operator name", "Primary location"]
  },
  {
    id: "app-defaults",
    title: "App Defaults",
    fields: ["Theme", "Startup screen", "Language"]
  },
  {
    id: "production-defaults",
    title: "Production Defaults",
    fields: ["Default print size", "Measurement units", "Production queue behavior"]
  },
  {
    id: "upscale-defaults",
    title: "Upscale Defaults",
    fields: ["Preferred scale", "Quality mode", "Engine path"]
  },
  {
    id: "storage-settings",
    title: "Storage Settings",
    fields: ["AppData root", "Export folder", "Log retention"]
  },
  {
    id: "update-settings",
    title: "Update Settings",
    fields: ["Update channel", "Manual update folder", "Last checked"]
  }
];

export const healthCheckItems: HealthCheckItem[] = [
  {
    id: "windows-compatibility",
    label: "Windows compatibility",
    status: "Phase 0 placeholder"
  },
  {
    id: "appdata-permission",
    label: "AppData permission",
    status: "Phase 0 placeholder"
  },
  {
    id: "sqlite-status",
    label: "SQLite status",
    status: "Foundation check available"
  },
  {
    id: "gpu-vulkan-status",
    label: "GPU/Vulkan status",
    status: "Phase 0 placeholder"
  },
  {
    id: "realesrgan-binary-status",
    label: "Real-ESRGAN binary status",
    status: "Not configured yet"
  },
  {
    id: "disk-space",
    label: "Disk space",
    status: "Phase 0 placeholder"
  },
  {
    id: "memory",
    label: "Memory",
    status: "Phase 0 placeholder"
  }
];

export const shortcutItems: ShortcutItem[] = [
  {
    keys: "Ctrl + ,",
    action: "Settings"
  },
  {
    keys: "Ctrl + Shift + H",
    action: "Health Check"
  },
  {
    keys: "Ctrl + Shift + L",
    action: "Logs"
  },
  {
    keys: "Ctrl + Q",
    action: "Quit app placeholder"
  }
];
