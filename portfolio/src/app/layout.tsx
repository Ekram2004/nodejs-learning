import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Fullstack | Node.js Engineer",
  description: "Portfolio of a Backend focused Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
