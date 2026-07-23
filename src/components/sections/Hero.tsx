"use client";

import { ExternalLink, Download } from "lucide-react";
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
    <section
      id="home"
      className="relative w-full overflow-hidden"
    >
      <div className="relative flex min-h-screen w-full antialiased items-center justify-center pt-20 pb-10">
        {/* Grid Background */}
        <div className="pointer-events-none absolute inset-0 [background-size:40px_40px] select-none [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]" />

        {/* Spotlight Effects */}
        <svg className="animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0 top-[-5%] left-[5%] md:left-[10%] md:top-[5%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3787 2842" fill="none">
          <g filter="url(#filter)">
            <ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501" transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" fill="white" fillOpacity="0.07"></ellipse>
          </g>
          <defs>
            <filter id="filter" x="0.860352" y="0.838989" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
              <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8"></feGaussianBlur>
            </filter>
          </defs>
        </svg>

        <svg className="animate-spotlight pointer-events-none absolute z-[1] lg:w-[84%] opacity-0 top-10 left-full h-[80vh] w-[50vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3787 2842" fill="none">
          <g filter="url(#filter2)">
            <ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501" transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" fill="#f08787" fillOpacity="0.1"></ellipse>
          </g>
          <defs>
            <filter id="filter2" x="0.860352" y="0.838989" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
              <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8"></feGaussianBlur>
            </filter>
          </defs>
        </svg>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 lg:flex lg:justify-between lg:items-center gap-10">
          {/* Left - Text */}
          <div className="lg:w-[60%] text-center lg:text-left">
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
                  "group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium",
                  "bg-transparent border border-white/10 text-white",
                  "hover:bg-white/10 transition-all duration-300"
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View CV
                  <ExternalLink size={18} />
                </span>
              </a>

              <a
                href="#research"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium",
                  "bg-white text-black",
                  "hover:bg-neutral-200 transition-all duration-300"
                )}
              >
                View Research
                <Download size={18} />
              </a>
            </div>
          </div>

          {/* Right - Profile Picture */}
          <div className="flex-1 w-full flex justify-center items-center mt-10 lg:mt-0">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition duration-1000" />

              {/* Profile Container */}
              <div className="relative">
                {/* Loading Spinner (shown before image loads) */}
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-neutral-900 overflow-hidden rounded-full">
                  <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                </div>

                {/* Profile Image */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/10">
                  <img
                    src={profilePic}
                    alt={name}
                    className="w-full h-full object-cover scale-110 transition-opacity duration-1000 ease-in-out"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=320&background=0a0a0a&color=f08787`;
                    }}
                  />
                </div>

                {/* Badge */}
                <div className="absolute -bottom-3 -right-2 bg-neutral-900/80 backdrop-blur-xl border border-white/10 px-4 py-1.5 rounded-2xl shadow-2xl z-30">
                  <p className="text-[10px] uppercase tracking-widest font-semibold text-primary">
                    Researcher
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
