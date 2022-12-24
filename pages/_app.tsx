import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createContext, useContext } from "react";

import { Layout } from "../components/Layout";
import data from "../generated.json";
import "../styles/globals.css";
import { AppData } from "../types";

// Fontawesome and TailwindCSS related settings
config.autoAddCss = false;
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

// Context for sharing repositories and tags data across components
const AppContext = createContext<AppData>({ repositories: [], tags: [] });
export const useAppContext = () => useContext(AppContext);

// Entry point for the app
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>First Issue: issues for your first open-source contribution</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppContext.Provider value={{ repositories: data.repositories, tags: data.tags }}>
        <main className={`${inter.variable} font-sans`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </AppContext.Provider>
    </>
  );
}
