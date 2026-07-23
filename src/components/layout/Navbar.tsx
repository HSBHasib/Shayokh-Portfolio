"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left - Logo */}
          <a href="#home" className="flex-shrink-0">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={name || "Logo"}
                className="h-10 w-auto rounded-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.nextElementSibling?.classList.remove("hidden");
                }}
              />
            ) : null}
            <span
              className={cn(
                "text-xl font-bold text-primary",
                logoUrl ? "hidden" : ""
              )}
            >
              {name?.split(" ").map((n) => n[0]).join("") || "SM"}
            </span>
          </a>

          {/* Center - Navigation (Glass style) */}
          <div className="hidden md:block">
            <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-lg px-4 py-2">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3 py-1 text-sm font-medium transition-colors",
                      isActive
                        ? "text-white bg-white/10 rounded-full"
                        : "text-neutral-400 hover:text-white"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Right - Theme Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-lg text-neutral-300 hover:text-white hover:bg-white/20 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-lg text-neutral-300 hover:text-white hover:bg-white/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 mx-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
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
                      ? "text-white bg-white/10"
                      : "text-neutral-300 hover:text-white hover:bg-white/10"
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
