import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { uploadFile } from "@/lib/cloudinary";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extract file fields
    const businessRegistrationCertificate = formData.get("businessRegistrationCertificate") as File;
    const taxIdentificationCertificate = formData.get("taxIdentificationCertificate") as File;
    const portfolioOrReferences = formData.get("portfolioOrReferences") as File;
    
    // Upload files to Cloudinary
    let businessRegistrationCertificateUrl = "";
    let taxIdentificationCertificateUrl = "";
    let portfolioOrReferencesUrl = "";
    
    if (businessRegistrationCertificate) {
      const arrayBuffer = await businessRegistrationCertificate.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64 = `data:${businessRegistrationCertificate.type};base64,${buffer.toString('base64')}`;
      businessRegistrationCertificateUrl = await uploadFile(base64, "partner-application/business-registration");
    }
    
    if (taxIdentificationCertificate) {
      const arrayBuffer = await taxIdentificationCertificate.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64 = `data:${taxIdentificationCertificate.type};base64,${buffer.toString('base64')}`;
      taxIdentificationCertificateUrl = await uploadFile(base64, "partner-application/tax-identification");
    }
    
    if (portfolioOrReferences) {
      const arrayBuffer = await portfolioOrReferences.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64 = `data:${portfolioOrReferences.type};base64,${buffer.toString('base64')}`;
      portfolioOrReferencesUrl = await uploadFile(base64, "partner-application/portfolio");
    }
    
    // Extract other form fields
    const businessName = formData.get("businessName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const businessAddress = formData.get("businessAddress") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const email = formData.get("email") as string;
    const website = formData.get("website") as string;
    
    const typeOfBusiness = formData.get("typeOfBusiness") as string;
    const industryCategory = formData.get("industryCategory") as string;
    const yearsInOperation = parseInt(formData.get("yearsInOperation") as string || "0");
    const businessRegistrationNumber = formData.get("businessRegistrationNumber") as string;
    const taxIdentificationNumber = formData.get("taxIdentificationNumber") as string;
    
    const reasonForPartnership = formData.get("reasonForPartnership") as string;
    const servicesOrProductsOffered = formData.get("servicesOrProductsOffered") as string;
    const geographicalCoverage = formData.get("geographicalCoverage") as string;
    const preferredCollaborationType = formData.get("preferredCollaborationType") as string;
    const previousPartnerships = formData.get("previousPartnerships") as string;
    
    const annualRevenue = formData.get("annualRevenue") as string;
    const businessLicensesOrPermits = formData.get("businessLicensesOrPermits") as string;
    const insuranceCoverage = formData.get("insuranceCoverage") as string;
    
    const declaration = formData.get("declaration") === "true";
    const consent = formData.get("consent") === "true";
    const signature = formData.get("signature") as string;
    const date = formData.get("date") as string;
    
    // Create partner application form entry
    const partnerApplicationForm = await prisma.partnerApplicationForm.create({
      data: {
        businessName,
        contactPerson,
        businessAddress,
        phoneNumber,
        email,
        website,
        
        typeOfBusiness,
        industryCategory,
        yearsInOperation,
        businessRegistrationNumber,
        taxIdentificationNumber,
        
        reasonForPartnership,
        servicesOrProductsOffered,
        geographicalCoverage,
        preferredCollaborationType,
        previousPartnerships,
        
        annualRevenue,
        businessLicensesOrPermits,
        insuranceCoverage,
        
        businessRegistrationCertificate: businessRegistrationCertificateUrl,
        taxIdentificationCertificate: taxIdentificationCertificateUrl,
        portfolioOrReferences: portfolioOrReferencesUrl,
        
        declaration,
        consent,
        signature,
        date,
      },
    });
    
    return NextResponse.json(
      { message: "Partner application submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in partner-application:", error);
    return NextResponse.json(
      { message: "An error occurred while submitting partner application" },
      { status: 500 }
    );
  }
}