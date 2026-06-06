import type { ReactNode } from "react";

type BadgeVariant = "neutral" | "success" | "warning" | "info";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

export function Badge({ children, variant = "neutral" }: BadgeProps) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}
