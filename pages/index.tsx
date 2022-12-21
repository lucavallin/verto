import Head from 'next/head'
import RepoBox from '../components/RepoBox'
import repositories from '../data/generated.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>Good First Issue: issues for your first open-source contribution</title>
        <meta name="description" content="Making your first open-source contribution is easier than you think. Good First Issue is a curated list of issues from popular open-source projects that you can fix easily. Start today!" />
        <meta name="keywords" content="good first issue, open source, github, beginner, pull requests, help wanted"/>
        <meta name="og:title" content="Good First Issue: issues for your first open-source contribution" />
        <meta name="og:description" content="Making your first open-source contribution is easier than you think. Good First Issue is a curated list of issues from popular open-source projects that you can fix easily. Start today!" />
        <meta name="og:image" content="/public/meta.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="p-4 w-full">
          {repositories.map(repo => <RepoBox key={repo.id} repo={repo} />)}
        </div>
      </main>
    </>
  )
}
