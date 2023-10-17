import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GITHUB_PROFILE_URL = "https://github.com/lucavallin";
const PRIVACY_POLICY_URL = process.env.NEXT_PUBLIC_POLICY_URL;

const ByLine = () => (
  <div className="pt-6 text-sm">
    <a className="flex flex-row items-center" target="_blank" href="https://lucavall.in">
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
    </a>
    <a
      className="flex cursor-pointer flex-row items-center text-secondary"
      target="_blank"
      href={process.env.NEXT_PUBLIC_POLICY_URL}
    >
      <FontAwesomeIcon icon={faCircleInfo} aria-label="Privacy and Cookie Policy" />
      <span className="ml-2">
        <span className="inline transition-all hover:underline" title="View Privacy Policy">
          Privacy & Cookie Policy
        </span>
      </span>
    </a>
  </div>
);

export const AboutSection = () => {
  return (
    <div>
      <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-secondary">About</h3>
      <p className="text-sm">
        First Issue curates accessible issues from popular open-source projects and helps you make
        your next contribution to open source.
      </p>
      <ByLine />
    </div>
  );
};
