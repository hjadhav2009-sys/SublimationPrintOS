# SublimationPrintOS — Hardware Acceptance Test Plan

> **Document ID:** 04_Hardware_Integration-14  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 3-4  
> **Owner:** QA + Hardware Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines minimum tests before hardware integration can be considered production ready.

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

Order Basket & Print Sheet Builder / early hardware: production cart, nesting, manual layout, marks, mirroring, printer/cutter foundations. Then Export System & Color Management: multi-format export, ICC profiles, soft proofing, PDF/X readiness.

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


Primary future repo areas:

```text
src-tauri/src/hardware/
src-tauri/src/print_queue/
src-tauri/src/cutter/
src-tauri/src/color/
src/pages/HardwareHubPage.tsx
src/pages/PrintQueuePage.tsx
```

Hardware docs are design contracts for Phase 3-4. They must not force Phase 0 implementation.



## Hardware Integration Contract

Hardware integration is Phase 3-4. It must be designed now, but not forced into Phase 0.

### Required Hardware Areas

- Printer discovery/status
- RIP hot folder integration
- direct print optional adapter
- cutter contour export SVG/DXF
- Summa/Graphtec/Zünd vendor adapters later
- heat press timer alarms
- retry on hot-folder failure
- device diagnostics

### Device Status States

```text
UNKNOWN
DISCOVERED
ONLINE
OFFLINE
BUSY
ERROR
NEEDS_ATTENTION
DISABLED
```

### Queue Status States

```text
DRAFT → READY → SENT_TO_RIP_OR_DEVICE → IN_PROGRESS → COMPLETED
                         ↓                    ↓
                      RETRYING              FAILED
                         ↓                    ↓
                     CANCELLED             NEEDS_OPERATOR
```

### Safety Rules

- Failed hot folder writes must not lose jobs.
- Cutter output must be linked to the exact print sheet/page/job.
- Press timer is an operator aid, not an unattended safety controller.
- Color profiles must be explicitly selected or inherited from validated defaults.


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

- [ ] The document has a clear owner and phase: **Phase 3-4**.
- [ ] Every implementation item is tied to a screen, command, table, folder, test, or future module boundary.
- [ ] No excluded business domain is introduced accidentally.
- [ ] No future feature is marked as complete before its phase.
- [ ] QA can convert each acceptance item into a test case without guessing.

## QA Evidence Required

- Screenshot or terminal output proving the item was implemented or documented.
- Test cases added or updated in the relevant QA document.
- Error/failure behavior documented, not only happy path.
- If the item affects Phase 0, verify clean Windows install/launch assumptions are not broken.
- If the item touches local data, verify AppData path safety and no user design files are leaked into diagnostics.


## Codex Implementation Rules for This Document

When Codex works on **Hardware Acceptance Test Plan**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 3-4** unless a future-phase interface is explicitly marked as placeholder.
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
