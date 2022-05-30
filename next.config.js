/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    /**
     * Ver https://www.youtube.com/watch?v=-_XZCUIX284
     * vídeo sobre internacionalización y localización
     * Esta es la documentación oficial https://nextjs.org/docs/advanced-features/i18n-routing
     */
    
    localeDetection: true,
    // These are all the locales you want to support in
    // your application
    locales: ["en", "es", "it"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",

  },
}

module.exports = nextConfig