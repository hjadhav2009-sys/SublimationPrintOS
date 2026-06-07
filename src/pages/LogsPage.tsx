import { useEffect, useMemo, useState } from "react";
import { commandErrorMessage } from "../app/foundationApi";
import {
  clearLogFiles,
  createDiagnosticReport,
  getDiagnosticsSummary,
  getRecentLogs,
  initializeLogging,
  recordFrontendEvent
} from "../app/logsApi";
import { openManagedFolder } from "../app/shellApi";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import type {
  DiagnosticReportResult,
  DiagnosticsSummary,
  LogLevel,
  OpenFolderKey,
  RecentLogEntry
} from "../types/app";

export function LogsPage() {
  const [summary, setSummary] = useState<DiagnosticsSummary | null>(null);
  const [entries, setEntries] = useState<RecentLogEntry[]>([]);
  const [reportResult, setReportResult] =
    useState<DiagnosticReportResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBusy, setIsBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const missingLogFiles = useMemo(
    () => summary?.log_files.filter((file) => !file.exists).length ?? 0,
    [summary]
  );

  useEffect(() => {
    let isMounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const { loadedSummary, loadedEntries, loadedMessage } =
          await loadLogsAndDiagnostics();
        if (isMounted) {
          setSummary(loadedSummary);
          setEntries(loadedEntries);
          setMessage(loadedMessage);
          setErrorMessage(null);
        }
      } catch (error: unknown) {
        if (isMounted) {
          setErrorMessage(commandErrorMessage(error));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void load();

    return () => {
      isMounted = false;
    };
  }, []);

  async function loadLogsAndDiagnostics() {
    const [loadedSummary, logs] = await Promise.all([
      getDiagnosticsSummary(),
      getRecentLogs(50)
    ]);

    return {
      loadedSummary,
      loadedEntries: logs.entries,
      loadedMessage: logs.message
    };
  }

  async function refreshLogs() {
    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      const { loadedSummary, loadedEntries, loadedMessage } =
        await loadLogsAndDiagnostics();
      setSummary(loadedSummary);
      setEntries(loadedEntries);
      setMessage(loadedMessage);
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
    }
  }

  async function handleInitializeLogging() {
    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      const initializedSummary = await initializeLogging();
      const logs = await getRecentLogs(50);
      setSummary(initializedSummary);
      setEntries(logs.entries);
      setMessage("Logging initialized");
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
    }
  }

  async function handleWriteTestLog() {
    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      const result = await recordFrontendEvent({
        level: "info",
        module: "frontend",
        event: "test_log_from_ui",
        message: "Test log created from Logs page",
        metadata: { source: "LogsPage" }
      });
      const { loadedSummary, loadedEntries } = await loadLogsAndDiagnostics();
      setSummary(loadedSummary);
      setEntries(loadedEntries);
      setMessage(result.message);
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
    }
  }

  async function handleCreateReport() {
    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      const report = await createDiagnosticReport();
      const { loadedSummary, loadedEntries } = await loadLogsAndDiagnostics();
      setReportResult(report);
      setSummary(loadedSummary);
      setEntries(loadedEntries);
      setMessage(report.message);
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
    }
  }

  async function handleClearLogs() {
    const confirmed = window.confirm(
      "Clear local log files? This cannot be undone."
    );
    if (!confirmed) {
      return;
    }

    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);
    setReportResult(null);

    try {
      const clearedSummary = await clearLogFiles();
      const logs = await getRecentLogs(50);
      setSummary(clearedSummary);
      setEntries(logs.entries);
      setMessage("Local log files cleared");
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
    }
  }

  async function handleOpenManagedFolder(key: OpenFolderKey) {
    setIsBusy(true);
    setErrorMessage(null);
    setMessage(null);

    try {
      const result = await openManagedFolder(key);
      if (result.ok) {
        setMessage(result.message);
      } else {
        setErrorMessage(result.message);
      }
    } catch (error: unknown) {
      setErrorMessage(commandErrorMessage(error));
    } finally {
      setIsBusy(false);
    }
  }

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">System</p>
          <h2>Logs & Diagnostics</h2>
          <p>
            Local-only Phase 0 logs. No user images or design files are
            included.
          </p>
        </div>
        <Badge variant={summary?.ok ? "success" : "warning"}>
          {summary?.ok ? "Logging ready" : "Needs initialization"}
        </Badge>
      </div>

      <div className="summary-grid">
        <div className="summary-item">
          <span>Logging status</span>
          <strong>
            {summary?.ok
              ? "Ready"
              : missingLogFiles > 0
                ? `${missingLogFiles} file(s) missing`
                : "Not loaded"}
          </strong>
        </div>
        <div className="summary-item">
          <span>AppData path</span>
          <strong className="path-value">
            {summary?.app_data_dir ?? "Not loaded yet"}
          </strong>
        </div>
        <div className="summary-item">
          <span>Logs directory</span>
          <strong className="path-value">
            {summary?.logs_dir ?? "Not loaded yet"}
          </strong>
        </div>
        <div className="summary-item">
          <span>Diagnostics directory</span>
          <strong className="path-value">
            {summary?.diagnostics_dir ?? "Not loaded yet"}
          </strong>
        </div>
        <div className="summary-item">
          <span>Recent error count</span>
          <strong>{summary?.recent_error_count ?? "Not loaded"}</strong>
        </div>
      </div>

      {errorMessage ? (
        <div className="notice notice-warning">{errorMessage}</div>
      ) : null}
      {message ? <div className="notice notice-success">{message}</div> : null}
      {isLoading ? <div className="notice">Loading local logs...</div> : null}

      <Card eyebrow="Local actions" title="Diagnostics Controls">
        <div className="settings-actions">
          <Button
            disabled={isBusy}
            onClick={() => void handleInitializeLogging()}
            variant="primary"
          >
            Initialize Logging
          </Button>
          <Button
            disabled={isBusy}
            onClick={() => void refreshLogs()}
            variant="secondary"
          >
            Refresh Logs
          </Button>
          <Button
            disabled={isBusy}
            onClick={() => void handleWriteTestLog()}
            variant="secondary"
          >
            Write Test Log
          </Button>
          <Button
            disabled={isBusy}
            onClick={() => void handleCreateReport()}
            variant="secondary"
          >
            Create Diagnostic Report
          </Button>
          <Button
            disabled={isBusy}
            onClick={() => void handleOpenManagedFolder("logs")}
            variant="secondary"
          >
            Open Logs Folder
          </Button>
          <Button
            disabled={isBusy}
            onClick={() => void handleOpenManagedFolder("diagnostics")}
            variant="secondary"
          >
            Open Diagnostics Folder
          </Button>
          <Button
            disabled={isBusy}
            onClick={() => void handleClearLogs()}
            variant="ghost"
          >
            Clear Logs
          </Button>
        </div>
      </Card>

      {reportResult ? (
        <Card
          eyebrow="Safe local report"
          title="Diagnostic Report"
          status={<Badge variant="success">Created</Badge>}
        >
          <div className="kv-list">
            <div className="kv-row">
              <span>Report folder</span>
              <span className="path-value">{reportResult.report_dir}</span>
            </div>
            <div className="kv-row">
              <span>Files written</span>
              <span>{reportResult.files_written.length}</span>
            </div>
          </div>
          <div className="report-file-list">
            {reportResult.files_written.map((fileName) => (
              <span key={fileName}>{fileName}</span>
            ))}
          </div>
          <div className="page-actions align-left">
            <Button
              disabled={isBusy}
              onClick={() =>
                void handleOpenManagedFolder("latest_diagnostic_report")
              }
              variant="secondary"
            >
              Open Latest Report Folder
            </Button>
          </div>
        </Card>
      ) : null}

      <Card eyebrow="Recent local entries" title="Recent Logs">
        {entries.length > 0 ? (
          <div className="logs-table">
            <div className="logs-row logs-row-header">
              <span>Timestamp</span>
              <span>Level</span>
              <span>Module</span>
              <span>Event</span>
              <span>Message</span>
              <span>Source</span>
            </div>
            {entries.map((entry, index) => (
              <div
                className="logs-row"
                key={`${entry.source}-${entry.timestamp}-${entry.event}-${index}`}
              >
                <span className="path-value">{entry.timestamp}</span>
                <span>
                  <Badge variant={levelBadgeVariant(entry.level)}>
                    {entry.level}
                  </Badge>
                </span>
                <span>{entry.module}</span>
                <span>{entry.event}</span>
                <span>{entry.message}</span>
                <span>{entry.source}</span>
              </div>
            ))}
          </div>
        ) : (
          <p>
            No local log entries loaded yet. Initialize logging or write a test
            log to verify the foundation.
          </p>
        )}
      </Card>
    </section>
  );
}

function levelBadgeVariant(level: LogLevel) {
  if (level === "error" || level === "warn") {
    return "warning";
  }

  if (level === "info") {
    return "info";
  }

  return "neutral";
}
