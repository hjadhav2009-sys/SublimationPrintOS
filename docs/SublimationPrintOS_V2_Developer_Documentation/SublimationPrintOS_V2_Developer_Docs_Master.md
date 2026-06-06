# SublimationPrintOS — Head Developer README for V2 Docs

## What changed from the old pack

The old pack was broad. This V2 pack is stricter:

- Every document has a phase, owner, concrete paths, acceptance criteria, QA evidence, and Codex rules.
- Phase 0 is clearly limited to foundation/install/storage/settings/UI shell/health/check/AI runner foundation.
- Future modules are described as contracts, not fake completed features.
- Excluded domains are repeated to stop scope creep.
- Each doc is written so a developer can create implementation prompts or review Codex output.

## Recommended review order

1. `00_MASTER_INDEX.md`
2. `09_Project_Management/08_Developer_Handoff_Guide.md`
3. `02_Development_Guides/14_Codex_Prompting_Rules.md`
4. `02_Development_Guides/01_Repository_Setup_Guide.md`
5. `03_Database_Data/02_AppData_Folder_Specification.md`
6. `03_Database_Data/03_SQLite_Phase_0_Schema_Specification.md`
7. `01_UI_UX_Design/01_Phase_0_UX_Architecture.md`
8. `05_Testing_QA/02_Phase_0_Smoke_Test_Plan.md`

## How to use with Codex

Do not ask Codex to implement everything. Give Codex one focused task, with one or two docs as input, and require a summary with files changed and commands run.

Start with the prompt in `00_CODEX_REBUILD_DOCUMENTATION_PROMPT.md` only if your repo docs need to be regenerated from source.



---


# SublimationPrintOS — V2 Developer Documentation Pack

> Repo: `hjadhav2009-sys/SublimationPrintOS`  
> Version: 2.0 Developer Grade  
> Generated: 2026-06-06  

## Why this V2 pack exists

The previous documentation pack was too generic for a head developer. This V2 pack is structured as implementation-grade documentation: file paths, phase boundaries, data contracts, acceptance criteria, QA evidence, and Codex rules are included in each document.

## Counts

| Category | Count | Phase Focus |
|---|---:|---|
| 01_UI_UX_Design | 13 | Phase 0, Phase 0-1 |
| 02_Development_Guides | 17 | Ongoing, Phase 0, Phase 0-1 |
| 03_Database_Data | 10 | Phase 0, Phase 0-1 |
| 04_Hardware_Integration | 14 | Phase 3-4, Phase 4 |
| 05_Testing_QA | 18 | Ongoing, Phase 0, Phase 0-1, Phase 1-2 |
| 06_Deployment_Release | 11 | Phase 5-6 |
| 07_Security_Compliance | 10 | Phase 1-2 |
| 08_User_Documentation | 10 | Phase 5-6 |
| 09_Project_Management | 8 | Ongoing |

**Total documents:** 111

## Documents

### 01_UI_UX_Design
- [01_Phase_0_UX_Architecture.md](01_UI_UX_Design/01_Phase_0_UX_Architecture.md) — **Phase 0**, owner: UI/UX Lead
- [02_Dashboard_UX_Specification.md](01_UI_UX_Design/02_Dashboard_UX_Specification.md) — **Phase 0**, owner: UI/UX Lead
- [03_Navigation_Layout_Specification.md](01_UI_UX_Design/03_Navigation_Layout_Specification.md) — **Phase 0**, owner: Frontend Lead
- [04_Settings_UX_Specification.md](01_UI_UX_Design/04_Settings_UX_Specification.md) — **Phase 0**, owner: Frontend Lead
- [05_Health_Check_UX_Specification.md](01_UI_UX_Design/05_Health_Check_UX_Specification.md) — **Phase 0**, owner: Frontend + Backend Lead
- [06_Upscale_Test_UX_Specification.md](01_UI_UX_Design/06_Upscale_Test_UX_Specification.md) — **Phase 0**, owner: AI + Frontend Lead
- [07_Logs_and_Diagnostics_UX_Specification.md](01_UI_UX_Design/07_Logs_and_Diagnostics_UX_Specification.md) — **Phase 0**, owner: QA + Backend Lead
- [08_Updates_UX_Specification.md](01_UI_UX_Design/08_Updates_UX_Specification.md) — **Phase 0**, owner: DevOps Lead
- [09_Shortcuts_UX_Specification.md](01_UI_UX_Design/09_Shortcuts_UX_Specification.md) — **Phase 0**, owner: Frontend Lead
- [10_Empty_Loading_Error_States.md](01_UI_UX_Design/10_Empty_Loading_Error_States.md) — **Phase 0**, owner: UI/UX Lead
- [11_Design_Tokens_and_Theme_System.md](01_UI_UX_Design/11_Design_Tokens_and_Theme_System.md) — **Phase 0**, owner: Frontend Lead
- [12_Accessibility_and_Localization_UX.md](01_UI_UX_Design/12_Accessibility_and_Localization_UX.md) — **Phase 0-1**, owner: UI/UX + QA Lead
- [13_Phase_0_UI_Acceptance_Checklist.md](01_UI_UX_Design/13_Phase_0_UI_Acceptance_Checklist.md) — **Phase 0**, owner: QA Lead

### 02_Development_Guides
- [01_Repository_Setup_Guide.md](02_Development_Guides/01_Repository_Setup_Guide.md) — **Phase 0**, owner: Tech Lead
- [02_Architecture_Boundaries_Guide.md](02_Development_Guides/02_Architecture_Boundaries_Guide.md) — **Phase 0-1**, owner: Tech Lead
- [03_Frontend_Coding_Standards.md](02_Development_Guides/03_Frontend_Coding_Standards.md) — **Phase 0-1**, owner: Frontend Lead
- [04_Tauri_Command_Contract_Guide.md](02_Development_Guides/04_Tauri_Command_Contract_Guide.md) — **Phase 0-1**, owner: Backend Lead
- [05_Service_Layer_Pattern_Guide.md](02_Development_Guides/05_Service_Layer_Pattern_Guide.md) — **Phase 0-1**, owner: Tech Lead
- [06_App_Bootstrap_Lifecycle_Guide.md](02_Development_Guides/06_App_Bootstrap_Lifecycle_Guide.md) — **Phase 0**, owner: Backend + Frontend Lead
- [07_Error_Handling_and_Result_Types_Guide.md](02_Development_Guides/07_Error_Handling_and_Result_Types_Guide.md) — **Phase 0-1**, owner: QA + Backend Lead
- [08_Configuration_and_Feature_Flags_Guide.md](02_Development_Guides/08_Configuration_and_Feature_Flags_Guide.md) — **Phase 0-1**, owner: Product + Tech Lead
- [09_Logging_Implementation_Guide.md](02_Development_Guides/09_Logging_Implementation_Guide.md) — **Phase 0-1**, owner: Backend Lead
- [10_Background_Job_Queue_Guide.md](02_Development_Guides/10_Background_Job_Queue_Guide.md) — **Phase 0-1**, owner: Backend Lead
- [11_Real_ESRGAN_Runner_Guide.md](02_Development_Guides/11_Real_ESRGAN_Runner_Guide.md) — **Phase 0-1**, owner: AI Lead
- [12_File_System_Access_Guide.md](02_Development_Guides/12_File_System_Access_Guide.md) — **Phase 0-1**, owner: Backend Lead
- [13_Local_Development_Testing_Guide.md](02_Development_Guides/13_Local_Development_Testing_Guide.md) — **Phase 0-1**, owner: QA Lead
- [14_Codex_Prompting_Rules.md](02_Development_Guides/14_Codex_Prompting_Rules.md) — **Ongoing**, owner: Tech Lead
- [15_Dependency_Policy_Guide.md](02_Development_Guides/15_Dependency_Policy_Guide.md) — **Ongoing**, owner: Tech Lead
- [16_Branch_PR_Workflow_Guide.md](02_Development_Guides/16_Branch_PR_Workflow_Guide.md) — **Ongoing**, owner: Project Manager + Tech Lead
- [17_Phase_0_to_Phase_1_Handoff_Guide.md](02_Development_Guides/17_Phase_0_to_Phase_1_Handoff_Guide.md) — **Phase 0-1**, owner: Tech Lead

### 03_Database_Data
- [01_Data_Architecture_Overview.md](03_Database_Data/01_Data_Architecture_Overview.md) — **Phase 0**, owner: Backend Lead
- [02_AppData_Folder_Specification.md](03_Database_Data/02_AppData_Folder_Specification.md) — **Phase 0**, owner: Backend Lead
- [03_SQLite_Phase_0_Schema_Specification.md](03_Database_Data/03_SQLite_Phase_0_Schema_Specification.md) — **Phase 0**, owner: Backend Lead
- [04_Migration_System_Specification.md](03_Database_Data/04_Migration_System_Specification.md) — **Phase 0**, owner: Backend Lead
- [05_File_Asset_Metadata_Model.md](03_Database_Data/05_File_Asset_Metadata_Model.md) — **Phase 0-1**, owner: Backend Lead
- [06_Settings_Data_Model.md](03_Database_Data/06_Settings_Data_Model.md) — **Phase 0**, owner: Frontend + Backend Lead
- [07_Upscale_Job_Data_Model.md](03_Database_Data/07_Upscale_Job_Data_Model.md) — **Phase 0-1**, owner: AI + Backend Lead
- [08_Audit_Log_and_Event_Model.md](03_Database_Data/08_Audit_Log_and_Event_Model.md) — **Phase 0-1**, owner: Security + Backend Lead
- [09_Backup_Recovery_Data_Specification.md](03_Database_Data/09_Backup_Recovery_Data_Specification.md) — **Phase 0-1**, owner: Backend + DevOps Lead
- [10_FTS5_Search_Foundation_Specification.md](03_Database_Data/10_FTS5_Search_Foundation_Specification.md) — **Phase 0-1**, owner: Backend Lead

### 04_Hardware_Integration
- [01_Hardware_Integration_Strategy.md](04_Hardware_Integration/01_Hardware_Integration_Strategy.md) — **Phase 3-4**, owner: Hardware Lead
- [02_Printer_Discovery_Specification.md](04_Hardware_Integration/02_Printer_Discovery_Specification.md) — **Phase 3-4**, owner: Hardware Lead
- [03_RIP_Hot_Folder_Integration_Specification.md](04_Hardware_Integration/03_RIP_Hot_Folder_Integration_Specification.md) — **Phase 3-4**, owner: Backend + Hardware Lead
- [04_Direct_Printer_Adapter_Specification.md](04_Hardware_Integration/04_Direct_Printer_Adapter_Specification.md) — **Phase 3-4**, owner: Hardware Lead
- [05_Cutter_Integration_Specification.md](04_Hardware_Integration/05_Cutter_Integration_Specification.md) — **Phase 3-4**, owner: Hardware Lead
- [06_Contour_Cut_Export_Specification.md](04_Hardware_Integration/06_Contour_Cut_Export_Specification.md) — **Phase 3-4**, owner: Export + Hardware Lead
- [07_Heat_Press_Timer_Specification.md](04_Hardware_Integration/07_Heat_Press_Timer_Specification.md) — **Phase 3-4**, owner: Production Lead
- [08_Device_Status_Data_Model.md](04_Hardware_Integration/08_Device_Status_Data_Model.md) — **Phase 3-4**, owner: Backend Lead
- [09_Hardware_Queue_Specification.md](04_Hardware_Integration/09_Hardware_Queue_Specification.md) — **Phase 3-4**, owner: Backend Lead
- [10_Hardware_Error_Retry_Specification.md](04_Hardware_Integration/10_Hardware_Error_Retry_Specification.md) — **Phase 3-4**, owner: QA + Hardware Lead
- [11_Calibration_and_Test_Page_Specification.md](04_Hardware_Integration/11_Calibration_and_Test_Page_Specification.md) — **Phase 3-4**, owner: Color + Hardware Lead
- [12_ICC_Color_Pipeline_Specification.md](04_Hardware_Integration/12_ICC_Color_Pipeline_Specification.md) — **Phase 4**, owner: Color Lead
- [13_Vendor_Capability_Matrix.md](04_Hardware_Integration/13_Vendor_Capability_Matrix.md) — **Phase 3-4**, owner: Hardware Lead
- [14_Hardware_Acceptance_Test_Plan.md](04_Hardware_Integration/14_Hardware_Acceptance_Test_Plan.md) — **Phase 3-4**, owner: QA + Hardware Lead

### 05_Testing_QA
- [01_QA_Strategy.md](05_Testing_QA/01_QA_Strategy.md) — **Ongoing**, owner: QA Lead
- [02_Phase_0_Smoke_Test_Plan.md](05_Testing_QA/02_Phase_0_Smoke_Test_Plan.md) — **Phase 0**, owner: QA Lead
- [03_Installer_Test_Plan.md](05_Testing_QA/03_Installer_Test_Plan.md) — **Phase 0**, owner: DevOps + QA Lead
- [04_AppData_Permission_Test_Plan.md](05_Testing_QA/04_AppData_Permission_Test_Plan.md) — **Phase 0**, owner: Backend + QA Lead
- [05_SQLite_Migration_Test_Plan.md](05_Testing_QA/05_SQLite_Migration_Test_Plan.md) — **Phase 0**, owner: Backend + QA Lead
- [06_Settings_Test_Plan.md](05_Testing_QA/06_Settings_Test_Plan.md) — **Phase 0**, owner: Frontend + QA Lead
- [07_UI_Shell_Test_Plan.md](05_Testing_QA/07_UI_Shell_Test_Plan.md) — **Phase 0**, owner: Frontend + QA Lead
- [08_Tauri_Command_Test_Plan.md](05_Testing_QA/08_Tauri_Command_Test_Plan.md) — **Phase 0-1**, owner: Backend + QA Lead
- [09_Logging_Diagnostics_Test_Plan.md](05_Testing_QA/09_Logging_Diagnostics_Test_Plan.md) — **Phase 0-1**, owner: QA + Backend Lead
- [10_Real_ESRGAN_Test_Plan.md](05_Testing_QA/10_Real_ESRGAN_Test_Plan.md) — **Phase 0-1**, owner: AI + QA Lead
- [11_Performance_Baseline_Test_Plan.md](05_Testing_QA/11_Performance_Baseline_Test_Plan.md) — **Ongoing**, owner: QA Lead
- [12_Reliability_Crash_Recovery_Test_Plan.md](05_Testing_QA/12_Reliability_Crash_Recovery_Test_Plan.md) — **Ongoing**, owner: QA Lead
- [13_Security_Test_Plan.md](05_Testing_QA/13_Security_Test_Plan.md) — **Phase 1-2**, owner: Security + QA Lead
- [14_Accessibility_Test_Plan.md](05_Testing_QA/14_Accessibility_Test_Plan.md) — **Ongoing**, owner: QA Lead
- [15_Regression_Test_Plan.md](05_Testing_QA/15_Regression_Test_Plan.md) — **Ongoing**, owner: QA Lead
- [16_Test_Data_Fixtures_Specification.md](05_Testing_QA/16_Test_Data_Fixtures_Specification.md) — **Ongoing**, owner: QA Lead
- [17_Bug_Report_Template.md](05_Testing_QA/17_Bug_Report_Template.md) — **Ongoing**, owner: QA Lead
- [18_Release_Gate_QA_Checklist.md](05_Testing_QA/18_Release_Gate_QA_Checklist.md) — **Ongoing**, owner: QA Lead

### 06_Deployment_Release
- [01_Release_Strategy.md](06_Deployment_Release/01_Release_Strategy.md) — **Phase 5-6**, owner: Project Manager + DevOps Lead
- [02_Windows_Installer_Specification.md](06_Deployment_Release/02_Windows_Installer_Specification.md) — **Phase 5-6**, owner: DevOps Lead
- [03_Code_Signing_Specification.md](06_Deployment_Release/03_Code_Signing_Specification.md) — **Phase 5-6**, owner: DevOps + Security Lead
- [04_Auto_Update_Specification.md](06_Deployment_Release/04_Auto_Update_Specification.md) — **Phase 5-6**, owner: DevOps Lead
- [05_Offline_Update_Package_Specification.md](06_Deployment_Release/05_Offline_Update_Package_Specification.md) — **Phase 5-6**, owner: DevOps Lead
- [06_Rollback_Specification.md](06_Deployment_Release/06_Rollback_Specification.md) — **Phase 5-6**, owner: DevOps + Backend Lead
- [07_Release_Environment_Matrix.md](06_Deployment_Release/07_Release_Environment_Matrix.md) — **Phase 5-6**, owner: QA + DevOps Lead
- [08_Versioning_and_Build_Metadata.md](06_Deployment_Release/08_Versioning_and_Build_Metadata.md) — **Phase 5-6**, owner: Tech Lead
- [09_Build_Pipeline_Specification.md](06_Deployment_Release/09_Build_Pipeline_Specification.md) — **Phase 5-6**, owner: DevOps Lead
- [10_Beta_Release_Plan.md](06_Deployment_Release/10_Beta_Release_Plan.md) — **Phase 5-6**, owner: Project Manager
- [11_GA_Release_Checklist.md](06_Deployment_Release/11_GA_Release_Checklist.md) — **Phase 5-6**, owner: Project Manager + QA Lead

