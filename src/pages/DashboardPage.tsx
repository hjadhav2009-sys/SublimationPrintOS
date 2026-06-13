import { invoke } from "@tauri-apps/api/core";
import { useEffect, useState } from "react";
import {
  commandErrorMessage,
  initializeFoundation
} from "../app/foundationApi";
import { getDiagnosticsSummary } from "../app/logsApi";
import { routes } from "../app/routes";
import { getRecoveryStatus } from "../app/recoveryApi";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { ModuleCard } from "../components/ui/ModuleCard";
import { StatusPill } from "../components/ui/StatusPill";
import type {
  DiagnosticsSummary,
  FoundationStatus,
  RecoveryStatus,
  RouteId
} from "../types/app";

type BackendStatus = "checking" | "connected" | "not-connected";
type FoundationRunState = "initializing" | "ready" | "warning" | "error";

const readyNowItems = [
  "Local AppData storage",
  "SQLite database",
  "Settings save/reload",
  "Logs and diagnostics",
  "Crash recovery marker",
  "Upscale intake, queue, and local processing foundation",
  "Offline update metadata shell",
  "Alpha 0 QA scripts"
];

const comingNextItems = [
  "Phase 1 Upscale Factory",
  "Phase 1 Design Store",
  "Phase 2 Design Studio",
  "Phase 3 Print Sheet Builder"
];

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
  const [diagnosticsSummary, setDiagnosticsSummary] =
    useState<DiagnosticsSummary | null>(null);
  const [systemMessage, setSystemMessage] = useState<string | null>(null);
  const [systemError, setSystemError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadHomeStatus = async () => {
      try {
        const pingResponse = await invoke<string>("ping_backend");
        if (isMounted) {
          setBackendStatus(
            pingResponse === "pong" ? "connected" : "not-connected"
          );
        }
      } catch {
        if (isMounted) {
          setBackendStatus("not-connected");
        }
      }

      try {
        const status = await initializeFoundation();
        if (isMounted) {
          setFoundationStatus(status);
          setFoundationState(status.ok ? "ready" : "warning");
          setFoundationError(null);
        }
      } catch (error: unknown) {
        if (isMounted) {
          setFoundationStatus(null);
          setFoundationState("error");
          setFoundationError(commandErrorMessage(error));
        }
      }

      try {
        const [recovery, diagnostics] = await Promise.all([
          getRecoveryStatus(),
          getDiagnosticsSummary()
        ]);
        if (isMounted) {
          setRecoveryStatus(recovery);
          setDiagnosticsSummary(diagnostics);
          setSystemError(null);
        }
      } catch (error: unknown) {
        if (isMounted) {
          setSystemError(commandErrorMessage(error));
        }
      }
    };

    void loadHomeStatus();

    return () => {
      isMounted = false;
    };
  }, []);

  const refreshRecoveryStatus = async (messageOverride?: string) => {
    setSystemError(null);
    setSystemMessage(null);

    try {
      const status = await getRecoveryStatus();
      setRecoveryStatus(status);
      setSystemMessage(messageOverride ?? status.message);
    } catch (error: unknown) {
      setSystemError(commandErrorMessage(error));
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

  const foundationReady =
    backendStatus === "connected" &&
    foundationState === "ready" &&
    Boolean(foundationStatus?.storage_ok) &&
    Boolean(foundationStatus?.database_ok);

  const attentionNeeded =
    backendStatus === "not-connected" ||
    foundationState === "warning" ||
    foundationState === "error" ||
    Boolean(recoveryStatus?.previous_unclean_session) ||
    Boolean(
      diagnosticsSummary?.ok && diagnosticsSummary.recent_error_count > 0
    );

  return (
    <section className="page page-home">
      <header className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">Production workspace</p>
          <h2>Welcome to SublimationPrintOS</h2>
          <p>
            Prepare designs, upscale images, build print sheets, and manage
            local production tools.
          </p>
        </div>
        <div className="home-hero-badges" aria-label="Workspace status">
          <Badge variant="info">Phase 0 Alpha</Badge>
          <Badge variant="success">Local-first</Badge>
          <Badge variant="success">Offline</Badge>
          <Badge variant={foundationReady ? "success" : "warning"}>
            {foundationReady ? "Foundation Ready" : "Needs Attention"}
          </Badge>
        </div>
      </header>

      {foundationError ? (
        <div className="notice notice-warning">{foundationError}</div>
      ) : null}
      {systemError ? (
        <div className="notice notice-warning">{systemError}</div>
      ) : null}
      {systemMessage ? (
        <div className="notice notice-success">{systemMessage}</div>
      ) : null}

      <div className="module-card-grid">
        <ModuleCard
          buttonLabel="Open Upscale Factory"
          description="Import local images, queue them, and run local Real-ESRGAN processing when engine is installed."
          phase="Phase 1"
          status="Foundation ready"
          statusVariant="ready"
          title="Open Upscale Factory"
          onAction={() => navigateToRoute("upscale")}
        />
        <ModuleCard
          buttonLabel="View Placeholder"
          description="Browse, tag, approve, and reuse sublimation designs when Phase 1 begins."
          phase="Phase 1"
          status="Coming soon"
          statusVariant="locked"
          title="Open Design Store"
          onAction={() => navigateToRoute("designStore")}
        />
        <ModuleCard
          buttonLabel="View Placeholder"
          description="Open the future print design editor without pretending it is available yet."
          phase="Phase 2"
          status="Coming soon"
          statusVariant="locked"
          title="Open Design Studio"
          onAction={() => navigateToRoute("designStudio")}
        />
        <ModuleCard
          buttonLabel="View Placeholder"
          description="Prepare for order baskets, nesting, mirror, marks, and export workflows."
          phase="Phase 3"
          status="Coming soon"
          statusVariant="locked"
          title="Build Print Sheet"
          onAction={() => navigateToRoute("printSheetBuilder")}
        />
      </div>

      <Card
        className="system-snapshot-card"
        eyebrow="Today"
        status={
          <Badge variant={attentionNeeded ? "warning" : "success"}>
            {attentionNeeded ? "Review system tools" : "Workspace ready"}
          </Badge>
        }
        title="System Snapshot"
      >
        <div className="snapshot-grid">
          <SnapshotItem
            label="AppData"
            status={foundationStatus?.storage_ok ? "Ready" : "Needs check"}
            tone={foundationStatus?.storage_ok ? "ready" : "warning"}
          />
          <SnapshotItem
            label="Database"
            status={foundationStatus?.database_ok ? "Ready" : "Needs check"}
            tone={foundationStatus?.database_ok ? "ready" : "warning"}
          />
          <SnapshotItem
            label="Recovery"
            status={
              recoveryStatus?.previous_unclean_session
                ? "Needs review"
                : recoveryStatus?.current_session
                  ? "Active"
                  : "Not loaded"
            }
            tone={
              recoveryStatus?.previous_unclean_session
                ? "warning"
                : recoveryStatus?.current_session
                  ? "ready"
                  : "info"
            }
          />
          <SnapshotItem
            label="Logs"
            status={
              diagnosticsSummary?.ok
                ? `${diagnosticsSummary.recent_error_count} recent errors`
                : "Not loaded"
            }
            tone={
              diagnosticsSummary?.ok && diagnosticsSummary.recent_error_count > 0
                ? "warning"
                : diagnosticsSummary?.ok
                  ? "ready"
                  : "info"
            }
          />
          <SnapshotItem label="Engine" status="Not checked" tone="info" />
        </div>
        <div className="page-actions align-left">
          <Button onClick={() => navigateToRoute("health")} variant="secondary">
            Open System Health
          </Button>
          <Button onClick={() => navigateToRoute("logs")} variant="secondary">
            Open Logs
          </Button>
          <Button onClick={() => navigateToRoute("settings")} variant="ghost">
            Open Settings
          </Button>
        </div>
      </Card>

      <div className="home-info-grid">
        <Card title="What is ready now?" status={<Badge variant="success">Phase 0</Badge>}>
          <div className="compact-list">
            {readyNowItems.map((item) => (
              <div className="compact-list-row" key={item}>
                <span>{item}</span>
                <StatusPill variant="ready">Ready</StatusPill>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Coming next" status={<Badge variant="warning">Roadmap</Badge>}>
          <div className="compact-list">
            {comingNextItems.map((item) => (
              <div className="compact-list-row" key={item}>
                <span>{item}</span>
                <StatusPill variant="locked">Not implemented</StatusPill>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function SnapshotItem({
  label,
  status,
  tone
}: {
  label: string;
  status: string;
  tone: "ready" | "warning" | "info";
}) {
  return (
    <div className="snapshot-item">
      <span>{label}</span>
      <StatusPill variant={tone}>{status}</StatusPill>
    </div>
  );
}

function navigateToRoute(routeId: RouteId) {
  window.location.hash = routes[routeId].path;
}
