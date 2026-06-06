# Development Workflow

Work is done in small Codex prompts with strict scope.

## Rules

- Never build the full software in one prompt.
- Each task must be feature branch based.
- Validate with `npm.cmd run typecheck`, `npm.cmd run build`, and `cargo check`.
- Human review happens before changes become `main`.
- Do not merge generated build folders such as `node_modules/`, `dist/`, `src-tauri/target/`, or `src-tauri/gen/`.
- Keep every task limited to the requested phase and feature boundary.
