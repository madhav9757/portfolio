"use client";

import { motion } from "framer-motion";

export default function DesktopNav({
  navLinks,
  active,
  scrollToSection,
}: {
  navLinks: { id: string; label: string }[];
  active: string;
  scrollToSection: (id: string) => void;
}) {
  return (
    <ul className="hidden md:flex items-center justify-center gap-3 text-sm font-medium">
      {navLinks.map((link) => {
        const isActive = active === link.id;
        return (
          <li key={link.id} className="relative">
            <button
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}

              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[3px] bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
