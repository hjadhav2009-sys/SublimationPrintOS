import { listen } from "@tauri-apps/api/event";
import { useEffect, useMemo, useState } from "react";
import {
  createRecoverySnapshot,
  initializeRecovery,
  markRecoveryCleanShutdown,
  updateRecoveryHeartbeat
} from "./app/recoveryApi";
import { DEFAULT_ROUTE, getRouteFromHash, routes } from "./app/routes";
import {
  findShortcutForEvent,
  shouldIgnoreShortcut
} from "./app/shortcuts";
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

type PendingPageAction =
  | "run-health-check"
  | "discover-engine"
  | "refresh-recovery-status"
  | null;

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
  const [pendingPageAction, setPendingPageAction] =
    useState<PendingPageAction>(null);
  const [pendingRecoveryMessage, setPendingRecoveryMessage] = useState<
    string | null
  >(null);

  function navigateToRoute(routeId: RouteId) {
    const nextPath = routes[routeId].path;
    if (window.location.hash !== `#${nextPath}`) {
      window.location.hash = nextPath;
    }
    setCurrentRoute(routeId);
  }

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
    if (!pendingPageAction) {
      return;
    }

    if (pendingPageAction === "run-health-check" && currentRoute === "health") {
      window.dispatchEvent(new CustomEvent("spos:run-health-check"));
      setPendingPageAction(null);
      return;
    }

    if (pendingPageAction === "discover-engine" && currentRoute === "upscale") {
      window.dispatchEvent(new CustomEvent("spos:discover-engine"));
      setPendingPageAction(null);
      return;
    }

    if (
      pendingPageAction === "refresh-recovery-status" &&
      currentRoute === "dashboard"
    ) {
      window.dispatchEvent(
        new CustomEvent("spos:refresh-recovery-status", {
          detail: {
            message: pendingRecoveryMessage ?? "Recovery status refreshed"
          }
        })
      );
      setPendingRecoveryMessage(null);
      setPendingPageAction(null);
    }
  }, [pendingPageAction, pendingRecoveryMessage, currentRoute]);

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (shouldIgnoreShortcut(event)) {
        return;
      }

      const shortcut = findShortcutForEvent(event);
      if (!shortcut) {
        return;
      }

      event.preventDefault();
      if (
        shortcut.action === "dashboard" ||
        shortcut.action === "settings" ||
        shortcut.action === "health" ||
        shortcut.action === "logs" ||
        shortcut.action === "upscale" ||
        shortcut.action === "updates" ||
        shortcut.action === "shortcuts"
      ) {
        navigateToRoute(shortcut.action);
        return;
      }

      if (shortcut.action === "create_recovery_snapshot") {
        void createRecoverySnapshot(
          "keyboard_shortcut_snapshot",
          recoveryActiveRoute
        ).catch(() => {
          // Shortcut-created recovery snapshots are best-effort in Phase 0.
        });
        return;
      }

      if (shortcut.action === "refresh_health_check") {
        setPendingPageAction("run-health-check");
        navigateToRoute("health");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    let removeMenuListener: (() => void) | null = null;

    void listen<string>("spos-menu-event", (event) => {
      handleMenuAction(event.payload);
    })
      .then((unlisten) => {
        removeMenuListener = unlisten;
      })
      .catch(() => {
        // Browser preview does not provide Tauri menu events.
      });

    return () => {
      removeMenuListener?.();
    };
  }, []);

  function handleMenuAction(action: string) {
    if (
      action === "dashboard" ||
      action === "settings" ||
      action === "health" ||
      action === "logs"
    ) {
      navigateToRoute(action);
      return;
    }

    if (action === "discover_engine") {
      setPendingPageAction("discover-engine");
      navigateToRoute("upscale");
      return;
    }

    if (action === "run_advanced_health") {
      setPendingPageAction("run-health-check");
      navigateToRoute("health");
      return;
    }

    if (action === "create_recovery_snapshot") {
      void createRecoverySnapshot(
        "menu_recovery_snapshot",
        recoveryActiveRoute
      )
        .then(() => {
          setPendingRecoveryMessage("Recovery snapshot created from menu");
          setPendingPageAction("refresh-recovery-status");
          navigateToRoute("dashboard");
        })
        .catch(() => {
          setPendingRecoveryMessage(
            "Recovery snapshot from menu failed. Check Logs for details."
          );
          setPendingPageAction("refresh-recovery-status");
          navigateToRoute("dashboard");
        });
      return;
    }

    if (action === "about") {
      window.alert("SublimationPrintOS\nPhase 0 Foundation\nOffline local-first desktop app.");
      return;
    }

    if (action === "phase_status") {
      window.alert("Phase 0: Foundation systems only. Production workflows are not implemented yet.");
    }
  }

  const CurrentPage = useMemo(() => pageComponents[currentRoute], [currentRoute]);

  return (
    <AppLayout currentRoute={currentRoute} onNavigate={navigateToRoute}>
      <CurrentPage />
    </AppLayout>
  );
}
