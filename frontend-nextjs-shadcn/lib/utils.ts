import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fallbackImageUrl = "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"

// export const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || "http://localhost:1337";

export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_API_DOMAIN || "http://localhost:1337";
}

export function getStrapiImageURL(url: string) {
  if(url === null || url === undefined) return null;
  if(url.startsWith("data:")) return url;
  if(url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}