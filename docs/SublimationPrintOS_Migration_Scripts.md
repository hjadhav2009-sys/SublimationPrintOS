# Migration Scripts

> **Document ID:** DATA-04  
> **File:** `SublimationPrintOS_Migration_Scripts.md`  
> **Category:** Database & Data  
> **Phase:** Phase 0  
> **Owner:** Backend Lead + Data Owner  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the local-first SQLite, AppData, migration, indexing, backup, recovery, retention, seeding, and search approach. Database documents are part of Phase 0 because bad schema choices later create expensive migrations.

This document focuses specifically on **Migration Scripts** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- SQLite
- AppData storage
- Migrations
- FTS5 search
- Backups
- Recovery
- Data dictionary

## 4. Phase Alignment


| Phase | Name | Core Documentation Impact |
|---|---|---|
| Phase 0 | Foundation & Installation | UI shell, installer, SQLite/AppData, settings, Real-ESRGAN basic integration, health check, crash recovery, shortcuts. |
| Phase 1 | Upscale Factory & Design Store | Image intake, batch queue, quality checks, metadata, search, approvals, versioning. |
| Phase 2 | Design Studio | Canva-like editor, templates, objects, text, images, effects, canvas/layers. |
| Phase 3 | Order Basket & Print Sheet Builder | Production basket, nesting, margins/gaps/bleed, manual layout, marks/mirroring. |
| Phase 4 | Export & Color Management | PDF/PNG/JPG/ZIP export, ICC profiles, registration marks, soft proofing. |
| Phase 5 | Hardware Integration | Printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. |
| Phase 6 | Reports, Testing & Polish | Production reports, release readiness, QA hardening, user documentation, go-live. |
| Ongoing | Management + QA | Risk, change, defects, code review, regression, automation, project ceremonies. |


## 5. Key Requirements

- Store user production data in AppData/SublimationPrintOS, not Program Files.
- Store large images/assets on disk and metadata in SQLite.
- Use WAL mode, foreign keys, migrations, checksums, backups, and recovery validation.
- Use relative paths from AppData root for portability across Windows machines.
- Design the schema for at least 50,000 designs and future print/export/job history.

## 6. Migration Rules

- Every migration must be idempotent in development and strictly ordered in production.
- Before destructive migration, create backup and verify checksum.
- No direct manual database edits on user machines; all changes go through versioned migrations.
- Migration failures must stop startup safely and show a recovery path.

## 7. RIP/Hot Folder Rules

- Hot folder integration is the default reliable method for Phase 3-4.
- Metadata sidecars should be added when the RIP supports JDF/JMF or custom metadata.
- File writes must use temp file then atomic rename to avoid half-written jobs being consumed.
- If hot folder is unavailable, keep job queued and show retry status.

## 8. Implementation Checklist

- [ ] Review this document with the owner: Backend Lead + Data Owner.
- [ ] Create implementation tickets for Migration Scripts.
- [ ] Link each ticket to phase, milestone, acceptance criteria, and test evidence.
- [ ] Update UI/API/database/hardware/test docs if this document changes another area.
- [ ] Add logging, validation, and failure handling requirements before implementation starts.
- [ ] Review against the out-of-scope list before approving development.

## 9. Acceptance Criteria

- [ ] The document is understandable by a new developer without oral explanation.
- [ ] All requirements are traceable to a module, phase, owner, and acceptance test.
- [ ] The document does not introduce out-of-scope inventory/CRM/RTO/shipping/accounting features.
- [ ] The document contains clear implementation checklists and review criteria.
- [ ] The document can be versioned in Git and reviewed through the change-management process.
- [ ] The database design supports migrations, backups, recovery, and FTS5 search.
- [ ] No image binary blobs are stored directly in normal operational tables.

## 10. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 11. Handoff Notes

- Store this file in the project repository under `docs/data/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Backend Lead + Data Owner and any developer assigned to SQLite, AppData storage, Migrations, FTS5 search, Backups, Recovery, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.
