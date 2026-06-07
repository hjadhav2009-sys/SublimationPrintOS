import { routes } from "../app/routes";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

const futureFeatures = [
  "Canvas editor",
  "Templates",
  "Text tools",
  "Image editing",
  "Layers",
  "Export to print sheet"
];

export function DesignStudioPage() {
  return (
    <section className="page module-placeholder-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Workspace module</p>
          <h2>Design Studio</h2>
          <p>
            Canva-like editor for print-ready sublimation designs. Coming in
            Phase 2.
          </p>
        </div>
        <Badge variant="warning">Coming Phase 2</Badge>
      </div>

      <Card
        className="placeholder-module-card"
        title="Coming in later phase. Not implemented yet."
        status={<Badge variant="warning">Locked</Badge>}
      >
        <p>
          This page reserves the future editor space without enabling design
          creation, uploads, autosave, or print export behavior in Phase 0.
        </p>
        <div className="feature-chip-list">
          {futureFeatures.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
        <div className="page-actions align-left">
          <Button onClick={goHome} variant="primary">
            Go to Home
          </Button>
        </div>
      </Card>
    </section>
  );
}

function goHome() {
  window.location.hash = routes.dashboard.path;
}
