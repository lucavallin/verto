import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { Repository } from "../types";
import { RepositoryItem } from "./RepositoryItem";

type RepositoryListProps = {
  repositories: Repository[];
  dtOrder: boolean;
  starOrder: boolean;
};

const Loader = () => (
  <div className="p-4 w-full">
    <div className="flex items-center justify-center">
      <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
    </div>
  </div>
);

export const RepositoryList = ({ repositories, dtOrder, starOrder  }: RepositoryListProps) => {
  const itemsPerScroll = 15;
  const [items, setItems] = useState(itemsPerScroll);

  if (dtOrder){
    repositories.sort(function (a, b) {
      if (a.last_modified < b.last_modified) {
        return 1;
      }
      if (a.last_modified > b.last_modified) {
        return -1;
      }
      return 0;
    });
  }
  
  if(dtOrder){
    //ordenando as Issues
    repositories.map ((repository)=>{
      repository.issues.sort(function (a, b) {
        if (a.created_at < b.created_at) {
          return 1;
        }
        if (a.created_at > b.created_at) {
          return -1;
        }
        return 0;
      });
    })
  }

  if (starOrder){
    repositories.sort(function (a, b) {
      if (a.stars < b.stars) {
        return 1;
      }
      if (a.stars > b.stars) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <main>
      <div className="p-4 w-full">
        <InfiniteScroll
          dataLength={items}
          next={() => setItems(items + itemsPerScroll)}
          hasMore={items < repositories.length}
          loader={<Loader />}
        >
          {repositories.slice(0, items).map((repository) => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))}
        </InfiniteScroll>
      </div>
    </main>
  );
};
