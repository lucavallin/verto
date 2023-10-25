import { Layout } from "@/components/Layout";
import { RepositoryList } from "../../../components/Repository/RepositoryList";

export default function Page({ params }: { params: { tag: string } }) {
  return (
    <Layout>
      <RepositoryList tagId={params.tag} />
    </Layout>
  );
}
