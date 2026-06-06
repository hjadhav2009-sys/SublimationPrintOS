# Packaging Notes

SublimationPrintOS Phase 0 packaging is local-only. These notes prepare developers to build and inspect a Windows desktop package without publishing a release.

## Current Packaging Boundary

- No public release is created in Phase 0.
- No code signing is configured yet.
- No paid certificate or signing identity is referenced.
- No auto-updater is enabled.
- No GitHub Release upload is performed.
- No AppData, user files, `app.db`, Real-ESRGAN binaries, or test images are bundled intentionally.

## Expected Commands

```bash
npm run phase0:preflight
npm run phase0:check
cargo check
npm run phase0:package
npm run phase0:inspect
```

Run `npm run phase0:package` only when local Tauri packaging dependencies are available.

## Expected Artifacts

Tauri may write local artifacts under:

- `src-tauri/target/release/`
- `src-tauri/target/release/bundle/`
- `src-tauri/target/release/bundle/nsis/`
- `src-tauri/target/release/bundle/msi/`

Artifacts are local build outputs and must not be committed.

## Common Windows Build Issues

- Missing Rust toolchain or MSVC build tools.
- Missing WebView2 or Tauri Windows prerequisites.
- Antivirus or file indexing temporarily locking build outputs.
- Cargo build lock warnings around `src-tauri/target/debug/.cargo-build-lock` or release build locks.
- Stale `dist/` output; rerun `npm run build`.

## GitHub Default Branch Reminder

The repository default branch should be set to `main` in GitHub:

`Settings -> Branches -> Default branch -> main`

This reminder is informational. Local preflight does not fail if the GitHub default branch cannot be checked.
