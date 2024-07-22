import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { kaiseiDecol } from "./fonts";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center mx-10 mt-2.5">
        <div className="flex-1">
          <Link
            href="/"
            className={`transition hover:text-dark-blue ${kaiseiDecol.className} text-3xl font-bold`}
          >
            marcusvco
          </Link>
        </div>
        <div className="space-x-11 text-base">
          <Link href="/resume" className="hover:underline underline-offset-4">Resume</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex flex-1 justify-end">
          <Bars3Icon className="size-6" />
        </div>
      </nav>
    </header>
  );
}
