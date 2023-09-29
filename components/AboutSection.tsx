import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ByLine = () => (
  <div className="text-sm pt-6">
    <a className="flex flex-row items-center" target="_blank" href="https://cavall.in">
      <FontAwesomeIcon icon={faHeart} />
      <span className="ml-2">
        A{" "}
        <span
          className="inline transition-all hover:underline text-primary font-bold"
          title="Visit GitHub profile"
        >
          @lucavallin
        </span>{" "}
        & contributors initiative
      </span>
    </a>
    <a
      className="flex flex-row items-center text-secondary cursor-pointer"
      target="_blank"
      href={process.env.NEXT_PUBLIC_POLICIES_URL}
    >
      <FontAwesomeIcon icon={faCircleInfo} />
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
      <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-secondary">About</h3>
      <p className="text-sm">
        First Issue curates accessible issues from popular open-source projects, and helps you make
        your next contribution to open-source.
      </p>
      <ByLine />
    </div>
  );
};
