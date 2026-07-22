import { useEffect, useRef, useState } from 'react';
import { useInView } from './useInView';
import { useReducedMotion } from 'framer-motion';

/**
 * Animates a number from 0 to `end` once the element scrolls into view,
 * then stays put (mirrors react-countup's `enableScrollSpy scrollSpyOnce`).
 *
 * Replaces the react-countup package: that package is CJS-only with no
 * `module`/`exports` field, which turned out to trigger a real default-export
 * interop bug under a newer bundler (see project history) — a self-contained
 * hook with no third-party runtime dependency removes that whole class of risk.
 */
export function useCountUp(end: number, durationMs = 1800) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [value, setValue] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    if (shouldReduceMotion) {
      setValue(end);
      return;
    }

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      // easeOutCubic — matches the gentle deceleration react-countup used.
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, durationMs, shouldReduceMotion]);

  return { ref, value };
}
