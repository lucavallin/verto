import Head from "next/head";
import { useRouter } from "next/router";

import { RepositoryList } from "../../components/RepositoryList";
import { useAppContext } from "../_app";

import data from "../../order.json";

export default function Language() {
  const { repositories, languages } = useAppContext();

  const router = useRouter();
  const { tag } = router.query;

  const language = languages.find((language) => language.id == tag);
  const pageTitle = `First Issue | ${language?.display} Language`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <RepositoryList
        repositories={repositories.filter((repository) => repository.language.id == tag)} dtOrder={data.date} starOrder={data.star}
      />
    </>
  );
}
