import type { ShortcutDefinition } from "../types/app";

export const shortcutDefinitions: ShortcutDefinition[] = [
  {
    id: "shortcut-dashboard",
    label: "Dashboard",
    keys: ["Ctrl", "Shift", "D"],
    description: "Navigate to Dashboard",
    action: "dashboard",
    phase: "Phase 0"
  },
  {
    id: "shortcut-settings",
    label: "Settings",
    keys: ["Ctrl", ","],
    description: "Navigate to Settings",
    action: "settings",
    phase: "Phase 0"
  },
  {
    id: "shortcut-health",
    label: "Health Check",
    keys: ["Ctrl", "Shift", "H"],
    description: "Navigate to Health Check",
    action: "health",
    phase: "Phase 0"
  },
  {
    id: "shortcut-logs",
    label: "Logs",
    keys: ["Ctrl", "Shift", "L"],
    description: "Navigate to Logs",
    action: "logs",
    phase: "Phase 0"
  },
  {
    id: "shortcut-upscale",
    label: "Upscale Test",
    keys: ["Ctrl", "Shift", "U"],
    description: "Navigate to Real-ESRGAN Engine Test",
    action: "upscale",
    phase: "Phase 0"
  },
  {
    id: "shortcut-shortcuts",
    label: "Shortcuts",
    keys: ["Ctrl", "Shift", "K"],
    description: "Navigate to Shortcuts",
    action: "shortcuts",
    phase: "Phase 0"
  },
  {
    id: "shortcut-recovery-snapshot",
    label: "Recovery Snapshot",
    keys: ["Ctrl", "Shift", "R"],
    description: "Create a safe Phase 0 recovery snapshot",
    action: "create_recovery_snapshot",
    phase: "Phase 0"
  },
  {
    id: "shortcut-refresh-health",
    label: "Run Health Check",
    keys: ["Ctrl", "Shift", "F"],
    description: "Navigate to Health Check and run the advanced report",
    action: "refresh_health_check",
    phase: "Phase 0"
  }
];

export function shortcutKeysLabel(shortcut: ShortcutDefinition): string {
  return shortcut.keys.join(" + ");
}

export function findShortcutForEvent(
  event: KeyboardEvent
): ShortcutDefinition | null {
  return (
    shortcutDefinitions.find((shortcut) => {
      const key = event.key.toLowerCase();
      const wantsCtrl = shortcut.keys.some((item) => item.toLowerCase() === "ctrl");
      const wantsShift = shortcut.keys.some((item) => item.toLowerCase() === "shift");
      const wantsAlt = shortcut.keys.some((item) => item.toLowerCase() === "alt");
      const primaryKeys = shortcut.keys.filter(
        (item) => !["ctrl", "shift", "alt"].includes(item.toLowerCase())
      );
      const primaryKey = primaryKeys[primaryKeys.length - 1]?.toLowerCase();

      return (
        Boolean(primaryKey) &&
        event.ctrlKey === wantsCtrl &&
        event.shiftKey === wantsShift &&
        event.altKey === wantsAlt &&
        key === primaryKey
      );
    }) ?? null
  );
}

export function shouldIgnoreShortcut(event: KeyboardEvent): boolean {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tagName = target.tagName.toLowerCase();
  return (
    tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select" ||
    target.isContentEditable
  );
}
