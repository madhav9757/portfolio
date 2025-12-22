"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Command, MousePointerClick, Zap } from "lucide-react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileMenu";
import { NAV_LINKS } from "@/lib/constants";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";
import { toast } from "sonner";
import { Badge } from "../ui/badge";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 25, restDelta: 0.001 });

  // Mount check
  useEffect(() => setMounted(true), []);

  // Keyboard shortcut toast
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toast("Command Menu coming soon!", {
          description: "This feature is being wired to your search logic.",
          icon: <Command className="h-4 w-4" />,
        });
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Scroll logic
  useEffect(() => {
    const getNavHeight = () => (window.innerWidth < 640 ? 70 : window.innerWidth < 768 ? 80 : 90);
    const onScroll = () => {
      const currentY = window.scrollY;
      const NAV_HEIGHT = getNavHeight();
      const hideThreshold = window.innerWidth < 768 ? 100 : 150;
      setHidden(currentY > lastScroll.current && currentY > hideThreshold);
      lastScroll.current = currentY;

      const found = NAV_LINKS.find((link) => {
        const el = document.getElementById(link.id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= NAV_HEIGHT + 10 && rect.bottom >= NAV_HEIGHT;
      });
      setActive(found ? found.id : currentY < NAV_HEIGHT ? "home" : active);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = window.innerWidth < 640 ? 60 : 80;
    window.scrollTo({ top: el.offsetTop - offset, behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {!hidden && (
          <motion.nav
            initial={{ y: -100, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -100, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="fixed top-4 left-0 right-0 z-[60] max-w-[95vw] lg:max-w-6xl mx-auto"
          >
            <ContextMenu>
              <ContextMenuTrigger>
                <div className="relative group px-2">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-700" />
                  <div className="relative">
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

              <ContextMenuContent className="w-64 animate-fade-in bg-background border border-border rounded-xl shadow-xl">
                <ContextMenuItem
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="gap-2 hover:bg-primary/10 transition-all rounded-md"
                >
                  <Zap size={14} className="text-yellow-500" /> Jump to Top
                  <Badge variant="secondary" className="ml-auto text-[10px]">Pro</Badge>
                </ContextMenuItem>

                <ContextMenuSeparator />

                <ContextMenuItem className="gap-2 hover:bg-primary/10 transition-all rounded-md">
                  <MousePointerClick size={14} /> Focus Navigation
                </ContextMenuItem>

                <ContextMenuItem
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast.success("Link copied to clipboard!");
                  }}
                  className="hover:bg-primary/10 transition-all rounded-md"
                >
                  Copy Current Section URL
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
