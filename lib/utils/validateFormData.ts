import { MINIMUM_LENGTH } from "../constants";
import { emailErrors, passwordErrors, usernameErrors } from "../errors";
import { emailMatcher, usernameMatcher } from "../regex";

interface SigninFormData {
  email: string;
  password: string;
}

export interface SignupResponse extends SigninFormData {
  username: string;
}

const validateUsername = (username: string) => {
  if (username?.length === 0) throw new Error(usernameErrors.missing);
  if (username.length < MINIMUM_LENGTH.USERNAME) throw new Error(usernameErrors.short);

  if (!username.match(usernameMatcher)) throw new Error(usernameErrors.invalid);
};

const validateEmail = (email: string) => {
  if (email?.length === 0) throw new Error(emailErrors.missing);
  if (!email.match(emailMatcher)) throw new Error(emailErrors.invalid);
};

const validatePassword = (password: string) => {
  if (password?.length === 0) throw new Error(passwordErrors.missing);
  if (password.length < MINIMUM_LENGTH.PASSWORD) throw new Error(passwordErrors.short);
};

const compareBothPasswords = (password: string, confirmPassword: string) => {
  validatePassword(password);
  if (confirmPassword?.length === 0) throw new Error(passwordErrors.unconfirmed);
  if (password !== confirmPassword) throw new Error(passwordErrors.invalid);
};

export const validateSignupFormData = ({
  username,
  email,
  password,
  confirmPassword
}: SignupResponse & { confirmPassword: string }): SignupResponse => {
  validateUsername(username);
  validateEmail(email);
  compareBothPasswords(password, confirmPassword);
  return { username, email, password };
};

export const validateSigninFormData = ({ email, password }: SigninFormData): SigninFormData => {
  validateEmail(email);
  validatePassword(password);
  return { email, password };
};
