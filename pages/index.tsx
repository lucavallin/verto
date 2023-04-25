import Head from "next/head";

import { RepositoryList } from "../components/RepositoryList";
import { useAppContext } from "./_app";

import data from "../order.json";

export default function Home() {
  const { repositories } = useAppContext();

  return (
    <>
      <Head>
        <title>First Issue | Issues for your next open-source contribution</title>
      </Head>
      <RepositoryList repositories={repositories} dtOrder={data.date} starOrder={data.star}/>
    </>
  );
}
