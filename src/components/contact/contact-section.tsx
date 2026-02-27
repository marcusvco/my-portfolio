import { NAV_ITEMS } from "@/consts/nav-items"
import { ContactForm } from "./contact-form"

export function ContactSection() {
  return (
    <div
      id={NAV_ITEMS[4]}
      className="panel bg-accent/5 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6"
    >
      <ContactForm />
    </div>
  )
}
