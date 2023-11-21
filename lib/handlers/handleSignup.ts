import axios, { AxiosError } from "axios";
import { getBaseUrl } from "lib/env";
import { validateSignupFormData } from "lib/utils";
import { signIn } from "next-auth/react";

export const handleSignup = async (
  rawFormData: HTMLFormElement,
  handleError: (msg: string) => void
) => {
  try {
    const userPayload = validateSignupFormData({
      username: rawFormData.username.value.trim(),
      email: rawFormData.email.value.trim(),
      password: rawFormData.password.value,
      confirmPassword: rawFormData.confirmPassword.value
    });

    const { data: user } = await axios.post("/api/auth/signup", userPayload);

    await signIn("credentials", { ...user, callbackUrl: getBaseUrl() });
  } catch (error) {
    if (error instanceof AxiosError) {
      handleError(error.response?.data);
    } else {
      handleError(error.message);
    }
  }
};
