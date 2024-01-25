import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import "./globals.css";
// import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "EdelmanDev",
  description:
    "A collection of development/tech related items from Michael Edelman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
