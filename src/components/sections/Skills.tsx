"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  BarChart3,
  Battery,
  Sun,
  Bot,
  Lightbulb,
  Settings,
  Users,
  BookOpen,
  Globe,
} from "lucide-react";

interface SkillsProps {
  skills: string[];
}

const skillIcons: Record<string, React.ElementType> = {
  "MATLAB Simulation": BarChart3,
  "Control Theory": Settings,
  "Electrical & Electronics Engineering": Cpu,
  "Electrical Power Engineering": Zap,
  "Power Systems Analysis": BarChart3,
  "Power Systems Simulation": Battery,
  "Renewable Energy Technologies": Sun,
  "Automation & Robotics": Bot,
  "Power Generation": Zap,
  "Problem Solving": Lightbulb,
  "Program Management": Settings,
  "Digital Media": Globe,
  "Human Resources (HR)": Users,
  "Training and Development": BookOpen,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills({ skills }: SkillsProps) {
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
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {skills.map((skill) => {
            const Icon = skillIcons[skill] || Cpu;
            return (
              <motion.div
                key={skill}
                variants={item}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon size={18} />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {skill}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
