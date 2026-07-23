"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  FiCpu,
  FiZap,
  FiBarChart2,
  FiBattery,
  FiSun,
  FiActivity,
  FiAward,
  FiSettings,
  FiUsers,
  FiBookOpen,
  FiGlobe,
} from "react-icons/fi";

interface SkillsProps {
  skills: string[];
}

const skillIcons: Record<string, React.ElementType> = {
  "MATLAB Simulation": FiBarChart2,
  "Control Theory": FiSettings,
  "Electrical & Electronics Engineering": FiCpu,
  "Electrical Power Engineering": FiZap,
  "Power Systems Analysis": FiBarChart2,
  "Power Systems Simulation": FiBattery,
  "Renewable Energy Technologies": FiSun,
  "Automation & Robotics": FiActivity,
  "Power Generation": FiZap,
  "Problem Solving": FiAward,
  "Program Management": FiSettings,
  "Digital Media": FiGlobe,
  "Human Resources (HR)": FiUsers,
  "Training and Development": FiBookOpen,
};

export default function Skills({ skills }: SkillsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(skills.length / itemsPerPage);

  const currentSkills = skills.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToPage = (page: number) => {
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  };

  const goNext = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage((p) => p + 1);
    }
  };

  const goPrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((p) => p - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Skills
          </h2>
          <p className="text-muted text-sm font-medium italic mt-2">
            My Technical Level
          </p>
          <p className="text-muted/70 text-sm mt-3 max-w-xl mx-auto">
            Technical expertise developed through academic research and hands-on projects in electrical engineering.
          </p>
        </motion.div>

        <div className="relative overflow-hidden min-h-[280px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {currentSkills.map((skill) => {
                const Icon = skillIcons[skill] || FiCpu;
                return (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Icon size={18} />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {skill}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              disabled={currentPage === 0}
              className="p-2 rounded-full border border-border text-muted hover:text-foreground hover:bg-card transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FiChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={`w-8 h-8 rounded-full text-sm font-medium transition-all duration-300 ${
                    currentPage === i
                      ? "bg-primary text-white"
                      : "border border-border text-muted hover:text-foreground hover:bg-card"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={goNext}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-full border border-border text-muted hover:text-foreground hover:bg-card transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
