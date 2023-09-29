import { Repository } from "../../types";

type RepositoryMetadataProps = {
  isIssueOpen: boolean;
  lastModified: Repository["last_modified"];
  repositoryLang: Repository["language"]["display"];
  repositoryStars: Repository["stars_display"];
};

export const RepositoryMetadata = ({
  isIssueOpen,
  lastModified,
  repositoryLang,
  repositoryStars
}: RepositoryMetadataProps) => {
  return (
    <div
      className={`flex flex-row py-1 font-mono text-sm ${isIssueOpen ? "font-bold" : "font-light"}`}
    >
      <div className="mr-4">
        <span className="text-green-600">lang: </span>
        {repositoryLang}
      </div>
      <div className="mr-4">
        <span className="text-blue-600">stars: </span>
        {repositoryStars}
      </div>
      <div className="mr-4">
        <span className="text-red-600">last activity: </span>
        <span>{lastModified}</span>
      </div>
    </div>
  );
};
