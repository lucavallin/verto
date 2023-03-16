import { Repository } from "../types";

type RepositoryDescriptionProps = {
  repositoryDescription: Repository["description"];
};

export const RepositoryDescription = ({ repositoryDescription }: RepositoryDescriptionProps) => {
  return (
    <div className="flex-row flex text-sm py-1 overflow-auto text-neutral-content">
      {repositoryDescription}
    </div>
  );
};
