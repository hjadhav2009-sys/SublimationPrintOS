import { navigationGroups } from "../../app/navigation";
import type { RouteId } from "../../types/app";
import { SidebarGroup } from "./SidebarGroup";

interface SidebarProps {
  currentRoute: RouteId;
  onNavigate: (routeId: RouteId) => void;
}

export function Sidebar({ currentRoute, onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Main navigation">
      <div className="sidebar-brand">
        <div className="brand-mark" aria-hidden="true">
          SP
        </div>
        <div>
          <p className="brand-title">SublimationPrintOS</p>
          <p className="brand-subtitle">Production workspace</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navigationGroups.map((group) => (
          <SidebarGroup
            currentRoute={currentRoute}
            group={group}
            key={group.id}
            onNavigate={onNavigate}
          />
        ))}
      </nav>
    </aside>
  );
}
