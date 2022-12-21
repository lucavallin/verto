import React, { Component } from "react"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import { Inter } from '@next/font/google'

// this must be moved to _app.tsx
const inter = Inter()

export default class MyReactCompoennt extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="bg-ink-400 flex flex-col min-h-screen antialiased text-vanilla-300">
        <Navbar tag="tag"></Navbar>
        <main className={`flex flex-1 ${inter.className}`}>
          <section className="container max-w-6xl mx-auto flex flex-col md:flex-row">
            <Sidebar></Sidebar>
            {this.props.children}
          </section>
        </main>
      </div>
    )
  }
}
