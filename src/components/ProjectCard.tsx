import React, { useState } from "react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  image: string;
  link: string;
  tags?: string[];
  placeholder?: boolean;
  size?: "large" | "small" | "wide" | "breakout";
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  link,
  tags = [],
  placeholder = false,
  size = "small",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  let heightClass = "h-72";
  let extraClass = "";
  switch (size) {
    case "large":
      heightClass = "h-96 sm:h-[28rem]";
      break;
    case "wide":
      heightClass = "h-64 sm:h-80";
      break;
    case "breakout":
      heightClass = "h-80 sm:h-[32rem]";
      extraClass = "-translate-y-8 md:-translate-y-12";
      break;
  }

  if (placeholder) {
    return (
      <motion.div
        layout
        className={`flex flex-col justify-center items-center text-center rounded-xl bg-gray-100 border border-gray-300 shadow-md ${heightClass}`}
      >
        <span className="text-2xl font-semibold text-gray-600">🚧 {title}</span>
        <p className="mt-2 text-gray-500 text-sm w-2/3">More details coming soon.</p>
      </motion.div>
    );
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      layout
      whileHover={isLoaded ? { scale: 1.04 } : {}}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className={`relative overflow-hidden rounded-xl cursor-pointer group shadow-lg
        ${isLoaded ? "hover:shadow-2xl" : "pointer-events-none"} 
        transition-shadow duration-300
        ${heightClass} ${extraClass}`}
      style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.6s ease-out" }}
    >
      <motion.img
        src={image}
        alt={title}
        loading="lazy"
        className={`w-full h-full object-cover transition-transform duration-500 
          ${isLoaded ? "group-hover:scale-105" : ""}
          ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        style={{ willChange: "transform, opacity" }}
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-black/0 px-4 py-4 transition-opacity duration-500 flex flex-col gap-2 items-start opacity-0 group-hover:opacity-100"
        style={{ willChange: "opacity" }}
      >
        <h3 className="text-white text-xl md:text-2xl font-semibold">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.a>
  );
};

export default ProjectCard;
