import { EMAIL, PASSWORD, USERNAME } from "lib/constants";
import { Schema, model, models } from "mongoose";

export interface IUser {
  email: string;
  password: string;
  username: string;
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    unique: false,
    required: [true, USERNAME.errors.missing],
    match: [USERNAME.matcher, USERNAME.errors.invalid],
    minLength: [USERNAME.minLength, USERNAME.errors.short],
    maxlength: [USERNAME.maxLength, USERNAME.errors.long]
  },
  email: {
    type: String,
    unique: true,
    required: [true, EMAIL.errors.missing],
    match: [EMAIL.matcher, EMAIL.errors.invalid]
  },
  password: {
    type: String,
    required: [true, PASSWORD.errors.missing],
    match: [PASSWORD.matcher, PASSWORD.errors.invalid],
    minLength: [PASSWORD.minLength, PASSWORD.errors.short]
  }
});

const User = models.User || model<IUser>("User", UserSchema);

export default User;
