import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import { Space_Grotesk } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

import BuyMeACoffee from "../components/BuyMeACoffee";
import { Layout } from "../components/Layout";
import { SponsorsBar } from "../components/SponsorsBar";
import { AppDataProvider } from "../context/AppDataContext";
import "../styles/globals.css";
import NotFound from "./404";

// Fontawesome and TailwindCSS related settings
config.autoAddCss = false;
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk"
});

// Entry point for the app
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const shouldRenderComponents =
    router.pathname === "/" ||
    router.pathname.startsWith("/language/") ||
    router.pathname.startsWith("/tag/");
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppDataProvider>
        <main className={`${space_grotesk.variable} font-sans`}>
          {shouldRenderComponents ? (
            <>
              <SponsorsBar />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </>
          ) : (
            <NotFound />
          )}
        </main>
        <BuyMeACoffee />
      </AppDataProvider>
    </>
  );
}
