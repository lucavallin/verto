import { RepoBox } from '../components/RepoBox'
import repositories from '../data/generated.json'

export default function Home() {
  const repo = repositories[0]
  return (
    <>
      <main>
        <div className="p-4 w-full">
          <RepoBox key={repo.id} repo={repo} />
        </div>
        {/* {repositories.map((repo) => (
          <RepoBox key={repo.id} repo={repo} />
        ))} */}
      </main>
    </>
  )
}
