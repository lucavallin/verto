"use client";

import { Layout } from "@/components/Layout";
import { Loader } from "@/components/Loader";
import { SortPicker } from "@/components/Picker";
import { RepositoryList, SearchBar } from "@/components/Repository";
import { Server } from "@/lib/trpc/client";
import { useRepositoryQuery } from "store";

export default function Page() {
  const {
    query: { languages, tags, search, sort }
  } = useRepositoryQuery();
  const { data, isInitialLoading, isPreviousData } = Server.route.getRepositories.useQuery(
    { languages, tags, search, sort },
    {
      keepPreviousData: true
    }
  );

  return (
    <Layout>
      <main className="grow md:max-w-sm lg:max-w-none ">
        <div className="px-6">
          <div className={`sticky top-0 z-50  bg-black-400 transition-all duration-300 `}>
            <SortPicker isLoading={isPreviousData} />
            <SearchBar />
          </div>
          {isInitialLoading ? (
            <div className="mt-20">
              <Loader />
            </div>
          ) : (
            data && <RepositoryList repos={data} />
          )}
        </div>
      </main>
    </Layout>
  );
}
