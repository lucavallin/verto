import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { useAppData } from "../hooks/useAppData";
import { Tag } from "../types";

export const Header = () => {
  const router = useRouter();
  const { tag: path } = router.query;
  const { languages, tags } = useAppData();
  const tag = [...languages, ...tags].find((tag: Tag) => tag.id === path);

  return (
    <header className="container max-w-6xl mx-auto flex flex-col md:flex-row my-5 md:my-10 p-6 bg-dark-400 items-center md:justify-between">
      <nav className="flex items-center md:justify-center flex-wrap">
        <Link href="/">
          <Image src="/firstissue.png" alt="First Issue" className="h-12" width={290} height={51} />
        </Link>
        {path && tag ? (
          <span className="text-2xl pt-3 cursor-pointer">
            <span className="font-normal mx-3 text-secondary">/</span>
            <span className="font-semibold text-primary">{tag?.display}</span>
          </span>
        ) : null}
      </nav>
    </header>
  );
};
