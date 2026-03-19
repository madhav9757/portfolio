"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SectionPageShellProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionPageShell({ title, children }: SectionPageShellProps) {
  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden transition-colors duration-500">
      <main className="relative z-10 flex flex-col items-center min-h-screen pt-8 sm:pt-12 pb-24 px-4 sm:px-6">
        <motion.div
          className="w-full max-w-[90vw]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-space font-extrabold capitalize mb-12 bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.1 }}
          >
            {title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
