import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact/contact-section"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}
