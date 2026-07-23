"use client";

import { Heart } from "lucide-react";
import { SocialLinks } from "@/types";

interface FooterProps {
  socials: SocialLinks;
  name: string;
}

const socialConfig = [
  { key: "researchGate" as keyof SocialLinks, label: "ResearchGate" },
  { key: "googleScholar" as keyof SocialLinks, label: "Google Scholar" },
  { key: "linkedIn" as keyof SocialLinks, label: "LinkedIn" },
  { key: "facebook" as keyof SocialLinks, label: "Facebook" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Footer({ socials, name }: FooterProps) {
  return (
    <footer className="mt-10 border-t border-neutral-800">
      <div className="px-6 py-16 md:pt-12 pb-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <h2 className="text-xl font-bold tracking-tighter mb-2 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
              {name}
            </h2>
            <p className="text-sm leading-relaxed font-medium max-w-[45%] text-neutral-400">
              Energy & Electrical Engineering Researcher specializing in Power
              Electronics, Cryogenic Energy Storage, and Smart Grids.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-[16px] font-bold uppercase mb-3 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm font-medium text-neutral-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1">
            <h3 className="text-[16px] font-bold uppercase mb-3 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialConfig.map(({ key, label }) => (
                <a
                  key={key}
                  href={socials[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-500 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-neutral-800">
          <p className="flex justify-center items-center gap-1.5 text-[10px] uppercase tracking-widest text-neutral-500">
            <Heart size={12} className="text-primary" />
            {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
