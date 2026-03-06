import { cn, revealSection } from "@/lib/utils"
import type { Interest } from "@/types/interest"

interface InterestSectionProps {
  interests: Interest[]
}

export function InterestsSection({ interests }: InterestSectionProps) {
  revealSection(".interests-section")

  return interests.map((interest, index) => (
    <div
      key={interest.interest}
      className={cn(
        "interests-section flex flex-col items-center justify-center sm:gap-40",
        index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row",
      )}
    >
      <img
        src={interest.image}
        alt={interest.interest}
        className="size-40 shrink-0 object-contain sm:size-72"
      />

      <div>
        {/* <h3 className="font-bebas-neue text-2xl font-bold">{interest.interest}</h3> */}
        <p className="font-instrument-sans text-center text-xl font-extrabold tracking-tight [word-spacing:-2px] text-shadow-md sm:text-left sm:text-3xl">
          {interest.text}
        </p>
      </div>
    </div>
  ))
}
