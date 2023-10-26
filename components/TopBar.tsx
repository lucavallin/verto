import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "./SectionTitle";
import { Socials } from "./Socials";

export const TopBar = () => (
  <div className="flex items-center justify-between bg-black-400 px-6 py-3 transition-all hover:border-yellow hover:text-yellow">
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
      <Link
        href="https://chat.collectivai.com/"
        title="collectiv"
        aria-label="collectiv"
        rel="noopener noreferrer"
        className="grayscale hover:grayscale-0"
      >
        <Image src="/sponsors/collectiv.png" alt="collectiv" width={26} height={26} />
      </Link>
    </div>
    <Socials />
  </div>
);
