import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { useAppContext } from "../pages/_app";
import { Tag } from "../types";

export const Navbar = () => {
  const router = useRouter();
  const { tag: path } = router.query;
  const { tags } = useAppContext();
  const tag = tags.find((tag: Tag) => tag.id === path);

  return (
    <header className="w-full py-4 border-b border-ink-200 bg-ink-400">
      <nav className="flex items-center justify-center flex-wrap">
        <Link href="/" className="flex items-center text-gray-700 font-bold">
          <Image src="/gfi.png" alt="Good First Issue" className="h-12" width={355} height={51} />
        </Link>
        {path ? (
          <span className="text-2xl cursor-pointer">
            <span className="font-normal ml-2 mr-1 text-slate">/</span>
            <span className="font-semibold text-juniper">{tag.display}</span>
          </span>
        ) : null}
      </nav>
    </header>
  );
};
