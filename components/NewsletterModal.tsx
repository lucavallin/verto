import { NewsletterSection } from "./NewsletterSection";

export const NewsletterModal = () => {
  return (
    <div className="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden bg-dark-400 bg-opacity-70 px-12 outline-none">
      <div className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
        <div className="bg-white text-current pointer-events-auto relative flex w-full flex-col rounded-md border border-primary bg-dark-400 bg-clip-padding shadow-lg outline-none">
          <div className="relative px-12 pb-12 pt-6">
            <NewsletterSection />
          </div>
        </div>
      </div>
    </div>
  );
};
