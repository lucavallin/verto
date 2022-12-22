import React from 'react'

import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'

type LayoutProps = {
  children: React.ReactNode
  className: string
}

export const Layout = ({ children, className }: LayoutProps) => (
  <div
    className={`bg-ink-400 flex flex-col min-h-screen antialiased text-vanilla-300 ${className}`}
  >
    <Navbar tag={{}}></Navbar>
    <main className="flex flex-1">
      <section className="container max-w-6xl mx-auto flex flex-col md:flex-row">
        <Sidebar tags={[]} />
        {children}
      </section>
    </main>
  </div>
)
