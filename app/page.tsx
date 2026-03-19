"use client";

import React from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import {
  User,
  Rocket,
  Cpu,
  Code2,
  ArrowRight,
  Server,
  Share2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { resumeData } from "@/lib/data";

/* ------------------------------------------------ */
/* 3D TILT HOOK */
/* ------------------------------------------------ */

const useTilt = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { rotateX, rotateY, onMouseMove, onMouseLeave };
};

/* ------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------ */

export default function PortfolioPage() {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt();

  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden transition-colors duration-500">
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 pb-24">
        {/* ------------------------------------------------ */}
        {/* HERO GRID */}
        {/* ------------------------------------------------ */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-6xl perspective-1000"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* ------------------------------------------------ */}
          {/* HERO CARD */}
          {/* ------------------------------------------------ */}

          <motion.div
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="md:col-span-8 md:row-span-2 glass-panel hover-card group p-12 flex flex-col justify-end cursor-pointer relative overflow-hidden"
          >
            <Link href="/identity" className="absolute inset-0 z-20" />

            {/* background glow */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute w-[400px] h-[400px] bg-brand-purple/20 blur-[120px] top-[-120px] left-[-100px]" />
              <div className="absolute w-[400px] h-[400px] bg-brand-indigo/20 blur-[120px] bottom-[-120px] right-[-120px]" />
            </div>

            <h1 className="text-7xl md:text-9xl font-space font-extrabold leading-none tracking-tighter text-foreground/70 z-10">
              {resumeData.personalInfo.name.split(" ")[0]}
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-foreground/50 mt-2 z-10">
              {resumeData.personalInfo.name.split(" ")[1]}
            </h2>

            <p className="text-xl text-foreground/60 mt-4 max-w-md font-medium z-10">
              {resumeData.personalInfo.title}
            </p>

            <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div className="bg-foreground/10 p-3 rounded-full hover:bg-foreground/20 transition-colors">
                <ArrowRight />
              </div>
            </div>
          </motion.div>

          {/* ------------------------------------------------ */}
          {/* PROJECT CARD */}
          {/* ------------------------------------------------ */}

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="md:col-span-4 glass-panel hover-card p-8 flex flex-col justify-between cursor-pointer border-brand-indigo/20 relative overflow-hidden group"
          >
            <Link href="/work" className="absolute inset-0 z-20" />

            <div className="absolute -right-6 -top-6 text-foreground/10 rotate-12">
              <Server size={140} />
            </div>

            <Rocket className="text-foreground mb-8 relative z-10" size={32} />

            <div className="relative z-10">
              <h3 className="text-3xl font-space font-bold text-foreground mb-1">
                Projects & Exp
              </h3>

              <p className="text-foreground/60 font-medium">
                {resumeData.projects
                  .slice(0, 2)
                  .map((p) => p.title)
                  .join(", ")}{" "}
                & {resumeData.projects.length - 2} more.
              </p>
            </div>
          </motion.div>

          {/* ------------------------------------------------ */}
          {/* SKILLS CARD */}
          {/* ------------------------------------------------ */}

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="md:col-span-4 glass-panel hover-card p-8 flex flex-col justify-between cursor-pointer border-brand-purple/20 relative overflow-hidden group"
          >
            <Link href="/skills" className="absolute inset-0 z-20" />

            <div className="absolute -right-6 -bottom-6 text-foreground/10 -rotate-12">
              <Code2 size={140} />
            </div>

            <Cpu className="text-foreground mb-8 relative z-10" size={32} />

            <div className="flex flex-wrap gap-2 relative z-10">
              <Badge className="bg-foreground/5 text-foreground border-none px-3 py-1">
                Go
              </Badge>

              <Badge className="bg-foreground/5 text-foreground border-none px-3 py-1">
                React
              </Badge>

              <Badge className="bg-foreground/5 text-foreground border-none px-3 py-1">
                Node.js
              </Badge>

              <Badge className="bg-foreground/5 text-foreground border-none px-3 py-1">
                +{Object.values(resumeData.competencies).flat().length - 3}
              </Badge>
            </div>
          </motion.div>

          {/* SOCIAL CONNECTIVITY PREVIEW CARD */}
          <motion.div className="md:col-span-12 glass-panel hover-card p-8 flex items-center justify-between cursor-pointer border-brand-emerald/20 relative overflow-hidden group">
            <Link href="/social" className="absolute inset-0 z-20" />

            <div className="absolute right-0 top-0 p-8 text-foreground/5 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
              <Share2 size={240} />
            </div>
            <div className="flex items-center gap-6 relative z-10 w-full group">
              <div className="p-4 rounded-2xl bg-foreground/5 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                <Share2 size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-1">
                  Connectivity Matrix
                </h3>
                <p className="text-foreground/60 font-medium">
                  GitHub, LinkedIn, Twitter and direct secure communication
                  channels.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-4 mr-12 bg-foreground/3 px-6 py-4 rounded-2xl border border-foreground/5 group-hover:border-foreground/20 transition-all">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black uppercase tracking-widest text-foreground/30">
                    Network Status
                  </span>
                  <span className="text-sm font-black text-emerald-500">
                    OPTIMAL_UPLINK
                  </span>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="p-3 bg-foreground/10 rounded-full group-hover:bg-foreground group-hover:text-background transition-all">
                <ArrowRight />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
