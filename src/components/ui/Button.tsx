import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  isActive?: boolean;
}

export function Button({
  children,
  variant = "secondary",
  isActive = false,
  className = "",
  ...props
}: ButtonProps) {
  const activeClass = isActive ? "button-active" : "";

  return (
    <button
      className={`button button-${variant} ${activeClass} ${className}`.trim()}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
