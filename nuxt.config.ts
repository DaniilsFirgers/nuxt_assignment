// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
  },
  ssr: false,
  devServer:{
    port: 3001,
    host: 'localhost'
  },
  build: {
    optimizeDeps: {
      include: ["vue", "vue-router"]
    }
  } as { [key: string]: any }
});
