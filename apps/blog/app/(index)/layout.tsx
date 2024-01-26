import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Providers from "@/app/providers";
import VisualEditing from "@/components/visual-editing";
import { draftMode } from "next/headers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/utils";
import "@/app/globals.css";

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
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          inter.variable
        )}
      >
        <div className="max-w-2xl mx-auto px-4">
          <Providers>
            <Header />
            <main>{children}</main>
            {draftMode().isEnabled && <VisualEditing />}
            {<SpeedInsights />}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
