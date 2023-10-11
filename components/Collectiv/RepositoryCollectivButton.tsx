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
           md:m-0  md:rounded-full md:border-transparent md:bg-primary md:px-3"
      target="_blank"
      rel="noopener noreferrer"
    >
      Solve with Collectiv
    </a>
  );
};
