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
    <section className="relative py-[120px] md:py-[160px] px-6 overflow-hidden">
      {/* American Dynamism poster — very dark overlay so it reads as data backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/poster-american-dynamism.png')" }}
      />
      <div className="absolute inset-0 bg-[rgba(5,5,5,0.88)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-[10px] tracking-[6px] uppercase text-gold mb-4">THE RECORD</p>
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl md:text-4xl text-text-primary">
            The Numbers
          </h2>
        </motion.div>

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
              className="py-8 border-b border-gold/25 group"
            >
              <p className="text-4xl md:text-5xl text-text-primary font-light mb-3 group-hover:text-gold transition-colors duration-500">
                <AnimatedCounter
                  target={m.target}
                  prefix={m.prefix}
                  suffix={m.suffix}
                />
              </p>
              <p className="text-xs tracking-[2px] uppercase text-text-dim">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
