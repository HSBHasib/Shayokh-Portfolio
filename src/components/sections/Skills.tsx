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

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="space-y-1 mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            Skills
          </h2>
          <p className="text-muted text-sm font-medium italic">
            My Technical Level
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => {
            const Icon = skillIcons[skill] || Cpu;
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
        </div>
      </div>
    </section>
  );
}
