"use client";

import { motion } from "framer-motion";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Spotlight Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
            >
              {name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted mb-6"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-card-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium",
                  "bg-transparent border-2 border-primary text-primary",
                  "hover:bg-primary hover:text-white transition-all duration-300",
                  "overflow-hidden"
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View CV
                  <ExternalLink size={18} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="#research"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium",
                  "bg-card border border-border text-card-foreground",
                  "hover:border-primary/50 hover:text-primary transition-all duration-300"
                )}
              >
                View Research
                <Download size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-spin-slow" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-card">
                <img
                  src={profilePic}
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=320&background=0b0f17&color=f08787`;
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
