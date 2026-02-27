// import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
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
  return (
    <Card className="relative mx-auto w-full max-w-4xl pt-0">
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
  )
}
