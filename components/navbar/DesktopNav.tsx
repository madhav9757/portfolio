"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, FileText, Sparkles } from "lucide-react";

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
      <div className="flex items-center justify-between gap-8 px-1.5 py-1.5 w-full min-w-[768px]">
        
        {/* Left: Brand / Logo Area */}
        <div className="flex items-center pl-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:rotate-12">
              <Terminal size={18} strokeWidth={2.5} />
              <div className="absolute -right-1 -top-1">
                <Sparkles size={12} className="text-amber-400 animate-pulse" />
              </div>
            </div>
            <span className="font-bold tracking-tight text-sm">MADHAV.DEV</span>
          </motion.div>
        </div>

        {/* Center: Floating Pill Navigation */}
        <nav className="flex items-center p-1 gap-1 rounded-full bg-muted/40 border border-border/40 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors rounded-full ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-background shadow-sm border border-border/50 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Integrated Actions Cluster */}
        <div className="flex items-center gap-2">
          {/* Utility Group */}
          <div className="flex items-center gap-1 bg-muted/30 p-1 rounded-xl border border-border/20">
            <ThemeToggle />
            <Separator orientation="vertical" className="h-4 bg-border/50 mx-1" />
            <GitHubMenu />
          </div>

          {/* Action Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="default"
                size="sm"
                className="relative group h-9 px-5 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95"
              >
                <a href="/resume.pdf" target="_blank">
                  <span className="relative z-10 flex items-center gap-2 text-[10px] tracking-tighter">
                    <FileText size={14} className="group-hover:animate-bounce" />
                    RESUME
                  </span>
                  
                  {/* Subtle Shimmer Effect */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.5,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2 h-full skew-x-12"
                  />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={10} className="font-semibold text-[10px]">
              VIEW CURRICULUM VITAE
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}