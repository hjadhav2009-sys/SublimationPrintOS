import { settingsSections } from "../app/phase";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";

export function SettingsPage() {
  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Settings</p>
          <h2>Typed placeholder settings</h2>
          <p>
            Phase 0 placeholder data is prepared here. These sections are not
            editable or persisted yet.
          </p>
        </div>
        <Badge variant="warning">Not functional yet</Badge>
      </div>

      <div className="settings-grid">
        {settingsSections.map((section) => (
          <Card
            eyebrow="Phase 0 placeholder"
            key={section.id}
            title={section.title}
          >
            <div className="field-list">
              {section.fields.map((field) => (
                <div className="field-row" key={field}>
                  <span>{field}</span>
                  <span>Not configured yet</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
