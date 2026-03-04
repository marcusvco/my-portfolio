// import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { revealSection } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import { ArrowUpRight } from "lucide-react"
import { useRef } from "react"
import { Button } from "../ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
}

export function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  const perspectiveRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (typeof window === "undefined") return
    let teardown = () => {}
    import("gsap").then((gsapMod) => {
      const gsap = gsapMod.default
      const perspective = perspectiveRef.current
      const outer = outerRef.current
      const inner = innerRef.current
      if (!perspective || !outer || !inner) return

      gsap.set(perspective, { perspective: 650 })

      const outerRX = gsap.quickTo(outer, "rotationX", { ease: "power3" })
      const outerRY = gsap.quickTo(outer, "rotationY", { ease: "power3" })
      const innerX = gsap.quickTo(inner, "x", { ease: "power3" })
      const innerY = gsap.quickTo(inner, "y", { ease: "power3" })

      const onPointerMove = (e: PointerEvent) => {
        outerRX(gsap.utils.interpolate(2, -2, e.y / window.innerHeight))
        outerRY(gsap.utils.interpolate(-2, 2, e.x / window.innerWidth))
        innerX(gsap.utils.interpolate(-4, 4, e.x / window.innerWidth))
        innerY(gsap.utils.interpolate(-4, 4, e.y / window.innerHeight))
      }

      const onPointerLeave = () => {
        outerRX(0)
        outerRY(0)
        innerX(0)
        innerY(0)
      }

      perspective.addEventListener("pointermove", onPointerMove)
      perspective.addEventListener("pointerleave", onPointerLeave)
      teardown = () => {
        perspective.removeEventListener("pointermove", onPointerMove)
        perspective.removeEventListener("pointerleave", onPointerLeave)
      }
    })
    return () => teardown()
  })

  revealSection(".projects-card")

  return (
    <div
      ref={perspectiveRef}
      className="project-card-perspective projects-card mx-auto w-full max-w-4xl"
    >
      <div ref={outerRef} className="project-card-outer">
        <div ref={innerRef} className="project-card-inner">
          <Card className="project-card relative w-full pt-0">
            <img
              src={image}
              alt="Event cover"
              className="relative z-20 aspect-video w-full rounded-t-xl object-cover"
            />
            <CardHeader>
              <CardAction>
                <a href={link} target="_blank">
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight size={16} />
                  </Button>
                </a>
              </CardAction>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}
