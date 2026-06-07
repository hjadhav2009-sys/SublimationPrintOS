import type { ReactNode } from "react";

export type StatusPillVariant = "ready" | "warning" | "info" | "locked";

interface StatusPillProps {
  children: ReactNode;
  variant?: StatusPillVariant;
}

export function StatusPill({
  children,
  variant = "info"
}: StatusPillProps) {
  return <span className={`status-pill status-pill-${variant}`}>{children}</span>;
}
