import fs from "fs/promises";
import slugify from "slugify";
import { CountableTag as CountableTagModel, Data } from "../types";

export const extendedSlugify = (text: string): string => {
  // symbols to replace with slugify
  slugify.extend({
    "#": "sharp",
    "+": "plus"
  });

  return slugify(text, {
    lower: true,
    strict: true,
    locale: "en"
  });
};

export const writeDataFile = async (data: Data) => {
  await fs.writeFile("data/data.json", JSON.stringify(data));
  console.log("Generated data/data.json");
};

export const generateAndWriteSiteMap = async (data: Data) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://firstissue.dev</loc>
        </url>
        ${data.languages
          .map(
            (language: CountableTagModel) =>
              `<url><loc>https://firstissue.dev/language/${language.id}</loc></url>`
          )
          .join("")}
        ${data.tags
          .map(
            (tag: CountableTagModel) => `<url><loc>https://firstissue.dev/tag/${tag.id}</loc></url>`
          )
          .join("")}
      </urlset>
    `;

  await fs.writeFile("public/sitemap.xml", sitemap);
  console.log("Generated public/sitemap.xml");
};
