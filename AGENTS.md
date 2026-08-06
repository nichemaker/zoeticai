## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Publish + IndexNow

After adding or updating **guides** or **tool** pages:

1. `npm run deploy` (build + Cloudflare Workers Static Assets)
2. Notify IndexNow so Bing/participants can re-crawl sooner:

```bash
# Single page
npm run indexnow -- --url /guides/your-new-guide/

# All guides / all tools / full sitemap
npm run indexnow:guides
npm run indexnow:tools
npm run indexnow:sitemap

# Or deploy + full sitemap notify
npm run deploy:notify
```

Key file and config: `public/{key}.txt`, `scripts/indexnow.config.mjs`  
Docs: `docs/INDEXNOW.md`

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
