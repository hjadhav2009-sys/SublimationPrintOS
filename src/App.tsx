import { useEffect, useMemo, useState } from "react";
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
