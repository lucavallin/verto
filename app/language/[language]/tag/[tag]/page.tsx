import { Layout } from "@/components/Layout";
import { RepositoryList } from "@/components/Repository/RepositoryList";
import { Metadata } from "next";

export async function generateMetadata({
  params
}: {
  params: { language: string; tag: string };
}): Promise<Metadata | undefined> {
  const languageSlug = decodeURI(params.language);
  const tagSlug = decodeURI(params.tag);

  return {
    title: "Language " + languageSlug + " and Tag " + tagSlug
  };
}

export default function Page({ params }: { params: { language: string; tag: string } }) {
  return (
    <Layout>
      <RepositoryList languageId={params.language} tagId={params.tag} />
    </Layout>
  );
}
