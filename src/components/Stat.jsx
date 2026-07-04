import { useEffect, useRef, useState } from 'react';

/**
 * Animated number that counts up from 0 to `value` when scrolled into view.
 * Props: value (number), suffix, prefix, label, duration (ms)
 */
export default function Stat({ value, suffix = '', prefix = '', label, duration = 1600 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            run();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-black text-gradient leading-none">
        {prefix}
        {display.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-3 text-sm font-bold uppercase tracking-widest text-brand-muted">{label}</div>
    </div>
  );
}
