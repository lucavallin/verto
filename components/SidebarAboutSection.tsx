import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ByLine = () => (
  <div className="text-sm pt-6">
    <FontAwesomeIcon icon={faHeart} />
    <span className="ml-2">
      A{" "}
      <a
        className="flex flex-row items-center"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/lucavallin"
      >
      <span className="inline hover:underline text-juniper" title="Visit GitHub profile">
        @lucavallin
      </span></a>{" "}
      & contributors initiative. Special thanks to <a
        className="flex flex-row items-center"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/chidame"
      ><span className="inline hover:underline text-juniper" title="Visit GitHub profile">
        @chidame
      </span></a> for for UI/UX improvements, product management tips and help with the community.
    </span>
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
