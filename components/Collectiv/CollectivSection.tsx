export const CollectivSection = () => {
  return (
    <div className="pt-6">
      <div className="flex cursor-pointer flex-row items-center text-secondary">GET HELP</div>
      <div className=" py-2">
        Use{" "}
        <a
          href="https://chat.collectivai.com/hacktober-fest"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-bold text-primary transition-all hover:underline">
            Collectiv
            <img
              src="/sponsors/linkout.png"
              alt="link"
              className="mb-1 ml-1 inline-block h-[12px] w-[12px]"
            />
          </span>{" "}
        </a>
        to solve Hacktoberfest issues and{" "}
        <span className="mb-2 text-sm font-bold  tracking-wider text-[#F8F8F8]">win a T-shirt</span>{" "}
        & other exciting Merch!
      </div>
    </div>
  );
};
