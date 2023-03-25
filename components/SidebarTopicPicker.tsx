import { CountableTag } from "../types";
import { ShowMoreTopicsButton } from "./ShowMoreTopicsButton";
import { SidebarPickerItemLink } from "./SidebarPickerItemLink";

type SidebarTopicPickerProps = {
  activeTagId: string | string[] | undefined;
  handleShowMoreTopics: () => void;
  pageName: string;
  showMoreTopics: boolean;
  topics: CountableTag[];
  topicsLimit: number;
};

const Header = () => (
  <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-slate">Browse by topic</h3>
);

export const SidebarTopicPicker = ({
  activeTagId,
  handleShowMoreTopics,
  pageName,
  showMoreTopics,
  topics,
  topicsLimit
}: SidebarTopicPickerProps) => {
  const hasMoreTopics = topics.length > topicsLimit;
  const sliceEndNum = showMoreTopics ? topics.length : topicsLimit;

  return (
    <div className="pt-6">
      <Header />
      <div>
        {topics.slice(0, sliceEndNum).map((topic) => {
          return (
            <SidebarPickerItemLink
              className={`group mx-1 border px-2 py-1 inline-block rounded-sm my-1 text-sm ${
                pageName == "topic" && topic.id === activeTagId
                  ? "active-pill"
                  : "border-slate hover:text-juniper hover:border-juniper"
              }`}
              href={`/topic/${topic.id}`}
              key={topic.id}
              text={topic.display}
              totalOccurrences={topic.count}
            />
          );
        })}
        {hasMoreTopics && (
          <ShowMoreTopicsButton hasMoreTopics={!showMoreTopics} onClick={handleShowMoreTopics} />
        )}
      </div>
    </div>
  );
};
