import { SectionTitle } from "./SectionTitle";

export const CookieBar = () => {
  let accepted = false;
  try {
    accepted = window.localStorage.hasItem("cookieAccepted");
  } catch (e) {}

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between border-t border-primary bg-dark-400 px-4 py-3 font-bold transition-all hover:border-primary hover:text-primary ${
        accepted ? "hidden" : ""
      }`}
    >
      <SectionTitle text="🍪 Cookies" />
      <p className="text-sm text-primary">
        We use cookies to ensure you get the best experience on FirstIssue.dev
      </p>
      <button
        type="button"
        className="inline-flex flex-shrink-0 items-center justify-center rounded-md border border-primary bg-primary px-4 py-3 text-sm font-semibold text-dark-400 transition-all hover:bg-primary_light"
        onClick={() => {
          try {
            window.localStorage.setItem("cookieAccepted", "true");
          } catch (e) {}
        }}
      >
        Accept
      </button>
    </div>
  );
};
