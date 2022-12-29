/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'unsafe-eval' 'self';
  child-src firstissue.dev;
  style-src 'unsafe-inline' 'self' firstissue.dev;
  font-src 'self';
`

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  headers: async () => {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin'
          },
      //     {
      //       key: 'Content-Security-Policy',
      //       value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
      //     }
        ],
      }
    ]
  }
}

module.exports = nextConfig
