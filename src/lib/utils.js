import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// export const DOMAIN = "http://localhost:3000";
export const DOMAIN = "https://insect-pest-detection-melon.vercel.app";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const isBase64 = (file) => {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(file);
};

export const toMs = (time) => {
  const ms = (time * 100).toFixed(2);
  return `${ms} ms`;
};

export const formatDate = (providedDate) => {
  const date = new Date(providedDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};
