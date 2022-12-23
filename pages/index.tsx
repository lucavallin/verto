import { RepoBox } from "../components/RepoBox";
import { useAppContext } from "./_app";

export default function Home() {
  const { repositories } = useAppContext();

  return (
    <>
      <main>
        <div className="p-4 w-full">
          {repositories.map((repository) => (
            <RepoBox key={repository.id} repo={repository} />
          ))}
        </div>
      </main>
    </>
  );
}
