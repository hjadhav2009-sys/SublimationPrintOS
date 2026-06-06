# SublimationPrintOS — Documentation Pack (111 Documents)

> **Version:** 1.0  
> **Date:** 2026-06-06  
> **Format:** Master Markdown file containing all requested documents  
> **Scope:** Pure Sublimation Production Software  
> **Counts Requested:** UI/UX 13, Development 17, Database 10, Hardware 14, Testing 18, Deployment 11, Security 10, User Documentation 10, Project Management 8  

---

## Scope Confirmation

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## Master Phase Map


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


## Document Index

| # | Doc ID | Category | Phase | File |
|---|---|---|---|---|
| 1 | UIUX-01 | UI/UX Design | Phase 0 | SublimationPrintOS_UI_Design_Guidelines.md |
| 2 | UIUX-02 | UI/UX Design | Phase 0 | SublimationPrintOS_UX_Wireframes.md |
| 3 | UIUX-03 | UI/UX Design | Phase 0 | SublimationPrintOS_Mockup_Screens.md |
| 4 | UIUX-04 | UI/UX Design | Phase 0 | SublimationPrintOS_Component_Library.md |
| 5 | UIUX-05 | UI/UX Design | Phase 0 | SublimationPrintOS_Design_System.md |
| 6 | UIUX-06 | UI/UX Design | Phase 0 | SublimationPrintOS_Color_Palette.md |
| 7 | UIUX-07 | UI/UX Design | Phase 0 | SublimationPrintOS_Typography_Guide.md |
| 8 | UIUX-08 | UI/UX Design | Phase 0 | SublimationPrintOS_Icon_Library.md |
| 9 | UIUX-09 | UI/UX Design | Phase 0 | SublimationPrintOS_Interaction_Design.md |
| 10 | UIUX-10 | UI/UX Design | Phase 0 | SublimationPrintOS_Responsive_Design_Guide.md |
| 11 | UIUX-11 | UI/UX Design | Phase 0 | SublimationPrintOS_Accessibility_Guide.md |
| 12 | UIUX-12 | UI/UX Design | Phase 0 | SublimationPrintOS_Dark_Mode_Spec.md |
| 13 | UIUX-13 | UI/UX Design | Phase 0 | SublimationPrintOS_Keyboard_Shortcuts_Reference.md |
| 14 | DEV-01 | Development Guides | Phase 0-1 | SublimationPrintOS_Coding_Standards.md |
| 15 | DEV-02 | Development Guides | Phase 0-1 | SublimationPrintOS_Code_Structure.md |
| 16 | DEV-03 | Development Guides | Phase 0-1 | SublimationPrintOS_Module_Breakdown.md |
| 17 | DEV-04 | Development Guides | Phase 0-1 | SublimationPrintOS_Frontend_Development_Guide.md |
| 18 | DEV-05 | Development Guides | Phase 0-1 | SublimationPrintOS_Backend_Development_Guide.md |
| 19 | DEV-06 | Development Guides | Phase 0-1 | SublimationPrintOS_Database_Development_Guide.md |
| 20 | DEV-07 | Development Guides | Phase 0-1 | SublimationPrintOS_API_Development_Guide.md |
| 21 | DEV-08 | Development Guides | Phase 0-1 | SublimationPrintOS_Canvas_Engine_Spec.md |
| 22 | DEV-09 | Development Guides | Phase 0-1 | SublimationPrintOS_Nesting_Algorithm_Spec.md |
| 23 | DEV-10 | Development Guides | Phase 0-1 | SublimationPrintOS_Upscale_Engine_Integration.md |
| 24 | DEV-11 | Development Guides | Phase 0-1 | SublimationPrintOS_RIP_Integration_Guide.md |
| 25 | DEV-12 | Development Guides | Phase 0-1 | SublimationPrintOS_Cutter_Integration_Guide.md |
| 26 | DEV-13 | Development Guides | Phase 0-1 | SublimationPrintOS_Hardware_Driver_Spec.md |
| 27 | DEV-14 | Development Guides | Phase 0-1 | SublimationPrintOS_Plugin_SDK_Documentation.md |
| 28 | DEV-15 | Development Guides | Phase 0-1 | SublimationPrintOS_Scripting_API_Reference.md |
| 29 | DEV-16 | Development Guides | Phase 0-1 | SublimationPrintOS_Third_Party_Library_List.md |
| 30 | DEV-17 | Development Guides | Phase 0-1 | SublimationPrintOS_Dependency_Management.md |
| 31 | DATA-01 | Database & Data | Phase 0 | SublimationPrintOS_Database_Design_Document.md |
| 32 | DATA-02 | Database & Data | Phase 0 | SublimationPrintOS_Table_Specifications.md |
| 33 | DATA-03 | Database & Data | Phase 0 | SublimationPrintOS_Index_Strategy.md |
| 34 | DATA-04 | Database & Data | Phase 0 | SublimationPrintOS_Migration_Scripts.md |
| 35 | DATA-05 | Database & Data | Phase 0 | SublimationPrintOS_Data_Dictionary.md |
| 36 | DATA-06 | Database & Data | Phase 0 | SublimationPrintOS_Data_Retention_Policy.md |
| 37 | DATA-07 | Database & Data | Phase 0 | SublimationPrintOS_Backup_Strategy.md |
| 38 | DATA-08 | Database & Data | Phase 0 | SublimationPrintOS_Recovery_Procedure.md |
| 39 | DATA-09 | Database & Data | Phase 0 | SublimationPrintOS_Data_Seeding_Scripts.md |
| 40 | DATA-10 | Database & Data | Phase 0 | SublimationPrintOS_FTS5_Search_Config.md |
| 41 | HW-01 | Hardware Integration | Phase 3-4 | SublimationPrintOS_Printer_Integration_Spec.md |
| 42 | HW-02 | Hardware Integration | Phase 3-4 | SublimationPrintOS_Cutter_Integration_Spec.md |
| 43 | HW-03 | Hardware Integration | Phase 3-4 | SublimationPrintOS_Heat_Press_Integration_Spec.md |
| 44 | HW-04 | Hardware Integration | Phase 3-4 | SublimationPrintOS_Barcode_Scanner_Integration.md |
| 45 | HW-05 | Hardware Integration | Phase 3-4 | SublimationPrintOS_Hot_Folder_Spec.md |
| 46 | HW-06 | Hardware Integration | Phase 3-4 | SublimationPrintOS_RIP_Software_Integration.md |
| 47 | HW-07 | Hardware Integration | Phase 3-4 | SublimationPrintOS_Caldera_Integration_Guide.md |
| 48 | HW-08 | Hardware Integration | Phase 3-4 | SublimationPrintOS_Wasatch_Integration_Guide.md |
| 49 | HW-09 | Hardware Integration | Phase 3-4 | SublimationPrintOS_Onyx_Integration_Guide.md |
| 50 | HW-10 | Hardware Integration | Phase 3-4 | SublimationPrintOS_Summa_Cutter_Integration.md |
| 51 | HW-11 | Hardware Integration | Phase 3-4 | SublimationPrintOS_Graphtec_Cutter_Integration.md |
| 52 | HW-12 | Hardware Integration | Phase 3-4 | SublimationPrintOS_Hardware_Communication_Protocol.md |
| 53 | HW-13 | Hardware Integration | Phase 3-4 | SublimationPrintOS_Device_Discovery_Spec.md |
| 54 | HW-14 | Hardware Integration | Phase 3-4 | SublimationPrintOS_Driver_Installation_Guide.md |
| 55 | QA-01 | Testing & QA | Ongoing | SublimationPrintOS_Test_Plan.md |
| 56 | QA-02 | Testing & QA | Ongoing | SublimationPrintOS_Test_Strategy.md |
| 57 | QA-03 | Testing & QA | Ongoing | SublimationPrintOS_Unit_Test_Spec.md |
| 58 | QA-04 | Testing & QA | Ongoing | SublimationPrintOS_Integration_Test_Spec.md |
| 59 | QA-05 | Testing & QA | Ongoing | SublimationPrintOS_System_Test_Spec.md |
| 60 | QA-06 | Testing & QA | Ongoing | SublimationPrintOS_UAT_Test_Cases.md |
| 61 | QA-07 | Testing & QA | Ongoing | SublimationPrintOS_Performance_Test_Plan.md |
| 62 | QA-08 | Testing & QA | Ongoing | SublimationPrintOS_Load_Test_Spec.md |
| 63 | QA-09 | Testing & QA | Ongoing | SublimationPrintOS_Stress_Test_Spec.md |
| 64 | QA-10 | Testing & QA | Ongoing | SublimationPrintOS_Hardware_Test_Protocol.md |
| 65 | QA-11 | Testing & QA | Ongoing | SublimationPrintOS_Color_Accuracy_Test.md |
| 66 | QA-12 | Testing & QA | Ongoing | SublimationPrintOS_Nesting_Accuracy_Test.md |
| 67 | QA-13 | Testing & QA | Ongoing | SublimationPrintOS_Upscale_Quality_Test.md |
| 68 | QA-14 | Testing & QA | Ongoing | SublimationPrintOS_Regression_Test_Suite.md |
| 69 | QA-15 | Testing & QA | Ongoing | SublimationPrintOS_Smoke_Test_Checklist.md |
| 70 | QA-16 | Testing & QA | Ongoing | SublimationPrintOS_Bug_Report_Template.md |
| 71 | QA-17 | Testing & QA | Ongoing | SublimationPrintOS_QA_Checklist.md |
| 72 | QA-18 | Testing & QA | Ongoing | SublimationPrintOS_Test_Automation_Strategy.md |
| 73 | REL-01 | Deployment & Release | Phase 5-6 | SublimationPrintOS_Deployment_Plan.md |
| 74 | REL-02 | Deployment & Release | Phase 5-6 | SublimationPrintOS_Release_Notes_Template.md |
| 75 | REL-03 | Deployment & Release | Phase 5-6 | SublimationPrintOS_Version_Control_Strategy.md |
| 76 | REL-04 | Deployment & Release | Phase 5-6 | SublimationPrintOS_Build_Process.md |
| 77 | REL-05 | Deployment & Release | Phase 5-6 | SublimationPrintOS_Installer_Spec.md |
| 78 | REL-06 | Deployment & Release | Phase 5-6 | SublimationPrintOS_Silent_Install_Guide.md |
| 79 | REL-07 | Deployment & Release | Phase 5-6 | SublimationPrintOS_Portable_Mode_Spec.md |
| 80 | REL-08 | Deployment & Release | Phase 5-6 | SublimationPrintOS_Update_System_Spec.md |
| 81 | REL-09 | Deployment & Release | Phase 5-6 | SublimationPrintOS_Rollback_Procedure.md |
| 82 | REL-10 | Deployment & Release | Phase 5-6 | SublimationPrintOS_Release_Checklist.md |
| 83 | REL-11 | Deployment & Release | Phase 5-6 | SublimationPrintOS_Go_Live_Plan.md |
| 84 | SEC-01 | Security & Compliance | Phase 1-2 | SublimationPrintOS_Security_Policy.md |
| 85 | SEC-02 | Security & Compliance | Phase 1-2 | SublimationPrintOS_Data_Protection_Plan.md |
| 86 | SEC-03 | Security & Compliance | Phase 1-2 | SublimationPrintOS_Encryption_Spec.md |
| 87 | SEC-04 | Security & Compliance | Phase 1-2 | SublimationPrintOS_Access_Control_Spec.md |
| 88 | SEC-05 | Security & Compliance | Phase 1-2 | SublimationPrintOS_Audit_Log_Spec.md |
| 89 | SEC-06 | Security & Compliance | Phase 1-2 | SublimationPrintOS_Vulnerability_Assessment.md |
| 90 | SEC-07 | Security & Compliance | Phase 1-2 | SublimationPrintOS_Penetration_Test_Plan.md |
| 91 | SEC-08 | Security & Compliance | Phase 1-2 | SublimationPrintOS_Incident_Response_Plan.md |
| 92 | SEC-09 | Security & Compliance | Phase 1-2 | SublimationPrintOS_GDPR_Compliance.md |
| 93 | SEC-10 | Security & Compliance | Phase 1-2 | SublimationPrintOS_Software_License_Agreement.md |
| 94 | USERDOC-01 | User Documentation | Phase 5-6 | SublimationPrintOS_User_Manual.md |
| 95 | USERDOC-02 | User Documentation | Phase 5-6 | SublimationPrintOS_Admin_Manual.md |
| 96 | USERDOC-03 | User Documentation | Phase 5-6 | SublimationPrintOS_Developer_Documentation.md |
| 97 | USERDOC-04 | User Documentation | Phase 5-6 | SublimationPrintOS_API_Documentation.md |
| 98 | USERDOC-05 | User Documentation | Phase 5-6 | SublimationPrintOS_Troubleshooting_Guide.md |
| 99 | USERDOC-06 | User Documentation | Phase 5-6 | SublimationPrintOS_FAQ.md |
| 100 | USERDOC-07 | User Documentation | Phase 5-6 | SublimationPrintOS_Quick_Start_Guide.md |
| 101 | USERDOC-08 | User Documentation | Phase 5-6 | SublimationPrintOS_Video_Tutorial_Script.md |
| 102 | USERDOC-09 | User Documentation | Phase 5-6 | SublimationPrintOS_Training_Material.md |
| 103 | USERDOC-10 | User Documentation | Phase 5-6 | SublimationPrintOS_Knowledge_Base.md |
| 104 | PM-01 | Project Management | Ongoing | SublimationPrintOS_Project_Charter.md |
| 105 | PM-02 | Project Management | Ongoing | SublimationPrintOS_Risk_Register.md |
| 106 | PM-03 | Project Management | Ongoing | SublimationPrintOS_Risk_Mitigation_Plan.md |
| 107 | PM-04 | Project Management | Ongoing | SublimationPrintOS_Change_Management_Process.md |
| 108 | PM-05 | Project Management | Ongoing | SublimationPrintOS_Defect_Tracking_Process.md |
| 109 | PM-06 | Project Management | Ongoing | SublimationPrintOS_Code_Review_Process.md |
| 110 | PM-07 | Project Management | Ongoing | SublimationPrintOS_Daily_Standup_Template.md |
| 111 | PM-08 | Project Management | Ongoing | SublimationPrintOS_Sprint_Planning_Template.md |

---

# Document Library


# UI/UX Design — 13 Documents (Phase 0)


---

<!-- source-file: SublimationPrintOS_UI_Design_Guidelines.md -->

# UI Design Guidelines

> **Document ID:** UIUX-01  
> **File:** `SublimationPrintOS_UI_Design_Guidelines.md`  
> **Category:** UI/UX Design  
> **Phase:** Phase 0  
> **Owner:** Product Designer + Frontend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS should look, feel, behave, and guide users during Phase 0 foundation screens. UI/UX documentation ensures the app shell, settings, health check, logs, and basic upscale test screen feel consistent before later design and nesting modules are built.

This document focuses specifically on **UI Design Guidelines** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. UI Layout Rules

- Use a persistent left sidebar for modules: Dashboard, Upscale Test, Settings, Health Check, Logs, Updates, Shortcuts.
- Top bar shows current module, job/health status, user role, and app version.
- Status bar shows background task count, DB state, storage warning, and last autosave time.
- Use card-based dashboard metrics with clear empty states for first launch.
- All warning and error panels must include next action, not only error text.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Product Designer + Frontend Lead.
- [ ] Create implementation tickets for UI Design Guidelines.
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


