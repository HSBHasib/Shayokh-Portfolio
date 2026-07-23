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
  Wrench,
  Globe,
  Code,
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

const categories = [
  {
    title: "Engineering",
    skills: ["Electrical & Electronics Engineering", "Electrical Power Engineering", "Power Systems Analysis", "Power Systems Simulation", "Power Generation"],
  },
  {
    title: "Research",
    skills: ["MATLAB Simulation", "Control Theory", "Renewable Energy Technologies"],
  },
  {
    title: "Technology",
    skills: ["Automation & Robotics", "Digital Media"],
  },
  {
    title: "Professional",
    skills: ["Problem Solving", "Program Management", "Human Resources (HR)", "Training and Development"],
  },
];

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

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const Icon = skillIcons[skill] || Cpu;
                  return (
                    <div
                      key={skill}
                      className="flex items-center gap-2 px-3 py-2 bg-background rounded-xl border border-border text-sm text-muted hover:text-foreground hover:border-primary/30 transition-all duration-200 cursor-default"
                    >
                      <Icon size={14} className="text-primary" />
                      <span>{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
