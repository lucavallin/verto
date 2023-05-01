import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

import { RepositoryList } from "../../components/RepositoryList";
import data from "../../generated.json";
import { useAppContext } from "../_app";

interface Params extends ParsedUrlQuery {
  tag: string;
}

type TopicProps = {
  tag: Params["tag"];
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: data.topics.map((topic) => ({
      params: { tag: topic.id }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<TopicProps, Params> = async ({
  params = {} as Params
}) => {
  return {
    props: { tag: params.tag }
  };
};

export default function Topic({ tag }: TopicProps) {
  const { repositories, topics } = useAppContext();

  const topic = topics.find((topic) => topic.id === tag);
  const pageTitle = `First Issue | Topic ${topic?.display}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <RepositoryList
        repositories={repositories.filter((repository) =>
          repository.topics?.some((topic) => topic.id === tag)
        )}
      />
    </>
  );
}
