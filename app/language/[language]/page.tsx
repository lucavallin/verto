import { Layout } from "@/components/Layout";
import { Metadata } from "next";
import { RepositoryList } from "../../../components/Repository/RepositoryList";

export async function generateMetadata({
  params
}: {
  params: { language: string };
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.language);

  return {
    title: "Language " + slug
  };
}

export default function Page({ params }: { params: { language: string } }) {
  return (
    <Layout>
      <RepositoryList languageId={params.language} />
    </Layout>
  );
}
