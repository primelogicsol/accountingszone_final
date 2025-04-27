import { z } from "zod";

export const partnerApplicationFormSchema = z.object({
  businessName: z.string().trim().min(1, "Business Name is required"),
  contactPerson: z.string().trim().min(1, "Contact Person is required"),
  businessAddress: z.string().trim().min(1, "Business Address is required"),
  phoneNumber: z.string().trim().min(1, "Phone Number is required"),
  email: z.string().trim().email("Invalid email address"),
  website: z.string().trim().url("Invalid URL").optional(),

  typeOfBusiness: z.string().trim().min(1, "Type of Business is required"),
  industryCategory: z.string().trim().min(1, "Industry/Category is required"),
  yearsInOperation: z
    .string()
    .min(1, "Years in Operation is required")
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val) && val >= 0, "Years in Operation must be a positive number"),
  businessRegistrationNumber: z
    .string()
    .trim()
    .min(1, "Business Registration Number is required"),
  taxIdentificationNumber: z.string().trim().optional(),

  reasonForPartnership: z
    .string()
    .trim()
    .min(1, "Reason for Partnership is required"),
  servicesOrProductsOffered: z
    .string()
    .trim()
    .min(1, "Services or Products Offered is required"),
  geographicalCoverage: z
    .string()
    .trim()
    .min(1, "Geographical Coverage is required"),
  preferredCollaborationType: z
    .string()
    .trim()
    .min(1, "Preferred Collaboration Type is required"),
  previousPartnerships: z.string().trim().optional(),

  annualRevenue: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : undefined))
    .refine((val) => val === undefined || !isNaN(val), "Annual Revenue must be a valid number"),
  businessLicensesOrPermits: z
    .string()
    .trim()
    .min(1, "Business Licenses or Permits is required"),
  insuranceCoverage: z.string().trim().min(1, "Insurance Coverage is required"),

  businessRegistrationCertificate: z.instanceof(File, {
    message: "Business Registration Certificate is required",
  }),
  taxIdentificationCertificate: z.instanceof(File).optional(),
  portfolioOrReferences: z.instanceof(File).optional(),

  declaration: z.boolean().refine((val) => val === true, {
    message: "Declaration must be agreed to proceed",
  }),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consent must be agreed to proceed",
  }),
  signature: z.string().trim().min(1, "Signature is required"),
  date: z.string().trim().min(1, "Date is required"),
});