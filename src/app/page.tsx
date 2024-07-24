import Image from "next/image";
import FooterLinks from "@/app/ui/home/footer-links";

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
        <FooterLinks />
      </footer>
    </main>
  );
}
