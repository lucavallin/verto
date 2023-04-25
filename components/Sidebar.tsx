import { useRouter } from "next/router";
import React from "react";

import { useAppContext } from "../pages/_app";
import { AddYourProjectLinkButton } from "./AddYourProjectLinkButton";
import { SidebarAboutSection } from "./SidebarAboutSection";
import { SidebarLanguagePicker } from "./SidebarLanguagePicker";
import { SidebarTopicPicker } from "./SidebarTopicPicker";
import { SidebarOrder } from "./SidebarOrder";

const DEFAULT_TOPICS_LIMIT = 15;

export const Sidebar = () => {
  const router = useRouter();
  const { languages, topics } = useAppContext();
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
      <SidebarOrder />
      <SidebarLanguagePicker languages={languages} activeTagId={activeTagId} pageName={pageName} />
      <SidebarTopicPicker
        activeTagId={activeTagId}
        handleShowMoreTopics={updateShowMoreTopics}
        pageName={pageName}
        showMoreTopics={showMoreTopics}
        topics={topics}
        topicsLimit={DEFAULT_TOPICS_LIMIT}
      />
      <AddYourProjectLinkButton />
    </section>
  );
};
