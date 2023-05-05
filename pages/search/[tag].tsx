import Head from "next/head";
import { useRouter } from "next/router";

import { RepositoryList } from "../../components/RepositoryList";
import { CountableTag } from "../../types";
import { useAppContext } from "../_app";

export default function Language() {
  const { repositories, languages, topics } = useAppContext();

  const router = useRouter();
  const { tag } = router.query;
  const pageTitle = `First Issue | Search ${tag}`;

  const queriedLanguages = languages.filter(language => language.display?.toLocaleLowerCase() == tag);

  const queriedTopics = topics.filter((topic: CountableTag) => topic.display?.toLowerCase().includes(tag as string));
  
  const queriedRepositories = repositories.filter(
    (repository) =>
      repository.owner.toLowerCase().includes(tag as string) ||
      repository.name.toLowerCase().includes(tag as string) ||
      repository.language.display?.toLowerCase().includes(tag as string) ||
      repository.topics?.some((topic) => topic.display?.toLowerCase().includes(tag as string)) ||
      repository.issues?.some((issue) => issue.title.toLowerCase().includes(tag as string))
  );

  // show repositories that have the tag in either title, description, language or topics or issues
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <RepositoryList repositories={queriedRepositories} />
      {/* {queriedLanguages} */}
      {/* {queriedTopics} */}
      </>
  );
}
