import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");

    if (!username) {
      return NextResponse.json(
        { message: "Username parameter is required" },
        { status: 400 }
      );
    }

    // Check if username exists
    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Username is already taken" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Username is available" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in check-username-unique:", error);
    return NextResponse.json(
      { message: "An error occurred while checking username" },
      { status: 500 }
    );
  }
}