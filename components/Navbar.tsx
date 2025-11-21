"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"; // Import useScroll, useSpring
import { Menu, X, Search, Sun, Moon, ExternalLink } from "lucide-react";

// Assuming these are imported correctly from your components directory
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false); // mobile sheet
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false); // hide on scroll
  const lastScroll = useRef(0);
  const navRef = useRef<HTMLElement | null>(null);

  // Framer Motion scroll progress for the top bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll spy: set active link when section in view
  useEffect(() => {
    // The height of the fixed/sticky navbar container + some padding
    const NAVBAR_HEIGHT = 80; // Estimate: top-4 + padding/height of the bar itself

    const onScroll = () => {
      // --- Scroll Spy Logic ---
      // We want to detect which section's top is closest to the NAVBAR_HEIGHT
      const topOffset = NAVBAR_HEIGHT;
      const current = NAV_LINKS.map((l) => l.id).find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        // Check if the element's top is just above or at the offset line.
        // A smaller tolerance can be added if needed, e.g., <= topOffset + 10
        const rect = el.getBoundingClientRect();
        return rect.top <= topOffset && rect.bottom >= topOffset;
      });

      // Fallback for when no section is at the exact offset (e.g., at the very bottom)
      if (current) {
        setActive(current);
      } else {
        // Find the topmost visible section if we're scrolling up or down quickly
        const firstVisible = NAV_LINKS.slice() // copy the array
          .reverse() // check from bottom up
          .find((l) => {
            const el = document.getElementById(l.id);
            if (!el) return false;
            const rect = el.getBoundingClientRect();
            // Check if the section is on the screen and its top is within 50px of the viewport top
            return rect.top < window.innerHeight / 2;
          });
        if (firstVisible) setActive(firstVisible.id);
      }

      // --- Hide on Scroll Logic ---
      const st = window.scrollY || 0;
      // Use 150px scroll threshold before hiding
      if (st > lastScroll.current && st > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll.current = st;
    };

    // Add throttle/debounce in a real app, but for a simple site, this is fine
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Use a custom offset for scrolling, aligning it below the sticky header
      const y = el.getBoundingClientRect().top + window.scrollY - 70; // 70px offset
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* tiny progress bar when scrolling */}
      <motion.div
        className="fixed left-0 top-0 h-[3px] z-[999] origin-left bg-gradient-to-r from-primary to-indigo-400"
        style={{ scaleX }} // Use Framer Motion's scaleX spring
      />

      <AnimatePresence>
        {!hidden && (
          <motion.nav
            ref={navRef}
            initial={{ y: -60, opacity: 0 }} // Increased initial offset for smoother entry
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            // Smoother transition: a bit more stiffness/damping
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="sticky top-4 z-[50] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" // z-index reduced slightly
            aria-label="Main navigation"
          >
            <div
              className="rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-black/60 border border-border/80 transition-shadow duration-300"
              style={{ boxShadow: "0 6px 20px rgba(2,6,23,0.1)" }} // Slightly darker shadow
            >
              <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-6"> {/* py-2.5 for better vertical centering */}
                {/* LOGO / BRAND */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => scrollTo("home")}
                    // Removed extra padding on the button, relying on inner elements
                    className="inline-flex items-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label="Go to home"
                  >
                    {/* Logo mark - ensure this is vertically centered with the text */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-indigo-500 flex items-center justify-center text-white text-base font-semibold shrink-0">
                        MS
                      </div>
                      <span className="hidden md:inline-block font-semibold text-base whitespace-nowrap">
                        Madhav Semwal
                      </span>
                    </div>
                  </button>
                </div>

                {/* CENTER LINKS + SEARCH (desktop) */}
                <div className="hidden md:flex md:items-center md:gap-8"> {/* Increased gap for more breathing room */}
                  {/* NAV LINKS */}
                  <ul role="list" className="flex items-center gap-1">
                    {NAV_LINKS.map((link) => {
                      const isActive = active === link.id;
                      return (
                        <li key={link.id}>
                          <button
                            onClick={() => scrollTo(link.id)}
                            className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                              isActive
                                ? "text-primary bg-primary/10 dark:bg-primary/20" // Active background for better visual
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                            }`}
                          >
                            {link.label}
                            {/* animated underline (less prominent now with the background) */}
                            <span
                              aria-hidden
                              className={`absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full transition-all duration-300 ${
                                isActive ? "bg-primary" : "bg-transparent"
                              }`}
                            />
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  {/* separator */}
                  <Separator className="h-6 w-px bg-border/70" orientation="vertical" />

                  {/* Search (non-blocking) */}
                  {/* Reduced search bar width slightly and ensured perfect vertical alignment */}
                  <div className="relative flex items-center">
                    <label htmlFor="nav-search" className="sr-only">
                      Search projects
                    </label>
                    <Input
                      id="nav-search"
                      placeholder="Search projects, posts..."
                      className="w-[280px] h-9 rounded-lg pl-3 pr-8 text-sm bg-background" // Added bg-background for consistency
                      // You can wire onChange for live-search
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Search size={16} className="text-muted-foreground" />
                    </div>
                  </div>
                </div>

                {/* ACTIONS (right) */}
                <div className="flex items-center gap-2 sm:gap-3"> {/* Adjusted gaps */}
                  {/* CTA */}
                  <div className="hidden sm:block">
                    {/* Changed to a proper <a> tag inside Button with target="_blank" */}
                    <Button
                      asChild
                      className="px-3 py-2 text-sm"
                    >
                      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Resume
                      </a>
                    </Button>
                  </div>

                  {/* Theme toggle */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label="Toggle theme"
                  >
                    {/* Add transition for a smoother icon switch */}
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={theme}
                        initial={{ y: -5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 5, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />} {/* Slightly larger icons */}
                      </motion.span>
                    </AnimatePresence>
                  </Button>

                  {/* User avatar dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="shrink-0" aria-label="Open user menu">
                        <Avatar className="w-8 h-8 border-2 border-primary/50 dark:border-primary/30"> {/* Added border for emphasis */}
                          {/* Fallback avatar text is good practice if the image fails */}
                          <span className="flex items-center justify-center text-xs font-medium">MS</span> 
                          {/* Note: In a real app, use a proper Image component for optimization */}
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img alt="avatar" src="/avatar.jpg" className="object-cover" />
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-56">
                      <div className="px-3 py-2">
                        <p className="text-sm font-semibold">Madhav Semwal</p> {/* Increased font-weight */}
                        <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
                      </div>
                      <Separator />
                      <DropdownMenuItem onClick={() => window.open("https://github.com/madhav9757", "_blank")}>
                        GitHub <ExternalLink size={14} className="ml-auto opacity-70" />
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => window.open("https://linkedin.com/in/madhavsemwal", "_blank")}>
                        LinkedIn <ExternalLink size={14} className="ml-auto opacity-70" />
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => scrollTo("contact")}>Contact</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Mobile menu trigger */}
                  <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                      <SheetTrigger asChild>
                        <Button aria-label="Open menu" variant="outline" size="icon">
                          <Menu size={18} />
                        </Button>
                      </SheetTrigger>

                      <SheetContent side="right" className="w-full max-w-xs p-6"> {/* Switched to 'right' and max-w-xs for a common design pattern */}
                        <div className="flex flex-col gap-4">
                          {/* Header section (Logo and Close button) */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-indigo-500 flex items-center justify-center text-white font-semibold shrink-0">
                                MS
                              </div>
                              <div>
                                <p className="font-semibold text-sm">Madhav Semwal</p>
                                <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
                              </div>
                            </div>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" aria-label="Close menu">
                                    <X size={18} />
                                </Button>
                            </SheetTrigger>
                          </div>
                          
                          <Separator />

                          <nav aria-label="Mobile navigation" className="flex flex-col gap-1"> {/* Reduced gap */}
                            {NAV_LINKS.map((l) => (
                              <button
                                key={l.id}
                                onClick={() => scrollTo(l.id)}
                                className={`text-left w-full py-3 px-3 rounded-lg text-base transition-colors ${
                                  active === l.id ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-secondary/50"
                                }`}
                              >
                                {l.label}
                              </button>
                            ))}
                          </nav>

                          <Separator />

                          <div className="space-y-3">
                            <Button asChild className="w-full" variant="secondary"> {/* Secondary variant is a nice touch for action in a menu */}
                              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                Download Resume <ExternalLink size={16} className="ml-2" />
                              </a>
                            </Button>

                            <div className="flex items-center justify-between">
                                <a href="mailto:madhavsemwalofficial@gmail.com" className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors">
                                    Email me
                                </a>
                                <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="shrink-0">
                                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                                </Button>
                            </div>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}