import { NAV_ITEMS } from "@/consts/navItems"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Button } from "./ui/button"

export function Header() {
  const { contextSafe } = useGSAP()

  const handleNavItemClick = contextSafe((item: string) => {
    gsap.to(window, {
      scrollTo: {
        y: item,
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
          markers: true,
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

  return (
    <header className="fixed top-0 z-50 w-full border-b border-b-black bg-white/50 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        <nav className="flex items-center gap-4">
          {NAV_ITEMS.map((item) => (
            <Button
              key={item}
              variant="ghost"
              onClick={() => handleNavItemClick(item)}
            >
              {item}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  )
}
