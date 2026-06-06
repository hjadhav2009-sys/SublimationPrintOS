import { invoke } from "@tauri-apps/api/core";
import { useEffect, useState } from "react";
import {
  commandErrorMessage,
  initializeFoundation
} from "../app/foundationApi";
import { dashboardCards } from "../app/phase";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import type { FoundationStatus } from "../types/app";

type BackendStatus = "checking" | "connected" | "not-connected";
type FoundationRunState = "initializing" | "ready" | "warning" | "error";

export function DashboardPage() {
  const [backendStatus, setBackendStatus] = useState<BackendStatus>("checking");
  const [foundationStatus, setFoundationStatus] =
    useState<FoundationStatus | null>(null);
  const [foundationState, setFoundationState] =
    useState<FoundationRunState>("initializing");
  const [foundationError, setFoundationError] = useState<string | null>(null);

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

    return () => {
      isMounted = false;
    };
  }, []);

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
