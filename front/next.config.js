module.exports = {
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
  },
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io'],
  },
  i18n: {
    locales: ['br', 'en'],
    defaultLocale: 'en',
    localeDetection: false,

  }
}