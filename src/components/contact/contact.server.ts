import type { ContactSchema } from "@/schemas/contact"
import { createServerFn } from "@tanstack/react-start"
import { Resend } from "resend"

export const sendEmail = createServerFn({ method: "POST" }).handler(
  async ({ data }) => {
    const payload = data as unknown as ContactSchema

    const resend = new Resend(process.env.RESEND_API_KEY)

    const response = await resend.emails.send({
      from: process.env.VITE_EMAIL ?? "",
      to: process.env.VITE_EMAIL ?? "",
      subject: `New message from ${payload.name}`,
      html: `<p>Name: ${payload.name}</p><p>Email: ${payload.email}</p><p>Message: ${payload.message}</p>`,
    })

    if (response.error) {
      return { success: false, error: response.error.message }
    }

    return { success: true }
  },
)
