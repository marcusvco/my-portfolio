import Image from "next/image";

const socials = [
  {
    name: "Github",
    href: "https://github.com/marcusvco",
    icon: "/github-icon.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/marvin.vc",
    icon: "/instagram-icon.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/marcus-co/",
    icon: "/linkedin-icon.svg",
  },
];

export default function FooterLinks() {
  return (
    <>
      {socials.map((social) => {
        return (
          <a
            key={social.name}
            target="_blank"
            href={social.href}
            rel="noopener noreferrer"
          >
            <Image
              src={social.icon}
              width={25}
              height={25}
              alt={social.name}
              className="transition ease-in-out hover:animate-pulse hover:scale-110"
            />
          </a>
        );
      })}
    </>
  );
}
