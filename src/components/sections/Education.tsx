"use client";

import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

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

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-border to-border" />

          {/* Timeline Item */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-8 w-5 h-5 bg-primary rounded-full border-4 border-background z-10 shadow-md" />

            {/* Content Card */}
            <div className="ml-16 md:ml-0 md:w-[45%] md:mr-auto md:pr-12">
              <div className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Year Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  <Calendar size={12} />
                  2021 – 2025
                </div>

                {/* Degree */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Bachelor of Electrical Engineering
                </h3>

                {/* University */}
                <p className="text-primary font-medium mb-4">
                  Nanjing University of Information Science and Technology (NUIST)
                </p>

                {/* Details */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary" />
                    Nanjing, China
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award size={14} className="text-primary" />
                    Full Degree
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-muted leading-relaxed">
                  Specialized in electrical power systems, control theory, and
                  renewable energy technologies with focus on smart grid optimization.
                </p>
              </div>
            </div>

            {/* Empty space for right side */}
            <div className="hidden md:block md:w-[45%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
