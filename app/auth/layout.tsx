import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Layout } from "@/components/Layout";
import { getUserCredentials } from "lib/api/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getUserCredentials();
  if (user) redirect("/");
  return (
    <Layout>
      <div className="h-full w-4/5">{children}</div>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </Layout>
  );
}
