"use client";

import { motion } from "framer-motion";

const entries = [
  {
    years: "2017-2022",
    company: "Gruen Associates",
    role: "Architectural Designer / Project Manager",
    proof:
      "4 simultaneous projects, $25M+. Luxury retail TI (Louis Vuitton, Balenciaga), government infrastructure, restaurant kitchens. Managed 20+ consultants, 4 GCs.",
  },
  {
    years: "2022-2023",
    company: "Entertainment Partners",
    role: "Product Owner",
    proof:
      "1M users, 99.98% uptime, 12 APIs consolidated into unified platform. Led cross-functional team through full product lifecycle.",
  },
  {
    years: "2023-2025",
    company: "Happy Friday Coffee",
    role: "Founding Team",
    proof:
      "Built commercial kitchen from ground up. Scaled 250 to 1,400 cups/week. Energy audit: 65% energy reduction. Full operations management.",
  },
  {
    years: "2023-Present",
    company: "Advisory",
    role: "Owner's Representative",
    proof:
      "7-region portfolio. 40+ stakeholders. Multi-market capital planning. Construction oversight and vendor coordination.",
  },
];

export default function Timeline() {
  return (
    <section className="py-[120px] md:py-[160px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-instrument-serif)] text-3xl md:text-4xl text-text-primary mb-16"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border-default" />

          <div className="space-y-12 md:space-y-16">
            {entries.map((entry, i) => (
              <motion.div
                key={entry.years}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="pl-8 md:pl-14 relative"
              >
                <div className="absolute left-0 md:left-4 top-2 w-2 h-2 rounded-full bg-gold -translate-x-[3.5px]" />
                <p className="font-[family-name:var(--font-geist-mono)] text-sm text-gold mb-1">
                  {entry.years}
                </p>
                <h3 className="text-lg text-text-primary font-medium">
                  {entry.company}
                </h3>
                <p className="text-sm text-text-accent mb-3">{entry.role}</p>
                <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
                  {entry.proof}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
