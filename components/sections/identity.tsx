"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  PhoneCall,
  Github,
  Linkedin,
  GraduationCap,
  ArrowRight,
  MapPin,
  Activity,
  Cpu,
  Rocket,
  Server,
  Sparkles,
  Terminal,
  Scan,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
} as const;

export default function IdentitySection() {
  const { personalInfo } = resumeData;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full w-full flex flex-col gap-6 font-sans overflow-hidden p-1"
    >
      {/* 1. TOP ROW: Dossier Header & Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 shrink-0">
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 relative group"
        >
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-foreground rounded-full group-hover:h-full transition-all duration-500" />
          <div className="flex flex-col gap-1">
            <h3 className="text-5xl font-black flex items-center gap-5 transition-all group-hover:translate-x-1">
              <span className="text-foreground tracking-tighter uppercase">
                Engineering Dossier
              </span>
              <div className="h-[2px] flex-1 bg-foreground/10 hidden md:block" />
            </h3>
            <p className="text-[18px] text-foreground/80 leading-relaxed font-bold tracking-tight max-w-4xl mt-2">
              {personalInfo.focus}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 bg-foreground/3 backdrop-blur-md border border-foreground/10 rounded-4xl p-6 flex flex-col justify-center relative overflow-hidden group hover:border-foreground/20 hover:bg-foreground/5 transition-all duration-500"
        >
          <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity rotate-12 group-hover:rotate-0 duration-700">
            <Activity size={60} />
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Zap size={14} className="text-foreground/40" />
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">
              Dev_Philosophy
            </h4>
          </div>
          <p className="text-[15px] text-foreground/90 font-bold leading-relaxed tracking-tight relative z-10">
            {personalInfo.developmentPhilosophy}
          </p>
          <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-foreground/20 to-transparent" />
        </motion.div>
      </div>

      {/* 2. MAIN ASYMMETRICAL BENTO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0">
        {/* LEFT COLUMN: CONTACT (3/12) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-3 flex flex-col gap-6"
        >
          <Card className="flex-1 bg-transparent border-foreground/10 text-foreground hover:border-foreground/30 group transition-all duration-500 flex flex-col rounded-4xl overflow-hidden relative shadow-none">
            <div className="absolute inset-0 bg-linear-to-b from-foreground/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="p-6 pb-2 relative z-10">
              <CardTitle className="text-sm font-black text-foreground/40 flex items-center gap-3 uppercase tracking-[0.2em]">
                <Mail size={14} />
                Network_Nodes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-4 flex-1 overflow-y-auto custom-scrollbar relative z-10">
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: Mail,
                    label: "Direct Email",
                    value: personalInfo.email,
                    href: `mailto:${personalInfo.email}`,
                  },
                  {
                    icon: PhoneCall,
                    label: "Secure Line",
                    value: personalInfo.phone,
                    href: `tel:${personalInfo.phone}`,
                  },
                  {
                    icon: Github,
                    label: "Source Control",
                    value: "github.com/madhav9757",
                    href: "https://github.com/madhav9757",
                  },
                  {
                    icon: Linkedin,
                    label: "Professional Net",
                    value: "linkedin.com/in/madhav",
                    href: "https://linkedin.com/in/madhav-semwal-b40272377",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col p-4 rounded-2xl bg-foreground/3 hover:bg-foreground/5 border border-transparent hover:border-foreground/10 transition-all group/item"
                  >
                    <span className="text-[9px] text-foreground/30 uppercase tracking-widest font-black mb-1 flex items-center gap-2">
                      <item.icon
                        size={10}
                        className="group-hover/item:text-foreground transition-colors"
                      />
                      {item.label}
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-bold tracking-tight text-xs truncate mr-2">
                        {item.value}
                      </span>
                      <ArrowRight
                        size={12}
                        className="text-foreground/20 group-hover/item:text-foreground group-hover/item:translate-x-1 transition-all shrink-0"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ACADEMIC BADGE (Small) */}
          <Card className="bg-transparent border-foreground/10 hover:border-foreground/30 rounded-3xl p-5 transition-all duration-500 overflow-hidden relative group">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground group-hover:bg-foreground group-hover:text-background transition-all">
                <GraduationCap size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase tracking-widest text-foreground/40 leading-none mb-1">
                  Academic_Record
                </span>
                <span className="text-xs font-bold text-foreground">
                  B.E. Computer Engineering
                </span>
                <span className="text-[10px] text-foreground/50 font-medium">
                  SP Pune University • 2027
                </span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CENTER COLUMN: STRATEGIC FOCUS & INTERESTS (6/12) */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <motion.div variants={itemVariants} className="flex-1">
            <Card className="h-full bg-transparent border-foreground/10 text-foreground hover:border-foreground/30 group transition-all duration-500 flex flex-col rounded-[2.5rem] overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 z-0 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 pointer-events-none rotate-12 group-hover:rotate-0 scale-150">
                <Cpu size={300} />
              </div>
              <CardHeader className="p-8 pb-4 relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-black text-foreground flex items-center gap-4 uppercase tracking-tighter">
                      <div className="p-3 rounded-2xl bg-foreground/5 dark:bg-foreground/10 border border-foreground/10 text-foreground group-hover:border-foreground/30 transition-all">
                        <Rocket size={24} />
                      </div>
                      Strategic_Focus
                    </CardTitle>
                    <CardDescription className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30 mt-3 border-l-2 border-foreground/20 pl-3">
                      High-Performance Core Competencies
                    </CardDescription>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                    <span className="text-[8px] font-black uppercase tracking-widest opacity-40 italic-none">
                      Core_v2.0
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-4 flex-1 overflow-y-auto custom-scrollbar relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {personalInfo.professionalFocus.map((focus, i) => (
                    <div
                      key={i}
                      className="flex gap-4 group/focus transition-all p-4 rounded-2xl hover:bg-foreground/3 border border-transparent hover:border-foreground/5"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-1.5 h-6 bg-foreground/10 group-hover/focus:bg-foreground group-hover/focus:h-8 transition-all duration-500 rounded-full" />
                      </div>
                      <p className="text-[14px] text-foreground/70 font-bold leading-snug tracking-tight group-hover/focus:text-foreground transition-all">
                        {focus}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* SYSTEM INTERESTS (Horizontal Tag Cloud) */}
          <motion.div variants={itemVariants}>
            <Card className="bg-transparent border-foreground/10 hover:border-foreground/30 rounded-3xl p-6 transition-all duration-500 overflow-hidden relative group">
              <div className="flex items-center gap-4 mb-4">
                <Server size={18} className="text-foreground/40" />
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-foreground/40">
                  Engineering_Interests
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.engineeringInterests.map((interest, i) => (
                  <Badge
                    key={i}
                    className="bg-foreground/3 hover:bg-foreground/10 border border-foreground/10 text-foreground/60 hover:text-foreground font-black uppercase tracking-tighter text-[10px] px-3 py-1.5 transition-all cursor-default shadow-none"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: RESEARCH & STATUS (3/12) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-3 flex flex-col gap-6"
        >
          <Card className="flex-[0.6] bg-transparent border-foreground/10 text-foreground hover:border-foreground/30 group transition-all duration-500 flex flex-col rounded-4xl overflow-hidden relative shadow-none">
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-sm font-black text-foreground/40 flex items-center gap-3 uppercase tracking-[0.2em]">
                <Sparkles size={14} />
                Research_Nodes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-4 flex-1 overflow-y-auto custom-scrollbar">
              <div className="space-y-4">
                {personalInfo.learningFocus.map((focus, i) => (
                  <div key={i} className="flex items-start gap-4 group/nexus">
                    <div className="mt-1.5 p-1 rounded-full group-hover/nexus:bg-foreground/10 transition-colors">
                      <Terminal
                        size={12}
                        className="text-foreground/20 group-hover/nexus:text-foreground transition-all"
                      />
                    </div>
                    <p className="text-[12px] font-bold tracking-tight text-foreground/60 group-hover/nexus:text-foreground transition-all leading-tight">
                      {focus}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
            <div className="mt-auto p-4 border-t border-foreground/5 bg-foreground/2">
              <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-[0.2em] text-foreground/30">
                <span>Active_Pipelining</span>
                <span className="flex gap-1">
                  <span className="w-1 h-1 bg-foreground/20 rounded-full animate-pulse" />
                  <span className="w-1 h-1 bg-foreground/40 rounded-full animate-pulse delay-150" />
                  <span className="w-1 h-1 bg-foreground/60 rounded-full animate-pulse delay-300" />
                </span>
              </div>
            </div>
          </Card>

          {/* AVAILABILITY STATUS (Modern Sticker) */}
          <div className="flex-1 min-h-[140px] bg-foreground text-background p-8 rounded-4xl flex flex-col justify-between group cursor-help shadow-2xl overflow-hidden relative group">
            {/* Animated background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-background/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-background/5 rounded-full -ml-12 -mb-12 group-hover:translate-x-4 transition-transform duration-700" />

            <div className="flex items-center justify-between relative z-10">
              <ShieldCheck
                size={28}
                className="opacity-50 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/10 border border-background/20">
                <div className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest text-background/80">
                  Active
                </span>
              </div>
            </div>

            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-2 block">
                System_Status
              </span>
              <p className="text-[14px] font-black uppercase leading-tight tracking-tighter">
                {personalInfo.availability}
              </p>
            </div>

            <div className="flex items-center justify-end relative z-10 mt-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Contact_Ops
                </span>
                <ArrowRight size={20} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
