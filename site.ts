export default {
  title: 'Vue Designer',
  description: 'Vue Designer Nuxt Vuetify Tailwind CSS',
  author: 'Pinegrow',
  url: 'https://pg-nuxt-vuetify-tailwindcss.netlify.app',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Home', link: '/', type: 'primary' },
    { text: 'Menu', link: '/menu', type: 'primary' },
    { text: 'Our Story', link: '/our-story', type: 'primary' },
  ],
}
