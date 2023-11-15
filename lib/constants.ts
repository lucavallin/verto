import { RepositorySortOrder } from "types";

export const USERNAME = {
  minLength: 4,
  maxLength: 25,
  errors: {
    missing: "Username is empty!",
    short: "Username is too short!",
    long: "Username is too long!",
    invalid: "Invalid username!"
  },
  matcher: /[a-zA-Z\s0-9._@]{4,25}/
};

export const EMAIL = {
  errors: {
    missing: "Email is empty!",
    invalid: "Invalid email address!"
  },
  matcher: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
};

export const PASSWORD = {
  minLength: 4,
  errors: {
    missing: "Password is empty!",
    short: "Password is too short!",
    invalid: "Passwords do not match!",
    unconfirmed: "Re-enter your password!"
  },
  matcher: /[\S]{4,}/
};

export const REPOSITORY_SORT_OPTIONS = [
  RepositorySortOrder.LEAST_STARS,
  RepositorySortOrder.MOST_STARS,
  RepositorySortOrder.NONE
];
