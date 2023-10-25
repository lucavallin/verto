import { NewsletterForm } from "./NewsletterForm";
import { SectionTitle } from "./SectionTitle";

export const NewsletterSection = () => {
  return (
    <div className="pt-6">
      <SectionTitle className="mb-2" text="Join the Newsletter" />
      <p className="text-sm text-silver-500">
        Join &quot;The lucavallin Newsletter&quot; to receive curated issues from Verto and other
        articles in your inbox every other week.
      </p>
      <NewsletterForm />
    </div>
  );
};
