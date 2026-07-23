"use client";

import Image from "next/image";
import { FiBook, FiMapPin, FiCalendar } from "react-icons/fi";

interface AboutProps {
  name: string;
  institution: string;
  degree: string;
  bio: string;
  aboutImage: string;
}

export default function About({
  name,
  institution,
  degree,
  bio,
  aboutImage,
}: AboutProps) {
  return (
    <section id="about" className="pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About
          </h2>
          <p className="text-[#737373] text-sm mt-3 max-w-md mx-auto">
            Academic background and professional journey in electrical engineering research.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
          <div className="w-full md:flex-1 max-w-[350px] md:max-w-[400px]">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
              <Image
                src={aboutImage}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 350px, 400px"
                loading="lazy"
              />
            </div>
          </div>

          <div className="w-full md:flex-1 flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-card rounded-2xl border border-border p-5 text-center shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">4+</div>
                <div className="text-xs text-muted">Publications</div>
              </div>
              <div className="bg-card rounded-2xl border border-border p-5 text-center shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-xs text-muted">Citations</div>
              </div>
              <div className="bg-card rounded-2xl border border-border p-5 text-center shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">14</div>
                <div className="text-xs text-muted">Skills</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed text-base">
              {bio}
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-muted">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <FiBook size={20} />
                </div>
                <span className="text-sm">{degree}</span>
              </div>
              <div className="flex items-center gap-4 text-muted">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <FiMapPin size={20} />
                </div>
                <span className="text-sm">{institution}</span>
              </div>
              <div className="flex items-center gap-4 text-muted">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <FiCalendar size={20} />
                </div>
                <span className="text-sm">2021 – 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
