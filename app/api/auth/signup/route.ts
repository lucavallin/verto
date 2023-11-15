import { NextResponse } from "next/server";

import db from "lib/db";
import User, { type IUser } from "lib/db/models/users";
import { hashPassword } from "lib/utils";

export type Response = { error: string } | { user: Omit<IUser, "password"> };

export async function POST(request: Request): Promise<NextResponse<Response>> {
  try {
    const userPayload = (await request.json()) as IUser;

    await db.connect();

    const existingUser = await User.findOne({ email: userPayload?.email });
    if (existingUser) {
      throw new Error("User already exists", { cause: "BAD_REQUEST" });
    }

    userPayload.password = await hashPassword(userPayload.password);
    const user = new User(userPayload);
    await user.save();

    const response = { email: userPayload.email, username: userPayload.username };

    return NextResponse.json({ user: response }, { status: 201 });
  } catch (err) {
    console.log(err.message);

    if (err.cause !== "BAD_REQUEST") {
      err.message = "Something unexpected happened";
    }
    return NextResponse.json({ error: err.message });
  }
}
