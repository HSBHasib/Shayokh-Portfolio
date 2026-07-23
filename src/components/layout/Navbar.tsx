"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "@/providers/ThemeProvider";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  logoUrl?: string;
  name?: string;
}

export default function Navbar({ logoUrl, name }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeLink = linkRefs.current.get(activeSection);
    const navContainer = navRef.current;

    if (activeLink && navContainer) {
      const navRect = navContainer.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      setIndicatorStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    }
  }, [activeSection]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left - Logo */}
          <a href="#home" className="flex-shrink-0">
            {logoUrl ? (
              <div className="relative h-10 w-10 rounded-xl overflow-hidden">
                <Image
                  src={logoUrl}
                  alt={name || "Logo"}
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
            ) : (
              <span className="text-xl font-bold text-primary">
                {name?.split(" ").map((n) => n[0]).join("") || "SM"}
              </span>
            )}
          </a>

          {/* Center - Navigation */}
          <div className="hidden md:block">
            <div
              ref={navRef}
              className="relative flex items-center gap-1 rounded-full border border-border bg-card/80 backdrop-blur-md px-2 py-2 shadow-sm"
            >
              {/* Animated Indicator */}
              <div
                className="absolute top-1/2 -translate-y-1/2 h-[calc(100%-16px)] bg-primary/10 rounded-full transition-all duration-300 ease-out"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                }}
              />

              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    ref={(el) => {
                      if (el) linkRefs.current.set(sectionId, el);
                    }}
                    className={cn(
                      "relative z-10 px-3 py-1 text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "text-primary"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right - Theme Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border bg-card text-muted hover:text-foreground hover:bg-card/80 transition-all duration-300 hover:rotate-45"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <FiSun size={18} className="transition-transform duration-300" />
              ) : (
                <FiMoon size={18} className="transition-transform duration-300" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full border border-border bg-card text-muted hover:text-foreground hover:bg-card/80 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 mx-4 bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted hover:text-foreground hover:bg-card"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
