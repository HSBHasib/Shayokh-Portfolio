"use client";

import { FiHeart, FiMail } from "react-icons/fi";
import { SocialLinks } from "@/types";
import { FaFacebookSquare, FaLinkedin, FaResearchgate, FaGoogle } from "react-icons/fa";
import { useLanguage } from "@/providers/LanguageProvider";

interface FooterProps {
  socials: SocialLinks;
  name: string;
}

export default function Footer({ socials, name }: FooterProps) {
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.research"), href: "#research" },
    { label: t("nav.education"), href: "#education" },
  ];

  return (
    <footer className="border-t border-border">
      <div className="px-6 pt-14 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          {/* Name & Description */}
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold tracking-tighter mb-2 text-foreground">
              {name}
            </h2>
            <p className="text-sm leading-relaxed font-medium text-muted max-w-md">
              Energy & Electrical Engineering Researcher specializing in Power
              Electronics, Cryogenic Energy Storage, and Smart Grids.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase mb-4 text-foreground">
              {t("footer.quickLinks")}
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

          {/* Connect */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase mb-4 text-foreground">
              {t("footer.connect")}
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={socials.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-[#0077B5] transition-colors"
              >
                <FaLinkedin size={16} />
                LinkedIn
              </a>
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-[#1877F2] transition-colors"
              >
                <FaFacebookSquare size={16} />
                Facebook
              </a>
              <a
                href="mailto:hasibhsb19@gmail.com"
                className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
              >
                <FiMail size={16} />
                Email
              </a>
            </div>
          </div>

          {/* Social Links - New Section */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase mb-4 text-foreground">
              {t("footer.socialLinks")}
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={socials.researchGate}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-[#00CCBB] transition-colors"
              >
                <FaResearchgate size={16} />
                ResearchGate
              </a>
              <a
                href={socials.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-[#4285F4] transition-colors"
              >
                <FaGoogle size={16} />
                Google Scholar
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 py-6 border-t border-border">
          <p className="flex justify-center items-center gap-1.5 text-[11px] uppercase tracking-widest text-muted">
            <FiHeart size={12} className="text-primary" />
            {new Date().getFullYear()} {name}. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
