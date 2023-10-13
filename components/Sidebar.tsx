import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import { useAppData } from "../hooks/useAppData";
import { AboutSection } from "./AboutSection";
import { LinkButton } from "./Button/LinkButton";
import { CollectivSection } from "./Collectiv/CollectivSection";
import { NewsletterSection } from "./NewsletterSection";
import { LanguagePicker } from "./Picker/LanguagePicker";
import { TagPicker } from "./Picker/TagPicker";
import ScrollToTopButton from "./ScrollToTopButton";

export const Sidebar = () => {
  const router = useRouter();
  const { languages, tags } = useAppData();
  const { tag: activeTagId, language: activeLanguageId } = router.query;
  const pageName = router.pathname.split("/")[1];

  // State variable to track whether the user has scrolled to a minimum height of 702 pixels vertically.
  const [scrollHeightReached, setScrollHeightReached] = useState(false);
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    const scrollTarget = document.getElementById("repositories-list");
    const isMobile = window.innerWidth <= 640;
    if (isMobile && (pageName === "language" || pageName === "tag")) {
      scrollTarget?.scrollIntoView({ behavior: "smooth" });
    }

    // Handle scroll events and set "scrollHeightReached" & "showUpArrow" to True,  when the user scrolls to 702 pixels vertically.
    const handleScroll = () => {
      setScrollHeightReached(window.scrollY >= 702);
      setShowUpArrow(window.scrollY > 702);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [router.asPath, pageName]);

  // Function to scroll to the top of the page
  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="w-full flex-none px-6 font-sans text-light-300 md:relative md:max-w-sm">
      <AboutSection />
      <LinkButton href="https://github.com/lucavallin/first-issue" secondary>
        <FontAwesomeIcon icon={faGithub} className="mr-2" />
        Star it on GitHub 🌟
      </LinkButton>
      <LinkButton href="https://github.com/lucavallin/first-issue#adding-a-new-project">
        Add your project
      </LinkButton>
      <CollectivSection />
      <NewsletterSection />
      <div
        className={` z-50 bg-dark-400 transition-all duration-300 md:sticky md:top-4 ${
          scrollHeightReached ? "fixed top-0 " : "sticky top-0"
        }`}
      >
        <LanguagePicker
          languages={languages}
          activeTagId={activeLanguageId}
          onLanguagePage={pageName == "language"}
        />
        <TagPicker tags={tags} activeTagId={activeTagId} onTagPage={pageName == "tag"} />
      </div>
      {showUpArrow && <ScrollToTopButton handleOnClick={handleScrollToTop} />}
    </section>
  );
};
