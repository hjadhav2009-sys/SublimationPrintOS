import { routes } from "../app/routes";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

const futureFeatures = [
  "Order basket",
  "Quantities",
  "Page size and margins",
  "Auto nesting",
  "Mirroring",
  "PDF/PNG export"
];

export function PrintSheetBuilderPage() {
  return (
    <section className="page module-placeholder-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Workspace module</p>
          <h2>Print Sheet Builder</h2>
          <p>
            Order basket, auto nesting, mirror, marks, and print-ready exports.
            Coming in Phase 3.
          </p>
        </div>
        <Badge variant="warning">Coming Phase 3</Badge>
      </div>

      <Card
        className="placeholder-module-card"
        title="Coming in later phase. Not implemented yet."
        status={<Badge variant="warning">Locked</Badge>}
      >
        <p>
          This placeholder names the print-sheet workflow boundary only. It does
          not create orders, nest artwork, mirror output, or export production
          files.
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
