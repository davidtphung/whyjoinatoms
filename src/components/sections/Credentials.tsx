"use client";

import { motion } from "framer-motion";
import { credentials } from "@/lib/data";

export default function Credentials() {
  return (
    <section className="py-16 md:py-20 px-6 bg-bg-surface">
      <div className="max-w-[960px] mx-auto text-center space-y-3">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm text-text-muted tracking-wide"
        >
          {credentials.tools}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-sm text-text-dim"
        >
          {credentials.education}  /  {credentials.logistics}
        </motion.p>
      </div>
    </section>
  );
}
