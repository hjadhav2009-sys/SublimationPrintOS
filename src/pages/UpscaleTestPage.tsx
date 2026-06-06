import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";

export function UpscaleTestPage() {
  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Upscale Test</p>
          <h2>Real-ESRGAN placeholder</h2>
          <p>
            Real-ESRGAN integration will be implemented in a later Phase 0
            task.
          </p>
        </div>
        <Badge variant="warning">No image processing</Badge>
      </div>

      <Card title="Engine test area" status={<Badge variant="neutral">Scaffold only</Badge>}>
        <p>
          This screen is reserved for a future local engine test flow. It does
          not accept files, invoke binaries, or transform images in this
          scaffold.
        </p>
      </Card>
    </section>
  );
}
