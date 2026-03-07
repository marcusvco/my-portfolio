import { revealSection } from "@/lib/utils"
import { contactSchema } from "@/schemas/contact"
import { useForm } from "@tanstack/react-form"
import { Loader2, Send, SquareArrowOutUpRight } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { sendEmail } from "./contact.server"

export function ContactForm() {
  const [loading, setLoading] = useState(false)

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    validators: {
      onSubmit: contactSchema,
    },
    onSubmit: async ({ value }) => {
      setLoading(true)
      await sendEmail({ data: value } as any)
      setLoading(false)
    },
  })

  revealSection(".contact-form")

  return (
    <Card className="contact-form bg-accent/10 container mx-auto flex w-full max-w-6xl flex-col gap-4">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
        <CardAction>
          <Tooltip>
            <TooltipTrigger>
              <a href={`mailto:${import.meta.env.VITE_EMAIL}`} target="_blank">
                <Button type="button" variant="ghost">
                  <SquareArrowOutUpRight />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p> Click here to send email from your email client</p>
            </TooltipContent>
          </Tooltip>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form
          id="contact-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
          className="flex flex-col gap-4"
        >
          <FieldGroup>
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="John Doe"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
          </FieldGroup>

          <FieldGroup>
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="john.doe@example.com"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
          </FieldGroup>

          <FieldGroup>
            <form.Field
              name="message"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor="form-tanstack-textarea-message">
                      Message
                    </FieldLabel>
                    <Textarea
                      id="form-tanstack-textarea-message"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Write your message here..."
                      className="min-h-[120px]"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal" className="flex justify-end">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Clear
          </Button>
          <Button type="submit" form="contact-form" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : "Send"} <Send />
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
