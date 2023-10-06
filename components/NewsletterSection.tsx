import { useEffect } from "react";

import Script from "next/script";
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
  useEffect(() => {
    window.CustomSubstackWidget = {
      element: "#substack-embed",
      substackUrl: process.env.NEXT_PUBLIC_NEWSLETTER_URL,
      placeholder: "your email address",
      buttonText: "SUBSCRIBE",
      theme: "custom",
      colors: {
        primary: "#cb3364",
        input: "#ffffff",
        email: "#52575c",
        text: "#16181d"
      }
    };
  }, []);

  return (
    <div className="pt-6">
      <SectionTitle className="mb-2" text="Join the Newsletter" />
      <p className="text-sm">
        Join &quot;The lucavallin Newsletter&quot; to receive curated issues from FirstIssue and
        other articles in your inbox every other week.
      </p>

      <Script src="https://substackapi.com/widget.js" strategy="lazyOnload" />
      <div id="substack-embed" className="relative mt-4 flex rounded-md"></div>
    </div>
  );
};
