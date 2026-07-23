"use client";

import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Academic journey and qualifications
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative pl-8 border-l-2 border-primary/30">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />

            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Bachelor of Electrical Engineering
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    Nanjing University of Information Science and Technology
                    (NUIST)
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      Nanjing, China
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      2021 – 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