---

<!-- source-file: SublimationPrintOS_UX_Wireframes.md -->

# UX Wireframes

> **Document ID:** UIUX-02  
> **File:** `SublimationPrintOS_UX_Wireframes.md`  
> **Category:** UI/UX Design  
> **Phase:** Phase 0  
> **Owner:** Product Designer + Frontend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS should look, feel, behave, and guide users during Phase 0 foundation screens. UI/UX documentation ensures the app shell, settings, health check, logs, and basic upscale test screen feel consistent before later design and nesting modules are built.

This document focuses specifically on **UX Wireframes** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Wireframe Inventory

- Startup/loading state with app logo, version, and migration progress.
- Dashboard shell with sidebar, top bar, health badge, and recent activity.
- Settings screen with company profile, defaults, theme, language, backup path, and update policy.
- Upscale test screen with image picker, preview, scale selector, GPU/CPU status, progress, and output path.
- Health check screen with pass/warn/fail rows for OS, disk, RAM, GPU, Vulkan, DB, model files, and permissions.
- Logs screen with filter by module, severity, job id, copy button, and export diagnostic ZIP action.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Product Designer + Frontend Lead.
- [ ] Create implementation tickets for UX Wireframes.
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


---

<!-- source-file: SublimationPrintOS_Mockup_Screens.md -->

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


---

<!-- source-file: SublimationPrintOS_Component_Library.md -->

# Component Library

> **Document ID:** UIUX-04  
> **File:** `SublimationPrintOS_Component_Library.md`  
> **Category:** UI/UX Design  
> **Phase:** Phase 0  
> **Owner:** Product Designer + Frontend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS should look, feel, behave, and guide users during Phase 0 foundation screens. UI/UX documentation ensures the app shell, settings, health check, logs, and basic upscale test screen feel consistent before later design and nesting modules are built.

This document focuses specifically on **Component Library** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Component Set

- AppShell, Sidebar, TopBar, StatusBar, ModuleCard, HealthBadge, Toast, Modal, Drawer.
- Button variants: primary, secondary, danger, ghost, icon-only, disabled, loading.
- Form components: input, select, checkbox, radio, slider, unit field, path picker, color swatch.
- Data components: grid, virtual list, log viewer, progress bar, empty state, error panel.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Product Designer + Frontend Lead.
- [ ] Create implementation tickets for Component Library.
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


---

<!-- source-file: SublimationPrintOS_Design_System.md -->

# Design System

> **Document ID:** UIUX-05  
> **File:** `SublimationPrintOS_Design_System.md`  
> **Category:** UI/UX Design  
> **Phase:** Phase 0  
> **Owner:** Product Designer + Frontend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS should look, feel, behave, and guide users during Phase 0 foundation screens. UI/UX documentation ensures the app shell, settings, health check, logs, and basic upscale test screen feel consistent before later design and nesting modules are built.

This document focuses specifically on **Design System** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Design Tokens

- Spacing scale: 4, 8, 12, 16, 24, 32, 48 px.
- Radius scale: 4 px for fields, 8 px for cards, 12 px for dialogs.
- Elevation scale: none, low card, modal overlay; avoid heavy shadows in dark mode.
- Status tokens: ready, processing, warning, error, paused, completed, offline.
- Use component variants instead of one-off CSS for repeated UI patterns.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Product Designer + Frontend Lead.
- [ ] Create implementation tickets for Design System.
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


---

<!-- source-file: SublimationPrintOS_Color_Palette.md -->

# Color Palette

> **Document ID:** UIUX-06  
> **File:** `SublimationPrintOS_Color_Palette.md`  
> **Category:** UI/UX Design  
> **Phase:** Phase 0  
> **Owner:** Product Designer + Frontend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS should look, feel, behave, and guide users during Phase 0 foundation screens. UI/UX documentation ensures the app shell, settings, health check, logs, and basic upscale test screen feel consistent before later design and nesting modules are built.

This document focuses specifically on **Color Palette** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Visual Baseline

- Default mode is dark because production floors often have mixed lighting.
- Use high contrast for labels, warnings, health status, and worker actions.
- Never encode status by color alone; pair color with icon and text.
- Reserve red for destructive/blocking errors, amber for warning, green for ready/pass, blue for informational actions.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Product Designer + Frontend Lead.
- [ ] Create implementation tickets for Color Palette.
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


---

<!-- source-file: SublimationPrintOS_Typography_Guide.md -->

# Typography Guide

> **Document ID:** UIUX-07  
> **File:** `SublimationPrintOS_Typography_Guide.md`  
> **Category:** UI/UX Design  
> **Phase:** Phase 0  
> **Owner:** Product Designer + Frontend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS should look, feel, behave, and guide users during Phase 0 foundation screens. UI/UX documentation ensures the app shell, settings, health check, logs, and basic upscale test screen feel consistent before later design and nesting modules are built.

This document focuses specifically on **Typography Guide** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Typography Rules

- Base UI text should remain readable at 100% scaling on 1366×768 screens.
- Use tabular numbers for dimensions, DPI, progress percentages, timings, and sheet counts.
- Support English and Hindi text rendering in design-related screens where personalization is expected.
- Avoid tiny labels in production-worker screens; actions must remain readable from arm length.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Product Designer + Frontend Lead.
- [ ] Create implementation tickets for Typography Guide.
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


---

<!-- source-file: SublimationPrintOS_Icon_Library.md -->

# Icon Library

> **Document ID:** UIUX-08  
> **File:** `SublimationPrintOS_Icon_Library.md`  
> **Category:** UI/UX Design  
> **Phase:** Phase 0  
> **Owner:** Product Designer + Frontend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS should look, feel, behave, and guide users during Phase 0 foundation screens. UI/UX documentation ensures the app shell, settings, health check, logs, and basic upscale test screen feel consistent before later design and nesting modules are built.

This document focuses specifically on **Icon Library** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Icon Categories

- Navigation: dashboard, upscale, design store, design studio, basket, nesting, export, hardware, settings.
- Actions: upload, save, export, print, cut, pause, resume, cancel, retry, approve, reject.
- Status: online, offline, warning, error, success, processing, queued, locked, archived.
- Production: paper, printer, cutter, heat press, color profile, registration mark, mirror, QR code.
- Icons must be 16/20/24 px compatible and remain readable on dark backgrounds.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Product Designer + Frontend Lead.
- [ ] Create implementation tickets for Icon Library.
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


---

<!-- source-file: SublimationPrintOS_Interaction_Design.md -->

# Interaction Design

> **Document ID:** UIUX-09  
> **File:** `SublimationPrintOS_Interaction_Design.md`  
> **Category:** UI/UX Design  
> **Phase:** Phase 0  
> **Owner:** Product Designer + Frontend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS should look, feel, behave, and guide users during Phase 0 foundation screens. UI/UX documentation ensures the app shell, settings, health check, logs, and basic upscale test screen feel consistent before later design and nesting modules are built.

This document focuses specifically on **Interaction Design** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Interaction Rules

- Every long task starts with immediate feedback and progress status.
- Drag-and-drop must show valid/invalid drop zones.
- Right-click context menus should duplicate toolbar actions for power users.
- Dangerous actions use confirmation dialogs with object name and consequence.
- Keyboard and mouse interactions should never conflict with design-canvas shortcuts in later phases.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Product Designer + Frontend Lead.
- [ ] Create implementation tickets for Interaction Design.
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


---

<!-- source-file: SublimationPrintOS_Responsive_Design_Guide.md -->

# Responsive Design Guide

> **Document ID:** UIUX-10  
> **File:** `SublimationPrintOS_Responsive_Design_Guide.md`  
> **Category:** UI/UX Design  
> **Phase:** Phase 0  
> **Owner:** Product Designer + Frontend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS should look, feel, behave, and guide users during Phase 0 foundation screens. UI/UX documentation ensures the app shell, settings, health check, logs, and basic upscale test screen feel consistent before later design and nesting modules are built.

This document focuses specifically on **Responsive Design Guide** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Desktop Responsive Targets

- Minimum: 1366×768 with one sidebar and one main content region.
- Recommended: 1920×1080 with side details panel where useful.
- Small-height screens collapse logs/details into drawers.
- Do not hide critical production actions behind hover-only UI.
- Multi-monitor support later should preserve panel state per screen.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Product Designer + Frontend Lead.
- [ ] Create implementation tickets for Responsive Design Guide.
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


---

<!-- source-file: SublimationPrintOS_Accessibility_Guide.md -->

# Accessibility Guide

> **Document ID:** UIUX-11  
> **File:** `SublimationPrintOS_Accessibility_Guide.md`  
> **Category:** UI/UX Design  
> **Phase:** Phase 0  
> **Owner:** Product Designer + Frontend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS should look, feel, behave, and guide users during Phase 0 foundation screens. UI/UX documentation ensures the app shell, settings, health check, logs, and basic upscale test screen feel consistent before later design and nesting modules are built.

This document focuses specifically on **Accessibility Guide** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Accessibility Rules

- All controls need visible focus state and keyboard reachability.
- Use text + icon for critical status; do not use color alone.
- Minimum touch/click target: 44×44 px for worker-facing actions.
- Provide reduced-motion option for progress/animation-heavy screens.
- Error messages must be readable and explain how to fix the problem.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Product Designer + Frontend Lead.
- [ ] Create implementation tickets for Accessibility Guide.
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


---

<!-- source-file: SublimationPrintOS_Dark_Mode_Spec.md -->

# Dark Mode Spec

> **Document ID:** UIUX-12  
> **File:** `SublimationPrintOS_Dark_Mode_Spec.md`  
> **Category:** UI/UX Design  
> **Phase:** Phase 0  
> **Owner:** Product Designer + Frontend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS should look, feel, behave, and guide users during Phase 0 foundation screens. UI/UX documentation ensures the app shell, settings, health check, logs, and basic upscale test screen feel consistent before later design and nesting modules are built.

This document focuses specifically on **Dark Mode Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Visual Baseline

- Default mode is dark because production floors often have mixed lighting.
- Use high contrast for labels, warnings, health status, and worker actions.
- Never encode status by color alone; pair color with icon and text.
- Reserve red for destructive/blocking errors, amber for warning, green for ready/pass, blue for informational actions.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Product Designer + Frontend Lead.
- [ ] Create implementation tickets for Dark Mode Spec.
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


---

<!-- source-file: SublimationPrintOS_Keyboard_Shortcuts_Reference.md -->

# Keyboard Shortcuts Reference

> **Document ID:** UIUX-13  
> **File:** `SublimationPrintOS_Keyboard_Shortcuts_Reference.md`  
> **Category:** UI/UX Design  
> **Phase:** Phase 0  
> **Owner:** Product Designer + Frontend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS should look, feel, behave, and guide users during Phase 0 foundation screens. UI/UX documentation ensures the app shell, settings, health check, logs, and basic upscale test screen feel consistent before later design and nesting modules are built.

This document focuses specifically on **Keyboard Shortcuts Reference** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Shortcut Baseline

- Global: Ctrl+, settings; F1 help; Ctrl+Shift+L logs; Ctrl+Shift+H health check.
- File: Ctrl+O open, Ctrl+S save, Ctrl+Shift+S save as, Ctrl+N new project later.
- View: Ctrl++ zoom in, Ctrl+- zoom out, Ctrl+0 fit, F11 full screen.
- Recovery and safety actions must not use accidental single-key shortcuts.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Product Designer + Frontend Lead.
- [ ] Create implementation tickets for Keyboard Shortcuts Reference.
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


# Development Guides — 17 Documents (Phase 0-1)


---

<!-- source-file: SublimationPrintOS_Coding_Standards.md -->

# Coding Standards

> **Document ID:** DEV-01  
> **File:** `SublimationPrintOS_Coding_Standards.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **Coding Standards** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. Coding Standard Rules

- Use strict TypeScript for frontend and typed backend command payloads.
- Use clear names: service for business logic, repository for DB access, adapter for external device/vendor integration.
- No silent catch blocks; errors must be logged with module, action, error code, and user-safe message.
- No direct file-system writes from UI components; use backend commands.
- All P0 paths require tests before merge.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for Coding Standards.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Code_Structure.md -->

# Code Structure

> **Document ID:** DEV-02  
> **File:** `SublimationPrintOS_Code_Structure.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **Code Structure** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. Suggested Repository Structure

- `src/ui/` for React screens and components.
- `src/core/` for services, domain types, validation, and commands.
- `src/db/` for migrations, repositories, seed scripts, and schema tests.
- `src/workers/` for upscale, nesting, export, thumbnail, and diagnostics background tasks.
- `src/integrations/` for RIP, printer, cutter, scanner, and update adapters.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for Code Structure.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Module_Breakdown.md -->

# Module Breakdown

> **Document ID:** DEV-03  
> **File:** `SublimationPrintOS_Module_Breakdown.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **Module Breakdown** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. Module Boundaries

- Settings owns default units, DPI, paths, theme, language, updates, and backup policy.
- Upscale owns Real-ESRGAN jobs, source/output files, queue status, and quality output handoff.
- Design Store owns approved assets, metadata, thumbnails, search, tags, and versions.
- Print Sheet Builder owns basket input, nesting result, pages, marks, bleed, mirror, and export handoff.
- Hardware Hub owns devices, queue handoff, status, errors, and manual fallback.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for Module Breakdown.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Frontend_Development_Guide.md -->

# Frontend Development Guide

> **Document ID:** DEV-04  
> **File:** `SublimationPrintOS_Frontend_Development_Guide.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **Frontend Development Guide** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. Frontend Rules

- Use route-level module screens and small reusable components.
- Keep state local unless shared across modules; background job state comes from backend events.
- Always implement loading, empty, success, warning, and error states.
- Virtualize large lists such as Design Store and logs.
- Do not put secrets, file-system paths, or raw shell commands in frontend code.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for Frontend Development Guide.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Backend_Development_Guide.md -->

# Backend Development Guide

> **Document ID:** DEV-05  
> **File:** `SublimationPrintOS_Backend_Development_Guide.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **Backend Development Guide** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. Backend Rules

- Expose backend actions as typed commands with validation.
- Use job queues for long-running tasks and publish progress events to UI.
- Use repositories for SQLite operations and transactions for multi-step changes.
- Use atomic file writes for assets, exports, backups, logs, and update staging.
- Every external process call, including Real-ESRGAN, must sanitize arguments and capture stderr/stdout.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for Backend Development Guide.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Database_Development_Guide.md -->

# Database Development Guide

> **Document ID:** DEV-06  
> **File:** `SublimationPrintOS_Database_Development_Guide.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **Database Development Guide** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. Core Data Objects

- app_meta, schema_migrations, settings, users, roles, audit_logs.
- file_assets, designs, design_versions, thumbnails, tags, categories.
- upscale_jobs, upscale_job_items, quality_checks, background_tasks.
- print_jobs, print_pages, export_presets, hardware_devices, device_logs later by phase.
- system_health_checks, crash_reports, backup_runs, update_packages.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for Database Development Guide.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_API_Development_Guide.md -->

# API Development Guide

