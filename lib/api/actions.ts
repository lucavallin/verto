import { signIn, signOut } from "next-auth/react";

export const signinWithCredentials = () => {
  signIn("credentials");
};

export const signoutAndGoHome = () => {
  signOut({ callbackUrl: "/" });
};
