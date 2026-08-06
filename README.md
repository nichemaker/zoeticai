# Zoetic AI — AI Agent Platforms Directory

Static **Astro + Tailwind** site deployed to **Cloudflare Workers Static Assets**  
Canonical host: **https://www.zoeticai.com**

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build + SEO checks |
| `npm run preview` | Preview `dist/` |
| `npm run deploy` | Build and `wrangler deploy` |
| `npm run deploy:notify` | Deploy, then submit full sitemap to IndexNow |
| `npm run indexnow -- --url /path/` | Notify IndexNow for one URL |
| `npm run indexnow:guides` | Submit all guide URLs |
| `npm run indexnow:tools` | Submit all tool pages |
| `npm run indexnow:recent` | Guides + key hubs |
| `npm run indexnow:sitemap` | Submit every sitemap URL |

## IndexNow (post-publish)

After shipping new guides or tools:

1. Deploy so the key file is live: `npm run deploy`
2. Submit URLs, e.g. `npm run indexnow -- --url /guides/your-slug/`

Full details: **[docs/INDEXNOW.md](./docs/INDEXNOW.md)**

## SEO artifacts

- Sitemap: `/sitemap-index.xml` and alias `/sitemap.xml`
- Robots: `/robots.txt`
- IndexNow key: `/{KEY}.txt` (see `scripts/indexnow.config.mjs`)

Build runs `scripts/seo-postbuild.mjs`, which verifies sitemap coverage (including comparison guides) and the IndexNow key file.
