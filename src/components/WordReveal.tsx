"use client";

import React, { useEffect, useRef } from "react";

interface WordRevealProps {
  children: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  stagger?: number;
}

export default function WordReveal({
  children,
  className = "",
  tag: Tag = "h2",
  delay = 0,
  stagger = 80,
}: WordRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.querySelectorAll(".word-reveal-item").forEach((word) => {
        (word as HTMLElement).style.opacity = "1";
        (word as HTMLElement).style.clipPath = "inset(0 0 0% 0)";
        (word as HTMLElement).style.transform = "none";
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const words = el.querySelectorAll(".word-reveal-item");
          words.forEach((word, i) => {
            setTimeout(() => {
              (word as HTMLElement).classList.add("word-revealed");
            }, delay + i * stagger);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, stagger]);

  const words = children.split(" ");

  return (
    <Tag ref={containerRef as React.RefObject<HTMLHeadingElement & HTMLParagraphElement>} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="word-reveal-item inline-block"
          style={{
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
            transform: "translateY(12px)",
            transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)`,
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </Tag>
  );
}
