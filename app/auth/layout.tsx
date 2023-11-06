import { Layout } from "@/components/Layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <div className="h-full w-4/5">{children}</div>
    </Layout>
  );
}
