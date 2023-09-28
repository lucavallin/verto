import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubButton from "react-github-btn";

const ByLine = () => (
  <div className="text-sm pt-6">
    <a
      className="flex flex-row items-center"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/lucavallin"
    >
      <FontAwesomeIcon icon={faHeart} />
      <span className="ml-2">
        A{" "}
        <span className="inline hover:underline text-juniper" title="Visit GitHub profile">
          @lucavallin
        </span>{" "}
        & contributors initiative
      </span>
    </a>
    <br />
    <GitHubButton
      href="https://github.com/lucavallin/first-issue"
      data-color-scheme="no-preference: light; light: light; dark: dark;"
      data-size="large"
      data-show-count="true"
      aria-label="Star lucavallin/first-issue on GitHub"
    >
      View it on GitHub
    </GitHubButton>
  </div>
);

export const SidebarAboutSection = () => {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-slate">About</h3>
      <p className="text-sm">
        First Issue curates accessible issues from popular open-source projects, and helps you make
        your next contribution to open-source.
      </p>
      <ByLine />
    </div>
  );
};
