import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillBar({ name, value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="mb-7">
      <div className="flex justify-between mb-2">
        <h3 className="text-base font-medium text-ink">{name}</h3>
        <span className="text-sm font-semibold text-brand">{value}%</span>
      </div>
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${value}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-brand"
        />
      </div>
    </div>
  );
}
