import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

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

export const metadata: Metadata = {
  title: "Madhav Semwal — Full Stack Developer & AI Engineer",
  description:
    "Portfolio of Madhav Semwal — Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, and Generative AI. Building high-performance web applications with clean architecture.",
  keywords: [
    "Madhav Semwal",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AI Engineer",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Madhav Semwal" }],
  creator: "Madhav Semwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Madhav Semwal — Full Stack Developer",
    description: "Portfolio of Madhav Semwal — Building digital experiences that matter.",
    siteName: "Madhav Semwal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhav Semwal — Full Stack Developer",
    description: "Building digital experiences with modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const SkipToContent = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only fixed left-4 top-4 z-[9999] p-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-xl transition-all focus:ring-4 ring-primary/50"
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="antialiased bg-background text-foreground transition-colors duration-300 min-h-screen overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SkipToContent />
          
          {/* Noise Texture Overlay */}
          <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.015] mix-blend-overlay noise" />

          {/* Main Content */}
          <div className="relative min-h-screen flex flex-col">
            <main id="main-content" className="flex-grow">
              {children}
            </main>
          </div>

          {/* Toast Notifications */}
          <Toaster 
            position="bottom-right" 
            richColors 
            closeButton
            theme="system"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}