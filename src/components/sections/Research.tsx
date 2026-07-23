"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Calendar, BookOpen, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import ResearchModal from "@/components/ui/ResearchModal";
import { Research as ResearchType } from "@/types";

interface ResearchProps {
  researches: ResearchType[];
}

export default function Research({ researches }: ResearchProps) {
  const [selectedResearch, setSelectedResearch] = useState<ResearchType | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(researches.length / itemsPerPage);

  const currentResearches = researches.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="research" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="space-y-1 mb-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            Research
          </h2>
          <p className="text-muted text-sm font-medium italic">
            Published Papers
          </p>
        </div>

        {/* Research Cards */}
        <div className="space-y-6">
          {currentResearches.map((research) => (
            <div
              key={research.id}
              className="group bg-card rounded-2xl border border-border p-6 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
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

                {/* Action Buttons */}
                <div className="flex md:flex-col gap-2 flex-shrink-0">
                  <button
                    onClick={() => setSelectedResearch(research)}
                    className="px-4 py-2 text-sm font-medium rounded-xl border border-border text-foreground hover:bg-card transition-colors"
                  >
                    View Details
                  </button>
                  {research.pdfUrl ? (
                    <a
                      href={research.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FileText size={14} />
                      View PDF
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-4 py-2 text-sm font-medium rounded-xl bg-muted/20 text-muted cursor-not-allowed flex items-center gap-2"
                    >
                      <FileText size={14} />
                      PDF Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-full border border-border text-muted hover:text-foreground hover:bg-card transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentPage === i
                      ? "bg-primary w-6"
                      : "bg-border hover:bg-muted"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-full border border-border text-muted hover:text-foreground hover:bg-card transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
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
