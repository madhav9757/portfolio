// app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

// Theme Provider
import { ThemeProvider } from "@/components/theme-provider"; 

// Components
import Footer from "@/components/Footer"; 

// Fonts
import { Geist, Geist_Mono } from "next/font/google";

const GeistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "Madhav Semwal — Full Stack Developer",
  description:
    "Portfolio of Madhav Semwal — Full Stack Developer specializing in React, Next.js, Node.js, and Generative AI.",
};

// Accessibility Skip Link
const SkipToContent = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only absolute left-4 top-4 z-[9999] p-3 rounded-md bg-primary text-primary-foreground font-semibold transition"
  >
    Skip to main content
  </a>
);

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <body className="antialiased bg-background text-foreground transition-colors duration-300 min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SkipToContent />

          <div className="flex flex-col min-h-screen">
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            <Footer developerName="Madhav Semwal" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
