import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://steady-raindrop-092e40.netlify.app',
  integrations: [mdx(), sitemap(), tailwind()],
})
