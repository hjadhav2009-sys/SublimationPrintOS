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
  database: "Not configured yet",
  aiEngine: "Not configured yet",
  status: "Scaffold only"
};

export const dashboardCards: DashboardCard[] = [
  {
    id: "foundation-status",
    title: "Foundation Status",
    status: "Scaffold only",
    summary: "React, TypeScript, Vite, and Tauri foundation files are prepared.",
    nextStep: "Keep this as the base for later local-first production features."
  },
  {
    id: "appdata-storage",
    title: "AppData Storage",
    status: "Coming in next prompt",
    summary: "Phase 0 placeholder for local AppData storage paths.",
    nextStep: "Add Windows AppData folder setup and permission checks later."
  },
  {
    id: "sqlite-database",
    title: "SQLite Database",
    status: "Coming in next prompt",
    summary: "Phase 0 placeholder for local SQLite persistence.",
    nextStep: "Add schema and migrations in a later Phase 0 task."
  },
  {
    id: "settings-system",
    title: "Settings System",
    status: "Coming in next prompt",
    summary: "Phase 0 placeholder for editable settings.",
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
    status: "Coming in later prompt",
    summary: "Phase 0 placeholder for diagnostic check definitions.",
    nextStep: "Replace static placeholder rows with real local checks later."
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
    status: "Not configured yet"
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
