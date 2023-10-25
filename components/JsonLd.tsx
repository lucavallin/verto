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
      name: "Luca Cavallin",
      url: config.author.website,
      image: config.meta.siteUrl + "/images/luca_cavallin.png",
      sameAs: [
        config.author.xtwitter,
        config.author.linkedin,
        config.author.youtube,
        config.author.github,
        config.author.mastodon,
        config.author.reddit,
        config.author.medium,
        config.author.devto,
        config.author.hashnode,
        config.author.stackoverflow,
        config.author.producthunt,
        config.author.discord,
        config.author.calendly,
        config.author.newsletter,
        config.meta.siteUrl
      ],
      jobTitle: "Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "GitHub, Inc."
      }
    },
    {
      "@type": "WebPage",
      "@id": config.meta.siteUrl,
      url: config.meta.siteUrl,
      name: config.meta.title,
      inLanguage: config.meta.locale,
      description: config.meta.description,
      author: {
        "@id": "person"
      },
      publisher: {
        "@id": "person"
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
