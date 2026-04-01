"use client";

import { motion } from "framer-motion";
import { jdMatch } from "@/lib/data";

export default function JDMatch() {
  return (
    <section className="py-[120px] md:py-[140px] px-6">
      <div className="max-w-[960px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-dm-serif)] text-2xl md:text-3xl text-text-primary mb-14"
        >
          Every requirement in the job description. Matched.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border-default">
                <th className="text-left py-3 pr-6 text-xs uppercase tracking-wider text-text-dim font-normal w-1/2">
                  What CloudKitchens Needs
                </th>
                <th className="text-left py-3 text-xs uppercase tracking-wider text-text-dim font-normal w-1/2">
                  What I Bring
                </th>
              </tr>
            </thead>
            <tbody>
              {jdMatch.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-border-default/30 ${
                    i % 2 === 1 ? "bg-bg-surface/40" : ""
                  }`}
                >
                  <td className="py-4 pr-6 text-sm text-text-muted align-top">
                    {row.need}
                  </td>
                  <td className="py-4 text-sm text-text-primary align-top">
                    {row.have}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-text-dim mt-8"
        >
          Procore / Bluebeam Revu / MS Project — all three tools listed in the role.
        </motion.p>
      </div>
    </section>
  );
}
