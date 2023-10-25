"use client";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faSpinner, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onClick = () => {
    const valid = isEmail(email);
    setIsValidEmail(valid);
    if (!valid) {
      return;
    }

    setIsSubmitting(true);

    fetch("https://substackapi.com/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        domain: "lucavallin.substack.com"
      })
    })
      .then(() => setIsSubscribed(true))
      .catch(() => {
        setHasError(true);
        setTimeout(() => setHasError(false), 3000);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="mt-2 flex">
      {!isSubscribed && !hasError && (
        <div className="relative mt-4 flex rounded-md">
          <input
            type="text"
            className="block w-full rounded-l-md border-2 border-yellow px-4 py-3 pl-11 text-black focus:border-yellow focus:outline-none"
            aria-label="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4">
            {isSubmitting ? (
              <FontAwesomeIcon icon={faSpinner} className="animate-spin text-yellow" />
            ) : (
              <FontAwesomeIcon
                icon={isValidEmail ? faEnvelope : faWarning}
                className={isValidEmail ? "text-black" : "text-yellow"}
              />
            )}
          </div>
          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center rounded-r-md border-2 border-l-0 border-yellow px-4 py-3 text-lg font-semibold uppercase text-yellow transition-all hover:bg-yellow hover:text-black"
            onClick={onClick}
          >
            Join
          </button>
        </div>
      )}
      {isSubscribed && (
        <div className="w-full pt-4">
          <div className="block rounded-md bg-yellow px-4 py-3 text-center font-bold uppercase text-black">
            Thanks for subscribing!
          </div>
        </div>
      )}
      {hasError && (
        <div className="w-full pt-4">
          <div className="block rounded-md border border-yellow px-4 py-3 text-center font-bold uppercase text-black">
            Something went wrong
          </div>
        </div>
      )}
    </div>
  );
};
