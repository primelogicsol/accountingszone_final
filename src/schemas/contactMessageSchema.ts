import { z } from "zod";

export const contactMessageSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters!")
    .max(20, "Name must be maximum 20 characters!"),
  email: z.string().email({ message: "Invalid email address!" }),
  phone: z
    .string()
    .min(10, "Phone number must be at least 2 characters!")
    .max(15, "Phone number must be maximum 20 characters!"),
  company: z
    .string()
    .min(2, "Company must be at least 2 characters!")
    .max(20, "Company must be maximum 20 characters!"),
  reason: z
    .string()
    .min(2, "Reason must be at least 2 characters!")
    .max(20, "Reason must be maximum 20 characters!"),
  subject: z
    .string()
    .min(2, "Subject must be at least 2 characters!")
    .max(20, "Subject must be maximum 20 characters!"),
  message: z
    .string()
    .min(2, "Message must be at least 2 characters!")
    .max(500, "Message must be maximum 500 characters!"),
});
