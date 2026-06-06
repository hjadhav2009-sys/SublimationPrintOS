# QA Checklist

> **Document ID:** QA-17  
> **File:** `SublimationPrintOS_QA_Checklist.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **QA Checklist** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Unit tests
- Integration tests
- System tests
- Performance tests
- Hardware tests
- Color/nesting/upscale tests
- Regression suite

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

- Every feature has acceptance criteria and test type: unit, integration, system, UAT, performance, or hardware.
- P0 paths require automated tests and smoke-test checklist coverage.
- Performance tests must measure UI responsiveness and background processing separately.
- Defect reports must include reproduction steps, build version, logs, and expected/actual behavior.
- Regression suite runs before milestone acceptance and release candidate approval.

## 6. Implementation Checklist

- [ ] Review this document with the owner: QA Lead + Automation Engineer.
- [ ] Create implementation tickets for QA Checklist.
- [ ] Link each ticket to phase, milestone, acceptance criteria, and test evidence.
- [ ] Update UI/API/database/hardware/test docs if this document changes another area.
- [ ] Add logging, validation, and failure handling requirements before implementation starts.
- [ ] Review against the out-of-scope list before approving development.

## 7. Acceptance Criteria

- [ ] The document is understandable by a new developer without oral explanation.
- [ ] All requirements are traceable to a module, phase, owner, and acceptance test.
- [ ] The document does not introduce out-of-scope inventory/CRM/RTO/shipping/accounting features.
- [ ] The document contains clear implementation checklists and review criteria.
- [ ] The document can be versioned in Git and reviewed through the change-management process.
- [ ] The document maps tests to requirements and milestone exit criteria.
- [ ] The document defines pass/fail thresholds and evidence to attach.

## 8. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 9. Handoff Notes

- Store this file in the project repository under `docs/qa/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: QA Lead + Automation Engineer and any developer assigned to Unit tests, Integration tests, System tests, Performance tests, Hardware tests, Color/nesting/upscale tests, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.
