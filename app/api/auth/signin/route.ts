import { NextResponse } from "next/server";

import db from "lib/db";
import User, { type IUser } from "lib/db/models/users";
import { comparePasswords } from "lib/utils";
import { Response } from "../signup/route";

export async function POST(request: Request): Promise<NextResponse<Response>> {
  try {
    const { email, password } = (await request.json()) as IUser;

    await db.connect();

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found", { cause: "BAD_REQUEST" });
    }

    const isPasswordCorrect = await comparePasswords(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Incorrect password", { cause: "BAD_REQUEST" });
    }

    const response = { email: user.email, username: user.username };

    return NextResponse.json({ user: response }, { status: 200 });
  } catch (err) {
    console.log(err.message);

    if (err.cause !== "BAD_REQUEST") {
      err.message = "Something unexpected happened";
    }
    return NextResponse.json({ error: err.message });
  }
}
