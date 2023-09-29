import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";

import { SectionTitle } from "./SectionTitle";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onClick = () => {
    const valid = isEmail(email);
    setIsValidEmail(valid);
    if (!valid) {
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_NEWSLETTER_SUBSCRIBE_URL}&EMAIL=${email}`)
      .then(() => setIsSubscribed(true))
      .catch(() => {
        setHasError(true);
        setTimeout(() => setHasError(false), 3000);
      });
  };

  return (
    <div className="hidden pt-6">
      <SectionTitle text="Join the Newsletter" />
      <p className="text-sm">
        Join the FirstIssue.dev newsletter and receive curated issues in your inbox every week.
      </p>
      {!isSubscribed && !hasError && (
        <div className="relative mt-4 flex rounded-md">
          <input
            type="text"
            className="block w-full rounded-l-md px-4 py-3 pl-11 text-sm text-secondary"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4">
            <FontAwesomeIcon
              icon={isValidEmail ? faEnvelope : faWarning}
              className={isValidEmail ? "text-secondary" : "text-primary"}
            />
          </div>
          <button
            type="button"
            className="text-whitetransition-all inline-flex w-20 flex-shrink-0 items-center justify-center rounded-r-md border border-primary px-4 py-3 text-sm font-semibold transition-all hover:bg-primary"
            onClick={onClick}
          >
            Join
          </button>
        </div>
      )}
      {isSubscribed && (
        <div className="pt-4">
          <div className="block rounded-md bg-primary px-1 py-3 text-center font-bold uppercase text-dark-400">
            Thanks for subscribing!
          </div>
        </div>
      )}
      {hasError && (
        <div className="pt-4">
          <div className="block rounded-md border border-primary px-1 py-3 text-center font-bold uppercase text-primary">
            Something went wrong
          </div>
        </div>
      )}
    </div>
  );
};
