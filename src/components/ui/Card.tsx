import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  status?: ReactNode;
  title?: string;
}

export function Card({
  children,
  className = "",
  eyebrow,
  status,
  title
}: CardProps) {
  return (
    <article className={`card ${className}`.trim()}>
      {(eyebrow || status || title) && (
        <header className="card-header">
          <div>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? <h2>{title}</h2> : null}
          </div>
          {status ? <div className="card-status">{status}</div> : null}
        </header>
      )}
      <div className="card-body">{children}</div>
    </article>
  );
}
