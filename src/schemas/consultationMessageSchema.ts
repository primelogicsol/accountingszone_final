import { z } from "zod";

export const consultationMessageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters!"),
  email: z.string().email({ message: "Invalid email address!" }),
  phone: z.string().min(10, "Phone number must be at least 10 characters!"),
  city: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
});