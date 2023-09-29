import { useState } from "react";

import { CountableTag } from "../../types";
import { ShowMoreButton } from "../Button/ShowMoreButton";
import { SectionTitle } from "../SectionTitle";
import { PickerItem } from "./PickerItem";

type TagPickerProps = {
  activeTagId: string | string[] | undefined;
  onTagPage: boolean;
  tags: CountableTag[];
};

export const TagPicker = ({ tags, activeTagId, onTagPage }: TagPickerProps) => {
  const limitStep = 15;
  const [showMore, setShowMore] = useState(false);
  const [limit, setLimit] = useState(limitStep);
  const hasMore = tags.length > limit;

  const handleShowMore = () => {
    if (!hasMore) {
      setLimit(15);
      window.scrollTo(0, 0);
    } else {
      setLimit(limit + limitStep);
    }

    setShowMore(!showMore);
  };

  return (
    <div className="pt-6">
      <SectionTitle text="Browse by tag" />
      <div>
        {tags.slice(0, limit).map((tag) => {
          return (
            <PickerItem
              className={`group mx-1 my-1 inline-block rounded-sm border px-2 py-1 text-sm ${
                onTagPage && tag.id === activeTagId
                  ? "active-pill"
                  : "border-secondary transition-all transition-all hover:border-primary hover:text-primary"
              }`}
              href={`/tag/${tag.id}`}
              key={tag.id}
              text={tag.display}
              totalOccurrences={tag.count}
            />
          );
        })}
        <ShowMoreButton hasMore={hasMore} onClick={handleShowMore} />
      </div>
    </div>
  );
};
