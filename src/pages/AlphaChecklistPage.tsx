import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";

const checklistItems = [
  "Run npm run phase0:qa",
  "Run npm run tauri:dev for a local desktop smoke test",
  "Confirm Home, Workspace, System, and Help navigation",
  "Confirm Settings save/reload still works",
  "Confirm System Health and Logs & Diagnostics still work",
  "Confirm Updates remains metadata-only",
  "Confirm no production module is marked complete"
];

const releaseDocs = [
  "release/ALPHA0_BUILD_CHECKLIST.md",
  "release/ALPHA0_RELEASE_READINESS.md",
  "release/ALPHA0_MANUAL_SMOKE_TEST.md",
  "release/KNOWN_ISSUES_ALPHA0.md"
];

export function AlphaChecklistPage() {
  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Help</p>
          <h2>Alpha 0 Checklist</h2>
          <p>
            Local review guide for Phase 0 readiness. This does not publish a
            release or create installer artifacts.
          </p>
        </div>
        <Badge variant="info">Local review</Badge>
      </div>

      <Card title="Review Checklist" status={<Badge variant="success">Ready</Badge>}>
        <div className="compact-list">
          {checklistItems.map((item) => (
            <div className="compact-list-row" key={item}>
              <span>{item}</span>
              <Badge variant="info">Manual</Badge>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Release Readiness Docs" status={<Badge variant="neutral">Static</Badge>}>
        <p>
          Use these repository files for the detailed Alpha 0 local review. They
          are source-controlled docs, not runtime-generated release output.
        </p>
        <div className="feature-chip-list">
          {releaseDocs.map((doc) => (
            <span key={doc}>{doc}</span>
          ))}
        </div>
      </Card>
    </section>
  );
}
