import { useEffect, useState } from "react";
import {
  commandErrorMessage,
  getDatabaseStatus,
  getStorageStatus,
  initializeFoundation,
  runDatabaseHealthCheck
} from "../app/foundationApi";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import type {
  DatabaseHealthCheck,
  DatabaseHealthCheckItem,
  DatabaseStatus,
  HealthCheckStatus,
  StorageStatus
} from "../types/app";

interface FoundationCheckRow {
  key: string;
  label: string;
  status: HealthCheckStatus;
  message: string;
}

export function HealthCheckPage() {
  const [storageStatus, setStorageStatus] = useState<StorageStatus | null>(null);
  const [databaseStatus, setDatabaseStatus] = useState<DatabaseStatus | null>(
    null
  );
  const [databaseHealth, setDatabaseHealth] =
    useState<DatabaseHealthCheck | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const runFoundationCheck = async () => {
    setIsRunning(true);
    setErrorMessage(null);

    try {
      const [storage, database, health] = await Promise.all([
        getStorageStatus(),
        getDatabaseStatus(),
        runDatabaseHealthCheck()
      ]);
      setStorageStatus(storage);
      setDatabaseStatus(database);
      setDatabaseHealth(health);
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsRunning(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const initializeAndCheck = async () => {
      setIsRunning(true);
      setErrorMessage(null);

      try {
        await initializeFoundation();
        const [storage, database, health] = await Promise.all([
          getStorageStatus(),
          getDatabaseStatus(),
          runDatabaseHealthCheck()
        ]);

        if (isMounted) {
          setStorageStatus(storage);
          setDatabaseStatus(database);
          setDatabaseHealth(health);
        }
      } catch (error: unknown) {
        if (isMounted) {
          setErrorMessage(commandErrorMessage(error));
        }
      } finally {
        if (isMounted) {
          setIsRunning(false);
        }
      }
    };

    void initializeAndCheck();

    return () => {
      isMounted = false;
    };
  }, []);

  const foundationChecks = buildFoundationChecks(storageStatus, databaseStatus);

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Health Check</p>
          <h2>Phase 0 foundation checks</h2>
          <p>
            AppData and SQLite checks are real Phase 0 foundation checks. GPU
            and Real-ESRGAN diagnostics remain placeholders for later prompts.
          </p>
        </div>
        <div className="page-actions">
          <Button disabled={isRunning} onClick={runFoundationCheck} variant="primary">
            {isRunning ? "Running check" : "Run Foundation Check"}
          </Button>
          <Badge
            variant={
              errorMessage
                ? "warning"
                : databaseHealth?.ok && storageStatus?.ok && databaseStatus?.ok
                  ? "success"
                  : "info"
            }
          >
            {errorMessage
              ? "Check warning"
              : databaseHealth?.ok && storageStatus?.ok && databaseStatus?.ok
                ? "Foundation healthy"
                : "Foundation check ready"}
          </Badge>
        </div>
      </div>

      {errorMessage ? (
        <Card title="Backend warning" status={<Badge variant="warning">Needs attention</Badge>}>
          <p>{errorMessage}</p>
        </Card>
      ) : null}

      <Card
        title="Storage and database checks"
        status={<Badge variant="neutral">Local foundation</Badge>}
      >
        <div className="check-list">
          {foundationChecks.map((check) => (
            <CheckRow check={check} key={check.key} />
          ))}
        </div>
      </Card>

      <Card
        title="Database health details"
        status={
          <Badge variant={databaseHealth?.ok ? "success" : "neutral"}>
            {databaseHealth?.message ?? "Not checked yet"}
          </Badge>
        }
      >
        <div className="check-list">
          {databaseHealth ? (
            databaseHealth.checks.map((check) => (
              <CheckRow check={check} key={check.key} />
            ))
          ) : (
            <p>Run the foundation check to inspect SQLite health.</p>
          )}
        </div>
      </Card>

      <Card title="Coming later" status={<Badge variant="warning">Placeholder</Badge>}>
        <div className="check-list">
          <CheckRow
            check={{
              key: "gpu-vulkan-status",
              label: "GPU/Vulkan status",
              status: "warn",
              message: "Coming later; no GPU check runs in this task"
            }}
          />
          <CheckRow
            check={{
              key: "realesrgan-binary-status",
              label: "Real-ESRGAN binary status",
              status: "warn",
              message: "Coming later; no engine discovery runs in this task"
            }}
          />
        </div>
      </Card>
    </section>
  );
}

function buildFoundationChecks(
  storage: StorageStatus | null,
  database: DatabaseStatus | null
): FoundationCheckRow[] {
  return [
    {
      key: "appdata-path-resolved",
      label: "AppData path resolved",
      status: storage?.app_data_dir ? "pass" : "warn",
      message: storage?.app_data_dir ?? "Storage status has not been loaded yet"
    },
    {
      key: "required-folders-exist",
      label: "Required folders exist",
      status:
        storage && storage.missing_folders_count === 0
          ? "pass"
          : storage
            ? "fail"
            : "warn",
      message: storage
        ? `${storage.missing_folders_count} missing required folder(s)`
        : "Storage status has not been loaded yet"
    },
    {
      key: "appdata-writable",
      label: "AppData writable",
      status: storage?.writable ? "pass" : storage ? "fail" : "warn",
      message: storage?.message ?? "Storage status has not been loaded yet"
    },
    {
      key: "sqlite-database-exists",
      label: "SQLite database exists",
      status: database?.database_exists ? "pass" : database ? "fail" : "warn",
      message: database?.database_path ?? "Database status has not been loaded yet"
    },
    {
      key: "sqlite-opens",
      label: "SQLite opens successfully",
      status: database?.can_open ? "pass" : database ? "fail" : "warn",
      message: database?.message ?? "Database status has not been loaded yet"
    },
    {
      key: "wal-mode-enabled",
      label: "WAL mode enabled",
      status: database?.wal_mode ? "pass" : database ? "fail" : "warn",
      message: database?.journal_mode
        ? `Current journal mode: ${database.journal_mode}`
        : "Journal mode has not been loaded yet"
    },
    {
      key: "integrity-check-pass",
      label: "integrity_check pass",
      status:
        database?.integrity_check === "ok"
          ? "pass"
          : database
            ? "fail"
            : "warn",
      message: database?.integrity_check ?? "integrity_check has not run yet"
    },
    {
      key: "schema-version-present",
      label: "Schema version present",
      status: database?.schema_version ? "pass" : database ? "fail" : "warn",
      message: database?.schema_version
        ? `Schema version ${database.schema_version}`
        : "Schema version not available"
    }
  ];
}

function CheckRow({
  check
}: {
  check: FoundationCheckRow | DatabaseHealthCheckItem;
}) {
  return (
    <div className="check-row">
      <div>
        <strong>{check.label}</strong>
        <p className="muted-text">{check.message}</p>
      </div>
      <Badge variant={badgeVariantForStatus(check.status)}>{check.status}</Badge>
    </div>
  );
}

function badgeVariantForStatus(status: HealthCheckStatus) {
  if (status === "pass") {
    return "success";
  }

  if (status === "fail") {
    return "warning";
  }

  return "info";
}
