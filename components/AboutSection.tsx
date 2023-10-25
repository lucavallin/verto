import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { SectionTitle } from "./SectionTitle";

export const AboutSection = () => {
  return (
    <div>
      <SectionTitle className="mb-2" text="About" />
      <p className="text-silver-500">
        <h1 className="inline text-lg font-bold">verto.sh</h1> simplifies your entry into the
        open-source world by curating accessible projects. Ideal for beginners making their first
        contribution, founders building teams, and maintainers seeking new contributors.
        <h2 className="mt-2">Your Gateway to Open-Source Collaboration!</h2>
      </p>
      <div className="pt-6 text-sm">
        <Link className="flex flex-row items-center" target="_blank" href="https://www.lucavall.in">
          <FontAwesomeIcon icon={faHeart} />
          <span className="ml-2">
            A{" "}
            <span
              className="inline text-lg font-bold text-yellow transition-all hover:underline"
              title="Visit GitHub profile"
            >
              @lucavallin
            </span>{" "}
            & contributors initiative
          </span>
        </Link>
        <Link
          className="flex cursor-pointer flex-row items-center text-silver-500"
          target="_blank"
          href="https://www.privacyboard.co/company/lucavallin"
        >
          <FontAwesomeIcon icon={faCircleInfo} />
          <span className="ml-2">
            <span
              className="inline text-silver-200/80 transition-all hover:underline"
              title="View Privacy Policy"
            >
              Privacy & Cookie Policy
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};
