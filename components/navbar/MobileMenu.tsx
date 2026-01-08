"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  X, 
  ExternalLink, 
  Github as GitHubIcon, 
  Menu, 
  Terminal,
  ChevronRight,
  User,
  LayoutGrid,
  Mail,
  Home
} from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import ThemeToggle from "../ThemeToggle";
import { Badge } from "../ui/badge";
import { Separator } from "@/components/ui/separator";

interface MobileNavProps {
  active: string;
  scrollToSection: (id: string) => void;
  mounted: boolean;
}

// Icon mapper for nav links to add visual flair
const getIcon = (id: string) => {
  switch (id) {
    case "home": return Home;
    case "about": return User;
    case "projects": return LayoutGrid;
    case "contact": return Mail;
    default: return Terminal;
  }
};

export default function MobileNav({
  active,
  scrollToSection,
  mounted,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  if (!mounted) return null;

  return (
    <>
      {/* Mobile Trigger Bar */}
      <div className="flex items-center justify-between px-3 py-2 w-full">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-primary rounded-xl text-primary-foreground shadow-md shadow-primary/20">
            <Terminal size={18} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-sm tracking-tight">MADHAV.DEV</span>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            className="rounded-xl border-border/50 bg-background/50 backdrop-blur-md"
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </Button>
        </div>
      </div>

      {/* Slide-out Menu Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-xl z-[100]"
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background border-l border-border/50 z-[110] flex flex-col shadow-2xl"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Navigation</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  <X size={20} />
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-4 space-y-2">
                {NAV_LINKS.map((link, idx) => {
                  const Icon = getIcon(link.id);
                  const isActive = active === link.id;

                  return (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <button
                        onClick={() => {
                          scrollToSection(link.id);
                          setOpen(false);
                        }}
                        className={`group w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                          isActive 
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                          : "hover:bg-muted text-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                          <span className="font-bold text-lg">{link.label}</span>
                        </div>
                        <ChevronRight 
                          size={18} 
                          className={`transition-transform duration-300 ${
                            isActive ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                        />
                      </button>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom Actions */}
              <div className="p-8 mt-auto space-y-4 bg-muted/30">
                <div className="flex flex-col gap-3">
                  <Button asChild size="lg" className="w-full h-14 rounded-2xl font-bold shadow-lg shadow-primary/10">
                    <a href="/resume.pdf" target="_blank">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      View Full Resume
                    </a>
                  </Button>

                  <Button asChild variant="outline" size="lg" className="w-full h-14 rounded-2xl font-bold bg-background/50">
                    <a href="https://github.com/madhav9757" target="_blank">
                      <GitHubIcon className="mr-2 h-5 w-5" />
                      GitHub Profile
                      <Badge variant="secondary" className="ml-auto bg-primary/10 text-primary border-none">Pro</Badge>
                    </a>
                  </Button>
                </div>
                
                <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                  Available for collaborations &bull; 2025
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}