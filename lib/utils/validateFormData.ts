import { IUser } from "lib/db/models/users";
import { EMAIL, PASSWORD, USERNAME } from "../constants";

type SigninFormData = Omit<IUser, "username">;

const validateUsername = (username: string) => {
  if (username?.length === 0) throw new Error(USERNAME.errors.missing);
  if (username.length < USERNAME.minLength) throw new Error(USERNAME.errors.short);
  if (username.length > USERNAME.maxLength) throw new Error(USERNAME.errors.long);

  if (!username.match(USERNAME.matcher)) throw new Error(USERNAME.errors.invalid);
};

const validateEmail = (email: string) => {
  if (email?.length === 0) throw new Error(EMAIL.errors.missing);
  if (!email.match(EMAIL.matcher)) throw new Error(EMAIL.errors.invalid);
};

const validatePassword = (password: string) => {
  if (password?.length === 0) throw new Error(PASSWORD.errors.missing);
  if (password.length < PASSWORD.minLength) throw new Error(PASSWORD.errors.short);
};

const compareBothPasswords = (password: string, confirmPassword: string) => {
  validatePassword(password);
  if (confirmPassword?.length === 0) throw new Error(PASSWORD.errors.unconfirmed);
  if (password !== confirmPassword) throw new Error(PASSWORD.errors.invalid);
};

export const validateSignupFormData = ({
  username,
  email,
  password,
  confirmPassword
}: IUser & { confirmPassword: string }): IUser => {
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
