import Image from "next/image";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useAppData } from "../hooks/useAppData";
import { Tag } from "../types";

export const Header = () => {
  const search = useSearchParams();
  const tag = search.get("tag");
  const language = search.get("language");
  const { languages, tags } = useAppData();
  const activeTagOrLanguage = [...languages, ...tags].find(
    (t: Tag) => t.id === tag || t.id === language
  );

  return (
    <header className="container mx-auto my-5 flex flex-col items-center bg-black-400 p-6 md:my-10 md:flex-row md:justify-between lg:max-w-6xl">
      <nav className="flex flex-wrap items-center md:justify-center">
        <Link href="/">
          <Image src="/verto.png" alt="Verto" className="h-12" width={290} height={51} />
        </Link>
        {activeTagOrLanguage ? (
          <span className="ml-8 cursor-pointer pt-4 text-4xl font-semibold text-gray">
            {activeTagOrLanguage?.display}
          </span>
        ) : null}
      </nav>
    </header>
  );
};
