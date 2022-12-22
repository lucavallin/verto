import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Layout } from '../components/Layout'
import '../styles/globals.css'
import { createContext, useContext } from 'react'
import { Repository, Tag } from '../types'

import repositories from '../data/generated.json'
import tags from '../data/tags.json'

// Fontawesome and TailwindCSS related settings
config.autoAddCss = false
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

// Context for sharing repositories and tags data across components
const AppContext = createContext<{
  repos: Repository[]
  tags: Tag[]
}>({ repos: [], tags: [] })
export const useAppContext = () => useContext(AppContext)

// Entry point for the app
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext.Provider value={{ repos: repositories, tags: tags }}>
      <main className={`${inter.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </AppContext.Provider>
  )
}
