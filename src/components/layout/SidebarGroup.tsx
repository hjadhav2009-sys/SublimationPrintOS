import type { NavigationGroup, RouteId } from "../../types/app";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

interface SidebarGroupProps {
  currentRoute: RouteId;
  group: NavigationGroup;
  onNavigate: (routeId: RouteId) => void;
}

export function SidebarGroup({
  currentRoute,
  group,
  onNavigate
}: SidebarGroupProps) {
  return (
    <section className="sidebar-group" aria-label={group.label}>
      <h2>{group.label}</h2>
      <div className="sidebar-group-items">
        {group.items.map((item) => (
          <Button
            aria-current={currentRoute === item.routeId ? "page" : undefined}
            className="nav-button"
            isActive={currentRoute === item.routeId}
            key={item.routeId}
            onClick={() => onNavigate(item.routeId)}
            variant="ghost"
          >
            <span className="nav-button-top">
              <span className="nav-label">{item.label}</span>
              {item.badge ? (
                <Badge variant={item.isLocked ? "warning" : "info"}>
                  {item.badge}
                </Badge>
              ) : null}
            </span>
            <span className="nav-description">{item.description}</span>
          </Button>
        ))}
      </div>
    </section>
  );
}
