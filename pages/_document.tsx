import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Making your next open-source contribution doesn't have to be hard. First Issue is a curated list of accessible issues from popular open-source projects to get you started easily on your next contribution. Start today!"
        />

        <meta property="og:url" content="https://firstissue.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="First Issue | Issues for your next open-source contribution."
        />
        <meta
          property="og:description"
          content="Making your next open-source contribution doesn't have to be hard. First Issue is a curated list of accessible issues from popular open-source projects to get you started easily on your next contribution. Start today!"
        />
        <meta property="og:image" content="https://firstissue.dev/meta.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="firstissue.dev" />
        <meta property="twitter:url" content="https://firstissue.dev" />
        <meta
          name="twitter:title"
          content="First Issue | Issues for your next open-source contribution."
        />
        <meta
          name="twitter:description"
          content="Making your next open-source contribution doesn't have to be hard. First Issue is a curated list of accessible issues from popular open-source projects to get you started easily on your next contribution. Start today!"
        />
        <meta name="twitter:image" content="https://firstissue.dev/meta.png" />

        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.NEXT_PUBLIC_GA_TRACKING_ID});
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
