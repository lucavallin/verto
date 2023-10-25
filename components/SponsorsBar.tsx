import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "./SectionTitle";

export const SponsorsBar = () => (
  <div className="flex items-center justify-between bg-black-400 px-6 py-3 transition-all hover:border-pink hover:text-pink">
    <div className="flex items-center justify-between gap-5">
      <SectionTitle text="Sponsored by" />
      <Link href="https://lucavall.in" className="grayscale hover:grayscale-0">
        <Image src="/sponsors/lucavallin.png" alt="lucavallin" width={25} height={25} />
      </Link>
      <Link href="https://chat.collectivai.com/" className="grayscale hover:grayscale-0">
        <Image src="/sponsors/collectiv.png" alt="collectiv" width={26} height={26} />
      </Link>
    </div>
    <Link
      href={`${process.env.NEXT_PUBLIC_SPONSOR_URL}`}
      className="justify-self-end rounded-sm border border-gray px-2 py-1 text-sm text-gray hover:border-pink hover:text-pink"
    >
      Sponsor?
    </Link>
  </div>
);
