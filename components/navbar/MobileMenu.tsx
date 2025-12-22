"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, Github as GitHubIcon, Menu, Zap } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import ThemeToggle from "../ThemeToggle";
import { Badge } from "../ui/badge";

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
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  return (
    <>
      {/* Mobile header bar */}
      <div className="bg-background/80 dark:bg-black/60 backdrop-blur-xl border border-border rounded-2xl shadow-lg w-full flex items-center justify-between px-4 py-3">
        <span className="text-base sm:text-lg font-bold text-foreground tracking-wide">Menu</span>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full p-2 hover:bg-primary/10 transition-transform active:scale-95"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
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

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[85vw] max-w-[320px] sm:w-[300px] bg-background border-l border-border z-[80] flex flex-col shadow-2xl rounded-l-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="text-base sm:text-lg font-bold text-foreground tracking-wide">Navigation</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full p-2 hover:bg-secondary/20 transition-transform active:scale-95"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </Button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-2 p-4 flex-grow overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() => {
                      scrollToSection(link.id);
                      setOpen(false);
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm sm:text-base font-medium transition-all ${
                      active === link.id
                        ? "bg-primary/10 dark:bg-primary/20 text-primary border-l-4 border-primary"
                        : "hover:bg-secondary/60 text-foreground"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              {/* Bottom actions */}
              <div className="p-4 border-t border-border space-y-3">
                <Button asChild className="w-full rounded-xl py-3 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Resume <ExternalLink size={18} />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  asChild
                  className="w-full rounded-xl py-3 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  <a href="https://github.com/madhav9757" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon size={18} /> GitHub <Badge variant="secondary">Pro</Badge>
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
