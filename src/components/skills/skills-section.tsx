import { NAV_ITEMS } from "@/consts/nav-items"
import { revealSection } from "@/lib/utils"

export function SkillsSection() {
  revealSection(".skills-section")

  return (
    <div
      id={NAV_ITEMS[3]}
      className="panel bg-accent/5 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6"
    >
      <div className="mx-auto my-20 flex w-full max-w-6xl flex-col items-center justify-center gap-4 md:items-center">
        <h2 className="font-bebas-neue text-center text-2xl font-bold">
          Skills
        </h2>

        <div className="skills-section bg-primary flex flex-wrap items-center justify-center gap-6 rounded-lg p-4 dark:bg-transparent">
          <img
            src="/nextjs-white.png"
            alt="Next.js"
            className="h-4 w-auto object-contain"
          />
          <img
            src="/tanstack-white.svg"
            alt="TanStack"
            className="h-6 w-auto object-contain"
          />
          <img
            src="/react-native-white.png"
            alt="React Native"
            className="h-8 w-auto object-contain"
          />
          <img
            src="/flutter-white.png"
            alt="Flutter"
            className="h-6 w-auto object-contain"
          />
          <img
            src="/expo-white.png"
            alt="Expo"
            className="h-5 w-auto object-contain"
          />
          <img
            src="/svelte-kit-white.png"
            alt="Svelte Kit"
            className="h-6 w-auto object-contain"
          />
          <img
            src="/golang-white.png"
            alt="Golang"
            className="h-5 w-auto object-contain"
          />
          <img
            src="/docker-white.png"
            alt="Docker"
            className="h-6 w-auto object-contain"
          />
          <img
            src="/postgresql-white.png"
            alt="PostgreSQL"
            className="h-7 w-auto object-contain"
          />
          <img
            src="/supabase-white.png"
            alt="Supabase"
            className="h-6 w-auto object-contain"
          />
          <img
            src="/gsap-white.png"
            alt="GSAP"
            className="h-10 w-auto object-contain"
          />
          <img
            src="/tailwind-white.png"
            alt="Tailwind"
            className="h-4 w-auto object-contain"
          />
          <img
            src="/git-white.png"
            alt="Git"
            className="h-5 w-auto object-contain"
          />
          <img
            src="/vercel.png"
            alt="Vercel"
            className="h-5 w-auto object-contain invert"
          />
          <img
            src="/stripe-white.png"
            alt="Stripe"
            className="h-6 w-auto object-contain"
          />
          <img
            src="/shopify-white.png"
            alt="Shopify"
            className="h-6 w-auto object-contain"
          />
        </div>
        <p className="font-instrument-sans text-sm">And more</p>
      </div>
    </div>
  )
}
