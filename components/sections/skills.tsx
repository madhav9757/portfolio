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
        className="flex flex-col gap-2 px-2 shrink-0 mb-4"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 relative overflow-hidden">
            <Cpu className="text-primary relative z-10" size={24} />
          </div>
          <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-black text-foreground/90 tracking-tighter uppercase leading-none">
            Tech <span className="text-primary text-opacity-80">Core</span>
          </h3>
        </div>
        <p className="text-sm text-foreground/50 font-medium pl-1 tracking-tight">
          Comprehensive overview of tools, frameworks, and infrastructure
        </p>
      </motion.div>

      {/* NO-SCROLL BENTO GRID */}
      {/* min-h-0 allows the flex child to shrink properly without overflowing */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {Object.entries(resumeData.competencies).map(([category, skills]) => {
          const theme = categoryTheme[category] || {
            color: "text-foreground",
            border: "border-foreground/20",
            glow: "bg-foreground/20",
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
              <Card className={`h-full bg-background/40 backdrop-blur-xl border ${theme.border} text-foreground hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden flex flex-col`}>
                <div
                  className={`absolute inset-0 ${theme.bg} opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />
                <div
                  className={`absolute -top-6 -right-6 opacity-[0.03] group-hover:opacity-10 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none`}
                >
                  <Icon size={140} />
                </div>

                <CardHeader className="p-5 pb-2 flex flex-row items-center gap-3 space-y-0 shrink-0 relative z-10">
                  <div
                    className={`p-2 rounded-xl bg-foreground/5 border border-foreground/10 group-hover:bg-foreground/10 transition-colors text-foreground shadow-sm`}
                  >
                    <Icon size={18} />
                  </div>
                  <CardTitle
                    className={`text-lg font-black uppercase tracking-tight text-foreground/90`}
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
                          className={`flex items-center gap-2 bg-background/50 hover:bg-foreground/10 text-[12px] text-foreground/80 group-hover:text-foreground border border-foreground/10 group-hover:border-foreground/30 transition-all duration-300 px-3 py-1.5 rounded-lg font-semibold tracking-tight whitespace-nowrap shadow-sm`}
                        >
                          <span
                            className={`transition-colors duration-300 text-foreground/50 group-hover:text-foreground scale-110`}
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
