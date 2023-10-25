import { Layout } from "@/components/Layout";
import { Metadata } from "next";
import { RepositoryList } from "../../../components/Repository/RepositoryList";
import data from "../../../data/data.json";

export async function generateMetadata({
  params
}: {
  params: { language: string };
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.language);
  const language = data.languages.find((l) => l.id === slug);

  return {
    title: `Language ${language?.display} (${language?.count})`
  };
}

export default function Page({ params }: { params: { language: string } }) {
  return (
    <Layout>
      <RepositoryList languageId={params.language} />
    </Layout>
  );
}
