import Head from "next/head";

import { RepositoryList } from "../../components/RepositoryList";
import data from "../../generated.json"
import { CountableTag, Repository } from "../../types";

export default function Topic(
  {repositories, 
    tag, 
    topics} : 
  {
    repositories: Repository[];
    tag: string,
    topics: CountableTag[];
  }
) {

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
        )}
      />
    </>
  );
}

// Indicate which paths should be created on build time
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { tag: 'kubernetes'},
      },
      {
        params: { tag: 'hacktoberfest'},
      },
      {
        params: { tag: 'docker'},
      },
      {
        params: { tag: 'cloud-native'},
      },
      {
        params: { tag: 'analytics'},
      },
      {
        params: { tag: 'security'},
      },
      {
        params: { tag: 'devops'},
      },
      {
        params: { tag: 'microservices'},
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
