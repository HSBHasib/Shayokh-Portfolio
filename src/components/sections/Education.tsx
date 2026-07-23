"use client";

import { GraduationCap, MapPin, Calendar, BookOpen, Award } from "lucide-react";

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
        <div className="bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left - Icon & Year */}
            <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2 md:min-w-[120px]">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                <GraduationCap size={32} />
              </div>
              <div className="flex md:flex-col items-center gap-2">
                <span className="text-sm font-bold text-primary">2021</span>
                <div className="w-8 h-[2px] bg-border md:w-[2px] md:h-8" />
                <span className="text-sm font-bold text-primary">2025</span>
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Bachelor of Electrical Engineering
                  </h3>
                  <p className="text-primary font-medium">
                    Nanjing University of Information Science and Technology (NUIST)
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <Award size={12} />
                  Completed
                </span>
              </div>

              {/* Info Row */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-4">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-primary" />
                  Nanjing, China
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-primary" />
                  4 Years
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen size={14} className="text-primary" />
                  Full Time
                </span>
              </div>

              {/* Description */}
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
