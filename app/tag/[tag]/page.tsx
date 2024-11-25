import { Layout } from "@/components/Layout";
import { getData } from "app/data-loader";
import { Metadata } from "next";
import { RepositoryList } from "../../../components/Repository/RepositoryList";

type Params = Promise<{ tag: string }>;

export async function generateMetadata({
  params
}: {
  params: Params;
}): Promise<Metadata | undefined> {
  const data = getData();
  const slug = decodeURI((await params).tag);
  const tag = data.tags.find((t) => t.id === slug);

  return {
    title: `Tag ${tag?.display} (${tag?.count})`,
    description: `There are ${tag?.count} repositories tagged ${tag?.display} on verto. Take the first step into collaborative coding, and be part of something bigger. Your code today could be the start of something amazing in the open-source community.`
  };
}

export default async function Page({ params }: { params: Params }) {
  return (
    <Layout>
      <RepositoryList tagId={(await params).tag} />
    </Layout>
  );
}
