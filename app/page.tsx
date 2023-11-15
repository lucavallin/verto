import { JsonLd } from "@/components/JsonLd";
import { Layout } from "@/components/Layout";
import { RepositoryList } from "@/components/Repository/RepositoryList";
import { getUserCredentials } from "lib/api/auth";

export default async function Page() {
  const user = await getUserCredentials();
  console.log("Current User: ", user);
  return (
    <Layout>
      <JsonLd />
      <RepositoryList />
    </Layout>
  );
}
