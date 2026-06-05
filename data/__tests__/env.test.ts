import { getRequiredGitHubToken } from "../env";

describe("env", () => {
  describe("getRequiredGitHubToken", () => {
    it("returns the trimmed GH_PAT value", () => {
      expect(getRequiredGitHubToken("  ghp_test  ")).toBe("ghp_test");
    });

    it("throws a helpful setup error when GH_PAT is missing", () => {
      expect(() => getRequiredGitHubToken(undefined)).toThrow(
        "GH_PAT is required to run `npm run prebuild`",
      );
    });
  });
});
