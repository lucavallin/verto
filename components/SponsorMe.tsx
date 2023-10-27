/* eslint-disable @next/next/no-sync-scripts */
"use client";

import Image from "next/image";
import Link from "next/link";

const SponsorMe = () => {
  return (
    <Link
      className="fixed bottom-28 right-4 z-50 h-[64px] w-[64px]"
      href="https://github.com/sponsors/lucavallin"
      title="Sponsor me on GitHub"
      aria-label="Sponsor me on GitHub"
      rel="noopener noreferrer"
    >
      <div className="flex h-full w-full content-center items-center justify-center rounded-full border-2 border-white bg-silver-700 text-center shadow-md shadow-white hover:scale-105">
        <div>
          <Image
            src="/images/github-sponsor.gif"
            alt="Sponsor me on GitHub"
            width="40"
            height="40"
          />
        </div>
      </div>
    </Link>
  );
};

export default SponsorMe;
