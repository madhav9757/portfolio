"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 glass-panel border-none">
        <div className="w-5 h-5" />
      </Button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative rounded-full w-10 h-10 glass-panel hover:scale-110 active:scale-95 transition-all group overflow-hidden border-none"
        title="Toggle theme"
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          <Sun className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-500 ${theme === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'} text-amber-500`} />
          <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-500 ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'} text-indigo-500 dark:text-indigo-400`} />
        </div>
        <span className="sr-only">Toggle theme</span>
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-foreground/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </Button>
    </motion.div>
  );
}
