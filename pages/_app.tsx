import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import { createContext, useContext } from "react";

import { Layout } from "../components/Layout";
import { repositories, tags } from "../data/generated.json";
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
    <AppContext.Provider value={{ repositories: repositories, tags: tags }}>
      <main className={`${inter.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </AppContext.Provider>
  );
}
