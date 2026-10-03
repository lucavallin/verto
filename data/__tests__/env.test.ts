import { spawnSync } from "child_process";
import { mkdtempSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join, resolve } from "path";
import { getRequiredGitHubToken } from "../env";

describe("env", () => {
  describe("loadPrebuildEnv", () => {
    it.each([
      { filename: ".env", mode: undefined, shellToken: undefined },
      { filename: ".env.local", mode: undefined, shellToken: undefined },
      { filename: ".env.production.local", mode: undefined, shellToken: undefined },
      { filename: ".env.development.local", mode: "development" as const, shellToken: undefined },
      { filename: ".env.local", mode: undefined, shellToken: "ghp_shell" }
    ])(
      "loads $filename in mode $mode, with shell token $shellToken",
      ({ filename, mode, shellToken }) => {
        const directory = mkdtempSync(join(tmpdir(), "verto-env-"));
        const env: NodeJS.ProcessEnv = {
          ...process.env,
          NODE_ENV: mode ?? "production",
          TS_NODE_PROJECT: resolve(__dirname, "../../tsconfig.json")
        };
        delete env.GH_PAT;
        if (!mode) Reflect.deleteProperty(env, "NODE_ENV");
        if (shellToken) env.GH_PAT = shellToken;

        try {
          writeFileSync(join(directory, filename), "GH_PAT=ghp_file\n");
          // Run in a fresh process to isolate @next/env's cached environment and file list.
          const result = spawnSync(
            process.execPath,
            [
              "-r",
              require.resolve("ts-node/register"),
              "-e",
              `const { loadPrebuildEnv, getRequiredGitHubToken } = require(${JSON.stringify(resolve(__dirname, "../env.ts"))});
             loadPrebuildEnv();
             if (getRequiredGitHubToken() !== ${JSON.stringify(shellToken ?? "ghp_file")}) process.exit(1);`
            ],
            { cwd: directory, env, encoding: "utf8", timeout: 10000 }
          );
          expect(result.stderr).toBe("");
          expect(result.status).toBe(0);
        } finally {
          rmSync(directory, { recursive: true, force: true });
        }
      }
    );
  });

  describe("getRequiredGitHubToken", () => {
    const originalToken = process.env.GH_PAT;

    beforeEach(() => {
      delete process.env.GH_PAT;
    });

    afterEach(() => {
      if (originalToken === undefined) delete process.env.GH_PAT;
      else process.env.GH_PAT = originalToken;
    });

    it("returns the trimmed GH_PAT value", () => {
      expect(getRequiredGitHubToken("  ghp_test  ")).toBe("ghp_test");
    });

    it.each([undefined, "", "   "])("rejects a missing or blank token (%p)", (token) => {
      expect(() => getRequiredGitHubToken(token)).toThrow(
        "GH_PAT is required to run `npm run prebuild`"
      );
    });

    it("reads the token from the environment when no argument is passed", () => {
      process.env.GH_PAT = "  ghp_shell  ";
      expect(getRequiredGitHubToken()).toBe("ghp_shell");
    });

    it("rejects an explicit blank token even when the shell has a token", () => {
      process.env.GH_PAT = "ghp_shell";
      expect(() => getRequiredGitHubToken("")).toThrow("GH_PAT is required");
    });
  });
});
