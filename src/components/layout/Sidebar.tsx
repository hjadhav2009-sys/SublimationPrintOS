import { navigationItems } from "../../app/navigation";
import { Button } from "../ui/Button";
import type { RouteId } from "../../types/app";

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
          <p className="brand-subtitle">Production shell</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navigationItems.map((item) => (
          <Button
            aria-current={currentRoute === item.routeId ? "page" : undefined}
            className="nav-button"
            isActive={currentRoute === item.routeId}
            key={item.routeId}
            onClick={() => onNavigate(item.routeId)}
            variant="ghost"
          >
            <span className="nav-label">{item.label}</span>
            <span className="nav-description">{item.description}</span>
          </Button>
        ))}
      </nav>
    </aside>
  );
}
