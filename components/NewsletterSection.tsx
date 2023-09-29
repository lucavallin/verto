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
    <div className="pt-6">
      <SectionTitle text="Join the Newsletter" />
      <p className="text-sm">
        Join the FirstIssue.dev newsletter and receive curated issues in your inbox every week.
      </p>
      {!isSubscribed && !hasError && (
        <div className="relative flex rounded-md mt-4">
          <input
            type="text"
            className="py-3 px-4 pl-11 block w-full rounded-l-md text-sm text-secondary"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
            <FontAwesomeIcon
              icon={isValidEmail ? faEnvelope : faWarning}
              className={isValidEmail ? "text-secondary" : "text-primary"}
            />
          </div>
          <button
            type="button"
            className="w-20 py-3 px-4 inline-flex flex-shrink-0 justify-center items-center rounded-r-md border border-primary transition-all hover:bg-primary font-semibold text-whitetransition-all text-sm"
            onClick={onClick}
          >
            Join
          </button>
        </div>
      )}
      {isSubscribed && (
        <div className="pt-4">
          <div className="block bg-primary text-dark-400 uppercase rounded-md font-bold text-center px-1 py-3">
            Thanks for subscribing!
          </div>
        </div>
      )}
      {hasError && (
        <div className="pt-4">
          <div className="block text-primary font-bold text-center px-1 py-3 uppercase rounded-md border border-primary">
            Something went wrong
          </div>
        </div>
      )}
    </div>
  );
};
