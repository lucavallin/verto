import { MINIMUM_LENGTH } from "lib/constants";
import { emailErrors, passwordErrors, usernameErrors } from "lib/errors";
import { emailMatcher, usernameMatcher } from "lib/regex";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
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
    minLength: [MINIMUM_LENGTH.PASSWORD, passwordErrors.short],
    select: false
  }
});

const User = models.User || model("User", UserSchema);

export default User;
