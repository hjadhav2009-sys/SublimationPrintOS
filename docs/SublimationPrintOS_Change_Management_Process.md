# Change Management Process

> **Document ID:** PM-04  
> **File:** `SublimationPrintOS_Change_Management_Process.md`  
> **Category:** Project Management  
> **Phase:** Ongoing  
> **Owner:** Project Manager + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the project control system used throughout development: charter, risk, mitigation, change, defects, code reviews, standups, and sprint planning. These documents keep scope under control while many modules are built in parallel.

This document focuses specifically on **Change Management Process** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Scope
- Schedule
- Risk
- Change control
- Defects
- Code review
- Standups
- Sprint planning

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

- Every task links to a milestone, owner, acceptance criteria, and test evidence.
- Scope changes use change control and update requirements, tests, docs, schedule, and risk if approved.
- Risks are reviewed weekly and high risks have mitigation plus contingency.
- Defects are triaged by severity, customer impact, and milestone impact.
- Sprint planning and standups keep Phase 0-6 execution visible and controlled.

## 6. Change Control Rules

- All scope, architecture, technology, schedule, and resource changes require documented impact analysis.
- P0 changes after agreed freeze require higher approval.
- Excluded features remain blocked unless sponsor approves a future version backlog item.
- Every approved change updates requirements, tests, docs, roadmap, and risk register where needed.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Project Manager + Product Manager.
- [ ] Create implementation tickets for Change Management Process.
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
- [ ] The process creates visible ownership, dates, risks, decisions, and next actions.
- [ ] The template is short enough to use every sprint, not just once.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/pm/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Project Manager + Product Manager and any developer assigned to Scope, Schedule, Risk, Change control, Defects, Code review, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.
