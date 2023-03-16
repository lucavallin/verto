import Head from "next/head";

import { RepositoryList } from "../../components/RepositoryList";
import data from "../../generated.json";
import { Repository, Tag } from "../../types";

export default function Topic({
  repositories,
  tag,
  topics
}: {
  repositories: Repository[];
  tag: string;
  topics: Tag[];
}) {
  const topic = topics.find((topic: Tag) => topic.id == tag);
  const pageTitle = `First Issue | Topic ${topic?.display}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <RepositoryList
        repositories={repositories.filter((repository: Repository) =>
          repository.topics?.some((topic: Tag) => topic.id == tag)
        )}
      />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { tag } = context.params;
  return {
    props: { repositories: data.repositories, languages: data.languages, topics: data.topics, tag }
  };
}
