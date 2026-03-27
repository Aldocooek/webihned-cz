"use client";

import { m, useReducedMotion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <>{children}</>;
  }

  return (
    <m.div
      initial={{ clipPath: "inset(8% 0 0 0)", opacity: 0 }}
      animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
        opacity: { duration: 0.3, ease: "linear" },
      }}
    >
      {children}
    </m.div>
  );
}
