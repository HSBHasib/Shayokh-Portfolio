"use client";

import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import { useLanguage } from "@/providers/LanguageProvider";

interface AboutProps {
  name: string;
  institution: string;
  degree: string;
  detailedBio: string;
  aboutImage: string;
}

export default function About({
  name,
  institution,
  degree,
  detailedBio,
  aboutImage,
}: AboutProps) {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("about.title")}
          </h2>
          <p className="text-muted text-sm mt-3 max-w-md mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* Left - Image Only */}
          <div className="w-full lg:w-[350px] flex-shrink-0">
            <div className="relative w-full max-w-[350px] mx-auto aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
              <Image
                src={aboutImage}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 260px, 300px"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right - All Info */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card rounded-xl border border-border p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">4+</div>
                <div className="text-xs text-muted">{t("about.publications")}</div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">14</div>
                <div className="text-xs text-muted">{t("about.skills")}</div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">3</div>
                <div className="text-xs text-muted">{t("about.researchAreas")}</div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-muted leading-relaxed text-[15px]">
              {t("personal.detailedBio")}
            </p>

            {/* Education - Simple */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-muted">
                <FaGraduationCap size={18} className="text-primary" />
                <span className="text-sm">{t("personal.degree")}</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <FiMapPin size={18} className="text-primary" />
                <span className="text-sm">{t("personal.institution")}</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <FiCalendar size={18} className="text-primary" />
                <span className="text-sm">2021 – 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
