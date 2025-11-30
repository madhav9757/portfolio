"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import GitHubMenu from "../GitHubMenu";
import ThemeToggle from "../ThemeToggle";
import { NAV_LINKS } from "@/lib/constants";

interface DesktopNavProps {
  active: string;
  scrollToSection: (id: string) => void;
  mounted: boolean;
}

export default function DesktopNav({
  active,
  scrollToSection,
  mounted,
}: DesktopNavProps) {
  return (
    <div className="bg-white/70 dark:bg-black/60 backdrop-blur-xl border border-border rounded-2xl shadow-lg w-full flex items-center justify-between px-3 sm:px-4 md:px-6 py-2.5 sm:py-3">
      {/* Centered nav links */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                aria-current={active === link.id ? "page" : undefined}
                className={`relative px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${
                  active === link.id
                    ? "text-primary font-semibold bg-primary/10 dark:bg-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute -bottom-0.5 sm:-bottom-1 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 h-[2px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right actions */}
      <div className="flex items-center gap-1 sm:gap-2">
        <Button
          asChild
          variant="default"
          size="sm"
          className="hidden sm:flex font-medium gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm transition"
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </Button>
        <div className="hidden xl:flex">
          <GitHubMenu />
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}