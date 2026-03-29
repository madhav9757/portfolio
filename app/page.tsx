"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
import {
  User,
  Rocket,
  Cpu,
  Code2,
  ArrowUpRight,
  Server,
  Share2,
  MapPin,
  Mail,
  Github,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/lib/data";

/* ─────────────────────────────────────────────
   3D Tilt Hook
───────────────────────────────────────────── */
const useTilt = (strength = 10) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18 });
  const sy = useSpring(y, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(
    sy,
    [-0.5, 0.5],
    [`${strength}deg`, `-${strength}deg`],
  );
  const rotateY = useTransform(
    sx,
    [-0.5, 0.5],
    [`-${strength}deg`, `${strength}deg`],
  );

  const onMouseMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { rotateX, rotateY, onMouseMove, onMouseLeave };
};

/* ─────────────────────────────────────────────
   Animated counter
───────────────────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(to / 40);
    const t = setInterval(() => {
      start += step;
      if (start >= to) {
        setVal(to);
        clearInterval(t);
      } else setVal(start);
    }, 30);
    return () => clearInterval(t);
  }, [to]);
  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Clock
───────────────────────────────────────────── */
function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="font-mono tabular-nums">{time}</span>;
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function PortfolioPage() {
  const hero = useTilt(8);
  const totalSkills = Object.values(resumeData.competencies).flat().length;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.05 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 22 },
    },
  };

  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden">
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 pb-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-12 auto-rows-auto gap-4 w-full max-w-6xl"
          style={{ perspective: "1200px" }}
        >
          {/* ── HERO CARD ────────────────────────────── */}
          <motion.div
            variants={item}
            onMouseMove={hero.onMouseMove}
            onMouseLeave={hero.onMouseLeave}
            style={{
              rotateX: hero.rotateX,
              rotateY: hero.rotateY,
              transformStyle: "preserve-3d",
            }}
            className="md:col-span-8 relative group cursor-pointer rounded-3xl overflow-hidden border border-foreground/10 bg-foreground/5 backdrop-blur-xl hover:border-foreground/20 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 p-10 flex flex-col justify-between min-h-[340px]"
          >
            <Link
              href="/identity"
              className="absolute inset-0 z-20"
              aria-label="View Identity"
            />

            {/* Ambient glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute w-72 h-72 rounded-full bg-indigo-500/8 blur-[80px] -top-16 -left-16 group-hover:bg-indigo-500/14 transition-colors duration-700" />
              <div className="absolute w-72 h-72 rounded-full bg-purple-500/8 blur-[80px] -bottom-16 -right-16 group-hover:bg-purple-500/14 transition-colors duration-700" />
            </div>

            {/* Top meta row */}
            <div className="flex items-start justify-between relative z-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/8">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">
                  Available for hire
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-foreground/30 text-[11px] font-mono">
                <MapPin size={11} />
                <span>
                  Pune, IN · IST <LiveClock />
                </span>
              </div>
            </div>

            {/* Name block */}
            <div className="relative z-10 mt-auto">
              <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.88] tracking-[-0.03em] bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/40 uppercase">
                {resumeData.personalInfo.name.split(" ")[0]}
              </h1>
              <div className="flex items-end gap-4 mt-1">
                <h2 className="text-[clamp(1.2rem,3vw,2rem)] font-black leading-none tracking-[-0.02em] text-foreground/30 uppercase">
                  {resumeData.personalInfo.name.split(" ")[1]}
                </h2>
                <div className="h-px flex-1 bg-foreground/10 mb-1" />
              </div>

              <p className="text-[13px] text-foreground/50 font-semibold mt-4 max-w-sm leading-relaxed tracking-tight">
                Full-Stack Engineer · Backend Systems · Real-Time Infra · GenAI
              </p>
            </div>

            {/* Arrow */}
            <div className="absolute bottom-8 right-8 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
              <div className="p-2.5 rounded-xl bg-foreground/8 border border-foreground/10">
                <ArrowUpRight size={18} className="text-foreground/60" />
              </div>
            </div>
          </motion.div>

          {/* ── STAT STACK (right column, 2 cards) ──── */}
          <motion.div
            variants={item}
            className="md:col-span-4 flex flex-col gap-4"
          >
            {/* Work card */}
            <Link
              href="/work"
              className="group block flex-1 relative rounded-3xl overflow-hidden border border-foreground/10 bg-foreground/5 backdrop-blur-md hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 p-7 min-h-[160px]"
            >
              <div className="absolute -right-4 -top-4 text-foreground/4 group-hover:text-foreground/7 transition-colors duration-500 rotate-12">
                <Server size={110} />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Rocket size={16} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/35">
                    Projects & Work
                  </span>
                </div>
                <div>
                  <p className="text-4xl font-black text-foreground/80 leading-none tabular-nums">
                    <Counter to={resumeData.projects.length} />
                    <span className="text-foreground/25 text-2xl ml-1">
                      proj
                    </span>
                  </p>
                  <p className="text-[11px] text-foreground/40 font-semibold mt-1.5 tracking-tight">
                    {resumeData.projects
                      .slice(0, 2)
                      .map((p) => p.title)
                      .join(", ")}{" "}
                    & more
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-foreground/20 group-hover:text-foreground/50 self-end transition-colors"
                />
              </div>
            </Link>

            {/* Skills card */}
            <Link
              href="/skills"
              className="group block flex-1 relative rounded-3xl overflow-hidden border border-foreground/10 bg-foreground/5 backdrop-blur-md hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 p-7 min-h-[160px]"
            >
              <div className="absolute -right-4 -bottom-4 text-foreground/4 group-hover:text-foreground/7 transition-colors duration-500 -rotate-12">
                <Code2 size={110} />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                    <Cpu size={16} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/35">
                    Tech Stack
                  </span>
                </div>
                <div>
                  <p className="text-4xl font-black text-foreground/80 leading-none tabular-nums">
                    <Counter to={totalSkills} />
                    <span className="text-foreground/25 text-2xl ml-1">
                      skills
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {["Go", "React", "Node.js", "TypeScript"].map((s) => (
                      <span
                        key={s}
                        className="text-[9px] font-black uppercase tracking-wide px-2 py-0.5 rounded-md bg-foreground/5 text-foreground/45 border border-foreground/8"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-foreground/20 group-hover:text-foreground/50 self-end transition-colors"
                />
              </div>
            </Link>
          </motion.div>

          {/* ── SOCIAL / CONNECT CARD ─────────────────── */}
          <motion.div variants={item} className="md:col-span-12">
            <Link
              href="/social"
              className="group relative flex items-center justify-between rounded-3xl overflow-hidden border border-foreground/10 bg-foreground/5 backdrop-blur-md hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 p-6 sm:p-8 gap-6"
            >
              {/* Giant background icon */}
              <div className="absolute right-0 top-0 bottom-0 flex items-center pr-8 text-foreground/3 group-hover:text-foreground/5 transition-colors duration-700 pointer-events-none">
                <Share2 size={220} />
              </div>

              {/* Left: icon + text */}
              <div className="flex items-center gap-5 relative z-10 min-w-0">
                <div className="shrink-0 p-4 rounded-2xl bg-foreground/5 border border-foreground/8 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-400">
                  <Share2 size={24} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground leading-none">
                    Connectivity Matrix
                  </h3>
                  <p className="text-[12px] text-foreground/45 font-semibold mt-1.5 tracking-tight">
                    GitHub · LinkedIn · Twitter · Encrypted email
                  </p>
                </div>
              </div>

              {/* Right: status chip + arrow */}
              <div className="hidden sm:flex items-center gap-5 relative z-10 shrink-0">
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-foreground/4 border border-foreground/8 group-hover:border-foreground/15 transition-all">
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/30">
                      Status
                    </span>
                    <span className="text-[11px] font-black text-emerald-400 tracking-tight">
                      OPTIMAL_UPLINK
                    </span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="p-2.5 rounded-xl bg-foreground/8 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ── QUICK LINKS ROW ───────────────────────── */}
          <motion.div
            variants={item}
            className="md:col-span-12 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {[
              {
                label: "Identity",
                sub: "About me",
                href: "/identity",
                icon: User,
                color: "text-indigo-400",
                bg: "bg-indigo-500/8 hover:bg-indigo-500/14 border-indigo-500/15 hover:border-indigo-500/30",
              },
              {
                label: "Work",
                sub: "Projects",
                href: "/work",
                icon: Rocket,
                color: "text-purple-400",
                bg: "bg-purple-500/8 hover:bg-purple-500/14 border-purple-500/15 hover:border-purple-500/30",
              },
              {
                label: "Skills",
                sub: "Tech stack",
                href: "/skills",
                icon: Cpu,
                color: "text-cyan-400",
                bg: "bg-cyan-500/8 hover:bg-cyan-500/14 border-cyan-500/15 hover:border-cyan-500/30",
              },
              {
                label: "Social",
                sub: "Connect",
                href: "/social",
                icon: Share2,
                color: "text-emerald-400",
                bg: "bg-emerald-500/8 hover:bg-emerald-500/14 border-emerald-500/15 hover:border-emerald-500/30",
              },
            ].map(({ label, sub, href, icon: Icon, color, bg }) => (
              <Link
                key={href}
                href={href}
                className={`group flex items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-300 ${bg}`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={16} className={color} />
                  <div>
                    <p className="text-[12px] font-black uppercase tracking-tight text-foreground/75">
                      {label}
                    </p>
                    <p className="text-[10px] text-foreground/35 font-semibold">
                      {sub}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={13}
                  className="text-foreground/20 group-hover:text-foreground/50 transition-colors"
                />
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
