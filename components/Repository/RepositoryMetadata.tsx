import { Repository } from "../../types";

type RepositoryMetadataProps = {
  lastModified: Repository["last_modified"];
  repositoryLang: Repository["language"]["display"];
  repositoryStars: Repository["stars_display"];
};

export const RepositoryMetadata = ({
  lastModified,
  repositoryLang,
  repositoryStars
}: RepositoryMetadataProps) => {
  return (
    <div className="flex flex-row py-1 font-mono text-sm lg:gap-4">
      <div className="mr-4">
        <span className="text-pink">lang: </span>
        {repositoryLang}
      </div>
      <div className="mr-4">
        <span className="text-pink">stars: </span>
        {repositoryStars}
      </div>
      <div className="mr-4">
        <span className="text-pink">last activity: </span>
        <span>{lastModified}</span>
      </div>
    </div>
  );
};
