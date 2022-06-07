import {defineNuxtConfig} from 'nuxt'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import {ArcoResolver} from "unplugin-vue-components/resolvers";


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
        '@nuxtjs/tailwindcss'
    ],
/*    css: [
        '@arco-design/web-vue/lib/message/style/index.less',
        '@arco-design/web-vue/lib/notification/style/index.less',
    ],*/
    /*vite: {
        css: {
            preprocessorOptions: {
                less: {
                    modifyVars: {

                    },
                    javascriptEnabled: true,
                }
            }
        },
        plugins: [
            Components({
                dts: true, // enabled by default if `typescript` is installed
                resolvers: [IconsResolver({
                    // to avoid naming conflicts
                    // a prefix can be specified for icons
                    prefix: 'i'
                }),
                    ArcoResolver({
                            importStyle: 'less',
                            resolveIcons: true
                        }
                    )],
            }),
        ],
    },*/
    build: {
        transpile: ['compute-scroll-into-view'],
    },
})
