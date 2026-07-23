"use client";

import { Heart, Mail, Link, Globe } from "lucide-react";
import { SocialLinks } from "@/types";

interface FooterProps {
  socials: SocialLinks;
  name: string;
}

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
    <footer className="border-t border-border">
      <div className="px-6 py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xl font-bold tracking-tighter mb-3 text-foreground">
              {name}
            </h2>
            <p className="text-sm leading-relaxed font-medium text-muted max-w-md">
              Energy & Electrical Engineering Researcher specializing in Power
              Electronics, Cryogenic Energy Storage, and Smart Grids.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase mb-4 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm font-medium text-muted">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase mb-4 text-foreground">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={socials.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
              >
                <Link size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/HSBHasib"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
              >
                <Globe size={16} />
                GitHub
              </a>
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
              >
                <Globe size={16} />
                Facebook
              </a>
              <a
                href="mailto:hasibhsb19@gmail.com"
                className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="flex justify-center items-center gap-1.5 text-xs uppercase tracking-widest text-muted">
            <Heart size={12} className="text-primary" />
            {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
