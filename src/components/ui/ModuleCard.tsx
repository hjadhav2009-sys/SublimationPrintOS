import type { ReactNode } from "react";
import { Button } from "./Button";
import { StatusPill, type StatusPillVariant } from "./StatusPill";

interface ModuleCardProps {
  buttonLabel: string;
  children?: ReactNode;
  description: string;
  phase: string;
  status: string;
  statusVariant?: StatusPillVariant;
  title: string;
  onAction: () => void;
}

export function ModuleCard({
  buttonLabel,
  children,
  description,
  phase,
  status,
  statusVariant = "info",
  title,
  onAction
}: ModuleCardProps) {
  return (
    <article className="module-card">
      <header className="module-card-header">
        <div>
          <p className="eyebrow">{phase}</p>
          <h2>{title}</h2>
        </div>
        <StatusPill variant={statusVariant}>{status}</StatusPill>
      </header>
      <p>{description}</p>
      {children ? <div className="module-card-extra">{children}</div> : null}
      <Button onClick={onAction} variant={statusVariant === "ready" ? "primary" : "secondary"}>
        {buttonLabel}
      </Button>
    </article>
  );
}
