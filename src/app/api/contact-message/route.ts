import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, reason, subject, message } = body;

    // Create contact message
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
        company,
        reason,
        subject,
        message,
      },
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in contact-message:", error);
    return NextResponse.json(
      { message: "An error occurred while sending message" },
      { status: 500 }
    );
  }
}