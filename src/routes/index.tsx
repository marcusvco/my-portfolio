import { Section1 } from "@/components/section1"
import { Section2 } from "@/components/section2"
import { Section3 } from "@/components/section3"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  )
}
