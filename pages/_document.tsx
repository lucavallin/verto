import { Head, Html, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Making your first open-source contribution is easier than you think. First Issue is a curated list of issues from popular open-source projects that you can fix easily. Start today!"
        />

        <meta property="og:url" content="https://firstissue.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="First Issue: issues for your first open-source contribution"
        />
        <meta
          property="og:description"
          content="Making your first open-source contribution is easier than you think. First Issue is a curated list of issues from popular open-source projects that you can fix easily. Start today!"
        />
        <meta property="og:image" content="https://firstissue.dev/meta.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="firstissue.dev" />
        <meta property="twitter:url" content="https://firstissue.dev" />
        <meta
          name="twitter:title"
          content="First Issue: issues for your first open-source contribution"
        />
        <meta
          name="twitter:description"
          content="Making your first open-source contribution is easier than you think. First Issue is a curated list of issues from popular open-source projects that you can fix easily. Start today!"
        />
        <meta name="twitter:image" content="https://firstissue.dev/meta.png" />

        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <GoogleAnalytics gaMeasurementId="G-KV9HDNBZ1L" trackPageViews />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
