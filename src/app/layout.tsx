import type { Metadata } from "next";
import { Castoro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { Toaster } from "react-hot-toast";
import PageLoader from "@/components/ui/PageLoader";

const castoro = Castoro({
  variable: "--font-castoro",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Md Shayokh Mondol | Portfolio",
  description:
    "Academic portfolio of Md Shayokh Mondol - Energy & Electrical Engineering Researcher at NUIST, specializing in Cryogenic Energy Storage, Wide-Bandgap Semiconductors, and Smart Grid Optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={castoro.variable} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <PageLoader />
            {children}
            <Toaster position="top-right" />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
