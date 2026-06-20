"use client";

import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  /** target number to count up to */
  end: number;
  /** duration of the animation in ms */
  duration?: number;
  /** only start counting once this becomes true (e.g. driven by whileInView) */
  start: boolean;
}

/**
 * Counts a number up from 0 to `end` using requestAnimationFrame (not
 * setInterval) so the animation stays smooth and frame-rate independent.
 * Uses an easeOutCubic curve so the count settles instead of stopping abruptly.
 */
export function useCountUp({ end, duration = 1500, start }: UseCountUpOptions) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    startTimeRef.current = null;

    const tick = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      setValue(Math.round(eased * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [start, end, duration]);

  return value;
}
