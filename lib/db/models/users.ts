import { EMAIL, PASSWORD, USERNAME } from "lib/constants";
import { Schema, model, models } from "mongoose";
import { IUser } from "types";

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    unique: false,
    required: [true, USERNAME.errors.missing],
    match: [USERNAME.matcher, USERNAME.errors.invalid],
    minLength: [USERNAME.minLength, USERNAME.errors.length],
    maxlength: [USERNAME.maxLength, USERNAME.errors.length]
  },
  email: {
    type: String,
    unique: true,
    required: [true, EMAIL.errors.missing]
  },
  password: {
    type: String,
    required: [true, PASSWORD.errors.missing],
    minlength: [PASSWORD.minLength, PASSWORD.errors.short]
  }
});

const User = models.User || model<IUser>("User", UserSchema);

export default User;
