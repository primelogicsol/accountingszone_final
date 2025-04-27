import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "@/lib/email";

// Input validation schema
const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const { username, email, password } = signupSchema.parse(body);

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email or username already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate verification code
    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    const verifyCodeExpiry = new Date(Date.now() + 3600000); // 1 hour from now

    // Create user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        verifyCode,
        verifyCodeExpiry,
      },
    });

    // Send verification email
    try {
      await sendVerificationEmail(email, username, verifyCode);
    } catch (emailError) {
      console.error("Failed to send verification email:", emailError);
      // Optionally, can still return success if email sending fails
      return NextResponse.json(
        {
          message:
            "User registered successfully, but failed to send verification email. Please contact support.",
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      { message: "User registered successfully. Please check your email for verification code." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in signup:", error);

    // Handle specific errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid input", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "An error occurred during registration" },
      { status: 500 }
    );
  }
}