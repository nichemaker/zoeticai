// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Canonical origin — replace with the live host before publish.
// Keep site, canonicals, sitemap, and deploy host aligned.
export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
