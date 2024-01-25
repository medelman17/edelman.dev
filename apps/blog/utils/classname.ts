import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function classname(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
