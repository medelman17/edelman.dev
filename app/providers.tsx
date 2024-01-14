"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const router = useRouter();
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
