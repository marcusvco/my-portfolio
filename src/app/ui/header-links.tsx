import Link from "next/link";

const links = [
  {
    name: "Resume",
    href: "/resume",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function HeaderLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="relative pb-1 hover:text-neutral-700 transition group"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left" />
          </Link>
        );
      })}
    </>
  );
}
