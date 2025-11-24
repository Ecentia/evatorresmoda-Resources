import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

import markdoc from '@astrojs/markdoc';

export default defineConfig({
  site: 'https://www.evatorresmoda.com', 
  integrations: [sitemap(), react(), keystatic(), markdoc()], 
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static'
});