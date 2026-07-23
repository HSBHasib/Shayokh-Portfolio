"use client";

import { GraduationCap, MapPin, BookOpen, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="space-y-1 mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            Education
          </h2>
          <p className="text-muted text-sm font-medium italic">
            My Academic Journey
          </p>
        </div>

        {/* Horizontal Card */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col md:flex-row">
            {/* Left - Year Side */}
            <div className="md:w-48 bg-primary/5 border-b md:border-b-0 md:border-r border-border p-6 flex flex-col items-center justify-center gap-2">
              <GraduationCap size={28} className="text-primary mb-2" />
              <span className="text-2xl font-bold text-primary">2021</span>
              <div className="w-12 h-[2px] bg-primary/30" />
              <span className="text-2xl font-bold text-primary">2025</span>
              <span className="text-xs text-muted mt-1">4 Years</span>
            </div>

            {/* Right - Content Side */}
            <div className="flex-1 p-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-bold text-foreground">
                  Bachelor of Electrical Engineering
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium border border-green-200">
                  <Award size={12} />
                  Completed
                </span>
              </div>

              <p className="text-primary font-medium mb-4">
                Nanjing University of Information Science and Technology (NUIST)
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-4">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-primary" />
                  Nanjing, China
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen size={14} className="text-primary" />
                  Full Time
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed">
                Specialized in electrical power systems, control theory, and
                renewable energy technologies with focus on smart grid optimization
                and power electronics research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
