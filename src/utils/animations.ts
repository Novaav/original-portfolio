import type { Variants, Easing } from "framer-motion";

const smoothEase: Easing = [0.43, 0.13, 0.23, 0.96];

export const LETTER_DELAY = {
  hero: 0.08,
  normal: 0.06,
  fast: 0.035,
};

export const WORD_DELAY = {
  normal: 0.035,
  fast: 0.02,
};

export const letterVariants = {
  hidden: {
    opacity: 0,
    x: -30,
    filter: "blur(16px)",
    color: "#9ca3af",
  },
  visible: (custom: { index: number; delay: number }) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    color: "#111827",
    transition: {
      duration: 0.5,
      delay: custom.index * custom.delay,
      ease: smoothEase,
    },
  }),
};

export const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: (custom: { index: number; delay: number }) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      delay: custom.index * custom.delay,
      ease: smoothEase,
    },
  }),
};

export const fadeUpButtonVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: smoothEase } },
};

export const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

export const projectHoverVariant: Variants = {
  hover: { scale: 1.03, transition: { duration: 0.8, ease: smoothEase } },
};

export const spotlightImageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: smoothEase },
  },
};
