import React from "react";
import Link from "next/link";
import * as paths from "@/lib/paths";
import ModeToggle from "@/components/mode-toggle";

export default function Header() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-6">
      <Link href={paths.home()} className="font-bold text-3xl">
        Edelman<span className="text-primary">Dev</span>
      </Link>
      <ModeToggle />
    </nav>
  );
}
