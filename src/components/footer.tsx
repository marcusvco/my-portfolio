import { Github, Linkedin } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"

export function Footer() {
  return (
    <div className="bg-background/60 fixed bottom-0 z-50 w-full backdrop-blur">
      <div className="container mx-auto flex items-center justify-center px-4 py-4">
        <div className="text-muted-foreground flex items-center gap-2">
          {/* <span className="text-xs font-semibold tracking-tight uppercase">
            madeby{" "}
          </span> */}
          <a
            href={process.env.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github />
            </Button>
          </a>
          <a
            href={process.env.LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Linkedin />
            </Button>
          </a>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
