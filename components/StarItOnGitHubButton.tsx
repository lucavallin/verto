import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StarItOnGitHubButton = () => {
  return (
    <div className="pt-6">
      <a
        className="block border border-juniper uppercase rounded-md font-bold text-center px-1 py-3 hover:border-juniper hover:text-juniper"
        href="https://github.com/lucavallin/first-issue"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="mr-2" />
        Star it on GitHub 🌟
      </a>
    </div>
  );
};
