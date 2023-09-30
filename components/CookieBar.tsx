import useLocalStorage from "use-local-storage";
import { SectionTitle } from "./SectionTitle";

export const CookieBar = () => {
  const [accepted, setAccepted] = useLocalStorage("cookies-accepted", false);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between border-t border-primary bg-dark-400 px-4 py-3 font-bold transition-all hover:border-primary hover:text-primary ${
        accepted ? "hidden" : ""
      }`}
    >
      <div className="hidden md:block">
        <SectionTitle text="🍪 Cookies" />
      </div>
      <p className="text-sm text-primary">
        We use cookies to ensure you get the best experience on FirstIssue.dev
      </p>
      <button
        type="button"
        className="inline-flex flex-shrink-0 items-center justify-center rounded-md border border-primary bg-primary px-4 py-3 text-sm font-semibold text-dark-400 transition-all hover:bg-primary_light"
        onClick={() => setAccepted(true)}
      >
        Accept
      </button>
    </div>
  );
};
