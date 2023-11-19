import { NextResponse } from "next/server";

import { createUser } from "lib/api/services/userService";
import { APIServerError } from "lib/utils";
import { IUserPublicData } from "types";

export async function POST(request: Request): Promise<NextResponse<IUserPublicData>> {
  try {
    const userPayload = await request.json();

    const user = await createUser(userPayload);

    return NextResponse.json(user, { status: 201 });
  } catch (err) {
    if (err instanceof APIServerError) {
      console.log(err.cause);
      err.showDefaultMessage();
    }
    return NextResponse.json(err.message, { status: err.statusCode });
  }
}
