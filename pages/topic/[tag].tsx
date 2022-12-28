import Head from "next/head";
import { useRouter } from "next/router";

import { RepositoryList } from "../../components/RepositoryList";
import { useAppContext } from "../_app";

export default function Topic() {
  const { repositories, topics } = useAppContext();

  const router = useRouter();
  const { tag } = router.query;

  const topic = topics.find((topic) => topic.id == tag);

  return (
    <>
      <Head>
        <title>First Issue | Topic {topic?.display}</title>
      </Head>
      <RepositoryList
        repositories={repositories.filter((repository) =>
          repository.topics?.some((topic) => topic.id == tag)
        )}
      />
    </>
  );
}
