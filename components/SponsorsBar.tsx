import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "./SectionTitle";

export const SponsorsBar = () => (
  <div className="flex items-center justify-between bg-dark-400 px-6 py-3 transition-all hover:border-primary hover:text-primary">
    <div className="flex items-center justify-between gap-5">
      <SectionTitle text="Sponsored by" />
      <Link href="https://lucavall.in" className="grayscale hover:grayscale-0">
        <Image src="/sponsors/lucavallin.png" alt="lucavallin" width={25} height={25} />
      </Link>
    </div>
    <Link
      href={`${process.env.NEXT_PUBLIC_SPONSOR_URL}`}
      className="justify-self-end rounded-sm border px-2 py-1 text-sm text-secondary hover:text-primary"
    >
      Sponsor?
    </Link>
  </div>
);
