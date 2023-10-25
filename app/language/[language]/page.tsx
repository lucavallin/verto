import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

import { RepositoryList } from "../../../components/Repository/RepositoryList";
import data from "../../../data/data.json";
import { useAppData } from "../../../hooks/useAppData";

interface Params extends ParsedUrlQuery {
  language: string;
}

type LanguageProps = {
  language: Params["language"];
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: data.languages.map((language) => ({
      params: { language: language.id }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<LanguageProps, Params> = async ({
  params = {} as Params
}) => {
  return {
    props: { language: params.language }
  };
};

export default function Language({ language }: LanguageProps) {
  const { repositories, languages } = useAppData();

  const activeLanguage = languages.find((l) => l.id === language);
  const pageTitle = `Verto | ${activeLanguage?.display} Language`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <RepositoryList
        repositories={repositories.filter((repository) => repository.language.id === language)}
      />
    </>
  );
}
