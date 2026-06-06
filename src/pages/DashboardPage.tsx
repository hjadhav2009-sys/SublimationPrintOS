import { invoke } from "@tauri-apps/api/core";
import { useEffect, useState } from "react";
import {
  commandErrorMessage,
  initializeFoundation
} from "../app/foundationApi";
import { dashboardCards } from "../app/phase";
import {
  clearRecoverySnapshots,
  createRecoverySnapshot,
  dismissPreviousRecoveryWarning,
  getRecoveryStatus
} from "../app/recoveryApi";
import { openManagedFolder } from "../app/shellApi";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import type { FoundationStatus, RecoveryStatus } from "../types/app";

type BackendStatus = "checking" | "connected" | "not-connected";
type FoundationRunState = "initializing" | "ready" | "warning" | "error";

export function DashboardPage() {
  const [backendStatus, setBackendStatus] = useState<BackendStatus>("checking");
  const [foundationStatus, setFoundationStatus] =
    useState<FoundationStatus | null>(null);
  const [foundationState, setFoundationState] =
    useState<FoundationRunState>("initializing");
  const [foundationError, setFoundationError] = useState<string | null>(null);
  const [recoveryStatus, setRecoveryStatus] = useState<RecoveryStatus | null>(
    null
  );
  const [recoveryMessage, setRecoveryMessage] = useState<string | null>(null);
  const [recoveryError, setRecoveryError] = useState<string | null>(null);
  const [isRecoveryBusy, setIsRecoveryBusy] = useState(false);

  useEffect(() => {
    let isMounted = true;

    invoke<string>("ping_backend")
      .then((response) => {
        if (isMounted) {
          setBackendStatus(response === "pong" ? "connected" : "not-connected");
        }
      })
      .catch(() => {
        if (isMounted) {
          setBackendStatus("not-connected");
        }
      });

    initializeFoundation()
      .then((status) => {
        if (isMounted) {
          setFoundationStatus(status);
          setFoundationState(status.ok ? "ready" : "warning");
          setFoundationError(null);
        }
      })
      .catch((error: unknown) => {
        if (isMounted) {
          setFoundationStatus(null);
          setFoundationState("error");
          setFoundationError(commandErrorMessage(error));
        }
      });

    getRecoveryStatus()
      .then((status) => {
        if (isMounted) {
          setRecoveryStatus(status);
          setRecoveryMessage(status.message);
          setRecoveryError(null);
        }
      })
      .catch((error: unknown) => {
        if (isMounted) {
          setRecoveryError(commandErrorMessage(error));
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const refreshRecoveryStatus = async (messageOverride?: string) => {
    setIsRecoveryBusy(true);
    setRecoveryError(null);
    setRecoveryMessage(null);

    try {
      const status = await getRecoveryStatus();
      setRecoveryStatus(status);
      setRecoveryMessage(messageOverride ?? status.message);
    } catch (error: unknown) {
      setRecoveryError(commandErrorMessage(error));
    } finally {
      setIsRecoveryBusy(false);
    }
  };

  useEffect(() => {
    const handleRecoveryStatusRefresh = (event: Event) => {
      const message =
        event instanceof CustomEvent &&
        typeof event.detail?.message === "string"
          ? event.detail.message
          : "Recovery status refreshed";

      void refreshRecoveryStatus(message);
    };

    window.addEventListener(
      "spos:refresh-recovery-status",
      handleRecoveryStatusRefresh
    );
    return () => {
      window.removeEventListener(
        "spos:refresh-recovery-status",
        handleRecoveryStatusRefresh
      );
    };
  }, []);

  const handleCreateRecoverySnapshot = async () => {
    setIsRecoveryBusy(true);
    setRecoveryError(null);
    setRecoveryMessage(null);

    try {
      const result = await createRecoverySnapshot(
        "dashboard_manual_snapshot",
        "dashboard"
      );
      setRecoveryStatus(result.status);
      setRecoveryMessage(result.message);
    } catch (error: unknown) {
      setRecoveryError(commandErrorMessage(error));
    } finally {
      setIsRecoveryBusy(false);
    }
  };

  const handleDismissRecoveryWarning = async () => {
    setIsRecoveryBusy(true);
    setRecoveryError(null);
    setRecoveryMessage(null);

    try {
      const status = await dismissPreviousRecoveryWarning();
      setRecoveryStatus(status);
      setRecoveryMessage("Previous unclean session warning dismissed");
    } catch (error: unknown) {
      setRecoveryError(commandErrorMessage(error));
    } finally {
      setIsRecoveryBusy(false);
    }
  };

  const handleClearRecoverySnapshots = async () => {
    const confirmed = window.confirm(
      "Clear local recovery snapshots? This cannot be undone."
    );
    if (!confirmed) {
      return;
    }

    setIsRecoveryBusy(true);
    setRecoveryError(null);
    setRecoveryMessage(null);

    try {
      const status = await clearRecoverySnapshots();
      setRecoveryStatus(status);
      setRecoveryMessage("Recovery snapshots cleared");
    } catch (error: unknown) {
      setRecoveryError(commandErrorMessage(error));
    } finally {
      setIsRecoveryBusy(false);
    }
  };

  const handleOpenRecoveryFolder = async () => {
    setIsRecoveryBusy(true);
    setRecoveryError(null);
    setRecoveryMessage(null);

    try {
      const result = await openManagedFolder("recovery");
      if (result.ok) {
        setRecoveryMessage(result.message);
      } else {
        setRecoveryError(result.message);
      }
    } catch (error: unknown) {
      setRecoveryError(commandErrorMessage(error));
    } finally {
      setIsRecoveryBusy(false);
    }
  };

  const backendLabel =
    backendStatus === "checking"
      ? "Backend: Checking"
      : backendStatus === "connected"
        ? "Backend: Connected"
        : "Backend: Not connected";

  return (
    <section className="page page-dashboard">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Dashboard</p>
          <h2>Phase 0 foundation scaffold</h2>
          <p>
            Local-first desktop foundation for sublimation print production.
            These cards are scaffold only and do not represent completed
            production features.
          </p>
        </div>
        <div className="page-actions">
          <Badge
            variant={
              backendStatus === "connected"
                ? "success"
                : backendStatus === "checking"
                  ? "info"
                  : "warning"
            }
          >
            {backendLabel}
          </Badge>
          <Badge
            variant={
              foundationState === "ready"
                ? "success"
                : foundationState === "initializing"
                  ? "info"
                  : "warning"
            }
          >
            Foundation: {foundationState}
          </Badge>
        </div>
      </div>

      <Card
        eyebrow="Local-first foundation"
        status={
          <Badge
            variant={
              foundationState === "ready"
                ? "success"
                : foundationState === "initializing"
                  ? "info"
                  : "warning"
            }
          >
            {foundationStatus?.message ?? "Initializing foundation"}
          </Badge>
        }
        title="AppData and SQLite status"
      >
        {foundationStatus ? (
          <>
            <div className="summary-grid">
              <div className="summary-item">
                <span>Storage</span>
                <strong>{foundationStatus.storage_ok ? "Ready" : "Warning"}</strong>
              </div>
              <div className="summary-item">
                <span>Database</span>
                <strong>
                  {foundationStatus.database_ok ? "Ready" : "Warning"}
                </strong>
              </div>
              <div className="summary-item">
                <span>Schema version</span>
                <strong>{foundationStatus.schema_version}</strong>
              </div>
              <div className="summary-item">
                <span>Folders</span>
                <strong>
                  {foundationStatus.folders_created} created /{" "}
                  {foundationStatus.folders_existing} existing
                </strong>
              </div>
            </div>
            <div className="kv-list">
              <div className="kv-row">
                <span>AppData path</span>
                <span className="path-value">{foundationStatus.app_data_dir}</span>
              </div>
              <div className="kv-row">
                <span>Database path</span>
                <span className="path-value">
                  {foundationStatus.database_path}
                </span>
              </div>
              <div className="kv-row">
                <span>Missing folders</span>
                <span>{foundationStatus.folders_missing}</span>
              </div>
            </div>
          </>
        ) : (
          <p>
            {foundationState === "initializing"
              ? "Creating AppData folders and preparing app.db."
              : `Foundation initialization failed: ${foundationError ?? "Unknown error"}`}
          </p>
        )}
      </Card>

      <Card
        eyebrow="Phase 0 recovery marker"
        status={
          <Badge
            variant={
              recoveryStatus?.previous_unclean_session
                ? "warning"
                : recoveryStatus?.current_session
                  ? "success"
                  : "info"
            }
          >
            {recoveryStatus?.previous_unclean_session
              ? "Warning"
              : recoveryStatus?.current_session
                ? "Ready"
                : "Not initialized"}
          </Badge>
        }
        title="Crash Recovery"
      >
        {recoveryStatus?.previous_unclean_session ? (
          <div className="notice notice-warning">
            Previous app session did not shut down cleanly. Your production
            files are not restored yet; this is a Phase 0 recovery marker only.
          </div>
        ) : null}
        {recoveryError ? (
          <div className="notice notice-warning">{recoveryError}</div>
        ) : null}
        {recoveryMessage ? (
          <div className="notice notice-success">{recoveryMessage}</div>
        ) : null}

        <div className="summary-grid">
          <div className="summary-item">
            <span>Status</span>
            <strong>
              {recoveryStatus?.previous_unclean_session
                ? "Warning"
                : recoveryStatus?.current_session
                  ? "Ready"
                  : "Not initialized"}
            </strong>
          </div>
          <div className="summary-item">
            <span>Current session</span>
            <strong className="path-value">
              {recoveryStatus?.current_session?.session_id ?? "Not available"}
            </strong>
          </div>
          <div className="summary-item">
            <span>Last heartbeat</span>
            <strong className="path-value">
              {recoveryStatus?.current_session?.last_heartbeat_at ??
                "Not available"}
            </strong>
          </div>
          <div className="summary-item">
            <span>Snapshots</span>
            <strong>{recoveryStatus?.snapshots.length ?? 0}</strong>
          </div>
        </div>

        <div className="kv-list">
          <div className="kv-row">
            <span>Recovery folder</span>
            <span className="path-value">
              {recoveryStatus?.recovery_dir ?? "Not loaded yet"}
            </span>
          </div>
          <div className="kv-row">
            <span>Active route</span>
            <span>
              {recoveryStatus?.current_session?.active_route ?? "Not recorded"}
            </span>
          </div>
        </div>

        <div className="settings-actions">
          <Button
            disabled={isRecoveryBusy}
            onClick={() => void handleCreateRecoverySnapshot()}
            variant="primary"
          >
            Create Recovery Snapshot
          </Button>
          <Button
            disabled={isRecoveryBusy}
            onClick={() => void refreshRecoveryStatus()}
            variant="secondary"
          >
            Refresh Recovery Status
          </Button>
          <Button
            disabled={isRecoveryBusy}
            onClick={() => void handleOpenRecoveryFolder()}
            variant="secondary"
          >
            Open Recovery Folder
          </Button>
          {recoveryStatus?.previous_unclean_session ? (
            <Button
              disabled={isRecoveryBusy}
              onClick={() => void handleDismissRecoveryWarning()}
              variant="secondary"
            >
              Dismiss Warning
            </Button>
          ) : null}
          <Button
            disabled={isRecoveryBusy}
            onClick={() => void handleClearRecoverySnapshots()}
            variant="ghost"
          >
            Clear Snapshots
          </Button>
        </div>
      </Card>

      <div className="card-grid">
        {dashboardCards.map((card) => (
          <Card
            eyebrow="Phase 0 placeholder"
            key={card.id}
            status={<Badge variant="info">{card.status}</Badge>}
            title={card.title}
          >
            <p>{card.summary}</p>
            <p className="muted-text">{card.nextStep}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
