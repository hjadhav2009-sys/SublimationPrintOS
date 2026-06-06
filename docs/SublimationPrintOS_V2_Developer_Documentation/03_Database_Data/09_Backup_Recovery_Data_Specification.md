# SublimationPrintOS — Backup Recovery Data Specification

> **Document ID:** 03_Database_Data-09  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** Backend + DevOps Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines backup files, verification, retention, restore flow, and update/migration backups.

This V2 document is intentionally implementation-specific. It avoids generic wording and describes what the developer, Codex, QA, and product owner should actually build or verify.


## Source-of-Truth Inputs

This document is derived from the project source documents below, not from a generic SaaS template.

| Source | File |
|---|---|
| Functional Requirements | `SublimationPrintOS_Functional_Requirements.md` |
| Non-Functional Requirements | `SublimationPrintOS_Non_Functional_Requirements.md` |
| Phase Roadmap | `SublimationPrintOS_Phase_Roadmap.md` |
| Milestone Plan | `SublimationPrintOS_Milestone_Plan.md` |
| Gantt Chart | `SublimationPrintOS_Gantt_Chart.md` |
| Risk Register | `SublimationPrintOS_Risk_Register.md` |
| User Stories | `SublimationPrintOS_User_Stories.md` |
| Use Cases | `SublimationPrintOS_Use_Case_Diagrams.md` |
| Workflow Diagrams | `SublimationPrintOS_Workflow_Diagrams.md` |
| Master Feature List | `SublimationPrintOS_Master_Feature_List.md` |
| Change Management | `SublimationPrintOS_Change_Management.md` |

When there is conflict, priority order is: Functional Requirements → Non-Functional Requirements → Phase Roadmap → Milestone Plan → Risk Register → Feature Lists → User Stories/Use Cases/Workflows.


## Phase Context

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts. Then Upscale Factory & Design Store, Weeks 5-12: intake, batch upscale, before/after review, quality checks, design gallery, metadata, search, approval workflow.

## Non-Negotiable Product Constraints

- Offline Windows desktop application; no mandatory cloud service for core workflows.
- Local-first storage under `%APPDATA%/SublimationPrintOS`; never write production data into Program Files.
- Pure sublimation production scope only: image intake, AI upscale, QC, design store, design studio, order basket, nesting, export, hardware, color, diagnostics, reports.
- Explicitly excluded: inventory, CRM, RTO/returns, shipping/logistics, GST/accounting, salesperson management, loyalty points, marketplace warehouse features.
- Phase 0 must not pretend later modules are complete; use honest placeholders where a future module is referenced.
- Every feature must have acceptance criteria and tests before it is marked complete.

## Technical Baseline

- **Frontend:** React + TypeScript + Vite, wrapped by Tauri desktop shell.
- **Backend:** Rust/Tauri command layer for privileged local operations; Node helpers allowed only if explicitly justified.
- **Database:** SQLite with WAL mode, migrations, foreign keys, relative file paths, FTS5 search foundation.
- **AI:** Real-ESRGAN ncnn Vulkan as local sidecar binary; GPU auto-detect and CPU fallback.
- **Storage:** `%APPDATA%/SublimationPrintOS` folders for database, settings, assets, jobs, logs, backups, updates, diagnostics.
- **Runtime:** No mandatory network access; optional update checking must not block offline production.

## Concrete Implementation Area


Primary repo areas:

```text
src-tauri/src/db/
src-tauri/src/storage/
src-tauri/src/migrations/
src-tauri/src/settings/
%APPDATA%/SublimationPrintOS/
docs/03_Database_Data/
```

Database work must use migrations, WAL mode, foreign keys, relative file paths, checksums, and backup-before-risky-change behavior.



## Database Rules

- `PRAGMA journal_mode = WAL`.
- `PRAGMA foreign_keys = ON`.
- Migrations run in transactions where possible.
- Before risky migration, create verified backup.
- Store SHA-256 for important files.
- Never store huge binary image content inside SQLite.
- Use relative paths from AppData root.
- Use FTS5 for future searchable fields: name, SKU, tags, category, notes.


## Non-Functional Requirements That Apply

- Cold start target ≤ 5 seconds, maximum ≤ 10 seconds.
- Module switch target ≤ 500ms, maximum ≤ 1 second.
- Design Store first 50 thumbnails target ≤ 1 second.
- Canvas pan/drag target 60 FPS, minimum 30 FPS.
- Nesting 100 rectangular items target ≤ 2 seconds; 500 true-shape items target ≤ 10 seconds.
- All file writes use atomic write-then-rename.
- SQLite uses ACID transactions, WAL mode, foreign keys, and verified backups.
- User-facing errors show friendly message + stable error code + diagnostic action.

## Acceptance Criteria

- [ ] The document has a clear owner and phase: **Phase 0-1**.
- [ ] Every implementation item is tied to a screen, command, table, folder, test, or future module boundary.
- [ ] No excluded business domain is introduced accidentally.
- [ ] No future feature is marked as complete before its phase.
- [ ] QA can convert each acceptance item into a test case without guessing.
- [ ] Installer completes on clean Windows 10/11 VM.
- [ ] App launches from desktop shortcut in ≤ 10 seconds.
- [ ] Settings can be configured and persist across restart.
- [ ] Real-ESRGAN upscales one 1920×1080 image to 4× on GPU in target environment.

## QA Evidence Required

- Screenshot or terminal output proving the item was implemented or documented.
- Test cases added or updated in the relevant QA document.
- Error/failure behavior documented, not only happy path.
- If the item affects Phase 0, verify clean Windows install/launch assumptions are not broken.
- If the item touches local data, verify AppData path safety and no user design files are leaked into diagnostics.


## Codex Implementation Rules for This Document

When Codex works on **Backup Recovery Data Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0-1** unless a future-phase interface is explicitly marked as placeholder.
3. Do not create fake completed features. Use honest labels like `Phase 0 placeholder` or `Not implemented yet`.
4. Produce a final summary with: files changed, commands run, errors, tests, and next recommended task.
5. If a requirement needs new scope, create a TODO or change request instead of silently expanding the product.


## Out of Scope for This Document

- Full ecommerce/warehouse/marketplace workflows.
- Inventory, CRM, returns, shipping/logistics, accounting, salesperson, loyalty.
- Future-phase production features unless explicitly described as an interface boundary.
- Any cloud-only dependency for core production work.

## Review Questions for Head Developer

1. Is the folder/file boundary correct for the current repo?
2. Are the acceptance criteria testable without guessing?
3. Does this document prevent Codex from overbuilding?
4. Does it preserve the phase roadmap and avoid scope creep?
5. Is any requirement missing a clear owner or verification method?
