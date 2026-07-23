"use client";

import { motion } from "framer-motion";
import {
  X,
  ExternalLink,
  BookOpen,
  FileText,
  Users,
  Calendar,
  Hash,
} from "lucide-react";
import { Research } from "@/types";

interface ResearchModalProps {
  research: Research;
  onClose: () => void;
}

export default function ResearchModal({ research, onClose }: ResearchModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-background/50 text-muted hover:text-foreground hover:bg-background transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 pr-10">
              {research.title}
            </h2>
            <p className="text-primary font-medium">{research.journal}</p>
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-background/50 rounded-xl">
            <div className="flex items-center gap-2 text-sm text-card-foreground/70">
              <Calendar size={16} className="text-primary" />
              <div>
                <p className="text-xs text-muted">Published</p>
                <p className="font-medium">{research.publicationDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-card-foreground/70">
              <Hash size={16} className="text-primary" />
              <div>
                <p className="text-xs text-muted">DOI</p>
                <p className="font-medium text-xs break-all">{research.doi}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-card-foreground/70">
              <BookOpen size={16} className="text-primary" />
              <div>
                <p className="text-xs text-muted">References</p>
                <p className="font-medium">{research.referencesCount}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-card-foreground/70">
              <FileText size={16} className="text-primary" />
              <div>
                <p className="text-xs text-muted">Figures</p>
                <p className="font-medium">{research.figuresCount}</p>
              </div>
            </div>
          </div>

          {/* Authors */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
              <Users size={16} className="text-primary" />
              Authors
            </h3>
            <div className="flex flex-wrap gap-2">
              {research.authors.map((author, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-lg bg-background/50 text-card-foreground/80 border border-border"
                >
                  {author}
                </span>
              ))}
            </div>
          </div>

          {/* Abstract */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Abstract
            </h3>
            <p className="text-sm text-card-foreground/80 leading-relaxed whitespace-pre-line">
              {research.abstract}
            </p>
          </div>

          {/* Key Findings */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Key Findings
            </h3>
            <ul className="space-y-2">
              {research.keyFindings.map((finding, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-card-foreground/80"
                >
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {finding}
                </li>
              ))}
            </ul>
          </div>

          {/* Keywords */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Keywords
            </h3>
            <div className="flex flex-wrap gap-2">
              {research.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* External Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://doi.org/${research.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <ExternalLink size={16} />
              DOI Link
            </a>
            {research.googleScholarLink && (
              <a
                href={research.googleScholarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-card-foreground text-sm font-medium hover:border-primary/50 transition-colors"
              >
                <ExternalLink size={16} />
                Google Scholar
              </a>
            )}
            {research.researchGateLink && (
              <a
                href={research.researchGateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-card-foreground text-sm font-medium hover:border-primary/50 transition-colors"
              >
                <ExternalLink size={16} />
                ResearchGate
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
