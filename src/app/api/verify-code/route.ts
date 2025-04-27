import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as z from "zod";

// Expect exactly these two fields in the body:
const payloadSchema = z.object({
  username: z.string().min(1),
  otp:      z.string().min(1),
});

export async function POST(request: Request) {
  // 1) Parse + validate
  let body;
  try {
    body = payloadSchema.parse(await request.json());
  } catch (e) {
    return NextResponse.json(
      { message: "Invalid request payload" },
      { status: 400 }
    );
  }

  const { username, otp } = body;

  try {
    // 2) Lookup user by username
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    if (user.isVerified) {
      return NextResponse.json(
        { message: "User already verified" },
        { status: 400 }
      );
    }

    // 3) Check OTP match + expiry
    if (user.verifyCode !== otp) {
      return NextResponse.json(
        { message: "Invalid verification code" },
        { status: 400 }
      );
    }

    if (!user.verifyCodeExpiry || user.verifyCodeExpiry < new Date()) {
      return NextResponse.json(
        { message: "Verification code has expired" },
        { status: 400 }
      );
    }

    // 4) All good: mark verified
    await prisma.user.update({
      where: { username },
      data: {
        isVerified:        true,
        verifyCode:        null,
        verifyCodeExpiry:  null,
      },
    });

    return NextResponse.json(
      { message: "Account verified successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error in verify-code:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
