import { RepositorySortOrder } from "types";

export const REPOSITORY_SORT_OPTIONS = [
  RepositorySortOrder.LEAST_STARS,
  RepositorySortOrder.MOST_STARS,
  RepositorySortOrder.NONE
];

export const JWT_LIFESPAN = 30;

const USERNAME_MINIMUM_LENGTH = 4;
const USERNAME_MAXIMUM_LENGTH = 25;

export const USERNAME = {
  minLength: USERNAME_MINIMUM_LENGTH,
  maxLength: USERNAME_MAXIMUM_LENGTH,
  errors: {
    missing: "Username is empty!",
    length: `Username must have ${USERNAME_MINIMUM_LENGTH} to ${USERNAME_MAXIMUM_LENGTH} characters!`,
    invalid: "Invalid username!"
  },
  matcher: /^[a-zA-Z\s0-9._@]+$/
};

export const EMAIL = {
  errors: {
    missing: "Email is empty!",
    invalid: "Invalid email address!"
  }
};

const PASSWORD_MINIMUM_LENGTH = 6;

export const PASSWORD = {
  minLength: PASSWORD_MINIMUM_LENGTH,
  errors: {
    missing: "Password is empty!",
    short: `Password must be at least ${PASSWORD_MINIMUM_LENGTH} characters long!`,
    invalid: "Invalid password!",
    diff: "Passwords do not match!",
    unconfirmed: "Re-enter your password!"
  }
};

export const ERROR_MESSAGE = {
  client: "Bad Request",
  server: "Something unexpected happened"
};
