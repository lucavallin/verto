import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { RepositoryList } from "../../components/RepositoryList";
import { useAppContext } from "../_app";

type LanguageProps = {
  tag: string | undefined;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<LanguageProps> = async ({ params = {} }) => {
  const { tag } = params;

  return {
    props: { tag: Array.isArray(tag) ? tag[0] : tag }
  };
};

export default function Language({ tag }: LanguageProps) {
  const { repositories, languages } = useAppContext();

  const language = languages.find((language) => language.id === tag);
  const pageTitle = `First Issue | ${language?.display ?? ""} Language`;

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
