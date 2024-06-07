import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "./SectionTitle";
import { Socials } from "./Socials";

export const TopBar = () => (
  <div className="flex h-16 items-center justify-between bg-black-400 px-6 py-3 transition-all hover:border-primary hover:text-primary">
    <div className="flex items-center justify-between gap-5">
      <SectionTitle text="Sponsored by" />
      <Link
        href="https://lucavall.in"
        title="lucavallin"
        aria-label="lucavallin"
        rel="noopener noreferrer"
        className="grayscale hover:grayscale-0"
      >
        <Image src="/sponsors/lucavallin.png" alt="lucavallin" width={25} height={25} />
      </Link>
    </div>
    <div className="flex items-center gap-7">
      <Socials />
    </div>
  </div>
);
