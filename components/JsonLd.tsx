import Script from "next/script";
import { Graph } from "schema-dts";
import config from "../app/config.mts";

const jsonLdGraph: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "website",
      url: config.meta.siteUrl,
      author: {
        "@id": "person"
      },
      publisher: {
        "@id": "person"
      }
    },
    {
      "@type": "Person",
      "@id": "person",
      name: config.author.name,
      url: config.author.website,
      image: `${config.meta.siteUrl}/images/luca_cavallin.png`,
      sameAs: [
        config.author.linkedin,
        config.author.github,
        config.author.reddit,
        config.meta.siteUrl
      ],
      jobTitle: config.author.job,
      worksFor: {
        "@type": "Organization",
        name: config.author.company
      }
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
