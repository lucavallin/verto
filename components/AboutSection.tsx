import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import config from "../app/config.mts";
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
          className="flex flex-row items-center text-base"
          title="@lucavallin"
          aria-label="A @lucavallin & contributors initiative"
          rel="noopener noreferrer"
          target="_blank"
          href={config.author.website}
        >
          <FontAwesomeIcon icon={faHeart} />
          <span className="ml-2">
            A{" "}
            <span
              className="inline font-bold text-primary transition-all hover:underline"
              title="Visit GitHub profile"
            >
              @lucavallin
            </span>{" "}
            & contributors initiative
          </span>
        </Link>
      </div>
    </div>
  );
};