> **Document ID:** DEV-07  
> **File:** `SublimationPrintOS_API_Development_Guide.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **API Development Guide** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. Local Command/API Contract

- `settings.get/update/export/import` for settings.
- `health.runFullCheck/getLastReport` for diagnostics.
- `upscale.createJob/start/cancel/status` for AI upscale queue.
- `db.runMigrations/backup/healthCheck` for database operations.
- `logs.query/exportDiagnosticZip` for support handoff.
- `hardware.discover/sendToHotFolder/testDevice` for later integration.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for API Development Guide.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Canvas_Engine_Spec.md -->

# Canvas Engine Spec

> **Document ID:** DEV-08  
> **File:** `SublimationPrintOS_Canvas_Engine_Spec.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **Canvas Engine Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. Canvas Engine Rules

- Prototype with Fabric.js or Konva.js before final selection.
- Support rulers, grid, guides, snapping, zoom, pan, object select/move/resize/rotate later.
- Use viewport culling and object batching for 500+ object stress tests.
- Keep design editing independent from final print-sheet nesting canvas.
- Export must preserve size, DPI, bleed, safe zone, transparency, and contours where applicable.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for Canvas Engine Spec.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Nesting_Algorithm_Spec.md -->

# Nesting Algorithm Spec

> **Document ID:** DEV-09  
> **File:** `SublimationPrintOS_Nesting_Algorithm_Spec.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **Nesting Algorithm Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. Nesting Algorithm Scope

- Phase 3 begins with shelf/guillotine rectangle packing for predictable output.
- True-shape nesting should use polygon outlines, gap, margin, rotation, bleed, and sheet constraints.
- Return layout result with item coordinates, rotation, page number, efficiency, and warnings.
- Algorithm must be deterministic for same inputs unless user enables optimization randomness.
- Nesting must run in background and allow cancellation.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for Nesting Algorithm Spec.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Upscale_Engine_Integration.md -->

# Upscale Engine Integration

> **Document ID:** DEV-10  
> **File:** `SublimationPrintOS_Upscale_Engine_Integration.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **Upscale Engine Integration** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. Real-ESRGAN Integration Contract

- Validate input format, path, dimensions, disk space, and output target before starting.
- Detect GPU/Vulkan, run GPU by default, and fallback to CPU on failure.
- Record command, model, scale, tile size, duration, status, and output checksum.
- Support batch queue, pause/resume/cancel later; Phase 0 requires single/basic job plus foundation.
- Never block UI while upscale runs.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for Upscale Engine Integration.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_RIP_Integration_Guide.md -->

# RIP Integration Guide

> **Document ID:** DEV-11  
> **File:** `SublimationPrintOS_RIP_Integration_Guide.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **RIP Integration Guide** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. RIP/Hot Folder Rules

- Hot folder integration is the default reliable method for Phase 3-4.
- Metadata sidecars should be added when the RIP supports JDF/JMF or custom metadata.
- File writes must use temp file then atomic rename to avoid half-written jobs being consumed.
- If hot folder is unavailable, keep job queued and show retry status.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for RIP Integration Guide.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Cutter_Integration_Guide.md -->

# Cutter Integration Guide

> **Document ID:** DEV-12  
> **File:** `SublimationPrintOS_Cutter_Integration_Guide.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **Cutter Integration Guide** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. Cutter Integration Rules

- Contour cut paths should be exported as SVG/DXF where supported.
- Registration marks and cut line layers must be separated from artwork layers.
- Never send cutter output without preview and job metadata confirmation.
- Keep vendor-specific cutter adapters isolated behind a common interface.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for Cutter Integration Guide.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Hardware_Driver_Spec.md -->

# Hardware Driver Spec

> **Document ID:** DEV-13  
> **File:** `SublimationPrintOS_Hardware_Driver_Spec.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **Hardware Driver Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for Hardware Driver Spec.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 8. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 9. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Plugin_SDK_Documentation.md -->

# Plugin SDK Documentation

> **Document ID:** DEV-14  
> **File:** `SublimationPrintOS_Plugin_SDK_Documentation.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **Plugin SDK Documentation** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. Plugin/Scripting Guardrails

- Plugin system is future-facing and disabled by default until security model is ready.
- Plugins run with explicit permissions for file read/write, export hook, metadata hook, or UI panel.
- No arbitrary execution without admin approval and audit log entry.
- Plugin packages need manifest, version, author, permissions, and compatibility range.
- Script failures must not crash core production workflow.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for Plugin SDK Documentation.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Scripting_API_Reference.md -->

# Scripting API Reference

> **Document ID:** DEV-15  
> **File:** `SublimationPrintOS_Scripting_API_Reference.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **Scripting API Reference** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. RIP/Hot Folder Rules

- Hot folder integration is the default reliable method for Phase 3-4.
- Metadata sidecars should be added when the RIP supports JDF/JMF or custom metadata.
- File writes must use temp file then atomic rename to avoid half-written jobs being consumed.
- If hot folder is unavailable, keep job queued and show retry status.

## 7. Plugin/Scripting Guardrails

- Plugin system is future-facing and disabled by default until security model is ready.
- Plugins run with explicit permissions for file read/write, export hook, metadata hook, or UI panel.
- No arbitrary execution without admin approval and audit log entry.
- Plugin packages need manifest, version, author, permissions, and compatibility range.
- Script failures must not crash core production workflow.

## 8. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for Scripting API Reference.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 10. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 11. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Third_Party_Library_List.md -->

# Third Party Library List

> **Document ID:** DEV-16  
> **File:** `SublimationPrintOS_Third_Party_Library_List.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **Third Party Library List** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. Dependency Evaluation

- Check license compatibility, offline use, maintenance health, Windows support, and binary size.
- Pin versions in lockfiles and document reason for dependency.
- High-risk native dependencies require fallback or isolation.
- Update dependencies through scheduled maintenance, not random feature branches.
- Remove unused packages before release candidate.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for Third Party Library List.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Dependency_Management.md -->

# Dependency Management

> **Document ID:** DEV-17  
> **File:** `SublimationPrintOS_Dependency_Management.md`  
> **Category:** Development Guides  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead + Senior Developers  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Give developers clear coding, module, integration, API, and dependency rules for Phase 0 and Phase 1. These guides reduce rework by creating one development standard for frontend, backend, database, Real-ESRGAN, and future integration work.

This document focuses specifically on **Dependency Management** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Frontend
- Backend
- Database
- AI Upscale Engine
- Canvas Engine
- Nesting Engine
- RIP/Cutter adapters
- Plugins

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

- Use TypeScript for frontend code and typed command contracts for backend communication.
- Keep business logic out of UI components; route through services, repositories, and command handlers.
- Long-running work such as upscale, export, and nesting must run in background workers/queues.
- Every module exposes clear boundaries, inputs, outputs, errors, and logs.
- All new dependencies require license, maintenance, security, and offline-compatibility review.

## 6. Dependency Evaluation

- Check license compatibility, offline use, maintenance health, Windows support, and binary size.
- Pin versions in lockfiles and document reason for dependency.
- High-risk native dependencies require fallback or isolation.
- Update dependencies through scheduled maintenance, not random feature branches.
- Remove unused packages before release candidate.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Tech Lead + Senior Developers.
- [ ] Create implementation tickets for Dependency Management.
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
- [ ] Code examples or contracts are specific enough to implement directly.
- [ ] The guide describes how to log, test, and handle errors.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/dev/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Tech Lead + Senior Developers and any developer assigned to Frontend, Backend, Database, AI Upscale Engine, Canvas Engine, Nesting Engine, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


# Database & Data — 10 Documents (Phase 0)


---

<!-- source-file: SublimationPrintOS_Database_Design_Document.md -->

# Database Design Document

> **Document ID:** DATA-01  
> **File:** `SublimationPrintOS_Database_Design_Document.md`  
> **Category:** Database & Data  
> **Phase:** Phase 0  
> **Owner:** Backend Lead + Data Owner  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the local-first SQLite, AppData, migration, indexing, backup, recovery, retention, seeding, and search approach. Database documents are part of Phase 0 because bad schema choices later create expensive migrations.

This document focuses specifically on **Database Design Document** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Core Data Objects

- app_meta, schema_migrations, settings, users, roles, audit_logs.
- file_assets, designs, design_versions, thumbnails, tags, categories.
- upscale_jobs, upscale_job_items, quality_checks, background_tasks.
- print_jobs, print_pages, export_presets, hardware_devices, device_logs later by phase.
- system_health_checks, crash_reports, backup_runs, update_packages.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Backend Lead + Data Owner.
- [ ] Create implementation tickets for Database Design Document.
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
- [ ] The database design supports migrations, backups, recovery, and FTS5 search.
- [ ] No image binary blobs are stored directly in normal operational tables.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/data/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Backend Lead + Data Owner and any developer assigned to SQLite, AppData storage, Migrations, FTS5 search, Backups, Recovery, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Table_Specifications.md -->

# Table Specifications

> **Document ID:** DATA-02  
> **File:** `SublimationPrintOS_Table_Specifications.md`  
> **Category:** Database & Data  
> **Phase:** Phase 0  
> **Owner:** Backend Lead + Data Owner  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the local-first SQLite, AppData, migration, indexing, backup, recovery, retention, seeding, and search approach. Database documents are part of Phase 0 because bad schema choices later create expensive migrations.

This document focuses specifically on **Table Specifications** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Core Data Objects

- app_meta, schema_migrations, settings, users, roles, audit_logs.
- file_assets, designs, design_versions, thumbnails, tags, categories.
- upscale_jobs, upscale_job_items, quality_checks, background_tasks.
- print_jobs, print_pages, export_presets, hardware_devices, device_logs later by phase.
- system_health_checks, crash_reports, backup_runs, update_packages.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Backend Lead + Data Owner.
- [ ] Create implementation tickets for Table Specifications.
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
- [ ] The database design supports migrations, backups, recovery, and FTS5 search.
- [ ] No image binary blobs are stored directly in normal operational tables.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/data/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Backend Lead + Data Owner and any developer assigned to SQLite, AppData storage, Migrations, FTS5 search, Backups, Recovery, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Index_Strategy.md -->

# Index Strategy

> **Document ID:** DATA-03  
> **File:** `SublimationPrintOS_Index_Strategy.md`  
> **Category:** Database & Data  
> **Phase:** Phase 0  
> **Owner:** Backend Lead + Data Owner  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the local-first SQLite, AppData, migration, indexing, backup, recovery, retention, seeding, and search approach. Database documents are part of Phase 0 because bad schema choices later create expensive migrations.

This document focuses specifically on **Index Strategy** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Search and Index Rules

- Use FTS5 for design name, SKU, category, tags, notes, and optional searchable metadata.
- Use normal B-tree indexes for status, created_at, updated_at, category_id, job_id, and foreign keys.
- Do not index large binary content; store files on disk and metadata in SQLite.
- Measure search target against 50,000+ design records during Phase 0/1 tests.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Backend Lead + Data Owner.
- [ ] Create implementation tickets for Index Strategy.
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
- [ ] The database design supports migrations, backups, recovery, and FTS5 search.
- [ ] No image binary blobs are stored directly in normal operational tables.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/data/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Backend Lead + Data Owner and any developer assigned to SQLite, AppData storage, Migrations, FTS5 search, Backups, Recovery, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Migration_Scripts.md -->

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


---

<!-- source-file: SublimationPrintOS_Data_Dictionary.md -->

# Data Dictionary

> **Document ID:** DATA-05  
> **File:** `SublimationPrintOS_Data_Dictionary.md`  
> **Category:** Database & Data  
> **Phase:** Phase 0  
> **Owner:** Backend Lead + Data Owner  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the local-first SQLite, AppData, migration, indexing, backup, recovery, retention, seeding, and search approach. Database documents are part of Phase 0 because bad schema choices later create expensive migrations.

This document focuses specifically on **Data Dictionary** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Data Dictionary Rules

- Every column includes name, type, nullability, default, description, owner, and example.
- Every enum includes allowed values and transition rules.
- Every timestamp states timezone/storage format.
- Every path column states whether it is relative to AppData root.
- Every file-backed record includes checksum strategy.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Backend Lead + Data Owner.
- [ ] Create implementation tickets for Data Dictionary.
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
- [ ] The database design supports migrations, backups, recovery, and FTS5 search.
- [ ] No image binary blobs are stored directly in normal operational tables.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/data/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Backend Lead + Data Owner and any developer assigned to SQLite, AppData storage, Migrations, FTS5 search, Backups, Recovery, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Data_Retention_Policy.md -->

# Data Retention Policy

> **Document ID:** DATA-06  
> **File:** `SublimationPrintOS_Data_Retention_Policy.md`  
> **Category:** Database & Data  
> **Phase:** Phase 0  
> **Owner:** Backend Lead + Data Owner  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the local-first SQLite, AppData, migration, indexing, backup, recovery, retention, seeding, and search approach. Database documents are part of Phase 0 because bad schema choices later create expensive migrations.

This document focuses specifically on **Data Retention Policy** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Retention Defaults

- Processing logs: 90 days configurable.
- Rejected designs: 30 days configurable, with manual keep option.
- Completed jobs: retained indefinitely by default, configurable later.
- Crash reports: 30-90 days depending on storage limits.
- Backups: daily recent backups plus before-update and before-migration backups.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Backend Lead + Data Owner.
- [ ] Create implementation tickets for Data Retention Policy.
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
- [ ] The database design supports migrations, backups, recovery, and FTS5 search.
- [ ] No image binary blobs are stored directly in normal operational tables.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/data/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Backend Lead + Data Owner and any developer assigned to SQLite, AppData storage, Migrations, FTS5 search, Backups, Recovery, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Backup_Strategy.md -->

# Backup Strategy

> **Document ID:** DATA-07  
> **File:** `SublimationPrintOS_Backup_Strategy.md`  
> **Category:** Database & Data  
> **Phase:** Phase 0  
> **Owner:** Backend Lead + Data Owner  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the local-first SQLite, AppData, migration, indexing, backup, recovery, retention, seeding, and search approach. Database documents are part of Phase 0 because bad schema choices later create expensive migrations.

This document focuses specifically on **Backup Strategy** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Backup Rules

- Create daily SQLite backup when app starts or at configured idle time.
- Create backup before migration and before update.
- Verify backup by opening database header/checksum after creation.
- Store backups outside temp folder and keep retention policy configurable.
- Backup should include DB, settings, and metadata; design assets backup can be separate/large.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Backend Lead + Data Owner.
- [ ] Create implementation tickets for Backup Strategy.
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
- [ ] The database design supports migrations, backups, recovery, and FTS5 search.
- [ ] No image binary blobs are stored directly in normal operational tables.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/data/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Backend Lead + Data Owner and any developer assigned to SQLite, AppData storage, Migrations, FTS5 search, Backups, Recovery, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Recovery_Procedure.md -->

# Recovery Procedure

> **Document ID:** DATA-08  
> **File:** `SublimationPrintOS_Recovery_Procedure.md`  
> **Category:** Database & Data  
> **Phase:** Phase 0  
> **Owner:** Backend Lead + Data Owner  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the local-first SQLite, AppData, migration, indexing, backup, recovery, retention, seeding, and search approach. Database documents are part of Phase 0 because bad schema choices later create expensive migrations.

This document focuses specifically on **Recovery Procedure** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Recovery Rules

