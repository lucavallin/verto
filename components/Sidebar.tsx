import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { useAppContext } from "../pages/_app";

export const Sidebar = () => {
  const { languages, topics } = useAppContext();
  const [showMoreTopics, setShowMoreTopics] = React.useState(false);

  const router = useRouter();
  const { tag: activeTagId } = router.query;

  return (
    <section className="masthead font-sans pt-6 border-r border-ink-200 px-6 text-vanilla-300 flex-none w-full md:max-w-sm">
      <div>
        <h3 className="section-heading">About</h3>
        <p className="text-sm">
          First Issue curates accessible issues from popular open-source projects, and helps you
          make your next contribution to open-source.
        </p>
        <div className="text-sm pt-6">
          <a
            className="flex flex-row items-center"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/lucavallin"
          >
            <FontAwesomeIcon icon={faHeart} />
            <span className="ml-2">
              A{" "}
              <span className="inline hover:underline text-juniper" title="Visit GitHub profile">
                @lucavallin
              </span>{" "}
              & contributors initiative
            </span>
          </a>
        </div>
      </div>
      <div className="pt-6">
        <h3 className="section-heading">Browse by language</h3>
        <div>
          {languages.map((language) => {
            return (
              <Link
                key={language.id}
                href={`/language/${language.id}`}
                className={`group mx-1 border px-2 py-1 inline-block rounded-sm my-1 text-sm ${
                  language.id === activeTagId
                    ? "active-pill"
                    : "border-slate hover:text-juniper hover:border-juniper"
                }`}
              >
                {language.display}
                <span className={`text-vanilla-400 group-hover:text-juniper`}>
                  &nbsp;&times;{language.count}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="pt-6">
        <h3 className="section-heading">Browse by topic</h3>
        <div>
          {topics.slice(0, showMoreTopics ? topics.length : 15).map((topic) => {
            return (
              <Link
                key={topic.id}
                href={`/topic/${topic.id}`}
                className={`group mx-1 border px-2 py-1 inline-block rounded-sm my-1 text-sm ${
                  topic.id === activeTagId
                    ? "active-pill"
                    : "border-slate hover:text-juniper hover:border-juniper"
                }`}
              >
                {topic.display}
                <span className={`text-vanilla-400 group-hover:text-juniper`}>
                  &nbsp;&times;{topic.count}
                </span>
              </Link>
            );
          })}
          <div
            className="group mx-1 border px-2 py-1 inline-block rounded-sm my-1 text-sm active-pill cursor-pointer hover:bg-light_juniper hover:text-ink-400"
            onClick={() => setShowMoreTopics(!showMoreTopics)}
          >
            Show {showMoreTopics ? "less" : "all..."}
          </div>
        </div>
      </div>
      <div className="pt-6">
        <a
          className="block bg-juniper hover:bg-light_juniper text-ink-400 uppercase rounded-md font-bold text-center px-1 py-3"
          href="https://github.com/lucavallin/first-issue#adding-a-new-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Add your project
        </a>
      </div>
    </section>
  );
};
