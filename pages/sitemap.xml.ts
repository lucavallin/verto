import { ServerResponse } from "http";

import { languages, topics } from "../generated.json";
import { CountableTag } from "../types";

export default function SiteMap() {
  // This function must be defined, but getServerSideProps is used instead
}

const generateSiteMap = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
              <loc>https://firstissue.dev</loc>
          </url>
          ${languages
            .map(
              (language: CountableTag) =>
                `<url><loc>https://firstissue.dev/language/${language.id}</loc></url>`
            )
            .join("")}
          ${topics
            .map(
              (topic: CountableTag) =>
                `<url><loc>https://firstissue.dev/topic/${topic.id}</loc></url>`
            )
            .join("")}
      </urlset>
   `;
};

export async function getServerSideProps({ res }: { res: ServerResponse }) {
  // Generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  // Send the XML to the browser
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
}
