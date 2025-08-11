// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/scripts"],
  app: {
    head: {
      title: "Dra. Natasha Grey - Odontologia",
      meta: [
        { name: "description", content: "Clínica Odontológica em São Paulo" },
      ],
    },
  },
});
