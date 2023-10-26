import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo, faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { SectionTitle } from "./SectionTitle";

export const AboutSection = () => {
  return (
    <div>
      <SectionTitle className="mb-2" text="About" />
      <h1 className="hidden text-lg font-bold">verto.sh</h1>
      <p className="text-silver-500">
        <strong>verto.sh</strong> simplifies your entry into the open-source world by curating
        accessible projects. Ideal for beginners making their first contribution, founders building
        teams, and maintainers seeking new contributors.
      </p>
      <h2 className="mt-2">Your Gateway to Open-Source Collaboration!</h2>
      <div className="pt-6 text-sm">
        <Link
          className="flex flex-row items-center"
          title="@lucavallin"
          aria-label="@lucavallin"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.lucavall.in"
        >
          <FontAwesomeIcon icon={faHeart} />
          <span className="ml-2">
            A{" "}
            <span
              className="inline font-bold text-yellow transition-all hover:underline"
              title="Visit GitHub profile"
            >
              @lucavallin
            </span>{" "}
            & contributors initiative
          </span>
        </Link>
        <Link
          className="flex flex-row items-center"
          title="Chiara Dametto on LinkedIn"
          aria-label="@chidame"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/chiara-dametto"
        >
          <FontAwesomeIcon icon={faPaintRoller} />
          <span className="ml-2">
            UI/UX Design by{" "}
            <span className="inline font-bold text-yellow transition-all hover:underline">
              Chiara Dametto
            </span>{" "}
          </span>
        </Link>
        <Link
          className="flex cursor-pointer flex-row items-center text-silver-500"
          target="_blank"
          rel="noopener noreferrer"
          title="View Privacy Policy"
          aria-label="View Privacy Policy"
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
