import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import node from '@astrojs/node';
export default defineConfig({
  // ... other options ...
  output: 'server',

  typeScript: {
    enable: true,
  },

  integrations: [svelte()],

  adapter: node({
    mode: 'standalone',
  }),
});