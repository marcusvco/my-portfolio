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
      <body className={inriaSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
