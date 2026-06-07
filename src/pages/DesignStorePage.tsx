import { routes } from "../app/routes";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

const futureFeatures = [
  "Design gallery",
  "SKU/name search",
  "Categories and tags",
  "Approvals",
  "Thumbnails",
  "Version history"
];

export function DesignStorePage() {
  return (
    <section className="page module-placeholder-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Workspace module</p>
          <h2>Design Store</h2>
          <p>Browse, tag, approve, and reuse designs. Coming in Phase 1.</p>
        </div>
        <Badge variant="warning">Coming Phase 1</Badge>
      </div>

      <Card
        className="placeholder-module-card"
        title="Coming in later phase. Not implemented yet."
        status={<Badge variant="warning">Locked</Badge>}
      >
        <p>
          The Design Store is visible in navigation so the production workspace
          has a clear future shape, but no gallery, import, search, approval, or
          asset workflow is active in Phase 0.
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
