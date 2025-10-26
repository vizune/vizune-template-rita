// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@tailwindcss/vite'
import critters from 'astro-critters';

export default defineConfig({
  vite: {
    plugins: [tailwind()],
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
