import { RepoBox } from '../components/RepoBox'
import { useAppContext } from './_app'

export default function Home() {
  const { repos } = useAppContext()

  return (
    <>
      <main>
        <div className="p-4 w-full">
          {repos.map((r) => (
            <RepoBox key={r.id} repo={r} />
          ))}
        </div>
      </main>
    </>
  )
}
