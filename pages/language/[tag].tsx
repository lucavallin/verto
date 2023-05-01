import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

import { RepositoryList } from "../../components/RepositoryList";
import data from "../../generated.json";
import { useAppContext } from "../_app";

interface Params extends ParsedUrlQuery {
  tag: string;
}

type LanguageProps = {
  tag: Params["tag"];
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: data.languages.map((language) => ({
      params: { tag: language.id }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<LanguageProps, Params> = async ({
  params = {} as Params
}) => {
  return {
    props: { tag: params.tag }
  };
};

export default function Language({ tag }: LanguageProps) {
  const { repositories, languages } = useAppContext();

  const language = languages.find((language) => language.id === tag);
  const pageTitle = `First Issue | ${language?.display} Language`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <RepositoryList
        repositories={repositories.filter((repository) => repository.language.id === tag)}
      />
    </>
  );
}
