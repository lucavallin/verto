import { RepoBox } from '../../components/RepoBox'
import { useAppContext } from '../_app'
import { useRouter } from 'next/router'

export default function Language() {
  const { repositories } = useAppContext()

  const router = useRouter()
  const { tag } = router.query

  return (
    <>
      <main>
        <div className="p-4 w-full">
          {repositories
            .filter((repository) => repository.language == tag)
            .map((repository) => (
              <RepoBox key={repository.id} repository={repository} />
            ))}
        </div>
      </main>
    </>
  )
}
