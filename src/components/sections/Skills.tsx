"use client";

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
  "Digital Media": Cpu,
  "Human Resources (HR)": Users,
  "Training and Development": BookOpen,
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="space-y-1 mb-10">
          <h2 className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-2xl md:text-4xl font-bold text-transparent">
            Skills
          </h2>
          <p className="text-neutral-500 text-sm font-medium italic">
            My Technical Level
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          {skills.map((skill) => {
            const Icon = skillIcons[skill] || Cpu;
            return (
              <div
                key={skill}
                className="flex items-center gap-3 px-4 py-3 bg-[#0a0a0a] rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-white/5 text-primary group-hover:bg-white/10 transition-colors">
                  <Icon size={18} />
                </div>
                <span className="text-sm font-medium text-neutral-300">
                  {skill}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
