"use client";

import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";

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
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-primary font-medium mb-5 uppercase tracking-widest text-sm">
              Hello, I&apos;m
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight text-foreground">
              {name}
            </h1>

            <h2 className="text-xl md:text-2xl text-muted mb-6">
              {title}
            </h2>

            <p className="text-muted mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {bio}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-primary text-white hover:bg-primary/90 transition-all duration-300"
              >
                View CV
                <ExternalLink size={18} />
              </a>

              <a
                href="#research"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border border-border text-foreground hover:bg-card transition-all duration-300"
              >
                View Research
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated Blob Background */}
              <div className="absolute -inset-3 animate-[blob_10s_ease-in-out_infinite]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-lg" />
              </div>

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden animate-[morph_10s_ease-in-out_infinite] border-4 border-white shadow-xl">
                <Image
                  src={profilePic}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="320px"
                  loading="eager"
                  priority
                  quality={100}
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-3 -right-2 bg-white border border-border px-4 py-1.5 rounded-2xl shadow-lg z-30">
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