### 07_Security_Compliance
- [01_Security_Model.md](07_Security_Compliance/01_Security_Model.md) — **Phase 1-2**, owner: Security Lead
- [02_Local_Data_Protection_Specification.md](07_Security_Compliance/02_Local_Data_Protection_Specification.md) — **Phase 1-2**, owner: Security + Backend Lead
- [03_Role_Based_Access_Control_Specification.md](07_Security_Compliance/03_Role_Based_Access_Control_Specification.md) — **Phase 1-2**, owner: Security + Product Lead
- [04_Secure_File_System_Specification.md](07_Security_Compliance/04_Secure_File_System_Specification.md) — **Phase 1-2**, owner: Security + Backend Lead
- [05_Update_Verification_Security_Specification.md](07_Security_Compliance/05_Update_Verification_Security_Specification.md) — **Phase 1-2**, owner: Security + DevOps Lead
- [06_Crash_Report_Privacy_Specification.md](07_Security_Compliance/06_Crash_Report_Privacy_Specification.md) — **Phase 1-2**, owner: Security + QA Lead
- [07_Dependency_Security_Policy.md](07_Security_Compliance/07_Dependency_Security_Policy.md) — **Phase 1-2**, owner: Security + Tech Lead
- [08_Secure_Tauri_Commands_Specification.md](07_Security_Compliance/08_Secure_Tauri_Commands_Specification.md) — **Phase 1-2**, owner: Security + Backend Lead
- [09_Audit_Trail_Specification.md](07_Security_Compliance/09_Audit_Trail_Specification.md) — **Phase 1-2**, owner: Security + Backend Lead
- [10_Compliance_Checklist.md](07_Security_Compliance/10_Compliance_Checklist.md) — **Phase 1-2**, owner: Security Lead

### 08_User_Documentation
- [01_Getting_Started_Guide.md](08_User_Documentation/01_Getting_Started_Guide.md) — **Phase 5-6**, owner: Tech Writer
- [02_Installation_Guide.md](08_User_Documentation/02_Installation_Guide.md) — **Phase 5-6**, owner: Tech Writer + DevOps
- [03_First_Run_Setup_Guide.md](08_User_Documentation/03_First_Run_Setup_Guide.md) — **Phase 5-6**, owner: Tech Writer
- [04_Dashboard_User_Guide.md](08_User_Documentation/04_Dashboard_User_Guide.md) — **Phase 5-6**, owner: Tech Writer
- [05_Settings_User_Guide.md](08_User_Documentation/05_Settings_User_Guide.md) — **Phase 5-6**, owner: Tech Writer
- [06_Health_Check_User_Guide.md](08_User_Documentation/06_Health_Check_User_Guide.md) — **Phase 5-6**, owner: Tech Writer
- [07_Upscale_Factory_Basic_User_Guide.md](08_User_Documentation/07_Upscale_Factory_Basic_User_Guide.md) — **Phase 5-6**, owner: Tech Writer
- [08_Logs_and_Diagnostics_User_Guide.md](08_User_Documentation/08_Logs_and_Diagnostics_User_Guide.md) — **Phase 5-6**, owner: Tech Writer
- [09_Updates_User_Guide.md](08_User_Documentation/09_Updates_User_Guide.md) — **Phase 5-6**, owner: Tech Writer
- [10_Troubleshooting_Guide.md](08_User_Documentation/10_Troubleshooting_Guide.md) — **Phase 5-6**, owner: Tech Writer + Support

### 09_Project_Management
- [01_Project_Charter.md](09_Project_Management/01_Project_Charter.md) — **Ongoing**, owner: Product Manager
- [02_Phase_Plan.md](09_Project_Management/02_Phase_Plan.md) — **Ongoing**, owner: Project Manager
- [03_Sprint_Structure.md](09_Project_Management/03_Sprint_Structure.md) — **Ongoing**, owner: Project Manager + Tech Lead
- [04_Definition_of_Done.md](09_Project_Management/04_Definition_of_Done.md) — **Ongoing**, owner: Tech Lead + QA Lead
- [05_Change_Control_Process.md](09_Project_Management/05_Change_Control_Process.md) — **Ongoing**, owner: Product Manager
- [06_Risk_Management_Process.md](09_Project_Management/06_Risk_Management_Process.md) — **Ongoing**, owner: Project Manager
- [07_Traceability_Matrix.md](09_Project_Management/07_Traceability_Matrix.md) — **Ongoing**, owner: QA + Product Manager
- [08_Developer_Handoff_Guide.md](09_Project_Management/08_Developer_Handoff_Guide.md) — **Ongoing**, owner: Tech Lead

## Global constraints used in all documents

- Offline Windows desktop application; no mandatory cloud service for core workflows.
- Local-first storage under `%APPDATA%/SublimationPrintOS`; never write production data into Program Files.
- Pure sublimation production scope only: image intake, AI upscale, QC, design store, design studio, order basket, nesting, export, hardware, color, diagnostics, reports.
- Explicitly excluded: inventory, CRM, RTO/returns, shipping/logistics, GST/accounting, salesperson management, loyalty points, marketplace warehouse features.
- Phase 0 must not pretend later modules are complete; use honest placeholders where a future module is referenced.
- Every feature must have acceptance criteria and tests before it is marked complete.

## Source documents used

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


---


# Codex Prompt — Rebuild SublimationPrintOS Documentation Properly

Paste this into Codex when the repository contains the source markdown files.

```text
You are working in GitHub repo: hjadhav2009-sys/SublimationPrintOS

Task: Rebuild the documentation pack into developer-grade documentation.

Important:
Do NOT generate generic template docs.
Do NOT invent features not present in source requirements.
Do NOT mark future features as complete.
Do NOT include inventory, CRM, returns/RTO, shipping/logistics, accounting/GST, salesperson, loyalty, or marketplace warehouse scope.

Source of truth:
- docs/SublimationPrintOS_Functional_Requirements.md
- docs/SublimationPrintOS_Non_Functional_Requirements.md
- docs/SublimationPrintOS_Phase_Roadmap.md
- docs/SublimationPrintOS_Milestone_Plan.md
- docs/SublimationPrintOS_Gantt_Chart.md
- docs/SublimationPrintOS_Risk_Register.md
- docs/SublimationPrintOS_User_Stories.md
- docs/SublimationPrintOS_Use_Case_Diagrams.md
- docs/SublimationPrintOS_Workflow_Diagrams.md
- docs/SublimationPrintOS_Master_Feature_List.md
- docs/SublimationPrintOS_Change_Management.md

If file names differ, search /docs for equivalent files and list what you found before writing new docs.

Create these categories and exact counts:
1. UI/UX Design — 13 docs — Phase 0
2. Development Guides — 17 docs — Phase 0-1
3. Database & Data — 10 docs — Phase 0
4. Hardware Integration — 14 docs — Phase 3-4
5. Testing & QA — 18 docs — Ongoing
6. Deployment & Release — 11 docs — Phase 5-6
7. Security & Compliance — 10 docs — Phase 1-2
8. User Documentation — 10 docs — Phase 5-6
9. Project Management — 8 docs — Ongoing

For every document include:
- Document ID
- Version
- Phase
- Owner
- Purpose
- Source-of-truth references
- Scope and out-of-scope
- Concrete implementation details
- File/folder paths affected
- Data contracts where relevant
- UI states where relevant
- Acceptance criteria
- QA/test evidence required
- Codex implementation rules
- Head developer review questions

Quality bar:
- Each doc must be specific to SublimationPrintOS.
- Mention actual product architecture: offline Windows desktop, Tauri/React/TypeScript, Rust/Tauri commands, SQLite WAL, AppData local storage, Real-ESRGAN ncnn Vulkan, future nesting/export/hardware modules.
- Include Phase 0 M0 acceptance criteria in relevant docs.
- Include risk IDs where relevant: R-001, R-002, R-003, R-004, R-005, R-025, R-028, R-029.
- Include requirement IDs where relevant: UF, DS, Order Basket, Print Sheet, Export, Hardware, Color, Settings.
- Do not write marketing copy.
- Do not use filler language.

Output structure:

docs/v2/
├── 00_MASTER_INDEX.md
├── 00_HEAD_DEVELOPER_README.md
├── 01_UI_UX_Design/
├── 02_Development_Guides/
├── 03_Database_Data/
├── 04_Hardware_Integration/
├── 05_Testing_QA/
├── 06_Deployment_Release/
├── 07_Security_Compliance/
├── 08_User_Documentation/
└── 09_Project_Management/

After writing docs:
1. Count files per category.
2. Confirm total count = 111.
3. Print a table of created docs.
4. Print any assumptions or missing source files.
5. Do not modify application code in this task.
```



---


# SublimationPrintOS — Phase 0 UX Architecture

> **Document ID:** 01_UI_UX_Design-01  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** UI/UX Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Define the actual shell, route model, production-floor UX rules, and screen ownership for the first runnable desktop app.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
src/App.tsx
src/app/routes.ts
src/app/navigation.ts
src/components/layout/
src/components/ui/
src/pages/
src/styles/theme.css
src/styles/globals.css
```

UI work must be screen-specific, keyboard-friendly, dark-mode first, and honest about placeholder modules.



## UI Detail Requirements

### Component States

Every visible control must define:

| State | Required Behavior |
|---|---|
| default | readable label and action |
| hover/focus | visible focus ring and cursor feedback |
| disabled | reason visible or tooltip available |
| loading | spinner or progress text |
| error | stable message and error code if backend-related |
| success | short confirmation without blocking production flow |

### Dark Mode Rules

- Background must not be pure black; use layered dark surfaces.
- Text contrast must support production-floor lighting.
- Status colors must use text labels: Pass, Warning, Fail, Unknown.
- Buttons must not rely on color only.

### Placeholder Rules

A placeholder must say exactly what is missing and in which phase it will be implemented.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Phase 0 UX Architecture**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Dashboard UX Specification

> **Document ID:** 01_UI_UX_Design-02  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** UI/UX Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Define the first screen, cards, backend connectivity indicators, phase status, and honest placeholder behavior.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
src/App.tsx
src/app/routes.ts
src/app/navigation.ts
src/components/layout/
src/components/ui/
src/pages/
src/styles/theme.css
src/styles/globals.css
```

UI work must be screen-specific, keyboard-friendly, dark-mode first, and honest about placeholder modules.



## Screen Contract: Dashboard

The Dashboard is the first screen after app startup. It must show Phase 0 foundation status only.

### Required Cards

| Card | Phase 0 Behavior | Future Behavior |
|---|---|---|
| Foundation Status | Shows bootstrap/backend/settings readiness. | Links to release readiness dashboard. |
| AppData Storage | Shows placeholder until storage service exists. | Shows folder health and disk usage. |
| SQLite Database | Shows `Not configured yet` until DB prompt. | Shows DB version and migration status. |
| Settings System | Shows placeholder until settings service. | Opens Settings page and validation warnings. |
| Real-ESRGAN Engine | Shows `Coming later in Phase 0`. | Shows GPU/CPU engine status. |
| Health Check | Links to Health Check placeholder. | Runs full checks. |
| Crash Recovery | Shows future placeholder. | Shows last recovery snapshot status. |
| Installer | Shows development mode. | Shows installed version/build/update status. |

### Backend Connectivity

Dashboard must call `ping_backend` through Tauri. UI states:

```text
Backend: Connected
Backend: Not connected
Backend: Checking...
```

Never silently hide backend failure.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Dashboard UX Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Navigation Layout Specification

> **Document ID:** 01_UI_UX_Design-03  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** Frontend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Define sidebar, top bar, status bar, route naming, active states, keyboard navigation, and phase badges.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
src/App.tsx
src/app/routes.ts
src/app/navigation.ts
src/components/layout/
src/components/ui/
src/pages/
src/styles/theme.css
src/styles/globals.css
```

UI work must be screen-specific, keyboard-friendly, dark-mode first, and honest about placeholder modules.



## Layout Contract

```text
TopBar: product name, phase badge, offline mode, system status
Sidebar: Dashboard, Settings, Health Check, Upscale Test, Logs, Updates, Shortcuts
Main: current route content
StatusBar: app version, phase, storage, database, AI engine
```

### Route Names

| Route | Path | Phase 0 Status |
|---|---|---|
| Dashboard | `/` | Functional shell |
| Settings | `/settings` | Placeholder structure |
| Health Check | `/health-check` | Placeholder structure |
| Upscale Test | `/upscale-test` | Placeholder until AI runner |
| Logs | `/logs` | Placeholder until log service |
| Updates | `/updates` | Placeholder until updater |
| Shortcuts | `/shortcuts` | Static list until shortcut engine |

Active route must be visually clear and keyboard reachable.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Navigation Layout Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Settings UX Specification

> **Document ID:** 01_UI_UX_Design-04  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** Frontend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Define company settings, defaults, storage, update and upscale configuration screens with validation behavior.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
src/App.tsx
src/app/routes.ts
src/app/navigation.ts
src/components/layout/
src/components/ui/
src/pages/
src/styles/theme.css
src/styles/globals.css
```

UI work must be screen-specific, keyboard-friendly, dark-mode first, and honest about placeholder modules.



## Settings Screen Contract

Settings must be divided into these exact sections:

1. Company Settings
2. App Defaults
3. Production Defaults
4. Upscale Defaults
5. Storage Settings
6. Update Settings

### Phase 0 Fields

| Section | Field | Validation |
|---|---|---|
| Company | company name | required after first-run setup, max 120 chars |
| App | theme | dark/light/system; dark default |
| App | language | English initially; Hindi-ready keys later |
| Production | unit | mm/inch/px |
| Production | default DPI | 300 or 600 in early UI |
| Production | default margins/gap/bleed | numeric, non-negative |
| Upscale | default scale | 2×/4×/8× |
| Storage | AppData root | read-only display in Phase 0 |
| Updates | offline package | future file picker placeholder |

Phase 0 may use mock data before Settings Service exists, but the UI must match this structure.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Settings UX Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Health Check UX Specification

> **Document ID:** 01_UI_UX_Design-05  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** Frontend + Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Define health check panels, pass/warn/fail states, user actions, and diagnostic report flows.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
src/App.tsx
src/app/routes.ts
src/app/navigation.ts
src/components/layout/
src/components/ui/
src/pages/
src/styles/theme.css
src/styles/globals.css
```

UI work must be screen-specific, keyboard-friendly, dark-mode first, and honest about placeholder modules.



## Health Check UX Contract

Health check items:

| Check | State Values | User Action |
|---|---|---|
| Windows compatibility | pass/warn/fail/unknown | show OS version details |
| AppData permission | pass/warn/fail/unknown | open folder / retry |
| SQLite status | pass/warn/fail/unknown | run repair later |
| GPU/Vulkan status | pass/warn/fail/unknown | run GPU test later |
| Real-ESRGAN binary | pass/warn/fail/unknown | locate/install later |
| Disk space | pass/warn/fail/unknown | open storage settings |
| Memory | pass/warn/fail/unknown | show recommended RAM |

Status color cannot be the only information; include label and message.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Health Check UX Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Upscale Test UX Specification

> **Document ID:** 01_UI_UX_Design-06  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** AI + Frontend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Define the Phase 0 single-image Real-ESRGAN test screen without pretending the full Upscale Factory exists.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
src/App.tsx
src/app/routes.ts
src/app/navigation.ts
src/components/layout/
src/components/ui/
src/pages/
src/styles/theme.css
src/styles/globals.css
```

UI work must be screen-specific, keyboard-friendly, dark-mode first, and honest about placeholder modules.



## Upscale Test UX Contract

Phase 0 screen has two stages:

### Stage A: Before AI Runner

Show explanatory placeholder:

```text
Real-ESRGAN integration will be implemented in a later Phase 0 task.
This page is reserved for testing one local image with GPU/CPU fallback.
```

### Stage B: After AI Runner

Required single-image test flow:

```text
Pick image → select 2×/4× → run GPU → fallback CPU if needed → validate output → show output path/log
```

Related requirement IDs:

- UF-001 single file upload
- UF-002 multi-file upload
- UF-003 folder upload
- UF-004 archive extraction
- UF-007 hot folder monitoring
- UF-011 Real-ESRGAN ncnn Vulkan integration
- UF-012 2×/4×/8× upscale
- UF-015 GPU auto-select
- UF-016 CPU fallback
- UF-017 tiled processing
- UF-021 blur detection
- UF-026 MD5/SHA duplicate detection
- UF-027 perceptual hash similar detection
- UF-031 before/after split view
- UF-038 approved images move to Design Store


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Upscale Test UX Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Logs and Diagnostics UX Specification

> **Document ID:** 01_UI_UX_Design-07  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** QA + Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Define how logs are viewed, filtered, exported, and redacted in a local desktop app.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
src/App.tsx
src/app/routes.ts
src/app/navigation.ts
src/components/layout/
src/components/ui/
src/pages/
src/styles/theme.css
src/styles/globals.css
```

UI work must be screen-specific, keyboard-friendly, dark-mode first, and honest about placeholder modules.



## UI Detail Requirements

### Component States

Every visible control must define:

| State | Required Behavior |
|---|---|
| default | readable label and action |
| hover/focus | visible focus ring and cursor feedback |
| disabled | reason visible or tooltip available |
| loading | spinner or progress text |
| error | stable message and error code if backend-related |
| success | short confirmation without blocking production flow |

### Dark Mode Rules

- Background must not be pure black; use layered dark surfaces.
- Text contrast must support production-floor lighting.
- Status colors must use text labels: Pass, Warning, Fail, Unknown.
- Buttons must not rely on color only.

### Placeholder Rules

A placeholder must say exactly what is missing and in which phase it will be implemented.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Logs and Diagnostics UX Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Updates UX Specification

> **Document ID:** 01_UI_UX_Design-08  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** DevOps Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Define offline update package UX, rollback messaging, update safety states, and non-blocking behavior.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
src/App.tsx
src/app/routes.ts
src/app/navigation.ts
src/components/layout/
src/components/ui/
src/pages/
src/styles/theme.css
src/styles/globals.css
```

UI work must be screen-specific, keyboard-friendly, dark-mode first, and honest about placeholder modules.



## UI Detail Requirements

### Component States

Every visible control must define:

| State | Required Behavior |
|---|---|
| default | readable label and action |
| hover/focus | visible focus ring and cursor feedback |
| disabled | reason visible or tooltip available |
| loading | spinner or progress text |
| error | stable message and error code if backend-related |
| success | short confirmation without blocking production flow |

### Dark Mode Rules

