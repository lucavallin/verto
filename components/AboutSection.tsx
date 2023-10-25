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
        Verto curates accessible issues from popular open-source projects, and helps you make your
        next contribution to open-source.
      </p>
      <div className="pt-6 text-sm">
        <Link className="flex flex-row items-center" target="_blank" href="https://www.lucavall.in">
          <FontAwesomeIcon icon={faHeart} />
          <span className="ml-2">
            A{" "}
            <span
              className="inline text-lg font-bold text-pink transition-all hover:underline"
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
          href={process.env.NEXT_PUBLIC_POLICY_URL || "/"}
        >
          <FontAwesomeIcon icon={faCircleInfo} />
          <span className="ml-2">
            <span className="inline transition-all hover:underline" title="View Privacy Policy">
              Privacy & Cookie Policy
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};
