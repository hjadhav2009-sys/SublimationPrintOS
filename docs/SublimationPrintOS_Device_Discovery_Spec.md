# Device Discovery Spec

> **Document ID:** HW-13  
> **File:** `SublimationPrintOS_Device_Discovery_Spec.md`  
> **Category:** Hardware Integration  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Integration Lead + Backend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS talks to production hardware and RIP software in Phase 3-4. Hardware integration must be safe, observable, retryable, and usable even when direct device APIs are not available.

This document focuses specifically on **Device Discovery Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Printers
- Cutters
- Heat Press Timer
- Barcode Scanner
- RIP Hot Folders
- Device Discovery
- Drivers

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

- Prefer safe file-based handoff first: hot folders, metadata sidecars, atomic writes, and retries.
- Keep vendor-specific integrations behind adapters so core workflow is not tied to one brand.
- Never block the UI on hardware calls; hardware status updates are asynchronous.
- Every device action creates a log entry with job id, device id, command, status, and error code.
- Provide manual fallback when device discovery or direct API fails.

## 6. Discovery Strategy

- Detect configured hot folders and local/network paths first.
- Detect printers through Windows printer list where available.
- Detect network devices through configured IP/manual entry before automatic network scanning.
- Show last seen, connection method, test result, and fallback option.
- Discovery failures should not block export to file.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Hardware Integration Lead + Backend Lead.
- [ ] Create implementation tickets for Device Discovery Spec.
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
- [ ] Hardware failure paths, retries, and manual fallback are documented.
- [ ] The integration can be simulated before physical hardware is connected.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/hw/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Hardware Integration Lead + Backend Lead and any developer assigned to Printers, Cutters, Heat Press Timer, Barcode Scanner, RIP Hot Folders, Device Discovery, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.
