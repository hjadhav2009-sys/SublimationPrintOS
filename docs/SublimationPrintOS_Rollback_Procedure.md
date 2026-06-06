# Rollback Procedure

> **Document ID:** REL-09  
> **File:** `SublimationPrintOS_Rollback_Procedure.md`  
> **Category:** Deployment & Release  
> **Phase:** Phase 5-6  
> **Owner:** DevOps Lead + Release Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the release system for installers, builds, versioning, silent install, portable mode, update, rollback, release notes, release checklist, and go-live. Release documents become critical in Phase 5-6 when the product moves to beta and GA.

This document focuses specifically on **Rollback Procedure** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Build pipeline
- Installer
- Portable mode
- Silent install
- Updates
- Rollback
- Release notes
- Go-live

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

- Every build artifact is versioned, checksummed, and linked to a Git tag.
- Installer supports standard install, silent install, portable mode, update, uninstall, and rollback tests.
- Before update/migration, backup database, settings, and critical user configuration.
- Release candidates must pass smoke, regression, migration, security, and installer tests.
- Release notes must include new features, fixes, known issues, migration notes, and rollback guidance.

## 6. Release Rules

- Every release build must be reproducible from Git tag and versioned artifact.
- Installer must support clean install, update install, silent mode, and uninstall test.
- Before update, backup database and settings; after update, verify migration and launch.
- Rollback must restore app version, database compatibility, settings, and critical binaries where possible.

## 7. Implementation Checklist

- [ ] Review this document with the owner: DevOps Lead + Release Manager.
- [ ] Create implementation tickets for Rollback Procedure.
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
- [ ] The release flow can be executed by DevOps without missing backup or rollback steps.
- [ ] The artifact is versioned, signed/checksummed where applicable, and traceable.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/rel/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: DevOps Lead + Release Manager and any developer assigned to Build pipeline, Installer, Portable mode, Silent install, Updates, Rollback, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.
