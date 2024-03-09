"use client";
import Image from "next/image";
import Link from "next/link";

import { useRepositoryQuery } from "store";

function Header() {
  const {
    query: { languages, tags }
  } = useRepositoryQuery();

  return (
    <header className="container mx-auto my-5 flex flex-col items-center bg-black-400 p-6 md:my-10 md:flex-row md:justify-between lg:max-w-6xl">
      <nav className="flex flex-wrap items-center gap-4 md:justify-start">
        <Link href="/" title="Home" aria-label="Home">
          <Image src="/verto.png" alt="verto.sh" className="h-12" width={320} height={52} />
        </Link>
        {[...languages, ...tags].map((el) => {
          return (
            <span key={el} className="cursor-pointer text-4xl font-semibold text-gray">
              {el}
            </span>
          );
        })}
      </nav>
    </header>
  );
}

export { Header };
