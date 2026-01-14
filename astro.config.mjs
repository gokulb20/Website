// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Static output for Netlify
  output: 'static',

  // Build configuration
  build: {
    // Generate clean URLs (e.g., /philosophy instead of /philosophy.html)
    format: 'directory'
  }
});
