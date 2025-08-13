// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/google-fonts",
    "nuxt-swiper",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
  ],
  css: [
    "~/assets/css/tailwind.css",
    // "~/assets/css/helpers.css",
    // "~/assets/css/main.css",
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "pt-br",
      },
      title: "Dra. Natasha Grey - Odontologia",
      meta: [
        { name: "description", content: "Clínica Odontológica em São Paulo" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
      ],
    },
    rootAttrs: {
      class: "h-full",
    },
  },
  googleFonts: {
    families: {
      "Great Vibes": true,
      cursive: true,
    },
    display: "swap",
  },
  image: {
    quality: 75,
  },
});
