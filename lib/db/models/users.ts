import { Document, Schema, model, models } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"]
    }
  },
  {
    timestamps: true
  }
);

const User = models.User || model<IUser>("User", UserSchema);

export default User;
