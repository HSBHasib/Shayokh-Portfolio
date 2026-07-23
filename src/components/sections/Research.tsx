"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Calendar, BookOpen, ChevronRight, ExternalLink } from "lucide-react";
import ResearchModal from "@/components/ui/ResearchModal";
import { Research as ResearchType } from "@/types";

interface ResearchProps {
  researches: ResearchType[];
}

export default function Research({ researches }: ResearchProps) {
  const [selectedResearch, setSelectedResearch] = useState<ResearchType | null>(
    null
  );

  return (
    <section id="research" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="space-y-1 mb-10 text-center">
          <h2 className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-2xl md:text-4xl font-bold text-transparent">
            Research
          </h2>
          <p className="text-neutral-500 text-sm font-medium italic">
            Published Papers
          </p>
        </div>

        {/* Research Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {researches.map((research) => (
            <div
              key={research.id}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedResearch(research)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {research.title}
                  </h3>
                  <p className="text-sm text-primary mb-3">{research.journal}</p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {research.publicationDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} />
                      {research.referencesCount} references
                    </span>
                    {research.figuresCount > 0 && (
                      <span className="flex items-center gap-1">
                        {research.figuresCount} figures
                      </span>
                    )}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {research.keywords.slice(0, 3).map((keyword) => (
                      <span
                        key={keyword}
                        className="px-2 py-1 text-xs rounded-full bg-white/5 text-neutral-400"
                      >
                        {keyword}
                      </span>
                    ))}
                    {research.keywords.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-white/5 text-neutral-500">
                        +{research.keywords.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <ChevronRight
                  size={20}
                  className="text-neutral-600 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Details Modal */}
      <AnimatePresence>
        {selectedResearch && (
          <ResearchModal
            research={selectedResearch}
            onClose={() => setSelectedResearch(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
