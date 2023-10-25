"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppData } from "../hooks/useAppData";
import { AboutSection } from "./AboutSection";
import { LinkButton } from "./Button/LinkButton";
import { NewsletterForm } from "./NewsletterForm";
import { LanguagePicker } from "./Picker/LanguagePicker";
import { TagPicker } from "./Picker/TagPicker";
import ScrollToTop from "./ScrollToTop";
import { SectionTitle } from "./SectionTitle";
import { SponsorSection } from "./Sponsor/SponsorSection";

export const Sidebar = () => {
  const currentPage = usePathname();
  const pageType = currentPage.split("/")[1];
  const { tag: activeTagId, language: activeLanguageId } = useParams();

  const { languages, tags } = useAppData();

  // State variable to track whether the user has scrolled to a minimum height of 702 pixels vertically.
  const [scrollHeightReached, setScrollHeightReached] = useState(false);
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    const scrollTarget = document.getElementById("repositories-list");
    const isMobile = window.innerWidth <= 640;
    if (isMobile && (pageType === "language" || pageType === "tag")) {
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
  }, [pageType]);

  // Function to scroll to the top of the page
  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="w-full flex-none px-6 font-sans text-silver-500 md:relative md:max-w-sm">
      <AboutSection />
      <div className="pt-4">
        <LinkButton href="https://github.com/lucavallin/verto" secondary>
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          Star it on GitHub 🌟
        </LinkButton>
      </div>
      <div className="pt-2">
        <LinkButton href="https://github.com/lucavallin/verto#adding-a-new-project">
          Add your project
        </LinkButton>
      </div>
      <SponsorSection />

      <div className="pt-6">
        <SectionTitle className="mb-2" text="Join the Newsletter" />
        <p className="text-sm text-silver-500">
          Join &quot;The lucavallin Newsletter&quot; to receive curated issues from Verto and other
          articles in your inbox every other week.
        </p>
        <NewsletterForm />
      </div>

      <div
        className={` z-50 bg-black-400 transition-all duration-300 md:sticky md:top-4 ${
          scrollHeightReached ? "fixed top-0 " : "sticky top-0"
        }`}
      >
        <LanguagePicker
          languages={languages}
          activeTagId={activeLanguageId}
          onLanguagePage={pageType == "language"}
        />
        <TagPicker tags={tags} activeTagId={activeTagId} onTagPage={pageType == "tag"} />
      </div>
      {showUpArrow && <ScrollToTop handleOnClick={handleScrollToTop} />}
    </section>
  );
};
