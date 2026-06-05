import { loadEnvConfig } from "@next/env";

export class MissingGitHubTokenError extends Error {
  constructor() {
    super(
      [
        "GH_PAT is required to run `npm run prebuild`.",
        "Set it in your shell or add it to `.env.local`, for example:",
        "GH_PAT=ghp_your_token_here npm run prebuild",
      ].join("\n"),
    );
    this.name = "MissingGitHubTokenError";
  }
}

export const loadPrebuildEnv = () => {
  loadEnvConfig(process.cwd());
};

export const getRequiredGitHubToken = (token = process.env.GH_PAT): string => {
  const normalizedToken = token?.trim();

  if (!normalizedToken) {
    throw new MissingGitHubTokenError();
  }

  return normalizedToken;
};
