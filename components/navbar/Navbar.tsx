"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  Home,
  FolderGit2,
  Code2,
  Briefcase,
  GraduationCap,
  User,
  MessageSquare,
  Menu,
  X,
  Download,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Sparkles,
  Terminal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { usePathname, useRouter } from "next/navigation";

const NAV_LINKS = [
  { id: "home", label: "Home", icon: Home, path: "/" },
  { id: "projects", label: "Projects", icon: FolderGit2, path: "/projects" },
  { id: "skills", label: "Skills", icon: Code2, path: "/skill" },
  { id: "experience", label: "Experience", icon: Briefcase, path: "/#experience" },
  { id: "education", label: "Education", icon: GraduationCap, path: "/#education" },
  { id: "about", label: "About", icon: User, path: "/#about" },
  { id: "contact", label: "Contact", icon: MessageSquare, path: "/#contact" }
];

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/madhav9757", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/madhavsemwal", label: "LinkedIn" },
  { icon: Mail, href: "mailto:madhavsemwalofficial@gmail.com", label: "Email" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = NAV_LINKS.map(link => link.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string, path?: string) => {
    // If we're on a different page and the link is a section on homepage
    if (pathname !== "/" && path && path.startsWith("/#")) {
      router.push(path);
      setMobileMenuOpen(false);
      return;
    }
    
    // If it's a separate page link
    if (path && !path.startsWith("/#") && path !== "/") {
       router.push(path);
       setMobileMenuOpen(false);
       return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setMobileMenuOpen(false);
      toast.success(`Navigated to ${id}`, {
        description: `Viewing ${id} section`,
        duration: 2000
      });
    } else if (path) {
      router.push(path);
      setMobileMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    toast.success(`${theme === "dark" ? "Light" : "Dark"} mode activated`, {
      icon: theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />
    });
  };

  if (!mounted) return null;

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4`}
      >
        <div className="max-w-7xl mx-auto">
          <div className={`relative border rounded-full transition-all duration-300 ${
            isScrolled 
              ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border-gray-200/50 dark:border-gray-800/50" 
              : "bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border-gray-200/30 dark:border-gray-800/30"
          }`}>
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
            
            <div className="flex items-center justify-between px-4 py-3">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("home")}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Terminal className="w-5 h-5 text-white" />
                  </div>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-1 -right-1"
                  >
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                  </motion.div>
                </div>
                <span className="font-bold text-lg hidden sm:block group-hover:text-blue-500 transition-colors">
                  Madhav
                </span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-1.5">
                {NAV_LINKS.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.id;
                  
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id, link.path)}
                      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        isActive
                          ? "text-white"
                          : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-pill"
                          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <Icon className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">{link.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {/* Theme Toggle */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hidden sm:block"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={theme}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {theme === "dark" ? (
                        <Sun className="w-5 h-5 text-yellow-500" />
                      ) : (
                        <Moon className="w-5 h-5 text-blue-500" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>

                {/* Resume Button - Desktop */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:block"
                >
                  <Button
                    asChild
                    size="sm"
                    className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/30"
                  >
                    <a href="/resume.pdf" download>
                      <Download className="w-4 h-4 mr-2" />
                      Resume
                    </a>
                  </Button>
                </motion.div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <motion.div
                    animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-gray-900 z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Terminal className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-xl">Madhav.dev</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 space-y-2">
                  {NAV_LINKS.map((link, index) => {
                    const Icon = link.icon;
                    const isActive = activeSection === link.id;
                    
                    return (
                      <motion.button
                        key={link.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => scrollToSection(link.id, link.path)}
                        className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium text-lg">{link.label}</span>
                      </motion.button>
                    );
                  })}
                </nav>

                {/* Bottom Section */}
                <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-800">
                  {/* Theme Toggle Mobile */}
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-medium">Theme</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground capitalize">{theme}</span>
                      {theme === "dark" ? (
                        <Sun className="w-5 h-5 text-yellow-500" />
                      ) : (
                        <Moon className="w-5 h-5 text-blue-500" />
                      )}
                    </div>
                  </button>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {SOCIAL_LINKS.map((social) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all"
                          aria-label={social.label}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      );
                    })}
                  </div>

                  {/* Resume Button */}
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/30"
                  >
                    <a href="/resume.pdf" download>
                      <Download className="w-5 h-5 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}