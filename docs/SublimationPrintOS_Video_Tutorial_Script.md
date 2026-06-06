# Video Tutorial Script

> **Document ID:** USERDOC-08  
> **File:** `SublimationPrintOS_Video_Tutorial_Script.md`  
> **Category:** User Documentation  
> **Phase:** Phase 5-6  
> **Owner:** Technical Writer + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define all customer-facing and internal documentation needed before beta and GA: user manual, admin manual, developer/API docs, troubleshooting, FAQ, quick start, video scripts, training material, and knowledge base.

This document focuses specifically on **Video Tutorial Script** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- End-user workflows
- Admin settings
- Developer/API docs
- Troubleshooting
- FAQ
- Training
- Knowledge base

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

- Documentation must be task-based, not only feature-based.
- Use screenshots/placeholders for each major UI flow when final UI is available.
- Keep worker instructions simple, direct, and production-floor friendly.
- Troubleshooting entries include symptom, cause, fix, prevention, and when to escalate.
- User docs must be updated before beta, release candidate, and GA release.

## 6. RIP/Hot Folder Rules

- Hot folder integration is the default reliable method for Phase 3-4.
- Metadata sidecars should be added when the RIP supports JDF/JMF or custom metadata.
- File writes must use temp file then atomic rename to avoid half-written jobs being consumed.
- If hot folder is unavailable, keep job queued and show retry status.

## 7. Documentation Coverage

- First launch: install, open app, set company/defaults, run health check.
- Upscale: upload image, choose scale, run GPU/CPU fallback, review output.
- Design Store: approve, search, filter, tag, preview, export.
- Production: add designs to basket, configure nesting, export, send to RIP/hardware when available.
- Support: logs, diagnostic ZIP, backup, restore, update, common errors.

## 8. Video Script Modules

- Install and first launch.
- Settings and health check.
- Upscale one image and review quality.
- Design Store basics.
- Nesting/export/hardware overview for later phases.

## 9. Implementation Checklist

- [ ] Review this document with the owner: Technical Writer + Product Manager.
- [ ] Create implementation tickets for Video Tutorial Script.
- [ ] Link each ticket to phase, milestone, acceptance criteria, and test evidence.
- [ ] Update UI/API/database/hardware/test docs if this document changes another area.
- [ ] Add logging, validation, and failure handling requirements before implementation starts.
- [ ] Review against the out-of-scope list before approving development.

## 10. Acceptance Criteria

- [ ] The document is understandable by a new developer without oral explanation.
- [ ] All requirements are traceable to a module, phase, owner, and acceptance test.
- [ ] The document does not introduce out-of-scope inventory/CRM/RTO/shipping/accounting features.
- [ ] The document contains clear implementation checklists and review criteria.
- [ ] The document can be versioned in Git and reviewed through the change-management process.
- [ ] A new user can complete the documented workflow without developer help.
- [ ] Known errors include simple fixes and escalation guidance.

## 11. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 12. Handoff Notes

- Store this file in the project repository under `docs/userdoc/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Technical Writer + Product Manager and any developer assigned to End-user workflows, Admin settings, Developer/API docs, Troubleshooting, FAQ, Training, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.
