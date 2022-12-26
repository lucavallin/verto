import { useRouter } from "next/router";

import { RepositoryBox } from "../../components/RepositoryBox";
import { useAppContext } from "../_app";

export default function Language() {
  const { repositories } = useAppContext();

  const router = useRouter();
  const { tag } = router.query;

  return (
    <>
      <main>
        <div className="p-4 w-full">
          {repositories
            .filter((repository) => repository.language.id == tag)
            .map((repository) => (
              <RepositoryBox key={repository.id} repository={repository} />
            ))}
        </div>
      </main>
    </>
  );
}
