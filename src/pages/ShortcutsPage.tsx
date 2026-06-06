import { shortcutItems } from "../app/phase";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";

export function ShortcutsPage() {
  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Shortcuts</p>
          <h2>Initial shortcut reference</h2>
          <p>
            This list is informational in Phase 0. The global shortcut system is
            not implemented yet.
          </p>
        </div>
        <Badge variant="warning">Reference only</Badge>
      </div>

      <Card title="Shortcut list">
        <div className="shortcut-list">
          {shortcutItems.map((shortcut) => (
            <div className="shortcut-row" key={shortcut.keys}>
              <kbd>{shortcut.keys}</kbd>
              <span>{shortcut.action}</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
