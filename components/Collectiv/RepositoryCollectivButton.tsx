import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Repository } from "../../types";

type RepositoryCollectivButtonProps = {
  repositoryName: Repository["name"];
  repositoryOwner: Repository["owner"];
};
export const RepositoryCollectivButton = ({
  repositoryName,
  repositoryOwner
}: RepositoryCollectivButtonProps) => {
  const ownerAndRepoName = repositoryOwner + "/" + repositoryName;

  return (
    <a
      href={`https://chat.collectivai.com/contribute?repo-name=${ownerAndRepoName}`}
      className="m-2 flex items-center  justify-center
           gap-2  rounded-lg border border-primary p-2 text-sm font-semibold
          md:m-0 md:mx-2 md:gap-1 md:rounded-full  md:border-transparent md:bg-primary md:px-[14px] md:text-light-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      Get help from Collectiv
      <FontAwesomeIcon icon={faArrowRight} className="ml-1  h-3 w-3" />
    </a>
  );
};
