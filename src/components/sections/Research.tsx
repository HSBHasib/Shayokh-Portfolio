"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(researches.length / itemsPerPage);

  const currentResearches = researches.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToPage = (page: number) => {
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  };

  const goNext = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage((p) => p + 1);
    }
  };

  const goPrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((p) => p - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

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
        <div className="relative overflow-hidden min-h-[320px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid md:grid-cols-2 gap-6"
            >
              {currentResearches.map((research) => (
                <div
                  key={research.id}
                  className="group bg-card rounded-2xl border border-border p-6 hover:shadow-md transition-shadow duration-300 flex flex-col"
                >
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {research.title}
                    </h3>
                    <p className="text-xs text-primary mb-3">{research.journal}</p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {research.publicationDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen size={12} />
                        {research.referencesCount} ref
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {research.keywords.slice(0, 2).map((keyword) => (
                        <span
                          key={keyword}
                          className="px-2 py-0.5 text-[10px] rounded-full bg-primary/10 text-primary"
                        >
                          {keyword}
                        </span>
                      ))}
                      {research.keywords.length > 2 && (
                        <span className="px-2 py-0.5 text-[10px] rounded-full bg-border text-muted">
                          +{research.keywords.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <button
                      onClick={() => setSelectedResearch(research)}
                      className="flex-1 px-3 py-2 text-xs font-medium rounded-xl border border-border text-foreground hover:bg-background transition-colors"
                    >
                      Details
                    </button>
                    {research.pdfUrl ? (
                      <a
                        href={research.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 text-xs font-medium rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FileText size={12} />
                        View PDF
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 px-3 py-2 text-xs font-medium rounded-xl bg-muted/20 text-muted cursor-not-allowed flex items-center justify-center gap-1.5"
                      >
                        <FileText size={12} />
                        Soon
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={goPrev}
              disabled={currentPage === 0}
              className="p-2 rounded-full border border-border text-muted hover:text-foreground hover:bg-card transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={`w-8 h-8 rounded-full text-sm font-medium transition-all duration-300 ${
                    currentPage === i
                      ? "bg-primary text-white"
                      : "border border-border text-muted hover:text-foreground hover:bg-card"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={goNext}
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
