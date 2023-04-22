import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { RepositoryList } from "../../components/RepositoryList";
import { useAppContext } from "../_app";

type TopicProps = {
  tag: string | undefined;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<TopicProps> = async ({ params = {} }) => {
  const { tag } = params;

  return {
    props: { tag: Array.isArray(tag) ? tag[0] : tag }
  };
};

export default function Topic({ tag }: TopicProps) {
  const { repositories, topics } = useAppContext();

  const topic = topics.find((topic) => topic.id === tag);
  const pageTitle = `First Issue | Topic ${topic?.display ?? ""}`;

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
