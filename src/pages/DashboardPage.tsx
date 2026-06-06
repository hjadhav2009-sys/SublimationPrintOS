import { invoke } from "@tauri-apps/api/core";
import { useEffect, useState } from "react";
import { dashboardCards, phaseInfo } from "../app/phase";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";

type BackendStatus = "checking" | "connected" | "not-connected";

export function DashboardPage() {
  const [backendStatus, setBackendStatus] = useState<BackendStatus>("checking");

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
          <Badge variant="neutral">{phaseInfo.status}</Badge>
        </div>
      </div>

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
