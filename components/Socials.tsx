import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import config from "../app/config.mts";

export const Socials = () => {
  return (
    <div className="space-x-3 text-silver">
      <Link
        href={config.author.github}
        title="GitHub"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="xl" />
      </Link>
      <Link
        href={config.author.linkedin}
        title="LinkedIn"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="xl" />
      </Link>
    </div>
  );
};
