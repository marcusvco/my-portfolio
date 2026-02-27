import { ABOUT_TEXTS } from "@/consts/about-texts"
import { NAV_ITEMS } from "@/consts/nav-items"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

export function HeroSection() {
  useGSAP(() => {
    const split = SplitText.create(".about-text", {
      type: "chars, words",
    })

    function scrambleText(index: number) {
      gsap.to(".scramble", {
        delay: 2,
        duration: 1,
        scrambleText: ABOUT_TEXTS[index],
        onComplete: () => {
          if (index < ABOUT_TEXTS.length - 1) {
            scrambleText(index + 1)
          } else {
            scrambleText(0)
          }
        },
      })
    }

    gsap.from(split.chars, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      onComplete: () => {
        scrambleText(1)
      },
    })
  })

  return (
    <div
      id={NAV_ITEMS[2]}
      className="panel bg-accent/5 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-10 md:flex-row md:items-center">
        <div className="bg-primary h-40 w-40 rounded-full sm:h-56 sm:w-56 md:h-72 md:w-72" />
        <h1 className="font-bebas-neue text-center text-4xl leading-tight font-medium sm:text-5xl md:text-left md:text-6xl lg:text-7xl">
          Hi! My name is Marcus <br />
          and I am a{" "}
          <span className="about-text scramble inline-block min-w-[12ch] font-bold text-blue-600 sm:min-w-[18ch]">
            software engineer
          </span>
        </h1>
      </div>
    </div>
  )
}
