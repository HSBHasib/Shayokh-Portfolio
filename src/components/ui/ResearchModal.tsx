"use client";

import { motion } from "framer-motion";
import {
  FiX,
  FiExternalLink,
  FiBookOpen,
  FiFileText,
  FiUsers,
  FiCalendar,
  FiHash,
  FiDownload,
} from "react-icons/fi";
import { Research } from "@/types";
import { useLanguage } from "@/providers/LanguageProvider";

interface ResearchModalProps {
  research: Research;
  onClose: () => void;
}

const researchTranslations: Record<string, {
  title: string;
  journal: string;
  abstract: string;
  findings: string[];
  keywords: string[];
}> = {
  "research-1": {
    title: "research.title1",
    journal: "research.journal1",
    abstract: "research1.abstract",
    findings: ["research1.finding1", "research1.finding2", "research1.finding3"],
    keywords: ["research1.keyword1", "research1.keyword2", "research1.keyword3", "research1.keyword4", "research1.keyword5", "research1.keyword6"],
  },
  "research-2": {
    title: "research.title2",
    journal: "research.journal2",
    abstract: "research2.abstract",
    findings: ["research2.finding1", "research2.finding2", "research2.finding3"],
    keywords: ["research2.keyword1", "research2.keyword2", "research2.keyword3", "research2.keyword4", "research2.keyword5", "research2.keyword6", "research2.keyword7"],
  },
  "research-3": {
    title: "research.title3",
    journal: "research.journal3",
    abstract: "research3.abstract",
    findings: ["research3.finding1", "research3.finding2", "research3.finding3"],
    keywords: ["research3.keyword1", "research3.keyword2", "research3.keyword3", "research3.keyword4", "research3.keyword5"],
  },
  "research-4": {
    title: "research.title4",
    journal: "research.journal4",
    abstract: "research4.abstract",
    findings: ["research4.finding1", "research4.finding2", "research4.finding3"],
    keywords: ["research4.keyword1", "research4.keyword2", "research4.keyword3", "research4.keyword4", "research4.keyword5"],
  },
};

export default function ResearchModal({ research, onClose }: ResearchModalProps) {
  const { t } = useLanguage();
  const translations = researchTranslations[research.id];

  const displayTitle = translations ? t(translations.title) : research.title;
  const displayJournal = translations ? t(translations.journal) : research.journal;
  const displayAbstract = translations ? t(translations.abstract) : research.abstract;
  const displayFindings = translations
    ? translations.findings.map((key) => t(key))
    : research.keyFindings;
  const displayKeywords = translations
    ? translations.keywords.map((key) => t(key))
    : research.keywords;

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
          <FiX size={20} />
        </button>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 pr-10">
              {displayTitle}
            </h2>
            <p className="text-sm text-primary font-medium">{displayJournal}</p>
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-background/50 rounded-xl">
            <div className="flex items-center gap-2 text-sm text-card-foreground/70">
              <FiCalendar size={16} className="text-primary" />
              <div>
                <p className="text-xs text-muted">{t("research.modal.published")}</p>
                <p className="font-medium">{research.publicationDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-card-foreground/70">
              <FiHash size={16} className="text-primary" />
              <div>
                <p className="text-xs text-muted">{t("research.modal.doi")}</p>
                <p className="font-medium text-xs break-all">{research.doi}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-card-foreground/70">
              <FiBookOpen size={16} className="text-primary" />
              <div>
                <p className="text-xs text-muted">{t("research.modal.references")}</p>
                <p className="font-medium">{research.referencesCount}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-card-foreground/70">
              <FiFileText size={16} className="text-primary" />
              <div>
                <p className="text-xs text-muted">{t("research.modal.figures")}</p>
                <p className="font-medium">{research.figuresCount}</p>
              </div>
            </div>
          </div>

          {/* Authors */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
              <FiUsers size={16} className="text-primary" />
              {t("research.modal.authors")}
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
              {t("research.modal.abstract")}
            </h3>
            <p className="text-sm text-card-foreground/80 leading-relaxed whitespace-pre-line">
              {displayAbstract}
            </p>
          </div>

          {/* Key Findings */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              {t("research.modal.keyFindings")}
            </h3>
            <ul className="space-y-2">
              {displayFindings.map((finding, index) => (
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
              {t("research.modal.keywords")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {displayKeywords.map((keyword, index) => (
                <span
                  key={index}
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-colors"
              style={{ backgroundColor: "var(--button-bg)", color: "var(--button-text)" }}
            >
              <FiExternalLink size={16} />
              {t("research.modal.doiLink")}
            </a>
            {research.pdfUrl && (
              <a
                href={research.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-colors"
                style={{ backgroundColor: "var(--button-bg)", color: "var(--button-text)" }}
              >
                <FiDownload size={16} />
                {t("research.viewPDF")}
              </a>
            )}
            {research.googleScholarLink && (
              <a
                href={research.googleScholarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-card-foreground text-sm font-medium hover:border-primary/50 transition-colors"
              >
                <FiExternalLink size={16} />
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
                <FiExternalLink size={16} />
                ResearchGate
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
