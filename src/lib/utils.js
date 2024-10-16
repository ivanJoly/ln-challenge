import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function calculateLocationDistance(location) {
  if (location > 1000) {
    const km = (location / 1000).toFixed(1);
    return ` ${km} km`;
  }

  return ` ${location} mts`;
}
