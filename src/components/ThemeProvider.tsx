"use client";

import { useEffect } from "react";

const THEME_SCRIPT = `(function(){try{var d=document.documentElement;var c=localStorage.getItem('theme');if(c==='dark'||(c!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}else{d.classList.remove('dark')}}catch(e){}})()`;

export default function ThemeProvider() {
  useEffect(() => {
    // Re-apply on mount in case SSR didn't match
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") {
        document.documentElement.classList.add("dark");
      } else if (stored === "light") {
        document.documentElement.classList.remove("dark");
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      }
    } catch {}
  }, []);

  // Inline script runs immediately during HTML parse — prevents FOUC
  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }}
    />
  );
}
