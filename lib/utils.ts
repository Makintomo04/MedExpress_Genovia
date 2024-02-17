import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export enum STEPS {
  START = 0,
  Q1 = 1,
  Q2 = 2,
  Q3 = 3,
  Q4 = 4,
  Q5 = 5,
  COMPLETE = 6,
}
