import { Layout } from "@/components/Layout";
import { Metadata } from "next";
import { RepositoryList } from "../../../components/Repository/RepositoryList";
import { getData } from "app/data-loader";

export async function generateMetadata({
  params
}: {
  params: { tag: string };
  }): Promise<Metadata | undefined> {
  const data = getData();
  const slug = decodeURI(params.tag);
  const tag = data.tags.find((t) => t.id === slug);

  return {
    title: `Tag ${tag?.display} (${tag?.count})`
  };
}

export default function Page({ params }: { params: { tag: string } }) {
  return (
    <Layout>
      <RepositoryList tagId={params.tag} />
    </Layout>
  );
}
