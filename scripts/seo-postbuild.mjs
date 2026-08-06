/**
 * Post-build SEO artifacts for static / Cloudflare Workers deploy:
 * 1. Ensure /sitemap.xml exists (copy of sitemap-index.xml or sitemap-0.xml)
 * 2. Verify robots.txt references the sitemap
 * 3. Sanity-check URL count in the urlset
 * 4. Verify IndexNow key file is present in dist/
 * 5. Assert comparison guides + key hubs appear in the sitemap
 */
import {
  copyFileSync,
  existsSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { INDEXNOW_KEY } from "./indexnow.config.mjs";

const dist = join(process.cwd(), "dist");
const indexPath = join(dist, "sitemap-index.xml");
const chunkPath = join(dist, "sitemap-0.xml");
const aliasPath = join(dist, "sitemap.xml");
const robotsPath = join(dist, "robots.txt");
const indexNowKeyPath = join(dist, `${INDEXNOW_KEY}.txt`);

/** Must appear in sitemap — comparison guides + high-value hubs */
const REQUIRED_SITEMAP_PATHS = [
  "/",
  "/platforms/",
  "/categories/",
  "/guides/",
  "/methodology/",
  "/guides/langgraph-vs-crewai/",
  "/guides/claude-code-vs-cursor/",
  "/guides/copilot-studio-vs-agentforce/",
  "/guides/n8n-vs-make-vs-zapier-agents/",
  "/guides/lindy-vs-relevance-ai-vs-dust/",
  "/guides/best-ai-coding-agents-2026/",
  "/guides/ai-agent-platforms-tco-2026/",
  "/guides/best-ai-agent-platforms-for-smbs-2026/",
  "/guides/best-open-source-ai-agent-frameworks-2026/",
  "/guides/how-to-evaluate-ai-agent-platforms/",
  "/guides/frameworks-vs-enterprise-platforms/",
  "/guides/mcp-and-tool-calling-explained/",
  "/tools/n8n/",
  "/tools/make/",
  "/tools/zapier-agents/",
  "/tools/cursor/",
  "/tools/langgraph/",
];

if (!existsSync(dist)) {
  console.error("seo-postbuild: dist/ missing — run astro build first");
  process.exit(1);
}

// Prefer sitemap-index.xml as the public /sitemap.xml entry point
if (existsSync(indexPath)) {
  copyFileSync(indexPath, aliasPath);
  console.log("seo-postbuild: wrote dist/sitemap.xml (from sitemap-index.xml)");
} else if (existsSync(chunkPath)) {
  // Single-file fallback: wrap urlset in a tiny index, or just alias the chunk
  copyFileSync(chunkPath, aliasPath);
  console.log("seo-postbuild: wrote dist/sitemap.xml (from sitemap-0.xml)");
} else {
  console.error("seo-postbuild: no sitemap XML found in dist/");
  process.exit(1);
}

// Count locs in primary urlset + required pages
if (existsSync(chunkPath)) {
  const xml = readFileSync(chunkPath, "utf8");
  const count = (xml.match(/<loc>/g) ?? []).length;
  console.log(`seo-postbuild: sitemap-0.xml urls: ${count}`);
  if (count < 10) {
    console.error("seo-postbuild: suspiciously few URLs in sitemap");
    process.exit(1);
  }
  // lastmod should be present after serialize
  if (!xml.includes("<lastmod>")) {
    console.warn("seo-postbuild: warning — no <lastmod> tags found");
  } else {
    console.log("seo-postbuild: lastmod tags present");
  }

  const missing = REQUIRED_SITEMAP_PATHS.filter(
    (p) => !xml.includes(`https://www.zoeticai.com${p}`),
  );
  if (missing.length > 0) {
    console.error(
      "seo-postbuild: sitemap missing required paths:\n  " +
        missing.join("\n  "),
    );
    process.exit(1);
  }
  console.log(
    `seo-postbuild: required paths OK (${REQUIRED_SITEMAP_PATHS.length} checked)`,
  );
}

// IndexNow ownership file (must ship with static assets)
if (!existsSync(indexNowKeyPath)) {
  console.error(
    `seo-postbuild: IndexNow key file missing — expected public/${INDEXNOW_KEY}.txt → dist/${INDEXNOW_KEY}.txt`,
  );
  process.exit(1);
}
const keyBody = readFileSync(indexNowKeyPath, "utf8").trim();
if (keyBody !== INDEXNOW_KEY) {
  console.error(
    "seo-postbuild: IndexNow key file content does not match INDEXNOW_KEY",
  );
  process.exit(1);
}
console.log(`seo-postbuild: IndexNow key file OK (/${INDEXNOW_KEY}.txt)`);

// robots.txt — generated route preferred; patch public copy if needed
if (existsSync(robotsPath)) {
  let robots = readFileSync(robotsPath, "utf8");
  if (!robots.includes("Sitemap:")) {
    robots += `\nSitemap: https://www.zoeticai.com/sitemap-index.xml\n`;
    writeFileSync(robotsPath, robots);
    console.log("seo-postbuild: appended Sitemap line to robots.txt");
  }
  if (!robots.includes("sitemap")) {
    console.warn("seo-postbuild: robots.txt may be missing sitemap reference");
  } else {
    console.log("seo-postbuild: robots.txt OK");
  }
} else {
  console.warn("seo-postbuild: robots.txt not found in dist/");
}

console.log("seo-postbuild: done");
