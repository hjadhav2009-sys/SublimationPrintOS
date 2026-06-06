import { phaseInfo } from "../../app/phase";
import { Badge } from "../ui/Badge";

export function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-title">
        <p className="eyebrow">SublimationPrintOS</p>
        <h1>Phase 0 Foundation</h1>
      </div>
      <div className="topbar-badges" aria-label="Application status">
        <Badge variant="info">{phaseInfo.mode}</Badge>
        <Badge variant="success">System: Scaffold OK</Badge>
      </div>
    </header>
  );
}
