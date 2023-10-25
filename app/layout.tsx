import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import React from "react";

import BuyMeACoffee from "../components/BuyMeACoffee";
import { Layout } from "../components/Layout";
import { SponsorsBar } from "../components/SponsorsBar";
import "../styles/globals.css";
import config from "./config.mts";

// Fontawesome and TailwindCSS related settings
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  metadataBase: new URL(config.meta.siteUrl),
  title: {
    default: config.meta.title,
    template: `%s | ${config.meta.title}`
  },
  description: config.meta.seoDescription,
  openGraph: {
    title: config.meta.title,
    description: config.meta.description,
    url: "./",
    siteName: config.meta.title,
    images: [config.meta.socialBanner],
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: "./"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  twitter: {
    title: config.meta.title,
    card: "summary_large_image",
    images: [config.meta.socialBanner]
  },
  creator: config.author.name,
  publisher: config.author.name,
  authors: [
    {
      name: "Luca Cavallin",
      url: config.meta.siteUrl
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <title>Verto | Issues for your next open-source contribution</title>
      </head>
      <body>
        <main className={`${space_grotesk.variable} font-sans`}>
          <SponsorsBar />
          <Layout>{children}</Layout>
        </main>
        <BuyMeACoffee />
      </body>
    </html>
  );
}
