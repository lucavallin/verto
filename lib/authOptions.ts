import { compare } from "bcryptjs";
import { connectDB } from "lib/db/connectDB";
import User from "lib/db/models/users";
import { NextAuthOptions } from "next-auth";
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
      password: { label: "Password", type: "password" }
    },
    authorize: async (credentials) => {
      await connectDB().catch((err) => {
        throw new Error(err);
      });
      const user = await User.findOne({
        email: credentials?.email
      }).select("+password");
      if (!user) {
        throw new Error("Invalid credentials");
      }
      const isPasswordCorrect = await compare(credentials!.password, user.password);
      if (!isPasswordCorrect) {
        throw new Error("Invalid credentials");
      }
      return user;
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
  signIn: "/auth/signup"
};

const session: NextAuthOptions["session"] = {
  strategy: "jwt"
};

export default {
  providers,
  pages,
  session,
  callbacks
} as NextAuthOptions;
