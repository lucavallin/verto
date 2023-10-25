import Link from "next/link";
import { Repository } from "../../types";

type CollectivButtonProps = {
  repositoryName: Repository["name"];
  repositoryOwner: Repository["owner"];
  repositoryUrl: Repository["url"];
};
export const CollectivButton = ({
  repositoryName,
  repositoryOwner,
  repositoryUrl
}: CollectivButtonProps) => {
  const ownerAndRepoName = repositoryOwner + "/" + repositoryName;
  const isGitLabRepo = repositoryUrl.includes("gitlab.com");

  return (
    <Link
      href={
        isGitLabRepo
          ? `https://chat.collectivai.com/contribute?repo-name=${ownerAndRepoName}&gitLab=true`
          : `https://chat.collectivai.com/contribute?repo-name=${ownerAndRepoName}`
      }
      className="m-2 flex items-center justify-center
           gap-2 rounded-lg border border-yellow p-2 text-sm font-semibold
           hover:bg-yellow hover:text-black xl:m-0 xl:ml-2 xl:rounded-full xl:px-3"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open Collectiv
    </Link>
  );
};
