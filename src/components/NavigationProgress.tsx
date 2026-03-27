"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * NavigationProgress — thin accent bar at the very top that animates during
 * page transitions (route changes). Distinct from ScrollProgress which shows
 * scroll depth. Placed at top-[2px] so both bars stack without overlap:
 *   - top-0:    ScrollProgress (scroll depth, z-50)
 *   - top-[2px]: NavigationProgress (page load, z-[60])
 */
export default function NavigationProgress() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathnameRef = useRef(pathname);

  useEffect(() => {
    if (pathnameRef.current === pathname) return;
    pathnameRef.current = pathname;

    const t0 = setTimeout(() => {
      setLoading(true);
      setProgress(30);
    }, 0);
    const t1 = setTimeout(() => setProgress(70), 100);
    const t2 = setTimeout(() => setProgress(100), 200);
    const t3 = setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 500);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  if (!loading && progress === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-[2px] left-0 h-[2px] z-[60] pointer-events-none"
      style={{
        width: `${progress}%`,
        opacity: loading ? 1 : 0,
        backgroundColor: "var(--color-accent)",
        transition: "width 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
      }}
    />
  );
}
