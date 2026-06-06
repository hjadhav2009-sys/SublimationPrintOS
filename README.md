# SublimationPrintOS

SublimationPrintOS is a local-first Windows desktop production operating system for sublimation businesses. It is planned to support image intake, AI upscaling, design store workflows, order baskets, nesting, print sheet export, hardware integration, color management, diagnostics, and reports in later phases.

## Current Phase

Phase 0: Foundation scaffold.

This repository currently contains the initial desktop application foundation only. It does not contain production workflow features yet.

## Implemented In This Scaffold

- Tauri + React + TypeScript + Vite project foundation.
- Dark-mode production-floor UI shell.
- Dashboard-first app layout with sidebar navigation.
- Phase 0 placeholder pages for Dashboard, Settings, Health Check, Upscale Test, Logs, Updates, and Shortcuts.
- Typed placeholder data for settings, health checks, dashboard cards, and shortcuts.
- Basic Tauri commands:
  - `get_app_version`
  - `get_phase_info`
  - `ping_backend`
- Documentation index generated from markdown files under `docs/`.
- Developer scripts for local web and desktop development.

## Intentionally Not Implemented Yet

- SQLite database and migrations.
- AppData storage setup.
- Real-ESRGAN or any image processing.
- File upload or image intake.
- Design Studio.
- Nesting.
- Hardware, cutter, printer, RIP, or heat press integration.
- Marketplace, inventory, CRM, returns, shipping, accounting, salesperson, loyalty, or warehouse features.
- Cloud services, paid APIs, or server runtime dependencies.

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

## Basic Coding Standards

- Keep TypeScript strict and avoid `any` unless a later feature has a clear boundary that requires it.
- Keep Phase 0 placeholders explicit; do not make placeholder UI look like completed production features.
- Prefer local-first desktop behavior and avoid cloud/server runtime assumptions.
- Add dependencies only when they are needed for the current phase.
- Keep app UI source under `src/` and Tauri backend source under `src-tauri/`.

## Build Commands

Web build:

```bash
npm run build
```

Desktop build:

```bash
npm run tauri:build
```

## Folder Structure

```text
/
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
├── .gitignore
├── docs/
├── generated/
│   └── DOC_INDEX.md
├── src/
│   ├── app/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
└── src-tauri/
    ├── Cargo.toml
    ├── tauri.conf.json
    ├── capabilities/
    └── src/
```

## Documentation

Existing markdown documentation is stored under `docs/`.

The generated documentation index is available at `generated/DOC_INDEX.md`.

## Next Development Step

Recommended next Phase 0 task: add local Windows AppData storage setup and the first SQLite foundation pass without building production features.
