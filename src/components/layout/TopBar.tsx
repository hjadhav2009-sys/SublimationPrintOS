import { phaseInfo } from "../../app/phase";
import { routes } from "../../app/routes";
import type { RouteId } from "../../types/app";
import { Badge } from "../ui/Badge";

interface TopBarProps {
  currentRoute: RouteId;
}

export function TopBar({ currentRoute }: TopBarProps) {
  const pageTitle = routes[currentRoute].title;

  return (
    <header className="topbar">
      <div className="topbar-title">
        <p className="eyebrow">SublimationPrintOS</p>
        <h1>{pageTitle}</h1>
      </div>
      <div className="topbar-badges" aria-label="Application status">
        <Badge variant="info">Phase 0 Alpha</Badge>
        <Badge variant="success">{phaseInfo.mode}</Badge>
        <span className="quick-status-dot" aria-label="Local systems available" />
      </div>
    </header>
  );
}
