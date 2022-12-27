import { useRouter } from "next/router";

import { RepositoryList } from "../../components/RepositoryList";
import { useAppContext } from "../_app";

export default function Language() {
  const { repositories } = useAppContext();

  const router = useRouter();
  const { tag } = router.query;

  // show repositories that have the tag in either title, description, language or topics or issues
  return (
    <RepositoryList
      repositories={repositories.filter((repository) => repository.language.id == tag)}
    />
  );
}
