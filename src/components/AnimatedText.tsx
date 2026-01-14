import React from "react";
import { motion } from "framer-motion";
import {
  letterVariants,
  wordVariants,
  LETTER_DELAY,
  WORD_DELAY,
} from "../utils/animations";

interface AnimatedTextProps {
  text: string;
  type?: "letters" | "words";
  timing?: "hero" | "normal" | "fast";
  inView?: boolean;
  className?: string;
  letterClassName?: string; // ✅ added
  style?: React.CSSProperties;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  type = "letters",
  timing = "normal",
  inView = true,
  className = "",
  letterClassName = "", // ✅ added
  style,
}) => {
  if (type === "words") {
    const delay = timing === "fast" ? WORD_DELAY.fast : WORD_DELAY.normal;

    return (
      <>
        {text.split(" ").map((word, i) => (
          <motion.span
            key={i}
            custom={{ index: i, delay }}
            variants={wordVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`inline-block mr-[0.35em] mb-1 ${className}`}
            style={style}
          >
            {word}
          </motion.span>
        ))}
      </>
    );
  }

  const delay =
    timing === "hero"
      ? LETTER_DELAY.hero
      : timing === "fast"
      ? LETTER_DELAY.fast
      : LETTER_DELAY.normal;

  return (
    <>
      {text.split("").map((letter, i) => (
        <motion.span
          key={i}
          custom={{ index: i, delay }}
          variants={letterVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`inline-block ${letterClassName}`} // ✅ use letterClassName here
          style={style}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
};

export default AnimatedText;