- On launch, detect dirty shutdown and show recovery choices.
- If SQLite corruption is detected, attempt safe repair then offer latest verified backup.
- Never overwrite current data until user confirms restore.
- After restore, run health check and migration validation.
- Write recovery report with before/after database versions and chosen action.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Backend Lead + Data Owner.
- [ ] Create implementation tickets for Recovery Procedure.
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
- [ ] The database design supports migrations, backups, recovery, and FTS5 search.
- [ ] No image binary blobs are stored directly in normal operational tables.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/data/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Backend Lead + Data Owner and any developer assigned to SQLite, AppData storage, Migrations, FTS5 search, Backups, Recovery, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Data_Seeding_Scripts.md -->

# Data Seeding Scripts

> **Document ID:** DATA-09  
> **File:** `SublimationPrintOS_Data_Seeding_Scripts.md`  
> **Category:** Database & Data  
> **Phase:** Phase 0  
> **Owner:** Backend Lead + Data Owner  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the local-first SQLite, AppData, migration, indexing, backup, recovery, retention, seeding, and search approach. Database documents are part of Phase 0 because bad schema choices later create expensive migrations.

This document focuses specifically on **Data Seeding Scripts** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. RIP/Hot Folder Rules

- Hot folder integration is the default reliable method for Phase 3-4.
- Metadata sidecars should be added when the RIP supports JDF/JMF or custom metadata.
- File writes must use temp file then atomic rename to avoid half-written jobs being consumed.
- If hot folder is unavailable, keep job queued and show retry status.

## 7. Seed Data

- Default roles: Admin, Designer, Worker, Viewer.
- Default settings: dark mode, mm units, 300 DPI, A4 page, safe autosave interval.
- Default substrate placeholders for later press profiles without inventory tracking.
- Default quality-check thresholds for blur/resolution warnings.
- Default keyboard shortcuts and feature flags.

## 8. Implementation Checklist

- [ ] Review this document with the owner: Backend Lead + Data Owner.
- [ ] Create implementation tickets for Data Seeding Scripts.
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


---

<!-- source-file: SublimationPrintOS_FTS5_Search_Config.md -->

# FTS5 Search Config

> **Document ID:** DATA-10  
> **File:** `SublimationPrintOS_FTS5_Search_Config.md`  
> **Category:** Database & Data  
> **Phase:** Phase 0  
> **Owner:** Backend Lead + Data Owner  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the local-first SQLite, AppData, migration, indexing, backup, recovery, retention, seeding, and search approach. Database documents are part of Phase 0 because bad schema choices later create expensive migrations.

This document focuses specifically on **FTS5 Search Config** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Search and Index Rules

- Use FTS5 for design name, SKU, category, tags, notes, and optional searchable metadata.
- Use normal B-tree indexes for status, created_at, updated_at, category_id, job_id, and foreign keys.
- Do not index large binary content; store files on disk and metadata in SQLite.
- Measure search target against 50,000+ design records during Phase 0/1 tests.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Backend Lead + Data Owner.
- [ ] Create implementation tickets for FTS5 Search Config.
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
- [ ] The database design supports migrations, backups, recovery, and FTS5 search.
- [ ] No image binary blobs are stored directly in normal operational tables.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/data/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Backend Lead + Data Owner and any developer assigned to SQLite, AppData storage, Migrations, FTS5 search, Backups, Recovery, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


# Hardware Integration — 14 Documents (Phase 3-4)


---

<!-- source-file: SublimationPrintOS_Printer_Integration_Spec.md -->

# Printer Integration Spec

> **Document ID:** HW-01  
> **File:** `SublimationPrintOS_Printer_Integration_Spec.md`  
> **Category:** Hardware Integration  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Integration Lead + Backend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS talks to production hardware and RIP software in Phase 3-4. Hardware integration must be safe, observable, retryable, and usable even when direct device APIs are not available.

This document focuses specifically on **Printer Integration Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Printer Integration Rules

- Phase 3-4 starts with hot folder workflow before deeper vendor APIs.
- Queue job output with metadata sidecar: job id, page count, mirror flag, paper size, DPI, ICC profile.
- Record printer status when available but do not block exports if direct status is unavailable.
- Support retry and clear user-facing errors for failed hot folder writes.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Hardware Integration Lead + Backend Lead.
- [ ] Create implementation tickets for Printer Integration Spec.
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


---

<!-- source-file: SublimationPrintOS_Cutter_Integration_Spec.md -->

# Cutter Integration Spec

> **Document ID:** HW-02  
> **File:** `SublimationPrintOS_Cutter_Integration_Spec.md`  
> **Category:** Hardware Integration  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Integration Lead + Backend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS talks to production hardware and RIP software in Phase 3-4. Hardware integration must be safe, observable, retryable, and usable even when direct device APIs are not available.

This document focuses specifically on **Cutter Integration Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Cutter Integration Rules

- Contour cut paths should be exported as SVG/DXF where supported.
- Registration marks and cut line layers must be separated from artwork layers.
- Never send cutter output without preview and job metadata confirmation.
- Keep vendor-specific cutter adapters isolated behind a common interface.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Hardware Integration Lead + Backend Lead.
- [ ] Create implementation tickets for Cutter Integration Spec.
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


---

<!-- source-file: SublimationPrintOS_Heat_Press_Integration_Spec.md -->

# Heat Press Integration Spec

> **Document ID:** HW-03  
> **File:** `SublimationPrintOS_Heat_Press_Integration_Spec.md`  
> **Category:** Hardware Integration  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Integration Lead + Backend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS talks to production hardware and RIP software in Phase 3-4. Hardware integration must be safe, observable, retryable, and usable even when direct device APIs are not available.

This document focuses specifically on **Heat Press Integration Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Heat Press Rules

- Phase 3-4 minimum is press timer and press profile display, not full IoT control.
- Show substrate, temperature, time, pressure, mirror status, and warning notes.
- Provide audible/visual timer completion with manual confirmation.
- Log timer start, pause, completion, and operator notes.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Hardware Integration Lead + Backend Lead.
- [ ] Create implementation tickets for Heat Press Integration Spec.
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


---

<!-- source-file: SublimationPrintOS_Barcode_Scanner_Integration.md -->

# Barcode Scanner Integration

> **Document ID:** HW-04  
> **File:** `SublimationPrintOS_Barcode_Scanner_Integration.md`  
> **Category:** Hardware Integration  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Integration Lead + Backend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS talks to production hardware and RIP software in Phase 3-4. Hardware integration must be safe, observable, retryable, and usable even when direct device APIs are not available.

This document focuses specifically on **Barcode Scanner Integration** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Scanner Rules

- Support USB HID keyboard scanner first; camera scanning is later.
- Scanner input must focus safe scan fields and debounce duplicate scans.
- Scan payload can represent job id, sheet id, design SKU, hardware device code, or support code.
- Wrong scan shows clear expected/actual value and does not continue automatically.
- All scans create audit/debug log entries for support.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Hardware Integration Lead + Backend Lead.
- [ ] Create implementation tickets for Barcode Scanner Integration.
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


---

<!-- source-file: SublimationPrintOS_Hot_Folder_Spec.md -->

# Hot Folder Spec

> **Document ID:** HW-05  
> **File:** `SublimationPrintOS_Hot_Folder_Spec.md`  
> **Category:** Hardware Integration  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Integration Lead + Backend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS talks to production hardware and RIP software in Phase 3-4. Hardware integration must be safe, observable, retryable, and usable even when direct device APIs are not available.

This document focuses specifically on **Hot Folder Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. RIP/Hot Folder Rules

- Hot folder integration is the default reliable method for Phase 3-4.
- Metadata sidecars should be added when the RIP supports JDF/JMF or custom metadata.
- File writes must use temp file then atomic rename to avoid half-written jobs being consumed.
- If hot folder is unavailable, keep job queued and show retry status.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Hardware Integration Lead + Backend Lead.
- [ ] Create implementation tickets for Hot Folder Spec.
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


---

<!-- source-file: SublimationPrintOS_RIP_Software_Integration.md -->

# RIP Software Integration

> **Document ID:** HW-06  
> **File:** `SublimationPrintOS_RIP_Software_Integration.md`  
> **Category:** Hardware Integration  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Integration Lead + Backend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS talks to production hardware and RIP software in Phase 3-4. Hardware integration must be safe, observable, retryable, and usable even when direct device APIs are not available.

This document focuses specifically on **RIP Software Integration** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. RIP/Hot Folder Rules

- Hot folder integration is the default reliable method for Phase 3-4.
- Metadata sidecars should be added when the RIP supports JDF/JMF or custom metadata.
- File writes must use temp file then atomic rename to avoid half-written jobs being consumed.
- If hot folder is unavailable, keep job queued and show retry status.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Hardware Integration Lead + Backend Lead.
- [ ] Create implementation tickets for RIP Software Integration.
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


---

<!-- source-file: SublimationPrintOS_Caldera_Integration_Guide.md -->

# Caldera Integration Guide

> **Document ID:** HW-07  
> **File:** `SublimationPrintOS_Caldera_Integration_Guide.md`  
> **Category:** Hardware Integration  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Integration Lead + Backend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS talks to production hardware and RIP software in Phase 3-4. Hardware integration must be safe, observable, retryable, and usable even when direct device APIs are not available.

This document focuses specifically on **Caldera Integration Guide** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. RIP/Hot Folder Rules

- Hot folder integration is the default reliable method for Phase 3-4.
- Metadata sidecars should be added when the RIP supports JDF/JMF or custom metadata.
- File writes must use temp file then atomic rename to avoid half-written jobs being consumed.
- If hot folder is unavailable, keep job queued and show retry status.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Hardware Integration Lead + Backend Lead.
- [ ] Create implementation tickets for Caldera Integration Guide.
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


---

<!-- source-file: SublimationPrintOS_Wasatch_Integration_Guide.md -->

# Wasatch Integration Guide

> **Document ID:** HW-08  
> **File:** `SublimationPrintOS_Wasatch_Integration_Guide.md`  
> **Category:** Hardware Integration  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Integration Lead + Backend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS talks to production hardware and RIP software in Phase 3-4. Hardware integration must be safe, observable, retryable, and usable even when direct device APIs are not available.

This document focuses specifically on **Wasatch Integration Guide** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. RIP/Hot Folder Rules

- Hot folder integration is the default reliable method for Phase 3-4.
- Metadata sidecars should be added when the RIP supports JDF/JMF or custom metadata.
- File writes must use temp file then atomic rename to avoid half-written jobs being consumed.
- If hot folder is unavailable, keep job queued and show retry status.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Hardware Integration Lead + Backend Lead.
- [ ] Create implementation tickets for Wasatch Integration Guide.
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


---

<!-- source-file: SublimationPrintOS_Onyx_Integration_Guide.md -->

# Onyx Integration Guide

> **Document ID:** HW-09  
> **File:** `SublimationPrintOS_Onyx_Integration_Guide.md`  
> **Category:** Hardware Integration  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Integration Lead + Backend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS talks to production hardware and RIP software in Phase 3-4. Hardware integration must be safe, observable, retryable, and usable even when direct device APIs are not available.

This document focuses specifically on **Onyx Integration Guide** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. RIP/Hot Folder Rules

- Hot folder integration is the default reliable method for Phase 3-4.
- Metadata sidecars should be added when the RIP supports JDF/JMF or custom metadata.
- File writes must use temp file then atomic rename to avoid half-written jobs being consumed.
- If hot folder is unavailable, keep job queued and show retry status.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Hardware Integration Lead + Backend Lead.
- [ ] Create implementation tickets for Onyx Integration Guide.
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


---

<!-- source-file: SublimationPrintOS_Summa_Cutter_Integration.md -->

# Summa Cutter Integration

> **Document ID:** HW-10  
> **File:** `SublimationPrintOS_Summa_Cutter_Integration.md`  
> **Category:** Hardware Integration  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Integration Lead + Backend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS talks to production hardware and RIP software in Phase 3-4. Hardware integration must be safe, observable, retryable, and usable even when direct device APIs are not available.

This document focuses specifically on **Summa Cutter Integration** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Cutter Integration Rules

- Contour cut paths should be exported as SVG/DXF where supported.
- Registration marks and cut line layers must be separated from artwork layers.
- Never send cutter output without preview and job metadata confirmation.
- Keep vendor-specific cutter adapters isolated behind a common interface.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Hardware Integration Lead + Backend Lead.
- [ ] Create implementation tickets for Summa Cutter Integration.
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


---

<!-- source-file: SublimationPrintOS_Graphtec_Cutter_Integration.md -->

# Graphtec Cutter Integration

> **Document ID:** HW-11  
> **File:** `SublimationPrintOS_Graphtec_Cutter_Integration.md`  
> **Category:** Hardware Integration  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Integration Lead + Backend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS talks to production hardware and RIP software in Phase 3-4. Hardware integration must be safe, observable, retryable, and usable even when direct device APIs are not available.

This document focuses specifically on **Graphtec Cutter Integration** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Cutter Integration Rules

- Contour cut paths should be exported as SVG/DXF where supported.
- Registration marks and cut line layers must be separated from artwork layers.
- Never send cutter output without preview and job metadata confirmation.
- Keep vendor-specific cutter adapters isolated behind a common interface.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Hardware Integration Lead + Backend Lead.
- [ ] Create implementation tickets for Graphtec Cutter Integration.
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


---

<!-- source-file: SublimationPrintOS_Hardware_Communication_Protocol.md -->

# Hardware Communication Protocol

> **Document ID:** HW-12  
> **File:** `SublimationPrintOS_Hardware_Communication_Protocol.md`  
> **Category:** Hardware Integration  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Integration Lead + Backend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS talks to production hardware and RIP software in Phase 3-4. Hardware integration must be safe, observable, retryable, and usable even when direct device APIs are not available.

This document focuses specifically on **Hardware Communication Protocol** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Implementation Checklist

- [ ] Review this document with the owner: Hardware Integration Lead + Backend Lead.
- [ ] Create implementation tickets for Hardware Communication Protocol.
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
- [ ] Hardware failure paths, retries, and manual fallback are documented.
- [ ] The integration can be simulated before physical hardware is connected.

## 8. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 9. Handoff Notes

- Store this file in the project repository under `docs/hw/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Hardware Integration Lead + Backend Lead and any developer assigned to Printers, Cutters, Heat Press Timer, Barcode Scanner, RIP Hot Folders, Device Discovery, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Device_Discovery_Spec.md -->

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


---

<!-- source-file: SublimationPrintOS_Driver_Installation_Guide.md -->

# Driver Installation Guide

> **Document ID:** HW-14  
> **File:** `SublimationPrintOS_Driver_Installation_Guide.md`  
> **Category:** Hardware Integration  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Integration Lead + Backend Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define how SublimationPrintOS talks to production hardware and RIP software in Phase 3-4. Hardware integration must be safe, observable, retryable, and usable even when direct device APIs are not available.

This document focuses specifically on **Driver Installation Guide** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Driver Installation Rules

- Do not bundle third-party drivers unless license allows.
- Provide vendor driver checklist and links/placeholders in documentation, not raw driver files.
- Installer verifies only app prerequisites; device drivers are user/vendor installed.
- Health check reports missing printer/cutter setup with clear next steps.
- Keep device driver setup separate from core app install failure path.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Hardware Integration Lead + Backend Lead.
- [ ] Create implementation tickets for Driver Installation Guide.
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


# Testing & QA — 18 Documents (Ongoing)


---

<!-- source-file: SublimationPrintOS_Test_Plan.md -->

# Test Plan

> **Document ID:** QA-01  
> **File:** `SublimationPrintOS_Test_Plan.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **Test Plan** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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
- [ ] Create implementation tickets for Test Plan.
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


