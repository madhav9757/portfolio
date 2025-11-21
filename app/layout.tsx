import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Madhav Semwal — Full Stack Developer",
  description: "Portfolio of Madhav Semwal — Full Stack Developer specializing in React, Next.js, Node.js, and Generative AI.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
