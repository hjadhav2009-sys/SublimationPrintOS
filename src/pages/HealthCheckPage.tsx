import { healthCheckItems } from "../app/phase";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";

export function HealthCheckPage() {
  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Health Check</p>
          <h2>Diagnostic structure</h2>
          <p>
            These checks are static Phase 0 placeholders. No Windows, GPU,
            storage, SQLite, or Real-ESRGAN checks are executed yet.
          </p>
        </div>
        <Badge variant="info">Prepared for later checks</Badge>
      </div>

      <Card title="Placeholder checks" status={<Badge variant="neutral">Scaffold only</Badge>}>
        <div className="check-list">
          {healthCheckItems.map((check) => (
            <div className="check-row" key={check.id}>
              <span>{check.label}</span>
              <Badge variant="warning">{check.status}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
