import React, { useRef } from "react";
import { motion } from "framer-motion";
import profilePhoto from "../assets/Profil1.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import FrameworkBadge from "../components/FrameworkBadge";
import { frameworks } from "../data/frameworks";
import AnimatedText from "../components/AnimatedText";
import {
  fadeUpButtonVariants,
  containerVariants,
  itemVariants,
} from "../utils/animations";
import ProjectCard from "../components/ProjectCard";
import { styleInterestProjects } from "../data/styleInterestProjects";
import Button from "../components/Button";
import { useSectionInView } from "../utils/useSectionInView";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const whatIDoRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLDivElement>(null);
  const sayHelloRef = useRef<HTMLDivElement>(null);

  const isAboutInView = useSectionInView(aboutRef as React.RefObject<HTMLElement>);
  const isWhatInView = useSectionInView(whatIDoRef as React.RefObject<HTMLElement>);
  const isSayHelloInView = useSectionInView(sayHelloRef as React.RefObject<HTMLElement>);

  const aboutTitle = "ABOUT";
  const whatIDoTitle = "WHAT I DO";
  const sayHelloTitle = "SAY HELLO";

  const aboutText =
    "I’m a curious and driven frontend developer who enjoys building modern, responsive, and user-focused web experiences. I work primarily with React, TypeScript, and Tailwind CSS, combining clean code with strong attention to design and usability. I’m currently seeking opportunities as a frontend intern or junior developer where I can grow, contribute, and learn within a collaborative team.";

  const whatIDoText =
    "I build component-driven interfaces with React and TypeScript, focusing on maintainable structure, accessibility, and responsive design. I integrate REST APIs, manage application state, and create smooth interactions using modern tooling. I value clear communication, thoughtful UX decisions, and writing code that’s easy to understand, scale, and collaborate on.";

  const titleDuration = aboutTitle.length * 0.08 + 0.5;
  const paragraphWords = aboutText.split(" ");
  const buttonsDelay = 0.03 * paragraphWords.length + titleDuration;

  return (
    <div className="bg-gray-50">

      {/* ------------------ ABOUT ------------------ */}
      <section
        ref={aboutRef}
        className="px-6 sm:px-8 md:px-12 pt-12 pb-32 min-h-screen flex flex-col md:flex-row items-start md:space-x-16"
      >
        <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-start">
          <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] font-medium tracking-tight uppercase leading-[1] text-gray-900 flex flex-wrap">
            <AnimatedText text={aboutTitle} type="letters" inView={isAboutInView} />
          </h1>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg max-w-full md:max-w-xl">
            <AnimatedText text={aboutText} type="words" inView={isAboutInView} />
          </p>

          <motion.div
            className="flex flex-row flex-wrap gap-4 mt-4 justify-start"
            variants={fadeUpButtonVariants}
            initial="hidden"
            animate={isAboutInView ? "visible" : "hidden"}
            transition={{ delay: buttonsDelay }}
          >
            <Button href="mailto:nova.zandkarimi@medieinstitutet.se">Say hello</Button>
            <Button href="/book" variant="secondary">Book a call</Button>
          </motion.div>
        </div>

        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-8 md:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={profilePhoto}
            alt="Nova"
            className="w-[80vw] sm:w-[70vw] md:w-[60vw] max-w-[720px] aspect-square object-cover shadow-lg mr-[0.3rem] mt-[0.3rem]"
          />
        </motion.div>
      </section>

      {/* ------------------ WHAT I DO ------------------ */}
      <section
        ref={whatIDoRef}
        className="px-6 sm:px-8 md:px-12 pt-20 pb-28 bg-white flex flex-col md:flex-row md:space-x-20 items-start"
      >
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
        <div className="w-full flex justify-center">
  <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] font-bold tracking-tight uppercase leading-[1] text-gray-900 whitespace-nowrap">
    <AnimatedText text={whatIDoTitle} type="letters" inView={isWhatInView} />
  </h1>
</div>


          <p className="text-gray-700 text-base sm:text-xl mt-6 max-w-full md:max-w-xl leading-relaxed font-light">
            <AnimatedText text={whatIDoText} type="words" inView={isWhatInView} />
          </p>
        </div>

        <motion.div
          className="w-full md:w-1/2 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-3 gap-3"
          initial={{ opacity: 0, x: 50 }}
          animate={isWhatInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {frameworks.map((fw) => (
            <FrameworkBadge key={fw} name={fw} size="sm" />
          ))}
        </motion.div>
      </section>

      {/* ------------------ STYLE / DESIGN INTEREST ------------------ */}
      <section
        ref={styleRef}
        className="px-6 sm:px-8 md:px-12 py-24 bg-white min-h-screen"
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          My Style & Design Interests
        </motion.h2>

        {/* ✅ MOBILE ONLY — 2x2 GRID + STAGGER */}
        <motion.div
          className="grid grid-cols-2 gap-4 md:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {styleInterestProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard
                {...project}
                size="small"
                link={project.link || ""}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ✅ DESKTOP / TABLET — UNCHANGED */}
        <motion.div
          className="hidden md:flex md:flex-row md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="flex flex-col gap-6 md:w-1/3">
            <motion.div variants={itemVariants}>
              <ProjectCard {...styleInterestProjects[0]} size="breakout" link={styleInterestProjects[0].link || ""} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProjectCard {...styleInterestProjects[1]} size="small" link={styleInterestProjects[1].link || ""} />
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-col gap-6 md:w-1/3">
            <motion.div variants={itemVariants}>
              <ProjectCard {...styleInterestProjects[2]} size="wide" link={styleInterestProjects[2].link || ""} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProjectCard {...styleInterestProjects[3]} size="small" link={styleInterestProjects[3].link || ""} />
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-col gap-6 md:w-1/3">
            <motion.div variants={itemVariants}>
              <ProjectCard {...styleInterestProjects[4]} size="breakout" link={styleInterestProjects[4].link || ""} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProjectCard {...styleInterestProjects[5]} size="large" link={styleInterestProjects[5].link || ""} />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.p
          className="text-center mt-8 text-gray-600 font-light max-w-2xl mx-auto text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Visual experiments and design inspiration. Images are placeholders for now.
        </motion.p>
              </section>

      {/* ------------------ SAY HELLO ------------------ */}
      <section
        ref={sayHelloRef}
        className="px-6 sm:px-8 md:px-12 py-20 bg-white min-h-screen flex flex-col items-center justify-center"
      >
        <h1
          className="
            text-[4.5rem] sm:text-[6rem] md:text-[10rem]
            font-bold tracking-tight uppercase leading-[1]
            text-gray-900 text-center whitespace-nowrap
          "
        >
          <AnimatedText text={sayHelloTitle} type="letters" inView={isSayHelloInView} />
        </h1>

        <motion.div
          className="flex flex-row flex-wrap items-center gap-4 mt-12 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isSayHelloInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button href="https://github.com/Novaav" iconOnly ariaLabel="GitHub profile">
            <FaGithub size={28} />
          </Button>

          <Button href="mailto:nova.zandkarimi@medieinstitutet.se" size="lg">
            Get in touch
          </Button>

          <Button
            href="https://www.linkedin.com/in/nova-zandkarimi-8b289032b/"
            iconOnly
            ariaLabel="LinkedIn profile"
          >
            <FaLinkedin size={28} />
          </Button>
        </motion.div>
      </section>

    </div>
  );
};

export default About;