- Background must not be pure black; use layered dark surfaces.
- Text contrast must support production-floor lighting.
- Status colors must use text labels: Pass, Warning, Fail, Unknown.
- Buttons must not rely on color only.

### Placeholder Rules

A placeholder must say exactly what is missing and in which phase it will be implemented.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Updates UX Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Shortcuts UX Specification

> **Document ID:** 01_UI_UX_Design-09  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** Frontend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Define shortcut display, reserved shortcuts, customization boundary, and conflict feedback.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
src/App.tsx
src/app/routes.ts
src/app/navigation.ts
src/components/layout/
src/components/ui/
src/pages/
src/styles/theme.css
src/styles/globals.css
```

UI work must be screen-specific, keyboard-friendly, dark-mode first, and honest about placeholder modules.



## UI Detail Requirements

### Component States

Every visible control must define:

| State | Required Behavior |
|---|---|
| default | readable label and action |
| hover/focus | visible focus ring and cursor feedback |
| disabled | reason visible or tooltip available |
| loading | spinner or progress text |
| error | stable message and error code if backend-related |
| success | short confirmation without blocking production flow |

### Dark Mode Rules

- Background must not be pure black; use layered dark surfaces.
- Text contrast must support production-floor lighting.
- Status colors must use text labels: Pass, Warning, Fail, Unknown.
- Buttons must not rely on color only.

### Placeholder Rules

A placeholder must say exactly what is missing and in which phase it will be implemented.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Shortcuts UX Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Empty Loading Error States

> **Document ID:** 01_UI_UX_Design-10  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** UI/UX Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Define reusable UX patterns for empty states, loading states, errors, success messages, and disabled future features.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
src/App.tsx
src/app/routes.ts
src/app/navigation.ts
src/components/layout/
src/components/ui/
src/pages/
src/styles/theme.css
src/styles/globals.css
```

UI work must be screen-specific, keyboard-friendly, dark-mode first, and honest about placeholder modules.



## UI Detail Requirements

### Component States

Every visible control must define:

| State | Required Behavior |
|---|---|
| default | readable label and action |
| hover/focus | visible focus ring and cursor feedback |
| disabled | reason visible or tooltip available |
| loading | spinner or progress text |
| error | stable message and error code if backend-related |
| success | short confirmation without blocking production flow |

### Dark Mode Rules

- Background must not be pure black; use layered dark surfaces.
- Text contrast must support production-floor lighting.
- Status colors must use text labels: Pass, Warning, Fail, Unknown.
- Buttons must not rely on color only.

### Placeholder Rules

A placeholder must say exactly what is missing and in which phase it will be implemented.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Empty Loading Error States**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Design Tokens and Theme System

> **Document ID:** 01_UI_UX_Design-11  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** Frontend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Define dark-mode tokens, spacing, type scale, semantic colors, status badges, and CSS variable contract.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
src/App.tsx
src/app/routes.ts
src/app/navigation.ts
src/components/layout/
src/components/ui/
src/pages/
src/styles/theme.css
src/styles/globals.css
```

UI work must be screen-specific, keyboard-friendly, dark-mode first, and honest about placeholder modules.



## UI Detail Requirements

### Component States

Every visible control must define:

| State | Required Behavior |
|---|---|
| default | readable label and action |
| hover/focus | visible focus ring and cursor feedback |
| disabled | reason visible or tooltip available |
| loading | spinner or progress text |
| error | stable message and error code if backend-related |
| success | short confirmation without blocking production flow |

### Dark Mode Rules

- Background must not be pure black; use layered dark surfaces.
- Text contrast must support production-floor lighting.
- Status colors must use text labels: Pass, Warning, Fail, Unknown.
- Buttons must not rely on color only.

### Placeholder Rules

A placeholder must say exactly what is missing and in which phase it will be implemented.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Design Tokens and Theme System**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Accessibility and Localization UX

> **Document ID:** 01_UI_UX_Design-12  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** UI/UX + QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Define minimum accessibility, readable production-floor UI, keyboard operation, Hindi/English text support, and localization keys.

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
src/App.tsx
src/app/routes.ts
src/app/navigation.ts
src/components/layout/
src/components/ui/
src/pages/
src/styles/theme.css
src/styles/globals.css
```

UI work must be screen-specific, keyboard-friendly, dark-mode first, and honest about placeholder modules.



## UI Detail Requirements

### Component States

Every visible control must define:

| State | Required Behavior |
|---|---|
| default | readable label and action |
| hover/focus | visible focus ring and cursor feedback |
| disabled | reason visible or tooltip available |
| loading | spinner or progress text |
| error | stable message and error code if backend-related |
| success | short confirmation without blocking production flow |

### Dark Mode Rules

- Background must not be pure black; use layered dark surfaces.
- Text contrast must support production-floor lighting.
- Status colors must use text labels: Pass, Warning, Fail, Unknown.
- Buttons must not rely on color only.

### Placeholder Rules

A placeholder must say exactly what is missing and in which phase it will be implemented.


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

When Codex works on **Accessibility and Localization UX**:

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



---


# SublimationPrintOS — Phase 0 UI Acceptance Checklist

> **Document ID:** 01_UI_UX_Design-13  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Provide exact acceptance checklist for every Phase 0 UI screen before it can be marked done.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
src/App.tsx
src/app/routes.ts
src/app/navigation.ts
src/components/layout/
src/components/ui/
src/pages/
src/styles/theme.css
src/styles/globals.css
```

UI work must be screen-specific, keyboard-friendly, dark-mode first, and honest about placeholder modules.



## UI Detail Requirements

### Component States

Every visible control must define:

| State | Required Behavior |
|---|---|
| default | readable label and action |
| hover/focus | visible focus ring and cursor feedback |
| disabled | reason visible or tooltip available |
| loading | spinner or progress text |
| error | stable message and error code if backend-related |
| success | short confirmation without blocking production flow |

### Dark Mode Rules

- Background must not be pure black; use layered dark surfaces.
- Text contrast must support production-floor lighting.
- Status colors must use text labels: Pass, Warning, Fail, Unknown.
- Buttons must not rely on color only.

### Placeholder Rules

A placeholder must say exactly what is missing and in which phase it will be implemented.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Phase 0 UI Acceptance Checklist**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Repository Setup Guide

> **Document ID:** 02_Development_Guides-01  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** Tech Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Exact repo scaffold, commands, folder rules, and dev environment expectations for Codex and human developers.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## Required Initial Repo Shape

```text
/
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
├── docs/
├── generated/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── app/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── types/
└── src-tauri/
    ├── Cargo.toml
    ├── tauri.conf.json
    └── src/
```

## Required Commands

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run tauri:dev
npm run tauri:build
```

Codex must report which commands ran and their result.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Repository Setup Guide**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Architecture Boundaries Guide

> **Document ID:** 02_Development_Guides-02  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines what belongs in frontend, Tauri backend, database, file system, AI runner, and future modules.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## Developer Rules

### Code Quality

- TypeScript strict mode must pass.
- React components must be small and screen-specific.
- Backend commands must be typed and validated.
- File system actions must go through backend services.
- No module should directly access random absolute paths.

### PR Evidence

Every PR must include:

1. What changed
2. Why it changed
3. Screenshots for UI changes
4. Commands run
5. Tests added/updated
6. Known limitations
7. Next recommended prompt


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

When Codex works on **Architecture Boundaries Guide**:

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



---


# SublimationPrintOS — Frontend Coding Standards

> **Document ID:** 02_Development_Guides-03  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** Frontend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Rules for React, TypeScript, components, route files, hooks, CSS, and no fake implementations.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## Developer Rules

### Code Quality

- TypeScript strict mode must pass.
- React components must be small and screen-specific.
- Backend commands must be typed and validated.
- File system actions must go through backend services.
- No module should directly access random absolute paths.

### PR Evidence

Every PR must include:

1. What changed
2. Why it changed
3. Screenshots for UI changes
4. Commands run
5. Tests added/updated
6. Known limitations
7. Next recommended prompt


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

When Codex works on **Frontend Coding Standards**:

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



---


# SublimationPrintOS — Tauri Command Contract Guide

> **Document ID:** 02_Development_Guides-04  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines safe command design, typed responses, validation, error codes, and no arbitrary shell access.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## Tauri Command Contract

All backend commands return a typed result:

```ts
type CommandResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: { code: string; message: string; details?: string } };
```

Initial commands:

| Command | Purpose |
|---|---|
| `ping_backend` | Verify frontend/backend bridge |
| `get_app_version` | Return version/build placeholder |
| `get_phase_info` | Return current phase metadata |
| `get_app_data_path` | Added during storage prompt |
| `run_health_check` | Added during health prompt |

No command may execute arbitrary shell text from the frontend.


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

When Codex works on **Tauri Command Contract Guide**:

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



---


# SublimationPrintOS — Service Layer Pattern Guide

> **Document ID:** 02_Development_Guides-05  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines local service classes/modules for settings, storage, migrations, health, logs, jobs, and AI commands.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## Developer Rules

### Code Quality

- TypeScript strict mode must pass.
- React components must be small and screen-specific.
- Backend commands must be typed and validated.
- File system actions must go through backend services.
- No module should directly access random absolute paths.

### PR Evidence

Every PR must include:

1. What changed
2. Why it changed
3. Screenshots for UI changes
4. Commands run
5. Tests added/updated
6. Known limitations
7. Next recommended prompt


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

When Codex works on **Service Layer Pattern Guide**:

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



---


# SublimationPrintOS — App Bootstrap Lifecycle Guide

> **Document ID:** 02_Development_Guides-06  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** Backend + Frontend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines startup order: folders, logs, database, migrations, settings, health, recovery, UI readiness.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## Developer Rules

### Code Quality

- TypeScript strict mode must pass.
- React components must be small and screen-specific.
- Backend commands must be typed and validated.
- File system actions must go through backend services.
- No module should directly access random absolute paths.

### PR Evidence

Every PR must include:

1. What changed
2. Why it changed
3. Screenshots for UI changes
4. Commands run
5. Tests added/updated
6. Known limitations
7. Next recommended prompt


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **App Bootstrap Lifecycle Guide**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Error Handling and Result Types Guide

> **Document ID:** 02_Development_Guides-07  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** QA + Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines stable error codes, user-safe messages, technical detail storage, and retry behavior.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## Developer Rules

### Code Quality

- TypeScript strict mode must pass.
- React components must be small and screen-specific.
- Backend commands must be typed and validated.
- File system actions must go through backend services.
- No module should directly access random absolute paths.

### PR Evidence

Every PR must include:

1. What changed
2. Why it changed
3. Screenshots for UI changes
4. Commands run
5. Tests added/updated
6. Known limitations
7. Next recommended prompt


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

When Codex works on **Error Handling and Result Types Guide**:

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



---


# SublimationPrintOS — Configuration and Feature Flags Guide

> **Document ID:** 02_Development_Guides-08  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** Product + Tech Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines feature flag structure, future module gates, and no hidden completed claims.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## Developer Rules

### Code Quality

- TypeScript strict mode must pass.
- React components must be small and screen-specific.
- Backend commands must be typed and validated.
- File system actions must go through backend services.
- No module should directly access random absolute paths.

### PR Evidence

Every PR must include:

1. What changed
2. Why it changed
3. Screenshots for UI changes
4. Commands run
5. Tests added/updated
6. Known limitations
7. Next recommended prompt


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

When Codex works on **Configuration and Feature Flags Guide**:

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



---


# SublimationPrintOS — Logging Implementation Guide

> **Document ID:** 02_Development_Guides-09  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines log files, JSON line format, retention, redaction, diagnostic ZIP, and audit separation.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## Developer Rules

### Code Quality

- TypeScript strict mode must pass.
- React components must be small and screen-specific.
- Backend commands must be typed and validated.
- File system actions must go through backend services.
- No module should directly access random absolute paths.

### PR Evidence

Every PR must include:

1. What changed
2. Why it changed
3. Screenshots for UI changes
4. Commands run
5. Tests added/updated
6. Known limitations
7. Next recommended prompt


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

When Codex works on **Logging Implementation Guide**:

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



---


# SublimationPrintOS — Background Job Queue Guide

> **Document ID:** 02_Development_Guides-10  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines job state machine, cancellation, progress, persistence, and future batch upscale expansion.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## Developer Rules

### Code Quality

- TypeScript strict mode must pass.
- React components must be small and screen-specific.
- Backend commands must be typed and validated.
- File system actions must go through backend services.
- No module should directly access random absolute paths.

### PR Evidence

Every PR must include:

1. What changed
2. Why it changed
3. Screenshots for UI changes
4. Commands run
5. Tests added/updated
6. Known limitations
7. Next recommended prompt


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

When Codex works on **Background Job Queue Guide**:

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



---


# SublimationPrintOS — Real-ESRGAN Runner Guide

> **Document ID:** 02_Development_Guides-11  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** AI Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines local sidecar binary handling, GPU/CPU fallback, model folders, command building, and output validation.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## AI Runner Contract

Real-ESRGAN is a local sidecar binary, not an online API.

### Required Runner Inputs

| Field | Type | Rule |
|---|---|---|
| input_path | path | must be inside allowed user-selected file scope |
| output_path | path | must be under AppData job/output folder unless user exports |
| scale | enum | 2, 4, 8 initially; custom later |
| model | string | validated against installed model list |
| gpu_mode | enum | auto/manual/cpu_only |
| tile_size | number | required for large images |

### Status Flow

```text
QUEUED → VALIDATING_INPUT → CHECKING_GPU → RUNNING_GPU → VALIDATING_OUTPUT → COMPLETED
                              ↓
                         RUNNING_CPU_FALLBACK
                              ↓
                            FAILED
```

Risk coverage:

- R-001 GPU integration failure
- R-007 GPU crash data loss
- R-008 batch queue memory leak
- R-021 GPU driver incompatibility


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

When Codex works on **Real-ESRGAN Runner Guide**:

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



---


# SublimationPrintOS — File System Access Guide

> **Document ID:** 02_Development_Guides-12  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines safe AppData paths, atomic writes, temp cleanup, file pickers, relative paths, and permission checks.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## Developer Rules

### Code Quality

- TypeScript strict mode must pass.
- React components must be small and screen-specific.
- Backend commands must be typed and validated.
- File system actions must go through backend services.
- No module should directly access random absolute paths.

### PR Evidence

Every PR must include:

1. What changed
2. Why it changed
3. Screenshots for UI changes
4. Commands run
5. Tests added/updated
6. Known limitations
7. Next recommended prompt


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

When Codex works on **File System Access Guide**:

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



---


# SublimationPrintOS — Local Development Testing Guide

> **Document ID:** 02_Development_Guides-13  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines how devs run typecheck/build/tests and verify Windows desktop behavior before PR.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## Developer Rules

### Code Quality

- TypeScript strict mode must pass.
- React components must be small and screen-specific.
- Backend commands must be typed and validated.
- File system actions must go through backend services.
- No module should directly access random absolute paths.

### PR Evidence

Every PR must include:

1. What changed
2. Why it changed
3. Screenshots for UI changes
4. Commands run
5. Tests added/updated
6. Known limitations
7. Next recommended prompt


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

When Codex works on **Local Development Testing Guide**:

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



---


# SublimationPrintOS — Codex Prompting Rules

> **Document ID:** 02_Development_Guides-14  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** Tech Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Rules for giving Codex small implementation prompts with scope boundaries, verification commands, and final summaries.

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

Applies throughout the project lifecycle.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## Developer Rules

### Code Quality

- TypeScript strict mode must pass.
- React components must be small and screen-specific.
- Backend commands must be typed and validated.
- File system actions must go through backend services.
- No module should directly access random absolute paths.

### PR Evidence

Every PR must include:

1. What changed
2. Why it changed
3. Screenshots for UI changes
4. Commands run
5. Tests added/updated
6. Known limitations
7. Next recommended prompt


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Codex Prompting Rules**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Dependency Policy Guide

> **Document ID:** 02_Development_Guides-15  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** Tech Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines allowed dependencies, review requirements, license checks, and no heavy packages without reason.

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

Applies throughout the project lifecycle.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## Developer Rules

### Code Quality

- TypeScript strict mode must pass.
- React components must be small and screen-specific.
- Backend commands must be typed and validated.
- File system actions must go through backend services.
- No module should directly access random absolute paths.

### PR Evidence

Every PR must include:

1. What changed
2. Why it changed
3. Screenshots for UI changes
4. Commands run
5. Tests added/updated
6. Known limitations
7. Next recommended prompt


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Dependency Policy Guide**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Branch PR Workflow Guide

> **Document ID:** 02_Development_Guides-16  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** Project Manager + Tech Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines branch naming, PR template, review gates, commits, screenshots, and test evidence.

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

Applies throughout the project lifecycle.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## Developer Rules

### Code Quality

- TypeScript strict mode must pass.
- React components must be small and screen-specific.
- Backend commands must be typed and validated.
- File system actions must go through backend services.
- No module should directly access random absolute paths.

### PR Evidence

Every PR must include:

1. What changed
2. Why it changed
3. Screenshots for UI changes
4. Commands run
5. Tests added/updated
6. Known limitations
7. Next recommended prompt


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Branch PR Workflow Guide**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Phase 0 to Phase 1 Handoff Guide

