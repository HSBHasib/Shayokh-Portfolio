"use client";

import { ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  name: string;
  title: string;
  bio: string;
  cvUrl: string;
  profilePic: string;
}

export default function Hero({ name, title, bio, cvUrl, profilePic }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Spotlight on left side only */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left">
            <p className="text-primary font-medium mb-4 uppercase tracking-widest text-sm">
              Hello, I&apos;m
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-neutral-400 mb-6">
              {title}
            </h2>

            <p className="text-neutral-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {bio}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium",
                  "bg-white text-black hover:bg-neutral-200 transition-all duration-300"
                )}
              >
                View CV
                <ExternalLink size={18} />
              </a>

              <a
                href="#research"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium",
                  "border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
                )}
              >
                View Research
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right - Profile Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/10">
                <img
                  src={profilePic}
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=320&background=0a0a0a&color=f08787`;
                  }}
                />
              </div>
              <div className="absolute -bottom-3 -right-2 bg-neutral-900/80 backdrop-blur-xl border border-white/10 px-4 py-1.5 rounded-2xl shadow-2xl z-30">
                <p className="text-[10px] uppercase tracking-widest font-semibold text-primary">
                  Researcher
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
