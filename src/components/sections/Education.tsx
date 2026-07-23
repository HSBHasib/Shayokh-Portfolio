"use client";

import { GraduationCap, MapPin, BookOpen, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Education
          </h2>
          <p className="text-muted text-sm font-medium italic mt-2">
            My Academic Journey
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-48 bg-primary/5 border-b md:border-b-0 md:border-r border-border p-8 flex flex-col items-center justify-center gap-3">
              <GraduationCap size={32} className="text-primary mb-1" />
              <span className="text-2xl font-bold text-primary">2021</span>
              <div className="w-12 h-[2px] bg-primary/30" />
              <span className="text-2xl font-bold text-primary">2025</span>
              <span className="text-xs text-muted mt-1">4 Years</span>
            </div>

            <div className="flex-1 p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-foreground">
                  Bachelor of Electrical Engineering
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium border border-green-200">
                  <Award size={12} />
                  Completed
                </span>
              </div>

              <p className="text-primary font-medium mb-5">
                Nanjing University of Information Science and Technology (NUIST)
              </p>

              <div className="flex flex-wrap items-center gap-5 text-sm text-muted mb-5">
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
