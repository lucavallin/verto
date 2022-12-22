import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Layout } from '../components/Layout'
import '../styles/globals.css'

config.autoAddCss = false
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
