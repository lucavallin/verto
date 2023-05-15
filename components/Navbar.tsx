import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { useAppData } from "../hooks/useAppData";
import { Tag } from "../types";

export const Navbar = () => {
  const router = useRouter();
  const { tag: path } = router.query;
  const { languages, topics } = useAppData();
  const tag = [...languages, ...topics].find((tag: Tag) => tag.id === path);

  return (
    <header className="container max-w-6xl mx-auto flex flex-col md:flex-row my-5 md:my-10 p-6 bg-ink-400">
      <nav className="flex items-center md:justify-center flex-wrap">
        <Link href="/">
          <Image src="/firstissue.png" alt="First Issue" className="h-12" width={290} height={51} />
        </Link>
        {path && tag ? (
          <span className="text-2xl pt-3 cursor-pointer">
            <span className="font-normal mx-3 text-slate">/</span>
            <span className="font-semibold text-juniper">{tag?.display}</span>
          </span>
        ) : null}
      </nav>
    </header>
  );
};
