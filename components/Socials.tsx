import { faGithub, faLinkedin, faMastodon, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import config from "../app/config.mts";

export const Socials = () => {
  return (
    <div className="space-x-3 text-silver">
      <Link
        href={config.author.github}
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="xl" />
      </Link>
      <Link
        href={config.author.linkedin}
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="xl" />
      </Link>
      <Link
        href={config.author.xtwitter}
        aria-label="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faXTwitter} size="xl" />
      </Link>
      <Link
        href={config.author.mastodon}
        aria-label="Mastodon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faMastodon} size="xl" />
      </Link>
    </div>
  );
};
