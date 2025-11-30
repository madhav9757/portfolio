"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileMenu";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    // Responsive nav height based on screen size
    const getNavHeight = () => {
      if (window.innerWidth < 640) return 70; // Mobile small
      if (window.innerWidth < 768) return 80; // Mobile medium
      return 90; // Tablet and desktop
    };

    const onScroll = () => {
      const currentY = window.scrollY;
      const NAV_HEIGHT = getNavHeight();

      // Hide navbar when scrolling down, show when scrolling up
      // More sensitive on mobile (100px) vs desktop (150px)
      const hideThreshold = window.innerWidth < 768 ? 100 : 150;
      setHidden(currentY > lastScroll.current && currentY > hideThreshold);
      lastScroll.current = currentY;

      // Update active section based on scroll position
      const found = NAV_LINKS.find((link) => {
        const el = document.getElementById(link.id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= NAV_HEIGHT && rect.bottom >= NAV_HEIGHT;
      });

      setActive(found ? found.id : currentY < NAV_HEIGHT ? "home" : active);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [active]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    
    // Responsive offset based on screen size
    const offset = window.innerWidth < 640 ? 60 : window.innerWidth < 768 ? 70 : 80;
    window.scrollTo({ top: el.offsetTop - offset, behavior: "smooth" });
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="fixed top-2 sm:top-3 md:top-4 left-0 right-0 z-[60] max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80rem] mx-auto px-2 sm:px-3 md:px-4"
        >
          {/* Desktop/Tablet nav - hidden on small mobile */}
          <div className="hidden md:block">
            <DesktopNav
              active={active}
              scrollToSection={scrollToSection}
              mounted={mounted}
            />
          </div>

          {/* Mobile nav - shown only on mobile (below md) */}
          <div className="block md:hidden">
            <MobileNav
              active={active}
              scrollToSection={scrollToSection}
              mounted={mounted}
            />
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}