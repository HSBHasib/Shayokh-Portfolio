"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
      {subtitle && (
        <p className="mt-4 text-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
