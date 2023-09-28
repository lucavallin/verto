import { useRouter } from "next/router";
import React from "react";

import { REPOSITORY_SORT_OPTIONS } from "../constants";
import { useAppData } from "../hooks/useAppData";
import { AddYourProjectLinkButton } from "./AddYourProjectLinkButton";
import { SidebarAboutSection } from "./SidebarAboutSection";
import { SidebarLanguagePicker } from "./SidebarLanguagePicker";
import { SidebarRepositorySortPicker } from "./SidebarRepositorySortPicker";
import { SidebarTopicPicker } from "./SidebarTopicPicker";
import { StarItOnGitHubButton } from "./StarItOnGitHubButton";

const DEFAULT_TOPICS_LIMIT = 15;

export const Sidebar = () => {
  const router = useRouter();
  const { languages, topics, repositorySortOrder, updateRepositorySortOrder } = useAppData();
  const [showMoreTopics, setShowMoreTopics] = React.useState(false);
  const { tag: activeTagId } = router.query;

  // NOTE: This is used to highlight the active language or topic
  const pageName = router.pathname.split("/")[1];

  const updateShowMoreTopics = () => {
    if (!showMoreTopics) {
      window.scrollTo(0, 0);
    }
    setShowMoreTopics(!showMoreTopics);
  };

  return (
    <section className="font-sans pt-6 px-6 text-vanilla-300 flex-none w-full md:max-w-sm">
      <SidebarAboutSection />
      <StarItOnGitHubButton />
      <AddYourProjectLinkButton />
      <SidebarLanguagePicker languages={languages} activeTagId={activeTagId} pageName={pageName} />
      <SidebarRepositorySortPicker
        activeSort={repositorySortOrder}
        sortOptions={REPOSITORY_SORT_OPTIONS}
        onSortOrderSelect={updateRepositorySortOrder}
      />
      <SidebarTopicPicker
        activeTagId={activeTagId}
        handleShowMoreTopics={updateShowMoreTopics}
        pageName={pageName}
        showMoreTopics={showMoreTopics}
        topics={topics}
        topicsLimit={DEFAULT_TOPICS_LIMIT}
      />
    </section>
  );
};
