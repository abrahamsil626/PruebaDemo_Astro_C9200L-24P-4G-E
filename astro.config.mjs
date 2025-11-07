// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://abrahamsil626.github.io',
  base: 'C9200L-24P-4G-E',
  vite: {
    plugins: [tailwindcss()]
  }
});