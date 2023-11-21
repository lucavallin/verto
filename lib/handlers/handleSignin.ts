import axios, { AxiosError } from "axios";
import { getBaseUrl } from "lib/env";
import { validateSigninFormData } from "lib/utils";
import { signIn } from "next-auth/react";

export const handleSignin = async (
  rawFormData: HTMLFormElement,
  handleError: (msg: string) => void
) => {
  try {
    const userPayload = validateSigninFormData({
      email: rawFormData.email.value.trim(),
      password: rawFormData.password.value
    });

    const { data: user } = await axios.post("/api/auth/signin", userPayload);

    await signIn("credentials", { ...user, callbackUrl: getBaseUrl() });
  } catch (error) {
    if (error instanceof AxiosError) {
      handleError(error.response?.data);
    } else {
      handleError(error.message);
    }
  }
};
