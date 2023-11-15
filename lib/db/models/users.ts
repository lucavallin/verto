import { MINIMUM_LENGTH } from "lib/constants";
import { emailErrors, passwordErrors, usernameErrors } from "lib/errors";
import { emailMatcher, usernameMatcher } from "lib/regex";
import { Schema, model, models } from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    unique: false,
    required: [true, usernameErrors.missing],
    match: [usernameMatcher, usernameErrors.invalid],
    minLength: [MINIMUM_LENGTH.USERNAME, usernameErrors.short]
  },
  email: {
    type: String,
    unique: true,
    required: [true, emailErrors.missing],
    match: [emailMatcher, emailErrors.invalid]
  },
  password: {
    type: String,
    required: [true, passwordErrors.missing],
    minLength: [MINIMUM_LENGTH.PASSWORD, passwordErrors.short]
  }
});

const User = models.User || model<IUser>("User", UserSchema);

export default User;
