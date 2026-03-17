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
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
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
      className="h-full w-full flex flex-col gap-6 font-inter overflow-hidden p-1"
    >
      {/* ------------------------------------------------ */}
      {/* HERO HEADER */}
      {/* ------------------------------------------------ */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 shrink-0">
        {/* Dossier Title */}

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -2 }}
          className="lg:col-span-7 relative group"
        >
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-foreground rounded-full group-hover:h-full transition-all duration-500" />

          <div className="flex flex-col gap-2">
            <h3 className="text-5xl font-space font-extrabold tracking-tight leading-[0.95] flex items-center gap-5">
              <span className="text-foreground uppercase">
                Engineering Dossier
              </span>

              <div className="h-[2px] flex-1 bg-foreground/10 hidden md:block" />
            </h3>

            <p className="text-[17px] text-foreground/75 leading-relaxed font-medium max-w-3xl">
              {personalInfo.focus}
            </p>
          </div>
        </motion.div>

        {/* Philosophy Card */}

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className="lg:col-span-5 bg-foreground/3 backdrop-blur-md border border-foreground/10 rounded-4xl p-6 flex flex-col justify-center relative overflow-hidden group hover:border-foreground/20 hover:bg-foreground/5 transition-all duration-500"
        >
          <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity rotate-12 group-hover:rotate-0 duration-700">
            <Activity size={60} />
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Zap size={14} className="text-foreground/40" />

            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40">
              Dev_Philosophy
            </h4>
          </div>

          <p className="text-[15px] text-foreground/90 font-semibold leading-relaxed relative z-10">
            {personalInfo.developmentPhilosophy}
          </p>

          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
        </motion.div>
      </div>

      {/* ------------------------------------------------ */}
      {/* MAIN GRID */}
      {/* ------------------------------------------------ */}

      <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-fr gap-6 flex-1 min-h-0">
        {/* ------------------------------------------------ */}
        {/* CONTACT COLUMN */}
        {/* ------------------------------------------------ */}

        <motion.div
          variants={itemVariants}
          className="lg:col-span-3 flex flex-col gap-6"
        >
          {/* Contact Card */}

          <Card className="flex-1 bg-transparent border-foreground/10 hover:border-foreground/30 transition-all rounded-4xl overflow-hidden relative group">
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-sm font-bold text-foreground/40 flex items-center gap-3 uppercase tracking-[0.2em]">
                <Mail size={14} />
                Network_Nodes
              </CardTitle>
            </CardHeader>

            <CardContent className="p-6 pt-4 flex-1 overflow-y-auto">
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
                    className="flex flex-col p-4 rounded-2xl bg-foreground/3 hover:bg-foreground/5 border border-transparent hover:border-foreground/10 transition-all hover:-translate-y-[2px]"
                  >
                    <span className="text-[9px] text-foreground/30 uppercase tracking-widest font-bold mb-1 flex items-center gap-2">
                      <item.icon size={10} />
                      {item.label}
                    </span>

                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-semibold text-xs truncate">
                        {item.value}
                      </span>

                      <ArrowRight size={12} className="opacity-40" />
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}

          <Card className="bg-transparent border-foreground/10 hover:border-foreground/30 rounded-3xl p-5 transition-all duration-500">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-foreground/5 border border-foreground/10">
                <GraduationCap size={20} />
              </div>

              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold">
                  Academic_Record
                </span>

                <span className="text-xs font-semibold text-foreground">
                  B.E. Computer Engineering
                </span>

                <span className="text-[10px] text-foreground/50">
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
            <Card className="h-full bg-transparent border-foreground/10 hover:border-foreground/30 rounded-[2.5rem] overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-700 rotate-12">
                <Cpu size={280} />
              </div>

              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-2xl font-space font-extrabold flex items-center gap-4 uppercase">
                  <div className="p-3 rounded-2xl bg-foreground/5 border border-foreground/10">
                    <Rocket size={24} />
                  </div>
                  Strategic_Focus
                </CardTitle>

                <CardDescription className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30 mt-3 border-l-2 border-foreground/20 pl-3">
                  Core Engineering Competencies
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {personalInfo.professionalFocus.map((focus, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-5 rounded-2xl hover:bg-foreground/3 border border-transparent hover:border-foreground/5 transition-all"
                    >
                      <div className="w-1.5 h-6 bg-foreground/10 rounded-full" />

                      <p className="text-[14px] text-foreground/70 font-semibold leading-snug">
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
            <Card className="bg-transparent border-foreground/10 hover:border-foreground/30 rounded-3xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Server size={18} className="text-foreground/40" />

                <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-foreground/40">
                  Engineering_Interests
                </h4>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {personalInfo.engineeringInterests.map((interest, i) => (
                  <Badge
                    key={i}
                    className="bg-foreground/3 hover:bg-foreground/10 border border-foreground/10 text-foreground/60 hover:text-foreground text-[10px] px-3 py-1.5 font-bold uppercase"
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

          <Card className="flex-[0.6] bg-transparent border-foreground/10 hover:border-foreground/30 rounded-4xl">
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-sm font-bold text-foreground/40 flex items-center gap-3 uppercase tracking-[0.2em]">
                <Sparkles size={14} />
                Research_Nodes
              </CardTitle>
            </CardHeader>

            <CardContent className="p-6 pt-4">
              <div className="space-y-5">
                {personalInfo.learningFocus.map((focus, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Terminal size={12} className="mt-1 opacity-40" />

                    <p className="text-[12px] font-semibold text-foreground/60">
                      {focus}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Availability */}

          <div className="flex-1 min-h-[140px] bg-foreground text-background p-8 rounded-4xl flex flex-col justify-between shadow-2xl">
            <div className="flex items-center justify-between">
              <ShieldCheck size={28} className="opacity-60" />

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/10 border border-background/20">
                <div className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />

                <span className="text-[9px] font-bold uppercase tracking-widest text-background/80">
                  Active
                </span>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 block mb-2">
                System_Status
              </span>

              <p className="text-[15px] font-space font-extrabold uppercase tracking-tight">
                {personalInfo.availability}
              </p>
            </div>

            <div className="flex justify-end">
              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-2"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                  Contact_Ops
                </span>

                <ArrowRight size={20} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
