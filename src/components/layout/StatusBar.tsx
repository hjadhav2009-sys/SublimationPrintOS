import { phaseInfo } from "../../app/phase";

export function StatusBar() {
  return (
    <footer className="statusbar" aria-label="Foundation status">
      <span>Local storage: {phaseInfo.storage}</span>
      <span>SQLite: Foundation</span>
      <span>Shortcuts: Enabled</span>
      <span>Recovery marker: Active</span>
      <span>Version: 0.1.0</span>
      <span>{phaseInfo.phase} Alpha</span>
    </footer>
  );
}
