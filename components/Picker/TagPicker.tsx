import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useEffect } from "react";
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

  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  // Automatically collapse the sidebar after redirection
  useEffect(() => {
    setIsCollapsed(true);
  }, [activeTagId]);

  const toggleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

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
      <div
        onClick={toggleCollapsible}
        className={`flex cursor-pointer ${isCollapsed ? "sm:flex" : ""}`}
      >
        <SectionTitle className="mb-2" text="Browse by tag" />
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`mx-2 mt-[3px] transform text-secondary transition-transform ${
            isCollapsed ? "rotate-0" : "rotate-180"
          } animate-fade-in duration-300 ease-in-out md:hidden`}
        />
      </div>
      <div
        className={`transition-max-height overflow-hidden duration-300 ease-in-out ${
          isCollapsed ? "max-h-0" : "max-h-96"
        } ${isCollapsed ? "sm:max-h-full" : ""}`}
      >
        {tags.slice(0, limit).map((tag) => {
          return (
            <PickerItem
              className={`group mx-1 my-1 inline-block rounded-sm border px-2 py-1 text-sm ${
                onTagPage && tag.id === activeTagId
                  ? "active-pill"
                  : "border-secondary transition-all hover:border-primary hover:text-primary"
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
