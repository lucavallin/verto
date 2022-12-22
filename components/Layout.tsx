import React from 'react'

import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="bg-ink-400 flex flex-col min-h-screen antialiased text-vanilla-300">
    <Navbar />
    <main className="flex flex-1">
      <section className="container max-w-6xl mx-auto flex flex-col md:flex-row">
        <Sidebar />
        {children}
      </section>
    </main>
  </div>
)