> **Document ID:** 02_Development_Guides-17  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** Tech Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines when Phase 0 foundation is stable enough for Upscale Factory and Design Store development.

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
README.md
package.json
tsconfig.json
src/
src-tauri/
docs/
generated/
```

Development guide work must explain exact commands, folder ownership, safe backend/frontend boundaries, and verification steps.



## Developer Rules

### Code Quality

- TypeScript strict mode must pass.
- React components must be small and screen-specific.
- Backend commands must be typed and validated.
- File system actions must go through backend services.
- No module should directly access random absolute paths.

### PR Evidence

Every PR must include:

1. What changed
2. Why it changed
3. Screenshots for UI changes
4. Commands run
5. Tests added/updated
6. Known limitations
7. Next recommended prompt


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

When Codex works on **Phase 0 to Phase 1 Handoff Guide**:

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



---


# SublimationPrintOS — Data Architecture Overview

> **Document ID:** 03_Database_Data-01  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines local data ownership, SQLite vs files, relative paths, checksums, and module data boundaries.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Data Architecture Overview**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — AppData Folder Specification

> **Document ID:** 03_Database_Data-02  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Exact folder tree, purpose of every directory, permission checks, cleanup rules, and portability rules.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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



## Required AppData Tree

```text
%APPDATA%/SublimationPrintOS/
├── app.db
├── settings/
├── assets/
│   ├── raw/
│   ├── upscaled/
│   ├── approved/
│   ├── rejected/
│   ├── thumbnails/small/
│   ├── thumbnails/medium/
│   ├── thumbnails/large/
│   └── temp/
├── models/realesrgan/
├── jobs/upscale/
├── jobs/exports/
├── jobs/recovery/
├── logs/
├── backups/daily/
├── backups/before-update/
├── backups/before-migration/
├── updates/downloaded/
├── updates/staged/
├── updates/rollback/
└── diagnostics/
```

## Folder Rules

- Create folders on first launch.
- Verify read/write permission per folder.
- Store relative paths in SQLite.
- Clean temp only after checking no active job references it.
- Never include design images in diagnostic ZIP by default.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **AppData Folder Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — SQLite Phase 0 Schema Specification

> **Document ID:** 03_Database_Data-03  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Tables, fields, indexes, relationships, and status enums for foundation modules.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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



## Phase 0 Tables

| Table | Purpose |
|---|---|
| `app_meta` | app install id, schema version, created_at |
| `schema_migrations` | applied migrations and checksums |
| `settings` | key-value or JSON settings store |
| `users` | local users foundation |
| `roles` | Admin/Designer/Worker/Viewer foundation |
| `file_assets` | files on disk with metadata and checksum |
| `designs` | design records foundation for Phase 1 |
| `design_versions` | version history foundation |
| `upscale_jobs` | AI upscale job parent |
| `upscale_job_items` | image-level processing rows |
| `quality_checks` | blur/artifact/resolution check foundation |
| `audit_logs` | settings/security/recovery operations |
| `system_health_checks` | health check results |
| `crash_reports` | local crash metadata, redacted |
| `background_tasks` | job framework foundation |
| `notifications` | local alerts foundation |
| `keyboard_shortcuts` | shortcut registry |
| `feature_flags` | phase gates |
| `backup_runs` | backups and verification results |
| `update_packages` | staged/installed update package metadata |

Use `created_at`, `updated_at`, and `deleted_at` where useful. Enable foreign keys.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **SQLite Phase 0 Schema Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Migration System Specification

> **Document ID:** 03_Database_Data-04  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Migration file naming, transaction rules, backup-before-migration, rollback strategy, and schema versioning.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Migration System Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — File Asset Metadata Model

> **Document ID:** 03_Database_Data-05  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines source files, processed files, thumbnails, checksums, MIME types, dimensions, and design ownership.

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

When Codex works on **File Asset Metadata Model**:

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



---


# SublimationPrintOS — Settings Data Model

> **Document ID:** 03_Database_Data-06  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** Frontend + Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines company settings, defaults, storage, update, shortcuts, and validation schema.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Settings Data Model**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Upscale Job Data Model

> **Document ID:** 03_Database_Data-07  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** AI + Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines jobs, job items, status flow, progress, logs, output files, errors, and retry rules.

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



## Upscale Job Entities

### `upscale_jobs`

```text
id, job_code, status, source_type, requested_scale, model_name,
gpu_mode, output_format, total_items, completed_items, failed_items,
created_by, started_at, completed_at, error_code, error_message
```

### `upscale_job_items`

```text
id, job_id, source_asset_id, output_asset_id, status, input_path,
output_path, input_width, input_height, output_width, output_height,
progress_percent, started_at, completed_at, error_code, error_message
```

Status enum:

```text
QUEUED, VALIDATING_INPUT, CHECKING_GPU, RUNNING_GPU,
RUNNING_CPU_FALLBACK, VALIDATING_OUTPUT, COMPLETED, FAILED, CANCELLED
```

Related functional IDs:

- UF-001 single file upload
- UF-002 multi-file upload
- UF-003 folder upload
- UF-004 archive extraction
- UF-007 hot folder monitoring
- UF-011 Real-ESRGAN ncnn Vulkan integration
- UF-012 2×/4×/8× upscale
- UF-015 GPU auto-select
- UF-016 CPU fallback
- UF-017 tiled processing
- UF-021 blur detection
- UF-026 MD5/SHA duplicate detection
- UF-027 perceptual hash similar detection
- UF-031 before/after split view
- UF-038 approved images move to Design Store


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

When Codex works on **Upscale Job Data Model**:

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



---


# SublimationPrintOS — Audit Log and Event Model

> **Document ID:** 03_Database_Data-08  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** Security + Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines audit vs app logs, user actions, settings changes, migrations, updates, and privacy rules.

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

When Codex works on **Audit Log and Event Model**:

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



---


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



---


# SublimationPrintOS — FTS5 Search Foundation Specification

> **Document ID:** 03_Database_Data-10  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines future search indexes for Design Store without implementing full Phase 1 UI prematurely.

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

When Codex works on **FTS5 Search Foundation Specification**:

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



---


# SublimationPrintOS — Hardware Integration Strategy

> **Document ID:** 04_Hardware_Integration-01  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines adapter architecture, hardware abstraction, phase boundaries, and offline safe operation.

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

When Codex works on **Hardware Integration Strategy**:

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



---


# SublimationPrintOS — Printer Discovery Specification

> **Document ID:** 04_Hardware_Integration-02  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines how printers are listed, identified, status-checked, and represented in the app.

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

When Codex works on **Printer Discovery Specification**:

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



---


# SublimationPrintOS — RIP Hot Folder Integration Specification

> **Document ID:** 04_Hardware_Integration-03  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 3-4  
> **Owner:** Backend + Hardware Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines watched/export folders, retry rules, JDF/JMF readiness, and failure handling.

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

When Codex works on **RIP Hot Folder Integration Specification**:

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



---


# SublimationPrintOS — Direct Printer Adapter Specification

> **Document ID:** 04_Hardware_Integration-04  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines when direct printing is allowed, limitations, spooler integration, and fallback to hot folders.

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

When Codex works on **Direct Printer Adapter Specification**:

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



---


# SublimationPrintOS — Cutter Integration Specification

> **Document ID:** 04_Hardware_Integration-05  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines contour cut path handling, vendor adapter boundaries, cutter queues, and safety checks.

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

When Codex works on **Cutter Integration Specification**:

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



---


# SublimationPrintOS — Contour Cut Export Specification

> **Document ID:** 04_Hardware_Integration-06  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 3-4  
> **Owner:** Export + Hardware Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines SVG/DXF/PDF cut paths, registration marks, bleed, safe zones, and page linkage.

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

When Codex works on **Contour Cut Export Specification**:

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



---


# SublimationPrintOS — Heat Press Timer Specification

> **Document ID:** 04_Hardware_Integration-07  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 3-4  
> **Owner:** Production Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines press presets, alarms, substrate mapping, operator acknowledgement, and safety boundaries.

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

When Codex works on **Heat Press Timer Specification**:

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



---


# SublimationPrintOS — Device Status Data Model

> **Document ID:** 04_Hardware_Integration-08  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 3-4  
> **Owner:** Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines device registry, status states, capabilities, heartbeat, last error, and diagnostics.

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

When Codex works on **Device Status Data Model**:

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



---


# SublimationPrintOS — Hardware Queue Specification

> **Document ID:** 04_Hardware_Integration-09  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 3-4  
> **Owner:** Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines print/cut/press queue states, assignment, retries, cancellation, and operator visibility.

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

When Codex works on **Hardware Queue Specification**:

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



---


# SublimationPrintOS — Hardware Error Retry Specification

> **Document ID:** 04_Hardware_Integration-10  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 3-4  
> **Owner:** QA + Hardware Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines retry policy for disconnected printers, failed hot folder writes, offline cutters, and stuck jobs.

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

When Codex works on **Hardware Error Retry Specification**:

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



---


# SublimationPrintOS — Calibration and Test Page Specification

> **Document ID:** 04_Hardware_Integration-11  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 3-4  
> **Owner:** Color + Hardware Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines nozzle check placeholders, alignment sheets, color strips, and validation outputs.

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

When Codex works on **Calibration and Test Page Specification**:

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



---


# SublimationPrintOS — ICC Color Pipeline Specification

> **Document ID:** 04_Hardware_Integration-12  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 4  
> **Owner:** Color Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines profile selection, embedding, soft proofing, rendering intent, and Delta E verification expectations.

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

Export System & Color Management: multi-format export, ICC profiles, soft proofing, PDF/X readiness.

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

- [ ] The document has a clear owner and phase: **Phase 4**.
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

When Codex works on **ICC Color Pipeline Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 4** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Vendor Capability Matrix

> **Document ID:** 04_Hardware_Integration-13  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 3-4  
> **Owner:** Hardware Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines capabilities for Epson/Roland/Mimaki/Mutoh printers and Summa/Graphtec/Zünd cutters as extensible rows.

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

When Codex works on **Vendor Capability Matrix**:

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



---


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



---


# SublimationPrintOS — QA Strategy

> **Document ID:** 05_Testing_QA-01  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Full QA approach across phases with traceability from requirements to tests and release gates.

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

Applies throughout the project lifecycle.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## QA Traceability

QA must trace tests to:

- Functional requirement IDs such as UF, DS, Order Basket, Print Sheet, Export, Hardware, Color, Settings.
- Non-functional targets for startup, UI performance, storage, reliability, security, and diagnostics.
- Milestone gates M0 through M6.
- Risks: R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs, R-002 canvas performance with 500+ objects, R-003 true-shape nesting too slow, R-004 SQLite corruption under heavy load, R-005 PDF/X-4 compliance fails in RIP, R-025 3,000-feature scope creep, R-028 color accuracy Delta E > 2.0, R-029 nesting efficiency < 80%.

## Standard Test Case Format

| Field | Required Content |
|---|---|
| Test ID | Stable ID like `QA-P0-INSTALL-001` |
| Requirement | Source requirement or user story |
| Environment | OS, RAM, GPU, disk, app version |
| Preconditions | Existing data, settings, files |
| Steps | Exact user/developer steps |
| Expected Result | Measurable result |
| Evidence | Screenshot/log/terminal output |
| Severity if Failed | Blocker/Critical/Major/Minor |

## M0 Tests That Always Apply

- Installer completes on clean Windows 10/11 VM.
- App launches from desktop shortcut in ≤ 10 seconds.
- Settings can be configured and persist across restart.
- Real-ESRGAN upscales one 1920×1080 image to 4× on GPU in target environment.
- CPU fallback completes if GPU is unavailable or fails.
- Auto-save recovery file is created every 2 minutes.
- Health check passes on recommended hardware.
- Forced crash shows recovery dialog on relaunch.
- One-hour smoke test has zero crashes.


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **QA Strategy**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Phase 0 Smoke Test Plan

> **Document ID:** 05_Testing_QA-02  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Exact M0 smoke tests for install, launch, settings, upscale, fallback, health, crash recovery.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## QA Traceability

QA must trace tests to:

- Functional requirement IDs such as UF, DS, Order Basket, Print Sheet, Export, Hardware, Color, Settings.
- Non-functional targets for startup, UI performance, storage, reliability, security, and diagnostics.
- Milestone gates M0 through M6.
- Risks: R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs, R-002 canvas performance with 500+ objects, R-003 true-shape nesting too slow, R-004 SQLite corruption under heavy load, R-005 PDF/X-4 compliance fails in RIP, R-025 3,000-feature scope creep, R-028 color accuracy Delta E > 2.0, R-029 nesting efficiency < 80%.

## Standard Test Case Format

| Field | Required Content |
|---|---|
| Test ID | Stable ID like `QA-P0-INSTALL-001` |
| Requirement | Source requirement or user story |
| Environment | OS, RAM, GPU, disk, app version |
| Preconditions | Existing data, settings, files |
| Steps | Exact user/developer steps |
| Expected Result | Measurable result |
| Evidence | Screenshot/log/terminal output |
| Severity if Failed | Blocker/Critical/Major/Minor |

## M0 Tests That Always Apply

- Installer completes on clean Windows 10/11 VM.
- App launches from desktop shortcut in ≤ 10 seconds.
- Settings can be configured and persist across restart.
- Real-ESRGAN upscales one 1920×1080 image to 4× on GPU in target environment.
- CPU fallback completes if GPU is unavailable or fails.
- Auto-save recovery file is created every 2 minutes.
- Health check passes on recommended hardware.
- Forced crash shows recovery dialog on relaunch.
- One-hour smoke test has zero crashes.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Phase 0 Smoke Test Plan**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Installer Test Plan

> **Document ID:** 05_Testing_QA-03  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** DevOps + QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Tests for Windows 10/11 clean VM, non-admin accounts, silent mode, portable mode, uninstall, and upgrades.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## QA Traceability

QA must trace tests to:

- Functional requirement IDs such as UF, DS, Order Basket, Print Sheet, Export, Hardware, Color, Settings.
- Non-functional targets for startup, UI performance, storage, reliability, security, and diagnostics.
- Milestone gates M0 through M6.
- Risks: R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs, R-002 canvas performance with 500+ objects, R-003 true-shape nesting too slow, R-004 SQLite corruption under heavy load, R-005 PDF/X-4 compliance fails in RIP, R-025 3,000-feature scope creep, R-028 color accuracy Delta E > 2.0, R-029 nesting efficiency < 80%.

## Standard Test Case Format

| Field | Required Content |
|---|---|
| Test ID | Stable ID like `QA-P0-INSTALL-001` |
| Requirement | Source requirement or user story |
| Environment | OS, RAM, GPU, disk, app version |
| Preconditions | Existing data, settings, files |
| Steps | Exact user/developer steps |
| Expected Result | Measurable result |
| Evidence | Screenshot/log/terminal output |
| Severity if Failed | Blocker/Critical/Major/Minor |

## M0 Tests That Always Apply

- Installer completes on clean Windows 10/11 VM.
- App launches from desktop shortcut in ≤ 10 seconds.
- Settings can be configured and persist across restart.
- Real-ESRGAN upscales one 1920×1080 image to 4× on GPU in target environment.
- CPU fallback completes if GPU is unavailable or fails.
- Auto-save recovery file is created every 2 minutes.
- Health check passes on recommended hardware.
- Forced crash shows recovery dialog on relaunch.
- One-hour smoke test has zero crashes.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Installer Test Plan**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — AppData Permission Test Plan

> **Document ID:** 05_Testing_QA-04  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** Backend + QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Tests for folder creation, write/read/delete, locked files, disk full, and permission denial.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## Required AppData Tree

```text
%APPDATA%/SublimationPrintOS/
├── app.db
├── settings/
├── assets/
│   ├── raw/
│   ├── upscaled/
│   ├── approved/
│   ├── rejected/
│   ├── thumbnails/small/
│   ├── thumbnails/medium/
│   ├── thumbnails/large/
│   └── temp/
├── models/realesrgan/
├── jobs/upscale/
├── jobs/exports/
├── jobs/recovery/
├── logs/
├── backups/daily/
├── backups/before-update/
├── backups/before-migration/
├── updates/downloaded/
├── updates/staged/
├── updates/rollback/
└── diagnostics/
```

## Folder Rules

- Create folders on first launch.
- Verify read/write permission per folder.
- Store relative paths in SQLite.
- Clean temp only after checking no active job references it.
- Never include design images in diagnostic ZIP by default.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **AppData Permission Test Plan**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — SQLite Migration Test Plan

> **Document ID:** 05_Testing_QA-05  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** Backend + QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Tests for first install, upgrade migrations, backup before migration, corruption handling, and rollback.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## QA Traceability

QA must trace tests to:

- Functional requirement IDs such as UF, DS, Order Basket, Print Sheet, Export, Hardware, Color, Settings.
- Non-functional targets for startup, UI performance, storage, reliability, security, and diagnostics.
- Milestone gates M0 through M6.
- Risks: R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs, R-002 canvas performance with 500+ objects, R-003 true-shape nesting too slow, R-004 SQLite corruption under heavy load, R-005 PDF/X-4 compliance fails in RIP, R-025 3,000-feature scope creep, R-028 color accuracy Delta E > 2.0, R-029 nesting efficiency < 80%.

## Standard Test Case Format

| Field | Required Content |
|---|---|
| Test ID | Stable ID like `QA-P0-INSTALL-001` |
| Requirement | Source requirement or user story |
| Environment | OS, RAM, GPU, disk, app version |
| Preconditions | Existing data, settings, files |
| Steps | Exact user/developer steps |
| Expected Result | Measurable result |
| Evidence | Screenshot/log/terminal output |
| Severity if Failed | Blocker/Critical/Major/Minor |

## M0 Tests That Always Apply

- Installer completes on clean Windows 10/11 VM.
- App launches from desktop shortcut in ≤ 10 seconds.
- Settings can be configured and persist across restart.
- Real-ESRGAN upscales one 1920×1080 image to 4× on GPU in target environment.
- CPU fallback completes if GPU is unavailable or fails.
- Auto-save recovery file is created every 2 minutes.
- Health check passes on recommended hardware.
- Forced crash shows recovery dialog on relaunch.
- One-hour smoke test has zero crashes.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **SQLite Migration Test Plan**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Settings Test Plan

> **Document ID:** 05_Testing_QA-06  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** Frontend + QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Tests for settings persistence, validation, default values, import/export, and reset behavior.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## QA Traceability

QA must trace tests to:

- Functional requirement IDs such as UF, DS, Order Basket, Print Sheet, Export, Hardware, Color, Settings.
- Non-functional targets for startup, UI performance, storage, reliability, security, and diagnostics.
- Milestone gates M0 through M6.
- Risks: R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs, R-002 canvas performance with 500+ objects, R-003 true-shape nesting too slow, R-004 SQLite corruption under heavy load, R-005 PDF/X-4 compliance fails in RIP, R-025 3,000-feature scope creep, R-028 color accuracy Delta E > 2.0, R-029 nesting efficiency < 80%.

## Standard Test Case Format

| Field | Required Content |
|---|---|
| Test ID | Stable ID like `QA-P0-INSTALL-001` |
| Requirement | Source requirement or user story |
| Environment | OS, RAM, GPU, disk, app version |
| Preconditions | Existing data, settings, files |
| Steps | Exact user/developer steps |
| Expected Result | Measurable result |
| Evidence | Screenshot/log/terminal output |
| Severity if Failed | Blocker/Critical/Major/Minor |

## M0 Tests That Always Apply

- Installer completes on clean Windows 10/11 VM.
- App launches from desktop shortcut in ≤ 10 seconds.
- Settings can be configured and persist across restart.
- Real-ESRGAN upscales one 1920×1080 image to 4× on GPU in target environment.
- CPU fallback completes if GPU is unavailable or fails.
- Auto-save recovery file is created every 2 minutes.
- Health check passes on recommended hardware.
- Forced crash shows recovery dialog on relaunch.
- One-hour smoke test has zero crashes.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **Settings Test Plan**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — UI Shell Test Plan

> **Document ID:** 05_Testing_QA-07  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0  
> **Owner:** Frontend + QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Tests for route loading, dark mode, responsive layout, keyboard navigation, and honest placeholders.

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

Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## QA Traceability

QA must trace tests to:

- Functional requirement IDs such as UF, DS, Order Basket, Print Sheet, Export, Hardware, Color, Settings.
- Non-functional targets for startup, UI performance, storage, reliability, security, and diagnostics.
- Milestone gates M0 through M6.
- Risks: R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs, R-002 canvas performance with 500+ objects, R-003 true-shape nesting too slow, R-004 SQLite corruption under heavy load, R-005 PDF/X-4 compliance fails in RIP, R-025 3,000-feature scope creep, R-028 color accuracy Delta E > 2.0, R-029 nesting efficiency < 80%.

## Standard Test Case Format

| Field | Required Content |
|---|---|
| Test ID | Stable ID like `QA-P0-INSTALL-001` |
| Requirement | Source requirement or user story |
| Environment | OS, RAM, GPU, disk, app version |
| Preconditions | Existing data, settings, files |
| Steps | Exact user/developer steps |
| Expected Result | Measurable result |
| Evidence | Screenshot/log/terminal output |
| Severity if Failed | Blocker/Critical/Major/Minor |

## M0 Tests That Always Apply

- Installer completes on clean Windows 10/11 VM.
- App launches from desktop shortcut in ≤ 10 seconds.
- Settings can be configured and persist across restart.
- Real-ESRGAN upscales one 1920×1080 image to 4× on GPU in target environment.
- CPU fallback completes if GPU is unavailable or fails.
- Auto-save recovery file is created every 2 minutes.
- Health check passes on recommended hardware.
- Forced crash shows recovery dialog on relaunch.
- One-hour smoke test has zero crashes.


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

- [ ] The document has a clear owner and phase: **Phase 0**.
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

When Codex works on **UI Shell Test Plan**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 0** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Tauri Command Test Plan

> **Document ID:** 05_Testing_QA-08  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** Backend + QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Tests for command contracts, validation, error codes, and frontend/backend connectivity.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## Tauri Command Contract

All backend commands return a typed result:

```ts
type CommandResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: { code: string; message: string; details?: string } };
```

Initial commands:

| Command | Purpose |
|---|---|
| `ping_backend` | Verify frontend/backend bridge |
| `get_app_version` | Return version/build placeholder |
| `get_phase_info` | Return current phase metadata |
| `get_app_data_path` | Added during storage prompt |
| `run_health_check` | Added during health prompt |

No command may execute arbitrary shell text from the frontend.


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

When Codex works on **Tauri Command Test Plan**:

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



---


# SublimationPrintOS — Logging Diagnostics Test Plan

> **Document ID:** 05_Testing_QA-09  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** QA + Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Tests for log creation, redaction, diagnostic ZIP, retention, and error visibility.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## QA Traceability

QA must trace tests to:

- Functional requirement IDs such as UF, DS, Order Basket, Print Sheet, Export, Hardware, Color, Settings.
- Non-functional targets for startup, UI performance, storage, reliability, security, and diagnostics.
- Milestone gates M0 through M6.
- Risks: R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs, R-002 canvas performance with 500+ objects, R-003 true-shape nesting too slow, R-004 SQLite corruption under heavy load, R-005 PDF/X-4 compliance fails in RIP, R-025 3,000-feature scope creep, R-028 color accuracy Delta E > 2.0, R-029 nesting efficiency < 80%.

## Standard Test Case Format

| Field | Required Content |
|---|---|
| Test ID | Stable ID like `QA-P0-INSTALL-001` |
| Requirement | Source requirement or user story |
| Environment | OS, RAM, GPU, disk, app version |
| Preconditions | Existing data, settings, files |
| Steps | Exact user/developer steps |
| Expected Result | Measurable result |
| Evidence | Screenshot/log/terminal output |
| Severity if Failed | Blocker/Critical/Major/Minor |

## M0 Tests That Always Apply

- Installer completes on clean Windows 10/11 VM.
- App launches from desktop shortcut in ≤ 10 seconds.
- Settings can be configured and persist across restart.
- Real-ESRGAN upscales one 1920×1080 image to 4× on GPU in target environment.
- CPU fallback completes if GPU is unavailable or fails.
- Auto-save recovery file is created every 2 minutes.
- Health check passes on recommended hardware.
- Forced crash shows recovery dialog on relaunch.
- One-hour smoke test has zero crashes.


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

When Codex works on **Logging Diagnostics Test Plan**:

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



---


# SublimationPrintOS — Real-ESRGAN Test Plan

> **Document ID:** 05_Testing_QA-10  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 0-1  
> **Owner:** AI + QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Tests for GPU, CPU fallback, tiling, output validation, cancellation, and memory safety.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## AI Runner Contract

Real-ESRGAN is a local sidecar binary, not an online API.

### Required Runner Inputs

| Field | Type | Rule |
|---|---|---|
| input_path | path | must be inside allowed user-selected file scope |
| output_path | path | must be under AppData job/output folder unless user exports |
| scale | enum | 2, 4, 8 initially; custom later |
| model | string | validated against installed model list |
| gpu_mode | enum | auto/manual/cpu_only |
| tile_size | number | required for large images |

### Status Flow

```text
QUEUED → VALIDATING_INPUT → CHECKING_GPU → RUNNING_GPU → VALIDATING_OUTPUT → COMPLETED
                              ↓
                         RUNNING_CPU_FALLBACK
                              ↓
                            FAILED
