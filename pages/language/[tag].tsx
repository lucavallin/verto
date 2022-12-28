import Head from "next/head";
import { useRouter } from "next/router";

import { RepositoryList } from "../../components/RepositoryList";
import { useAppContext } from "../_app";

export default function Language() {
  const { repositories, languages } = useAppContext();

  const router = useRouter();
  const { tag } = router.query;

  const language = languages.find((language) => language.id == tag);

  return (
    <>
      <Head>
        <title>First Issue | {language?.display} Language</title>
      </Head>
      <RepositoryList
        repositories={repositories.filter((repository) => repository.language.id == tag)}
      />
    </>
  );
}
