import { NextResponse } from "next/server";

export async function POST() {}
export async function GET() {
  console.log("next server");
  return NextResponse.json({ message: "hey", status: 200 });
}
