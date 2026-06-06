import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";

export function UpdatesPage() {
  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Updates</p>
          <h2>Offline update placeholder</h2>
          <p>
            Phase 0 placeholder only. No update service, cloud dependency, or
            installer workflow is implemented yet.
          </p>
        </div>
        <Badge variant="info">Offline mode</Badge>
      </div>

      <Card title="Update readiness">
        <p>
          This area is reserved for future local update package checks and
          release metadata display.
        </p>
      </Card>
    </section>
  );
}
