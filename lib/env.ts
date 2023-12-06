import isEmpty from "validator/lib/isEmpty";

export const secret = process.env.NEXTAUTH_SECRET as string;

export const getMongoUri = (): string => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri || isEmpty(uri)) throw new Error("Missing MONGO_URI in ENV");

    return uri;
  } catch (err) {
    throw new Error("Couldn't connect to Database", {
      cause: err.message
    });
  }
};

interface AuthClientCredentials {
  clientId: string;
  clientSecret: string;
}

export const getGithubClient = (): AuthClientCredentials => {
  try {
    const clientId = process.env.GITHUB_CLIENT_ID;
    if (!clientId || isEmpty(clientId)) {
      throw new Error("Missing GITHUB_CLIENT_ID in ENV");
    }

    const clientSecret = process.env.GITHUB_CLIENT_SECRET;
    if (!clientSecret || isEmpty(clientSecret)) {
      throw new Error("Missing GITHUB_CLIENT_SECRET in ENV");
    }

    return { clientId, clientSecret };
  } catch (err) {
    throw new Error("Couldn't connect to Github", {
      cause: err.message
    });
  }
};

export const getGitlabClient = (): AuthClientCredentials => {
  try {
    const clientId = process.env.GITLAB_CLIENT_ID;
    if (!clientId || isEmpty(clientId)) {
      throw new Error("Missing GITLAB_CLIENT_ID in ENV");
    }

    const clientSecret = process.env.GITLAB_CLIENT_SECRET;
    if (!clientSecret || isEmpty(clientSecret)) {
      throw new Error("Missing GITLAB_CLIENT_SECRET in ENV");
    }

    return { clientId, clientSecret };
  } catch (err) {
    throw new Error("Couldn't connect to Gitlab", {
      cause: err.message
    });
  }
};
