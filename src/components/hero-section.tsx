import { ABOUT_TEXTS } from "@/consts/about-texts"
import { NAV_ITEMS } from "@/consts/nav-items"
import { useGSAP } from "@gsap/react"

export function HeroSection() {
  useGSAP(() => {
    if (typeof window === "undefined") return
    Promise.all([
      import("gsap"),
      import("gsap/ScrambleTextPlugin"),
      import("gsap/SplitText"),
    ]).then(([gsapMod, scrambleTextPkg, splitTextPkg]) => {
      const gsap = gsapMod.default
      const ScrambleTextPlugin =
        (scrambleTextPkg as { ScrambleTextPlugin?: unknown })
          .ScrambleTextPlugin ??
        (scrambleTextPkg as { default?: unknown }).default ??
        scrambleTextPkg
      const SplitText =
        (splitTextPkg as { SplitText?: unknown }).SplitText ??
        (splitTextPkg as { default?: unknown }).default ??
        splitTextPkg
      gsap.registerPlugin(SplitText, ScrambleTextPlugin)
      const split = (
        SplitText as {
          create: (
            target: string,
            vars?: Record<string, unknown>,
          ) => { chars: unknown[] }
        }
      ).create(".about-text", {
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
  })

  useGSAP(() => {
    if (typeof window === "undefined") return
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([gsapMod, scrollTriggerPkg]) => {
        const gsap = gsapMod.default
        const ScrollTrigger =
          (scrollTriggerPkg as { ScrollTrigger?: unknown }).ScrollTrigger ??
          (scrollTriggerPkg as { default?: unknown }).default ??
          scrollTriggerPkg
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".hero-section", {
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
          y: 100,
          autoAlpha: 0,
          stagger: 0.05,
        })
      },
    )
  })

  return (
    <div
      id={NAV_ITEMS[2]}
      className="panel bg-accent/5 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6"
    >
      <div className="hero-section mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-10 md:flex-row md:items-center">
        <img
          src="/hero.png"
          alt="Marcus Carvalho"
          className="size-52 rounded-full sm:size-72"
        />
        <h1 className="font-bebas-neue text-center text-4xl leading-tight font-medium sm:text-5xl md:text-left md:text-6xl lg:text-7xl">
          Hi! My name is Marcus <br />
          and I am a
          <br className="sm:hidden" />{" "}
          <span className="about-text scramble inline-block min-w-[12ch] font-bold text-blue-600 sm:min-w-[18ch]">
            {ABOUT_TEXTS[0]}
          </span>
        </h1>
      </div>
    </div>
  )
}
