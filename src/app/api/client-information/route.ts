
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { uploadFile } from "@/lib/cloudinary";

// Set the file size limit for this specific API route
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb' // 10MB limit
    },
    responseLimit: false
  }
};

// Maximum file size (5MB per file)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extract file fields
    const businessRegistrationCertificate = formData.get("businessRegistrationCertificate") as File;
    const taxIdentificationCertificate = formData.get("taxIdentificationCertificate") as File;
    const financialStatements = formData.get("financialStatements") as File;
    const governmentIssuedID = formData.get("governmentIssuedID") as File;
    
    // Validate file sizes on the server side
    const validateFileSize = (file: File | null) => {
      if (!file) return true;
      if (file.size > MAX_FILE_SIZE) {
        throw new Error(`File ${file.name} exceeds the maximum size limit of 5MB`);
      }
      return true;
    };
    
    // Validate each file
    validateFileSize(businessRegistrationCertificate);
    validateFileSize(taxIdentificationCertificate);
    validateFileSize(financialStatements);
    validateFileSize(governmentIssuedID);
    
    // Upload files to Cloudinary
    let businessRegistrationCertificateUrl = "";
    let taxIdentificationCertificateUrl = "";
    let financialStatementsUrl = "";
    let governmentIssuedIDUrl = "";
    
    if (businessRegistrationCertificate) {
      const arrayBuffer = await businessRegistrationCertificate.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64 = `data:${businessRegistrationCertificate.type};base64,${buffer.toString('base64')}`;
      businessRegistrationCertificateUrl = await uploadFile(base64, "client-information/business-registration");
    }
    
    if (taxIdentificationCertificate) {
      const arrayBuffer = await taxIdentificationCertificate.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64 = `data:${taxIdentificationCertificate.type};base64,${buffer.toString('base64')}`;
      taxIdentificationCertificateUrl = await uploadFile(base64, "client-information/tax-identification");
    }
    
    if (financialStatements) {
      const arrayBuffer = await financialStatements.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64 = `data:${financialStatements.type};base64,${buffer.toString('base64')}`;
      financialStatementsUrl = await uploadFile(base64, "client-information/financial-statements");
    }
    
    if (governmentIssuedID) {
      const arrayBuffer = await governmentIssuedID.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64 = `data:${governmentIssuedID.type};base64,${buffer.toString('base64')}`;
      governmentIssuedIDUrl = await uploadFile(base64, "client-information/government-id");
    }
    
    // Extract other form fields
    const fullName = formData.get("fullName") as string;
    const businessName = formData.get("businessName") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const email = formData.get("email") as string;
    const address = formData.get("address") as string;
    const preferredContactMethod = formData.get("preferredContactMethod") as string;
    
    const businessType = formData.get("businessType") as string;
    const industryCategory = formData.get("industryCategory") as string;
    const taxIdentificationNumber = formData.get("taxIdentificationNumber") as string;
    const businessRegistrationNumber = formData.get("businessRegistrationNumber") as string;
    const annualRevenueRange = formData.get("annualRevenueRange") as string;
    const numberOfEmployees = parseInt(formData.get("numberOfEmployees") as string || "0");
    
    const servicesRequiredString = formData.get("servicesRequired") as string;
    const servicesRequired = servicesRequiredString ? JSON.parse(servicesRequiredString) : [];
    const frequencyOfService = formData.get("frequencyOfService") as string;
    const specificGoalsOrNeeds = formData.get("specificGoalsOrNeeds") as string;
    const currentAccountingSoftware = formData.get("currentAccountingSoftware") as string;
    const preferredCommunicationSchedule = formData.get("preferredCommunicationSchedule") as string;
    
    const bankAccountDetails = formData.get("bankAccountDetails") as string;
    const creditLimit = formData.get("creditLimit") as string;
    const billingAddress = formData.get("billingAddress") as string;
    
    const declaration = formData.get("declaration") === "true";
    const consent = formData.get("consent") === "true";
    const signature = formData.get("signature") as string;
    const date = formData.get("date") as string;
    
    // Create client information form entry
    const clientInformationForm = await prisma.clientInformationForm.create({
      data: {
        fullName,
        businessName,
        phoneNumber,
        email,
        address,
        preferredContactMethod,
        
        businessType,
        industryCategory,
        taxIdentificationNumber,
        businessRegistrationNumber,
        annualRevenueRange,
        numberOfEmployees,
        
        servicesRequired,
        frequencyOfService,
        specificGoalsOrNeeds,
        currentAccountingSoftware,
        preferredCommunicationSchedule,
        
        bankAccountDetails,
        creditLimit,
        billingAddress,
        
        businessRegistrationCertificate: businessRegistrationCertificateUrl,
        taxIdentificationCertificate: taxIdentificationCertificateUrl,
        financialStatements: financialStatementsUrl,
        governmentIssuedID: governmentIssuedIDUrl,
        
        declaration,
        consent,
        signature,
        date,
      },
    });
    
    return NextResponse.json(
      { message: "Client information submitted successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error in client-information:", error);
    
    // Return specific error message for file size issues
    if (error.message && error.message.includes('exceeds the maximum size')) {
      return NextResponse.json(
        { message: error.message },
        { status: 413 } // Payload Too Large
      );
    }
    
    return NextResponse.json(
      { message: "An error occurred while submitting client information" },
      { status: 500 }
    );
  }
}