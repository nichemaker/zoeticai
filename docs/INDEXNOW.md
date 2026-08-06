# IndexNow — notify search engines of new/updated pages

[IndexNow](https://www.indexnow.org/) lets you tell participating engines (including **Bing**) that URLs on **www.zoeticai.com** were added or changed. This project is a **static Astro site** on **Cloudflare Workers Static Assets**, so submissions run as a **post-deploy CLI** (not a server webhook).

## How it is set up

| Piece | Location |
| --- | --- |
| API key | `scripts/indexnow.config.mjs` → `INDEXNOW_KEY` |
| Ownership proof file | `public/{KEY}.txt` → served as `https://www.zoeticai.com/{KEY}.txt` |
| Submit script | `scripts/indexnow.mjs` |
| Endpoint | `https://api.indexnow.org/indexnow` |

After `npm run build` / deploy, the key file is in `dist/{KEY}.txt` and must be publicly reachable before a successful submission.

## After publishing new content

### 1. Deploy first

```bash
npm run deploy
# or: npm run build && npx wrangler deploy
```

Confirm the key file is live:

```bash
curl -sS "https://www.zoeticai.com/00b1b46bcebd22a15b8dc711d8ae9ade.txt"
# should print the key only
```

### 2. Notify IndexNow

**One new guide or tool:**

```bash
npm run indexnow -- --url /guides/n8n-vs-make-vs-zapier-agents/
npm run indexnow -- --url /tools/n8n/
```

**Several paths at once:**

```bash
npm run indexnow -- --urls \
  /guides/n8n-vs-make-vs-zapier-agents/ \
  /tools/n8n/ \
  /tools/make/ \
  /tools/zapier-agents/ \
  /categories/workflow/
```

**All guides (comparison + roundups + index):**

```bash
npm run indexnow:guides
```

**All tool detail pages:**

```bash
npm run indexnow:tools
```

**Typical “just shipped content” set (guides + hubs):**

```bash
npm run indexnow:recent
```

**Entire sitemap (full catalog):**

```bash
npm run build          # refresh dist/sitemap-0.xml
npm run indexnow:sitemap
```

**Deploy + full sitemap notify in one step:**

```bash
npm run deploy:notify
```

**Dry run (print URLs, no POST):**

```bash
npm run indexnow -- --preset guides --dry-run
```

**From a file** (one path or absolute URL per line):

```bash
npm run indexnow -- --file ./urls-to-submit.txt
```

## npm scripts

| Script | Action |
| --- | --- |
| `npm run indexnow -- …` | Pass CLI flags through to the script |
| `npm run indexnow:guides` | Submit guide URLs |
| `npm run indexnow:tools` | Submit all tool pages |
| `npm run indexnow:recent` | Guides + home/platforms/categories/methodology |
| `npm run indexnow:sitemap` | Submit every URL in `dist/sitemap-*.xml` |
| `npm run deploy:notify` | `deploy` then `indexnow:sitemap` |

## Response codes

IndexNow commonly returns:

- **200** — OK  
- **202** — Accepted  
- **400** — Invalid format  
- **403** — Key not valid / key file mismatch  
- **422** — URLs don’t match host / key issues  
- **429** — Too many requests  

If you see **403**, deploy the key file and wait a minute, then retry.

## Rotating the key

1. Generate a new hex key (8–128 chars), e.g.  
   `node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"`
2. Update `INDEXNOW_KEY` in `scripts/indexnow.config.mjs`.
3. Replace `public/{old}.txt` with `public/{new}.txt` containing only the new key.
4. Deploy.
5. Submit URLs again with `npm run indexnow:sitemap` (or a smaller preset).

## When to submit

- After **new guides** or major guide rewrites  
- After **new tools** or material profile updates  
- After large IA/content ships (use `--sitemap` or `--preset recent`)  
- Avoid spamming the same large batch every deploy unless content changed  

Sitemap discovery still works independently; IndexNow is an acceleration layer, not a replacement for `/sitemap-index.xml`.
