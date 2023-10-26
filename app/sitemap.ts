import { MetadataRoute } from "next";
import config from "./config.mts";
import { getData } from "./data-loader";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = config.meta.siteUrl;
  const data = getData();

  const languageRoutes = data.languages.map((l) => ({
    url: `${siteUrl}/language/${l.id}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const tagRoutes = data.tags.map((t) => ({
    url: `${siteUrl}/tag/${t.id}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const routes = [""].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...languageRoutes, ...tagRoutes];
}
