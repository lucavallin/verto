import fs from "fs/promises";
import { Data } from "../../types";
import { chunkArray, extendedSlugify, sleep, writeDataFile } from "../utils";

describe("utils", () => {
  describe("extendedSlugify", () => {
    it("should replace '#' with 'sharp' in the slug", () => {
      const text = "Hello #world";
      const expected = "hello-sharpworld";
      expect(extendedSlugify(text)).toEqual(expected);
    });

    it("should replace '+' with 'plus' in the slug", () => {
      const text = "Hello +world";
      const expected = "hello-plusworld";
      expect(extendedSlugify(text)).toEqual(expected);
    });

    it("should convert the text to lowercase", () => {
      const text = "Hello World";
      const expected = "hello-world";
      expect(extendedSlugify(text)).toEqual(expected);
    });

    it("should remove any special characters from the slug", () => {
      const text = "Hello World!";
      const expected = "hello-world";
      expect(extendedSlugify(text)).toEqual(expected);
    });
  });

  describe("writeDataFile", () => {
    it("should write the data to a file", async () => {
      const data: Data = {
        languages: [
          {
            count: 1,
            display: "JavaScript",
            id: "javascript",
          },
        ],
        tags: [
          {
            count: 1,
            display: "UI",
            id: "ui",
          },
        ],
        repositories: [],
      };
      await writeDataFile(data);
      const fileContent = await fs.readFile("data/data.json", "utf-8");
      expect(JSON.parse(fileContent)).toEqual(data);
    });
  });

  describe("chunkArray", () => {
    it("should split an array into chunks of the specified size", () => {
      const arr = [1, 2, 3, 4, 5, 6];
      const chunkSize = 2;
      const expected = [
        [1, 2],
        [3, 4],
        [5, 6],
      ];
      expect(chunkArray(arr, chunkSize)).toEqual(expected);
    });

    it("should return an empty array if the input array is empty", () => {
      const arr: number[] = [];
      const chunkSize = 2;
      const expected: number[][] = [];
      expect(chunkArray(arr, chunkSize)).toEqual(expected);
    });
  });

  describe("sleep", () => {
    it("should wait for the specified amount of time", async () => {
      const start = Date.now();
      const ms = 100;
      await sleep(ms);
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(ms);
    });
  });
});
