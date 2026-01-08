"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  Command, 
  MousePointerClick, 
  Zap, 
  Link2, 
  ArrowUp, 
  Keyboard 
} from "lucide-react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileMenu";
import { NAV_LINKS } from "@/lib/constants";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from "@/components/ui/context-menu";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toast("Command Menu", {
          description: "Interface search logic is being initialized.",
          icon: <Command className="h-4 w-4" />,
        });
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const hideThreshold = 120;
      
      // Hidden state logic
      setHidden(currentY > lastScroll.current && currentY > hideThreshold);
      lastScroll.current = currentY;

      // Active section detection
      const NAV_HEIGHT = 100;
      const found = NAV_LINKS.find((link) => {
        const el = document.getElementById(link.id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= NAV_HEIGHT && rect.bottom >= NAV_HEIGHT;
      });
      
      if (found) setActive(found.id);
      else if (currentY < 100) setActive("home");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  if (!mounted) return null;

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[70] origin-left"
        style={{ scaleX }}
      />

      <AnimatePresence mode="wait">
        {!hidden && (
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-6 left-0 right-0 z-[60] px-4"
          >
            <div className="max-w-fit mx-auto">
              <ContextMenu>
                <ContextMenuTrigger>
                  <div className="relative group">
                    {/* Glassmorphism Container */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
                    
                    <div className="relative border border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl shadow-black/5 rounded-full px-4 py-2">
                      <div className="hidden md:block">
                        <DesktopNav
                          active={active}
                          scrollToSection={scrollToSection}
                          mounted={mounted}
                        />
                      </div>
                      <div className="block md:hidden">
                        <MobileNav
                          active={active}
                          scrollToSection={scrollToSection}
                          mounted={mounted}
                        />
                      </div>
                    </div>
                  </div>
                </ContextMenuTrigger>

                <ContextMenuContent className="w-64 p-1.5 rounded-2xl border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl">
                  <ContextMenuItem
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg cursor-pointer focus:bg-primary/5 focus:text-primary transition-colors"
                  >
                    <ArrowUp size={15} /> 
                    <span className="text-sm font-medium">Scroll to Top</span>
                    <ContextMenuShortcut className="opacity-50">
                      <Zap size={12} />
                    </ContextMenuShortcut>
                  </ContextMenuItem>

                  <ContextMenuSeparator className="bg-border/50 my-1" />

                  <ContextMenuItem
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast.success("URL copied", {
                        description: "The link is ready to share.",
                        icon: <Link2 className="h-4 w-4" />,
                      });
                    }}
                    className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg cursor-pointer focus:bg-primary/5 focus:text-primary transition-colors"
                  >
                    <Link2 size={15} />
                    <span className="text-sm font-medium">Copy Section Link</span>
                  </ContextMenuItem>

                  <ContextMenuItem className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg cursor-pointer focus:bg-primary/5 focus:text-primary transition-colors">
                    <Keyboard size={15} />
                    <span className="text-sm font-medium">Shortcuts</span>
                    <ContextMenuShortcut className="text-[10px] bg-muted px-1.5 py-0.5 rounded border border-border/50">
                      ⌘K
                    </ContextMenuShortcut>
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}