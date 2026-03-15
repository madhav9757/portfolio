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
    color: "text-foreground",
    border: "border-brand-cyan/40",
    glow: "bg-brand-cyan/10",
    icon: Monitor,
    span: "md:col-span-6 md:row-span-1",
  },
  AuthSphere: {
    color: "text-foreground",
    border: "border-brand-indigo/40",
    glow: "bg-brand-indigo/10",
    icon: Shield,
    span: "md:col-span-6 md:row-span-1",
  },
  NexChat: {
    color: "text-foreground",
    border: "border-brand-emerald/40",
    glow: "bg-brand-emerald/10",
    icon: MessageSquare,
    span: "md:col-span-5 md:row-span-1",
  },
  Discussly: {
    color: "text-foreground",
    border: "border-brand-amber/40",
    glow: "bg-brand-amber/10",
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
      {/* INTEGRATED BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1 min-h-0 overflow-y-auto lg:overflow-visible custom-scrollbar">
        
        {/* EXPERIENCE BLOCK - Integrated into Bento */}
        <motion.div 
          variants={itemVariants} 
          className="col-span-12 lg:col-span-7 flex flex-col min-h-[220px] bg-transparent border-2 border-foreground/10 rounded-3xl p-6 relative overflow-hidden group/exp hover:border-foreground/30 transition-all duration-500 shadow-sm"
        >
          <div
            className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-foreground/20 to-transparent animate-scan"
            style={{ animation: "scan 3s linear infinite" }}
          />

          <div className="flex items-center gap-4 mb-6 relative z-10 shrink-0">
            <div className="p-2.5 rounded-xl bg-transparent border-2 border-foreground/20">
              <Briefcase className="text-foreground animate-pulse" size={20} />
            </div>
            <h3 className="text-xl font-black uppercase tracking-[0.4em] text-foreground">
              Experience_Log
            </h3>
          </div>

          <div className="space-y-6 relative z-10 pr-2">
            {resumeData.experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-6 group/item"
              >
                <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-background border-[3px] border-foreground/40 group-hover/item:border-foreground transition-all duration-300 z-10" />
                <div className="absolute left-[4px] top-5 h-full w-[1.5px] bg-foreground/10" />

                <div className="text-[10px] font-mono text-foreground/50 mb-1.5 font-black tracking-widest uppercase">
                  {exp.period}
                </div>
                <h4 className="text-lg font-black text-foreground leading-tight uppercase tracking-tighter">
                  {exp.role}
                </h4>
                <div className="mt-3 space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <p key={i} className="text-[13px] text-foreground/60 font-medium tracking-tight leading-snug">
                      {bullet}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PROJECTS MAPPED INTO BENTO */}
        {resumeData.projects.map((project, idx) => {
          const theme = projectThemes[project.title] || {
            color: "text-foreground",
            border: "border-foreground/10",
            glow: "bg-foreground/5",
            icon: Rocket,
            span: "md:col-span-6",
          };
          
          // Custom spans for a better layout
          let gridSpan = theme.span;
          if (project.title === "Syncra") gridSpan = "col-span-12 lg:col-span-5";
          if (project.title === "AuthSphere") gridSpan = "col-span-12 lg:col-span-4";
          if (project.title === "NexChat") gridSpan = "col-span-12 lg:col-span-4";
          if (project.title === "Discussly") gridSpan = "col-span-12 lg:col-span-4";
          if (project.title === "Generative AI") gridSpan = "col-span-12";

          const Icon = theme.icon;

          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`${gridSpan} min-h-[220px]`}
            >
              <Card
                className={`h-full bg-transparent border-2 border-foreground/10 hover:border-foreground/30 transition-all duration-500 group relative overflow-hidden flex flex-col rounded-3xl shadow-sm`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${theme.glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
                <div
                  className={`absolute -bottom-4 -left-4 opacity-5 group-hover:opacity-10 transition-all transform group-hover:scale-150 rotate-12 text-foreground`}
                >
                  <Icon size={120} />
                </div>

                <CardHeader className="p-6 flex flex-row items-center justify-between relative z-10 space-y-0 shrink-0">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg bg-transparent border border-foreground/10 group-hover:border-foreground/30 text-foreground transition-all`}
                    >
                      <Icon size={16} />
                    </div>
                    <CardTitle
                      className={`text-lg font-black uppercase tracking-tighter text-foreground`}
                    >
                      {project.title}
                    </CardTitle>
                  </div>
                  <a
                    href="#"
                    className={`p-2 rounded-lg bg-transparent text-foreground/40 border border-foreground/10 hover:text-foreground hover:border-foreground transition-all`}
                  >
                    <ExternalLink size={14} />
                  </a>
                </CardHeader>

                <CardContent className="p-6 pt-0 flex-1 flex flex-col justify-between relative z-10 overflow-hidden">
                  <div>
                    <p
                      className={`text-[10px] font-black tracking-[0.2em] uppercase mb-2 text-foreground/40`}
                    >
                      {project.subtitle}
                    </p>
                    <p className="text-[13px] text-foreground/70 font-medium tracking-tight leading-relaxed line-clamp-2">
                      {project.bullets[0]}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((t, i) => (
                      <Badge
                        key={i}
                        className={`bg-foreground/5 border border-foreground/10 group-hover:border-foreground/30 text-[10px] font-black text-foreground/70 group-hover:text-foreground px-2 py-0.5 relative overflow-hidden rounded transition-all uppercase tracking-tighter`}
                      >
                        <span className="relative z-10">{t}</span>
                      </Badge>
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
