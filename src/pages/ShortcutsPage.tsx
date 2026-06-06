import { useState } from "react";
import { commandErrorMessage } from "../app/foundationApi";
import { createRecoverySnapshot } from "../app/recoveryApi";
import { shortcutDefinitions, shortcutKeysLabel } from "../app/shortcuts";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

export function ShortcutsPage() {
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isBusy, setIsBusy] = useState(false);

  const handleCreateSnapshot = async () => {
    setIsBusy(true);
    setMessage(null);
    setErrorMessage(null);

    try {
      const result = await createRecoverySnapshot(
        "shortcuts_page_test_snapshot",
        "shortcuts"
      );
      setMessage(result.message);
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
    }
  };

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Shortcuts</p>
          <h2>Keyboard shortcuts framework</h2>
          <p>
            Phase 0 app-window shortcuts are enabled. Shortcut customization
            will come later.
          </p>
        </div>
        <Badge variant="success">Enabled</Badge>
      </div>

      {errorMessage ? (
        <div className="notice notice-warning">{errorMessage}</div>
      ) : null}
      {message ? <div className="notice notice-success">{message}</div> : null}

      <Card
        title="Shortcut actions"
        status={<Badge variant="info">Phase 0</Badge>}
      >
        <div className="shortcut-list">
          {shortcutDefinitions.map((shortcut) => (
            <div className="shortcut-row" key={shortcut.id}>
              <kbd>{shortcutKeysLabel(shortcut)}</kbd>
              <div>
                <strong>{shortcut.label}</strong>
                <p className="muted-text">{shortcut.description}</p>
              </div>
              <Badge variant="success">Enabled</Badge>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Shortcut test">
        <p>
          Shortcuts are ignored while typing in inputs, textareas, selects, or
          editable text areas.
        </p>
        <div className="page-actions align-left">
          <Button
            disabled={isBusy}
            onClick={() => void handleCreateSnapshot()}
            variant="secondary"
          >
            Create test recovery snapshot
          </Button>
        </div>
      </Card>
    </section>
  );
}