```

Risk coverage:

- R-001 GPU integration failure
- R-007 GPU crash data loss
- R-008 batch queue memory leak
- R-021 GPU driver incompatibility


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

When Codex works on **Real-ESRGAN Test Plan**:

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



---


# SublimationPrintOS — Performance Baseline Test Plan

> **Document ID:** 05_Testing_QA-11  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Tests for cold start, module switch, thumbnail load, canvas FPS, nesting timing, and export time.

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

Applies throughout the project lifecycle.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## QA Traceability

QA must trace tests to:

- Functional requirement IDs such as UF, DS, Order Basket, Print Sheet, Export, Hardware, Color, Settings.
- Non-functional targets for startup, UI performance, storage, reliability, security, and diagnostics.
- Milestone gates M0 through M6.
- Risks: R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs, R-002 canvas performance with 500+ objects, R-003 true-shape nesting too slow, R-004 SQLite corruption under heavy load, R-005 PDF/X-4 compliance fails in RIP, R-025 3,000-feature scope creep, R-028 color accuracy Delta E > 2.0, R-029 nesting efficiency < 80%.

## Standard Test Case Format

| Field | Required Content |
|---|---|
| Test ID | Stable ID like `QA-P0-INSTALL-001` |
| Requirement | Source requirement or user story |
| Environment | OS, RAM, GPU, disk, app version |
| Preconditions | Existing data, settings, files |
| Steps | Exact user/developer steps |
| Expected Result | Measurable result |
| Evidence | Screenshot/log/terminal output |
| Severity if Failed | Blocker/Critical/Major/Minor |

## M0 Tests That Always Apply

- Installer completes on clean Windows 10/11 VM.
- App launches from desktop shortcut in ≤ 10 seconds.
- Settings can be configured and persist across restart.
- Real-ESRGAN upscales one 1920×1080 image to 4× on GPU in target environment.
- CPU fallback completes if GPU is unavailable or fails.
- Auto-save recovery file is created every 2 minutes.
- Health check passes on recommended hardware.
- Forced crash shows recovery dialog on relaunch.
- One-hour smoke test has zero crashes.


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Performance Baseline Test Plan**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Reliability Crash Recovery Test Plan

> **Document ID:** 05_Testing_QA-12  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Tests for forced crash, power loss simulation, partial export cleanup, and recovery dialog.

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

Applies throughout the project lifecycle.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## QA Traceability

QA must trace tests to:

- Functional requirement IDs such as UF, DS, Order Basket, Print Sheet, Export, Hardware, Color, Settings.
- Non-functional targets for startup, UI performance, storage, reliability, security, and diagnostics.
- Milestone gates M0 through M6.
- Risks: R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs, R-002 canvas performance with 500+ objects, R-003 true-shape nesting too slow, R-004 SQLite corruption under heavy load, R-005 PDF/X-4 compliance fails in RIP, R-025 3,000-feature scope creep, R-028 color accuracy Delta E > 2.0, R-029 nesting efficiency < 80%.

## Standard Test Case Format

| Field | Required Content |
|---|---|
| Test ID | Stable ID like `QA-P0-INSTALL-001` |
| Requirement | Source requirement or user story |
| Environment | OS, RAM, GPU, disk, app version |
| Preconditions | Existing data, settings, files |
| Steps | Exact user/developer steps |
| Expected Result | Measurable result |
| Evidence | Screenshot/log/terminal output |
| Severity if Failed | Blocker/Critical/Major/Minor |

## M0 Tests That Always Apply

- Installer completes on clean Windows 10/11 VM.
- App launches from desktop shortcut in ≤ 10 seconds.
- Settings can be configured and persist across restart.
- Real-ESRGAN upscales one 1920×1080 image to 4× on GPU in target environment.
- CPU fallback completes if GPU is unavailable or fails.
- Auto-save recovery file is created every 2 minutes.
- Health check passes on recommended hardware.
- Forced crash shows recovery dialog on relaunch.
- One-hour smoke test has zero crashes.


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Reliability Crash Recovery Test Plan**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Security Test Plan

> **Document ID:** 05_Testing_QA-13  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 1-2  
> **Owner:** Security + QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Tests for local data protection, safe commands, update verification, roles, and privacy.

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

Applies throughout the project lifecycle.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## QA Traceability

QA must trace tests to:

- Functional requirement IDs such as UF, DS, Order Basket, Print Sheet, Export, Hardware, Color, Settings.
- Non-functional targets for startup, UI performance, storage, reliability, security, and diagnostics.
- Milestone gates M0 through M6.
- Risks: R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs, R-002 canvas performance with 500+ objects, R-003 true-shape nesting too slow, R-004 SQLite corruption under heavy load, R-005 PDF/X-4 compliance fails in RIP, R-025 3,000-feature scope creep, R-028 color accuracy Delta E > 2.0, R-029 nesting efficiency < 80%.

## Standard Test Case Format

| Field | Required Content |
|---|---|
| Test ID | Stable ID like `QA-P0-INSTALL-001` |
| Requirement | Source requirement or user story |
| Environment | OS, RAM, GPU, disk, app version |
| Preconditions | Existing data, settings, files |
| Steps | Exact user/developer steps |
| Expected Result | Measurable result |
| Evidence | Screenshot/log/terminal output |
| Severity if Failed | Blocker/Critical/Major/Minor |

## M0 Tests That Always Apply

- Installer completes on clean Windows 10/11 VM.
- App launches from desktop shortcut in ≤ 10 seconds.
- Settings can be configured and persist across restart.
- Real-ESRGAN upscales one 1920×1080 image to 4× on GPU in target environment.
- CPU fallback completes if GPU is unavailable or fails.
- Auto-save recovery file is created every 2 minutes.
- Health check passes on recommended hardware.
- Forced crash shows recovery dialog on relaunch.
- One-hour smoke test has zero crashes.


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

- [ ] The document has a clear owner and phase: **Phase 1-2**.
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

When Codex works on **Security Test Plan**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 1-2** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Accessibility Test Plan

> **Document ID:** 05_Testing_QA-14  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Keyboard, contrast, focus, readable text, screen-size, and localization checks.

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

Applies throughout the project lifecycle.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## QA Traceability

QA must trace tests to:

- Functional requirement IDs such as UF, DS, Order Basket, Print Sheet, Export, Hardware, Color, Settings.
- Non-functional targets for startup, UI performance, storage, reliability, security, and diagnostics.
- Milestone gates M0 through M6.
- Risks: R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs, R-002 canvas performance with 500+ objects, R-003 true-shape nesting too slow, R-004 SQLite corruption under heavy load, R-005 PDF/X-4 compliance fails in RIP, R-025 3,000-feature scope creep, R-028 color accuracy Delta E > 2.0, R-029 nesting efficiency < 80%.

## Standard Test Case Format

| Field | Required Content |
|---|---|
| Test ID | Stable ID like `QA-P0-INSTALL-001` |
| Requirement | Source requirement or user story |
| Environment | OS, RAM, GPU, disk, app version |
| Preconditions | Existing data, settings, files |
| Steps | Exact user/developer steps |
| Expected Result | Measurable result |
| Evidence | Screenshot/log/terminal output |
| Severity if Failed | Blocker/Critical/Major/Minor |

## M0 Tests That Always Apply

- Installer completes on clean Windows 10/11 VM.
- App launches from desktop shortcut in ≤ 10 seconds.
- Settings can be configured and persist across restart.
- Real-ESRGAN upscales one 1920×1080 image to 4× on GPU in target environment.
- CPU fallback completes if GPU is unavailable or fails.
- Auto-save recovery file is created every 2 minutes.
- Health check passes on recommended hardware.
- Forced crash shows recovery dialog on relaunch.
- One-hour smoke test has zero crashes.


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Accessibility Test Plan**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Regression Test Plan

> **Document ID:** 05_Testing_QA-15  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines regression packs by phase and how Codex changes must not break previous milestones.

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

Applies throughout the project lifecycle.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## QA Traceability

QA must trace tests to:

- Functional requirement IDs such as UF, DS, Order Basket, Print Sheet, Export, Hardware, Color, Settings.
- Non-functional targets for startup, UI performance, storage, reliability, security, and diagnostics.
- Milestone gates M0 through M6.
- Risks: R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs, R-002 canvas performance with 500+ objects, R-003 true-shape nesting too slow, R-004 SQLite corruption under heavy load, R-005 PDF/X-4 compliance fails in RIP, R-025 3,000-feature scope creep, R-028 color accuracy Delta E > 2.0, R-029 nesting efficiency < 80%.

## Standard Test Case Format

| Field | Required Content |
|---|---|
| Test ID | Stable ID like `QA-P0-INSTALL-001` |
| Requirement | Source requirement or user story |
| Environment | OS, RAM, GPU, disk, app version |
| Preconditions | Existing data, settings, files |
| Steps | Exact user/developer steps |
| Expected Result | Measurable result |
| Evidence | Screenshot/log/terminal output |
| Severity if Failed | Blocker/Critical/Major/Minor |

## M0 Tests That Always Apply

- Installer completes on clean Windows 10/11 VM.
- App launches from desktop shortcut in ≤ 10 seconds.
- Settings can be configured and persist across restart.
- Real-ESRGAN upscales one 1920×1080 image to 4× on GPU in target environment.
- CPU fallback completes if GPU is unavailable or fails.
- Auto-save recovery file is created every 2 minutes.
- Health check passes on recommended hardware.
- Forced crash shows recovery dialog on relaunch.
- One-hour smoke test has zero crashes.


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Regression Test Plan**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Test Data Fixtures Specification

> **Document ID:** 05_Testing_QA-16  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines sample images, large files, duplicate images, blurry images, design library fixtures, and hardware mocks.

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

Applies throughout the project lifecycle.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## QA Traceability

QA must trace tests to:

- Functional requirement IDs such as UF, DS, Order Basket, Print Sheet, Export, Hardware, Color, Settings.
- Non-functional targets for startup, UI performance, storage, reliability, security, and diagnostics.
- Milestone gates M0 through M6.
- Risks: R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs, R-002 canvas performance with 500+ objects, R-003 true-shape nesting too slow, R-004 SQLite corruption under heavy load, R-005 PDF/X-4 compliance fails in RIP, R-025 3,000-feature scope creep, R-028 color accuracy Delta E > 2.0, R-029 nesting efficiency < 80%.

## Standard Test Case Format

| Field | Required Content |
|---|---|
| Test ID | Stable ID like `QA-P0-INSTALL-001` |
| Requirement | Source requirement or user story |
| Environment | OS, RAM, GPU, disk, app version |
| Preconditions | Existing data, settings, files |
| Steps | Exact user/developer steps |
| Expected Result | Measurable result |
| Evidence | Screenshot/log/terminal output |
| Severity if Failed | Blocker/Critical/Major/Minor |

## M0 Tests That Always Apply

- Installer completes on clean Windows 10/11 VM.
- App launches from desktop shortcut in ≤ 10 seconds.
- Settings can be configured and persist across restart.
- Real-ESRGAN upscales one 1920×1080 image to 4× on GPU in target environment.
- CPU fallback completes if GPU is unavailable or fails.
- Auto-save recovery file is created every 2 minutes.
- Health check passes on recommended hardware.
- Forced crash shows recovery dialog on relaunch.
- One-hour smoke test has zero crashes.


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Test Data Fixtures Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Bug Report Template

> **Document ID:** 05_Testing_QA-17  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Exact bug format with environment, steps, expected/actual, logs, screenshots, and severity.

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

Applies throughout the project lifecycle.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## QA Traceability

QA must trace tests to:

- Functional requirement IDs such as UF, DS, Order Basket, Print Sheet, Export, Hardware, Color, Settings.
- Non-functional targets for startup, UI performance, storage, reliability, security, and diagnostics.
- Milestone gates M0 through M6.
- Risks: R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs, R-002 canvas performance with 500+ objects, R-003 true-shape nesting too slow, R-004 SQLite corruption under heavy load, R-005 PDF/X-4 compliance fails in RIP, R-025 3,000-feature scope creep, R-028 color accuracy Delta E > 2.0, R-029 nesting efficiency < 80%.

## Standard Test Case Format

| Field | Required Content |
|---|---|
| Test ID | Stable ID like `QA-P0-INSTALL-001` |
| Requirement | Source requirement or user story |
| Environment | OS, RAM, GPU, disk, app version |
| Preconditions | Existing data, settings, files |
| Steps | Exact user/developer steps |
| Expected Result | Measurable result |
| Evidence | Screenshot/log/terminal output |
| Severity if Failed | Blocker/Critical/Major/Minor |

## M0 Tests That Always Apply

- Installer completes on clean Windows 10/11 VM.
- App launches from desktop shortcut in ≤ 10 seconds.
- Settings can be configured and persist across restart.
- Real-ESRGAN upscales one 1920×1080 image to 4× on GPU in target environment.
- CPU fallback completes if GPU is unavailable or fails.
- Auto-save recovery file is created every 2 minutes.
- Health check passes on recommended hardware.
- Forced crash shows recovery dialog on relaunch.
- One-hour smoke test has zero crashes.


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Bug Report Template**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Release Gate QA Checklist

> **Document ID:** 05_Testing_QA-18  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

QA gates for Alpha 0, Alpha 1, Beta, and GA readiness.

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

Applies throughout the project lifecycle.

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
tests/
src/**/*.test.tsx
src-tauri/tests/
docs/05_Testing_QA/
qa/fixtures/
qa/reports/
```

