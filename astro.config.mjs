import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.apartohotelflorencia.com',
  integrations: [sitemap()],
  compressHTML: true,
  server: {
    host: true,
  },
  vite: {
    server: {
      allowedHosts: [
        'gzip-barbie-platinum-mart.trycloudflare.com',
        '.trycloudflare.com',
      ],
    },
    preview: {
      allowedHosts: [
        'gzip-barbie-platinum-mart.trycloudflare.com',
        '.trycloudflare.com',
      ],
    },
  },
});