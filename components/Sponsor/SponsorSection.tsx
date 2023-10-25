import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionTitle } from "../SectionTitle";

export const SponsorSection = () => {
  return (
    <div className="pt-6">
      <SectionTitle text="This month's sponsor" />
      <p className="py-2 text-sm text-silver-500">
        Use{" "}
        <a
          href="https://chat.collectivai.com/hacktober-fest"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-lg font-bold text-pink transition-all hover:underline">
            Collectiv
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              className="mx-1 inline-block h-[12px] w-[12px]"
            />{" "}
          </span>{" "}
        </a>
        to solve Hacktoberfest issues and win a T-Shirt & other exciting merch!
      </p>
    </div>
  );
};