QA docs must describe exact environment, steps, data, expected result, and evidence required.



## QA Traceability

QA must trace tests to:

- Functional requirement IDs such as UF, DS, Order Basket, Print Sheet, Export, Hardware, Color, Settings.
- Non-functional targets for startup, UI performance, storage, reliability, security, and diagnostics.
- Milestone gates M0 through M6.
- Risks: R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs, R-002 canvas performance with 500+ objects, R-003 true-shape nesting too slow, R-004 SQLite corruption under heavy load, R-005 PDF/X-4 compliance fails in RIP, R-025 3,000-feature scope creep, R-028 color accuracy Delta E > 2.0, R-029 nesting efficiency < 80%.

## Standard Test Case Format

| Field | Required Content |
|---|---|
| Test ID | Stable ID like `QA-P0-INSTALL-001` |
| Requirement | Source requirement or user story |
| Environment | OS, RAM, GPU, disk, app version |
| Preconditions | Existing data, settings, files |
| Steps | Exact user/developer steps |
| Expected Result | Measurable result |
| Evidence | Screenshot/log/terminal output |
| Severity if Failed | Blocker/Critical/Major/Minor |

## M0 Tests That Always Apply

- Installer completes on clean Windows 10/11 VM.
- App launches from desktop shortcut in ≤ 10 seconds.
- Settings can be configured and persist across restart.
- Real-ESRGAN upscales one 1920×1080 image to 4× on GPU in target environment.
- CPU fallback completes if GPU is unavailable or fails.
- Auto-save recovery file is created every 2 minutes.
- Health check passes on recommended hardware.
- Forced crash shows recovery dialog on relaunch.
- One-hour smoke test has zero crashes.


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Release Gate QA Checklist**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Release Strategy

> **Document ID:** 06_Deployment_Release-01  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** Project Manager + DevOps Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines alpha, beta, GA, hotfix, versioning, and release ownership.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
src-tauri/tauri.conf.json
.github/workflows/
release/
installer/
updates/
docs/06_Deployment_Release/
```

Deployment work must be safe for offline shops and must include rollback and verification.



## Release Safety Contract

Deployment must support shops that work offline. Online checks are optional and must never block production.

### Release Artifacts

| Artifact | Required Verification |
|---|---|
| Windows installer `.exe` | code signed, hash generated |
| Portable package | hash generated, documented limitations |
| Offline update package | signature + SHA-256 verification |
| Changelog | user-readable and developer-readable sections |
| Migration bundle | tested against previous version DB |
| Rollback package | verified before update is marked successful |

### Release Gate

No release unless typecheck/build/tests pass and QA evidence is attached.


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Release Strategy**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Windows Installer Specification

> **Document ID:** 06_Deployment_Release-02  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** DevOps Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines installer behavior, shortcuts, dependencies, silent mode, portable mode, and uninstall rules.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
src-tauri/tauri.conf.json
.github/workflows/
release/
installer/
updates/
docs/06_Deployment_Release/
```

Deployment work must be safe for offline shops and must include rollback and verification.



## Release Safety Contract

Deployment must support shops that work offline. Online checks are optional and must never block production.

### Release Artifacts

| Artifact | Required Verification |
|---|---|
| Windows installer `.exe` | code signed, hash generated |
| Portable package | hash generated, documented limitations |
| Offline update package | signature + SHA-256 verification |
| Changelog | user-readable and developer-readable sections |
| Migration bundle | tested against previous version DB |
| Rollback package | verified before update is marked successful |

### Release Gate

No release unless typecheck/build/tests pass and QA evidence is attached.


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Windows Installer Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Code Signing Specification

> **Document ID:** 06_Deployment_Release-03  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** DevOps + Security Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines signing requirements for installer and update packages.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
src-tauri/tauri.conf.json
.github/workflows/
release/
installer/
updates/
docs/06_Deployment_Release/
```

Deployment work must be safe for offline shops and must include rollback and verification.



## Release Safety Contract

Deployment must support shops that work offline. Online checks are optional and must never block production.

### Release Artifacts

| Artifact | Required Verification |
|---|---|
| Windows installer `.exe` | code signed, hash generated |
| Portable package | hash generated, documented limitations |
| Offline update package | signature + SHA-256 verification |
| Changelog | user-readable and developer-readable sections |
| Migration bundle | tested against previous version DB |
| Rollback package | verified before update is marked successful |

### Release Gate

No release unless typecheck/build/tests pass and QA evidence is attached.


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Code Signing Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Auto Update Specification

> **Document ID:** 06_Deployment_Release-04  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** DevOps Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines check, download, verify, stage, install, rollback, and offline-safe behavior.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
src-tauri/tauri.conf.json
.github/workflows/
release/
installer/
updates/
docs/06_Deployment_Release/
```

Deployment work must be safe for offline shops and must include rollback and verification.



## Release Safety Contract

Deployment must support shops that work offline. Online checks are optional and must never block production.

### Release Artifacts

| Artifact | Required Verification |
|---|---|
| Windows installer `.exe` | code signed, hash generated |
| Portable package | hash generated, documented limitations |
| Offline update package | signature + SHA-256 verification |
| Changelog | user-readable and developer-readable sections |
| Migration bundle | tested against previous version DB |
| Rollback package | verified before update is marked successful |

### Release Gate

No release unless typecheck/build/tests pass and QA evidence is attached.


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Auto Update Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Offline Update Package Specification

> **Document ID:** 06_Deployment_Release-05  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** DevOps Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines manual update package format, hash, signature, compatibility check, and user flow.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
src-tauri/tauri.conf.json
.github/workflows/
release/
installer/
updates/
docs/06_Deployment_Release/
```

Deployment work must be safe for offline shops and must include rollback and verification.



## Release Safety Contract

Deployment must support shops that work offline. Online checks are optional and must never block production.

### Release Artifacts

| Artifact | Required Verification |
|---|---|
| Windows installer `.exe` | code signed, hash generated |
| Portable package | hash generated, documented limitations |
| Offline update package | signature + SHA-256 verification |
| Changelog | user-readable and developer-readable sections |
| Migration bundle | tested against previous version DB |
| Rollback package | verified before update is marked successful |

### Release Gate

No release unless typecheck/build/tests pass and QA evidence is attached.


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Offline Update Package Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Rollback Specification

> **Document ID:** 06_Deployment_Release-06  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** DevOps + Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines rollback data, backup points, failure recovery, and user messaging.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
src-tauri/tauri.conf.json
.github/workflows/
release/
installer/
updates/
docs/06_Deployment_Release/
```

Deployment work must be safe for offline shops and must include rollback and verification.



## Release Safety Contract

Deployment must support shops that work offline. Online checks are optional and must never block production.

### Release Artifacts

| Artifact | Required Verification |
|---|---|
| Windows installer `.exe` | code signed, hash generated |
| Portable package | hash generated, documented limitations |
| Offline update package | signature + SHA-256 verification |
| Changelog | user-readable and developer-readable sections |
| Migration bundle | tested against previous version DB |
| Rollback package | verified before update is marked successful |

### Release Gate

No release unless typecheck/build/tests pass and QA evidence is attached.


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Rollback Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Release Environment Matrix

> **Document ID:** 06_Deployment_Release-07  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** QA + DevOps Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines supported Windows versions, hardware profiles, GPUs, RAM, disk, and peripheral coverage.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
src-tauri/tauri.conf.json
.github/workflows/
release/
installer/
updates/
docs/06_Deployment_Release/
```

Deployment work must be safe for offline shops and must include rollback and verification.



## Release Safety Contract

Deployment must support shops that work offline. Online checks are optional and must never block production.

### Release Artifacts

| Artifact | Required Verification |
|---|---|
| Windows installer `.exe` | code signed, hash generated |
| Portable package | hash generated, documented limitations |
| Offline update package | signature + SHA-256 verification |
| Changelog | user-readable and developer-readable sections |
| Migration bundle | tested against previous version DB |
| Rollback package | verified before update is marked successful |

### Release Gate

No release unless typecheck/build/tests pass and QA evidence is attached.


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Release Environment Matrix**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Versioning and Build Metadata

> **Document ID:** 06_Deployment_Release-08  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** Tech Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines semantic versioning, build IDs, migration compatibility, and changelog format.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
src-tauri/tauri.conf.json
.github/workflows/
release/
installer/
updates/
docs/06_Deployment_Release/
```

Deployment work must be safe for offline shops and must include rollback and verification.



## Release Safety Contract

Deployment must support shops that work offline. Online checks are optional and must never block production.

### Release Artifacts

| Artifact | Required Verification |
|---|---|
| Windows installer `.exe` | code signed, hash generated |
| Portable package | hash generated, documented limitations |
| Offline update package | signature + SHA-256 verification |
| Changelog | user-readable and developer-readable sections |
| Migration bundle | tested against previous version DB |
| Rollback package | verified before update is marked successful |

### Release Gate

No release unless typecheck/build/tests pass and QA evidence is attached.


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Versioning and Build Metadata**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Build Pipeline Specification

> **Document ID:** 06_Deployment_Release-09  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** DevOps Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines local/CI build steps, typecheck, tests, packaging, signing, and artifact retention.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
src-tauri/tauri.conf.json
.github/workflows/
release/
installer/
updates/
docs/06_Deployment_Release/
```

Deployment work must be safe for offline shops and must include rollback and verification.



## Release Safety Contract

Deployment must support shops that work offline. Online checks are optional and must never block production.

### Release Artifacts

| Artifact | Required Verification |
|---|---|
| Windows installer `.exe` | code signed, hash generated |
| Portable package | hash generated, documented limitations |
| Offline update package | signature + SHA-256 verification |
| Changelog | user-readable and developer-readable sections |
| Migration bundle | tested against previous version DB |
| Rollback package | verified before update is marked successful |

### Release Gate

No release unless typecheck/build/tests pass and QA evidence is attached.


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Build Pipeline Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Beta Release Plan

> **Document ID:** 06_Deployment_Release-10  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** Project Manager  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines beta shop selection, feedback loops, bug triage, telemetry-free diagnostics, and success metrics.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
src-tauri/tauri.conf.json
.github/workflows/
release/
installer/
updates/
docs/06_Deployment_Release/
```

Deployment work must be safe for offline shops and must include rollback and verification.



## Release Safety Contract

Deployment must support shops that work offline. Online checks are optional and must never block production.

### Release Artifacts

| Artifact | Required Verification |
|---|---|
| Windows installer `.exe` | code signed, hash generated |
| Portable package | hash generated, documented limitations |
| Offline update package | signature + SHA-256 verification |
| Changelog | user-readable and developer-readable sections |
| Migration bundle | tested against previous version DB |
| Rollback package | verified before update is marked successful |

### Release Gate

No release unless typecheck/build/tests pass and QA evidence is attached.


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Beta Release Plan**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — GA Release Checklist

> **Document ID:** 06_Deployment_Release-11  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** Project Manager + QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines final release gate, documentation readiness, critical bug bar, and rollback readiness.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
src-tauri/tauri.conf.json
.github/workflows/
release/
installer/
updates/
docs/06_Deployment_Release/
```

Deployment work must be safe for offline shops and must include rollback and verification.



## Release Safety Contract

Deployment must support shops that work offline. Online checks are optional and must never block production.

### Release Artifacts

| Artifact | Required Verification |
|---|---|
| Windows installer `.exe` | code signed, hash generated |
| Portable package | hash generated, documented limitations |
| Offline update package | signature + SHA-256 verification |
| Changelog | user-readable and developer-readable sections |
| Migration bundle | tested against previous version DB |
| Rollback package | verified before update is marked successful |

### Release Gate

No release unless typecheck/build/tests pass and QA evidence is attached.


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **GA Release Checklist**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Security Model

> **Document ID:** 07_Security_Compliance-01  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 1-2  
> **Owner:** Security Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines local trust boundary, roles, data storage, threat model, and what must never be exposed.

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

Applies throughout the project lifecycle.

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
src-tauri/src/security/
src-tauri/src/audit/
src-tauri/src/commands.rs
src-tauri/src/storage/
docs/07_Security_Compliance/
```

Security docs must protect local design data, paths, diagnostics, updates, and command execution.



## Security Requirements

### Local Trust Boundary

The app can access only:

- Its AppData root
- User-selected files/folders through explicit picker/permission
- Bundled binaries/models
- Staged update packages selected by the user or downloaded by trusted updater

### Forbidden

- Arbitrary shell command from frontend input
- Writing production data into Program Files
- Including design image content in crash reports by default
- Accepting update packages without hash/signature verification
- Extracting archives without path traversal protection

### Roles

| Role | Phase Meaning |
|---|---|
| Admin | settings, users, diagnostics, update, full access |
| Designer | design/upscale/store modules |
| Worker | order basket, nesting, production modules |
| Viewer | read-only status/reports |


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

- [ ] The document has a clear owner and phase: **Phase 1-2**.
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

When Codex works on **Security Model**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 1-2** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Local Data Protection Specification

> **Document ID:** 07_Security_Compliance-02  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 1-2  
> **Owner:** Security + Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines file permissions, optional encryption, backup handling, and user data ownership.

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

Applies throughout the project lifecycle.

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
src-tauri/src/security/
src-tauri/src/audit/
src-tauri/src/commands.rs
src-tauri/src/storage/
docs/07_Security_Compliance/
```

Security docs must protect local design data, paths, diagnostics, updates, and command execution.



## Security Requirements

### Local Trust Boundary

The app can access only:

- Its AppData root
- User-selected files/folders through explicit picker/permission
- Bundled binaries/models
- Staged update packages selected by the user or downloaded by trusted updater

### Forbidden

- Arbitrary shell command from frontend input
- Writing production data into Program Files
- Including design image content in crash reports by default
- Accepting update packages without hash/signature verification
- Extracting archives without path traversal protection

### Roles

| Role | Phase Meaning |
|---|---|
| Admin | settings, users, diagnostics, update, full access |
| Designer | design/upscale/store modules |
| Worker | order basket, nesting, production modules |
| Viewer | read-only status/reports |


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

- [ ] The document has a clear owner and phase: **Phase 1-2**.
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

When Codex works on **Local Data Protection Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 1-2** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Role Based Access Control Specification

> **Document ID:** 07_Security_Compliance-03  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 1-2  
> **Owner:** Security + Product Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines Admin, Designer, Worker, Viewer permissions and future enforcement points.

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

Applies throughout the project lifecycle.

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
src-tauri/src/security/
src-tauri/src/audit/
src-tauri/src/commands.rs
src-tauri/src/storage/
docs/07_Security_Compliance/
```

Security docs must protect local design data, paths, diagnostics, updates, and command execution.



## Security Requirements

### Local Trust Boundary

The app can access only:

- Its AppData root
- User-selected files/folders through explicit picker/permission
- Bundled binaries/models
- Staged update packages selected by the user or downloaded by trusted updater

### Forbidden

- Arbitrary shell command from frontend input
- Writing production data into Program Files
- Including design image content in crash reports by default
- Accepting update packages without hash/signature verification
- Extracting archives without path traversal protection

### Roles

| Role | Phase Meaning |
|---|---|
| Admin | settings, users, diagnostics, update, full access |
| Designer | design/upscale/store modules |
| Worker | order basket, nesting, production modules |
| Viewer | read-only status/reports |


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

- [ ] The document has a clear owner and phase: **Phase 1-2**.
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

When Codex works on **Role Based Access Control Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 1-2** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Secure File System Specification

