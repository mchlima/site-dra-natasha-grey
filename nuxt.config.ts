// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/google-fonts",
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "pt-br",
      },
      title: "Dra. Natasha Grey - Odontologia",
      meta: [
        { name: "description", content: "Clínica Odontológica em São Paulo" },
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
  },
  googleFonts: {
    families: {
      "Great Vibes": true,
      cursive: true,
    },
  },
});
