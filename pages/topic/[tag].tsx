import Head from "next/head";
import { useRouter } from "next/router";

import { RepositoryList } from "../../components/RepositoryList";
import { useAppContext } from "../_app";

import data from "../../order.json";

export default function Topic() {
  const { repositories, topics } = useAppContext();

  const router = useRouter();
  const { tag } = router.query;

  const topic = topics.find((topic) => topic.id == tag);
  const pageTitle = `First Issue | Topic ${topic?.display}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <RepositoryList
        repositories={repositories.filter((repository) =>
          repository.topics?.some((topic) => topic.id == tag)
        )} dtOrder={data.date} starOrder={data.star}
      />
    </>
  );
}
