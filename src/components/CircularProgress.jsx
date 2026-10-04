import { useEffect, useRef, useState } from "react";

export default function CircularProgress({ value, name, lastWeek, lastMonth }) {
  const circleRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = circleRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return undefined;
    let raf;
    const start = performance.now();
    const duration = 1200;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setProgress(Math.round(t * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value]);

  const deg = (progress / 100) * 360;

  return (
    <div
      ref={circleRef}
      className="card rounded-2xl p-5 text-center transition-shadow"
    >
      <h3 className="font-display font-semibold mb-4 text-ink">{name}</h3>
      <div
        className="relative w-28 h-28 mx-auto rounded-full flex items-center justify-center"
        style={{
          background: `conic-gradient(var(--color-brand) ${deg}deg, var(--color-border) ${deg}deg)`,
        }}
      >
        <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center font-display font-bold text-xl text-ink">
          {progress}
          <sup className="text-xs ml-0.5 text-brand">%</sup>
        </div>
      </div>
      <div className="flex justify-around mt-4 text-sm">
        <div className="border-r border-border pr-2 flex-1">
          <div className="font-bold text-ink">{lastWeek}%</div>
          <span className="text-muted text-xs">Last week</span>
        </div>
        <div className="flex-1">
          <div className="font-bold text-ink">{lastMonth}%</div>
          <span className="text-muted text-xs">Last month</span>
        </div>
      </div>
    </div>
  );
}
