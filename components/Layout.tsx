import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div className="flex min-h-screen flex-col bg-black-400 text-silver-500 antialiased">
    <Header />
    <main className="flex flex-1">
      <section className="container mx-auto flex flex-col md:flex-row lg:max-w-6xl">
        <Sidebar />
        {children}
      </section>
    </main>
  </div>
);
