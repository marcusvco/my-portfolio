import { useGSAP } from "@gsap/react"
import { clsx, type ClassValue } from "clsx"
import gsap from "gsap"
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
    gsap.from(selector, {
      scrollTrigger: {
        trigger: selector,
        toggleActions: "restart none none none",
      },
      y: 100,
      stagger: 0.05,
    })
    // gsap.to(selector, {
    //   scrollTrigger: {
    //     trigger: selector,
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: 1,
    //   },
    //   y: 100,
    //   autoAlpha: 0,
    //   stagger: 0.05,
    // })
  }, [selector])
}
