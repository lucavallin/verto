import { ShowMoreButton } from "@/components/Button/ShowMoreButton";
import { Loader } from "@/components/Loader";
import { SectionTitle } from "@/components/SectionTitle";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRepositoryQuery } from "store";
import { CountableTag } from "types";

interface Props {
  data: CountableTag[] | undefined;
  isLoading: boolean;
  title: string;
  type: "languages" | "tags";
  limitStep?: number;
}

function Picker({ data, isLoading, title, type, limitStep = 15 }: Props) {
  const { setQuery, query } = useRepositoryQuery();
  const [limit, setLimit] = useState(limitStep);

  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  // showLess button is only visible when the limit value exceeds by limitStep(i.e 15)
  const isShowLessVisible = limit > limitStep;

  return (
    <div className="pb-6">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`flex  items-center ${isCollapsed ? "sm:flex" : ""}`}
      >
        <SectionTitle className="my-3 cursor-pointer" text={title} />

        <FontAwesomeIcon
          icon={faChevronDown}
          className={`mx-2 mt-[3px] text-silver-500 transition-transform ${
            isCollapsed ? "rotate-0" : "rotate-180"
          } duration-300 ease-in-out md:hidden`}
        />
        {type === "tags" && (
          <button
            className={`${
              !isShowLessVisible ? "md:hidden" : "md:inline-block"
            } active-pill group ml-2 hidden cursor-pointer rounded-sm border px-2 py-1 transition-all hover:border-dashed hover:bg-primary/20 hover:text-white`}
            onClick={() => setLimit(limitStep)}
          >
            Show Less
          </button>
        )}
        <FontAwesomeIcon
          icon={faTimes}
          className={`ml-auto mr-6 cursor-pointer text-silver-500 hover:text-primary ${
            query[type].length === 0 ? "hidden" : "inline-block"
          }`}
          onClick={() => setQuery(type, [])}
        />
      </div>
      <div
        className={`${
          isShowLessVisible && "overflow-y-scroll"
        } overflow-hidden duration-300  ease-in-out md:max-h-[50dvh] ${
          isCollapsed ? "max-h-0" : "max-h-96"
        } ${isCollapsed ? "sm:max-h-full" : ""}`}
      >
        {isLoading ? (
          <div className="my-10">
            <Loader />
          </div>
        ) : (
          data?.slice(0, limit).map((el) => {
            return (
              <button
                key={el.id}
                className={`group m-1 inline-block rounded-sm border px-2 py-1 text-sm ${
                  query[type].includes(el.display)
                    ? "active-pill"
                    : "border-silver-100 transition-all hover:border-primary hover:text-primary"
                }`}
                onClick={() => {
                  if (query[type].includes(el.display)) {
                    setQuery(
                      type,
                      query[type].filter((q) => q !== el.display)
                    );
                  } else {
                    setQuery(type, [...query[type], el.display]);
                  }
                }}
              >
                {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
                <i className={`devicon-${el.display.toLowerCase()}-plain colored`}></i>
                <span className="ml-2">{el.display}</span>
                <span className="text-white-400 transition-all group-hover:text-primary">
                  &nbsp;&times;{el.count}
                </span>
              </button>
            );
          })
        )}
        {type === "tags" && data && (
          <ShowMoreButton
            hasMore={data.length > limit}
            onClick={() => setLimit((limit) => limit + limitStep)}
          />
        )}
      </div>
    </div>
  );
}

export { Picker };
