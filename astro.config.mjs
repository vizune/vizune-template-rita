import { defineConfig } from "astro/config";
import critters from 'astro-critters';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@ui': '/src/components/ui',
        '@sections': '/src/components/sections'
      }
    }
  },
  integrations: [critters()]
})
