import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={lora.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
