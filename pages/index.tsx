import Head from 'next/head'
import RepoBox from '../components/RepoBox'
import repositories from '../data/generated.json'

export default function Home() {
  return (
    <>
      <main>
        <div className="p-4 w-full">
          {/* {repositories.map((repo) => (
            <RepoBox key={repo.id} repo={repo} />
          ))} */}
        </div>
      </main>
    </>
  )
}
