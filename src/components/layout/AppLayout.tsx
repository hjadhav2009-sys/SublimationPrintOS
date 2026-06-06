import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { StatusBar } from "./StatusBar";
import { TopBar } from "./TopBar";
import type { RouteId } from "../../types/app";

interface AppLayoutProps {
  children: ReactNode;
  currentRoute: RouteId;
  onNavigate: (routeId: RouteId) => void;
}

export function AppLayout({
  children,
  currentRoute,
  onNavigate
}: AppLayoutProps) {
  return (
    <div className="app-layout">
      <Sidebar currentRoute={currentRoute} onNavigate={onNavigate} />
      <div className="app-shell">
        <TopBar />
        <main className="app-content">{children}</main>
        <StatusBar />
      </div>
    </div>
  );
}
