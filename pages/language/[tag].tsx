import { useRouter } from 'next/router'
import { RepoBox } from '../../components/RepoBox'
import { useAppContext } from '../_app'

export default function Language() {
  const { repos } = useAppContext()

  const router = useRouter()
  const { tag } = router.query

  return (
    <>
      <main>
        <div className="p-4 w-full">
          {repos
            .filter((r) => r.language == tag)
            .map((r) => (
              <RepoBox key={r.id} repo={r} />
            ))}
        </div>
      </main>
    </>
  )
}
