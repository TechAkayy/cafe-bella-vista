// import { fileURLToPath, URL } from 'node:url'
// import presetIcons from '@unocss/preset-icons'

import site from './site'
const {
  name,
  // description,
  url,
  defaultLocale,
  identity,
  twitter,
  trailingSlash,
  titleSeparator,
} = site

export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: false }, // Disable when using Vue devtools

  app: {
    baseURL: '/', // defaulted by nuxt
    // Look into HeadAndMeta.vue for the rest
    head: {
      meta: [{ charset: 'utf-8' }], // defaulted by nuxt
    },
  },

  modules: [
    '@pinegrow/nuxt-module',
    '@unocss/nuxt',
    'nuxt-icon', //Used only in OgImage components
    '@nuxt/devtools',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    // '@nuxtjs/html-validator',
    '@nuxt/image',
    '@vee-validate/nuxt',
    'vuetify-nuxt-module',
    // '@nuxt/ui',
    '@nuxtseo/module',
  ],

  // Vuetify's global styles
  css: [
    '~/assets/css/main.css', // Used for global styles. This file is generally configured as cssPath with Pinegrow Vuetify Plugin
    '~/assets/vuetify/main.scss', // If customizing Vuetify sass variables
    'lite-youtube-embed/src/lite-yt-embed.css',
  ],

  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls: {
          OgImage: ['image', ':image'],
          'v-img': ['src', 'lazySrc', 'srcset', ':src', ':lazySrc', ':srcset'],
          'v-carousel-item': [
            'src',
            'lazySrc',
            'srcset',
            ':src',
            ':lazySrc',
            ':srcset',
          ],
          'v-card': [
            'image',
            'prependAvatar',
            'appendAvatar',
            ':image',
            ':prependAvatar',
            ':appendAvatar',
          ],
        },
      },
    },
  },

  // Vuetify Nuxt module, thanks Joaquín (userquin)
  vuetify: {
    moduleOptions: {
      /* If customizing sass variables of vuetify components */
      /* If enabling this, set experimental.inlineSSRStyles to false */
      // styles: {
      //   configFile: 'assets/vuetify/settings.scss',
      // },
      // includeTransformAssetsUrls: true, // default is true
      ssrClientHints: {
        reloadOnFirstRequest: false,
        prefersColorScheme: true,
        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false,
        },
        viewportSize: true,
      },
      //...
    },

    vuetifyOptions: './vuetify.config.ts', // This file is generally configured as configPath with Pinegrow Vuetify Plugin
  },

  // Required when customizing Vuetify sass variables via configFile with SSR enabled - https://vuetify-nuxt-module.netlify.app/guide/server-side-rendering.html#vuetify-sass-variables
  // experimental: {
  //   inlineSSRStyles: false,
  // },

  image: {
    // sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw', // Not yet supported - https://github.com/nuxt/image/issues/216
    // densities: [1,2], // default
    quality: 80, // can be overridden as NuxtImg prop
    format: ['webp'], // default
    // The screen sizes predefined by `@nuxt/image`:
    // screens: {
    //   xs: 320,
    //   sm: 640,
    //   md: 768,
    //   lg: 1024,
    //   xl: 1280,
    //   xxl: 1536,
    //   '2xl': 1536,
    // },
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 80,
          height: 80,
        },
      },
    },
    domains: ['images.unsplash.com', 'fakestoreapi.com', 'res.cloudinary.com'],
    alias: {
      unsplash: 'https://images.unsplash.com',
    },
  },

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },

  content: {
    markdown: {
      anchorLinks: false,
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: ['noopener'],
            test: (node: any) => /^https?:\/\//.test(node.properties.href),
          },
        ],
      ],
    },
    highlight: {
      theme: 'dracula-soft',
    },
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      'storeToRefs',
      'acceptHMRUpdate',
    ],
  },

  imports: {
    dirs: ['stores'],
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'lite-youtube',
    },
  },

  sourcemap: {
    client: false,
    server: false,
  },

  // Used by all modules in the @nuxtseo/module collection
  // https://nuxtseo.com/nuxt-seo/guides/configuring-modules
  site: {
    url,
    name,
    // description, // Description is dynamically set in HeadAndMeta.vue
    defaultLocale,
    // https://nuxtseo.com/nuxt-seo/guides/setting-an-identity
    identity,
    twitter,
    trailingSlash,
    titleSeparator,
  },
  robots: {
    // https://nuxtseo.com/robots/api/config#blocknonseobots
    blockNonSeoBots: true,
  },
  sitemap: {
    // https://nuxtseo.com/sitemap/guides/i18n#debugging-hreflang
    // Open https://lambent-florentine-6e51ca.netlify.app/sitemap.xml
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '12.5%' },
      { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
      {
        label: 'Change Frequency',
        select: 'sitemap:changefreq',
        width: '12.5%',
      },
      { label: 'Hreflangs', select: 'count(xhtml:link)', width: '12.5%' },
    ],
    // To turn off xls file when viewing sitemap.xml
    // xsl: false,
    // Remove strictNuxtContentPaths if using nuxt-content in documentDriven mode
    strictNuxtContentPaths: true,
  },
  ogImage: {
    // Open https://lambent-florentine-6e51ca.netlify.app/__og_image__
  },
  linkChecker: {
    enabled: false,
    excludeLinks: ['https://twitter.com/vuedesigner'],
    report: {
      html: true,
      markdown: true,
    },
  },

  pinegrow: {
    liveDesigner: {
      iconPreferredCase: 'unocss', // default value (can be removed), nuxt/ui uses the unocss format for icon names
      devtoolsKey: 'devtools', // see plugins/devtools.client.ts
      tailwindcss: {
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        configPath: 'tailwind.config.ts',
        cssPath: '@/assets/css/tailwind.css',
        // themePath: false, // Set to false so that Design Panel is not used
        // restartOnConfigUpdate: true,
        restartOnThemeUpdate: true,
      },
      vuetify: {
        configPath: 'vuetify.config.ts',
        utilities: false,
        themePath: false, // Set to false so that tailwind Design Panel is used instead of Vuetify
        // restartOnConfigUpdate: true,
        restartOnThemeUpdate: true,
      },
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
      //     ),
      //   },
      // ],
    },
  },
})
