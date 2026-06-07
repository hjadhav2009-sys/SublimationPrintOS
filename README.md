# SublimationPrintOS

SublimationPrintOS is an offline Windows desktop production operating system for sublimation businesses. The app is local-first and currently exists as a Phase 0 foundation scaffold only.

## Current Phase

Phase 0: Foundation scaffold with local storage, SQLite, settings persistence, logs, diagnostics, crash recovery markers, controlled folder actions, and an offline update shell.

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
- Crash recovery session marker under AppData.
- Heartbeat tracking for the active app route.
- Previous unclean shutdown detection.
- Safe recovery snapshot files under AppData recovery jobs.
- Real-ESRGAN ncnn Vulkan local discovery and expected layout checks.
- Fixed safe Real-ESRGAN test-run foundation using only AppData engine paths.
- Advanced health report covering system, storage, database, settings, logs, diagnostics, recovery, updates, engine, and security checks.
- App-window keyboard shortcut framework.
- Native app menu foundation and best-effort close/shutdown handling.
- Managed folder opening for allowlisted AppData folders only.
- Offline update shell for local folder-based update package inspection.
- Update manifest validation for `updates/downloaded/*/update-manifest.json`.
- Update metadata staging that copies only manifest, optional README, and stage info.
- Advanced health checks for local update folders and shell-only update safety.
- Local packaging preflight for Phase 0 source and ignore-rule checks.
- Build artifact inspection scripts for local Tauri outputs.
- Alpha 0 checklist, release notes template, and packaging notes.
- Phase 0 QA script for repeatable local readiness checks.
- Alpha 0 release readiness docs.
- Manual smoke test checklist.
- Known issues list for Alpha 0 review.
- Basic Tauri commands:
  - `get_app_version`
  - `get_phase_info`
  - `ping_backend`
- Documentation index for the small practical docs under `docs/`.
- Developer scripts for local web and desktop development.

## Intentionally Not Implemented Yet

- Real-ESRGAN production image processing.
- Full Upscale Factory.
- File upload or image intake.
- Global theme application from the saved theme setting.
- Full Design Studio autosave.
- Production job restore.
- Binary asset recovery.
- Guaranteed close interception beyond Phase 0 best-effort frontend shutdown marking.
- ZIP diagnostics export.
- System tray.
- Global OS-level shortcuts.
- Full native close interception beyond Phase 0 best-effort shutdown marking.
- Full installer.
- Signed installer.
- GitHub release publishing.
- Public release publishing.
- Online updater.
- Auto-download of updates.
- Update installation or apply flow.
- Real release channel.
- ZIP extraction for update packages.
- App binary replacement.
- Production workflow modules.
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
npm run phase0:preflight
npm run phase0:check
npm run phase0:package
npm run phase0:inspect
npm run phase0:qa
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

## Phase 0 Local Packaging

Packaging checks are local-only and do not publish releases, sign installers, enable an online updater, or upload artifacts.

```bash
npm run phase0:preflight
npm run phase0:check
npm run phase0:package
npm run phase0:inspect
```

`phase0:package` runs a local Tauri build when packaging dependencies are available. AppData is created at runtime and is not bundled. Do not commit installer files, `dist/`, `node_modules/`, `src-tauri/target/`, `app.db`, Real-ESRGAN binaries, or test images.

## Alpha 0 QA

Alpha 0 is a local developer build only. It is not a public production release.

```bash
npm run phase0:qa
npm run phase0:preflight
npm run phase0:check
npm run phase0:inspect
npm run tauri:dev
npm run phase0:package
```

Before reviewing the repository in GitHub Code tab, set the default branch to `main`:

`GitHub Settings -> Branches -> Default branch -> main`

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
|-- release/
|   |-- ALPHA0_BUILD_CHECKLIST.md
|   |-- ALPHA0_MANUAL_SMOKE_TEST.md
|   |-- ALPHA0_RELEASE_READINESS.md
|   |-- KNOWN_ISSUES_ALPHA0.md
|   |-- PACKAGING_NOTES.md
|   `-- RELEASE_NOTES_TEMPLATE.md
|-- scripts/
|   |-- inspect-build-artifacts.mjs
|   |-- phase0-qa.mjs
|   `-- phase0-preflight.mjs
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

Recommended next task: plan the Phase 0 installer/release packaging boundary without adding automatic update installation.
