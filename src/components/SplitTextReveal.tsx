"use client";

import { m } from "framer-motion";

interface SplitTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}

const charVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -40 },
  visible: { opacity: 1, y: 0, rotateX: 0 },
};

export default function SplitTextReveal({
  text,
  className = "",
  delay = 0,
  charDelay = 0.025,
  as: Tag = "span",
}: SplitTextRevealProps) {
  const chars = text.split("");

  return (
    <Tag className={className} aria-label={text}>
      <m.span
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: charDelay,
              delayChildren: delay,
            },
          },
        }}
        className="inline-flex flex-wrap"
        aria-hidden="true"
      >
        {chars.map((char, i) => (
          <m.span
            key={i}
            variants={charVariants}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
            style={{
              transformOrigin: "bottom center",
              whiteSpace: char === " " ? "pre" : "normal",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </m.span>
        ))}
      </m.span>
    </Tag>
  );
}
