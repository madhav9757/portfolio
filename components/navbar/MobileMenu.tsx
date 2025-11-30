"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, Github as GitHubIcon, Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import ThemeToggle from "../ThemeToggle";

interface MobileNavProps {
  active: string;
  scrollToSection: (id: string) => void;
  mounted: boolean;
}

export default function MobileNav({
  active,
  scrollToSection,
  mounted,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      {/* Mobile header bar */}
      <div className="bg-white/70 dark:bg-black/60 backdrop-blur-xl border border-border rounded-2xl shadow-lg w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3">
        <span className="text-base sm:text-lg font-bold text-foreground">Menu</span>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl h-9 w-9 sm:h-10 sm:w-10"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={18} className="sm:hidden" />
            <Menu size={20} className="hidden sm:block" />
          </Button>
        </div>
      </div>

      {/* Mobile slide-out menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70]"
              onClick={() => setOpen(false)}
            />

            {/* Menu panel - responsive width */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[85vw] max-w-[320px] sm:w-[300px] bg-background border-l border-border z-[80] flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border">
                <span className="text-base sm:text-lg font-bold text-foreground">Navigation</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-xl h-9 w-9 sm:h-10 sm:w-10"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={18} className="sm:hidden" />
                  <X size={20} className="hidden sm:block" />
                </Button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1 p-3 sm:p-4 flex-grow overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      scrollToSection(link.id);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base transition-all ${
                      active === link.id
                        ? "bg-primary/10 dark:bg-primary/20 text-primary font-semibold border-l-4 border-primary"
                        : "hover:bg-secondary/60 text-foreground"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              {/* Bottom actions */}
              <div className="p-3 sm:p-4 border-t border-border space-y-2.5 sm:space-y-3">
                <Button asChild className="w-full rounded-xl py-2.5 sm:py-3 font-semibold text-sm sm:text-base">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Resume <ExternalLink size={16} className="sm:hidden" />
                    <ExternalLink size={18} className="hidden sm:block" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full rounded-xl py-2.5 sm:py-3 font-semibold text-sm sm:text-base"
                  asChild
                >
                  <a
                    href="https://github.com/madhav9757"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon size={16} className="sm:hidden" />
                    <GitHubIcon size={18} className="hidden sm:block" />
                    <span>GitHub</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}