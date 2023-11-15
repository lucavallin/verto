import { signinWithCredentials } from "lib/api/actions";
import { validateSigninFormData } from "lib/utils";

export const handleSignin = async (
  rawFormData: HTMLFormElement,
  handleError: (msg: string) => void
) => {
  try {
    const processedFormData = validateSigninFormData({
      email: rawFormData.email.value.trim(),
      password: rawFormData.password.value
    });

    await signinWithCredentials(processedFormData);
  } catch (error) {
    handleError(error.message);
  }
};
