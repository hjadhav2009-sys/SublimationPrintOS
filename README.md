# SublimationPrintOS

SublimationPrintOS is an offline Windows desktop production operating system for sublimation businesses. The app is local-first and currently exists as a Phase 0 foundation scaffold only.

## Current Phase

Phase 0: Foundation scaffold with local storage, SQLite, and settings persistence.

This repository contains the initial desktop app shell. It does not contain production workflow features yet.

## Implemented In This Scaffold

- Tauri + React + TypeScript + Vite project foundation.
- Dark-mode production-floor UI shell.
- Dashboard-first layout with sidebar navigation.
- Phase 0 placeholder pages for Dashboard, Settings, Health Check, Upscale Test, Logs, Updates, and Shortcuts.
- Typed placeholder data for dashboard cards, settings sections, health checks, and shortcuts.
- AppData folder initialization using the OS data directory.
- SQLite database creation at the local AppData root.
- Foundation schema migrations for metadata, audit logs, settings, file asset records, and background job records.
- Foundation health checks for local storage and SQLite status.
- Local settings persistence in the existing SQLite `settings_store` table.
- Settings validation for company, app, production, upscale, and update defaults.
- Settings save, reload, and reset UI for Phase 0 local preferences.
- Local JSON Lines log files under AppData.
- SQLite audit log integration for foundation diagnostics events.
- Logs page viewer for recent local log and audit entries.
- Safe diagnostic report folder generation under AppData diagnostics.
- Basic Tauri commands:
  - `get_app_version`
  - `get_phase_info`
  - `ping_backend`
- Documentation index for the small practical docs under `docs/`.
- Developer scripts for local web and desktop development.

## Intentionally Not Implemented Yet

- Real-ESRGAN or image processing.
- File upload or image intake.
- Global theme application from the saved theme setting.
- Crash recovery.
- ZIP diagnostics export.
- Open-folder actions for logs or diagnostic reports.
- Design Studio.
- Nesting.
- Export print sheet workflows.
- Hardware, cutter, printer, RIP, or heat press integration.
- Inventory, CRM, shipping, returns/RTO, accounting, salesperson, loyalty, marketplace, or warehouse systems.
- Cloud services, paid APIs, or server runtime dependencies.

## Documentation Source Of Truth

This repo intentionally keeps only minimal practical docs:

- `docs/PRODUCT_BRIEF.md`
- `docs/DEVELOPMENT_WORKFLOW.md`
- `docs/PHASE_PLAN.md`
- `generated/DOC_INDEX.md`

Previous generated documentation packs are not a source of truth for this repository. The current source of truth is the code plus the small product and phase docs above.

## Setup

Prerequisites:

- Node.js 20 or newer.
- Rust toolchain.
- Windows desktop development dependencies required by Tauri.

Install dependencies:

```bash
npm install
```

Run the React shell:

```bash
npm run dev
```

Run the Tauri desktop app:

```bash
npm run tauri:dev
```

## Dev Commands

```bash
npm run dev
npm run typecheck
npm run build
npm run preview
npm run tauri:dev
npm run tauri:build
```

## Build Commands

Web build:

```bash
npm run build
```

Desktop build:

```bash
npm run tauri:build
```

## Basic Coding Standards

- Keep TypeScript strict and avoid `any` unless a later feature has a clear boundary that requires it.
- Keep Phase 0 placeholders explicit; do not make placeholder UI look like completed production features.
- Prefer local-first desktop behavior and avoid cloud/server runtime assumptions.
- Add dependencies only when they are needed for the current phase.
- Keep app UI source under `src/` and Tauri backend source under `src-tauri/`.
- Keep build outputs and caches out of Git.

## Folder Structure

```text
/
|-- README.md
|-- package.json
|-- package-lock.json
|-- tsconfig.json
|-- vite.config.ts
|-- index.html
|-- .gitignore
|-- docs/
|   |-- PRODUCT_BRIEF.md
|   |-- DEVELOPMENT_WORKFLOW.md
|   `-- PHASE_PLAN.md
|-- generated/
|   `-- DOC_INDEX.md
|-- src/
|   |-- app/
|   |-- components/
|   |-- pages/
|   |-- styles/
|   |-- types/
|   |-- App.tsx
|   `-- main.tsx
`-- src-tauri/
    |-- Cargo.toml
    |-- tauri.conf.json
    |-- capabilities/
    `-- src/
```

## Next Development Step

Recommended next task: expand Phase 0 health checks, logs, or crash recovery without building production workflow features.
