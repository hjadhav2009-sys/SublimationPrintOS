import { useEffect, useState } from "react";
import {
  commandErrorMessage,
  getDatabaseStatus,
  getRequiredAppFolders,
  getStorageStatus
} from "../app/foundationApi";
import { settingsSections } from "../app/phase";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import type {
  AppFolderDescriptor,
  DatabaseStatus,
  StorageStatus
} from "../types/app";

export function SettingsPage() {
  const [storageStatus, setStorageStatus] = useState<StorageStatus | null>(null);
  const [databaseStatus, setDatabaseStatus] = useState<DatabaseStatus | null>(
    null
  );
  const [requiredFolders, setRequiredFolders] = useState<AppFolderDescriptor[]>(
    []
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    Promise.all([getStorageStatus(), getDatabaseStatus(), getRequiredAppFolders()])
      .then(([storage, database, folders]) => {
        if (isMounted) {
          setStorageStatus(storage);
          setDatabaseStatus(database);
          setRequiredFolders(folders);
          setErrorMessage(null);
        }
      })
      .catch((error: unknown) => {
        if (isMounted) {
          setErrorMessage(commandErrorMessage(error));
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

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

      <Card
        eyebrow="Read-only foundation"
        title="Local Storage"
        status={
          <Badge
            variant={
              storageStatus?.ok && databaseStatus?.ok
                ? "success"
                : errorMessage
                  ? "warning"
                  : "info"
            }
          >
            {storageStatus?.ok && databaseStatus?.ok
              ? "Ready"
              : errorMessage
                ? "Needs attention"
                : "Status loading"}
          </Badge>
        }
      >
        {errorMessage ? <p>{errorMessage}</p> : null}
        <div className="kv-list">
          <div className="kv-row">
            <span>AppData path</span>
            <span className="path-value">
              {storageStatus?.app_data_dir ?? "Not loaded yet"}
            </span>
          </div>
          <div className="kv-row">
            <span>Database path</span>
            <span className="path-value">
              {databaseStatus?.database_path ?? "Not loaded yet"}
            </span>
          </div>
          <div className="kv-row">
            <span>Schema version</span>
            <span>{databaseStatus?.schema_version ?? "Not available"}</span>
          </div>
          <div className="kv-row">
            <span>Required folders</span>
            <span>{requiredFolders.length || "Not loaded yet"}</span>
          </div>
        </div>
        <div className="page-actions align-left">
          <Button disabled variant="secondary">
            Open folder coming later
          </Button>
        </div>
      </Card>

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
