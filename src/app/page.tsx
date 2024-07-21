import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <div className="flex items-center flex-1 space-x-44">
        <Image
          src="/profile-pic.jpeg"
          width={300}
          height={300}
          alt="Profile picture"
          className="rounded-full"
        />
        <p className="text-6xl">
          Hello! My name is Marcus <br />
          and I&apos;m a <b>Software Developer</b>
        </p>
      </div>
      <footer className="flex space-x-4 mb-2.5">
        <Image src="/github-icon.svg" width={35} height={35} alt="Github" />
        <Image src="/instagram-icon.svg" width={35} height={35} alt="Instagram" />
        <Image src="/linkedin-icon.svg" width={35} height={35} alt="Linkedin" />
      </footer>
    </main>
  );
}
