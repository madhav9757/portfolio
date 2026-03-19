"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Code2,
  Monitor,
  Database,
  Cloud,
  ShieldCheck,
  Sparkles,
  Layers,
  Zap,
  Terminal,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/lib/data";
import { getTechIcon } from "@/lib/tech-icons";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
} as const;

interface CategoryStyle {
  color: string;
  border: string;
  glow: string;
  bg: string;
  icon: any;
  span: string;
}

// Fixed theme mapping for semantic use
const categoryTheme: Record<string, CategoryStyle> = {
  Languages: {
    color: "text-foreground",
    border: "border-brand-purple/40",
    glow: "bg-brand-purple/10",
    bg: "bg-linear-to-br from-brand-purple/20 to-transparent",
    icon: Code2,
    span: "md:col-span-4 md:row-span-1",
  },
  Frontend: {
    color: "text-foreground",
    border: "border-brand-cyan/40",
    glow: "bg-brand-cyan/10",
    bg: "bg-linear-to-br from-brand-cyan/20 to-transparent",
    icon: Monitor,
    span: "md:col-span-8 md:row-span-1",
  },
  Databases: {
    color: "text-foreground",
    border: "border-brand-amber/40",
    glow: "bg-brand-amber/10",
    bg: "bg-linear-to-br from-brand-amber/20 to-transparent",
    icon: Database,
    span: "md:col-span-3 md:row-span-1",
  },
  "Cloud/DevOps": {
    color: "text-foreground",
    border: "border-brand-emerald/40",
    glow: "bg-brand-emerald/10",
    bg: "bg-linear-to-br from-brand-emerald/20 to-transparent",
    icon: Cloud,
    span: "md:col-span-4 md:row-span-1",
  },
  "Backend & Security": {
    color: "text-foreground",
    border: "border-brand-indigo/40",
    glow: "bg-brand-indigo/10",
    bg: "bg-linear-to-br from-brand-indigo/20 to-transparent",
    icon: ShieldCheck,
    span: "md:col-span-5 md:row-span-1",
  },
};

export default function SkillsSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4 font-sans"
    >
      {/* COMPACT HEADER */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-between px-2 shrink-0"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-transparent border-2 border-primary relative overflow-hidden shadow-[0_0_15px_rgba(var(--primary),0.3)]">
            <Cpu className="text-primary relative z-10" size={32} />
          </div>
          <div>
            <h3 className="text-4xl font-black text-foreground tracking-tighter uppercase flex items-center gap-3">
              Technological <span className="text-primary">Core</span>
            </h3>
          </div>
        </div>
      </motion.div>

      {/* NO-SCROLL BENTO GRID */}
      {/* min-h-0 allows the flex child to shrink properly without overflowing */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {Object.entries(resumeData.competencies).map(([category, skills]) => {
          const theme = categoryTheme[category] || {
            color: "text-white",
            border: "border-white",
            glow: "bg-white/20",
            icon: Layers,
            span: "md:col-span-4",
          };
          const Icon = theme.icon;

          return (
            <motion.div
              key={category}
              variants={itemVariants}
              className={`${theme.span} h-full min-h-0`}
            >
              <Card className={`h-full ${theme.bg} border-2 ${theme.border} text-foreground group-hover:border-foreground/30 transition-all duration-300 group relative overflow-hidden flex flex-col shadow-none`}>
                <div
                  className={`absolute top-0 right-0 w-1/2 h-1/2 ${theme.glow} blur-xl opacity-20 group-hover:opacity-50 transition-opacity`}
                />
                <div
                  className={`absolute -top-2 -right-2 opacity-5 transform group-hover:scale-125 transition-transform text-foreground blur-[2px]`}
                >
                  <Icon size={120} />
                </div>

                <CardHeader className="p-5 pb-2 flex flex-row items-center gap-4 space-y-0 shrink-0 relative z-10">
                  <div
                    className={`p-2 rounded-xl bg-transparent border-2 border-foreground/10 group-hover:border-foreground/30 text-foreground shadow-sm`}
                  >
                    <Icon size={20} />
                  </div>
                  <CardTitle
                    className={`text-xl font-black uppercase tracking-tighter text-foreground`}
                  >
                    {category}
                  </CardTitle>
                </CardHeader>

                {/* Added overflow-y-auto so if one category has a massive list of skills, it scrolls internally rather than breaking the page layout */}
                <CardContent className="p-5 pt-2 flex-1 overflow-y-auto custom-scrollbar relative z-10">
                  <div className="flex flex-wrap gap-2.5 h-full content-start">
                    {skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.92 }}
                      >
                        <Badge
                          className={`flex items-center gap-2 bg-foreground/5 hover:bg-foreground/10 text-sm text-foreground/70 group-hover:text-foreground border-2 border-transparent group-hover:border-foreground/20 transition-all px-4 py-2 rounded-xl font-bold tracking-tight whitespace-nowrap shadow-sm`}
                        >
                          <span
                            className={`transition-colors duration-300 text-foreground/40 group-hover:text-foreground scale-125`}
                          >
                            {getTechIcon(skill)}
                          </span>
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
