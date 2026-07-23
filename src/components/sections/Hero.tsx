"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

interface HeroProps {
  name: string;
  title: string;
  bio: string;
  cvUrl: string;
  profilePic: string;
}

const titles = ["BSC Graduate in EEE", "Researcher", "Power Electronics"];

export default function Hero({ name, title, bio, cvUrl, profilePic }: HeroProps) {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 lg:py-0">
      <div className="absolute top-1/3 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary/8 rounded-full blur-[80px] md:blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-primary font-medium mb-2 md:mb-4 uppercase tracking-widest text-xs md:text-sm">
              Hello, I&apos;m
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-5 leading-tight text-foreground">
              {name}
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-muted mb-4 md:mb-6">
              {title}
            </h2>

            <p className="text-sm md:text-base text-muted mb-6 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {bio}
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-xl text-sm md:text-base font-medium bg-primary text-white hover:bg-primary/90 transition-all duration-300"
              >
                View CV
                <FiExternalLink size={16} />
              </a>

              <a
                href="#research"
                className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-xl text-sm md:text-base font-medium border border-border text-foreground hover:bg-card transition-all duration-300"
              >
                View Research
                <FiArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated Blob Background */}
              <div className="absolute -inset-2 md:-inset-3 animate-[blob_10s_ease-in-out_infinite]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-lg" />
              </div>

              {/* Profile Image Container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden animate-[morph_10s_ease-in-out_infinite] border-4 border-primary/30 shadow-xl">
                <Image
                  src={profilePic}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 320px"
                  loading="eager"
                  priority
                  quality={100}
                />
              </div>

              {/* Animated Badge */}
              <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-4 bg-card border border-border px-3 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-lg z-30">
                <p className="text-[8px] sm:text-[10px] uppercase tracking-widest font-semibold text-primary whitespace-nowrap">
                  {titles[titleIndex]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
