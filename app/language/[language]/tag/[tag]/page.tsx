import { Layout } from "@/components/Layout";
import { RepositoryList } from "@/components/Repository/RepositoryList";
import { Metadata } from "next";
import data from "../../../../../data/data.json";

export async function generateMetadata({
  params
}: {
  params: { language: string; tag: string };
}): Promise<Metadata | undefined> {
  const languageSlug = decodeURI(params.language);
  const tagSlug = decodeURI(params.tag);
  const tag = data.tags.find((t) => t.id === tagSlug);
  const language = data.languages.find((l) => l.id === languageSlug);

  return {
    title: `Language ${language?.display} and Tag ${tag?.display}`
  };
}

export default function Page({ params }: { params: { language: string; tag: string } }) {
  return (
    <Layout>
      <RepositoryList languageId={params.language} tagId={params.tag} />
    </Layout>
  );
}
