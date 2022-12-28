import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";

import { Repository } from "../types";
import { RepositoryItem } from "./RepositoryItem";

type RepositoryListProps = {
  repositories: Repository[];
};

const Loader = () => (
  <div className="p-4 w-full">
    <div className="flex items-center justify-center">
      <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
    </div>
  </div>
);

export const RepositoryList = ({ repositories }: RepositoryListProps) => {
  const itemsPerScroll = 15;
  const [items, setItems] = React.useState(itemsPerScroll);
  const repositoriesToRender = repositories.slice(0, items);

  return (
    <main>
      <div className="p-4 w-full">
        <InfiniteScroll
          pageStart={0}
          loadMore={() => setItems(items + itemsPerScroll)}
          hasMore={items < repositories.length}
          loader={<Loader />}
          useWindow={false}
        >
          {repositoriesToRender.map((repository) => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))}
        </InfiniteScroll>
      </div>
    </main>
  );
};
