"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { User, Rocket, Cpu, Share2, Download, Home } from "lucide-react";

import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: Home,
    color: "text-foreground",
  },
  {
    id: "identity",
    label: "Identity",
    href: "/identity",
    icon: User,
    color: "text-brand-indigo",
  },
  {
    id: "work",
    label: "Work",
    href: "/work",
    icon: Rocket,
    color: "text-brand-purple",
  },
  {
    id: "skills",
    label: "Skills",
    href: "/skills",
    icon: Cpu,
    color: "text-brand-cyan",
  },
  {
    id: "social",
    label: "Social",
    href: "/social",
    icon: Share2,
    color: "text-brand-emerald",
  },
] as const;

interface NavigationDockProps {
  hidden?: boolean;
}

export default function NavigationDock({
  hidden = false,
}: NavigationDockProps) {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: hidden ? 100 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <Dock
        iconSize={40}
        iconMagnification={56}
        iconDistance={120}
        direction="bottom"
        className="h-16 px-4 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-lg border border-neutral-200 dark:border-white/10 shadow-xl dark:shadow-2xl flex items-center gap-2"
      >
        {/* --- Navigation Icons --- */}
        {navItems.map(({ id, label, href, icon: Icon, color }) => {
          const isActive = pathname === href;
          return (
            <DockIcon
              key={id}
              className="relative group rounded-full transition-all duration-300"
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Floating Tooltip */}
              <AnimatePresence>
                {hovered === id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 2, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium rounded-md shadow-lg pointer-events-none whitespace-nowrap"
                  >
                    {label}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href={href}
                className="w-full h-full flex items-center justify-center relative"
                aria-label={label}
              >
                <Icon
                  className={`size-5 transition-all duration-300 ${
                    isActive
                      ? color
                      : "text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white"
                  }`}
                />

                {/* Active Dot Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="active-dot"
                    className={`absolute -bottom-2 w-1 h-1 rounded-full ${color.replace("text-", "bg-")}`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            </DockIcon>
          );
        })}

        {/* Separator */}
        <Separator
          orientation="vertical"
          className="h-8 mx-2 bg-neutral-300 dark:bg-neutral-700/50"
        />

        {/* Resume Download */}
        <DockIcon
          className="relative group rounded-full"
          onMouseEnter={() => setHovered("download")}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence>
            {hovered === "download" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 2, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium rounded-md shadow-lg pointer-events-none whitespace-nowrap"
              >
                Download Resume
              </motion.div>
            )}
          </AnimatePresence>
          <a
            href="/Madhav Semwal Resume.pdf"
            download
            className="w-full h-full flex items-center justify-center"
            aria-label="Download Resume"
          >
            <Download className="size-5 text-neutral-500 dark:text-neutral-400 group-hover:text-brand-amber transition-colors duration-300" />
          </a>
        </DockIcon>

        {/* Theme Toggle */}
        <DockIcon
          className="relative group rounded-full"
          onMouseEnter={() => setHovered("theme")}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence>
            {hovered === "theme" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 2, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium rounded-md shadow-lg pointer-events-none whitespace-nowrap"
              >
                Toggle Theme
              </motion.div>
            )}
          </AnimatePresence>
          <div className="w-full h-full flex items-center justify-center">
            <ModeToggle />
          </div>
        </DockIcon>
      </Dock>
    </motion.div>
  );
}
