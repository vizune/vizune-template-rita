// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image", "nuxt-gtag"],
  css: ['~/assets/scss/style.scss'],
  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
  ],
  googleFonts: {
    display: 'swap',
    families: {
      Forum: true,
      Montserrat: {
        wght: [100, 200, 300, 400, 700],
        ital: [100, 200, 300, 400, 700]
      },
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
         ? { preset: ['default', { discardComments: { removeAll: true } }] }
            : false, // disable cssnano when not in production
     },
  },
  runtimeConfig: {
    public: {
      cSpace: process.env.NUXT_PUBLIC_cSPACE,
      cAccessToken: process.env.NUXT_PUBLIC_cACCESS_TOKEN,
      avatars100: process.env.NUXT_PUBLIC_POSTS_AVATARS_100,
      avatars200: process.env.NUXT_PUBLIC_POSTS_AVATARS_200,
      avatars400: process.env.NUXT_PUBLIC_POSTS_AVATARS_400,
      blog: process.env.NUXT_PUBLIC_POSTS_BLOG,
      psds: process.env.NUXT_PUBLIC_POSTS_PSDS,
      renders: process.env.NUXT_PUBLIC_POSTS_RENDERS,
      templates: process.env.NUXT_PUBLIC_POSTS_TEMPLATES,
      tutorials: process.env.NUXT_PUBLIC_POSTS_TUTORIALS
    }
  },
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID,
    initCommands: [
      // Setup up consent mode
      ['consent', 'default', {
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        ad_storage: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500,
      }]
    ]
  }
})