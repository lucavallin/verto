import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

import { JWT_LIFESPAN } from "lib/constants";
import { getGithubClient, secret } from "lib/env";
import { IUserPublicData } from "types";

const providers: NextAuthOptions["providers"] = [
  GithubProvider(getGithubClient()),
  CredentialsProvider({
    id: "credentials",
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "text" },
      username: { label: "Username", type: "text" }
    },
    authorize: async ({ email, username }: IUserPublicData) => {
      return { id: "", email, name: username };
    }
  })
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
  }
};

const pages: NextAuthOptions["pages"] = {
  signIn: "/auth/signin"
};

const session: NextAuthOptions["session"] = {
  strategy: "jwt",
  maxAge: 60 * 60 * 24 * JWT_LIFESPAN
};

export const options: NextAuthOptions = {
  providers,
  pages,
  session,
  callbacks,
  secret
};

// gets user details of currenly logged in user
export const getUserCredentials = async () => {
  const session = await getServerSession(options);
  if (!session || !session.user) {
    return null;
  }
  const { email, name: username } = session.user;
  return { email, username };
};
