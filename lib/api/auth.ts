import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

const providers: NextAuthOptions["providers"] = [
  GithubProvider({
    clientId: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!
  }),
  CredentialsProvider({
    id: "credentials",
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "text" },
      username: { label: "Username", type: "text" }
    },
    authorize: async ({ email, username }: { email: string; username: string }) => {
      return { id: "", email, name: username };
    }
  })
];

const callbacks: NextAuthOptions["callbacks"] = {
  jwt: async ({ token, user }) => {
    if (user) token.user = user;
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
  maxAge: 60 * 60 * 24 * 30
};

export const options: NextAuthOptions = {
  providers,
  pages,
  session,
  callbacks,
  secret: process.env.NEXTAUTH_SECRET
};

export const getUserCredentials = async () => {
  const session = await getServerSession(options);
  if (!session || !session.user) {
    return null;
  }
  const { email, name: username } = session.user;
  return { email, username };
};