> **Document ID:** 07_Security_Compliance-04  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 1-2  
> **Owner:** Security + Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines path normalization, allowed roots, temp files, extraction safety, and archive validation.

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

Applies throughout the project lifecycle.

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
src-tauri/src/security/
src-tauri/src/audit/
src-tauri/src/commands.rs
src-tauri/src/storage/
docs/07_Security_Compliance/
```

Security docs must protect local design data, paths, diagnostics, updates, and command execution.



## Security Requirements

### Local Trust Boundary

The app can access only:

- Its AppData root
- User-selected files/folders through explicit picker/permission
- Bundled binaries/models
- Staged update packages selected by the user or downloaded by trusted updater

### Forbidden

- Arbitrary shell command from frontend input
- Writing production data into Program Files
- Including design image content in crash reports by default
- Accepting update packages without hash/signature verification
- Extracting archives without path traversal protection

### Roles

| Role | Phase Meaning |
|---|---|
| Admin | settings, users, diagnostics, update, full access |
| Designer | design/upscale/store modules |
| Worker | order basket, nesting, production modules |
| Viewer | read-only status/reports |


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

- [ ] The document has a clear owner and phase: **Phase 1-2**.
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

When Codex works on **Secure File System Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 1-2** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Update Verification Security Specification

> **Document ID:** 07_Security_Compliance-05  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 1-2  
> **Owner:** Security + DevOps Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines SHA-256, digital signature verification, rollback, and tamper failure behavior.

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

Applies throughout the project lifecycle.

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
src-tauri/src/security/
src-tauri/src/audit/
src-tauri/src/commands.rs
src-tauri/src/storage/
docs/07_Security_Compliance/
```

Security docs must protect local design data, paths, diagnostics, updates, and command execution.



## Security Requirements

### Local Trust Boundary

The app can access only:

- Its AppData root
- User-selected files/folders through explicit picker/permission
- Bundled binaries/models
- Staged update packages selected by the user or downloaded by trusted updater

### Forbidden

- Arbitrary shell command from frontend input
- Writing production data into Program Files
- Including design image content in crash reports by default
- Accepting update packages without hash/signature verification
- Extracting archives without path traversal protection

### Roles

| Role | Phase Meaning |
|---|---|
| Admin | settings, users, diagnostics, update, full access |
| Designer | design/upscale/store modules |
| Worker | order basket, nesting, production modules |
| Viewer | read-only status/reports |


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

- [ ] The document has a clear owner and phase: **Phase 1-2**.
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

When Codex works on **Update Verification Security Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 1-2** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Crash Report Privacy Specification

> **Document ID:** 07_Security_Compliance-06  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 1-2  
> **Owner:** Security + QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines what diagnostics may include, redaction rules, and opt-in export behavior.

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

Applies throughout the project lifecycle.

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
src-tauri/src/security/
src-tauri/src/audit/
src-tauri/src/commands.rs
src-tauri/src/storage/
docs/07_Security_Compliance/
```

Security docs must protect local design data, paths, diagnostics, updates, and command execution.



## Security Requirements

### Local Trust Boundary

The app can access only:

- Its AppData root
- User-selected files/folders through explicit picker/permission
- Bundled binaries/models
- Staged update packages selected by the user or downloaded by trusted updater

### Forbidden

- Arbitrary shell command from frontend input
- Writing production data into Program Files
- Including design image content in crash reports by default
- Accepting update packages without hash/signature verification
- Extracting archives without path traversal protection

### Roles

| Role | Phase Meaning |
|---|---|
| Admin | settings, users, diagnostics, update, full access |
| Designer | design/upscale/store modules |
| Worker | order basket, nesting, production modules |
| Viewer | read-only status/reports |


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

- [ ] The document has a clear owner and phase: **Phase 1-2**.
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

When Codex works on **Crash Report Privacy Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 1-2** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Dependency Security Policy

> **Document ID:** 07_Security_Compliance-07  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 1-2  
> **Owner:** Security + Tech Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines license/security checks, dependency approval, vulnerability handling, and update cadence.

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

Applies throughout the project lifecycle.

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
src-tauri/src/security/
src-tauri/src/audit/
src-tauri/src/commands.rs
src-tauri/src/storage/
docs/07_Security_Compliance/
```

Security docs must protect local design data, paths, diagnostics, updates, and command execution.



## Security Requirements

### Local Trust Boundary

The app can access only:

- Its AppData root
- User-selected files/folders through explicit picker/permission
- Bundled binaries/models
- Staged update packages selected by the user or downloaded by trusted updater

### Forbidden

- Arbitrary shell command from frontend input
- Writing production data into Program Files
- Including design image content in crash reports by default
- Accepting update packages without hash/signature verification
- Extracting archives without path traversal protection

### Roles

| Role | Phase Meaning |
|---|---|
| Admin | settings, users, diagnostics, update, full access |
| Designer | design/upscale/store modules |
| Worker | order basket, nesting, production modules |
| Viewer | read-only status/reports |


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

- [ ] The document has a clear owner and phase: **Phase 1-2**.
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

When Codex works on **Dependency Security Policy**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 1-2** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Secure Tauri Commands Specification

> **Document ID:** 07_Security_Compliance-08  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 1-2  
> **Owner:** Security + Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines command allowlist, validation, result types, path safety, shell execution policy, and audit.

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

Applies throughout the project lifecycle.

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
src-tauri/src/security/
src-tauri/src/audit/
src-tauri/src/commands.rs
src-tauri/src/storage/
docs/07_Security_Compliance/
```

Security docs must protect local design data, paths, diagnostics, updates, and command execution.



## Tauri Command Contract

All backend commands return a typed result:

```ts
type CommandResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: { code: string; message: string; details?: string } };
```

Initial commands:

| Command | Purpose |
|---|---|
| `ping_backend` | Verify frontend/backend bridge |
| `get_app_version` | Return version/build placeholder |
| `get_phase_info` | Return current phase metadata |
| `get_app_data_path` | Added during storage prompt |
| `run_health_check` | Added during health prompt |

No command may execute arbitrary shell text from the frontend.


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

- [ ] The document has a clear owner and phase: **Phase 1-2**.
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

When Codex works on **Secure Tauri Commands Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 1-2** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Audit Trail Specification

> **Document ID:** 07_Security_Compliance-09  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 1-2  
> **Owner:** Security + Backend Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines settings changes, user actions, migrations, updates, role changes, and sensitive operations audit records.

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

Applies throughout the project lifecycle.

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
src-tauri/src/security/
src-tauri/src/audit/
src-tauri/src/commands.rs
src-tauri/src/storage/
docs/07_Security_Compliance/
```

Security docs must protect local design data, paths, diagnostics, updates, and command execution.



## Security Requirements

### Local Trust Boundary

The app can access only:

- Its AppData root
- User-selected files/folders through explicit picker/permission
- Bundled binaries/models
- Staged update packages selected by the user or downloaded by trusted updater

### Forbidden

- Arbitrary shell command from frontend input
- Writing production data into Program Files
- Including design image content in crash reports by default
- Accepting update packages without hash/signature verification
- Extracting archives without path traversal protection

### Roles

| Role | Phase Meaning |
|---|---|
| Admin | settings, users, diagnostics, update, full access |
| Designer | design/upscale/store modules |
| Worker | order basket, nesting, production modules |
| Viewer | read-only status/reports |


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

- [ ] The document has a clear owner and phase: **Phase 1-2**.
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

When Codex works on **Audit Trail Specification**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 1-2** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Compliance Checklist

> **Document ID:** 07_Security_Compliance-10  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 1-2  
> **Owner:** Security Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines practical compliance for local desktop software, data privacy, installer signing, and export privacy.

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

Applies throughout the project lifecycle.

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
src-tauri/src/security/
src-tauri/src/audit/
src-tauri/src/commands.rs
src-tauri/src/storage/
docs/07_Security_Compliance/
```

Security docs must protect local design data, paths, diagnostics, updates, and command execution.



## Security Requirements

### Local Trust Boundary

The app can access only:

- Its AppData root
- User-selected files/folders through explicit picker/permission
- Bundled binaries/models
- Staged update packages selected by the user or downloaded by trusted updater

### Forbidden

- Arbitrary shell command from frontend input
- Writing production data into Program Files
- Including design image content in crash reports by default
- Accepting update packages without hash/signature verification
- Extracting archives without path traversal protection

### Roles

| Role | Phase Meaning |
|---|---|
| Admin | settings, users, diagnostics, update, full access |
| Designer | design/upscale/store modules |
| Worker | order basket, nesting, production modules |
| Viewer | read-only status/reports |


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

- [ ] The document has a clear owner and phase: **Phase 1-2**.
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

When Codex works on **Compliance Checklist**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 1-2** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Getting Started Guide

> **Document ID:** 08_User_Documentation-01  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** Tech Writer  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

User-facing overview for shop owner/designer/worker with exact first-run path.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
docs/08_User_Documentation/
manual/
support/
release-notes/
```

User docs must be written for shop owner, designer, worker, and QC worker, not for engineers only.



## User-Facing Writing Rules

- Use simple shop-floor language.
- Show the exact button/menu name.
- Explain warnings without blaming the user.
- Separate Admin, Designer, Worker, and QC Worker instructions.
- Include screenshots later when UI is stable.
- Never describe future features as available.

## Common User Flow

```text
Install → First Run Setup → Health Check → Settings Defaults → AI Engine Test → Start Production Module
```

## Troubleshooting Format

| Problem | What it means | What to do | When to call support |
|---|---|---|---|
| GPU failed | App could not use GPU upscale | switch to CPU fallback / update driver | repeated failure on supported GPU |
| Disk low | not enough space for jobs | clean temp/export folder | cannot free 20GB |
| DB repair needed | SQLite health check failed | restore latest backup | repair fails |


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Getting Started Guide**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Installation Guide

> **Document ID:** 08_User_Documentation-02  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** Tech Writer + DevOps  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

User-facing Windows installer, portable mode, requirements, permissions, and troubleshooting.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
docs/08_User_Documentation/
manual/
support/
release-notes/
```

User docs must be written for shop owner, designer, worker, and QC worker, not for engineers only.



## User-Facing Writing Rules

- Use simple shop-floor language.
- Show the exact button/menu name.
- Explain warnings without blaming the user.
- Separate Admin, Designer, Worker, and QC Worker instructions.
- Include screenshots later when UI is stable.
- Never describe future features as available.

## Common User Flow

```text
Install → First Run Setup → Health Check → Settings Defaults → AI Engine Test → Start Production Module
```

## Troubleshooting Format

| Problem | What it means | What to do | When to call support |
|---|---|---|---|
| GPU failed | App could not use GPU upscale | switch to CPU fallback / update driver | repeated failure on supported GPU |
| Disk low | not enough space for jobs | clean temp/export folder | cannot free 20GB |
| DB repair needed | SQLite health check failed | restore latest backup | repair fails |


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Installation Guide**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — First Run Setup Guide

> **Document ID:** 08_User_Documentation-03  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** Tech Writer  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Company setup, defaults, storage check, health check, AI engine test, and recovery setup.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
docs/08_User_Documentation/
manual/
support/
release-notes/
```

User docs must be written for shop owner, designer, worker, and QC worker, not for engineers only.



## User-Facing Writing Rules

- Use simple shop-floor language.
- Show the exact button/menu name.
- Explain warnings without blaming the user.
- Separate Admin, Designer, Worker, and QC Worker instructions.
- Include screenshots later when UI is stable.
- Never describe future features as available.

## Common User Flow

```text
Install → First Run Setup → Health Check → Settings Defaults → AI Engine Test → Start Production Module
```

## Troubleshooting Format

| Problem | What it means | What to do | When to call support |
|---|---|---|---|
| GPU failed | App could not use GPU upscale | switch to CPU fallback / update driver | repeated failure on supported GPU |
| Disk low | not enough space for jobs | clean temp/export folder | cannot free 20GB |
| DB repair needed | SQLite health check failed | restore latest backup | repair fails |


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **First Run Setup Guide**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Dashboard User Guide

> **Document ID:** 08_User_Documentation-04  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** Tech Writer  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Explains cards, status badges, phase labels, warnings, and quick actions.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
docs/08_User_Documentation/
manual/
support/
release-notes/
```

User docs must be written for shop owner, designer, worker, and QC worker, not for engineers only.



## Screen Contract: Dashboard

The Dashboard is the first screen after app startup. It must show Phase 0 foundation status only.

### Required Cards

| Card | Phase 0 Behavior | Future Behavior |
|---|---|---|
| Foundation Status | Shows bootstrap/backend/settings readiness. | Links to release readiness dashboard. |
| AppData Storage | Shows placeholder until storage service exists. | Shows folder health and disk usage. |
| SQLite Database | Shows `Not configured yet` until DB prompt. | Shows DB version and migration status. |
| Settings System | Shows placeholder until settings service. | Opens Settings page and validation warnings. |
| Real-ESRGAN Engine | Shows `Coming later in Phase 0`. | Shows GPU/CPU engine status. |
| Health Check | Links to Health Check placeholder. | Runs full checks. |
| Crash Recovery | Shows future placeholder. | Shows last recovery snapshot status. |
| Installer | Shows development mode. | Shows installed version/build/update status. |

### Backend Connectivity

Dashboard must call `ping_backend` through Tauri. UI states:

```text
Backend: Connected
Backend: Not connected
Backend: Checking...
```

Never silently hide backend failure.


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Dashboard User Guide**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Settings User Guide

> **Document ID:** 08_User_Documentation-05  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** Tech Writer  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Explains company, app, production, storage, update, and upscale settings safely.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
docs/08_User_Documentation/
manual/
support/
release-notes/
```

User docs must be written for shop owner, designer, worker, and QC worker, not for engineers only.



## User-Facing Writing Rules

- Use simple shop-floor language.
- Show the exact button/menu name.
- Explain warnings without blaming the user.
- Separate Admin, Designer, Worker, and QC Worker instructions.
- Include screenshots later when UI is stable.
- Never describe future features as available.

## Common User Flow

```text
Install → First Run Setup → Health Check → Settings Defaults → AI Engine Test → Start Production Module
```

## Troubleshooting Format

| Problem | What it means | What to do | When to call support |
|---|---|---|---|
| GPU failed | App could not use GPU upscale | switch to CPU fallback / update driver | repeated failure on supported GPU |
| Disk low | not enough space for jobs | clean temp/export folder | cannot free 20GB |
| DB repair needed | SQLite health check failed | restore latest backup | repair fails |


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Settings User Guide**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Health Check User Guide

> **Document ID:** 08_User_Documentation-06  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** Tech Writer  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Explains pass/warn/fail, GPU/Vulkan, disk/RAM, database, and diagnostic actions.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
docs/08_User_Documentation/
manual/
support/
release-notes/
```

User docs must be written for shop owner, designer, worker, and QC worker, not for engineers only.



## User-Facing Writing Rules

- Use simple shop-floor language.
- Show the exact button/menu name.
- Explain warnings without blaming the user.
- Separate Admin, Designer, Worker, and QC Worker instructions.
- Include screenshots later when UI is stable.
- Never describe future features as available.

## Common User Flow

```text
Install → First Run Setup → Health Check → Settings Defaults → AI Engine Test → Start Production Module
```

## Troubleshooting Format

| Problem | What it means | What to do | When to call support |
|---|---|---|---|
| GPU failed | App could not use GPU upscale | switch to CPU fallback / update driver | repeated failure on supported GPU |
| Disk low | not enough space for jobs | clean temp/export folder | cannot free 20GB |
| DB repair needed | SQLite health check failed | restore latest backup | repair fails |


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Health Check User Guide**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Upscale Factory Basic User Guide

> **Document ID:** 08_User_Documentation-07  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** Tech Writer  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Explains upload, 2×/4×/8×, GPU/CPU fallback, quality review, approve/reject, and outputs.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
docs/08_User_Documentation/
manual/
support/
release-notes/
```

User docs must be written for shop owner, designer, worker, and QC worker, not for engineers only.



## User-Facing Writing Rules

- Use simple shop-floor language.
- Show the exact button/menu name.
- Explain warnings without blaming the user.
- Separate Admin, Designer, Worker, and QC Worker instructions.
- Include screenshots later when UI is stable.
- Never describe future features as available.

## Common User Flow

```text
Install → First Run Setup → Health Check → Settings Defaults → AI Engine Test → Start Production Module
```

## Troubleshooting Format

| Problem | What it means | What to do | When to call support |
|---|---|---|---|
| GPU failed | App could not use GPU upscale | switch to CPU fallback / update driver | repeated failure on supported GPU |
| Disk low | not enough space for jobs | clean temp/export folder | cannot free 20GB |
| DB repair needed | SQLite health check failed | restore latest backup | repair fails |


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Upscale Factory Basic User Guide**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Logs and Diagnostics User Guide

> **Document ID:** 08_User_Documentation-08  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** Tech Writer  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Explains how to export diagnostics without exposing design files unnecessarily.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
docs/08_User_Documentation/
manual/
support/
release-notes/
```

User docs must be written for shop owner, designer, worker, and QC worker, not for engineers only.



## User-Facing Writing Rules

- Use simple shop-floor language.
- Show the exact button/menu name.
- Explain warnings without blaming the user.
- Separate Admin, Designer, Worker, and QC Worker instructions.
- Include screenshots later when UI is stable.
- Never describe future features as available.

## Common User Flow

```text
Install → First Run Setup → Health Check → Settings Defaults → AI Engine Test → Start Production Module
```

## Troubleshooting Format

| Problem | What it means | What to do | When to call support |
|---|---|---|---|
| GPU failed | App could not use GPU upscale | switch to CPU fallback / update driver | repeated failure on supported GPU |
| Disk low | not enough space for jobs | clean temp/export folder | cannot free 20GB |
| DB repair needed | SQLite health check failed | restore latest backup | repair fails |


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Logs and Diagnostics User Guide**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Updates User Guide

> **Document ID:** 08_User_Documentation-09  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** Tech Writer  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Explains offline update package install, backup, restart, rollback, and safe failure behavior.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
docs/08_User_Documentation/
manual/
support/
release-notes/
```

