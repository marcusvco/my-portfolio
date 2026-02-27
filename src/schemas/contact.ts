import * as z from "zod"

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
})

export type ContactSchema = z.infer<typeof contactSchema>
