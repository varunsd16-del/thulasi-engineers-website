import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://thulasiengineers.com',
  integrations: [tailwind()],
  build: {
    assets: '_assets'
  }
});
