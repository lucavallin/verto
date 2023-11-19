import contains from "validator/lib/contains";
import equals from "validator/lib/equals";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import isLength from "validator/lib/isLength";
import matches from "validator/lib/matches";

import { IUser, IUserCredentials } from "types";
import { EMAIL, PASSWORD, USERNAME } from "../constants";

export const validateSigninFormData = ({ email, password }: IUserCredentials): IUserCredentials => {
  validateEmail(email);
  validatePassword(password);

  return { email, password };
};

export const validateSignupFormData = ({
  username,
  email,
  password,
  confirmPassword
}: IUser & { confirmPassword: string }): IUser => {
  validateUsername(username);
  validateEmail(email);
  validatePassword(password);
  compareBothPasswords(password, confirmPassword);

  return { username, email, password };
};

// Checks the username
const validateUsername = (username: string) => {
  if (isEmpty(username)) throw new Error(USERNAME.errors.missing);

  if (!isLength(username, { min: USERNAME.minLength, max: USERNAME.maxLength }))
    throw new Error(USERNAME.errors.length);

  if (!matches(username, USERNAME.matcher) || contains(username, "  "))
    throw new Error(USERNAME.errors.invalid);
};

// Checks the email address
const validateEmail = (email: string) => {
  if (isEmpty(email)) throw new Error(EMAIL.errors.missing);

  if (!isEmail(email)) throw new Error(EMAIL.errors.invalid);
};

// Checks the password
const validatePassword = (password: string) => {
  if (isEmpty(password)) throw new Error(PASSWORD.errors.missing);

  if (!isLength(password, { min: PASSWORD.minLength })) throw new Error(PASSWORD.errors.short);

  if (contains(password, " ")) throw new Error(PASSWORD.errors.invalid);
};

// Checks if the password entered second time matches original password
const compareBothPasswords = (password: string, confirmPassword: string) => {
  if (isEmpty(confirmPassword)) throw new Error(PASSWORD.errors.unconfirmed);

  if (!equals(password, confirmPassword)) throw new Error(PASSWORD.errors.diff);
};
