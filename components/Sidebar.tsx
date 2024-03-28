"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AboutSection } from "@/components/AboutSection";
import { LinkButton } from "@/components/Button/LinkButton";
import { Picker } from "@/components/Picker";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Server } from "@/lib/trpc/client";
import { useScrollReached } from "hooks";

function Sidebar() {
  const { data: languages, isInitialLoading: isLangsInLoading } =
    Server.route.getLanguages.useQuery();
  const { data: tags, isInitialLoading: isTagsInLoading } = Server.route.getTags.useQuery();
  const { scrollHeightReached, showUpArrow } = useScrollReached({
    forMobileHeight: 640,
    forDesktopHeight: 702
  });

  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="relative w-full flex-none font-sans text-silver-500 md:max-w-sm">
      <div className="px-6 pb-3">
        <AboutSection />
        <div className="pt-4">
          <LinkButton
            title="Star it on GitHub"
            href="https://github.com/lucavallin/verto"
            secondary
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            Star it on GitHub 🌟
          </LinkButton>
        </div>
        <div className="py-2">
          <LinkButton
            title="Add your project"
            href="https://github.com/lucavallin/verto#adding-a-new-project"
          >
            Add your project
          </LinkButton>
        </div>
      </div>
      <div
        className={`z-50 bg-black-400 px-6  transition-all  duration-300   ${
          scrollHeightReached ? "fixed top-0 md:max-w-sm" : "sticky top-0"
        }`}
      >
        <Picker
          data={languages}
          isLoading={isLangsInLoading}
          title="Browse by language"
          type="languages"
          limitStep={30}
        />
        <Picker data={tags} isLoading={isTagsInLoading} title="Browse by tag" type="tags" />
        {/* <LanguagePicker /> */}
        {/* <TagPicker /> */}
      </div>
      {showUpArrow && <ScrollToTop handleOnClick={handleScrollToTop} />}
    </section>
  );
}

export { Sidebar };
