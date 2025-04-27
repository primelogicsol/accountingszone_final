import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';  // Import shared client instance
import { z } from 'zod';

// Validation schema for consultation form
const consultationMessageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters!"),
  email: z.string().email({ message: "Invalid email address!" }),
  phone: z.string().min(10, "Phone number must be valid!"),
  city: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the incoming data
    const validatedData = consultationMessageSchema.parse(body);
    
    // Store in database
    const consultationMessage = await prisma.consultationMessage.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        city: validatedData.city || '',
        country: validatedData.country || '',
        state: validatedData.state || '',
        message: 'Consultation Request',
      }
    });
    
    return NextResponse.json({ 
      message: "Your consultation request has been submitted successfully! We'll contact you shortly." 
    }, { status: 201 });
  } catch (error) {
    console.error("Error in consultation-message:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        message: "Validation failed", 
        errors: error.errors 
      }, { status: 400 });
    }
    
    return NextResponse.json({ 
      message: "An error occurred while submitting your request" 
    }, { status: 500 });
  }
}