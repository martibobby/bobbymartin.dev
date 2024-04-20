import { defineConfig } from 'astro/config';

// Custom imports
import tailwind from "@astrojs/tailwind";
import yaml from '@rollup/plugin-yaml'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [yaml()]
  }
});