import React from "react";
import Link from "next/link";
import * as paths from "@/paths";
import ModeToggle from "@/components/mode-toggle";
import CodeIcon from "./icons/code-icon";

export default function Header() {
  return (
    <nav className="w-full relative flex items-center justify-between py-6">
      <Link href={paths.home()} className="flex items-center space-x-2">
        <CodeIcon className="h-8 w-8" />
        <span className="text-2xl font-bold">
          Michael<span className="text-primary">Edelman</span>
        </span>
      </Link>
      <ModeToggle />
    </nav>
  );
}
