"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Search, Sun, Moon, ExternalLink, Github as GitHubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

// -------------------------
// GitHub Repo Type
// -------------------------
type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
};

// --- GitHub Menu Component ---
function GitHubMenu() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/madhav9757/repos?sort=updated&per_page=5")
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);
        return res.json();
      })
      .then((data: Repo[]) => {
        const filtered = data
          .filter((r) => !r.fork)
          .map((r) => ({
            ...r,
          }));
        setRepos(filtered);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load repos");
      });
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="GitHub menu">
          <GitHubIcon size={18} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64 bg-background border border-border rounded-lg">
        <div className="p-3 border-b border-border/60">
          <a
            href="https://github.com/madhav9757"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold hover:underline"
          >
            <GitHubIcon size={20} />
            <span>madhav9757</span>
          </a>
        </div>

        <div className="p-2">
          {error && <p className="text-sm text-destructive">{error}</p>}
          {!repos && !error && <p className="text-sm text-muted-foreground">Loading...</p>}
          {repos && repos.length === 0 && <p className="text-sm text-muted-foreground">No public repos</p>}
          {repos && repos.length > 0 && (
            <ul className="space-y-2">
              {repos.map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 rounded-md hover:bg-secondary/50 dark:hover:bg-secondary/30"
                  >
                    <div className="font-medium text-sm">{repo.name}</div>
                    {repo.description && (
                      <p className="text-xs text-muted-foreground mt-1 truncate">{repo.description}</p>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Separator className="my-2" />

        <div className="p-2 text-center">
          <a
            href="https://github.com/madhav9757"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:underline inline-flex items-center justify-center gap-1"
          >
            View full GitHub <ExternalLink size={14} />
          </a>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// --- Navbar Component ---
export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false); // mobile sheet
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false); // hide on scroll
  const lastScroll = useRef(0);
  const navRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);

    const NAVBAR_HEIGHT = 80;

    const onScroll = () => {
      const topOffset = NAVBAR_HEIGHT;
      const current = NAV_LINKS.map((l) => l.id).find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= topOffset && rect.bottom >= topOffset;
      });

      if (current) setActive(current);
      else {
        const firstVisible = NAV_LINKS.slice()
          .reverse()
          .find((l) => {
            const el = document.getElementById(l.id);
            if (!el) return false;
            const rect = el.getBoundingClientRect();
            return rect.top < window.innerHeight / 2;
          });
        if (firstVisible) setActive(firstVisible.id);
      }

      const st = window.scrollY || 0;
      if (st > lastScroll.current && st > 150) setHidden(true);
      else setHidden(false);
      lastScroll.current = st;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  const renderThemeToggle = () => {
    if (!mounted) return <Sun size={18} className="invisible" />;
    return (
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 5, opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    );
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 h-[3px] z-[999] origin-left bg-gradient-to-r from-primary to-indigo-400"
        style={{ scaleX }}
      />

      <AnimatePresence>
        {!hidden && (
          <motion.nav
            ref={navRef}
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="sticky top-4 z-[50] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-black/60 border border-border/80 transition-shadow duration-300 shadow-md">
              <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
                {/* NAV LINKS (desktop) */}
                <div className="hidden md:flex md:items-center md:gap-8">
                  <ul role="list" className="flex items-center gap-1">
                    {NAV_LINKS.map((link) => (
                      <li key={link.id}>
                        <button
                          onClick={() => scrollTo(link.id)}
                          className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                            active === link.id
                              ? "text-primary bg-primary/10 dark:bg-primary/20"
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                          }`}
                        >
                          {link.label}
                          <span
                            aria-hidden
                            className={`absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full transition-all duration-300 ${
                              active === link.id ? "bg-primary" : "bg-transparent"
                            }`}
                          />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT ACTIONS */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="hidden sm:block">
                    <Button asChild className="px-3 py-2 text-sm">
                      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Resume
                      </a>
                    </Button>
                  </div>

                  {/* GitHub Menu */}
                  <GitHubMenu />

                  {/* Theme toggle */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label="Toggle theme"
                  >
                    {renderThemeToggle()}
                  </Button>

                  {/* Mobile menu */}
                  <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                      <SheetTrigger asChild>
                        <Button aria-label="Open menu" variant="outline" size="icon">
                          <Menu size={18} />
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="right" className="w-full max-w-xs p-6">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Avatar className="w-9 h-9 border-2 border-primary/50 dark:border-primary/30 shrink-0">
                                <Image
                                  alt="avatar"
                                  src="/avatar.png"
                                  width={36}
                                  height={36}
                                  className="object-cover"
                                />
                              </Avatar>
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

                          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
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
                            <Button asChild className="w-full" variant="secondary">
                              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                Download Resume <ExternalLink size={16} className="ml-2" />
                              </a>
                            </Button>

                            <div className="flex items-center justify-between">
                              <a
                                href="mailto:madhavsemwalofficial@gmail.com"
                                className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
                              >
                                Email me
                              </a>
                              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="shrink-0">
                                {renderThemeToggle()}
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
