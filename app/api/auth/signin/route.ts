import { NextResponse } from "next/server";

import { getUser } from "lib/api/services/userService";
import { APIServerError } from "lib/utils";
import { IUserCredentials, IUserPublicData } from "types";

export async function POST(request: Request): Promise<NextResponse<IUserPublicData>> {
  try {
    const userPayload: IUserCredentials = await request.json();

    const user = await getUser(userPayload);

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    if (err instanceof APIServerError) {
      console.log(err.cause);
      err.showDefaultMessage();
    }
    return NextResponse.json(err.message, { status: err.statusCode });
  }
}
