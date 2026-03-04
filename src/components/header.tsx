import { NAV_ITEMS } from "@/consts/nav-items"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import scrollSmootherPkg from "gsap/ScrollSmoother"
import scrollTriggerPkg from "gsap/ScrollTrigger"

const ScrollSmoother =
  ((scrollSmootherPkg as { ScrollSmoother?: unknown }).ScrollSmoother ??
    (scrollSmootherPkg as { default?: unknown }).default ??
    scrollSmootherPkg) as { create: (config: Record<string, unknown>) => unknown }
const ScrollTrigger =
  ((scrollTriggerPkg as { ScrollTrigger?: unknown }).ScrollTrigger ??
    (scrollTriggerPkg as { default?: unknown }).default ??
    scrollTriggerPkg) as { create: (config: Record<string, unknown>) => unknown }
import { Pyramid } from "./svgs/pyramid"
import { Button } from "./ui/button"

export function Header() {
  const { contextSafe } = useGSAP()

  const handleNavItemClick = contextSafe((item: string) => {
    gsap.to(window, {
      scrollTo: {
        y: `#${item}`,
        autoKill: true,
      },
      overwrite: true,
    })
  })

  useGSAP(() => {
    const content = document.getElementById("smooth-content")
    const panels = gsap.utils.toArray(".panel") as HTMLElement[]
    if (!content || !panels.length) return

    let sectionProgresses: number[] = []

    const refreshSnap = () => {
      const maxScroll = Math.max(content.scrollHeight - window.innerHeight, 1)
      sectionProgresses = panels.map((panel) =>
        Math.min(panel.offsetTop / maxScroll, 1),
      )
      sectionProgresses[sectionProgresses.length - 1] = 1
    }

    const snapToSection = (progress: number) => {
      let nearest = 0
      let minDist = 1
      sectionProgresses.forEach((sp) => {
        const dist = Math.abs(progress - sp)
        if (dist < minDist) {
          minDist = dist
          nearest = sp
        }
      })
      return nearest
    }

    refreshSnap()

    ScrollTrigger.create({
      trigger: content,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      snap: {
        snapTo: snapToSection,
        duration: { min: 0.4, max: 1.2 },
        delay: 0.2,
        ease: "power1.inOut",
      },
      onRefresh: refreshSnap,
    })
  })

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
    })
  })

  useGSAP(() => {
    gsap.from(".draw-me", { duration: 1, drawSVG: 0 })
  })

  return (
    <header className="bg-background/60 fixed top-0 z-50 h-16 w-full backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <nav className="text-foreground flex flex-1 items-center justify-between gap-4">
          {NAV_ITEMS.map((item) => {
            if (item === "Home") {
              return (
                <button
                  key={item}
                  onClick={() => handleNavItemClick("Home")}
                  className="hover:bg-accent cursor-pointer rounded-lg p-2 transition hover:text-blue-600"
                >
                  <Pyramid size={24} />
                </button>
              )
            }
            return (
              <Button
                key={item}
                variant="ghost"
                onClick={() => handleNavItemClick(item)}
                className="font-bebas-neue transition hover:text-blue-600 hover:underline"
              >
                {item}
              </Button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
