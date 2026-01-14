import React, {
  useState,
  useCallback,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCardInteractive from "../components/ProjectCardInteractive";
import {
  containerVariants,
  itemVariants,
  spotlightImageVariant,
} from "../utils/animations";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import FrameworkBadge from "../components/FrameworkBadge";
import AnimatedText from "../components/AnimatedText";
import Button from "../components/Button";
import { useSectionInView } from "../utils/useSectionInView";

/* -------------------------------------------------------------------------- */
/*                                PROJECT MODAL                                */
/* -------------------------------------------------------------------------- */

interface ProjectModalProps {
  project: (typeof projects)[number];
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const images: string[] = [];
  if (project.image) images.push(project.image);
  if (project.imageHover) images.push(project.imageHover);

  const scrollY = useRef(window.scrollY);

  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: scrollY.current });
    return () => {
      document.body.style.overflow = "auto";
      window.scrollTo({ top: scrollY.current });
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close Button */}
      <motion.button
        onClick={onClose}
        className="absolute top-6 left-6 z-50 p-2 rounded-full hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-label="Close project"
      >
        <ArrowLeftIcon className="w-6 h-6 text-black" />
      </motion.button>

      {/* ------------------ CONTAINER ------------------ */}
      <motion.div
        className="flex flex-col md:flex-row md:h-screen md:items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        {/* ------------------ INFO PANEL ------------------ */}
        <motion.div
          className="w-full md:w-1/2 p-8 flex flex-col"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
        >
          {/* Title */}
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
            <AnimatedText
              text={project.title}
              type="letters"
              timing="fast"
              inView
            />
          </h3>

          {/* Desktop description */}
          <p className="hidden md:block text-gray-700 text-lg mt-2">
            <AnimatedText
              text={project.description || ""}
              type="words"
              timing="fast"
              inView
            />
          </p>

          {/* Desktop frameworks */}
          {(project.frameworks ?? []).length > 0 && (
            <div className="hidden md:flex flex-wrap gap-3 mt-6">
              {(project.frameworks ?? []).map((fw, i) => (
                <FrameworkBadge key={i} name={fw} size="sm" />
              ))}
            </div>
          )}

          {/* Desktop button */}
          {project.repoUrl && (
            <div className="hidden md:block mt-8">
              <Button href={project.repoUrl}>View Code</Button>
            </div>
          )}

          {/* ------------------ MOBILE ONLY ------------------ */}
          <div className="flex flex-col gap-6 md:hidden mt-4 items-center">
            {/* Media */}
            {project.video ? (
              <motion.video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-h-[50vh] object-contain rounded-xl shadow-lg"
                variants={spotlightImageVariant}
                initial="hidden"
                animate="visible"
                controls={false}
              />
            ) : (
              images.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full max-h-[50vh] object-contain rounded-xl shadow-lg"
                  variants={spotlightImageVariant}
                  initial="hidden"
                  animate="visible"
                  loading="lazy"
                />
              ))
            )}

            {/* Description */}
            {project.description && (
              <p className="text-gray-700 text-lg text-center">
                <AnimatedText
                  text={project.description}
                  type="words"
                  timing="fast"
                  inView
                />
              </p>
            )}

            {/* Mobile frameworks */}
            {(project.frameworks ?? []).length > 0 && (
              <div className="flex flex-wrap gap-3 justify-center">
                {(project.frameworks ?? []).map((fw, i) => (
                  <FrameworkBadge key={i} name={fw} size="sm" />
                ))}
              </div>
            )}

            {/* Button */}
            {project.repoUrl && (
              <div className="mt-4">
                <Button href={project.repoUrl}>View Code</Button>
              </div>
            )}
          </div>
        </motion.div>

        {/* ------------------ MEDIA PANEL ------------------ */}
        <motion.div
          className="hidden md:flex w-1/2 justify-center items-center py-16 gap-6 flex-col"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
        >
          {project.video ? (
            <motion.video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="max-w-[90%] max-h-[60vh] object-contain rounded-xl shadow-lg"
              variants={spotlightImageVariant}
              initial="hidden"
              animate="visible"
              controls={false}
            />
          ) : (
            images.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="max-w-[90%] max-h-[60vh] object-contain rounded-xl shadow-lg"
                variants={spotlightImageVariant}
                initial="hidden"
                animate="visible"
                loading="lazy"
              />
            ))
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               PROJECT GRID                                  */
/* -------------------------------------------------------------------------- */

interface ProjectGridProps {
  projects: typeof projects;
  onSelect: (id: string) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onSelect }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useSectionInView(gridRef as React.RefObject<HTMLElement>);

  return (
    <motion.div
      ref={gridRef}
      className="
        grid
        grid-cols-2
        md:grid-cols-3
        gap-6
        md:gap-10
        mt-8
      "
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {projects.map((p) => (
        <motion.div key={p.id} variants={itemVariants}>
          <ProjectCardInteractive
            {...p}
            onClick={() => onSelect(p.id)}
            layoutId={p.id} // fixes TS error
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                  PAGE                                       */
/* -------------------------------------------------------------------------- */

const Projects: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  const handleSelectProject = useCallback((id: string) => {
    setSelectedProjectId(id);
  }, []);

  const handleCloseProject = () => setSelectedProjectId(null);

  const mainProjects = projects.filter((p) => p.type === "main");
  const uiDemos = projects.filter((p) => p.type === "ui-demo");
  const selectedProject = projects.find(
    (p) => p.id === selectedProjectId
  );

  return (
    <section className="px-6 md:px-12 py-24 bg-white min-h-screen relative">
      {/* ------------------ MAIN PROJECTS ------------------ */}
      <div className="mb-4">
        <h2 className="text-6xl font-semibold mb-2 flex flex-wrap">
          <AnimatedText text="My Projects" type="letters" inView />
        </h2>

        {/* Updated description with live deployment note */}
        <p className="text-lg text-gray-500 max-w-3xl flex flex-wrap">
          <AnimatedText
            text="A selection of projects I’ve worked on, focusing on real-world problems, performance, and thoughtful UI/UX. Live deployment coming soon."
            type="words"
            inView
          />
        </p>
      </div>

      <ProjectGrid
        projects={mainProjects}
        onSelect={handleSelectProject}
      />

      {/* ------------------ UI DEMOS ------------------ */}
      <div className="mt-32 mb-4">
        <h2 className="text-6xl font-semibold mb-2 flex flex-wrap">
          <AnimatedText text="UI Demos" type="letters" inView />
        </h2>
        <p className="text-lg text-gray-500 max-w-3xl flex flex-wrap">
          <AnimatedText
            text="A few side projects exploring UI, motion, and interactions."
            type="words"
            inView
          />
        </p>
      </div>

      <ProjectGrid
        projects={uiDemos}
        onSelect={handleSelectProject}
      />

      {/* ------------------ MODAL ------------------ */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseProject}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
