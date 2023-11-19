import axios from "axios";
import { signIn, signOut } from "next-auth/react";

import type { IUserCredentials } from "types";

// sends request to the api to get a existing user
export const signinWithCredentials = async (payload: IUserCredentials) => {
  try {
    const { data: user } = await axios.post("/api/auth/signin", payload);

    await signIn("credentials", { ...user, callbackUrl: "/" });
  } catch (error) {
    throw new Error(error.response.data);
  }
};

// sends request to the api to create a new user
export const signupWithCredentials = async (payload: IUserCredentials) => {
  try {
    const { data: user } = await axios.post("/api/auth/signup", payload);

    await signIn("credentials", { ...user, callbackUrl: "/" });
  } catch (error) {
    throw new Error(error.response.data);
  }
};

// kills current session and logs out current user
export const signoutHandler = async () => {
  await signOut({ callbackUrl: "/" });
};

// list of all currently available OAuth providers
export const OAuthProvider = {
  github: () => signIn("github", { callbackUrl: "/" })
};
