"use client";

import { motion } from "framer-motion";

const comparisonRows = [
  {
    label: "Saw the problem",
    payne: "Knew DoorDash needed logistics",
    phung: "Knew CK needs faster bay delivery",
  },
  {
    label: "Built the proof",
    payne: "Built prototype delivery routes",
    phung: "Built VALENCE: 6-module platform",
  },
  {
    label: "Did the research",
    payne: "Mapped restaurant density in Palo Alto",
    phung: "Mapped 25 cities, 41.2M people, $10.3B TAM",
  },
  {
    label: "Created the metric",
    payne: "Delivery time as core KPI",
    phung: "Bay Revenue Velocity (BRV) framework",
  },
  {
    label: "Then applied",
    payne: "Hired as Head of Real Estate",
    phung: "Applying as Construction PM",
  },
];

export default function BiasForAction() {
  return (
    <section className="py-[120px] md:py-[160px] px-6 bg-bg-card">
      <div className="max-w-[1200px] mx-auto">
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
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border-default">
                <th className="text-left py-4 pr-6 text-xs uppercase tracking-wider text-text-dim font-normal">
                  Pattern
                </th>
                <th className="text-left py-4 pr-6 text-xs uppercase tracking-wider text-text-dim font-normal">
                  Christopher Payne &middot; DoorDash
                </th>
                <th className="text-left py-4 text-xs uppercase tracking-wider text-text-dim font-normal">
                  David T Phung &middot; CK
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <motion.tr
                  key={row.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-b border-border-default/50"
                >
                  <td className="py-4 pr-6 text-sm text-gold font-medium">
                    {row.label}
                  </td>
                  <td className="py-4 pr-6 text-sm text-text-secondary">
                    {row.payne}
                  </td>
                  <td className="py-4 text-sm text-text-primary">
                    {row.phung}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-16 border border-border-default rounded-lg p-8 md:p-10"
        >
          <p className="text-text-secondary text-base">
            The best way to show how I&apos;d operate is to just start
            operating.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
