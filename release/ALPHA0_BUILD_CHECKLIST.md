# Alpha 0 Build Checklist

Use this checklist for local Phase 0 package verification only. Do not publish artifacts from this checklist.

## Automated Checks

- [ ] Run `npm run phase0:preflight`.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run build`.
- [ ] Run `cargo check` from `src-tauri/`.
- [ ] Run `npm run phase0:inspect`.

## Desktop Smoke Checks

- [ ] Run `npm run tauri:dev`.
- [ ] Confirm the app launches to Dashboard.
- [ ] Run a Tauri package build with `npm run phase0:package` when local Tauri packaging dependencies are available.
- [ ] Inspect build artifacts with `npm run phase0:inspect`.
- [ ] Manually launch the packaged app if an installer or desktop binary was produced.

## Foundation Behavior Checks

- [ ] Confirm AppData folders are created at runtime.
- [ ] Confirm SQLite health check passes.
- [ ] Save and reload Settings.
- [ ] Initialize Logs and create a diagnostic report.
- [ ] Create and refresh a recovery marker snapshot.
- [ ] Run Real-ESRGAN discovery with the binary missing and confirm it reports a warning, not a fake success.
- [ ] Use Offline Update Shell to create a sample manifest.
- [ ] Select and stage the sample package; confirm only metadata files are staged.
- [ ] Use managed open-folder actions for AppData, logs, diagnostics, recovery, engine, and updates folders.

## Bundle Exclusion Checks

- [ ] Confirm no AppData or user data is bundled.
- [ ] Confirm `app.db` is not bundled.
- [ ] Confirm no Real-ESRGAN binary is bundled.
- [ ] Confirm no `test-input.png` or `test-output.png` is bundled.
- [ ] Confirm `node_modules/`, `dist/`, and `src-tauri/target/` are not committed.
