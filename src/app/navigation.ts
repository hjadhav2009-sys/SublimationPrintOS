import type { NavigationItem } from "../types/app";

export const navigationItems: NavigationItem[] = [
  {
    routeId: "dashboard",
    label: "Dashboard",
    description: "Phase 0 overview"
  },
  {
    routeId: "settings",
    label: "Settings",
    description: "Typed placeholders"
  },
  {
    routeId: "health",
    label: "Health Check",
    description: "Check structure"
  },
  {
    routeId: "upscale",
    label: "Upscale Test",
    description: "Engine placeholder"
  },
  {
    routeId: "logs",
    label: "Logs",
    description: "Runtime log shell"
  },
  {
    routeId: "updates",
    label: "Updates",
    description: "Offline update shell"
  },
  {
    routeId: "shortcuts",
    label: "Shortcuts",
    description: "Shortcut reference"
  }
];
