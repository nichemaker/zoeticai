#!/usr/bin/env node
/**
 * Submit URL(s) to IndexNow for faster discovery by Bing and other engines.
 *
 * Usage:
 *   npm run indexnow -- --url /guides/n8n-vs-make-vs-zapier-agents/
 *   npm run indexnow -- --urls /guides/foo/ /tools/n8n/
 *   npm run indexnow -- --file urls.txt
 *   npm run indexnow -- --sitemap
 *   npm run indexnow -- --preset guides
 *   npm run indexnow -- --preset tools
 *   npm run indexnow -- --preset recent
 *   npm run indexnow -- --sitemap --dry-run
 *
 * Requires the key file to be live at KEY_LOCATION after deploy.
 * Prefer: deploy first, then run this script.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import {
  INDEXNOW_KEY,
  SITE_HOST,
  SITE_ORIGIN,
  KEY_LOCATION,
  INDEXNOW_ENDPOINT,
  INDEXNOW_BATCH_SIZE,
} from "./indexnow.config.mjs";

// ─── CLI ─────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);

function flag(name) {
  return args.includes(name);
}

function valuesAfter(name) {
  const i = args.indexOf(name);
  if (i === -1) return [];
  const out = [];
  for (let j = i + 1; j < args.length; j++) {
    if (args[j].startsWith("--")) break;
    out.push(args[j]);
  }
  return out;
}

function valueAfter(name) {
  return valuesAfter(name)[0];
}

function printHelp() {
  console.log(`IndexNow submitter for ${SITE_ORIGIN}

Usage:
  node scripts/indexnow.mjs [options]

Options:
  --url <path|url>       Submit one path (/guides/foo/) or absolute URL
  --urls <path...>       Submit multiple paths/URLs
  --file <path>          Read URLs/paths from a text file (one per line)
  --sitemap              Submit all URLs from dist/sitemap-0.xml (or sitemap.xml)
  --preset guides        All guide article URLs (+ /guides/)
  --preset tools         All /tools/* URLs from sitemap (or catalog fallback)
  --preset recent        Guides + methodology + platforms + home (post-publish set)
  --dry-run              Print payload without POSTing
  --help                 Show this help

Examples:
  npm run indexnow -- --url /guides/n8n-vs-make-vs-zapier-agents/
  npm run indexnow -- --preset guides
  npm run indexnow -- --sitemap
  npm run indexnow -- --urls /tools/n8n/ /tools/make/ /tools/zapier-agents/
`);
}

// ─── URL helpers ─────────────────────────────────────────────────────────────

function normalizeUrl(input) {
  const raw = input.trim();
  if (!raw || raw.startsWith("#")) return null;

  let url;
  if (raw.startsWith("http://") || raw.startsWith("https://")) {
    url = new URL(raw);
  } else {
    const path = raw.startsWith("/") ? raw : `/${raw}`;
    url = new URL(path, SITE_ORIGIN);
  }

  // Enforce canonical host
  if (url.hostname !== SITE_HOST && url.hostname !== "zoeticai.com") {
    throw new Error(
      `URL host must be ${SITE_HOST} (got ${url.hostname}): ${raw}`,
    );
  }
  url.protocol = "https:";
  url.hostname = SITE_HOST;
  // Directory trailing slash (matches site trailingSlash: always)
  if (!url.pathname.endsWith("/") && !url.pathname.includes(".")) {
    url.pathname = `${url.pathname}/`;
  }
  url.hash = "";
  url.search = "";
  return url.toString();
}

function uniqueUrls(list) {
  return [...new Set(list.filter(Boolean))];
}

// ─── Sources ─────────────────────────────────────────────────────────────────

function urlsFromSitemap() {
  const candidates = [
    join(process.cwd(), "dist", "sitemap-0.xml"),
    join(process.cwd(), "dist", "sitemap.xml"),
  ];
  const path = candidates.find((p) => existsSync(p));
  if (!path) {
    throw new Error(
      "No dist/sitemap-0.xml found. Run `npm run build` first, or pass --url/--urls.",
    );
  }
  const xml = readFileSync(path, "utf8");
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map(
    (m) => m[1],
  );
  if (locs.length === 0) {
    throw new Error(`No <loc> entries in ${path}`);
  }
  console.log(`indexnow: read ${locs.length} URLs from ${path}`);
  return locs;
}

function urlsFromFile(filePath) {
  if (!existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  return readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"));
}

/**
 * Presets for common publish workflows.
 * Prefer sitemap when available so trailing slashes and full catalog stay correct.
 */
