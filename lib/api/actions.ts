import { signIn, signOut } from "next-auth/react";

import axios from "axios";
import { type SignupResponse } from "../utils";

interface SigninPayload {
  email: string;
  password: string;
}

export const OAuthProvider = {
  github: () => signIn("github", { callbackUrl: "/" })
};

export const signoutHandler = async () => {
  await signOut({ callbackUrl: "/" });
};

export const signinWithCredentials = async (payload: SigninPayload) => {
  const { data } = await axios.post("/api/auth/signin", payload, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const { user, error } = data;
  if (error) {
    throw new Error(error);
  }
  await signIn("credentials", { ...user, callbackUrl: "/" });
};

export const signupWithCredentials = async (payload: SignupResponse) => {
  const { data } = await axios.post("/api/auth/signup", payload, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const { user, error } = data;
  if (error) {
    throw new Error(error);
  }
  await signIn("credentials", { ...user, callbackUrl: "/" });
};
