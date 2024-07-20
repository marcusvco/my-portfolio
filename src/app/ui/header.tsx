import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between">
        <a href="/" className="flex-1">
          marcusvco
        </a>
        <div className="space-x-4">
          <a href="/resume">Resume</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
        </div>
        <a href="#" className="flex flex-1 justify-end">
          <Bars3Icon className="size-5" />
        </a>
      </nav>
    </header>
  );
}
