"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Briefcase,
  Rocket,
  ExternalLink,
  ChevronRight,
  Zap,
  Terminal,
  Activity,
  Monitor,
  Shield,
  MessageSquare,
  Share2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { resumeData } from "@/lib/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
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
};

// Unique themes for projects
const projectThemes: Record<
  string,
  { color: string; border: string; glow: string; icon: any; span: string }
> = {
  Syncra: {
    color: "text-[#00FFFF]",
    border: "border-[#00FFFF]",
    glow: "bg-[#00FFFF]/20",
    icon: Monitor,
    span: "md:col-span-6 md:row-span-1",
  },
  AuthSphere: {
    color: "text-[#FF0000]",
    border: "border-[#FF0000]",
    glow: "bg-[#FF0000]/20",
    icon: Shield,
    span: "md:col-span-6 md:row-span-1",
  },
  NexChat: {
    color: "text-[#00FF00]",
    border: "border-[#00FF00]",
    glow: "bg-[#00FF00]/20",
    icon: MessageSquare,
    span: "md:col-span-5 md:row-span-1",
  },
  Discussly: {
    color: "text-[#FFFF00]",
    border: "border-[#FFFF00]",
    glow: "bg-[#FFFF00]/20",
    icon: Share2,
    span: "md:col-span-7 md:row-span-1",
  },
};

export default function WorkSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      // Forced boundaries to 90vw and 90vh, overflow hidden to kill page scrolling
      className="w-[90vw] h-[90vh] mx-auto flex flex-col gap-4 font-sans overflow-hidden"
    >
      {/* MAIN LAYOUT GRID (Side by side on Desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 min-h-0">
        {/* EXPERIENCE DATA STREAM (4 COLS) */}
        <div className="lg:col-span-4 flex flex-col min-h-0 bg-transparent border border-white/20 rounded-2xl p-5 relative overflow-hidden group/exp hover:border-[#FF00FF] transition-colors duration-500">
          <div
            className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF00FF] to-transparent animate-scan"
            style={{ animation: "scan 3s linear infinite" }}
          />

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-4 relative z-10 shrink-0"
          >
            <div className="p-2 rounded-lg bg-transparent border-2 border-[#FF00FF]">
              <Briefcase className="text-[#FF00FF] animate-pulse" size={16} />
            </div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#FF00FF]">
              Experience_Log
            </h3>
          </motion.div>

          {/* Added internal scrolling so large lists don't break the layout */}
          <div className="space-y-6 overflow-y-auto custom-scrollbar flex-1 relative z-10 pr-2">
            {resumeData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative pl-6 group"
              >
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-transparent border-2 border-[#FF00FF] group-hover:bg-[#FF00FF] transition-all duration-300 z-10" />
                <div className="absolute left-[3px] top-4 h-full w-[2px] bg-[#FF00FF]/30" />

                <div className="text-[10px] font-mono text-[#00FFFF] mb-1 font-bold tracking-widest">
                  {exp.period}
                </div>
                {/* Clean, uppercase, non-italic typography */}
                <h4 className="text-sm font-black text-white group-hover:text-[#FF00FF] transition-colors leading-tight uppercase tracking-wider">
                  {exp.role}
                </h4>
                <p className="text-[11px] text-white mt-2 line-clamp-3 font-medium tracking-wide">
                  {exp.bullets[0]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PROJECTS BENTO GRID (8 COLS) */}
        <div className="lg:col-span-8 flex flex-col min-h-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full min-h-0">
            {resumeData.projects.map((project, idx) => {
              const theme = projectThemes[project.title] || {
                color: "text-white",
                border: "border-white",
                glow: "bg-white/20",
                icon: Rocket,
                span: "md:col-span-6",
              };
              const Icon = theme.icon;

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`${theme.span} min-h-0 h-full`}
                >
                  <Card
                    className={`h-full bg-transparent border-white/20 hover:${theme.border} transition-all duration-500 group relative overflow-hidden flex flex-col`}
                  >
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 ${theme.glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                    />
                    <div
                      className={`absolute -bottom-4 -left-4 opacity-10 group-hover:opacity-30 transition-all transform group-hover:scale-150 rotate-12 ${theme.color}`}
                    >
                      <Icon size={120} />
                    </div>

                    <CardHeader className="p-4 flex flex-row items-center justify-between relative z-10 space-y-0 shrink-0">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-1.5 rounded-md bg-transparent border border-white/20 group-hover:${theme.border} ${theme.color} transition-colors`}
                        >
                          <Icon size={14} />
                        </div>
                        <CardTitle
                          className={`text-sm font-black uppercase tracking-widest ${theme.color}`}
                        >
                          {project.title}
                        </CardTitle>
                      </div>
                      <a
                        href="#"
                        className={`p-1.5 rounded-md bg-transparent text-white border border-white/20 hover:${theme.border} hover:${theme.color} transition-colors`}
                      >
                        <ExternalLink size={12} />
                      </a>
                    </CardHeader>

                    <CardContent className="p-4 pt-0 flex-1 flex flex-col justify-between relative z-10 overflow-hidden">
                      <div>
                        <p
                          className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 ${theme.color}`}
                        >
                          {project.subtitle}
                        </p>
                        <p className="text-[11px] text-white font-medium tracking-wide leading-relaxed line-clamp-2">
                          {project.bullets[0]}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.tech.map((t, i) => (
                          <Badge
                            key={i}
                            className={`bg-transparent border-white/20 group-hover:${theme.border} text-[9px] font-bold text-white px-2 py-0.5 relative overflow-hidden rounded-sm transition-colors uppercase tracking-wider`}
                          >
                            <span
                              className={`relative z-10 group-hover:${theme.color}`}
                            >
                              {t}
                            </span>
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
