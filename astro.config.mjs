import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import { loadEnv } from "vite";

// Lectura de variables de entorno para deploy y desarrollo
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), "");

const PROJECT_ID = process.env.PUBLIC_SANITY_PROJECT_ID || env.PUBLIC_SANITY_PROJECT_ID;
const DATASET = process.env.PUBLIC_SANITY_DATASET || env.PUBLIC_SANITY_DATASET;

export default defineConfig({
  // No usar 'base' con dominio personalizado
  site: 'https://www.evatorresmoda.com',

  integrations: [
    sitemap(),
    react(),
    sanity({
      projectId: PROJECT_ID, 
      dataset: DATASET,      
      useCdn: false,
      apiVersion: '2024-03-01',
      // Desactiva el Studio en el build de producción para evitar el error de servidor
      studioBasePath: process.env.NODE_ENV === 'development' ? '/admin' : undefined,
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static'
});