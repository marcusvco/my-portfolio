import type { Metadata } from "next";
import "./globals.css";
import { inriaSans } from "@/app/ui/fonts";
import Header from "./ui/header";

export const metadata: Metadata = {
  title: "marcusvco | Home",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col h-screen ${inriaSans.className}`}>
        <Header />
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}
