import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";

const GeistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Madhav Semwal — Full Stack Developer",
  description:
    "Portfolio of Madhav Semwal — Full Stack Developer specializing in React, Next.js, Node.js, and Generative AI.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Madhav Semwal — Full Stack Developer",
    description:
      "Explore projects, skills, and work of Madhav Semwal — a modern Full Stack Developer.",
    url: "https://your-domain.com",
    siteName: "Madhav Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
