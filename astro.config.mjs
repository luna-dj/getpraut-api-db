import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
export default defineConfig({
  // ... other options ...
  typeScript: {
    enable: true,
  },

  integrations: [svelte()],
});