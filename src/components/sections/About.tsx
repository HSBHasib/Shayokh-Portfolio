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

  console.log('image - ', profilePic);

  return (
    <section id="about" className="relative py-20 px-6 md:px-0">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="space-y-2 text-center mb-12">
          <h2 className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-3xl md:text-4xl font-bold text-transparent">
            About
          </h2>
          <p className="text-neutral-500 text-sm font-medium italic">
            My Introduction
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mt-12">
          {/* Left - Image */}
          <div className="w-full md:flex-1 max-w-[350px] md:max-w-[400px] aspect-square">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-2xl opacity-50 group-hover:opacity-80 transition duration-1000" />
              <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-neutral-900">
                <Image
                  src={profilePic}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 350px, 400px"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full md:flex-1 flex flex-col gap-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#0a0a0a] rounded-2xl border border-white/5 p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">4+</div>
                <div className="text-xs text-neutral-500">Publications</div>
              </div>
              <div className="bg-[#0a0a0a] rounded-2xl border border-white/5 p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-xs text-neutral-500">Citations</div>
              </div>
              <div className="bg-[#0a0a0a] rounded-2xl border border-white/5 p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">14</div>
                <div className="text-xs text-neutral-500">Skills</div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              <p className="text-neutral-400 leading-relaxed">
                {bio}
              </p>
            </div>

            {/* Info Items */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-neutral-400">
                <div className="p-2 rounded-lg bg-white/5 text-primary">
                  <GraduationCap size={18} />
                </div>
                <span className="text-sm">{degree}</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <div className="p-2 rounded-lg bg-white/5 text-primary">
                  <MapPin size={18} />
                </div>
                <span className="text-sm">{institution}</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <div className="p-2 rounded-lg bg-white/5 text-primary">
                  <Calendar size={18} />
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
