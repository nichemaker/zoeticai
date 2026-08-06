/**
 * Post-build SEO artifacts for static / Cloudflare Workers deploy:
 * 1. Ensure /sitemap.xml exists (copy of sitemap-index.xml or sitemap-0.xml)
 * 2. Verify robots.txt references the sitemap
 * 3. Sanity-check URL count in the urlset
 */
import {
  copyFileSync,
  existsSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");
const indexPath = join(dist, "sitemap-index.xml");
const chunkPath = join(dist, "sitemap-0.xml");
const aliasPath = join(dist, "sitemap.xml");
const robotsPath = join(dist, "robots.txt");

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

// Count locs in primary urlset
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
}

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
