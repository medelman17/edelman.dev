import type { Metadata } from "next";
import { Inter } from "next/font/google";
import VisualEditing from "@/app/blog/components/visual-editing";
import { draftMode } from "next/headers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from "@/app/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/app/globals.css";
import { cn } from "@/lib/utils";

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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Providers>
          <Header />
          <main className="max-w-2xl mx-auto px-4">{children}</main>
          {draftMode().isEnabled && <VisualEditing />}
          {<SpeedInsights />}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
