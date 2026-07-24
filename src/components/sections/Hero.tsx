"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";

interface HeroProps {
  name: string;
  title: string;
  bio: string[];
  cvUrl: string;
  profilePic: string;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Hero({ name, title, bio, cvUrl, profilePic }: HeroProps) {
  const { t, language } = useLanguage();
  const [titleIndex, setTitleIndex] = useState(0);
  const [bioText, setBioText] = useState("");
  const [bioIndex, setBioIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [t("hero.title1"), t("hero.title2"), t("hero.title3")];
  const translatedBios = [t("personal.bio1"), t("personal.bio2"), t("personal.bio3")];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [titles.length]);

  useEffect(() => {
    setBioIndex(0);
    setBioText("");
    setIsDeleting(false);
  }, [language]);

  const currentBio = translatedBios[bioIndex] || translatedBios[0];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && bioText === currentBio) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && bioText === "") {
      setIsDeleting(false);
      setBioIndex((prev) => (prev + 1) % bio.length);
    } else {
      const speed = isDeleting ? 20 : 40;
      timeout = setTimeout(() => {
        setBioText(
          isDeleting
            ? currentBio.substring(0, bioText.length - 1)
            : currentBio.substring(0, bioText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [bioText, isDeleting, currentBio, bio.length]);

  return (
    <section id="home" className="relative min-h-screen 2xl:min-h-full flex items-center py-20 lg:mt-5 overflow-hidden">
      <div className="absolute top-1/3 -left-20 w-60 md:w-80 h-60 md:h-80 bg-primary/8 rounded-full blur-[80px] md:blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={fadeUp}
              className="text-primary font-medium mb-2 md:mb-1 uppercase tracking-widest text-sm"
            >
              {t("hero.greeting")}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight text-foreground"
            >
              {name}
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="text-lg sm:text-xl md:text-2xl text-muted mb-3"
            >
              {t("personal.title")}
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="relative mb-6 max-w-lg mx-auto lg:mx-0"
            >
              <p className="text-sm md:text-base text-muted leading-relaxed min-h-[3.5rem]">
                {bioText}
                <span className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 animate-pulse align-middle" />
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-xl text-sm md:text-base font-medium bg-primary text-white hover:bg-primary/90 transition-all duration-300"
              >
                {t("hero.viewCV")}
                <FiExternalLink size={16} />
              </a>

              <a
                href="#research"
                className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-xl text-sm md:text-base font-medium border border-border text-foreground hover:bg-card transition-all duration-300"
              >
                {t("hero.viewResearch")}
                <FiArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative">
              {/* Animated Blob Background */}
              <div className="absolute -inset-2 md:-inset-3 animate-[blob_8s_ease-in-out_infinite]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-lg" />
              </div>

              {/* Profile Image Container */}
              <div className="relative w-60 h-60 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden animate-[morph_8s_ease-in-out_infinite] border-4 border-primary/30 shadow-xl">
                <Image
                  src={profilePic}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 320px"
                  loading="eager"
                  priority
                  quality={100}
                />
              </div>

              {/* Animated Badge */}
              <motion.div
                className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-4 bg-card border border-border px-3 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-lg z-30 overflow-hidden"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <div className="relative h-3.5 flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={titleIndex}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="text-[8px] sm:text-[10px] uppercase tracking-widest font-semibold text-primary whitespace-nowrap"
                    >
                      {titles[titleIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
