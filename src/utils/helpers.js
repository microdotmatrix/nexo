import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const createUrl = (pathname, params) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export function formatDate(input) {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

// Artificially delay a function call to simulate a slow network connection.
export async function sleep(ms = 500) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// keep number counters within a range
export function clampRange(value, min = 0, max = 1) {
  return value < min ? min : value > max ? max : value
}

export function hasObject(recs, vals) {
  if (!recs) return false

  return recs.some(function (obj) {
    for (var x in obj) if (x in vals && obj[x] != vals[x]) return false
    return true
  })
}
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}