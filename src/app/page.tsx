import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const words = [
    "Software Developer",
    "Mobile Developer",
    "Web Developer",
    "Student",
    "Enthusiast",
  ];
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <div className="flex items-center flex-1 space-x-44">
        <Image
          src="/profile-pic.jpeg"
          width={300}
          height={300}
          alt="Profile picture"
          className="rounded-full shadow-2xl shadow-blue-950"
        />
        <p className="text-6xl">
          Hello! My name is Marcus <br />
          and I&apos;m a <b className="text-dark-blue">{words[0]}</b>
        </p>
      </div>
      <footer className="flex space-x-2.5 mb-2.5">
        <a
          target="_blank"
          href="https://github.com/marcusvco"
          rel="noopener noreferrer"
        >
          <Image
            src="/github-icon.svg"
            width={30}
            height={30}
            alt="Github"
            className="transition ease-in-out hover:animate-pulse hover:scale-110"
          />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/marvin.vc"
          rel="noopener noreferrer"
        >
          <Image
            src="/instagram-icon.svg"
            width={30}
            height={30}
            alt="Instagram"
            className="transition ease-in-out hover:animate-pulse hover:scale-110"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/marcus-co/"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin-icon.svg"
            width={30}
            height={30}
            alt="Linkedin"
            className="transition ease-in-out hover:animate-pulse hover:scale-110"
          />
        </a>
      </footer>
    </main>
  );
}
