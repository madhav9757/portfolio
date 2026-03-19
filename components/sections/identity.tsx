"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  PhoneCall,
  Github,
  Linkedin,
  GraduationCap,
  ArrowRight,
  Activity,
  Cpu,
  Rocket,
  Server,
  Sparkles,
  Terminal,
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

/* ------------------------------------------------ */
/* Animation Variants */
/* ------------------------------------------------ */

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
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
} as const;

/* ------------------------------------------------ */
/* Component */
/* ------------------------------------------------ */

export default function IdentitySection() {
  const { personalInfo } = resumeData;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col gap-6 font-inter p-1"
    >
      {/* ------------------------------------------------ */}
      {/* HERO HEADER */}
      {/* ------------------------------------------------ */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 shrink-0">
        {/* Dossier Title */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 relative group flex flex-col justify-center"
        >
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-foreground/80 dark:bg-white/80 rounded-full group-hover:h-full group-hover:bg-brand-indigo transition-all duration-500 ease-in-out" />

          <div className="flex flex-col gap-4 pl-2">
            <h3 className="text-5xl md:text-6xl font-space font-extrabold tracking-tight leading-[0.9] flex flex-col gap-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400 uppercase">
                Engineering
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400 uppercase flex items-center gap-5">
                Dossier
                <div className="h-[2px] flex-1 bg-gradient-to-r from-foreground/20 to-transparent hidden md:block mt-2" />
              </span>
            </h3>

            <p className="text-[17px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium max-w-2xl mt-2">
              {personalInfo.focus}
            </p>
          </div>
        </motion.div>

        {/* Philosophy Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className="lg:col-span-5 bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden group hover:border-brand-amber/40 dark:hover:shadow-[0_0_40px_-15px_rgba(251,191,36,0.3)] transition-all duration-500"
        >
          {/* Background Ambient Gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-brand-amber/10 via-transparent to-transparent opacity-50 dark:opacity-20" />

          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 dark:opacity-10 dark:group-hover:opacity-20 transition-all rotate-12 group-hover:rotate-0 duration-700">
            <Activity size={80} className="text-brand-amber" />
          </div>

          <div className="flex items-center gap-2 mb-4 relative z-10">
            <div className="p-1.5 rounded-md bg-brand-amber/10 text-brand-amber">
              <Zap size={14} />
            </div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
              Dev_Philosophy
            </h4>
          </div>

          <p className="text-[16px] text-neutral-800 dark:text-neutral-200 font-semibold leading-relaxed relative z-10">
            {personalInfo.developmentPhilosophy}
          </p>
        </motion.div>
      </div>

      {/* ------------------------------------------------ */}
      {/* MAIN GRID */}
      {/* ------------------------------------------------ */}

      <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-fr gap-6">
        {/* ------------------------------------------------ */}
        {/* CONTACT COLUMN */}
        {/* ------------------------------------------------ */}

        <motion.div
          variants={itemVariants}
          className="lg:col-span-3 flex flex-col gap-6"
        >
          {/* Contact Card */}
          <Card className="flex-1 bg-white/60 dark:bg-black/40 backdrop-blur-xl border-black/5 dark:border-white/10 hover:border-brand-emerald/40 dark:hover:border-brand-emerald/40 dark:hover:shadow-[0_0_30px_-15px_rgba(16,185,129,0.2)] transition-all duration-500 rounded-[2.5rem] overflow-hidden relative group shadow-sm dark:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/5 to-transparent pointer-events-none" />

            <CardHeader className="p-6 pb-2 relative z-10">
              <CardTitle className="text-xs font-bold text-neutral-500 dark:text-neutral-400 flex items-center gap-3 uppercase tracking-[0.2em]">
                <Mail size={14} className="text-brand-emerald" />
                Network_Nodes
              </CardTitle>
            </CardHeader>

            <CardContent className="p-6 pt-4 flex-1 overflow-y-auto relative z-10">
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
                    className="flex flex-col p-4 rounded-2xl bg-neutral-100/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 border border-transparent hover:border-black/5 dark:hover:border-white/10 transition-all hover:-translate-y-1 shadow-none hover:shadow-sm"
                  >
                    <span className="text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-widest font-bold mb-1.5 flex items-center gap-2">
                      <item.icon size={12} />
                      {item.label}
                    </span>

                    <div className="flex items-center justify-between">
                      <span className="text-neutral-900 dark:text-neutral-100 font-semibold text-xs truncate">
                        {item.value}
                      </span>
                      <ArrowRight
                        size={12}
                        className="opacity-40 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-xl border-black/5 dark:border-white/10 hover:border-brand-cyan/40 dark:hover:shadow-[0_0_30px_-15px_rgba(6,182,212,0.2)] rounded-[2rem] p-6 transition-all duration-500 shadow-sm dark:shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent pointer-events-none" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="p-3.5 rounded-2xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                <GraduationCap size={22} />
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
                  Academic_Record
                </span>
                <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                  B.E. Computer Engineering
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  SP Pune University • 2027
                </span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* ------------------------------------------------ */}
        {/* STRATEGIC FOCUS */}
        {/* ------------------------------------------------ */}

        <div className="lg:col-span-6 flex flex-col gap-6">
          <motion.div variants={itemVariants} className="flex-1">
            <Card className="h-full bg-white/60 dark:bg-black/40 backdrop-blur-xl border-black/5 dark:border-white/10 hover:border-brand-indigo/40 dark:hover:shadow-[0_0_40px_-15px_rgba(99,102,241,0.2)] rounded-[2.5rem] overflow-hidden relative group shadow-sm dark:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/5 to-transparent pointer-events-none" />

              <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.08] dark:group-hover:opacity-[0.1] transition-all duration-700 rotate-12 group-hover:scale-110">
                <Cpu size={320} />
              </div>

              <CardHeader className="p-8 pb-4 relative z-10">
                <CardTitle className="text-2xl font-space font-extrabold flex items-center gap-4 uppercase text-neutral-900 dark:text-white">
                  <div className="p-3 rounded-2xl bg-brand-indigo/10 text-brand-indigo border border-brand-indigo/20">
                    <Rocket size={24} />
                  </div>
                  Strategic_Focus
                </CardTitle>

                <CardDescription className="text-[11px] font-bold uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400 mt-4 border-l-2 border-brand-indigo/40 pl-3">
                  Core Engineering Competencies
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8 pt-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {personalInfo.professionalFocus.map((focus, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-100/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 border border-transparent hover:border-black/5 dark:hover:border-white/10 transition-all shadow-none hover:shadow-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-brand-indigo rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                      <p className="text-[14px] text-neutral-800 dark:text-neutral-200 font-semibold leading-snug">
                        {focus}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interests */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-xl border-black/5 dark:border-white/10 hover:border-brand-purple/40 dark:hover:shadow-[0_0_30px_-15px_rgba(168,85,247,0.2)] rounded-[2rem] p-6 shadow-sm dark:shadow-2xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-transparent pointer-events-none" />

              <div className="flex items-center gap-3 mb-5 relative z-10">
                <Server size={18} className="text-brand-purple" />
                <h4 className="text-[12px] font-bold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
                  Engineering_Interests
                </h4>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                {personalInfo.engineeringInterests.map((interest, i) => (
                  <Badge
                    key={i}
                    className="bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 border-black/5 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white text-[11px] px-4 py-2 font-bold uppercase transition-colors"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* ------------------------------------------------ */}
        {/* RIGHT COLUMN */}
        {/* ------------------------------------------------ */}

        <motion.div
          variants={itemVariants}
          className="lg:col-span-3 flex flex-col gap-6"
        >
          {/* Research */}
          <Card className="flex-[0.6] bg-white/60 dark:bg-black/40 backdrop-blur-xl border-black/5 dark:border-white/10 hover:border-brand-indigo/40 dark:hover:shadow-[0_0_30px_-15px_rgba(99,102,241,0.2)] rounded-[2.5rem] shadow-sm dark:shadow-2xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/5 to-transparent pointer-events-none" />

            <CardHeader className="p-6 pb-2 relative z-10">
              <CardTitle className="text-xs font-bold text-neutral-500 dark:text-neutral-400 flex items-center gap-3 uppercase tracking-[0.2em]">
                <Sparkles size={14} className="text-brand-indigo" />
                Research_Nodes
              </CardTitle>
            </CardHeader>

            <CardContent className="p-6 pt-4 relative z-10">
              <div className="space-y-4">
                {personalInfo.learningFocus.map((focus, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-100/50 dark:hover:bg-white/5 transition-colors"
                  >
                    <Terminal
                      size={14}
                      className="mt-0.5 text-neutral-400 dark:text-neutral-500"
                    />
                    <p className="text-[13px] font-semibold text-neutral-700 dark:text-neutral-300">
                      {focus}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Availability */}
          <div className="flex-1 min-h-[160px] bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 p-8 rounded-[2.5rem] flex flex-col justify-between shadow-xl relative overflow-hidden group">
            {/* Glossy Overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="flex items-center justify-between relative z-10">
              <ShieldCheck size={32} className="opacity-80" />

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 dark:bg-white/20 border border-white/10 dark:border-black/10 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-emerald-400 dark:bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Active
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-6 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-60 block mb-2">
                System_Status
              </span>
              <p className="text-[16px] font-space font-extrabold uppercase tracking-tight leading-tight">
                {personalInfo.availability}
              </p>
            </div>

            <div className="flex justify-end relative z-10">
              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-2 cursor-pointer group/btn"
              >
                <span className="text-[11px] font-bold uppercase tracking-widest opacity-80 group-hover/btn:opacity-100 transition-opacity">
                  Contact_Ops
                </span>
                <ArrowRight
                  size={18}
                  className="group-hover/btn:text-brand-amber transition-colors"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
