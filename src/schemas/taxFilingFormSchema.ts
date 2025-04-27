import { z } from "zod";

export const taxFilingFormSchema = z
  .object({
    name: z.string().trim().min(1, "Name is required"),
    birthday: z.string().trim().min(1, "Birthday is required"),
    phoneNumber: z.string().trim().min(1, "Phone number is required"),
    email: z
      .string()
      .trim()
      .email("Invalid email address")
      .min(1, "Email is required"),
    facebookName: z.string().trim().optional(),
    instagramName: z.string().trim().optional(),
    taxYear: z.enum(
      [
        "2024",
        "2023",
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
      ],
      {
        errorMap: () => ({ message: "Please select a tax year option" }),
      }
    ),
    cashAdvance: z.enum(["max", "partial", "none"], {
      errorMap: () => ({ message: "Please select a cash advance option" }),
    }),

    firstName: z.string().trim().min(1, "First name is required"),
    middleName: z.string().trim().optional(),
    lastName: z.string().trim().min(1, "Last name is required"),
    ssn: z.string().trim().length(9, "SSN must be 9 digits"),
    confirmSSN: z.string().trim().length(9, "Confirm SSN must be 9 digits"),
    streetAddress: z.string().trim().min(1, "Street address is required"),
    addressLine2: z.string().trim().optional(),
    city: z.string().trim().min(1, "City is required"),
    state: z.string().trim().min(1, "State is required"),
    zipCode: z.string().trim().length(5, "ZIP Code must be 5 digits"),
    occupation: z.string().trim().optional(),
    refundOption: z.enum(["directDeposit", "prepaidCard"], {
      errorMap: () => ({ message: "Please select a refund option" }),
    }),
  })
  .refine((data) => data.ssn === data.confirmSSN, {
    path: ["confirmSSN"],
    message: "SSN and Confirm SSN must match",
  });
