// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import {
  getSitemapMeta,
  shouldIncludeInSitemap,
} from './src/lib/sitemap.ts';

// Canonical origin — must match live host, site.url, sitemap, and robots.
export default defineConfig({
  site: 'https://www.zoeticai.com',
  output: 'static',
  // Matches Cloudflare assets html_handling + internal links (/tools/slug/)
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      // High enough for full catalog in one file; still emits sitemap-index.xml
      entryLimit: 10000,
      filter: (page) => shouldIncludeInSitemap(page),
      serialize(item) {
        if (!shouldIncludeInSitemap(item.url)) return undefined;
        const meta = getSitemapMeta(item.url);
        return {
          ...item,
          lastmod: meta.lastmod,
          changefreq: meta.changefreq,
          priority: meta.priority,
        };
      },
      // Lighter XML (no news/image/video namespaces unless needed)
      namespaces: {
        news: false,
        xhtml: false,
        image: false,
        video: false,
      },
    }),
  ],
});
