/**
 * Post-build check: every tool slug must produce dist/tools/{slug}/index.html
 * and homepage/category links must resolve.
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const toolsDist = join(dist, "tools");

// Parse slugs from source (no TS loader required)
const toolsSrc = readFileSync(join(root, "src/data/tools.ts"), "utf8");
const slugs = [...toolsSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const unique = [...new Set(slugs)];

if (unique.length === 0) {
  console.error("verify-tool-pages: no slugs found in tools.ts");
  process.exit(1);
}

let failed = false;

for (const slug of unique) {
  const html = join(toolsDist, slug, "index.html");
  if (!existsSync(html)) {
    console.error(`MISSING page: /tools/${slug}/ → ${html}`);
    failed = true;
  }
}

const built = existsSync(toolsDist)
  ? readdirSync(toolsDist).filter((d) =>
      existsSync(join(toolsDist, d, "index.html")),
    )
  : [];

console.log(`tools in data: ${unique.length}`);
console.log(`tools built:   ${built.length}`);

// Spot-check key slugs that were reported 404
for (const slug of ["cursor", "langgraph", "n8n"]) {
  const ok = existsSync(join(toolsDist, slug, "index.html"));
  console.log(`  /tools/${slug}/ ${ok ? "OK" : "FAIL"}`);
  if (!ok) failed = true;
}

// Homepage featured links
const home = join(dist, "index.html");
if (existsSync(home)) {
  const html = readFileSync(home, "utf8");
  const hrefs = [...html.matchAll(/href="(\/tools\/[^"]+)"/g)].map((m) => m[1]);
  for (const href of new Set(hrefs)) {
    const path = join(dist, href.replace(/\/$/, ""), "index.html");
    if (!existsSync(path)) {
      console.error(`HOME LINK 404: ${href}`);
      failed = true;
    }
  }
  console.log(`homepage tool links checked: ${new Set(hrefs).size}`);
}

if (failed) {
  console.error("verify-tool-pages: FAILED");
  process.exit(1);
}

console.log("verify-tool-pages: all tool pages present");
