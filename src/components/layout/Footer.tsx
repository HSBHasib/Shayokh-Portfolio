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
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
            <p className="text-sm text-muted">
              Energy & Electrical Engineering Researcher
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialConfig.map(({ key, label }) => (
                <a
                  key={key}
                  href={socials[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-3 py-2 text-sm text-muted bg-background/50 rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} {name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-sm text-muted">
              Built with <Heart size={14} className="text-primary" /> using
              Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
