import { Repository } from "../../types";

type RepositoryDescriptionProps = {
  repositoryDescription: Repository["description"];
};

export const RepositoryDescription = ({ repositoryDescription }: RepositoryDescriptionProps) => {
  return (
    <div className="flex flex-row overflow-auto py-2 text-justify text-gray-700">
      {repositoryDescription}
    </div>
  );
};
