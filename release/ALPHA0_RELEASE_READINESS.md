# Alpha 0 Release Readiness

## Release Identity

- Current release name: Alpha 0
- Current version: 0.1.0
- Phase: Phase 0 Foundation
- Release type: local developer build only

Alpha 0 is not a public release, not a signed installer, and not an auto-updater release.

## Modules Included

- UI shell
- AppData storage
- SQLite migration foundation
- Settings persistence
- Logs and diagnostics
- Crash recovery marker
- Real-ESRGAN discovery and safe test shell
- Advanced health check
- Shortcuts framework
- App menu and close handling
- Managed folder open actions
- Offline update shell
- Packaging and preflight scripts

## Modules Intentionally Excluded

- Full Upscale Factory
- Image upload or import
- Design Store
- Design Studio
- Nesting
- Export production system
- Hardware integration
- Online updater
- Signed installer
- Inventory, CRM, marketplace orders, shipping, returns, accounting, warehouse, salesperson, or other business modules

## Required Checks Before Calling Alpha 0 Ready

- `npm run phase0:qa` passes.
- Manual smoke test is completed.
- No generated artifacts are committed.
- GitHub default branch is set to `main`.
- Release notes are filled from `release/RELEASE_NOTES_TEMPLATE.md`.

## Reviewer Sign-Off

| Role | Name | Date | Decision | Notes |
| --- | --- | --- | --- | --- |
| Developer |  |  |  |  |
| Head developer |  |  |  |  |
| Owner |  |  |  |  |
