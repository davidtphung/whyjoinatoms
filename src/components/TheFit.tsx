"use client";

import { motion } from "framer-motion";

const rows = [
  {
    need: "MEP coordination experience",
    have: "5 years HVAC, plumbing, electrical across 4 projects",
    proof: "Type I hoods, Ansul, grease interceptors, MAU balancing",
  },
  {
    need: "Commercial kitchen built",
    have: "Built kitchen from ground up at Happy Friday",
    proof: "Walk-in cooler, 200A panel, hood installation, health dept sign-off",
  },
  {
    need: "Pay application management",
    have: "Managed $25M+ in pay apps across 4 GCs",
    proof: "VALENCE Pay App Auditor module (built & live)",
  },
  {
    need: "Permitting & code compliance",
    have: "LA DBS, LADWP, fire dept, health dept approvals",
    proof: "VALENCE Code Pre-Screen module automates checks",
  },
  {
    need: "High agency, self-starter",
    have: "Built platform, analysis & framework before applying",
    proof: "VALENCE, 25-city analysis, BRV metric \u2014 all unprompted",
  },
  {
    need: "Data-driven decision making",
    have: "Created Bay Revenue Velocity framework: 35 metrics",
    proof: "BRV connects construction speed to facility NOI",
  },
  {
    need: "Design-construction bridge",
    have: "B.Arch degree + construction PM experience",
    proof: "5 years at Gruen: design through CA on $25M+ projects",
  },
  {
    need: "Speed & parallel execution",
    have: "1.8-day RFI turnaround (vs 7\u201314 industry)",
    proof: "4 simultaneous projects, 20+ consultants managed",
  },
  {
    need: "Technology & tools fluency",
    have: "Built full-stack platform from scratch",
    proof: "VALENCE: 6 modules, 3,494 lines, live at valence.davidtphung.com",
  },
  {
    need: "Immediate availability",
    have: "Ready to start",
    proof: "Los Angeles based. No relocation needed.",
  },
];

export default function TheFit() {
  return (
    <section className="py-[120px] md:py-[160px] px-6 bg-bg-card">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-instrument-serif)] text-3xl md:text-4xl text-text-primary mb-16"
        >
          Every JD Requirement. Matched.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="bg-navy/30">
                <th className="text-left py-4 px-5 text-xs uppercase tracking-wider text-text-dim font-normal rounded-tl-lg">
                  CK Needs
                </th>
                <th className="text-left py-4 px-5 text-xs uppercase tracking-wider text-text-dim font-normal">
                  I Have
                </th>
                <th className="text-left py-4 px-5 text-xs uppercase tracking-wider text-text-dim font-normal rounded-tr-lg">
                  Proof
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row.need}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.04 }}
                  className={`border-b border-border-default/30 ${
                    i % 2 === 1 ? "bg-bg-surface/30" : ""
                  }`}
                >
                  <td className="py-4 px-5 text-sm text-text-secondary">
                    {row.need}
                  </td>
                  <td className="py-4 px-5 text-sm text-text-primary">
                    {row.have}
                  </td>
                  <td className="py-4 px-5 text-sm text-text-accent">
                    {row.proof}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