---

<!-- source-file: SublimationPrintOS_Test_Strategy.md -->

# Test Strategy

> **Document ID:** QA-02  
> **File:** `SublimationPrintOS_Test_Strategy.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **Test Strategy** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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
- [ ] Create implementation tickets for Test Strategy.
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


---

<!-- source-file: SublimationPrintOS_Unit_Test_Spec.md -->

# Unit Test Spec

> **Document ID:** QA-03  
> **File:** `SublimationPrintOS_Unit_Test_Spec.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **Unit Test Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Unit Test Targets

- Settings validation, path normalization, unit conversion, job status transitions, metadata parsing.
- Database repositories and migrations with in-memory or temp SQLite.
- Nesting helper math, image validation helpers, export filename builders.

## 7. Implementation Checklist

- [ ] Review this document with the owner: QA Lead + Automation Engineer.
- [ ] Create implementation tickets for Unit Test Spec.
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
- [ ] The document maps tests to requirements and milestone exit criteria.
- [ ] The document defines pass/fail thresholds and evidence to attach.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/qa/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: QA Lead + Automation Engineer and any developer assigned to Unit tests, Integration tests, System tests, Performance tests, Hardware tests, Color/nesting/upscale tests, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Integration_Test_Spec.md -->

# Integration Test Spec

> **Document ID:** QA-04  
> **File:** `SublimationPrintOS_Integration_Test_Spec.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **Integration Test Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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
- [ ] Create implementation tickets for Integration Test Spec.
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


---

<!-- source-file: SublimationPrintOS_System_Test_Spec.md -->

# System Test Spec

> **Document ID:** QA-05  
> **File:** `SublimationPrintOS_System_Test_Spec.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **System Test Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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
- [ ] Create implementation tickets for System Test Spec.
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


---

<!-- source-file: SublimationPrintOS_UAT_Test_Cases.md -->

# UAT Test Cases

> **Document ID:** QA-06  
> **File:** `SublimationPrintOS_UAT_Test_Cases.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **UAT Test Cases** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. UAT Scenario Set

- Admin installs app, sets company, default paper, DPI, theme, and runs health check.
- Designer uploads image, upscales 4×, reviews output, approves to store.
- Worker builds a small basket, configures sheet settings, previews layout, exports file.
- QA user checks logs, diagnostic ZIP, backup, and restore path.
- Hardware simulation sends output to hot folder and handles unavailable folder.

## 7. Implementation Checklist

- [ ] Review this document with the owner: QA Lead + Automation Engineer.
- [ ] Create implementation tickets for UAT Test Cases.
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
- [ ] The document maps tests to requirements and milestone exit criteria.
- [ ] The document defines pass/fail thresholds and evidence to attach.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/qa/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: QA Lead + Automation Engineer and any developer assigned to Unit tests, Integration tests, System tests, Performance tests, Hardware tests, Color/nesting/upscale tests, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Performance_Test_Plan.md -->

# Performance Test Plan

> **Document ID:** QA-07  
> **File:** `SublimationPrintOS_Performance_Test_Plan.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **Performance Test Plan** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Performance Targets

- Cold start target: 5 seconds, maximum 10 seconds.
- Canvas pan/drag target: 60 FPS, minimum 30 FPS for accepted stress target.
- Design Store search should be measured on 50,000+ records.
- Nesting and export operations must run in background without freezing UI.

## 7. Implementation Checklist

- [ ] Review this document with the owner: QA Lead + Automation Engineer.
- [ ] Create implementation tickets for Performance Test Plan.
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
- [ ] The document maps tests to requirements and milestone exit criteria.
- [ ] The document defines pass/fail thresholds and evidence to attach.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/qa/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: QA Lead + Automation Engineer and any developer assigned to Unit tests, Integration tests, System tests, Performance tests, Hardware tests, Color/nesting/upscale tests, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Load_Test_Spec.md -->

# Load Test Spec

> **Document ID:** QA-08  
> **File:** `SublimationPrintOS_Load_Test_Spec.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **Load Test Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Performance Targets

- Cold start target: 5 seconds, maximum 10 seconds.
- Canvas pan/drag target: 60 FPS, minimum 30 FPS for accepted stress target.
- Design Store search should be measured on 50,000+ records.
- Nesting and export operations must run in background without freezing UI.

## 7. Implementation Checklist

- [ ] Review this document with the owner: QA Lead + Automation Engineer.
- [ ] Create implementation tickets for Load Test Spec.
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
- [ ] The document maps tests to requirements and milestone exit criteria.
- [ ] The document defines pass/fail thresholds and evidence to attach.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/qa/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: QA Lead + Automation Engineer and any developer assigned to Unit tests, Integration tests, System tests, Performance tests, Hardware tests, Color/nesting/upscale tests, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Stress_Test_Spec.md -->

# Stress Test Spec

> **Document ID:** QA-09  
> **File:** `SublimationPrintOS_Stress_Test_Spec.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **Stress Test Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Performance Targets

- Cold start target: 5 seconds, maximum 10 seconds.
- Canvas pan/drag target: 60 FPS, minimum 30 FPS for accepted stress target.
- Design Store search should be measured on 50,000+ records.
- Nesting and export operations must run in background without freezing UI.

## 7. Implementation Checklist

- [ ] Review this document with the owner: QA Lead + Automation Engineer.
- [ ] Create implementation tickets for Stress Test Spec.
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
- [ ] The document maps tests to requirements and milestone exit criteria.
- [ ] The document defines pass/fail thresholds and evidence to attach.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/qa/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: QA Lead + Automation Engineer and any developer assigned to Unit tests, Integration tests, System tests, Performance tests, Hardware tests, Color/nesting/upscale tests, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Hardware_Test_Protocol.md -->

# Hardware Test Protocol

> **Document ID:** QA-10  
> **File:** `SublimationPrintOS_Hardware_Test_Protocol.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **Hardware Test Protocol** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Hardware Test Matrix

- At least one Epson printer/hot-folder workflow; add Roland/Mimaki/Mutoh later if available.
- At least one Summa/Graphtec cutter simulation or test unit.
- USB HID barcode scanner test for job QR and device setup screens.
- Network share disconnection and hot folder retry scenario.

## 7. Implementation Checklist

- [ ] Review this document with the owner: QA Lead + Automation Engineer.
- [ ] Create implementation tickets for Hardware Test Protocol.
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
- [ ] The document maps tests to requirements and milestone exit criteria.
- [ ] The document defines pass/fail thresholds and evidence to attach.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/qa/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: QA Lead + Automation Engineer and any developer assigned to Unit tests, Integration tests, System tests, Performance tests, Hardware tests, Color/nesting/upscale tests, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Color_Accuracy_Test.md -->

# Color Accuracy Test

> **Document ID:** QA-11  
> **File:** `SublimationPrintOS_Color_Accuracy_Test.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **Color Accuracy Test** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Visual Baseline

- Default mode is dark because production floors often have mixed lighting.
- Use high contrast for labels, warnings, health status, and worker actions.
- Never encode status by color alone; pair color with icon and text.
- Reserve red for destructive/blocking errors, amber for warning, green for ready/pass, blue for informational actions.

## 7. Color Accuracy Test Rules

- Use known test image/color bar and record substrate, paper, printer, ICC, temperature/time.
- Compare visual output and measured values if device available.
- Flag unacceptable color shift, banding, missing ICC, or wrong mirror setting.
- Keep test sheets and photos linked to build/version.
- Color tests are informational in early phases and release-blocking in export/color phases.

## 8. Implementation Checklist

- [ ] Review this document with the owner: QA Lead + Automation Engineer.
- [ ] Create implementation tickets for Color Accuracy Test.
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
- [ ] The document maps tests to requirements and milestone exit criteria.
- [ ] The document defines pass/fail thresholds and evidence to attach.

## 10. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 11. Handoff Notes

- Store this file in the project repository under `docs/qa/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: QA Lead + Automation Engineer and any developer assigned to Unit tests, Integration tests, System tests, Performance tests, Hardware tests, Color/nesting/upscale tests, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Nesting_Accuracy_Test.md -->

# Nesting Accuracy Test

> **Document ID:** QA-12  
> **File:** `SublimationPrintOS_Nesting_Accuracy_Test.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **Nesting Accuracy Test** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Nesting Accuracy Test Rules

- Verify margins, gaps, bleed, safe zone, item count, rotation, page count, and no overlap.
- Use standard jobs: 10, 50, 100, and mixed-size items.
- Compare expected vs actual sheet efficiency and coordinate bounds.
- Test cancellation and re-run determinism.
- Verify manual adjustment does not break export marks.

## 7. Implementation Checklist

- [ ] Review this document with the owner: QA Lead + Automation Engineer.
- [ ] Create implementation tickets for Nesting Accuracy Test.
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
- [ ] The document maps tests to requirements and milestone exit criteria.
- [ ] The document defines pass/fail thresholds and evidence to attach.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/qa/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: QA Lead + Automation Engineer and any developer assigned to Unit tests, Integration tests, System tests, Performance tests, Hardware tests, Color/nesting/upscale tests, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Upscale_Quality_Test.md -->

# Upscale Quality Test

> **Document ID:** QA-13  
> **File:** `SublimationPrintOS_Upscale_Quality_Test.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **Upscale Quality Test** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Upscale Quality Test Rules

- Test JPG, PNG, TIFF, WEBP inputs and rejected unsupported files.
- Test 2×/4× and GPU failure CPU fallback.
- Compare before/after output dimensions, DPI metadata, sharpness score, and artifact warnings.
- Check output checksum, log completeness, and no temp-file leftovers.
- Large images must use tiling or safe memory handling.

## 7. Implementation Checklist

- [ ] Review this document with the owner: QA Lead + Automation Engineer.
- [ ] Create implementation tickets for Upscale Quality Test.
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
- [ ] The document maps tests to requirements and milestone exit criteria.
- [ ] The document defines pass/fail thresholds and evidence to attach.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/qa/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: QA Lead + Automation Engineer and any developer assigned to Unit tests, Integration tests, System tests, Performance tests, Hardware tests, Color/nesting/upscale tests, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Regression_Test_Suite.md -->

# Regression Test Suite

> **Document ID:** QA-14  
> **File:** `SublimationPrintOS_Regression_Test_Suite.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **Regression Test Suite** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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
- [ ] Create implementation tickets for Regression Test Suite.
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


---

<!-- source-file: SublimationPrintOS_Smoke_Test_Checklist.md -->

# Smoke Test Checklist

> **Document ID:** QA-15  
> **File:** `SublimationPrintOS_Smoke_Test_Checklist.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **Smoke Test Checklist** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Smoke Checklist

- Install on clean Windows 10/11 VM.
- Launch app, open dashboard, settings, health check, logs, and upscale test.
- Run one 4× upscale and verify output file appears.
- Simulate GPU unavailable and verify CPU fallback path.
- Force close and verify recovery dialog or clean-session behavior.

## 7. Implementation Checklist

- [ ] Review this document with the owner: QA Lead + Automation Engineer.
- [ ] Create implementation tickets for Smoke Test Checklist.
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
- [ ] The document maps tests to requirements and milestone exit criteria.
- [ ] The document defines pass/fail thresholds and evidence to attach.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/qa/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: QA Lead + Automation Engineer and any developer assigned to Unit tests, Integration tests, System tests, Performance tests, Hardware tests, Color/nesting/upscale tests, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Bug_Report_Template.md -->

# Bug Report Template

> **Document ID:** QA-16  
> **File:** `SublimationPrintOS_Bug_Report_Template.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **Bug Report Template** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Defect Workflow

- New → Triage → Assigned → In Progress → Ready for QA → Verified → Closed.
- Severity P0 blocks release; P1 blocks milestone; P2 planned; P3 backlog.
- Bug reports must include build version, module, steps, expected, actual, logs, screenshots, and data safety impact.

## 7. Implementation Checklist

- [ ] Review this document with the owner: QA Lead + Automation Engineer.
- [ ] Create implementation tickets for Bug Report Template.
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
- [ ] The document maps tests to requirements and milestone exit criteria.
- [ ] The document defines pass/fail thresholds and evidence to attach.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/qa/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: QA Lead + Automation Engineer and any developer assigned to Unit tests, Integration tests, System tests, Performance tests, Hardware tests, Color/nesting/upscale tests, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_QA_Checklist.md -->

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


---

<!-- source-file: SublimationPrintOS_Test_Automation_Strategy.md -->

# Test Automation Strategy

> **Document ID:** QA-18  
> **File:** `SublimationPrintOS_Test_Automation_Strategy.md`  
> **Category:** Testing & QA  
> **Phase:** Ongoing  
> **Owner:** QA Lead + Automation Engineer  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the ongoing quality system for all phases. QA documentation turns every requirement into tests, protects Phase 0 stability, and prevents regressions while the app grows into nesting, export, and hardware features.

This document focuses specifically on **Test Automation Strategy** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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
- [ ] Create implementation tickets for Test Automation Strategy.
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


# Deployment & Release — 11 Documents (Phase 5-6)


---

<!-- source-file: SublimationPrintOS_Deployment_Plan.md -->

# Deployment Plan

> **Document ID:** REL-01  
> **File:** `SublimationPrintOS_Deployment_Plan.md`  
> **Category:** Deployment & Release  
> **Phase:** Phase 5-6  
> **Owner:** DevOps Lead + Release Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the release system for installers, builds, versioning, silent install, portable mode, update, rollback, release notes, release checklist, and go-live. Release documents become critical in Phase 5-6 when the product moves to beta and GA.

This document focuses specifically on **Deployment Plan** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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
- [ ] Create implementation tickets for Deployment Plan.
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


---

<!-- source-file: SublimationPrintOS_Release_Notes_Template.md -->

# Release Notes Template

> **Document ID:** REL-02  
> **File:** `SublimationPrintOS_Release_Notes_Template.md`  
> **Category:** Deployment & Release  
> **Phase:** Phase 5-6  
> **Owner:** DevOps Lead + Release Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the release system for installers, builds, versioning, silent install, portable mode, update, rollback, release notes, release checklist, and go-live. Release documents become critical in Phase 5-6 when the product moves to beta and GA.

This document focuses specifically on **Release Notes Template** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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
- [ ] Create implementation tickets for Release Notes Template.
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


---

<!-- source-file: SublimationPrintOS_Version_Control_Strategy.md -->

# Version Control Strategy

> **Document ID:** REL-03  
> **File:** `SublimationPrintOS_Version_Control_Strategy.md`  
> **Category:** Deployment & Release  
> **Phase:** Phase 5-6  
> **Owner:** DevOps Lead + Release Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the release system for installers, builds, versioning, silent install, portable mode, update, rollback, release notes, release checklist, and go-live. Release documents become critical in Phase 5-6 when the product moves to beta and GA.

This document focuses specifically on **Version Control Strategy** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Versioning Rules

- Use semantic versioning: major.minor.patch plus build metadata.
- Every release candidate gets Git tag, changelog, artifact hash, and release notes.
- Database schema version is separate but mapped to app version.
- Feature flags record defaults per release.
- Hotfix branches include only approved fixes and release documentation.

## 7. Implementation Checklist

