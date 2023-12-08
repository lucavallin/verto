import { NextAuthOptions, getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GitlabProvider from "next-auth/providers/gitlab";

import { JWT_LIFESPAN } from "lib/constants";
import { getGithubClient, getGitlabClient, secret } from "lib/env";
import db from "./db";

const providers: NextAuthOptions["providers"] = [
  GithubProvider(getGithubClient()),
  GitlabProvider(getGitlabClient())
];

const callbacks: NextAuthOptions["callbacks"] = {
  jwt: async ({ token, user, account }) => {
    if (user) token.user = user;
    if (account) token.accessToken = account.access_token;
    return token;
  },
  session: async ({ session, token }) => {
    session.user = token.user as typeof session.user;
    return session;
  },
  signIn: async ({ user }) => {
    const { name, email } = user;
    await db.connect();
    db.user
      .findOneAndUpdate({ email }, { name }, { upsert: true })
      .then((fetchedUser) => {
        console.log(fetchedUser);
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
    return true;
  }
};

const pages: NextAuthOptions["pages"] = {
  signIn: "/auth/signin"
};

const session: NextAuthOptions["session"] = {
  strategy: "jwt",
  maxAge: 60 * 60 * 24 * JWT_LIFESPAN
};

export const options = {
  providers,
  pages,
  session,
  callbacks,
  secret
} satisfies NextAuthOptions;

// gets details of currenly logged in user
export const getUserCredentials = async () => {
  const session = await getServerSession(options);
  if (!session || !session.user) {
    return null;
  }
  const { email, name: username } = session.user;
  return { email, username };
};
