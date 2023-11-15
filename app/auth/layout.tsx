import { Layout } from "@/components/Layout";
import { getUserCredentials } from "lib/api/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getUserCredentials();
  if (user) redirect("/");
  return (
    <Layout>
      <div className="h-full w-4/5">{children}</div>
    </Layout>
  );
}
