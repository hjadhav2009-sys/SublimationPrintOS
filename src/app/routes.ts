import type { RouteDefinition, RouteId } from "../types/app";

export const DEFAULT_ROUTE: RouteId = "dashboard";

export const routes: Record<RouteId, RouteDefinition> = {
  dashboard: {
    id: "dashboard",
    path: "/",
    title: "Dashboard"
  },
  settings: {
    id: "settings",
    path: "/settings",
    title: "Settings"
  },
  health: {
    id: "health",
    path: "/health",
    title: "Health Check"
  },
  upscale: {
    id: "upscale",
    path: "/upscale-test",
    title: "Upscale Test"
  },
  logs: {
    id: "logs",
    path: "/logs",
    title: "Logs"
  },
  updates: {
    id: "updates",
    path: "/updates",
    title: "Updates"
  },
  shortcuts: {
    id: "shortcuts",
    path: "/shortcuts",
    title: "Shortcuts"
  }
};

export function getRouteFromHash(hash: string): RouteId {
  const normalizedPath = hash.replace(/^#/, "") || "/";
  const match = Object.values(routes).find((route) => route.path === normalizedPath);
  return match?.id ?? DEFAULT_ROUTE;
}
