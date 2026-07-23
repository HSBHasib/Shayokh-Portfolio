"use client";

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
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-lg" />
              <div className="relative rounded-2xl overflow-hidden bg-card border border-border">
                <img
                  src={profilePic}
                  alt={name}
                  className="w-full max-w-md h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=0b0f17&color=f08787`;
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Electrical Engineering Researcher at{" "}
              <span className="text-primary">NUIST</span>
            </h3>

            <p className="text-card-foreground/80 leading-relaxed">{bio}</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-card-foreground/70">
                <GraduationCap className="text-primary flex-shrink-0" size={20} />
                <span>{degree}</span>
              </div>
              <div className="flex items-center gap-3 text-card-foreground/70">
                <MapPin className="text-primary flex-shrink-0" size={20} />
                <span>{institution}</span>
              </div>
              <div className="flex items-center gap-3 text-card-foreground/70">
                <Calendar className="text-primary flex-shrink-0" size={20} />
                <span>2021 – 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
