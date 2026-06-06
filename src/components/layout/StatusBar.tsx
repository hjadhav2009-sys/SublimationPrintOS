import { phaseInfo } from "../../app/phase";

export function StatusBar() {
  return (
    <footer className="statusbar" aria-label="Foundation status">
      <span>App version: 0.1.0 placeholder</span>
      <span>Current phase: {phaseInfo.phase}</span>
      <span>Storage: {phaseInfo.storage}</span>
      <span>Database: {phaseInfo.database}</span>
      <span>AI Engine: {phaseInfo.aiEngine}</span>
    </footer>
  );
}
