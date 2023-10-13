import { Repository } from "../../types";

type RepositoryDescriptionProps = {
  repositoryDescription: Repository["description"];
};

export const RepositoryDescription = ({ repositoryDescription }: RepositoryDescriptionProps) => {
  return (
    <div className="text-neutral-content text-justify flex flex-row overflow-auto py-1 text-sm ">
      {repositoryDescription}
    </div>
  );
};
