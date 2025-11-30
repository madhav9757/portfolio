"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ExternalLink, Github, Sun, Moon, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProgressBar from "./ProgressBar";
import GitHubMenu from "./GitHubMenu";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

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
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScroll = useRef(0);
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  
  // Smooth scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Theme mount fix
  useEffect(() => setMounted(true), []);

  // Enhanced scroll listener with debouncing
  useEffect(() => {
    const NAV_HEIGHT = 90;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          
          // Hide/show navbar logic
          if (y > lastScroll.current && y > 150) {
            setHidden(true);
          } else {
            setHidden(false);
          }
          
          // Add backdrop blur when scrolled
          setScrolled(y > 20);
          
          lastScroll.current = y;

          // Active section detection with improved logic
          let found = false;
          for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
            const link = NAV_LINKS[i];
            const el = document.getElementById(link.id);
            if (!el) continue;
            
            const rect = el.getBoundingClientRect();
            const threshold = window.innerHeight / 3;
            
            if (rect.top <= threshold && rect.bottom >= NAV_HEIGHT) {
              setActive(link.id);
              found = true;
              break;
            }
          }
          
          // Default to home if nothing found
          if (!found && y < 100) {
            setActive("home");
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll with offset
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    
    const navHeight = navRef.current?.offsetHeight || 70;
    const targetPosition = el.offsetTop - navHeight - 10;
    
    window.scrollTo({ 
      top: targetPosition, 
      behavior: "smooth" 
    });
    setOpen(false);
  }, []);

  // Enhanced theme toggle with animation
  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  // Theme toggle animation
  const renderThemeToggle = () =>
    mounted ? (
      <AnimatePresence mode="wait">
        <motion.span
          key={theme}
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0, rotate: 180, opacity: 0 }}
          transition={{ 
            duration: 0.25, 
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          className="flex items-center justify-center"
        >
          {theme === "dark" ? (
            <Sun size={18} className="text-yellow-500" />
          ) : (
            <Moon size={18} className="text-blue-600" />
          )}
        </motion.span>
      </AnimatePresence>
    ) : (
      <div className="w-[18px] h-[18px]" />
    );

  return (
    <>
      {/* Enhanced Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[100] shadow-lg shadow-purple-500/50"
        style={{ scaleX }}
      />

      <AnimatePresence>
        {!hidden && (
          <motion.nav
            ref={navRef}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 25,
              mass: 0.8
            }}
            className="sticky top-4 z-[70] w-full max-w-[100vw] px-3 sm:px-4"
          >
            <motion.div 
              className={`
                bg-white/80 dark:bg-black/70 
                backdrop-blur-xl 
                border border-border/50 
                shadow-lg hover:shadow-xl
                rounded-2xl
                transition-all duration-300
                ${scrolled ? 'shadow-2xl border-border/70' : ''}
              `}
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between px-3 sm:px-4 py-3 md:grid md:grid-cols-3">

                {/* LEFT: Enhanced LOGO */}
                <motion.div 
                  className="flex items-center gap-2 h-10 font-bold text-lg cursor-pointer group"
                  onClick={() => scrollToSection("home")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    <Sparkles className="text-primary w-6 h-6" />
                  </motion.div>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:to-blue-600 transition-all duration-500">
                    Portfolio
                  </span>
                </motion.div>

                {/* CENTER: Desktop nav */}
                <DesktopNav
                  navLinks={NAV_LINKS}
                  active={active}
                  scrollToSection={scrollToSection}
                />

                {/* RIGHT: Enhanced Buttons */}
                <div className="flex items-center justify-end gap-1.5 sm:gap-2">

                  {/* Resume with enhanced animation */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      variant="default"
                      className="hidden sm:flex gap-1.5 px-4 rounded-xl text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        Resume <ExternalLink size={15} />
                      </a>
                    </Button>
                  </motion.div>

                  {/* GitHub Menu with animation */}
                  <div className="hidden md:block">
                    <GitHubMenu />
                  </div>

                  {/* GitHub icon for mobile with enhanced hover */}
                  <motion.div 
                    className="md:hidden"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-xl hover:bg-accent/50 transition-colors" 
                      asChild
                    >
                      <a
                        href="https://github.com/madhav9757"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                      </a>
                    </Button>
                  </motion.div>

                  {/* Enhanced Theme toggle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleTheme}
                      className="hidden sm:flex rounded-xl hover:bg-accent/50 transition-colors relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 dark:from-blue-400/20 dark:to-purple-400/20"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      {renderThemeToggle()}
                    </Button>
                  </motion.div>

                  {/* Mobile menu */}
                  <MobileMenu
                    navLinks={NAV_LINKS}
                    active={active}
                    scrollToSection={scrollToSection}
                    theme={theme}
                    setTheme={setTheme}
                    open={open}
                    setOpen={setOpen}
                    renderThemeToggle={renderThemeToggle}
                  />

                </div>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}