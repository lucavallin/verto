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
      className="ml-2 rounded-full border border-transparent bg-primary px-3 py-1 
           text-sm font-semibold text-light-200 md:inline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Get help from Collectiv
      <img
        src="/sponsors/arrowback.png"
        alt="link"
        className="ml-1 inline-block h-[11px] w-[11px]"
      />
    </a>
  );
};
