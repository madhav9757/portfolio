"use client";

import React, { JSX } from "react";
import { Menu, X, ExternalLink, Github, Mail, Sparkles, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface NavLink { id: string; label: string; }

interface MobileMenuProps {
  navLinks?: NavLink[];
  active: string;
  scrollToSection: (id: string) => void;
  theme: string | undefined;
  setTheme: (theme: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  renderThemeToggle: () => JSX.Element | null;
}

// 1. Simplified container variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 }, 
  },
};

// 2. Simplified item variants for minimal look
const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { type: "spring", stiffness: 200, damping: 20 } 
  },
};

// 3. Simplified icon hover/tap variants
const iconVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 }, 
  tap: { scale: 0.95 }, 
};


export default function MobileMenu({
  navLinks = [],
  active,
  scrollToSection,
  theme,
  setTheme,
  open,
  setOpen,
  renderThemeToggle,
}: MobileMenuProps) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {/* FIX: Trigger contains only the Menu icon. Removed AnimatePresence to prevent flicker. */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={iconVariants.tap}> 
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl sm:hidden relative overflow-hidden group"
            aria-label="Open menu"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <Menu size={20} className="relative z-10" />
          </Button>
        </motion.div>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="p-0 w-[85vw] max-w-[380px] min-w-[280px] h-screen flex flex-col bg-gradient-to-br from-background via-background to-background/95 backdrop-blur-xl border-l border-border/50 z-[10000] overflow-hidden"
      >
        {/* Decorative gradients */}
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-tr from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/4 -translate-x-1/4" />

        {/* Header */}
        <motion.div
          initial={{ y: -10, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05, type: "spring", stiffness: 150 }} 
          className="relative flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-border/50 backdrop-blur-sm flex-shrink-0"
        >
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={iconVariants.tap} transition={{ type: "spring", stiffness: 300 }}>
              <Avatar className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-primary/40 shadow-lg shadow-primary/20 ring-2 ring-background flex-shrink-0">
                <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-sm sm:text-base">
                  MS
                </AvatarFallback>
              </Avatar>
            </motion.div>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-sm sm:text-base bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent truncate">
                Madhav Semwal
              </h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground font-medium flex items-center gap-1">
                <Sparkles size={9} className="text-primary flex-shrink-0" />
                <span className="truncate">Full-Stack Developer</span>
              </p>
            </div>
          </div>
          {/* Close Button */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={iconVariants.tap} className="flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="rounded-full hover:bg-secondary/80 h-8 w-8 sm:h-9 sm:w-9 transition-colors"
            >
              <X size={16} className="sm:w-[18px] sm:h-[18px]" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Navigation */}
        <nav className="relative flex-1 overflow-y-auto py-3 sm:py-4 px-3 sm:px-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent overscroll-contain">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-1 sm:space-y-1.5">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <motion.div 
                  key={link.id} 
                  variants={itemVariants} 
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <button
                    onClick={() => {
                      scrollToSection(link.id);
                      setOpen(false); // FIX: Close menu on navigation click
                    }}
                    className={`relative w-full text-left px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold 
                      transition-all duration-300 flex items-center justify-between group
                      ${isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-primary/30"
                        : "text-foreground hover:bg-secondary/80 hover:shadow-md"
                      }
                    `}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="relative z-10 truncate pr-2">{link.label}</span>
                    <ChevronRight
                      size={14}
                      className={`transition-all duration-300 flex-shrink-0 sm:w-4 sm:h-4
                        ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0"}
                      `}
                    />
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg sm:rounded-xl"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </nav>

        {/* Footer */}
        <motion.div
          initial={{ y: 10, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 150 }} 
          className="relative p-3 sm:p-4 border-t border-border/50 backdrop-blur-sm space-y-2 sm:space-y-3 flex-shrink-0"
        >
          {/* Resume Button */}
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              className="w-full rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 h-10 sm:h-11"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 group"
              >
                <span className="truncate">Download Resume</span>
                <motion.div variants={iconVariants} initial="rest" whileHover="hover" whileTap="tap">
                  <ExternalLink size={14} className="flex-shrink-0 sm:w-4 sm:h-4" />
                </motion.div>
              </a>
            </Button>
          </motion.div>

          {/* Email Link */}
          <motion.a
            href="mailto:madhavsemwalofficial@gmail.com"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-medium text-muted-foreground hover:text-primary bg-secondary/50 hover:bg-secondary transition-all group min-w-0"
          >
            <Mail size={12} className="group-hover:text-primary transition-colors flex-shrink-0 sm:w-[14px] sm:h-[14px]" />
            <span className="truncate">madhavsemwalofficial@gmail.com</span>
          </motion.a>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-2 sm:gap-2.5">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={iconVariants.tap} className="flex-1 min-w-0">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full h-10 sm:h-11 rounded-lg sm:rounded-xl border-border/50 hover:border-primary/50 hover:bg-secondary/80 transition-all relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 dark:from-blue-400/10 dark:to-purple-400/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 min-w-0">
                  {renderThemeToggle()}
                  <span className="text-[10px] sm:text-xs font-medium truncate">Theme</span>
                </span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={iconVariants.tap} className="flex-1 min-w-0">
              <Button variant="outline" size="icon" className="w-full h-10 sm:h-11 rounded-lg sm:rounded-xl border-border/50 hover:border-primary/50 hover:bg-secondary/80 transition-all group" asChild>
                <a
                  href="https://github.com/madhav9757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 min-w-0"
                >
                  <Github size={14} className="group-hover:rotate-6 transition-transform flex-shrink-0 sm:w-4 sm:h-4" />
                  <span className="text-[10px] sm:text-xs font-medium truncate">GitHub</span>
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Copyright */}
          <p className="text-center text-[9px] sm:text-[10px] text-muted-foreground/60 pt-1 sm:pt-2 leading-relaxed">
            © 2025 Madhav Semwal. All rights reserved.
          </p>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}