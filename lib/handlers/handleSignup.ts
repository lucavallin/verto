import { signupWithCredentials } from "lib/api/actions";
import { validateSignupFormData } from "lib/utils";

export const handleSignup = async (
  rawFormData: HTMLFormElement,
  handleError: (msg: string) => void
) => {
  try {
    const processedFormData = validateSignupFormData({
      username: rawFormData.username.value.trim(),
      email: rawFormData.email.value.trim(),
      password: rawFormData.password.value,
      confirmPassword: rawFormData.confirmPassword.value
    });

    await signupWithCredentials(processedFormData);
  } catch (error) {
    console.log("Error occured: ", error);
    handleError(error.message);
  }
};
