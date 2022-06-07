import { fileURLToPath } from 'node:url'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.options.css.push('@arco-design/web-vue/dist/arco.css');
  },
  hooks: {
    'components:dirs': function (dirs) {
      // TODO: can set config by moduleOptions
      dirs.push(
        // icon need before components
        {
          path: fileURLToPath(
            new URL('../node_modules/@arco-design/web-vue/es/icon', import.meta.url),
          ),
          pattern: '*/index.js',
        },
        {
          path: fileURLToPath(
            new URL('../node_modules/@arco-design/web-vue/es', import.meta.url),
          ),
          pattern: '*/index.js',
          prefix: 'a',
        },
      )
    },
  },
})
