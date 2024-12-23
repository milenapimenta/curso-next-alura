const { redirect } = require('next/dist/server/api-utils')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
   
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  }
   
  module.exports = {
    trailingSlash: true,
    async redirects() {
      return [
        {
          source: '/perguntas',
          destination: '/faq/',
          permanent: true,
        },
      ]
    },
  }