import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { REPOSITORY_SORT_OPTIONS } from "../../constants";
import { useAppData } from "../../hooks/useAppData";
import { Repository } from "../../types";
import { SortPicker } from "../Picker/SortPicker";
import { SearchBar } from "../SearchBar";
import { RepositoryItem } from "./RepositoryItem";

type RepositoryListProps = {
  repositories: Repository[];
};

const Loader = () => (
  <div className="w-full p-4">
    <div className="flex items-center justify-center">
      <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
    </div>
  </div>
);

export const RepositoryList = ({ repositories }: RepositoryListProps) => {
  const itemsPerScroll = 15;
  const [items, setItems] = useState(itemsPerScroll);
  const { repositorySortOrder, updateRepositorySortOrder } = useAppData();

  return (
    <main className="grow">
      <div className="w-full px-6">
        <SortPicker
          activeSort={repositorySortOrder}
          sortOptions={REPOSITORY_SORT_OPTIONS}
          onSortOrderSelect={updateRepositorySortOrder}
        />
        <SearchBar />
        <InfiniteScroll
          className="pt-6"
          dataLength={items}
          next={() => setItems(items + itemsPerScroll)}
          hasMore={items < repositories.length}
          loader={<Loader />}
        >
          {repositories.slice(0, items).map((repository) => {
            // NOTE - We sometimes get duplicate values back from GitHub API
            // meaning we can't simply rely on the id as the key
            const key = `${repository.id}_${new Date().getTime()}_${Math.random()}`;

            return <RepositoryItem key={key} repository={repository} />;
          })}
        </InfiniteScroll>
      </div>
    </main>
  );
};
