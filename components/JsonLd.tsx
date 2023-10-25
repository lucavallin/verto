import Script from "next/script";
import { Graph } from "schema-dts";
import config from "../app/config.mts";

const jsonLdGraph: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "website",
      url: config.meta.siteUrl
    }
  ]
};

export const JsonLd = () => {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdGraph)
      }}
    />
  );
};
