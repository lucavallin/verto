import { MetadataRoute } from "next";
import config from "./config.mts";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${config.meta.siteUrl}/sitemap.xml`,
    host: config.meta.siteUrl
  };
}
