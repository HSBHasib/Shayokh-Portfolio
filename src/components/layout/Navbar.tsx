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
  logoLight?: string;
  logoDark?: string;
  name?: string;
}

export default function Navbar({ logoLight, logoDark, name }: NavbarProps) {
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

  const currentLogo = theme === "dark" ? logoDark : logoLight;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-3 md:py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left - Logo */}
            <a href="#home" className="flex-shrink-0">
              {currentLogo ? (
                <div className="relative h-10 w-10 md:h-12 md:w-12">
                  <Image
                    src={currentLogo}
                    alt={name || "Logo"}
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
              ) : (
                <span className="text-xl font-bold text-primary">
                  {name?.split(" ").map((n) => n[0]).join("") || "SM"}
                </span>
              )}
            </a>

            {/* Center - Navigation (Desktop) */}
            <div className="hidden lg:block">
              <div
                ref={navRef}
                className="relative flex items-center gap-1 rounded-full border border-border bg-card/80 backdrop-blur-md px-2 py-2 shadow-sm"
              >
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

            {/* Right - Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-border bg-card text-muted hover:text-foreground hover:bg-card/80 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <FiSun size={18} />
                ) : (
                  <FiMoon size={18} />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-full border border-border bg-card text-muted hover:text-foreground hover:bg-card/80 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-all duration-300",
          mobileOpen ? "visible" : "invisible"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-72 bg-card border-l border-border shadow-2xl transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-semibold text-foreground">Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg hover:bg-background text-muted hover:text-foreground transition-colors"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted hover:text-foreground hover:bg-background"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Sidebar Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
            <p className="text-xs text-muted text-center">
              Md Shayokh Mondol
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
