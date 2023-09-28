import { useRouter } from "next/router";
import React from "react";

import { REPOSITORY_SORT_OPTIONS } from "../constants";
import { useAppData } from "../hooks/useAppData";
import { AboutSection } from "./AboutSection";
import { AddYourProjectLinkButton } from "./AddYourProjectLinkButton";
import { LanguagePicker } from "./LanguagePicker";
import { RepositorySortPicker } from "./RepositorySortPicker";
import { StarItOnGitHubButton } from "./StarItOnGitHubButton";
import { TagPicker } from "./TagPicker";

const DEFAULT_TAGS_LIMIT = 15;

export const Sidebar = () => {
  const router = useRouter();
  const { languages, tags, repositorySortOrder, updateRepositorySortOrder } = useAppData();
  const [showMoreTags, setShowMoreTags] = React.useState(false);
  const { tag: activeTagId } = router.query;

  // NOTE: This is used to highlight the active language or tag
  const pageName = router.pathname.split("/")[1];

  const updateShowMoreTags = () => {
    if (!showMoreTags) {
      window.scrollTo(0, 0);
    }
    setShowMoreTags(!showMoreTags);
  };

  return (
    <section className="font-sans px-6 text-vanilla-300 flex-none w-full md:max-w-sm">
      <AboutSection />
      <StarItOnGitHubButton />
      <AddYourProjectLinkButton />
      <LanguagePicker languages={languages} activeTagId={activeTagId} pageName={pageName} />
      <TagPicker
        activeTagId={activeTagId}
        handleShowMoreTags={updateShowMoreTags}
        pageName={pageName}
        showMoreTags={showMoreTags}
        tags={tags}
        tagsLimit={DEFAULT_TAGS_LIMIT}
      />
    </section>
  );
};
