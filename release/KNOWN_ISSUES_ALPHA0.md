# Known Issues Alpha 0

Alpha 0 is a local developer build for Phase 0 review. It is not production ready.

## Known Limitations

- GitHub default branch may still need manual change to `main`.
- Clean shutdown marking is best-effort.
- No signed installer.
- No public release package.
- No real updater install or apply flow.
- No Real-ESRGAN binary bundled.
- No image upload or import.
- No full Upscale Factory.
- No Design Studio.
- No nesting, export production system, or hardware integration.
- npm audit may report moderate vulnerabilities until dependency review.
- Cargo target cache may lock on Windows during repeated checks.
- Duplicate log entries may appear because `app.log` plus module logs are both read.
- Tauri GUI cannot be fully tested in a headless shell.
