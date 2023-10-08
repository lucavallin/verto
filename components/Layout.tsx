import React from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import ScrollToTopButton from "./ScrollToTopButton";
type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div className="flex min-h-screen flex-col bg-dark-400 text-light-300 antialiased">
    <Header />
    <main className="flex flex-1 ">
      <section className="container mx-auto flex max-w-6xl flex-col md:flex-row">
        <Sidebar />
        <ScrollToTopButton/>
        {children}
      </section>
    </main>
  </div>
);
