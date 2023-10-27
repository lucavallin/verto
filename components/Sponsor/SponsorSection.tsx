import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { SectionTitle } from "../SectionTitle";

export const SponsorSection = () => {
  return (
    <div className="pt-6">
      <SectionTitle text="This month's sponsor" />
      <p className="py-2 text-sm text-silver-500">
        Use{" "}
        <Link
          href="https://chat.collectivai.com/hacktober-fest"
          target="_blank"
          rel="noopener noreferrer"
          title="collectiv"
          aria-label="collectiv"
        >
          <span className="font-bold text-yellow transition-all hover:underline">
            Collectiv
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              className="mx-1 inline-block h-[12px] w-[12px]"
            />{" "}
          </span>{" "}
        </Link>
        to solve Hacktoberfest issues and win a T-Shirt & other exciting merch!
      </p>
      <Link
        href="mailto:sponsor@verto.sh?subject=verto.sh%20Sponsorship&body=Hi%2C%20I%27m%20interested%20in%20sponsoring%verto.sh%21"
        className="text-yellow"
        title="Your name and logo here?"
        aria-label="Your name and logo here?"
      >
        {" "}
        Your name and logo here?
      </Link>
    </div>
  );
};
