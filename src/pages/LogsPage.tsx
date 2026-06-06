import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";

export function LogsPage() {
  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Logs</p>
          <h2>Runtime log placeholder</h2>
          <p>
            Phase 0 placeholder only. Log storage and viewing will be added in
            a later local-first task.
          </p>
        </div>
        <Badge variant="neutral">Scaffold only</Badge>
      </div>

      <Card title="Log viewer area">
        <p>No runtime logs are collected or displayed yet.</p>
      </Card>
    </section>
  );
}