- [ ] Review this document with the owner: DevOps Lead + Release Manager.
- [ ] Create implementation tickets for Version Control Strategy.
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


---

<!-- source-file: SublimationPrintOS_Build_Process.md -->

# Build Process

> **Document ID:** REL-04  
> **File:** `SublimationPrintOS_Build_Process.md`  
> **Category:** Deployment & Release  
> **Phase:** Phase 5-6  
> **Owner:** DevOps Lead + Release Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the release system for installers, builds, versioning, silent install, portable mode, update, rollback, release notes, release checklist, and go-live. Release documents become critical in Phase 5-6 when the product moves to beta and GA.

This document focuses specifically on **Build Process** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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
- [ ] Create implementation tickets for Build Process.
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


---

<!-- source-file: SublimationPrintOS_Installer_Spec.md -->

# Installer Spec

> **Document ID:** REL-05  
> **File:** `SublimationPrintOS_Installer_Spec.md`  
> **Category:** Deployment & Release  
> **Phase:** Phase 5-6  
> **Owner:** DevOps Lead + Release Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the release system for installers, builds, versioning, silent install, portable mode, update, rollback, release notes, release checklist, and go-live. Release documents become critical in Phase 5-6 when the product moves to beta and GA.

This document focuses specifically on **Installer Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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
- [ ] Create implementation tickets for Installer Spec.
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


---

<!-- source-file: SublimationPrintOS_Silent_Install_Guide.md -->

# Silent Install Guide

> **Document ID:** REL-06  
> **File:** `SublimationPrintOS_Silent_Install_Guide.md`  
> **Category:** Deployment & Release  
> **Phase:** Phase 5-6  
> **Owner:** DevOps Lead + Release Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the release system for installers, builds, versioning, silent install, portable mode, update, rollback, release notes, release checklist, and go-live. Release documents become critical in Phase 5-6 when the product moves to beta and GA.

This document focuses specifically on **Silent Install Guide** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Silent Install Rules

- Support install path, desktop shortcut, start menu shortcut, update policy, and portable disable flags.
- Return proper exit codes for success, reboot required, permission failure, dependency failure, and rollback failure.
- Write installer log to a known support location.
- Silent install must not start production job processing automatically.
- Document command examples for admin deployment.

## 7. Implementation Checklist

- [ ] Review this document with the owner: DevOps Lead + Release Manager.
- [ ] Create implementation tickets for Silent Install Guide.
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


---

<!-- source-file: SublimationPrintOS_Portable_Mode_Spec.md -->

# Portable Mode Spec

> **Document ID:** REL-07  
> **File:** `SublimationPrintOS_Portable_Mode_Spec.md`  
> **Category:** Deployment & Release  
> **Phase:** Phase 5-6  
> **Owner:** DevOps Lead + Release Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the release system for installers, builds, versioning, silent install, portable mode, update, rollback, release notes, release checklist, and go-live. Release documents become critical in Phase 5-6 when the product moves to beta and GA.

This document focuses specifically on **Portable Mode Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Core Data Objects

- app_meta, schema_migrations, settings, users, roles, audit_logs.
- file_assets, designs, design_versions, thumbnails, tags, categories.
- upscale_jobs, upscale_job_items, quality_checks, background_tasks.
- print_jobs, print_pages, export_presets, hardware_devices, device_logs later by phase.
- system_health_checks, crash_reports, backup_runs, update_packages.

## 7. Portable Mode Rules

- Portable mode stores app data beside executable under a portable data folder.
- Clearly show portable mode badge in settings/support screen.
- Disable assumptions about AppData and installer registry keys.
- Support export/import migration between portable and installed mode.
- Portable mode still uses safe backups and migrations.

## 8. Implementation Checklist

- [ ] Review this document with the owner: DevOps Lead + Release Manager.
- [ ] Create implementation tickets for Portable Mode Spec.
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
- [ ] The release flow can be executed by DevOps without missing backup or rollback steps.
- [ ] The artifact is versioned, signed/checksummed where applicable, and traceable.

## 10. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 11. Handoff Notes

- Store this file in the project repository under `docs/rel/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: DevOps Lead + Release Manager and any developer assigned to Build pipeline, Installer, Portable mode, Silent install, Updates, Rollback, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Update_System_Spec.md -->

# Update System Spec

> **Document ID:** REL-08  
> **File:** `SublimationPrintOS_Update_System_Spec.md`  
> **Category:** Deployment & Release  
> **Phase:** Phase 5-6  
> **Owner:** DevOps Lead + Release Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the release system for installers, builds, versioning, silent install, portable mode, update, rollback, release notes, release checklist, and go-live. Release documents become critical in Phase 5-6 when the product moves to beta and GA.

This document focuses specifically on **Update System Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Update System Rules

- Support offline update packages for shops without stable internet.
- Verify SHA-256 and signature before staging update.
- Backup DB/settings before update and record rollback point.
- Do not update while jobs are running unless user confirms and queues are paused.
- After update, run health check and show release notes.

## 7. Implementation Checklist

- [ ] Review this document with the owner: DevOps Lead + Release Manager.
- [ ] Create implementation tickets for Update System Spec.
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


---

<!-- source-file: SublimationPrintOS_Rollback_Procedure.md -->

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


---

<!-- source-file: SublimationPrintOS_Release_Checklist.md -->

# Release Checklist

> **Document ID:** REL-10  
> **File:** `SublimationPrintOS_Release_Checklist.md`  
> **Category:** Deployment & Release  
> **Phase:** Phase 5-6  
> **Owner:** DevOps Lead + Release Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the release system for installers, builds, versioning, silent install, portable mode, update, rollback, release notes, release checklist, and go-live. Release documents become critical in Phase 5-6 when the product moves to beta and GA.

This document focuses specifically on **Release Checklist** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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
- [ ] Create implementation tickets for Release Checklist.
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


---

<!-- source-file: SublimationPrintOS_Go_Live_Plan.md -->

# Go Live Plan

> **Document ID:** REL-11  
> **File:** `SublimationPrintOS_Go_Live_Plan.md`  
> **Category:** Deployment & Release  
> **Phase:** Phase 5-6  
> **Owner:** DevOps Lead + Release Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the release system for installers, builds, versioning, silent install, portable mode, update, rollback, release notes, release checklist, and go-live. Release documents become critical in Phase 5-6 when the product moves to beta and GA.

This document focuses specifically on **Go Live Plan** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Implementation Checklist

- [ ] Review this document with the owner: DevOps Lead + Release Manager.
- [ ] Create implementation tickets for Go Live Plan.
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
- [ ] The release flow can be executed by DevOps without missing backup or rollback steps.
- [ ] The artifact is versioned, signed/checksummed where applicable, and traceable.

## 8. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 9. Handoff Notes

- Store this file in the project repository under `docs/rel/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: DevOps Lead + Release Manager and any developer assigned to Build pipeline, Installer, Portable mode, Silent install, Updates, Rollback, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


# Security & Compliance — 10 Documents (Phase 1-2)


---

<!-- source-file: SublimationPrintOS_Security_Policy.md -->

# Security Policy

> **Document ID:** SEC-01  
> **File:** `SublimationPrintOS_Security_Policy.md`  
> **Category:** Security & Compliance  
> **Phase:** Phase 1-2  
> **Owner:** Security Lead + Tech Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the security and compliance baseline for local user data, roles, audit logs, encryption options, update safety, vulnerability handling, incident response, and software licensing. Security starts early, even though the full documents mature in Phase 1-2.

This document focuses specifically on **Security Policy** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Local data protection
- Access control
- Encryption
- Audit logs
- Vulnerability assessment
- Incident response
- License

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

- Keep user data local-first and avoid unnecessary network transmission.
- Apply role-based access to Admin, Designer, Worker, and Viewer workflows.
- Validate all file paths, imported files, update packages, and external process inputs.
- Use audit logs for admin actions, settings changes, exports, updates, and destructive operations.
- Diagnostics must be redacted and must not include design contents by default.

## 6. Security Baseline

- Core product works offline and keeps production data local by default.
- Admin, Designer, Worker, and Viewer roles must be enforced in the UI and backend commands.
- Installer and update packages must be hash/signature verified before installation.
- Crash reports and diagnostics must not include user design files by default.
- Audit logs should capture settings changes, exports, destructive actions, and admin operations.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Security Lead + Tech Lead.
- [ ] Create implementation tickets for Security Policy.
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
- [ ] The document reduces risk without making the offline workflow difficult.
- [ ] The controls can be tested and audited.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/sec/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Security Lead + Tech Lead and any developer assigned to Local data protection, Access control, Encryption, Audit logs, Vulnerability assessment, Incident response, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Data_Protection_Plan.md -->

# Data Protection Plan

> **Document ID:** SEC-02  
> **File:** `SublimationPrintOS_Data_Protection_Plan.md`  
> **Category:** Security & Compliance  
> **Phase:** Phase 1-2  
> **Owner:** Security Lead + Tech Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the security and compliance baseline for local user data, roles, audit logs, encryption options, update safety, vulnerability handling, incident response, and software licensing. Security starts early, even though the full documents mature in Phase 1-2.

This document focuses specifically on **Data Protection Plan** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Local data protection
- Access control
- Encryption
- Audit logs
- Vulnerability assessment
- Incident response
- License

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

- Keep user data local-first and avoid unnecessary network transmission.
- Apply role-based access to Admin, Designer, Worker, and Viewer workflows.
- Validate all file paths, imported files, update packages, and external process inputs.
- Use audit logs for admin actions, settings changes, exports, updates, and destructive operations.
- Diagnostics must be redacted and must not include design contents by default.

## 6. Implementation Checklist

- [ ] Review this document with the owner: Security Lead + Tech Lead.
- [ ] Create implementation tickets for Data Protection Plan.
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
- [ ] The document reduces risk without making the offline workflow difficult.
- [ ] The controls can be tested and audited.

## 8. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 9. Handoff Notes

- Store this file in the project repository under `docs/sec/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Security Lead + Tech Lead and any developer assigned to Local data protection, Access control, Encryption, Audit logs, Vulnerability assessment, Incident response, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Encryption_Spec.md -->

# Encryption Spec

> **Document ID:** SEC-03  
> **File:** `SublimationPrintOS_Encryption_Spec.md`  
> **Category:** Security & Compliance  
> **Phase:** Phase 1-2  
> **Owner:** Security Lead + Tech Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the security and compliance baseline for local user data, roles, audit logs, encryption options, update safety, vulnerability handling, incident response, and software licensing. Security starts early, even though the full documents mature in Phase 1-2.

This document focuses specifically on **Encryption Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Local data protection
- Access control
- Encryption
- Audit logs
- Vulnerability assessment
- Incident response
- License

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

- Keep user data local-first and avoid unnecessary network transmission.
- Apply role-based access to Admin, Designer, Worker, and Viewer workflows.
- Validate all file paths, imported files, update packages, and external process inputs.
- Use audit logs for admin actions, settings changes, exports, updates, and destructive operations.
- Diagnostics must be redacted and must not include design contents by default.

## 6. Security Baseline

- Core product works offline and keeps production data local by default.
- Admin, Designer, Worker, and Viewer roles must be enforced in the UI and backend commands.
- Installer and update packages must be hash/signature verified before installation.
- Crash reports and diagnostics must not include user design files by default.
- Audit logs should capture settings changes, exports, destructive actions, and admin operations.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Security Lead + Tech Lead.
- [ ] Create implementation tickets for Encryption Spec.
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
- [ ] The document reduces risk without making the offline workflow difficult.
- [ ] The controls can be tested and audited.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/sec/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Security Lead + Tech Lead and any developer assigned to Local data protection, Access control, Encryption, Audit logs, Vulnerability assessment, Incident response, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Access_Control_Spec.md -->

# Access Control Spec

> **Document ID:** SEC-04  
> **File:** `SublimationPrintOS_Access_Control_Spec.md`  
> **Category:** Security & Compliance  
> **Phase:** Phase 1-2  
> **Owner:** Security Lead + Tech Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the security and compliance baseline for local user data, roles, audit logs, encryption options, update safety, vulnerability handling, incident response, and software licensing. Security starts early, even though the full documents mature in Phase 1-2.

This document focuses specifically on **Access Control Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Local data protection
- Access control
- Encryption
- Audit logs
- Vulnerability assessment
- Incident response
- License

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

- Keep user data local-first and avoid unnecessary network transmission.
- Apply role-based access to Admin, Designer, Worker, and Viewer workflows.
- Validate all file paths, imported files, update packages, and external process inputs.
- Use audit logs for admin actions, settings changes, exports, updates, and destructive operations.
- Diagnostics must be redacted and must not include design contents by default.

## 6. Security Baseline

- Core product works offline and keeps production data local by default.
- Admin, Designer, Worker, and Viewer roles must be enforced in the UI and backend commands.
- Installer and update packages must be hash/signature verified before installation.
- Crash reports and diagnostics must not include user design files by default.
- Audit logs should capture settings changes, exports, destructive actions, and admin operations.

## 7. Role Permissions

- Admin: settings, users, backups, updates, diagnostics, all production actions.
- Designer: intake, upscale, design store, design studio, metadata, approvals if granted.
- Worker: order basket, nesting, export/send, hardware queue, job completion actions.
- Viewer: read-only designs, jobs, dashboards, and reports.
- Sensitive settings require admin re-entry after timeout.

## 8. Implementation Checklist

- [ ] Review this document with the owner: Security Lead + Tech Lead.
- [ ] Create implementation tickets for Access Control Spec.
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
- [ ] The document reduces risk without making the offline workflow difficult.
- [ ] The controls can be tested and audited.

## 10. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 11. Handoff Notes

- Store this file in the project repository under `docs/sec/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Security Lead + Tech Lead and any developer assigned to Local data protection, Access control, Encryption, Audit logs, Vulnerability assessment, Incident response, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Audit_Log_Spec.md -->

# Audit Log Spec

> **Document ID:** SEC-05  
> **File:** `SublimationPrintOS_Audit_Log_Spec.md`  
> **Category:** Security & Compliance  
> **Phase:** Phase 1-2  
> **Owner:** Security Lead + Tech Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the security and compliance baseline for local user data, roles, audit logs, encryption options, update safety, vulnerability handling, incident response, and software licensing. Security starts early, even though the full documents mature in Phase 1-2.

This document focuses specifically on **Audit Log Spec** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Local data protection
- Access control
- Encryption
- Audit logs
- Vulnerability assessment
- Incident response
- License

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

- Keep user data local-first and avoid unnecessary network transmission.
- Apply role-based access to Admin, Designer, Worker, and Viewer workflows.
- Validate all file paths, imported files, update packages, and external process inputs.
- Use audit logs for admin actions, settings changes, exports, updates, and destructive operations.
- Diagnostics must be redacted and must not include design contents by default.

## 6. Security Baseline

- Core product works offline and keeps production data local by default.
- Admin, Designer, Worker, and Viewer roles must be enforced in the UI and backend commands.
- Installer and update packages must be hash/signature verified before installation.
- Crash reports and diagnostics must not include user design files by default.
- Audit logs should capture settings changes, exports, destructive actions, and admin operations.

## 7. Audit Events

- Login/logout or local session switch.
- Settings changes, backup/restore, update/rollback, user/role changes.
- Design approval/rejection, export generation, send to hardware, destructive delete/archive.
- Security exceptions, failed permission checks, failed update verification.
- Each event stores actor, timestamp, action, target, result, and correlation id.

