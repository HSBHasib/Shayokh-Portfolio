"use client";

import { Heart, Mail } from "lucide-react";
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
                className="flex items-center gap-2 text-sm text-muted hover:text-[#0077B5] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.607H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-[#1877F2] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
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
