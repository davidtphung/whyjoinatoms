"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2000,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-[family-name:var(--font-geist-mono)]">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const metrics = [
  { target: 25, prefix: "$", suffix: "M+", label: "Commercial construction managed" },
  { target: 95, suffix: "%", label: "On-time delivery rate" },
  { target: 3, suffix: "%", label: "CO rate (vs 8-12% industry)" },
  { target: 460, suffix: "%", label: "Kitchen throughput scaling" },
  { target: 1.8, suffix: "d", label: "RFI turnaround (vs 7-14 industry)" },
  { target: 155, prefix: "$", suffix: "K", label: "Change orders rejected w/ documentation" },
];

export default function TheNumbers() {
  return (
    <section className="py-[120px] md:py-[160px] px-6 bg-bg-surface">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-instrument-serif)] text-3xl md:text-4xl text-text-primary mb-16"
        >
          The Numbers
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-8 border-b-2 border-border-accent"
            >
              <p className="text-4xl md:text-5xl text-text-primary font-light mb-3">
                <AnimatedCounter
                  target={m.target}
                  prefix={m.prefix}
                  suffix={m.suffix}
                />
              </p>
              <p className="text-sm text-text-dim">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
