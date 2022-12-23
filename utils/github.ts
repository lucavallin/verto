import { retry } from "@octokit/plugin-retry";
import { throttling } from "@octokit/plugin-throttling";
import { Octokit } from "@octokit/rest";

const MyOctokit = Octokit.plugin(throttling, retry);
export const octokit = new MyOctokit({
  auth: process.env.GITHUB_TOKEN,
  throttle: {
    onRateLimit: (
      retryAfter: any,
      options: { method: any; url: any; request: { retryCount: number } }
    ) => {
      octokit.log.warn(`Request quota exhausted for request ${options.method} ${options.url}`);

      // Retry twice after hitting a rate limit error, then give up
      if (options.request.retryCount <= 2) {
        console.log(`Retrying after ${retryAfter} seconds!`);
        return true;
      }
    },
    onSecondaryRateLimit: (
      _retryAfter: any,
      options: { method: any; url: any },
      octokit: { log: { warn: (arg0: string) => void } }
    ) => {
      // does not retry, only logs a warning
      octokit.log.warn(`Secondary quota detected for request ${options.method} ${options.url}`);
    }
  }
});
