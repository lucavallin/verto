import Head from "next/head";
import { useRouter } from "next/router";

import { RepositoryList } from "../../components/RepositoryList";
import { useAppData } from "../../hooks/useAppData";
import { CountableTag } from "../../types";

export default function Language() {
  const { repositories, languages, topics } = useAppData();

  const router = useRouter();
  const { query } = router.query;

  const pageTitle = `First Issue | Search ${query}`;

  const queriedLanguages = languages.filter((language: CountableTag) =>
    language.display?.toLowerCase().includes(query as string)
  );
  const queriedTopics = topics.filter((topic: CountableTag) =>
    topic.display?.toLowerCase().includes(query as string)
  );
  const queriedRepositories = repositories.filter(
    (repository) =>
      repository.owner.toLowerCase().includes(query as string) ||
      repository.name.toLowerCase().includes(query as string) ||
      repository.language.display?.toLowerCase().includes(query as string) ||
      repository.topics?.some((topic) => topic.display?.toLowerCase().includes(query as string)) ||
      repository.issues?.some((issue) => issue.title.toLowerCase().includes(query as string))
  );

  // show repositories that have the tag in either title, description, language or topics or issues
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <RepositoryList repositories={queriedRepositories} />
      {queriedLanguages}
      {queriedTopics}
    </>
  );
}
