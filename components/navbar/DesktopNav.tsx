"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import ThemeToggle from "../ThemeToggle";
import GitHubMenu from "../GitHubMenu";
import { NAV_LINKS } from "@/lib/constants";

export default function DesktopNav({
  active,
  scrollToSection,
  mounted,
}: {
  active: string;
  scrollToSection: (id: string) => void;
  mounted: boolean;
}) {
  if (!mounted) return null;

  return (
    <TooltipProvider delayDuration={0}>
      <div className="bg-white/80 dark:bg-zinc-950/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl flex items-center justify-between px-4 py-2 w-full">
        {/* Left: Brand Icon */}
        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-primary/10 rounded-xl text-primary border border-primary/20"
          >
            <Terminal size={20} />
          </motion.div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex items-center gap-1 bg-secondary/20 p-1 rounded-xl border border-border/20">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                active === link.id
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              {active === link.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-background/70 shadow-sm rounded-md"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right: Action Cluster */}
        <div className="flex items-center gap-3 relative">
          {/* Compact Action Container */}
          <div className="flex items-center gap-1.5 bg-muted/50 p-1 rounded-lg border overflow-visible">
            {/* Compact Theme Toggle */}
            <ThemeToggle />

            <Separator orientation="vertical" className="h-5" />

            {/* GitHub Menu */}
            <GitHubMenu />
          </div>

          {/* Resume Button with Animation */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="default"
                size="sm"
                className="relative group h-10 px-4 rounded-xl font-bold overflow-hidden"
              >
                <a href="/resume.pdf" target="_blank">
                  <span className="relative z-10 flex items-center gap-2">
                    <FileText size={16} />
                    RESUME
                  </span>
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full"
                  />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Download CV</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
