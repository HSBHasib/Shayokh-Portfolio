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
import { cn } from "@/lib/utils";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => {
            const Icon = skillIcons[skill] || Cpu;
            return (
              <div
                key={skill}
                className={cn(
                  "group relative p-4 rounded-xl bg-card border border-border",
                  "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
                  "transition-all duration-300 cursor-default"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">
                    {skill}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
