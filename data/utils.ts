import fs from "fs/promises";
import slugify from "slugify";
import { Data } from "../types";

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

export const chunkArray = <T>(arr: T[], chunkSize: number): T[][] => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize) as never);
  }
  return chunks;
};

export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
