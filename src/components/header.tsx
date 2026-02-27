import { NAV_ITEMS } from "@/consts/nav-items"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollSmoother } from "gsap/all"
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
    let panels = gsap.utils.toArray(".panel") as string[]

    panels.forEach((panel: string) => {
      gsap.to(panel, {
        scrollTrigger: {
          trigger: panel,
          snap: 1,
          pin: true,
          pinSpacing: false,
        },
      })
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
    <header className="fixed top-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <nav className="text-foreground flex flex-1 items-center justify-between gap-4">
          {NAV_ITEMS.map((item) => {
            if (item === "Home") {
              return (
                <button
                  key={item}
                  onClick={() => handleNavItemClick("Home")}
                  className="cursor-pointer transition hover:text-blue-600"
                >
                  <Pyramid size={32} />
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
