"use client";

import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="space-y-1 mb-10 text-center">
          <h2 className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-2xl md:text-4xl font-bold text-transparent">
            Education
          </h2>
          <p className="text-neutral-500 text-sm font-medium italic">
            My Academic Journey
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-white/5" />

            {/* Timeline Item */}
            <div className="relative flex justify-center items-start">
              {/* Left Side (Empty) */}
              <div className="w-[45%] hidden md:block" />

              {/* Center Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-black z-10" />

              {/* Right Side - Content */}
              <div className="w-full md:w-[45%] md:pl-8">
                <div className="bg-[#0a0a0a] rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/5 text-primary">
                      <GraduationCap size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Bachelor of Electrical Engineering
                      </h3>
                      <p className="text-primary font-medium text-sm mb-3">
                        Nanjing University of Information Science and Technology
                        (NUIST)
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          Nanjing, China
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          2021 – 2025
                        </span>
                      </div>
                    </div>
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