User docs must be written for shop owner, designer, worker, and QC worker, not for engineers only.



## User-Facing Writing Rules

- Use simple shop-floor language.
- Show the exact button/menu name.
- Explain warnings without blaming the user.
- Separate Admin, Designer, Worker, and QC Worker instructions.
- Include screenshots later when UI is stable.
- Never describe future features as available.

## Common User Flow

```text
Install → First Run Setup → Health Check → Settings Defaults → AI Engine Test → Start Production Module
```

## Troubleshooting Format

| Problem | What it means | What to do | When to call support |
|---|---|---|---|
| GPU failed | App could not use GPU upscale | switch to CPU fallback / update driver | repeated failure on supported GPU |
| Disk low | not enough space for jobs | clean temp/export folder | cannot free 20GB |
| DB repair needed | SQLite health check failed | restore latest backup | repair fails |


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Updates User Guide**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Troubleshooting Guide

> **Document ID:** 08_User_Documentation-10  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Phase 5-6  
> **Owner:** Tech Writer + Support  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Common problems: install failure, GPU failure, disk full, database repair, slow performance, missing assets.

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

Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics. Then Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

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
docs/08_User_Documentation/
manual/
support/
release-notes/
```

User docs must be written for shop owner, designer, worker, and QC worker, not for engineers only.



## User-Facing Writing Rules

- Use simple shop-floor language.
- Show the exact button/menu name.
- Explain warnings without blaming the user.
- Separate Admin, Designer, Worker, and QC Worker instructions.
- Include screenshots later when UI is stable.
- Never describe future features as available.

## Common User Flow

```text
Install → First Run Setup → Health Check → Settings Defaults → AI Engine Test → Start Production Module
```

## Troubleshooting Format

| Problem | What it means | What to do | When to call support |
|---|---|---|---|
| GPU failed | App could not use GPU upscale | switch to CPU fallback / update driver | repeated failure on supported GPU |
| Disk low | not enough space for jobs | clean temp/export folder | cannot free 20GB |
| DB repair needed | SQLite health check failed | restore latest backup | repair fails |


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

- [ ] The document has a clear owner and phase: **Phase 5-6**.
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

When Codex works on **Troubleshooting Guide**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Phase 5-6** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Project Charter

> **Document ID:** 09_Project_Management-01  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** Product Manager  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines product mission, scope, non-scope, personas, business goals, and success metrics.

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

Applies throughout the project lifecycle.

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
docs/09_Project_Management/
.github/PULL_REQUEST_TEMPLATE.md
.github/ISSUE_TEMPLATE/
CHANGELOG.md
```

Project management docs must control scope, phases, risks, acceptance, and handoff between Codex and human review.



## Management Control Rules

### Phase Gates

- **Phase 0:** Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.
- **Phase 1:** Upscale Factory & Design Store, Weeks 5-12: intake, batch upscale, before/after review, quality checks, design gallery, metadata, search, approval workflow.
- **Phase 2:** Design Studio, Weeks 10-19: Canva-like canvas, templates, shapes, text, image editing, layers, effects.
- **Phase 3:** Order Basket & Print Sheet Builder / early hardware: production cart, nesting, manual layout, marks, mirroring, printer/cutter foundations.
- **Phase 4:** Export System & Color Management: multi-format export, ICC profiles, soft proofing, PDF/X readiness.
- **Phase 5:** Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics.
- **Phase 6:** Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

### Critical Risks to Track

- R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs
- R-002 canvas performance with 500+ objects
- R-003 true-shape nesting too slow
- R-004 SQLite corruption under heavy load
- R-005 PDF/X-4 compliance fails in RIP
- R-025 3,000-feature scope creep
- R-028 color accuracy Delta E > 2.0
- R-029 nesting efficiency < 80%

### Change Control

Any new feature outside current phase must be logged as a change request. The default answer to scope expansion is: document it, prioritize it, and schedule it later.

### Codex Workflow

```text
Small prompt → Codex code/docs → human review → tests → fix prompt → merge → next prompt
```

No single prompt should ask Codex to build the full software.


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Project Charter**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Phase Plan

> **Document ID:** 09_Project_Management-02  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** Project Manager  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines phase sequence, dates/weeks, deliverables, dependencies, and milestone gates.

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

Applies throughout the project lifecycle.

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
docs/09_Project_Management/
.github/PULL_REQUEST_TEMPLATE.md
.github/ISSUE_TEMPLATE/
CHANGELOG.md
```

Project management docs must control scope, phases, risks, acceptance, and handoff between Codex and human review.



## Management Control Rules

### Phase Gates

- **Phase 0:** Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.
- **Phase 1:** Upscale Factory & Design Store, Weeks 5-12: intake, batch upscale, before/after review, quality checks, design gallery, metadata, search, approval workflow.
- **Phase 2:** Design Studio, Weeks 10-19: Canva-like canvas, templates, shapes, text, image editing, layers, effects.
- **Phase 3:** Order Basket & Print Sheet Builder / early hardware: production cart, nesting, manual layout, marks, mirroring, printer/cutter foundations.
- **Phase 4:** Export System & Color Management: multi-format export, ICC profiles, soft proofing, PDF/X readiness.
- **Phase 5:** Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics.
- **Phase 6:** Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

### Critical Risks to Track

- R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs
- R-002 canvas performance with 500+ objects
- R-003 true-shape nesting too slow
- R-004 SQLite corruption under heavy load
- R-005 PDF/X-4 compliance fails in RIP
- R-025 3,000-feature scope creep
- R-028 color accuracy Delta E > 2.0
- R-029 nesting efficiency < 80%

### Change Control

Any new feature outside current phase must be logged as a change request. The default answer to scope expansion is: document it, prioritize it, and schedule it later.

### Codex Workflow

```text
Small prompt → Codex code/docs → human review → tests → fix prompt → merge → next prompt
```

No single prompt should ask Codex to build the full software.


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Phase Plan**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Sprint Structure

> **Document ID:** 09_Project_Management-03  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** Project Manager + Tech Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines sprint planning, prompt size, Codex tasks, review, QA, and acceptance evidence.

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

Applies throughout the project lifecycle.

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
docs/09_Project_Management/
.github/PULL_REQUEST_TEMPLATE.md
.github/ISSUE_TEMPLATE/
CHANGELOG.md
```

Project management docs must control scope, phases, risks, acceptance, and handoff between Codex and human review.



## Management Control Rules

### Phase Gates

- **Phase 0:** Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.
- **Phase 1:** Upscale Factory & Design Store, Weeks 5-12: intake, batch upscale, before/after review, quality checks, design gallery, metadata, search, approval workflow.
- **Phase 2:** Design Studio, Weeks 10-19: Canva-like canvas, templates, shapes, text, image editing, layers, effects.
- **Phase 3:** Order Basket & Print Sheet Builder / early hardware: production cart, nesting, manual layout, marks, mirroring, printer/cutter foundations.
- **Phase 4:** Export System & Color Management: multi-format export, ICC profiles, soft proofing, PDF/X readiness.
- **Phase 5:** Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics.
- **Phase 6:** Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

### Critical Risks to Track

- R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs
- R-002 canvas performance with 500+ objects
- R-003 true-shape nesting too slow
- R-004 SQLite corruption under heavy load
- R-005 PDF/X-4 compliance fails in RIP
- R-025 3,000-feature scope creep
- R-028 color accuracy Delta E > 2.0
- R-029 nesting efficiency < 80%

### Change Control

Any new feature outside current phase must be logged as a change request. The default answer to scope expansion is: document it, prioritize it, and schedule it later.

### Codex Workflow

```text
Small prompt → Codex code/docs → human review → tests → fix prompt → merge → next prompt
```

No single prompt should ask Codex to build the full software.


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Sprint Structure**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Definition of Done

> **Document ID:** 09_Project_Management-04  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** Tech Lead + QA Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines done rules for docs, code, tests, UX, security, performance, and release readiness.

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

Applies throughout the project lifecycle.

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
docs/09_Project_Management/
.github/PULL_REQUEST_TEMPLATE.md
.github/ISSUE_TEMPLATE/
CHANGELOG.md
```

Project management docs must control scope, phases, risks, acceptance, and handoff between Codex and human review.



## Management Control Rules

### Phase Gates

- **Phase 0:** Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.
- **Phase 1:** Upscale Factory & Design Store, Weeks 5-12: intake, batch upscale, before/after review, quality checks, design gallery, metadata, search, approval workflow.
- **Phase 2:** Design Studio, Weeks 10-19: Canva-like canvas, templates, shapes, text, image editing, layers, effects.
- **Phase 3:** Order Basket & Print Sheet Builder / early hardware: production cart, nesting, manual layout, marks, mirroring, printer/cutter foundations.
- **Phase 4:** Export System & Color Management: multi-format export, ICC profiles, soft proofing, PDF/X readiness.
- **Phase 5:** Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics.
- **Phase 6:** Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

### Critical Risks to Track

- R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs
- R-002 canvas performance with 500+ objects
- R-003 true-shape nesting too slow
- R-004 SQLite corruption under heavy load
- R-005 PDF/X-4 compliance fails in RIP
- R-025 3,000-feature scope creep
- R-028 color accuracy Delta E > 2.0
- R-029 nesting efficiency < 80%

### Change Control

Any new feature outside current phase must be logged as a change request. The default answer to scope expansion is: document it, prioritize it, and schedule it later.

### Codex Workflow

```text
Small prompt → Codex code/docs → human review → tests → fix prompt → merge → next prompt
```

No single prompt should ask Codex to build the full software.


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Definition of Done**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Change Control Process

> **Document ID:** 09_Project_Management-05  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** Product Manager  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines CR categories, triage, CCB, approval, impact analysis, and out-of-scope rejection.

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

Applies throughout the project lifecycle.

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
docs/09_Project_Management/
.github/PULL_REQUEST_TEMPLATE.md
.github/ISSUE_TEMPLATE/
CHANGELOG.md
```

Project management docs must control scope, phases, risks, acceptance, and handoff between Codex and human review.



## Management Control Rules

### Phase Gates

- **Phase 0:** Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.
- **Phase 1:** Upscale Factory & Design Store, Weeks 5-12: intake, batch upscale, before/after review, quality checks, design gallery, metadata, search, approval workflow.
- **Phase 2:** Design Studio, Weeks 10-19: Canva-like canvas, templates, shapes, text, image editing, layers, effects.
- **Phase 3:** Order Basket & Print Sheet Builder / early hardware: production cart, nesting, manual layout, marks, mirroring, printer/cutter foundations.
- **Phase 4:** Export System & Color Management: multi-format export, ICC profiles, soft proofing, PDF/X readiness.
- **Phase 5:** Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics.
- **Phase 6:** Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

### Critical Risks to Track

- R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs
- R-002 canvas performance with 500+ objects
- R-003 true-shape nesting too slow
- R-004 SQLite corruption under heavy load
- R-005 PDF/X-4 compliance fails in RIP
- R-025 3,000-feature scope creep
- R-028 color accuracy Delta E > 2.0
- R-029 nesting efficiency < 80%

### Change Control

Any new feature outside current phase must be logged as a change request. The default answer to scope expansion is: document it, prioritize it, and schedule it later.

### Codex Workflow

```text
Small prompt → Codex code/docs → human review → tests → fix prompt → merge → next prompt
```

No single prompt should ask Codex to build the full software.


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Change Control Process**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Risk Management Process

> **Document ID:** 09_Project_Management-06  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** Project Manager  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines risk tracking, weekly review, triggers, mitigation, and escalation.

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

Applies throughout the project lifecycle.

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
docs/09_Project_Management/
.github/PULL_REQUEST_TEMPLATE.md
.github/ISSUE_TEMPLATE/
CHANGELOG.md
```

Project management docs must control scope, phases, risks, acceptance, and handoff between Codex and human review.



## Management Control Rules

### Phase Gates

- **Phase 0:** Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.
- **Phase 1:** Upscale Factory & Design Store, Weeks 5-12: intake, batch upscale, before/after review, quality checks, design gallery, metadata, search, approval workflow.
- **Phase 2:** Design Studio, Weeks 10-19: Canva-like canvas, templates, shapes, text, image editing, layers, effects.
- **Phase 3:** Order Basket & Print Sheet Builder / early hardware: production cart, nesting, manual layout, marks, mirroring, printer/cutter foundations.
- **Phase 4:** Export System & Color Management: multi-format export, ICC profiles, soft proofing, PDF/X readiness.
- **Phase 5:** Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics.
- **Phase 6:** Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

### Critical Risks to Track

- R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs
- R-002 canvas performance with 500+ objects
- R-003 true-shape nesting too slow
- R-004 SQLite corruption under heavy load
- R-005 PDF/X-4 compliance fails in RIP
- R-025 3,000-feature scope creep
- R-028 color accuracy Delta E > 2.0
- R-029 nesting efficiency < 80%

### Change Control

Any new feature outside current phase must be logged as a change request. The default answer to scope expansion is: document it, prioritize it, and schedule it later.

### Codex Workflow

```text
Small prompt → Codex code/docs → human review → tests → fix prompt → merge → next prompt
```

No single prompt should ask Codex to build the full software.


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Risk Management Process**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Traceability Matrix

> **Document ID:** 09_Project_Management-07  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** QA + Product Manager  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Maps requirement IDs, user stories, use cases, docs, code modules, tests, and release gates.

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

Applies throughout the project lifecycle.

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
docs/09_Project_Management/
.github/PULL_REQUEST_TEMPLATE.md
.github/ISSUE_TEMPLATE/
CHANGELOG.md
```

Project management docs must control scope, phases, risks, acceptance, and handoff between Codex and human review.



## Management Control Rules

### Phase Gates

- **Phase 0:** Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.
- **Phase 1:** Upscale Factory & Design Store, Weeks 5-12: intake, batch upscale, before/after review, quality checks, design gallery, metadata, search, approval workflow.
- **Phase 2:** Design Studio, Weeks 10-19: Canva-like canvas, templates, shapes, text, image editing, layers, effects.
- **Phase 3:** Order Basket & Print Sheet Builder / early hardware: production cart, nesting, manual layout, marks, mirroring, printer/cutter foundations.
- **Phase 4:** Export System & Color Management: multi-format export, ICC profiles, soft proofing, PDF/X readiness.
- **Phase 5:** Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics.
- **Phase 6:** Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

### Critical Risks to Track

- R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs
- R-002 canvas performance with 500+ objects
- R-003 true-shape nesting too slow
- R-004 SQLite corruption under heavy load
- R-005 PDF/X-4 compliance fails in RIP
- R-025 3,000-feature scope creep
- R-028 color accuracy Delta E > 2.0
- R-029 nesting efficiency < 80%

### Change Control

Any new feature outside current phase must be logged as a change request. The default answer to scope expansion is: document it, prioritize it, and schedule it later.

### Codex Workflow

```text
Small prompt → Codex code/docs → human review → tests → fix prompt → merge → next prompt
```

No single prompt should ask Codex to build the full software.


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Traceability Matrix**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---


# SublimationPrintOS — Developer Handoff Guide

> **Document ID:** 09_Project_Management-08  
> **Version:** 2.0 Developer Grade  
> **Repo:** `hjadhav2009-sys/SublimationPrintOS`  
> **Phase:** Ongoing  
> **Owner:** Tech Lead  
> **Status:** Ready for Head Developer Review  
> **Date:** 2026-06-06

## Purpose

Defines how head developer receives docs, prompts Codex, reviews output, and moves to next prompt.

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

Applies throughout the project lifecycle.

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
docs/09_Project_Management/
.github/PULL_REQUEST_TEMPLATE.md
.github/ISSUE_TEMPLATE/
CHANGELOG.md
```

Project management docs must control scope, phases, risks, acceptance, and handoff between Codex and human review.



## Management Control Rules

### Phase Gates

- **Phase 0:** Foundation & Installation, Weeks 1-6: installer, AppData, SQLite foundation, settings, Real-ESRGAN basic integration, UI shell, health check, crash recovery, shortcuts.
- **Phase 1:** Upscale Factory & Design Store, Weeks 5-12: intake, batch upscale, before/after review, quality checks, design gallery, metadata, search, approval workflow.
- **Phase 2:** Design Studio, Weeks 10-19: Canva-like canvas, templates, shapes, text, image editing, layers, effects.
- **Phase 3:** Order Basket & Print Sheet Builder / early hardware: production cart, nesting, manual layout, marks, mirroring, printer/cutter foundations.
- **Phase 4:** Export System & Color Management: multi-format export, ICC profiles, soft proofing, PDF/X readiness.
- **Phase 5:** Hardware Integration and reports readiness: printer discovery, cutter integration, RIP hot folders, press timer, diagnostics.
- **Phase 6:** Reports, Testing & Polish, GA readiness: performance optimization, docs, beta feedback, release gates.

### Critical Risks to Track

- R-001 Real-ESRGAN ncnn Vulkan fails on target GPUs
- R-002 canvas performance with 500+ objects
- R-003 true-shape nesting too slow
- R-004 SQLite corruption under heavy load
- R-005 PDF/X-4 compliance fails in RIP
- R-025 3,000-feature scope creep
- R-028 color accuracy Delta E > 2.0
- R-029 nesting efficiency < 80%

### Change Control

Any new feature outside current phase must be logged as a change request. The default answer to scope expansion is: document it, prioritize it, and schedule it later.

### Codex Workflow

```text
Small prompt → Codex code/docs → human review → tests → fix prompt → merge → next prompt
```

No single prompt should ask Codex to build the full software.


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

- [ ] The document has a clear owner and phase: **Ongoing**.
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

When Codex works on **Developer Handoff Guide**:

1. Read this document first, then inspect the current repo before changing files.
2. Keep the task inside **Ongoing** unless a future-phase interface is explicitly marked as placeholder.
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



---

