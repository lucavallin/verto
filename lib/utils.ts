import { MINIMUM_LENGTH } from "./constants";
import { emailErrors, passwordErrors, usernameErrors } from "./errors";
import { emailMatcher, usernameMatcher } from "./regex";

interface SignupFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const validateFormData = ({
  username,
  email,
  password,
  confirmPassword
}: SignupFormData) => {
  validateUsername(username);
  validateEmail(email);
  compareBothPasswords(password, confirmPassword);
  return { username, email, password };
};

const validateUsername = (username: string) => {
  if (username?.length === 0) throw new Error(usernameErrors.missing);
  if (username.length < MINIMUM_LENGTH.USERNAME) throw new Error(usernameErrors.short);

  if (!username.match(usernameMatcher)) throw new Error(usernameErrors.invalid);
};

const validateEmail = (email: string) => {
  if (email?.length === 0) throw new Error(emailErrors.missing);
  if (!email.match(emailMatcher)) throw new Error(emailErrors.invalid);
};

const compareBothPasswords = (password: string, confirmPassword: string) => {
  if (password?.length === 0) throw new Error(passwordErrors.missing);
  if (confirmPassword?.length === 0) throw new Error(passwordErrors.unconfirmed);
  if (password.length < MINIMUM_LENGTH.PASSWORD) throw new Error(passwordErrors.short);
  if (password !== confirmPassword) throw new Error(passwordErrors.invalid);
};
