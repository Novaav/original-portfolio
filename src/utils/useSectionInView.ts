// src/utils/useSectionInView.ts
import { useInView } from "framer-motion";
import type { RefObject } from "react"; // ✅ type-only import

/**
 * Custom hook for detecting if a section is in view.
 * @param ref - React ref to the section element
 * @param margin - Intersection margin (default "-200px 0px -100px 0px")
 * @returns boolean - whether the section is in view
 */
export const useSectionInView = (
  ref: RefObject<HTMLElement>,
  margin: string = "-200px 0px -100px 0px"
): boolean => {
  return useInView(ref, { margin: margin as any }); // ✅ cast margin to satisfy Framer Motion
};
