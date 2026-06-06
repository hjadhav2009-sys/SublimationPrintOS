import { spawnSync } from "node:child_process";

const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

const steps = [
  {
    label: "Phase 0 preflight",
    command: npmCommand,
    args: ["run", "phase0:preflight"],
    cwd: process.cwd()
  },
  {
    label: "TypeScript typecheck",
    command: npmCommand,
    args: ["run", "typecheck"],
    cwd: process.cwd()
  },
  {
    label: "Vite production build",
    command: npmCommand,
    args: ["run", "build"],
    cwd: process.cwd()
  },
  {
    label: "Tauri Rust cargo check",
    command: "cargo",
    args: ["check"],
    cwd: "src-tauri"
  },
  {
    label: "Build artifact inspection",
    command: npmCommand,
    args: ["run", "phase0:inspect"],
    cwd: process.cwd()
  }
];

const results = [];

function commandForStep(step) {
  if (process.platform === "win32" && step.command.endsWith(".cmd")) {
    return {
      command: "cmd.exe",
      args: ["/d", "/s", "/c", step.command, ...step.args]
    };
  }

  return {
    command: step.command,
    args: step.args
  };
}

console.log("SublimationPrintOS Phase 0 QA");
console.log("Local checks only. This script does not run tauri:build, launch the GUI, upload files, or delete anything.");

for (const [index, step] of steps.entries()) {
  console.log("");
  console.log(`Step ${index + 1}/${steps.length}: ${step.label}`);
  console.log(`Command: ${step.command} ${step.args.join(" ")}`);
  const commandConfig = commandForStep(step);

  const startedAt = Date.now();
  const result = spawnSync(commandConfig.command, commandConfig.args, {
    cwd: step.cwd,
    shell: false,
    stdio: "inherit"
  });
  const elapsedSeconds = ((Date.now() - startedAt) / 1000).toFixed(1);

  if (result.status === 0) {
    results.push({ Step: step.label, Status: "pass", Seconds: elapsedSeconds });
    continue;
  }

  const status = result.status ?? 1;
  results.push({ Step: step.label, Status: "fail", Seconds: elapsedSeconds });
  if (result.error) {
    console.log(`Command error: ${result.error.message}`);
  }
  console.log("");
  console.table(results);
  console.log(`Phase 0 QA failed at: ${step.label}`);
  process.exit(status);
}

console.log("");
console.table(results);
console.log("Phase 0 QA passed.");
