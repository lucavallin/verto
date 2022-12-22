import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>Good First Issue: issues for your first open-source contribution</title>
        <meta
          name="description"
          content="Making your first open-source contribution is easier than you think. Good First Issue is a curated list of issues from popular open-source projects that you can fix easily. Start today!"
        />

        <meta property="og:url" content="https://gfi.cavall.in" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Good First Issue: issues for your first open-source contribution"
        />
        <meta
          property="og:description"
          content="Making your first open-source contribution is easier than you think. Good First Issue is a curated list of issues from popular open-source projects that you can fix easily. Start today!"
        />
        <meta property="og:image" content="https://gfi.cavall.in/meta.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="gfi.cavall.in" />
        <meta property="twitter:url" content="https://gfi.cavall.in" />
        <meta
          name="twitter:title"
          content="Good First Issue: issues for your first open-source contribution"
        />
        <meta
          name="twitter:description"
          content="Making your first open-source contribution is easier than you think. Good First Issue is a curated list of issues from popular open-source projects that you can fix easily. Start today!"
        />
        <meta name="twitter:image" content="https://gfi.cavall.in/meta.jpg" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
