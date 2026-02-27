import { NAV_ITEMS } from "@/consts/nav-items"
import { ProjectCard } from "./project-card"

export function ProjectsSection() {
  return (
    <div
      id={NAV_ITEMS[1]}
      className="panel bg-accent/5 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6"
    >
      <div className="mx-auto my-20 flex w-full max-w-6xl flex-col items-center justify-center gap-4 md:items-center">
        <h2 className="font-bebas-neue text-center text-2xl font-bold">
          Featured Projects
        </h2>

        <ProjectCard
          title="Love Bound"
          description="Web application for giving gifts to your loved ones"
          image="/love-bound-mockup.png"
          link="https://www.love-bound.shop/"
        />
      </div>
    </div>
  )
}
