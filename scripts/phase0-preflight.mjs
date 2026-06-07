import { existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const requiredFiles = [
  "package.json",
  "package-lock.json",
  "src-tauri/Cargo.toml",
  "src-tauri/tauri.conf.json",
  "src/main.tsx",
  "src-tauri/src/main.rs",
  "docs/PRODUCT_BRIEF.md",
  "docs/PHASE_PLAN.md",
  "README.md",
  ".gitignore",
  "release/ALPHA0_BUILD_CHECKLIST.md",
  "release/ALPHA0_RELEASE_READINESS.md",
  "release/ALPHA0_MANUAL_SMOKE_TEST.md",
  "release/KNOWN_ISSUES_ALPHA0.md",
  "scripts/phase0-qa.mjs"
];

const ignoredPaths = ["dist", "node_modules", "src-tauri/target"];
const requiredScripts = [
  "dev",
  "build",
  "preview",
  "tauri:dev",
  "tauri:build",
  "typecheck",
  "phase0:preflight",
  "phase0:check",
  "phase0:package",
  "phase0:inspect",
  "phase0:qa"
];
const results = [];
const warnings = [];

function addCheck(label, status, detail) {
  results.push({ Check: label, Status: status, Detail: detail });
}

function runGit(args) {
  try {
    return execFileSync("git", args, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"]
    }).trim();
  } catch {
    return null;
  }
}

const nodeMajor = Number.parseInt(process.versions.node.split(".")[0] ?? "0", 10);
if (nodeMajor >= 20) {
  addCheck("Node.js version", "pass", process.versions.node);
} else {
  addCheck("Node.js version", "fail", `${process.versions.node}; requires >=20`);
}

for (const filePath of requiredFiles) {
  addCheck(
    `Required file: ${filePath}`,
    existsSync(filePath) ? "pass" : "fail",
    existsSync(filePath) ? "found" : "missing"
  );
}

let packageJson = null;
try {
  packageJson = JSON.parse(readFileSync("package.json", "utf8"));
  addCheck("package.json parse", "pass", "valid JSON");
} catch (error) {
  addCheck("package.json parse", "fail", String(error));
}

if (packageJson) {
  addCheck("Package name", packageJson.name ? "pass" : "fail", packageJson.name ?? "missing");
  addCheck(
    "Package version",
    packageJson.version === "0.1.0" ? "pass" : "warn",
    packageJson.version ?? "missing"
  );

  for (const scriptName of requiredScripts) {
    addCheck(
      `npm script: ${scriptName}`,
      packageJson.scripts?.[scriptName] ? "pass" : "fail",
      packageJson.scripts?.[scriptName] ?? "missing"
    );
  }
}

let tauriConfig = null;
try {
  tauriConfig = JSON.parse(readFileSync("src-tauri/tauri.conf.json", "utf8"));
  addCheck("Tauri config parse", "pass", "valid JSON");
} catch (error) {
  addCheck("Tauri config parse", "fail", String(error));
}

if (tauriConfig) {
  const firstWindow = tauriConfig.app?.windows?.[0];
  addCheck(
    "Tauri productName",
    tauriConfig.productName === "SublimationPrintOS" ? "pass" : "fail",
    tauriConfig.productName ?? "missing"
  );
  addCheck(
    "Tauri version",
    tauriConfig.version === "0.1.0" ? "pass" : "warn",
    tauriConfig.version ?? "missing"
  );
  addCheck(
    "Tauri identifier",
    typeof tauriConfig.identifier === "string" && tauriConfig.identifier.length > 0
      ? "pass"
      : "fail",
    tauriConfig.identifier ?? "missing"
  );
  addCheck(
    "Tauri minimum window size",
    firstWindow?.minWidth && firstWindow?.minHeight ? "pass" : "fail",
    firstWindow ? `${firstWindow.minWidth ?? "?"}x${firstWindow.minHeight ?? "?"}` : "missing"
  );
  addCheck(
    "Tauri CSP",
    typeof tauriConfig.app?.security?.csp === "string" &&
      tauriConfig.app.security.csp.length > 0
      ? "pass"
      : "fail",
    tauriConfig.app?.security?.csp ?? "missing"
  );
  addCheck(
    "Tauri bundle active",
    tauriConfig.bundle?.active === true ? "pass" : "fail",
    String(tauriConfig.bundle?.active)
  );
}

let gitignore = "";
try {
  gitignore = readFileSync(".gitignore", "utf8");
} catch {
  gitignore = "";
}

for (const ignoredPath of ignoredPaths) {
  const ignoredByGit = runGit(["check-ignore", "-q", ignoredPath]) !== null;
  const listedInGitignore = gitignore.includes(`${ignoredPath}/`);
  addCheck(
    `Ignored path: ${ignoredPath}`,
    ignoredByGit || listedInGitignore ? "pass" : "fail",
    ignoredByGit
      ? "ignored by git"
      : listedInGitignore
        ? "listed in .gitignore"
        : "not ignored"
  );
}

const branch = runGit(["branch", "--show-current"]);
if (branch) {
  addCheck("Git branch", "info", branch);
} else {
  warnings.push("Git branch could not be checked.");
}

const status = runGit(["status", "--short"]);
if (status === null) {
  warnings.push("Git working tree status could not be checked.");
} else {
  addCheck("Git working tree", status.length === 0 ? "pass" : "warn", status || "clean");
}

const defaultBranch = runGit(["symbolic-ref", "refs/remotes/origin/HEAD"]);
if (defaultBranch) {
  addCheck("GitHub default branch hint", "info", defaultBranch.replace("refs/remotes/origin/", ""));
} else {
  warnings.push("Default branch could not be checked. This is not a preflight failure.");
}

console.log("SublimationPrintOS Phase 0 packaging preflight");
console.table(results);

if (warnings.length > 0) {
  console.log("Warnings:");
  for (const warning of warnings) {
    console.log(`- ${warning}`);
  }
}

const failures = results.filter((result) => result.Status === "fail");
if (failures.length > 0) {
  console.log(`Preflight failed with ${failures.length} required issue(s).`);
  process.exit(1);
}

console.log("Preflight passed.");
