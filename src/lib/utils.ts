import { useGSAP } from "@gsap/react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAge(birthDate: Date): number {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const month = today.getMonth() - birthDate.getMonth()
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

export function revealSection(selector: string) {
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
        gsap.from(selector, {
          scrollTrigger: {
            trigger: selector,
            toggleActions: "restart none none none",
          },
          y: 100,
          stagger: 0.05,
        })
      },
    )
  }, [selector])
}
