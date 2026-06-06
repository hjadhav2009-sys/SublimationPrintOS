import { useEffect, useState } from "react";
import {
  commandErrorMessage,
  getDatabaseStatus,
  getStorageStatus,
  initializeFoundation,
  runDatabaseHealthCheck
} from "../app/foundationApi";
import { runAdvancedHealthCheck } from "../app/healthApi";
import { getRecoveryStatus } from "../app/recoveryApi";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import type {
  DatabaseHealthCheck,
  DatabaseHealthCheckItem,
  DatabaseStatus,
  AdvancedHealthCheckItem,
  AdvancedHealthReport,
  HealthCheckStatus,
  RecoveryStatus,
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
  const [recoveryStatus, setRecoveryStatus] = useState<RecoveryStatus | null>(
    null
  );
  const [advancedReport, setAdvancedReport] =
    useState<AdvancedHealthReport | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const runFoundationCheck = async () => {
    setIsRunning(true);
    setErrorMessage(null);

    try {
      const [storage, database, health, recovery] = await Promise.all([
        getStorageStatus(),
        getDatabaseStatus(),
        runDatabaseHealthCheck(),
        getRecoveryStatus()
      ]);
      setStorageStatus(storage);
      setDatabaseStatus(database);
      setDatabaseHealth(health);
      setRecoveryStatus(recovery);
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsRunning(false);
    }
  };

  const runAdvancedCheck = async () => {
    setIsRunning(true);
    setErrorMessage(null);

    try {
      const report = await runAdvancedHealthCheck();
      setAdvancedReport(report);
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
        const [storage, database, health, recovery] = await Promise.all([
          getStorageStatus(),
          getDatabaseStatus(),
          runDatabaseHealthCheck(),
          getRecoveryStatus()
        ]);

        if (isMounted) {
          setStorageStatus(storage);
          setDatabaseStatus(database);
          setDatabaseHealth(health);
          setRecoveryStatus(recovery);
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

    const handleRunHealthCheck = () => {
      void runAdvancedCheck();
    };

    window.addEventListener("spos:run-health-check", handleRunHealthCheck);

    return () => {
      isMounted = false;
      window.removeEventListener("spos:run-health-check", handleRunHealthCheck);
    };
  }, []);

  const foundationChecks = buildFoundationChecks(storageStatus, databaseStatus);
  const recoveryChecks = buildRecoveryChecks(recoveryStatus);

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
          <Button disabled={isRunning} onClick={() => void runAdvancedCheck()} variant="secondary">
            Run Advanced Health Check
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

      <Card
        title="Crash recovery checks"
        status={
          <Badge
            variant={
              recoveryStatus?.previous_unclean_session
                ? "warning"
                : recoveryStatus?.current_session
                  ? "success"
                  : "neutral"
            }
          >
            {recoveryStatus?.message ?? "Not checked yet"}
          </Badge>
        }
      >
        <div className="check-list">
          {recoveryChecks.map((check) => (
            <CheckRow check={check} key={check.key} />
          ))}
        </div>
      </Card>

      <Card
        title="Advanced Health Report"
        status={
          <Badge variant={advancedReport?.ok ? "success" : advancedReport ? "warning" : "neutral"}>
            {advancedReport?.message ?? "Not run yet"}
          </Badge>
        }
      >
        {advancedReport ? (
          <>
            <div className="summary-grid">
              <div className="summary-item">
                <span>Pass</span>
                <strong>{advancedReport.summary.pass}</strong>
              </div>
              <div className="summary-item">
                <span>Warn</span>
                <strong>{advancedReport.summary.warn}</strong>
              </div>
              <div className="summary-item">
                <span>Fail</span>
                <strong>{advancedReport.summary.fail}</strong>
              </div>
              <div className="summary-item">
                <span>Generated</span>
                <strong className="path-value">{advancedReport.generated_at}</strong>
              </div>
            </div>
            <div className="health-category-grid">
              {healthCategories(advancedReport.checks).map((category) => (
                <div className="health-category" key={category}>
                  <h3>{category}</h3>
                  <div className="check-list">
                    {advancedReport.checks
                      .filter((check) => check.category === category)
                      .map((check) => (
                        <AdvancedCheckRow check={check} key={check.key} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Run the advanced health check to inspect system, storage, database, logs, recovery, engine, and security foundation checks.</p>
        )}
      </Card>

      <Card title="Coming later" status={<Badge variant="warning">Placeholder</Badge>}>
        <div className="check-list">
          <CheckRow
            check={{
              key: "gpu-vulkan-status",
              label: "GPU/Vulkan status",
              status: "warn",
              message: "Coming later; no GPU benchmark or hardware capability test runs in this task"
            }}
          />
        </div>
      </Card>
    </section>
  );
}

function healthCategories(checks: AdvancedHealthCheckItem[]): string[] {
  return Array.from(new Set(checks.map((check) => check.category)));
}

function AdvancedCheckRow({ check }: { check: AdvancedHealthCheckItem }) {
  return (
    <div className="check-row">
      <div>
        <strong>{check.label}</strong>
        <p className="muted-text">{check.message}</p>
        {check.details ? <p className="muted-text">{check.details}</p> : null}
      </div>
      <Badge variant={badgeVariantForStatus(check.status)}>{check.status}</Badge>
    </div>
  );
}

function buildRecoveryChecks(
  recovery: RecoveryStatus | null
): FoundationCheckRow[] {
  return [
    {
      key: "recovery-directory-exists",
      label: "Recovery directory exists",
      status: recovery?.recovery_dir ? "pass" : "warn",
      message: recovery?.recovery_dir ?? "Recovery status has not been loaded yet"
    },
    {
      key: "current-session-exists",
      label: "current-session.json exists",
      status: recovery?.current_session ? "pass" : recovery ? "warn" : "warn",
      message: recovery?.current_session
        ? `Session ${recovery.current_session.session_id}`
        : "Recovery session has not been initialized yet"
    },
    {
      key: "recovery-snapshot-count",
      label: "Snapshots count",
      status: recovery ? "pass" : "warn",
      message: recovery
        ? `${recovery.snapshots.length} recovery snapshot(s) indexed`
        : "Recovery status has not been loaded yet"
    },
    {
      key: "previous-unclean-session",
      label: "Previous unclean session",
      status: recovery?.previous_unclean_session ? "warn" : recovery ? "pass" : "warn",
      message: recovery?.previous_unclean_session
        ? "Previous app session did not shut down cleanly"
        : recovery
          ? "No previous unclean session warning"
          : "Recovery status has not been loaded yet"
    }
  ];
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
