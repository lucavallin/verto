import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CollectivSection = () => {
  return (
    <div className="pt-6">
      <div className="flex cursor-pointer flex-row items-center uppercase text-secondary">
        Get Help
      </div>
      <div className=" py-2">
        Use{" "}
        <a
          href="https://chat.collectivai.com/hacktober-fest"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-bold text-primary transition-all hover:underline">
            Collectiv
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              className="mx-1 mb-1 inline-block h-[12px] w-[12px]"
            />{" "}
          </span>{" "}
        </a>
        to solve Hacktoberfest issues and{" "}
        <span className="mb-2 text-sm font-bold tracking-wider text-[#F8F8F8]">win a T-shirt</span>{" "}
        & other exciting Merch!
      </div>
    </div>
  );
};
