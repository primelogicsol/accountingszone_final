import { z } from "zod";

export const clientInformationFormSchema = z.object({
  fullName: z.string().trim().min(1, "Full Name is required"),
  businessName: z.string().trim().optional(),
  phoneNumber: z.string().trim().min(1, "Phone Number is required"),
  email: z.string().trim().email("Invalid email address"),
  address: z.string().trim().min(1, "Address is required"),
  preferredContactMethod: z.enum(["Phone", "Email", "Other"], {
    errorMap: () => ({ message: "Preferred Contact Method is required" }),
  }),

  businessType: z
    .enum(["Sole Proprietor", "Partnership", "Corporation", "LLC", "Other"], {
      errorMap: () => ({ message: "Business Type is required" }),
    })
    .optional(),
  industryCategory: z.string().trim().optional(),
  taxIdentificationNumber: z.string().trim().optional(),
  businessRegistrationNumber: z.string().trim().optional(),
  annualRevenueRange: z.string().trim().optional(),
  numberOfEmployees: z
    .number()
    .int()
    .min(0, "Number of Employees must be a positive integer")
    .optional(),

  servicesRequired: z.array(
    z.enum(["Bookkeeping", "Tax Planning", "Financial Analysis", "Payroll", "Other"])
  ).min(1, "At least one service is required"),
  frequencyOfService: z.enum(["Weekly", "Monthly", "Quarterly", "Annually"], {
    errorMap: () => ({ message: "Frequency of Service is required" }),
  }),
  specificGoalsOrNeeds: z.string().trim().optional(),
  currentAccountingSoftware: z.string().trim().optional(),
  preferredCommunicationSchedule: z.string().trim().optional(),

  bankAccountDetails: z.string().trim().optional(),
  creditLimit: z.string().trim().optional(),
  billingAddress: z.string().trim().optional(),

  businessRegistrationCertificate: z.string().trim().optional(),
  taxIdentificationCertificate: z.string().trim().min(1, "Tax Identification Certificate is required"),
  financialStatements: z.string().trim().optional(),
  governmentIssuedID: z.string().trim().min(1, "Government-Issued ID is required"),

  declaration: z.boolean().refine((val) => val === true, {
    message: "Declaration must be agreed to proceed",
  }),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consent must be agreed to proceed",
  }),
  signature: z.string().trim().min(1, "Signature is required"),
  date: z.string().trim().min(1, "Date is required"),
});