import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatString(inputString: string) {
  // Split by dashes and replace '&' with a placeholder
  const parts = inputString
    .split(/[-]/g)
    .map((part) => part.replace(/&/g, "%26"));

  // Capitalize each word
  const formattedString = parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  // Replace placeholder back to '&'
  return formattedString.replace(/%26/g, "&");
}
