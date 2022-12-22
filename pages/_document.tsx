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
        <meta
          name="keywords"
          content="good first issue, open source, github, beginner, pull requests, help wanted"
        />
        <meta
          name="og:title"
          content="Good First Issue: issues for your first open-source contribution"
        />
        <meta
          name="og:description"
          content="Making your first open-source contribution is easier than you think. Good First Issue is a curated list of issues from popular open-source projects that you can fix easily. Start today!"
        />
        <meta name="og:image" content="/public/meta.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
