// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@ant-design-vue/nuxt',
    '@nuxtjs/device',
    '@nuxtjs/google-adsense',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})