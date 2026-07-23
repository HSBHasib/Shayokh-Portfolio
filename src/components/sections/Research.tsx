"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, BookOpen, ExternalLink, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
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
    <section id="research" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Research Publications"
          subtitle="Published papers in power electronics, optical communications, and cryogenic energy storage"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {researches.map((research, index) => (
            <motion.div
              key={research.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedResearch(research)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {research.title}
                  </h3>
                  <p className="text-sm text-primary mb-3">{research.journal}</p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
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
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {keyword}
                      </span>
                    ))}
                    {research.keywords.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-border text-muted">
                        +{research.keywords.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <ChevronRight
                  size={20}
                  className="text-muted group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                />
              </div>
            </motion.div>
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
