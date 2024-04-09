import { Layout } from "@/components/Layout";
import { getData } from "app/data-loader";
import { Metadata } from "next";
import { RepositoryList } from "../../../components/Repository/RepositoryList";

export async function generateMetadata({
  params
}: {
  params: { language: string };
}): Promise<Metadata | undefined> {
  const data = getData();
  const slug = decodeURI(params.language);
  const language = data.languages.find((l) => l.id === slug);

  return {
    title: `Language ${language?.display} (${language?.count})`,
    description: `There are ${language?.count} repositories in the ${language?.display} language on verto. Take the first step into collaborative coding, and be part of something bigger. Your code today could be the start of something amazing in the open-source community.`
  };
}

export default function Page({ params }: { params: { language: string } }) {
  return (
    <Layout>
      <RepositoryList languageId={params.language} />
    </Layout>
  );
}
