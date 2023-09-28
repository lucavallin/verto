import { CountableTag } from "../types";
import { PickerItemLink } from "./PickerItemLink";
import { ShowMoreTagsButton } from "./ShowMoreTagsButton";
import { SidebarItemHeader } from "./SidebarItemHeader";

type TagPickerProps = {
  activeTagId: string | string[] | undefined;
  handleShowMoreTags: () => void;
  pageName: string;
  showMoreTags: boolean;
  tags: CountableTag[];
  tagsLimit: number;
};

export const TagPicker = ({
  activeTagId,
  handleShowMoreTags,
  pageName,
  showMoreTags,
  tags,
  tagsLimit
}: TagPickerProps) => {
  const hasMoreTags = tags.length > tagsLimit;
  const sliceEndNum = showMoreTags ? tags.length : tagsLimit;

  return (
    <div className="py-6">
      <SidebarItemHeader text="Browse by tag" />
      <div>
        {tags.slice(0, sliceEndNum).map((tag) => {
          return (
            <PickerItemLink
              className={`group mx-1 border px-2 py-1 inline-block rounded-sm my-1 text-sm ${
                pageName == "tag" && tag.id === activeTagId
                  ? "active-pill"
                  : "border-slate hover:text-juniper hover:border-juniper"
              }`}
              href={`/tag/${tag.id}`}
              key={tag.id}
              text={tag.display}
              totalOccurrences={tag.count}
            />
          );
        })}
        {hasMoreTags && (
          <ShowMoreTagsButton hasMoreTags={!showMoreTags} onClick={handleShowMoreTags} />
        )}
      </div>
    </div>
  );
};