## 8. Implementation Checklist

- [ ] Review this document with the owner: Security Lead + Tech Lead.
- [ ] Create implementation tickets for Audit Log Spec.
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
- [ ] The document reduces risk without making the offline workflow difficult.
- [ ] The controls can be tested and audited.

## 10. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 11. Handoff Notes

- Store this file in the project repository under `docs/sec/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Security Lead + Tech Lead and any developer assigned to Local data protection, Access control, Encryption, Audit logs, Vulnerability assessment, Incident response, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Vulnerability_Assessment.md -->

# Vulnerability Assessment

> **Document ID:** SEC-06  
> **File:** `SublimationPrintOS_Vulnerability_Assessment.md`  
> **Category:** Security & Compliance  
> **Phase:** Phase 1-2  
> **Owner:** Security Lead + Tech Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the security and compliance baseline for local user data, roles, audit logs, encryption options, update safety, vulnerability handling, incident response, and software licensing. Security starts early, even though the full documents mature in Phase 1-2.

This document focuses specifically on **Vulnerability Assessment** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Local data protection
- Access control
- Encryption
- Audit logs
- Vulnerability assessment
- Incident response
- License

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

- Keep user data local-first and avoid unnecessary network transmission.
- Apply role-based access to Admin, Designer, Worker, and Viewer workflows.
- Validate all file paths, imported files, update packages, and external process inputs.
- Use audit logs for admin actions, settings changes, exports, updates, and destructive operations.
- Diagnostics must be redacted and must not include design contents by default.

## 6. Security Baseline

- Core product works offline and keeps production data local by default.
- Admin, Designer, Worker, and Viewer roles must be enforced in the UI and backend commands.
- Installer and update packages must be hash/signature verified before installation.
- Crash reports and diagnostics must not include user design files by default.
- Audit logs should capture settings changes, exports, destructive actions, and admin operations.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Security Lead + Tech Lead.
- [ ] Create implementation tickets for Vulnerability Assessment.
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
- [ ] The document reduces risk without making the offline workflow difficult.
- [ ] The controls can be tested and audited.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/sec/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Security Lead + Tech Lead and any developer assigned to Local data protection, Access control, Encryption, Audit logs, Vulnerability assessment, Incident response, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Penetration_Test_Plan.md -->

# Penetration Test Plan

> **Document ID:** SEC-07  
> **File:** `SublimationPrintOS_Penetration_Test_Plan.md`  
> **Category:** Security & Compliance  
> **Phase:** Phase 1-2  
> **Owner:** Security Lead + Tech Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the security and compliance baseline for local user data, roles, audit logs, encryption options, update safety, vulnerability handling, incident response, and software licensing. Security starts early, even though the full documents mature in Phase 1-2.

This document focuses specifically on **Penetration Test Plan** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Local data protection
- Access control
- Encryption
- Audit logs
- Vulnerability assessment
- Incident response
- License

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

- Keep user data local-first and avoid unnecessary network transmission.
- Apply role-based access to Admin, Designer, Worker, and Viewer workflows.
- Validate all file paths, imported files, update packages, and external process inputs.
- Use audit logs for admin actions, settings changes, exports, updates, and destructive operations.
- Diagnostics must be redacted and must not include design contents by default.

## 6. Implementation Checklist

- [ ] Review this document with the owner: Security Lead + Tech Lead.
- [ ] Create implementation tickets for Penetration Test Plan.
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
- [ ] The document reduces risk without making the offline workflow difficult.
- [ ] The controls can be tested and audited.

## 8. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 9. Handoff Notes

- Store this file in the project repository under `docs/sec/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Security Lead + Tech Lead and any developer assigned to Local data protection, Access control, Encryption, Audit logs, Vulnerability assessment, Incident response, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Incident_Response_Plan.md -->

# Incident Response Plan

> **Document ID:** SEC-08  
> **File:** `SublimationPrintOS_Incident_Response_Plan.md`  
> **Category:** Security & Compliance  
> **Phase:** Phase 1-2  
> **Owner:** Security Lead + Tech Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the security and compliance baseline for local user data, roles, audit logs, encryption options, update safety, vulnerability handling, incident response, and software licensing. Security starts early, even though the full documents mature in Phase 1-2.

This document focuses specifically on **Incident Response Plan** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Local data protection
- Access control
- Encryption
- Audit logs
- Vulnerability assessment
- Incident response
- License

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

- Keep user data local-first and avoid unnecessary network transmission.
- Apply role-based access to Admin, Designer, Worker, and Viewer workflows.
- Validate all file paths, imported files, update packages, and external process inputs.
- Use audit logs for admin actions, settings changes, exports, updates, and destructive operations.
- Diagnostics must be redacted and must not include design contents by default.

## 6. Security Baseline

- Core product works offline and keeps production data local by default.
- Admin, Designer, Worker, and Viewer roles must be enforced in the UI and backend commands.
- Installer and update packages must be hash/signature verified before installation.
- Crash reports and diagnostics must not include user design files by default.
- Audit logs should capture settings changes, exports, destructive actions, and admin operations.

## 7. Incident Steps

- Identify: capture symptom, affected build, module, data risk, and first report time.
- Contain: pause risky operation, disable update/package/plugin if needed.
- Eradicate: patch root cause, verify with tests, review logs.
- Recover: restore backup, rerun health check, confirm user workflow.
- Review: write incident report and update prevention controls.

## 8. Implementation Checklist

- [ ] Review this document with the owner: Security Lead + Tech Lead.
- [ ] Create implementation tickets for Incident Response Plan.
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
- [ ] The document reduces risk without making the offline workflow difficult.
- [ ] The controls can be tested and audited.

## 10. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 11. Handoff Notes

- Store this file in the project repository under `docs/sec/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Security Lead + Tech Lead and any developer assigned to Local data protection, Access control, Encryption, Audit logs, Vulnerability assessment, Incident response, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_GDPR_Compliance.md -->

# GDPR Compliance

> **Document ID:** SEC-09  
> **File:** `SublimationPrintOS_GDPR_Compliance.md`  
> **Category:** Security & Compliance  
> **Phase:** Phase 1-2  
> **Owner:** Security Lead + Tech Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the security and compliance baseline for local user data, roles, audit logs, encryption options, update safety, vulnerability handling, incident response, and software licensing. Security starts early, even though the full documents mature in Phase 1-2.

This document focuses specifically on **GDPR Compliance** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Local data protection
- Access control
- Encryption
- Audit logs
- Vulnerability assessment
- Incident response
- License

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

- Keep user data local-first and avoid unnecessary network transmission.
- Apply role-based access to Admin, Designer, Worker, and Viewer workflows.
- Validate all file paths, imported files, update packages, and external process inputs.
- Use audit logs for admin actions, settings changes, exports, updates, and destructive operations.
- Diagnostics must be redacted and must not include design contents by default.

## 6. Security Baseline

- Core product works offline and keeps production data local by default.
- Admin, Designer, Worker, and Viewer roles must be enforced in the UI and backend commands.
- Installer and update packages must be hash/signature verified before installation.
- Crash reports and diagnostics must not include user design files by default.
- Audit logs should capture settings changes, exports, destructive actions, and admin operations.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Security Lead + Tech Lead.
- [ ] Create implementation tickets for GDPR Compliance.
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
- [ ] The document reduces risk without making the offline workflow difficult.
- [ ] The controls can be tested and audited.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/sec/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Security Lead + Tech Lead and any developer assigned to Local data protection, Access control, Encryption, Audit logs, Vulnerability assessment, Incident response, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Software_License_Agreement.md -->

# Software License Agreement

> **Document ID:** SEC-10  
> **File:** `SublimationPrintOS_Software_License_Agreement.md`  
> **Category:** Security & Compliance  
> **Phase:** Phase 1-2  
> **Owner:** Security Lead + Tech Lead  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the security and compliance baseline for local user data, roles, audit logs, encryption options, update safety, vulnerability handling, incident response, and software licensing. Security starts early, even though the full documents mature in Phase 1-2.

This document focuses specifically on **Software License Agreement** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

## 2. Scope

SublimationPrintOS is an offline Windows desktop production operating system for dye-sublimation businesses. The scope of these documents is pure sublimation production: image intake, AI upscaling, quality checks, Canva-like design studio, design store, order basket, nesting, export, hardware handoff, color management, production reporting, diagnostics, installation, settings, and maintenance. These documents deliberately exclude inventory management, CRM, RTO/returns, shipping/logistics tracking, revenue accounting, GST invoicing, supplier management, salesperson commission, and loyalty systems.

## 3. Related Modules

- Local data protection
- Access control
- Encryption
- Audit logs
- Vulnerability assessment
- Incident response
- License

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

- Keep user data local-first and avoid unnecessary network transmission.
- Apply role-based access to Admin, Designer, Worker, and Viewer workflows.
- Validate all file paths, imported files, update packages, and external process inputs.
- Use audit logs for admin actions, settings changes, exports, updates, and destructive operations.
- Diagnostics must be redacted and must not include design contents by default.

## 6. Security Baseline

- Core product works offline and keeps production data local by default.
- Admin, Designer, Worker, and Viewer roles must be enforced in the UI and backend commands.
- Installer and update packages must be hash/signature verified before installation.
- Crash reports and diagnostics must not include user design files by default.
- Audit logs should capture settings changes, exports, destructive actions, and admin operations.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Security Lead + Tech Lead.
- [ ] Create implementation tickets for Software License Agreement.
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
- [ ] The document reduces risk without making the offline workflow difficult.
- [ ] The controls can be tested and audited.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/sec/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Security Lead + Tech Lead and any developer assigned to Local data protection, Access control, Encryption, Audit logs, Vulnerability assessment, Incident response, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


# User Documentation — 10 Documents (Phase 5-6)


---

<!-- source-file: SublimationPrintOS_User_Manual.md -->

# User Manual

> **Document ID:** USERDOC-01  
> **File:** `SublimationPrintOS_User_Manual.md`  
> **Category:** User Documentation  
> **Phase:** Phase 5-6  
> **Owner:** Technical Writer + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define all customer-facing and internal documentation needed before beta and GA: user manual, admin manual, developer/API docs, troubleshooting, FAQ, quick start, video scripts, training material, and knowledge base.

This document focuses specifically on **User Manual** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Documentation Coverage

- First launch: install, open app, set company/defaults, run health check.
- Upscale: upload image, choose scale, run GPU/CPU fallback, review output.
- Design Store: approve, search, filter, tag, preview, export.
- Production: add designs to basket, configure nesting, export, send to RIP/hardware when available.
- Support: logs, diagnostic ZIP, backup, restore, update, common errors.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Technical Writer + Product Manager.
- [ ] Create implementation tickets for User Manual.
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
- [ ] A new user can complete the documented workflow without developer help.
- [ ] Known errors include simple fixes and escalation guidance.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/userdoc/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Technical Writer + Product Manager and any developer assigned to End-user workflows, Admin settings, Developer/API docs, Troubleshooting, FAQ, Training, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Admin_Manual.md -->

# Admin Manual

> **Document ID:** USERDOC-02  
> **File:** `SublimationPrintOS_Admin_Manual.md`  
> **Category:** User Documentation  
> **Phase:** Phase 5-6  
> **Owner:** Technical Writer + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define all customer-facing and internal documentation needed before beta and GA: user manual, admin manual, developer/API docs, troubleshooting, FAQ, quick start, video scripts, training material, and knowledge base.

This document focuses specifically on **Admin Manual** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Documentation Coverage

- First launch: install, open app, set company/defaults, run health check.
- Upscale: upload image, choose scale, run GPU/CPU fallback, review output.
- Design Store: approve, search, filter, tag, preview, export.
- Production: add designs to basket, configure nesting, export, send to RIP/hardware when available.
- Support: logs, diagnostic ZIP, backup, restore, update, common errors.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Technical Writer + Product Manager.
- [ ] Create implementation tickets for Admin Manual.
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
- [ ] A new user can complete the documented workflow without developer help.
- [ ] Known errors include simple fixes and escalation guidance.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/userdoc/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Technical Writer + Product Manager and any developer assigned to End-user workflows, Admin settings, Developer/API docs, Troubleshooting, FAQ, Training, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Developer_Documentation.md -->

# Developer Documentation

> **Document ID:** USERDOC-03  
> **File:** `SublimationPrintOS_Developer_Documentation.md`  
> **Category:** User Documentation  
> **Phase:** Phase 5-6  
> **Owner:** Technical Writer + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define all customer-facing and internal documentation needed before beta and GA: user manual, admin manual, developer/API docs, troubleshooting, FAQ, quick start, video scripts, training material, and knowledge base.

This document focuses specifically on **Developer Documentation** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Implementation Checklist

- [ ] Review this document with the owner: Technical Writer + Product Manager.
- [ ] Create implementation tickets for Developer Documentation.
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
- [ ] A new user can complete the documented workflow without developer help.
- [ ] Known errors include simple fixes and escalation guidance.

## 8. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 9. Handoff Notes

- Store this file in the project repository under `docs/userdoc/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Technical Writer + Product Manager and any developer assigned to End-user workflows, Admin settings, Developer/API docs, Troubleshooting, FAQ, Training, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_API_Documentation.md -->

# API Documentation

> **Document ID:** USERDOC-04  
> **File:** `SublimationPrintOS_API_Documentation.md`  
> **Category:** User Documentation  
> **Phase:** Phase 5-6  
> **Owner:** Technical Writer + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define all customer-facing and internal documentation needed before beta and GA: user manual, admin manual, developer/API docs, troubleshooting, FAQ, quick start, video scripts, training material, and knowledge base.

This document focuses specifically on **API Documentation** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Implementation Checklist

- [ ] Review this document with the owner: Technical Writer + Product Manager.
- [ ] Create implementation tickets for API Documentation.
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
- [ ] A new user can complete the documented workflow without developer help.
- [ ] Known errors include simple fixes and escalation guidance.

## 8. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 9. Handoff Notes

- Store this file in the project repository under `docs/userdoc/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Technical Writer + Product Manager and any developer assigned to End-user workflows, Admin settings, Developer/API docs, Troubleshooting, FAQ, Training, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Troubleshooting_Guide.md -->

# Troubleshooting Guide

> **Document ID:** USERDOC-05  
> **File:** `SublimationPrintOS_Troubleshooting_Guide.md`  
> **Category:** User Documentation  
> **Phase:** Phase 5-6  
> **Owner:** Technical Writer + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define all customer-facing and internal documentation needed before beta and GA: user manual, admin manual, developer/API docs, troubleshooting, FAQ, quick start, video scripts, training material, and knowledge base.

This document focuses specifically on **Troubleshooting Guide** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Documentation Coverage

- First launch: install, open app, set company/defaults, run health check.
- Upscale: upload image, choose scale, run GPU/CPU fallback, review output.
- Design Store: approve, search, filter, tag, preview, export.
- Production: add designs to basket, configure nesting, export, send to RIP/hardware when available.
- Support: logs, diagnostic ZIP, backup, restore, update, common errors.

## 7. Troubleshooting Entry Format

- Symptom: what user sees.
- Likely cause: permission, disk, GPU, model file, database, hot folder, or unsupported input.
- Fix steps: exact clicks or path.
- Prevention: how to avoid repeat issue.
- Escalation: logs/diagnostic ZIP to attach.

## 8. Implementation Checklist

- [ ] Review this document with the owner: Technical Writer + Product Manager.
- [ ] Create implementation tickets for Troubleshooting Guide.
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
- [ ] A new user can complete the documented workflow without developer help.
- [ ] Known errors include simple fixes and escalation guidance.

## 10. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 11. Handoff Notes

- Store this file in the project repository under `docs/userdoc/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Technical Writer + Product Manager and any developer assigned to End-user workflows, Admin settings, Developer/API docs, Troubleshooting, FAQ, Training, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_FAQ.md -->

