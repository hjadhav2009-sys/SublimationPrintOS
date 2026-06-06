import { useEffect, useMemo, useState } from "react";
import {
  initializeRecovery,
  markRecoveryCleanShutdown,
  updateRecoveryHeartbeat
} from "./app/recoveryApi";
import { DEFAULT_ROUTE, getRouteFromHash, routes } from "./app/routes";
import { AppLayout } from "./components/layout/AppLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { HealthCheckPage } from "./pages/HealthCheckPage";
import { LogsPage } from "./pages/LogsPage";
import { SettingsPage } from "./pages/SettingsPage";
import { ShortcutsPage } from "./pages/ShortcutsPage";
import { UpdatesPage } from "./pages/UpdatesPage";
import { UpscaleTestPage } from "./pages/UpscaleTestPage";
import type { RouteId } from "./types/app";

const pageComponents: Record<RouteId, () => JSX.Element> = {
  dashboard: DashboardPage,
  settings: SettingsPage,
  health: HealthCheckPage,
  upscale: UpscaleTestPage,
  logs: LogsPage,
  updates: UpdatesPage,
  shortcuts: ShortcutsPage
};

let recoveryActiveRoute: RouteId = DEFAULT_ROUTE;
let recoveryLifecycleStarted = false;
let recoveryHeartbeatId: number | null = null;
let recoveryBeforeUnloadRegistered = false;

const handleRecoveryBeforeUnload = () => {
  void markRecoveryCleanShutdown().catch(() => {
    // Async unload work is best-effort in this Phase 0 foundation.
  });
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RouteId>(() =>
    getRouteFromHash(window.location.hash)
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getRouteFromHash(window.location.hash));
    };

    if (!window.location.hash) {
      window.location.hash = routes[DEFAULT_ROUTE].path;
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    recoveryActiveRoute = currentRoute;
    if (recoveryLifecycleStarted) {
      void updateRecoveryHeartbeat(currentRoute).catch(() => {
        // Phase 0 best-effort heartbeat; UI status is shown on Dashboard.
      });
    }
  }, [currentRoute]);

  useEffect(() => {
    if (!recoveryLifecycleStarted) {
      recoveryLifecycleStarted = true;
      void initializeRecovery(recoveryActiveRoute).catch(() => {
        // Recovery failures should not block the desktop shell rendering.
      });
    }

    if (recoveryHeartbeatId === null) {
      recoveryHeartbeatId = window.setInterval(() => {
        void updateRecoveryHeartbeat(recoveryActiveRoute).catch(() => {
          // Phase 0 best-effort heartbeat; backend status remains queryable.
        });
      }, 60000);
    }

    if (!recoveryBeforeUnloadRegistered) {
      recoveryBeforeUnloadRegistered = true;
      window.addEventListener("beforeunload", handleRecoveryBeforeUnload);
    }

    return () => {
      if (import.meta.env.PROD && recoveryHeartbeatId !== null) {
        window.clearInterval(recoveryHeartbeatId);
        recoveryHeartbeatId = null;
      }
      if (import.meta.env.PROD && recoveryBeforeUnloadRegistered) {
        window.removeEventListener("beforeunload", handleRecoveryBeforeUnload);
        recoveryBeforeUnloadRegistered = false;
      }
      if (import.meta.env.PROD) {
        void markRecoveryCleanShutdown().catch(() => {
          // Component unmount shutdown marker is best-effort.
        });
      }
    };
  }, []);

  const CurrentPage = useMemo(() => pageComponents[currentRoute], [currentRoute]);

  const handleNavigate = (routeId: RouteId) => {
    const nextPath = routes[routeId].path;
    if (window.location.hash !== `#${nextPath}`) {
      window.location.hash = nextPath;
    }
    setCurrentRoute(routeId);
  };

  return (
    <AppLayout currentRoute={currentRoute} onNavigate={handleNavigate}>
      <CurrentPage />
    </AppLayout>
  );
}
