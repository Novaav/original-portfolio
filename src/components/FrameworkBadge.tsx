import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

interface FrameworkBadgeProps {
  name: string;
  size?: "sm" | "md";
}

// Subtle hover colors (visible but elegant)
const hoverColors = [
  "#D9F0FF", // light blue
  "#E6F7FF", // cyan-ish
  "#FFF7E6", // cream
  "#EDE9FF", // lavender
  "#F0FFF4", // mint
  "#FFF0F5", // pale pink
];

// Active colors for toggle cycle
const activeColors = [
  "#B0E0FF", // slightly stronger blue
  "#CFEFFF", // pastel cyan
  "#FFF1CC", // soft cream
  "#E2DBFF", // soft lavender
  "#DFFFE6", // soft mint
  "#FFE6F2", // soft pink
];

const sizeClasses = {
  sm: "px-4 py-2 text-sm min-w-[100px]",
  md: "px-6 py-3 text-base min-w-[140px]",
};

const FrameworkBadge: React.FC<FrameworkBadgeProps> = ({ name, size = "md" }) => {
  // Pick a random hover color once
  const hoverColor = useMemo(
    () => hoverColors[Math.floor(Math.random() * hoverColors.length)],
    []
  );

  // Cycle of colors for click toggling (first click = hoverColor)
  const toggleColors = useMemo(() => [hoverColor, ...activeColors], [hoverColor]);

  const [clickIndex, setClickIndex] = useState<number>(-1); // -1 = not clicked

  const currentColor =
    clickIndex === -1
      ? undefined // no click yet → let hover handle color
      : toggleColors[clickIndex % toggleColors.length]; // cycle through colors

  return (
    <motion.div
      className={`
        flex items-center justify-center
        rounded-xl border border-gray-200
        bg-white/80 backdrop-blur-md
        shadow-[0_2px_15px_rgba(0,0,0,0.06)]
        hover:border-gray-300
        ${sizeClasses[size]}
        cursor-pointer
      `}
      whileHover={{
        scale: 1.08,
        backgroundColor: currentColor ?? hoverColor,
      }}
      animate={{
        scale: 1,
        backgroundColor: currentColor ?? "#ffffffcc",
      }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 20 }, // smooth + fast spring
        backgroundColor: { type: "tween", duration: 0.15, ease: "easeOut" }, // smooth & snappy
      }}
      onClick={() => setClickIndex((prev) => prev + 1)}
      whileTap={{ scale: 1.05 }}
    >
      <span className="font-medium text-gray-700 tracking-wide">{name}</span>
    </motion.div>
  );
};

export default FrameworkBadge;
