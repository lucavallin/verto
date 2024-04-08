"use client";

import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-black-400 text-silver-500 antialiased">
      <Header />
      <div className="flex flex-1">
        <section className="container mx-auto flex flex-col items-center md:flex-row md:items-start lg:max-w-6xl">
          <Sidebar />
          {children}
        </section>
      </div>
    </div>
  );
}

export { Layout };

//  <div className="flex min-h-screen flex-col bg-black-400 text-silver-500 antialiased">
//       {/* <AppDataProvider> */}
//       <Header />
//       <main className="flex flex-1">
//         <section className="container mx-auto flex flex-col items-center md:flex-row md:items-start lg:max-w-6xl">
//           <Sidebar />
//           {children}
//         </section>
//       </main>
//       {/* </AppDataProvider> */}
//     </div>
