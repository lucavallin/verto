import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppData } from "../hooks/useAppData";

type TagType = string;

const getActiveTagOrLanguage = (tag: TagType, language: string, languages: any[], tags: any[]) => {
  return [...languages, ...tags].find((t) => t.id === tag || t.id === language);
};

export const Header = () => {
  const router = useRouter();
  const { tag, language } = router.query as { tag: TagType, language: string };
  const { languages, tags } = useAppData();
  const activeTagOrLanguage = getActiveTagOrLanguage(tag, language, languages, tags);

  return (
    <header className="container mx-auto my-5 flex flex-col items-center bg-dark-400 p-6 md:my-10 md:flex-row md:justify-between lg:max-w-6xl">
      <nav className="flex flex-wrap items-center md:justify-center">
        <Link href="/">
          <Image src="/firstissue.png" alt="First Issue" className="h-12" width={290} height={51} />
        </Link>
        {activeTagOrLanguage ? (
          <span className="cursor-pointer pt-3 text-2xl">
            <span className="mx-3 font-normal text-secondary">/</span>
            <span className="font-semibold text-primary">{activeTagOrLanguage?.display}</span>
          </span>
        ) : null}
      </nav>
    </header>
  );
};
