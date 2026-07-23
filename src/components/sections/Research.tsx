"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, BookOpen, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import ResearchModal from "@/components/ui/ResearchModal";
import { Research as ResearchType } from "@/types";

interface ResearchProps {
  researches: ResearchType[];
}

export default function Research({ researches }: ResearchProps) {
  const [selectedResearch, setSelectedResearch] = useState<ResearchType | null>(null);
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
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="research" className="pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Research
          </h2>
          <p className="text-muted text-sm font-medium italic mt-2">
            Published Papers
          </p>
          <p className="text-muted/70 text-sm mt-3 max-w-xl mx-auto">
            Research contributions in power electronics, optical communications, and energy storage systems.
          </p>
        </motion.div>

        <div className="relative overflow-hidden min-h-[340px]">
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
                    <h3 className="text-base font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {research.title}
                    </h3>
                    <p className="text-sm text-primary mb-3">{research.journal}</p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {research.publicationDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen size={14} />
                        {research.referencesCount} references
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {research.keywords.slice(0, 2).map((keyword) => (
                        <span
                          key={keyword}
                          className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {keyword}
                        </span>
                      ))}
                      {research.keywords.length > 2 && (
                        <span className="px-2.5 py-1 text-xs rounded-full bg-border text-muted">
                          +{research.keywords.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={() => setSelectedResearch(research)}
                      className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl border border-border text-foreground hover:bg-background transition-colors"
                    >
                      Details
                    </button>
                    {research.pdfUrl ? (
                      <a
                        href={research.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl hover:opacity-90 transition-colors flex items-center justify-center gap-2"
                        style={{ backgroundColor: "var(--button-bg)", color: "var(--button-text)" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FileText size={14} />
                        View PDF
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl bg-muted/20 text-muted cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        <FileText size={14} />
                        Soon
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={goPrev}
              disabled={currentPage === 0}
              className="p-2.5 rounded-full border border-border text-muted hover:text-foreground hover:bg-card transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={`w-9 h-9 rounded-full text-sm font-medium transition-all duration-300 ${
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
              className="p-2.5 rounded-full border border-border text-muted hover:text-foreground hover:bg-card transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

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
