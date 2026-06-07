import type { RouteDefinition, RouteId } from "../types/app";

export const DEFAULT_ROUTE: RouteId = "dashboard";

export const routes: Record<RouteId, RouteDefinition> = {
  dashboard: {
    id: "dashboard",
    path: "/",
    title: "Home"
  },
  designStore: {
    id: "designStore",
    path: "/design-store",
    title: "Design Store"
  },
  designStudio: {
    id: "designStudio",
    path: "/design-studio",
    title: "Design Studio"
  },
  printSheetBuilder: {
    id: "printSheetBuilder",
    path: "/print-sheet-builder",
    title: "Print Sheet Builder"
  },
  settings: {
    id: "settings",
    path: "/settings",
    title: "Settings"
  },
  health: {
    id: "health",
    path: "/health",
    title: "System Health"
  },
  upscale: {
    id: "upscale",
    path: "/upscale-factory",
    title: "Upscale Factory"
  },
  logs: {
    id: "logs",
    path: "/logs",
    title: "Logs & Diagnostics"
  },
  updates: {
    id: "updates",
    path: "/updates",
    title: "Offline Updates"
  },
  shortcuts: {
    id: "shortcuts",
    path: "/shortcuts",
    title: "Keyboard Shortcuts"
  },
  alphaChecklist: {
    id: "alphaChecklist",
    path: "/alpha-0-checklist",
    title: "Alpha 0 Checklist"
  }
};

export function getRouteFromHash(hash: string): RouteId {
  const normalizedPath = hash.replace(/^#/, "") || "/";
  const match = Object.values(routes).find((route) => route.path === normalizedPath);
  return match?.id ?? DEFAULT_ROUTE;
}
