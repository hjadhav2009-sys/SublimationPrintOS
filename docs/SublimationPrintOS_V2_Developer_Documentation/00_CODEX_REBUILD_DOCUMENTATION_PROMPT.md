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
