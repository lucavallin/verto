import { JsonLd } from "@/components/JsonLd";
import { Layout } from "@/components/Layout";
import { RepositoryList } from "@/components/Repository/RepositoryList";

export default async function Page() {
  return (
    <Layout>
      <JsonLd />
      <RepositoryList />
    </Layout>
  );
}
