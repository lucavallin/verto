import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Making your next open-source contribution doesn't have to be hard. Verto is a curated list of accessible issues from popular open-source projects to get you started easily on your next contribution. Start today!"
        />

        <meta property="og:url" content="https://verto.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Verto | Your Gateway to Open-Source Collaboration" />
        <meta
          property="og:description"
          content="Making your next open-source contribution doesn't have to be hard. Verto is a curated list of accessible issues from popular open-source projects to get you started easily on your next contribution. Start today!"
        />
        <meta property="og:image" content="https://verto.dev/meta.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="verto.dev" />
        <meta property="twitter:url" content="https://verto.dev" />
        <meta name="twitter:title" content="Verto | Your Gateway to Open-Source Collaboration" />
        <meta
          name="twitter:description"
          content="Making your next open-source contribution doesn't have to be hard. Verto is a curated list of accessible issues from popular open-source projects to get you started easily on your next contribution. Start today!"
        />
        <meta name="twitter:image" content="https://verto.dev/meta.png" />

        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />

        <script defer data-domain="verto.dev" src="https://plausible.io/js/script.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
