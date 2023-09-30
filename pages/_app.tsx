import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

import { Layout } from "../components/Layout";
import { SponsorsBar } from "../components/SponsorsBar";
import { AppDataProvider } from "../context/AppDataContext";
import "../styles/globals.css";

// Fontawesome and TailwindCSS related settings
config.autoAddCss = false;
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

// Entry point for the app
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppDataProvider>
        <main className={`${inter.variable} font-sans`}>
          <SponsorsBar />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </AppDataProvider>
    </>
  );
}
