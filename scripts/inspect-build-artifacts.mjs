import { existsSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const strict = process.argv.includes("--strict");
const scanRoots = [
  "src-tauri/target/release",
  "src-tauri/target/release/bundle",
  "src-tauri/target/release/bundle/nsis",
  "src-tauri/target/release/bundle/msi"
];
const installerExtensions = new Set([
  ".msi",
  ".exe",
  ".dmg",
  ".appimage",
  ".deb",
  ".rpm"
]);

function fileExtension(filePath) {
  const dot = filePath.lastIndexOf(".");
  return dot >= 0 ? filePath.slice(dot).toLowerCase() : "";
}

function walkFiles(root) {
  const files = [];
  if (!existsSync(root)) {
    return files;
  }

  for (const entry of readdirSync(root, { withFileTypes: true })) {
    const entryPath = join(root, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(entryPath));
    } else if (entry.isFile()) {
      const stats = statSync(entryPath);
      files.push({
        Path: relative(process.cwd(), entryPath),
        "Size MB": (stats.size / 1024 / 1024).toFixed(2),
        Modified: stats.mtime.toISOString()
      });
    }
  }

  return files;
}

const allFiles = [];
for (const root of scanRoots) {
  if (!existsSync(root)) {
    console.log(`Missing scan path: ${root}`);
    continue;
  }

  console.log(`Scanning: ${root}`);
  allFiles.push(...walkFiles(root));
}

const uniqueFiles = Array.from(
  new Map(allFiles.map((file) => [file.Path, file])).values()
).sort((left, right) => left.Path.localeCompare(right.Path));

const bundleFiles = uniqueFiles.filter(
  (file) =>
    file.Path.includes("src-tauri\\target\\release\\bundle\\") ||
    file.Path.includes("src-tauri/target/release/bundle/") ||
    installerExtensions.has(fileExtension(file.Path))
);

console.log("SublimationPrintOS Phase 0 build artifact inspection");

if (uniqueFiles.length > 0) {
  console.table(uniqueFiles);
} else {
  console.log("No release files found yet.");
}

if (bundleFiles.length > 0) {
  console.log(`Warning: bundle/installer-like files found: ${bundleFiles.length}`);
  console.log("These are local build outputs. Do not commit, copy, upload, or publish them from this script.");
} else {
  console.log("Warning: no Tauri bundle or installer artifact found yet.");
}

if (strict && bundleFiles.length === 0) {
  console.log("Strict mode failed because no bundle artifact was found.");
  process.exit(1);
}

console.log("Inspection completed. No files were copied, uploaded, or deleted.");
