import { Source } from "../../types";

describe("prebuild", () => {
  const originalToken = process.env.GH_PAT;
  const originalExitCode = process.exitCode;
  const originalArgv = process.argv;
  const githubSource: Source = {
    name: "GitHub",
    provider: "github",
    repositories: ["owner/repo"],
    labels: []
  };
  const processSource = jest.fn();
  const writeDataFile = jest.fn();

  beforeEach(() => {
    jest.resetModules();
    delete process.env.GH_PAT;
    process.exitCode = 0;
    process.argv = ["node", "data/index.ts"];
    processSource.mockReset().mockResolvedValue([]);
    writeDataFile.mockReset().mockResolvedValue(undefined);
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.doMock("@next/env", () => ({ loadEnvConfig: jest.fn() }));
    jest.doMock("../shared", () => ({
      processSource,
      getFilteredLanguages: () => [],
      getFilteredTags: () => []
    }));
    jest.doMock("../utils", () => ({ writeDataFile }));
  });

  afterEach(() => {
    if (originalToken === undefined) delete process.env.GH_PAT;
    else process.env.GH_PAT = originalToken;
    process.exitCode = originalExitCode;
    process.argv = originalArgv;
    jest.restoreAllMocks();
  });

  const runPrebuild = async (sources = [githubSource]) => {
    jest.doMock("../../config.json", () => sources);
    await jest.isolateModulesAsync(async () => {
      await import("../index");
      await new Promise((resolve) => setImmediate(resolve));
    });
  };

  it("fails before fetching or writing data when the GitHub token is missing", async () => {
    await runPrebuild();
    expect(process.exitCode).toBe(1);
    expect(processSource).not.toHaveBeenCalled();
    expect(writeDataFile).not.toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(expect.stringContaining("GH_PAT is required"));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("root of the project"));
    expect((console.log as jest.Mock).mock.invocationCallOrder[0]).toBeLessThan(
      (console.error as jest.Mock).mock.invocationCallOrder[0]
    );
  });

  it.each([401, 403, 500])(
    "keeps the committed data fallback for API status %i",
    async (status) => {
      process.env.GH_PAT = "ghp_test";
      const error = Object.assign(new Error("API request failed"), { status });
      processSource.mockRejectedValue(error);
      await runPrebuild();
      expect(process.exitCode).toBe(0);
      expect(writeDataFile).not.toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error).toHaveBeenCalledWith(`API request failed (status ${status})`);
    }
  );

  it("prints the complete error only in verbose mode", async () => {
    process.env.GH_PAT = "ghp_test";
    process.argv.push("--verbose");
    const error = new Error("API request failed");
    processSource.mockRejectedValue(error);
    await runPrebuild();
    expect(console.error).toHaveBeenCalledWith(error);
    expect(process.exitCode).toBe(0);
  });

  it("processes GitLab-only sources without a GitHub token", async () => {
    const source: Source = { ...githubSource, name: "GitLab", provider: "gitlab" };
    await runPrebuild([source]);
    expect(processSource).toHaveBeenCalledWith(source);
    expect(writeDataFile).toHaveBeenCalledWith({ repositories: [], languages: [], tags: [] });
    expect(process.exitCode).toBe(0);
    expect(console.error).not.toHaveBeenCalled();
  });
});
