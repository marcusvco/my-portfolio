import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { kaiseiDecol } from "./fonts";
import HeaderLinks from "@/app/ui/header-links";

export default function Header() {
  return (
    <header className="pb-3.5 rounded-xl bg-app-gray">
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
          <HeaderLinks />
        </div>
        <div className="flex flex-1 justify-end">
          <label>
            <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
              <input className="hidden peer" type="checkbox" />
              <div className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
              <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
              <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
            </div>
          </label>
        </div>
      </nav>
    </header>
  );
}
