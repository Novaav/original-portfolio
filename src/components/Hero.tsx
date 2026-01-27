import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { motion, useInView } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import Button from "./Button";
import { projects } from "../data/projects";

const title = "NOVAZANDKARIMI";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { margin: "-200px 0px -100px 0px" });

  const projectImages: string[] = projects
    .filter((p) => p.image)
    .slice(0, 3)
    .map((p) => p.image as string);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[70vh] bg-white
                 px-4 md:px-8 pt-4 md:pt-6"
    >
     <h1 className="text-[clamp(2.5rem,8vw,8rem)] md:text-[8rem] lg:text-[10rem] font-medium uppercase leading-[1] w-full flex mb-3 overflow-visible">
  <AnimatedText
    text={title}
    type="letters"
    timing="hero"
    inView={isInView}
    className="flex-1 flex justify-center items-center"
    letterClassName="flex-1 text-center !mx-0 !px-0"
  />
</h1>


      {/* MAIN CONTENT */}
      <div className="flex flex-col md:flex-row md:gap-12 items-stretch">
        {/* LEFT COLUMN */}
        <div className="flex flex-col md:w-1/2 space-y-3">
          {/* SWIPER */}
          <div className="relative w-full aspect-[16/9] overflow-hidden shadow-lg">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              loop
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="w-full h-full"
            >
              {projectImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`Project ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* STATIC LEFT DESCRIPTION */}
          <p className="text-xl md:text-xl font-semibold text-gray-900">
            Driven by creativity and clean, maintainable code.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="flex flex-col md:w-1/2 justify-end mt-6"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Wrap description + buttons in overflow-visible container */}
          <div className="flex w-full justify-center mt-6 md:mt-12 overflow-visible">
            <div className="flex flex-col w-fit space-y-6 text-left items-start pb-2">
              {/* ✅ Added pb-2 to give extra space under buttons */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="
                  text-base md:text-lg
                  font-[350]
                  text-gray-700
                  max-w-[36ch]
                  leading-snug
                "
              >
                I create interactive websites with smooth animations and micro-interactions. My focus is on clean, maintainable code and responsive, user-friendly experiences.
              </motion.p>

              {/* BUTTONS */}
              <div className="flex space-x-4 pt-1">
                <Button href="/projects" size="md">See my projects</Button>
                <Button href="/about" size="md">About</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
