"use client";

import { useSyncExternalStore } from "react";

/**
 * Realistic visitor count based on Czech time of day.
 * Peak: 10:00-16:00 (250-420)
 * Evening: 17:00-22:00 (150-300)
 * Night: 23:00-05:00 (15-60)
 * Morning: 06:00-09:00 (80-180)
 */
function getBaseRange(): [number, number] {
  const hour = new Date().getHours();

  if (hour >= 0 && hour < 5) return [8, 28];          // Deep night
  if (hour >= 5 && hour < 7) return [18, 45];         // Early morning
  if (hour >= 7 && hour < 9) return [50, 95];         // Morning ramp-up
  if (hour >= 9 && hour < 12) return [120, 195];      // Morning peak
  if (hour >= 12 && hour < 14) return [160, 213];     // Lunch peak (max 213)
  if (hour >= 14 && hour < 17) return [140, 210];     // Afternoon
  if (hour >= 17 && hour < 20) return [90, 165];      // Evening
  if (hour >= 20 && hour < 22) return [55, 110];      // Late evening
  return [25, 60];                                     // 22:00-23:59
}

function randomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Small fluctuation: ±5-12% from current value for natural feel
function fluctuate(current: number): number {
  const [min, max] = getBaseRange();
  const jitter = Math.floor(current * (0.03 + Math.random() * 0.09));
  const direction = Math.random() > 0.5 ? 1 : -1;
  const next = current + direction * jitter;
  // Clamp to current time range
  return Math.max(min, Math.min(max, next));
}

// Module-level state for useSyncExternalStore
let currentCount = 0;
let initialized = false;
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- kept for potential cleanup
let intervalId: ReturnType<typeof setInterval> | null = null;
const listeners = new Set<() => void>();

function initCount() {
  if (initialized) return;
  initialized = true;
  const [min, max] = getBaseRange();
  currentCount = randomInRange(min, max);

  // Small fluctuation every 4-8 seconds (random interval feels more natural)
  function tick() {
    currentCount = fluctuate(currentCount);
    listeners.forEach((cb) => cb());
    // Next tick in 4-8 seconds
    intervalId = setTimeout(tick, 4000 + Math.random() * 4000);
  }
  intervalId = setTimeout(tick, 4000 + Math.random() * 4000);

  // Re-calibrate base range every 10 minutes (handles hour changes)
  setInterval(() => {
    const [min, max] = getBaseRange();
    if (currentCount < min || currentCount > max) {
      // Gradually move toward new range
      const target = randomInRange(min, max);
      currentCount = Math.round(currentCount + (target - currentCount) * 0.3);
      listeners.forEach((cb) => cb());
    }
  }, 600000);
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  initCount();
  return () => { listeners.delete(callback); };
}

function getSnapshot() {
  if (!initialized) {
    const [min, max] = getBaseRange();
    currentCount = randomInRange(min, max);
  }
  return currentCount;
}

function getServerSnapshot() {
  // Server: return a plausible midpoint for current hour
  const [min, max] = getBaseRange();
  return Math.round((min + max) / 2);
}

export default function VisitorCount() {
  const count = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
      </span>
      <p className="text-xs text-text-secondary" aria-live="off">
        <span className="tabular-nums font-medium text-text" style={{ transition: "opacity 0.5s ease" }}>
          {count}
        </span>
        {" "}lidí právě tvoří
      </p>
    </div>
  );
}
