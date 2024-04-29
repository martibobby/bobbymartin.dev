import { defineConfig } from 'astro/config';

// Custom imports
import tailwind from "@astrojs/tailwind";
import yaml from '@rollup/plugin-yaml';

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), relativeLinks()],
  base: './',
  vite: {
    plugins: [yaml()]
  }
});