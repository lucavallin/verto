import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

import { RepositoryList } from "../../../components/Repository/RepositoryList";
import data from "../../../data/data.json";
import { useAppData } from "../../../hooks/useAppData";

interface Params extends ParsedUrlQuery {
  tag: string;
}

type TagProps = {
  tag: Params["tag"];
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: data.tags.map((tag) => ({
      params: { tag: tag.id }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<TagProps, Params> = async ({
  params = {} as Params
}) => {
  return {
    props: { tag: params.tag }
  };
};

export default function Tag({ tag }: TagProps) {
  const { tags } = useAppData();

  const activeTag = tags.find((t) => t.id === tag);
  const pageTitle = `Verto | Tag ${activeTag?.display}`;
  const { filterRepositoriesByTag } = useAppData();
  const filteredRepositories = filterRepositoriesByTag(tag);

  // ...

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <RepositoryList repositories={filteredRepositories} />
    </>
  );
}
