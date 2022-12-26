import { RepositoryBox } from "../components/RepositoryBox";
import { useAppContext } from "./_app";

export default function Home() {
  const { repositories } = useAppContext();

  return (
    <>
      <main>
        <div className="p-4 w-full">
          {repositories.map((repository) => (
            <RepositoryBox key={repository.id} repository={repository} />
          ))}
        </div>
      </main>
    </>
  );
}
