import { Layout } from "@/components/Layout";
import { RepositoryList } from "@/components/Repository/RepositoryList";

export default async function Page() {
  return (
    <Layout>
      <RepositoryList />
    </Layout>
  );
}
