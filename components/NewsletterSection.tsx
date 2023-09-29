import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faSpinner, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import isEmail from "validator/lib/isEmail";

import { SectionTitle } from "./SectionTitle";

export const NewsletterSection = () => {
  const [isValidEmail, setIsValidEmail] = useState(true);

  const { loading, error, success, handleSubmit } = useMailChimpForm(
    process.env.NEXT_PUBLIC_NEWSLETTER_SUBSCRIBE_URL!
  );
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: ""
  });

  return (
    <div className="hidden pt-6">
      <SectionTitle text="Join the Newsletter" />
      <p className="text-sm">
        Join the FirstIssue.dev newsletter and receive curated issues in your inbox every week.
      </p>

      {!success && !error && (
        <form
          className="relative mt-4 flex rounded-md"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(fields);
          }}
        >
          <input
            type="email"
            id="EMAIL"
            autoFocus
            className="block w-full rounded-l-md px-4 py-3 pl-11 text-sm text-secondary"
            value={fields.EMAIL}
            onChange={(e) => {
              setIsValidEmail(isEmail(e.target.value));
              handleFieldChange(e);
            }}
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4">
            <FontAwesomeIcon
              icon={loading ? faSpinner : isValidEmail ? faEnvelope : faWarning}
              className={isValidEmail ? "text-secondary" : "text-primary"}
              spin={loading}
            />
          </div>
          <button
            type="submit"
            className="text-whitetransition-all inline-flex w-20 flex-shrink-0 items-center justify-center rounded-r-md border border-primary px-4 py-3 text-sm font-semibold transition-all hover:bg-primary"
          >
            Join
          </button>
        </form>
      )}
      {success && (
        <div className="pt-4">
          <div className="block rounded-md bg-primary px-1 py-3 text-center font-bold uppercase text-dark-400">
            Thanks for subscribing!
          </div>
        </div>
      )}
      {error && (
        <div className="pt-4">
          <div className="block rounded-md border border-primary px-1 py-3 text-center font-bold uppercase text-primary">
            Something went wrong
          </div>
        </div>
      )}
    </div>
  );
};
