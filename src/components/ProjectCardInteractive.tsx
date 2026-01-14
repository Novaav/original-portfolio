import React from "react";
import type { KeyboardEvent } from "react";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { projectHoverVariant } from "../utils/animations";

type ProjectCardInteractiveProps = Project & {
  onClick: () => void;
  layoutId: string;
  isSelected?: boolean;
};

const ProjectCardInteractive: React.FC<ProjectCardInteractiveProps> = ({
  title,
  image,
  onClick,
  layoutId,
  isSelected = false,
}) => {
  // Handle keyboard activation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open project: ${title}`}
      className={`relative overflow-hidden cursor-pointer shadow-lg ${
        isSelected ? "z-20" : ""
      } w-full aspect-video group focus:outline-none focus:ring-4 focus:ring-indigo-500`}
      variants={projectHoverVariant}
      whileHover="hover"
      style={{ willChange: "transform, opacity" }}
    >
      {/* Base Image */}
      <motion.img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ willChange: "opacity, transform" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-black/0 px-4 py-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 z-10 transition-opacity duration-300">
        <h3 className="text-white text-xl md:text-2xl font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
};

export default ProjectCardInteractive;
