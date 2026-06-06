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
