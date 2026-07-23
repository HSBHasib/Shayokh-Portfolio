"use client";

import Image from "next/image";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

interface AboutProps {
  name: string;
  institution: string;
  degree: string;
  bio: string;
  profilePic: string;
}

export default function About({
  name,
  institution,
  degree,
  bio,
  profilePic,
}: AboutProps) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About
          </h2>
          <p className="text-muted text-sm font-medium italic mt-2">
            My Introduction
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
          <div className="w-full md:flex-1 max-w-[350px] md:max-w-[400px]">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
              <Image
                src={profilePic}
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
                  <GraduationCap size={20} />
                </div>
                <span className="text-sm">{degree}</span>
              </div>
              <div className="flex items-center gap-4 text-muted">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <span className="text-sm">{institution}</span>
              </div>
              <div className="flex items-center gap-4 text-muted">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <Calendar size={20} />
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
