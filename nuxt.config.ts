import {defineNuxtConfig} from 'nuxt'


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    loadingIndicator: undefined,
/*    experimental: {
        reactivityTransform: true,
        viteNode: true,
    },*/
    modules: [
        '@pinia/nuxt',
        './modules/arco',
        '@nuxtjs/tailwindcss',
    ],
    build: {
        transpile: ['compute-scroll-into-view'],
    },
})
