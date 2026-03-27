"use client";
import { useSyncExternalStore } from "react";

interface ConsentData {
  necessary: boolean;
  analytics: boolean;
}

// Cache the last parsed result to avoid infinite re-renders
let cachedRaw: string | null = null;
let cachedResult: ConsentData | null = null;

function getSnapshot(): ConsentData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem("cookie-consent");
    if (raw === cachedRaw) return cachedResult;
    cachedRaw = raw;
    cachedResult = raw ? JSON.parse(raw) : null;
    return cachedResult;
  } catch {
    return null;
  }
}

function getServerSnapshot(): ConsentData | null {
  return null;
}

function subscribe(callback: () => void) {
  const onStorage = (e: StorageEvent) => {
    if (e.key === "cookie-consent") callback();
  };
  const onCustom = () => callback();
  window.addEventListener("storage", onStorage);
  window.addEventListener("consent-updated", onCustom);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("consent-updated", onCustom);
  };
}

export function useConsent() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
