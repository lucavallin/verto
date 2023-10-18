import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "../components/Layout";
import { SponsorsBar } from "../components/SponsorsBar";
import { AppDataProvider } from "../context/AppDataContext";
import NotFound from "./404";
import "../styles/globals.css";
import BuyMeACoffee from "../components/BuyMeACoffee";

// Fontawesome and TailwindCSS related settings
config.autoAddCss = false;
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

// Entry point for the app
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const shouldRenderComponents = router.pathname === "/" || router.pathname.startsWith('/language/') || router.pathname.startsWith('/tag/');
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppDataProvider>
        <main className={`${inter.variable} font-sans`}>
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
