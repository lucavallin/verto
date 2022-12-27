import { RepositoryList } from "../components/RepositoryList";
import { useAppContext } from "./_app";

export default function Home() {
  const { repositories } = useAppContext();

  return <RepositoryList repositories={repositories} />;
}
