import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Md Shayokh Mondol | Energy & Electrical Engineering Researcher",
  description:
    "Academic portfolio of Md Shayokh Mondol - Energy & Electrical Engineering Researcher at NUIST, specializing in Cryogenic Energy Storage, Wide-Bandgap Semiconductors, and Smart Grid Optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={merriweather.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
