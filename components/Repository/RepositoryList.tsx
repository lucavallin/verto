"use client";

import InfiniteScroll from "react-infinite-scroll-component";

import { Loader } from "@/components/Loader";
import { useRepositoryQuery } from "store";
import { Repository } from "types";
import { RepositoryItem } from "./RepositoryItem";

interface Props {
  repos: Repository[];
  hasNextPage: boolean;
}

function RepositoryList({ repos, hasNextPage }: Props) {
  const {
    query: { page },
    setQuery
  } = useRepositoryQuery();

  return (
    <div>
      <InfiniteScroll
        className="pt-6"
        dataLength={repos.length}
        next={() => setQuery("page", page + 1)}
        hasMore={hasNextPage}
        loader={<Loader />}
      >
        {repos.length > 0 ? (
          repos.map((repository) => {
            // NOTE - We sometimes get duplicate values back from GitHub API
            // meaning we can't simply rely on the id as the key
            const key = `${repository.id}_${new Date().getTime()}_${Math.random()}`;

            return <RepositoryItem key={key} repository={repository} />;
          })
        ) : (
          <div className="group mb-4 flex h-40 w-full select-none items-center justify-center rounded-md border border-silver-100 text-xl font-semibold">
            We couldn't find any repositories matching your search
          </div>
        )}
      </InfiniteScroll>
    </div>
  );
}

export { RepositoryList };
