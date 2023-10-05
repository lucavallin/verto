import Head from "next/head";
import { AppDataContext } from "../context/AppDataContext";
import { RepositoryList } from "../components/Repository/RepositoryList";
import { useAppData } from "../hooks/useAppData";

export default function Home() {
  const { repositories, filterRepositoriesByTag } = useAppData();
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
