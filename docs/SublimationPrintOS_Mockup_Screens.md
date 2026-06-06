# Mockup Screens

> **Document ID:** UIUX-03  
> **File:** `SublimationPrintOS_Mockup_Screens.md`  
> **Category:** UI/UX Design  
> **Phase:** Phase 0  
> **Owner:** Product Designer + Frontend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS should look, feel, behave, and guide users during Phase 0 foundation screens. UI/UX documentation ensures the app shell, settings, health check, logs, and basic upscale test screen feel consistent before later design and nesting modules are built.

This document focuses specifically on **Mockup Screens** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Dashboard shell
- Sidebar navigation
- Settings
- Health Check
- Upscale Test
- Logs
- Updates
- Shortcuts

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

- Use a clean dark default UI that works in a busy production environment.
- Keep the Phase 0 shell simple: dashboard, settings, health check, upscale test, logs, updates, shortcuts.
- Use consistent spacing, typography, icons, button states, and status badges.
- Every destructive action needs confirmation and clear recovery guidance.
- All screens must be usable at 1366×768 and comfortable at 1920×1080.

## 6. Required Screens

- Main dashboard mockup: dark mode, status cards, recent jobs, health alert, and quick actions.
- Settings mockup: grouped tabs for General, Production Defaults, Upscale, Storage, Updates, and Shortcuts.
- Upscale test mockup: before/after preview placeholder, job queue, logs drawer, and error toast.
- Health check mockup: green/yellow/red status table with fix instructions.
- Recovery dialog mockup: restore, discard, and open backup folder actions.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Product Designer + Frontend Lead.
- [ ] Create implementation tickets for Mockup Screens.
- [ ] Link each ticket to phase, milestone, acceptance criteria, and test evidence.
- [ ] Update UI/API/database/hardware/test docs if this document changes another area.
- [ ] Add logging, validation, and failure handling requirements before implementation starts.
- [ ] Review against the out-of-scope list before approving development.

## 8. Acceptance Criteria

- [ ] The document is understandable by a new developer without oral explanation.
- [ ] All requirements are traceable to a module, phase, owner, and acceptance test.
- [ ] The document does not introduce out-of-scope inventory/CRM/RTO/shipping/accounting features.
- [ ] The document contains clear implementation checklists and review criteria.
- [ ] The document can be versioned in Git and reviewed through the change-management process.
- [ ] A frontend developer can build the Phase 0 screen without guessing layout or behavior.
- [ ] The screen handles loading, empty, error, warning, and success states.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/uiux/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Product Designer + Frontend Lead and any developer assigned to Dashboard shell, Sidebar navigation, Settings, Health Check, Upscale Test, Logs, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.
