"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, Code2, Monitor, Database, Cloud, 
  ShieldCheck, Sparkles, Layers, Zap, Terminal
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/lib/data";
import { getTechIcon } from "@/lib/tech-icons";

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
      damping: 20
    },
  },
} as const;

interface CategoryStyle {
  color: string;
  border: string;
  glow: string;
  icon: any;
  span: string;
}

const categoryTheme: Record<string, CategoryStyle> = {
  "Languages": { 
    color: "text-[#FF00FF]", // Neon Magenta
    border: "border-[#FF00FF]",
    glow: "bg-[#FF00FF]/20",
    icon: Code2,
    span: "md:col-span-4"
  },
  "Frontend": { 
    color: "text-[#00FFFF]", // Neon Cyan
    border: "border-[#00FFFF]",
    glow: "bg-[#00FFFF]/20",
    icon: Monitor,
    span: "md:col-span-8"
  },
  "Databases": { 
    color: "text-[#FFFF00]", // Neon Yellow
    border: "border-[#FFFF00]",
    glow: "bg-[#FFFF00]/20",
    icon: Database,
    span: "md:col-span-4" 
  },
  "Cloud/DevOps": { 
    color: "text-[#00FF00]", // Neon Lime
    border: "border-[#00FF00]",
    glow: "bg-[#00FF00]/20",
    icon: Cloud,
    span: "md:col-span-4"
  },
  "Backend & Security": { 
    color: "text-[#FF0000]", // Neon Red
    border: "border-[#FF0000]",
    glow: "bg-[#FF0000]/20",
    icon: ShieldCheck,
    span: "md:col-span-4"
  }
};

export default function SkillsSection() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      // Enforces the no-scroll layout
      className="h-full flex flex-col gap-4 font-sans overflow-hidden"
    >
      {/* COMPACT HEADER */}
      <motion.div variants={itemVariants} className="flex items-center justify-between px-2 shrink-0">
        <div className="flex items-center gap-4">
          {/* Changed to transparent */}
          <div className="p-2.5 rounded-2xl bg-transparent border-2 border-[#00FFFF] relative overflow-hidden">
            <Cpu className="text-[#00FFFF] relative z-10" size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-[#FFFF00] tracking-tight uppercase flex items-center gap-2">
               Technological <span className="text-[#FF00FF]">Core</span>
            </h3>
            <p className="text-[10px] text-[#00FF00] font-bold tracking-widest uppercase">Full-Stack Capability Matrix</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[10px] font-mono font-bold text-[#00FFFF] bg-transparent px-3 py-1.5 rounded-full border border-[#00FFFF]">
          <Zap size={10} className="text-[#FFFF00]" />
          SYSTEM_VERSION: 1.0.42
        </div>
      </motion.div>

      {/* NO-SCROLL BENTO GRID */}
      {/* min-h-0 allows the flex child to shrink properly without overflowing */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 min-h-0">
        {Object.entries(resumeData.competencies).map(([category, skills]) => {
          const theme = categoryTheme[category] || { color: "text-white", border: "border-white", glow: "bg-white/20", icon: Layers, span: "md:col-span-4" };
          const Icon = theme.icon;
          
          return (
            <motion.div 
              key={category} 
              variants={itemVariants} 
              className={`${theme.span} h-full min-h-0`}
            >
              {/* Changed bg-black to bg-transparent */}
              <Card className="h-full bg-transparent border-white/20 text-white hover:border-white transition-all duration-300 group relative overflow-hidden flex flex-col">
                <div className={`absolute top-0 right-0 w-1/2 h-1/2 ${theme.glow} blur-xl opacity-20 group-hover:opacity-50 transition-opacity`} />
                <div className={`absolute -top-1 -right-1 opacity-20 transform group-hover:scale-110 transition-transform ${theme.color}`}>
                  <Icon size={48} />
                </div>
                
                <CardHeader className="p-3 pb-1 flex flex-row items-center gap-2.5 space-y-0 shrink-0">
                  <div className={`p-1.5 rounded-lg bg-transparent border ${theme.border} ${theme.color}`}>
                    <Icon size={14} />
                  </div>
                  <CardTitle className={`text-[12px] font-black uppercase tracking-wider ${theme.color}`}>
                    {category}
                  </CardTitle>
                </CardHeader>
                
                {/* Added overflow-y-auto so if one category has a massive list of skills, it scrolls internally rather than breaking the page layout */}
                <CardContent className="p-3 pt-2 flex-1 overflow-y-auto custom-scrollbar">
                  <div className="flex flex-wrap gap-1.5 h-full content-start">
                    {skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Badges are now transparent with a visible border */}
                        <Badge className={`flex items-center gap-1.5 bg-transparent hover:bg-white/10 text-[10px] text-white border border-white/20 group-hover:${theme.border} transition-all px-2.5 py-1 rounded-md font-semibold tracking-wide whitespace-nowrap`}>
                          <span className={`transition-colors duration-300 ${theme.color}`}>
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