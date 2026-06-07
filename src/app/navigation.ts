import type { NavigationGroup } from "../types/app";

export const navigationGroups: NavigationGroup[] = [
  {
    id: "workspace",
    label: "Workspace",
    items: [
      {
        routeId: "dashboard",
        label: "Home",
        description: "Production overview"
      },
      {
        routeId: "upscale",
        label: "Upscale Factory",
        description: "Engine foundation",
        badge: "Phase 0"
      },
      {
        routeId: "designStore",
        label: "Design Store",
        description: "Browse reusable designs",
        badge: "Phase 1",
        isLocked: true
      },
      {
        routeId: "designStudio",
        label: "Design Studio",
        description: "Create print designs",
        badge: "Phase 2",
        isLocked: true
      },
      {
        routeId: "printSheetBuilder",
        label: "Print Sheet Builder",
        description: "Nest and prepare sheets",
        badge: "Phase 3",
        isLocked: true
      }
    ]
  },
  {
    id: "system",
    label: "System",
    items: [
      {
        routeId: "health",
        label: "System Health",
        description: "Foundation checks"
      },
      {
        routeId: "logs",
        label: "Logs & Diagnostics",
        description: "Local reports"
      },
      {
        routeId: "settings",
        label: "Settings",
        description: "Local preferences"
      },
      {
        routeId: "updates",
        label: "Offline Updates",
        description: "Metadata shell"
      }
    ]
  },
  {
    id: "help",
    label: "Help",
    items: [
      {
        routeId: "shortcuts",
        label: "Shortcuts",
        description: "Keyboard reference"
      },
      {
        routeId: "alphaChecklist",
        label: "Alpha 0 Checklist",
        description: "Review readiness"
      }
    ]
  }
];
