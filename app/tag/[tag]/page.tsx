import { Layout } from "@/components/Layout";
import { Metadata } from "next";
import { RepositoryList } from "../../../components/Repository/RepositoryList";

export async function generateMetadata({
  params
}: {
  params: { tag: string };
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.tag);

  return {
    title: "Tag " + slug
  };
}

export default function Page({ params }: { params: { tag: string } }) {
  return (
    <Layout>
      <RepositoryList tagId={params.tag} />
    </Layout>
  );
}
