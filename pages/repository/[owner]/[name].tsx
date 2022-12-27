import { useRouter } from "next/router";

import { RepositoryBox } from "../../../components/RepositoryBox";
import { useAppContext } from "../../_app";

export default function Language() {
  const { repositories } = useAppContext();

  const router = useRouter();
  const { owner, name } = router.query;
  const repository = repositories.find(
    (repository) => repository.owner == owner && repository.name == name
  );

  return (
    repository && (
      <>
        <main>
          <div className="p-4 w-full">
            <RepositoryBox key={repository.id} repository={repository} />
          </div>
        </main>
      </>
    )
  );
}
