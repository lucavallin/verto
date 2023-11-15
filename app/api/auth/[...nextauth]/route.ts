import { options as authOptions } from "lib/api/auth";
import NextAuth from "next-auth/next";

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
