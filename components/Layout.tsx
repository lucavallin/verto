import React from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div className="bg-dark-400 flex flex-col min-h-screen antialiased text-light-300">
    <Header />
    <main className="flex flex-1">
      <section className="container max-w-6xl mx-auto flex flex-col md:flex-row">
        <Sidebar />
        {children}
      </section>
    </main>
  </div>
);
