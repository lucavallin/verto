import db from "lib/db";
import { APIClientError, comparePasswords, hashPassword } from "lib/utils";
import type { IUser, IUserCredentials, IUserPublicData } from "types";

// returns existing user, throws error if user doesn't exist
export const getUser = async ({ email, password }: IUserCredentials): Promise<IUserPublicData> => {
  await db.connect();

  const user = await db.users.findOne({ email });
  if (!user) {
    throw new APIClientError("User not found", { statusCode: 404 });
  }

  const isPasswordCorrect = await comparePasswords(password, user.password);
  if (!isPasswordCorrect) {
    throw new APIClientError("Incorrect password", { statusCode: 401 });
  }

  return { email: user.email, username: user.username };
};

// creates a new user, throws an error if it already exists
export const createUser = async ({
  email,
  password,
  username
}: IUser): Promise<IUserPublicData> => {
  await db.connect();

  const existingUser = await db.users.findOne({ email });
  if (existingUser) {
    throw new APIClientError("User already exists", { statusCode: 409 });
  }

  const hashedPassword = await hashPassword(password);

  const user = new db.users({ email, username, password: hashedPassword });
  await user.save();

  return { email, username };
};
