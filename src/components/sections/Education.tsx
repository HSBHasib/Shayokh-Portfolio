"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { FiMapPin, FiBookOpen, FiAward } from "react-icons/fi";
import { useLanguage } from "@/providers/LanguageProvider";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("education.title")}
          </h2>
          <p className="text-[#737373] text-sm mt-3 max-w-lg mx-auto">
            {t("education.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row">
            {/* Left - Year */}
            <div className="md:w-48 bg-primary/5 border-b md:border-b-0 md:border-r border-border p-8 flex flex-col items-center justify-center gap-3">
              <FaGraduationCap size={35} className="text-primary mb-1" />
              <div className="flex md:flex-col items-center gap-3">
                <span className="text-xl font-bold text-primary">2021</span>
                <div className="w-8 h-[2px] bg-primary/30 md:w-[2px] md:h-8" />
                <span className="text-xl font-bold text-primary">2025</span>
              </div>
              <span className="text-xs text-muted mt-1 font-medium">{t("education.years")}</span>
            </div>

            {/* Right - Content */}
            <div className="flex-1 p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-foreground">
                  {t("education.bachelor")}
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <FiAward size={12} />
                  {t("education.completed")}
                </span>
              </div>

              <p className="text-primary font-medium mb-5">
                {t("education.nuist")}
              </p>

              <div className="flex flex-wrap items-center gap-5 text-sm text-muted mb-5">
                <span className="flex items-center gap-1.5">
                  <FiMapPin size={14} className="text-primary" />
                  Nanjing, China
                </span>
                <span className="flex items-center gap-1.5">
                  <FiBookOpen size={14} className="text-primary" />
                  {t("education.fullTime")}
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed">
                {t("education.powerElectronics")}, {t("education.controlSystems")}, {t("education.renewableEnergy")}, {t("education.signalProcessing")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
