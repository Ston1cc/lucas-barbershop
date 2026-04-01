import { spawnSync } from "node:child_process";

const skipPrerender = process.env.SKIP_PRERENDER === "1" || process.env.SKIP_PRERENDER === "true" || !!process.env.CF_PAGES;

if (skipPrerender) {
  console.log("[postbuild] Skipping react-snap prerender (CF_PAGES/SKIP_PRERENDER).");
  process.exit(0);
}

const result = spawnSync("pnpm", ["exec", "react-snap"], {
  stdio: "inherit",
  shell: process.platform === "win32",
});

if (result.error) {
  console.error("[postbuild] Failed to run react-snap:", result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
