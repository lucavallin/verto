import { NewsletterForm } from "./NewsletterForm";
import { SectionTitle } from "./SectionTitle";

interface CustomSubstackWidget {
  element: string;
  substackUrl: string | undefined;
  placeholder: string;
  buttonText: string;
  theme: string;
  colors: {
    primary: string;
    input: string;
    email: string;
    text: string;
  };
}

declare global {
  interface Window {
    CustomSubstackWidget?: CustomSubstackWidget;
  }
}

export const NewsletterSection = () => {
  return (
    <div className="pt-6">
      <SectionTitle className="mb-2" text="Join the Newsletter" />
      <p className="text-sm text-silver-500">
        Join &quot;The lucavallin Newsletter&quot; to receive curated issues from FirstIssue and
        other articles in your inbox every other week.
      </p>
      <NewsletterForm />
    </div>
  );
};
