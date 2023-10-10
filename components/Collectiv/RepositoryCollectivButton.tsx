import { useMediaQuery } from "../../hooks/useMediaQuery";
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
  const isMedia720px = useMediaQuery("(max-width : 720px)");

  return (
    <>
      <a
        href={`https://chat.collectivai.com/contribute?repo-name=${ownerAndRepoName}`}
        className={`flex items-center text-sm  font-semibold ${
          isMedia720px
            ? "m-2 justify-center gap-2 rounded-[4px]  border  border-primary px-[8px] py-[6px]"
            : "mx-2 ml-2 gap-1 rounded-full  border-transparent bg-primary px-[14px] text-light-200"
        }`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get help from Collectiv
        <img
          src="/sponsors/arrowback.png"
          alt="link"
          className={`ml-1 h-[11px] w-[11px] ${isMedia720px ? " " : "inline-block"} `}
        />
      </a>
    </>
  );
};
