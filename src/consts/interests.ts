import { getAge } from "@/lib/utils"
import type { Interest } from "@/types/interest"

export const INTERESTS: Interest[] = [
  {
    interest: "Coding",
    text: `I am ${getAge(new Date("2003-07-07"))} years old and I’ve spent the last 5+ years building for the web and mobile, and I still get a genuine rush from seeing a project go from a rough idea to a polished, live product.`,
    image: "/coding.png",
  },
  {
    interest: "Hobbies",
    text: "When I’m not coding, you’ll probably find me on a sports field or trying to improve my chess rating. Also, gaming was a big part of my childhood, which is why I love solving complex problems today.",
    image: "/chess.png",
  },
]