# FAQ

> **Document ID:** USERDOC-06  
> **File:** `SublimationPrintOS_FAQ.md`  
> **Category:** User Documentation  
> **Phase:** Phase 5-6  
> **Owner:** Technical Writer + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define all customer-facing and internal documentation needed before beta and GA: user manual, admin manual, developer/API docs, troubleshooting, FAQ, quick start, video scripts, training material, and knowledge base.

This document focuses specifically on **FAQ** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Documentation Coverage

- First launch: install, open app, set company/defaults, run health check.
- Upscale: upload image, choose scale, run GPU/CPU fallback, review output.
- Design Store: approve, search, filter, tag, preview, export.
- Production: add designs to basket, configure nesting, export, send to RIP/hardware when available.
- Support: logs, diagnostic ZIP, backup, restore, update, common errors.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Technical Writer + Product Manager.
- [ ] Create implementation tickets for FAQ.
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
- [ ] A new user can complete the documented workflow without developer help.
- [ ] Known errors include simple fixes and escalation guidance.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/userdoc/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Technical Writer + Product Manager and any developer assigned to End-user workflows, Admin settings, Developer/API docs, Troubleshooting, FAQ, Training, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Quick_Start_Guide.md -->

# Quick Start Guide

> **Document ID:** USERDOC-07  
> **File:** `SublimationPrintOS_Quick_Start_Guide.md`  
> **Category:** User Documentation  
> **Phase:** Phase 5-6  
> **Owner:** Technical Writer + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define all customer-facing and internal documentation needed before beta and GA: user manual, admin manual, developer/API docs, troubleshooting, FAQ, quick start, video scripts, training material, and knowledge base.

This document focuses specifically on **Quick Start Guide** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Documentation Coverage

- First launch: install, open app, set company/defaults, run health check.
- Upscale: upload image, choose scale, run GPU/CPU fallback, review output.
- Design Store: approve, search, filter, tag, preview, export.
- Production: add designs to basket, configure nesting, export, send to RIP/hardware when available.
- Support: logs, diagnostic ZIP, backup, restore, update, common errors.

## 7. Quick Start Flow

- Install app and launch from desktop shortcut.
- Set company name, default paper, units, DPI, theme, and backup folder.
- Run health check and fix any red status before production use.
- Upload one test image, run 4× upscale, review output, and save to Design Store.
- Export diagnostic ZIP if something fails.

## 8. Implementation Checklist

- [ ] Review this document with the owner: Technical Writer + Product Manager.
- [ ] Create implementation tickets for Quick Start Guide.
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
- [ ] A new user can complete the documented workflow without developer help.
- [ ] Known errors include simple fixes and escalation guidance.

## 10. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 11. Handoff Notes

- Store this file in the project repository under `docs/userdoc/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Technical Writer + Product Manager and any developer assigned to End-user workflows, Admin settings, Developer/API docs, Troubleshooting, FAQ, Training, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Video_Tutorial_Script.md -->

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


---

<!-- source-file: SublimationPrintOS_Training_Material.md -->

# Training Material

> **Document ID:** USERDOC-09  
> **File:** `SublimationPrintOS_Training_Material.md`  
> **Category:** User Documentation  
> **Phase:** Phase 5-6  
> **Owner:** Technical Writer + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define all customer-facing and internal documentation needed before beta and GA: user manual, admin manual, developer/API docs, troubleshooting, FAQ, quick start, video scripts, training material, and knowledge base.

This document focuses specifically on **Training Material** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Documentation Coverage

- First launch: install, open app, set company/defaults, run health check.
- Upscale: upload image, choose scale, run GPU/CPU fallback, review output.
- Design Store: approve, search, filter, tag, preview, export.
- Production: add designs to basket, configure nesting, export, send to RIP/hardware when available.
- Support: logs, diagnostic ZIP, backup, restore, update, common errors.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Technical Writer + Product Manager.
- [ ] Create implementation tickets for Training Material.
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
- [ ] A new user can complete the documented workflow without developer help.
- [ ] Known errors include simple fixes and escalation guidance.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/userdoc/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Technical Writer + Product Manager and any developer assigned to End-user workflows, Admin settings, Developer/API docs, Troubleshooting, FAQ, Training, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Knowledge_Base.md -->

# Knowledge Base

> **Document ID:** USERDOC-10  
> **File:** `SublimationPrintOS_Knowledge_Base.md`  
> **Category:** User Documentation  
> **Phase:** Phase 5-6  
> **Owner:** Technical Writer + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define all customer-facing and internal documentation needed before beta and GA: user manual, admin manual, developer/API docs, troubleshooting, FAQ, quick start, video scripts, training material, and knowledge base.

This document focuses specifically on **Knowledge Base** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Documentation Coverage

- First launch: install, open app, set company/defaults, run health check.
- Upscale: upload image, choose scale, run GPU/CPU fallback, review output.
- Design Store: approve, search, filter, tag, preview, export.
- Production: add designs to basket, configure nesting, export, send to RIP/hardware when available.
- Support: logs, diagnostic ZIP, backup, restore, update, common errors.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Technical Writer + Product Manager.
- [ ] Create implementation tickets for Knowledge Base.
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
- [ ] A new user can complete the documented workflow without developer help.
- [ ] Known errors include simple fixes and escalation guidance.

## 9. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 10. Handoff Notes

- Store this file in the project repository under `docs/userdoc/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Technical Writer + Product Manager and any developer assigned to End-user workflows, Admin settings, Developer/API docs, Troubleshooting, FAQ, Training, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


# Project Management — 8 Documents (Ongoing)


---

<!-- source-file: SublimationPrintOS_Project_Charter.md -->

# Project Charter

> **Document ID:** PM-01  
> **File:** `SublimationPrintOS_Project_Charter.md`  
> **Category:** Project Management  
> **Phase:** Ongoing  
> **Owner:** Project Manager + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the project control system used throughout development: charter, risk, mitigation, change, defects, code reviews, standups, and sprint planning. These documents keep scope under control while many modules are built in parallel.

This document focuses specifically on **Project Charter** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Project Ceremony Rules

- Standups focus on yesterday, today, blockers, risks, and cross-team dependency.
- Sprint planning starts from milestone goals and ends with testable tickets.
- No sprint is complete without QA evidence and documentation updates for user-facing change.

## 7. Charter Contents

- Problem statement: reduce manual design preparation, nesting waste, and production mistakes.
- Success metrics: install, upscale, design store performance, nesting efficiency, export correctness, hardware handoff.
- Constraints: offline Windows desktop, local data, no inventory/CRM/RTO/shipping/accounting scope.
- Stakeholders: Product Manager, Project Manager, Frontend Lead, Backend/AI Lead, QA Lead, DevOps, Tech Writer.
- Milestones: M0 through M6 with phase exit criteria.

## 8. Implementation Checklist

- [ ] Review this document with the owner: Project Manager + Product Manager.
- [ ] Create implementation tickets for Project Charter.
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
- [ ] The process creates visible ownership, dates, risks, decisions, and next actions.
- [ ] The template is short enough to use every sprint, not just once.

## 10. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 11. Handoff Notes

- Store this file in the project repository under `docs/pm/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Project Manager + Product Manager and any developer assigned to Scope, Schedule, Risk, Change control, Defects, Code review, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Risk_Register.md -->

# Risk Register

> **Document ID:** PM-02  
> **File:** `SublimationPrintOS_Risk_Register.md`  
> **Category:** Project Management  
> **Phase:** Ongoing  
> **Owner:** Project Manager + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the project control system used throughout development: charter, risk, mitigation, change, defects, code reviews, standups, and sprint planning. These documents keep scope under control while many modules are built in parallel.

This document focuses specifically on **Risk Register** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Risk Focus

- Track Real-ESRGAN GPU failures, canvas performance, true-shape nesting speed, SQLite corruption, PDF/RIP compatibility, installer permissions, and scope creep.
- Each risk must have owner, probability, impact, mitigation, trigger, contingency, and review cadence.
- High risks are discussed weekly until downgraded or closed.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Project Manager + Product Manager.
- [ ] Create implementation tickets for Risk Register.
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


---

<!-- source-file: SublimationPrintOS_Risk_Mitigation_Plan.md -->

# Risk Mitigation Plan

> **Document ID:** PM-03  
> **File:** `SublimationPrintOS_Risk_Mitigation_Plan.md`  
> **Category:** Project Management  
> **Phase:** Ongoing  
> **Owner:** Project Manager + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the project control system used throughout development: charter, risk, mitigation, change, defects, code reviews, standups, and sprint planning. These documents keep scope under control while many modules are built in parallel.

This document focuses specifically on **Risk Mitigation Plan** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Risk Focus

- Track Real-ESRGAN GPU failures, canvas performance, true-shape nesting speed, SQLite corruption, PDF/RIP compatibility, installer permissions, and scope creep.
- Each risk must have owner, probability, impact, mitigation, trigger, contingency, and review cadence.
- High risks are discussed weekly until downgraded or closed.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Project Manager + Product Manager.
- [ ] Create implementation tickets for Risk Mitigation Plan.
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


---

<!-- source-file: SublimationPrintOS_Change_Management_Process.md -->

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


---

<!-- source-file: SublimationPrintOS_Defect_Tracking_Process.md -->

# Defect Tracking Process

> **Document ID:** PM-05  
> **File:** `SublimationPrintOS_Defect_Tracking_Process.md`  
> **Category:** Project Management  
> **Phase:** Ongoing  
> **Owner:** Project Manager + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the project control system used throughout development: charter, risk, mitigation, change, defects, code reviews, standups, and sprint planning. These documents keep scope under control while many modules are built in parallel.

This document focuses specifically on **Defect Tracking Process** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Defect Workflow

- New → Triage → Assigned → In Progress → Ready for QA → Verified → Closed.
- Severity P0 blocks release; P1 blocks milestone; P2 planned; P3 backlog.
- Bug reports must include build version, module, steps, expected, actual, logs, screenshots, and data safety impact.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Project Manager + Product Manager.
- [ ] Create implementation tickets for Defect Tracking Process.
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


---

<!-- source-file: SublimationPrintOS_Code_Review_Process.md -->

# Code Review Process

> **Document ID:** PM-06  
> **File:** `SublimationPrintOS_Code_Review_Process.md`  
> **Category:** Project Management  
> **Phase:** Ongoing  
> **Owner:** Project Manager + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the project control system used throughout development: charter, risk, mitigation, change, defects, code reviews, standups, and sprint planning. These documents keep scope under control while many modules are built in parallel.

This document focuses specifically on **Code Review Process** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Code Review Rules

- No direct merge to main; use pull requests with linked ticket and test evidence.
- Review security, error handling, logging, performance, migrations, and user-facing messages.
- P0 paths require at least one senior reviewer and passing automated checks.

## 7. Implementation Checklist

- [ ] Review this document with the owner: Project Manager + Product Manager.
- [ ] Create implementation tickets for Code Review Process.
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


---

<!-- source-file: SublimationPrintOS_Daily_Standup_Template.md -->

# Daily Standup Template

> **Document ID:** PM-07  
> **File:** `SublimationPrintOS_Daily_Standup_Template.md`  
> **Category:** Project Management  
> **Phase:** Ongoing  
> **Owner:** Project Manager + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the project control system used throughout development: charter, risk, mitigation, change, defects, code reviews, standups, and sprint planning. These documents keep scope under control while many modules are built in parallel.

This document focuses specifically on **Daily Standup Template** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Project Ceremony Rules

- Standups focus on yesterday, today, blockers, risks, and cross-team dependency.
- Sprint planning starts from milestone goals and ends with testable tickets.
- No sprint is complete without QA evidence and documentation updates for user-facing change.

## 7. Standup Template

- Yesterday: completed tickets, test evidence, merged PRs.
- Today: planned work tied to milestone and phase.
- Blockers: technical, dependency, design, testing, hardware, or requirement issue.
- Risk/Change: any new risk or scope change needing PM/CCB review.
- Help needed: person, decision, artifact, or test environment required.

## 8. Implementation Checklist

- [ ] Review this document with the owner: Project Manager + Product Manager.
- [ ] Create implementation tickets for Daily Standup Template.
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
- [ ] The process creates visible ownership, dates, risks, decisions, and next actions.
- [ ] The template is short enough to use every sprint, not just once.

## 10. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 11. Handoff Notes

- Store this file in the project repository under `docs/pm/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Project Manager + Product Manager and any developer assigned to Scope, Schedule, Risk, Change control, Defects, Code review, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.


---

<!-- source-file: SublimationPrintOS_Sprint_Planning_Template.md -->

# Sprint Planning Template

> **Document ID:** PM-08  
> **File:** `SublimationPrintOS_Sprint_Planning_Template.md`  
> **Category:** Project Management  
> **Phase:** Ongoing  
> **Owner:** Project Manager + Product Manager  
> **Version:** 1.0  
> **Status:** Draft for development handoff  
> **Project:** SublimationPrintOS  

---

## 1. Purpose

Define the project control system used throughout development: charter, risk, mitigation, change, defects, code reviews, standups, and sprint planning. These documents keep scope under control while many modules are built in parallel.

This document focuses specifically on **Sprint Planning Template** and converts the idea into rules, requirements, checklists, and acceptance criteria that can be given to the development team.

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

## 6. Project Ceremony Rules

- Standups focus on yesterday, today, blockers, risks, and cross-team dependency.
- Sprint planning starts from milestone goals and ends with testable tickets.
- No sprint is complete without QA evidence and documentation updates for user-facing change.

## 7. Sprint Planning Template

- Sprint goal and milestone alignment.
- Committed tickets with owner, estimate, dependency, acceptance criteria, and test type.
- Out-of-scope list for the sprint.
- Risks and mitigation actions.
- Demo script expected at sprint review.

## 8. Implementation Checklist

- [ ] Review this document with the owner: Project Manager + Product Manager.
- [ ] Create implementation tickets for Sprint Planning Template.
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
- [ ] The process creates visible ownership, dates, risks, decisions, and next actions.
- [ ] The template is short enough to use every sprint, not just once.

## 10. Review Questions

- Does this document support the correct phase and not pull later-phase work too early?
- Can the feature be tested on a clean Windows machine or simulated environment?
- Does it protect local user data and avoid accidental data loss?
- Does it include clear fallback behavior when GPU, file system, database, hardware, or user input fails?
- Does it help the sublimation production workflow move faster, safer, or with less waste?

## 11. Handoff Notes

- Store this file in the project repository under `docs/pm/`.
- Review cadence: at phase start, before milestone exit, and whenever a Type B or Type C change affects this area.
- Primary audience: Project Manager + Product Manager and any developer assigned to Scope, Schedule, Risk, Change control, Defects, Code review, ....
- This document is part of the 111-document documentation pack and should be kept consistent with functional requirements, non-functional requirements, roadmap, milestone plan, risk register, and change management.
