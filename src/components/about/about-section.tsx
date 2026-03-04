import { INTERESTS } from "@/consts/interests"
import { NAV_ITEMS } from "@/consts/nav-items"
import { InterestsSection } from "./interest-section"

export function AboutSection() {
  return (
    <div
      id={NAV_ITEMS[0]}
      className="panel bg-accent/10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6"
    >
      <div className="mx-auto my-20 flex w-full max-w-6xl flex-col items-center justify-center md:items-center">
        <h2 className="font-bebas-neue text-center text-2xl font-bold">
          About Me
        </h2>

        <InterestsSection interests={INTERESTS} />
      </div>
    </div>
  )
}
