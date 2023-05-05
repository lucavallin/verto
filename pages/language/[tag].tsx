import Head from "next/head";

import { RepositoryList } from "../../components/RepositoryList";
import { CountableTag, Repository } from "../../types";
import data from "../../generated.json"

export default function Language(
  {repositories, 
    tag, 
    languages} : 
  {
    repositories: Repository[];
    tag: string,
    languages: CountableTag[];
  }
) {

  const language = languages.find((language) => language.id == tag);
  const pageTitle = `First Issue | ${language?.display} Language`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <RepositoryList
        repositories={repositories.filter((repository) => repository.language.id == tag)}
      />
    </>
  );
}

// Indicate which paths should be created on build time
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { tag: 'go'},
      },
      {
        params: { tag: 'java'},
      },
      {
        params: { tag: 'javascript'},
      },
      {
        params: { tag: 'python'},
      },
    ], 
    fallback: false,
  }
}

// Tag: languages id on the endpoint. Repositories and Languages come from _app
export async function getStaticProps(context: any) {
  const { tag } = context.params;
  return {
    props: { repositories: data.repositories, languages: data.languages, topics: data.topics, tag }
  };
}