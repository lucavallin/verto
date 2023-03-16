import Head from "next/head";

import { RepositoryList } from "../../components/RepositoryList";
import data from "../../generated.json";
import { Repository, Tag, CountableTag } from "../../types";

export default function Language({
  repositories,
  tag,
  languages
}: {
  repositories: Repository[];
  tag: string;
  languages: CountableTag[];
}) {
  const language = languages.find((language: Tag) => language.id == tag);
  const pageTitle = `First Issue | ${language?.display} Language`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <RepositoryList
        repositories={repositories.filter(
          (repository: Repository) => repository.language.id == tag
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
