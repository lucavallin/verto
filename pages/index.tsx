import Head from "next/head";
import { RepositoryList } from "../components/Repository/RepositoryList";
import { useAppData } from "../hooks/useAppData";

export default function Home() {
  const {filterRepositoriesByTag } = useAppData();
  const filteredRepositories = filterRepositoriesByTag("your-tag-here");

  return (
    <>
      <Head>
        <title>First Issue | Issues for your next open-source contribution</title>
      </Head>
      <RepositoryList repositories={filteredRepositories} />
    </>
  );
}
