import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      birthday,
      phoneNumber,
      email,
      facebookName,
      instagramName,
      taxYear,
      cashAdvance,
      firstName,
      middleName,
      lastName,
      ssn,
      streetAddress,
      addressLine2,
      city,
      state,
      zipCode,
      occupation,
      refundOption,
    } = body;

    // Create tax filing form entry
    const taxFilingForm = await prisma.taxFilingForm.create({
      data: {
        name,
        birthday,
        phoneNumber,
        email,
        facebookName,
        instagramName,
        taxYear,
        cashAdvance,
        firstName,
        middleName,
        lastName,
        ssn,
        streetAddress,
        addressLine2,
        city,
        state,
        zipCode,
        occupation,
        refundOption,
      },
    });

    return NextResponse.json(
      { message: "Tax filing form submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in tax-filing:", error);
    return NextResponse.json(
      { message: "An error occurred while submitting tax filing form" },
      { status: 500 }
    );
  }
}