function urlsFromPreset(name) {
  const all =
    existsSync(join(process.cwd(), "dist", "sitemap-0.xml")) ||
    existsSync(join(process.cwd(), "dist", "sitemap.xml"))
      ? urlsFromSitemap().map(normalizeUrl)
      : null;

  if (name === "guides") {
    if (all) {
      return all.filter(
        (u) =>
          u === `${SITE_ORIGIN}/guides/` ||
          (u.startsWith(`${SITE_ORIGIN}/guides/`) &&
            u !== `${SITE_ORIGIN}/guides/`),
      );
    }
    // Fallback if build not run — keep in sync with src/data/guides.ts
    const slugs = [
      "how-to-evaluate-ai-agent-platforms",
      "frameworks-vs-enterprise-platforms",
      "mcp-and-tool-calling-explained",
      "langgraph-vs-crewai",
      "claude-code-vs-cursor",
      "copilot-studio-vs-agentforce",
      "best-open-source-ai-agent-frameworks-2026",
      "n8n-vs-make-vs-zapier-agents",
      "best-ai-agent-platforms-for-smbs-2026",
      "lindy-vs-relevance-ai-vs-dust",
      "best-ai-coding-agents-2026",
      "ai-agent-platforms-tco-2026",
    ];
    return [
      `${SITE_ORIGIN}/guides/`,
      ...slugs.map((s) => `${SITE_ORIGIN}/guides/${s}/`),
    ];
  }

  if (name === "tools") {
    if (all) {
      return all.filter((u) => u.startsWith(`${SITE_ORIGIN}/tools/`));
    }
    throw new Error(
      "Preset tools requires dist/sitemap (run npm run build first).",
    );
  }

  if (name === "recent") {
    // Post-publish batch: all guides + high-traffic hubs
    const guides = urlsFromPreset("guides");
    const hubs = [
      `${SITE_ORIGIN}/`,
      `${SITE_ORIGIN}/platforms/`,
      `${SITE_ORIGIN}/categories/`,
      `${SITE_ORIGIN}/guides/`,
      `${SITE_ORIGIN}/methodology/`,
    ];
    return uniqueUrls([...hubs, ...guides]);
  }

  throw new Error(
    `Unknown preset "${name}". Use: guides | tools | recent`,
  );
}

// ─── Submit ──────────────────────────────────────────────────────────────────

async function submitBatch(urlList) {
  const body = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body),
  });

  const text = await res.text().catch(() => "");
  return { status: res.status, ok: res.ok, body: text };
}

async function main() {
  if (flag("--help") || args.length === 0) {
    printHelp();
    process.exit(args.length === 0 ? 1 : 0);
  }

  const dryRun = flag("--dry-run");
  let raw = [];

  if (flag("--sitemap")) {
    raw.push(...urlsFromSitemap());
  }

  const preset = valueAfter("--preset");
  if (preset) {
    raw.push(...urlsFromPreset(preset));
  }

  const file = valueAfter("--file");
  if (file) {
    raw.push(...urlsFromFile(file));
  }

  raw.push(...valuesAfter("--url"));
  raw.push(...valuesAfter("--urls"));

  // Also accept bare positional paths after flags that take no value
  // (skip if we already collected from named options)
  if (raw.length === 0) {
    for (const a of args) {
      if (a.startsWith("--")) continue;
      raw.push(a);
    }
  }

  if (raw.length === 0) {
    console.error("indexnow: no URLs to submit. Pass --url, --sitemap, or --preset.");
    printHelp();
    process.exit(1);
  }

  let urls;
  try {
    urls = uniqueUrls(raw.map(normalizeUrl));
  } catch (err) {
    console.error(`indexnow: ${err.message}`);
    process.exit(1);
  }

  console.log(`indexnow: host=${SITE_HOST}`);
  console.log(`indexnow: keyLocation=${KEY_LOCATION}`);
  console.log(`indexnow: ${urls.length} URL(s) to submit`);

  if (dryRun) {
    console.log("indexnow: dry-run — not posting");
    for (const u of urls) console.log(`  ${u}`);
    process.exit(0);
  }

  // Ownership check (best-effort) — warns if key file not reachable yet
  try {
    const keyRes = await fetch(KEY_LOCATION, { method: "GET" });
    const keyBody = (await keyRes.text()).trim();
    if (!keyRes.ok) {
      console.warn(
        `indexnow: warning — key file returned HTTP ${keyRes.status}. Deploy the site before submitting, or IndexNow may reject the request.`,
      );
    } else if (keyBody !== INDEXNOW_KEY) {
      console.warn(
        "indexnow: warning — key file content does not match INDEXNOW_KEY.",
      );
    } else {
      console.log("indexnow: key file verified live");
    }
  } catch {
    console.warn(
      "indexnow: warning — could not fetch key file (offline or not deployed yet).",
    );
  }

  // Chunk if ever over limit (unlikely for this catalog)
  const batches = [];
  for (let i = 0; i < urls.length; i += INDEXNOW_BATCH_SIZE) {
    batches.push(urls.slice(i, i + INDEXNOW_BATCH_SIZE));
  }

  let failures = 0;
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(
      `indexnow: POST batch ${i + 1}/${batches.length} (${batch.length} urls) → ${INDEXNOW_ENDPOINT}`,
    );
    try {
      const result = await submitBatch(batch);
      // IndexNow: 200 OK, 202 Accepted are success
      if (result.status === 200 || result.status === 202) {
        console.log(`indexnow: success HTTP ${result.status}`);
      } else {
        failures += 1;
        console.error(
          `indexnow: unexpected HTTP ${result.status}${result.body ? ` — ${result.body.slice(0, 200)}` : ""}`,
        );
      }
    } catch (err) {
      failures += 1;
      console.error(`indexnow: request failed — ${err.message}`);
    }
  }

  if (failures > 0) {
    process.exit(1);
  }
  console.log("indexnow: done");
}

main();
