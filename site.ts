export default {
  name: 'The AI Cafe',
  description: 'Proudly serving the local Fraser Rise community!',
  author: 'Pinegrow',
  url: 'https://lambent-florentine-6e51ca.netlify.app/',
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
    { text: 'About Us', link: '/quick-start', type: 'primary' },
  ],
}
