"use client";

import React from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
import {
  Mail,
  PhoneCall,
  Github,
  Linkedin,
  GraduationCap,
  ArrowUpRight,
  Activity,
  Cpu,
  Rocket,
  Server,
  Terminal,
  ShieldCheck,
  Zap,
  MapPin,
  BookOpen,
} from "lucide-react";
import { resumeData } from "@/lib/data";

/* ─────────────────────────────
   Animation (refined)
──────────────────────────── */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 180, damping: 20 },
  },
};

/* ─────────────────────────────
   UI Primitives
──────────────────────────── */

function SectionLabel({ icon: Icon, label, color }: any) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Icon size={12} className={`${color} opacity-80`} />
      <span
        className={`text-[10px] font-bold uppercase tracking-[0.25em] ${color}`}
      >
        {label}
      </span>
    </div>
  );
}

function Panel({ children, className = "" }: any) {
  return (
    <div
      className={`
      relative rounded-2xl border border-white/5 bg-white/2
      backdrop-blur-sm
      hover:border-white/10
      transition-all duration-300
      overflow-hidden
      ${className}
    `}
    >
      {/* subtle glow */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-white/3 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}

/* ─────────────────────────────
   Main Component
──────────────────────────── */

export default function IdentitySection() {
  const { personalInfo } = resumeData;

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      display: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: PhoneCall,
      label: "Phone",
      display: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: Github,
      label: "GitHub",
      display: "github.com/madhav9757",
      href: "https://github.com/madhav9757",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      display: "in/madhav-semwal",
      href: "https://linkedin.com/in/madhav-semwal-b40272377",
    },
  ];

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full flex flex-col gap-4"
    >
      {/* ── HEADER ── */}
      <div className="grid lg:grid-cols-12 gap-4">
        <motion.div
          variants={item}
          className="lg:col-span-7 flex flex-col justify-center pl-4 relative"
        >
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-white/10 rounded-full" />

          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3 flex items-center gap-2">
            <MapPin size={10} /> Pune · Full Stack Engineer
          </p>

          <h1 className="text-[clamp(2.2rem,4vw,3.5rem)] font-black leading-[0.9] tracking-tight">
            Engineering
            <br />
            <span className="text-white/30">Dossier</span>
          </h1>

          <p className="text-sm text-white/60 mt-4 max-w-xl">
            {personalInfo.focus}
          </p>
        </motion.div>

        <motion.div variants={item} className="lg:col-span-5">
          <Panel className="p-6 h-full">
            <SectionLabel
              icon={Zap}
              label="Dev Philosophy"
              color="text-amber-400"
            />
            <p className="text-sm text-white/70">
              {personalInfo.developmentPhilosophy}
            </p>
          </Panel>
        </motion.div>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="grid lg:grid-cols-12 gap-4">
        {/* LEFT */}
        <motion.div
          variants={item}
          className="lg:col-span-3 flex flex-col gap-4"
        >
          <Panel className="p-4">
            <SectionLabel
              icon={Mail}
              label="Contact"
              color="text-emerald-400"
            />

            <div className="flex flex-col gap-2">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition"
                >
                  <div className="flex gap-2 items-center">
                    <c.icon size={13} className="text-white/40" />
                    <span className="text-xs text-white/70">{c.display}</span>
                  </div>
                  <ArrowUpRight size={12} className="text-white/30" />
                </a>
              ))}
            </div>
          </Panel>

          <Panel className="p-4 flex items-center gap-3">
            <GraduationCap size={18} className="text-cyan-400" />
            <div>
              <p className="text-xs text-white/40">Education</p>
              <p className="text-sm font-semibold">B.E Computer Engineering</p>
            </div>
          </Panel>
        </motion.div>

        {/* CENTER */}
        <motion.div
          variants={item}
          className="lg:col-span-6 flex flex-col gap-4"
        >
          <Panel className="p-6">
            <SectionLabel
              icon={Rocket}
              label="Focus Areas"
              color="text-indigo-400"
            />

            <div className="grid sm:grid-cols-2 gap-3">
              {personalInfo.professionalFocus.map((f: string, i: number) => (
                <div
                  key={i}
                  className="text-sm text-white/70 bg-white/3 p-3 rounded-lg hover:bg-white/6 transition"
                >
                  {f}
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="p-4">
            <SectionLabel
              icon={Server}
              label="Interests"
              color="text-purple-400"
            />

            <div className="flex flex-wrap gap-2">
              {personalInfo.engineeringInterests.map(
                (item: string, i: number) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-md bg-white/5 text-white/60"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </Panel>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={item}
          className="lg:col-span-3 flex flex-col gap-4"
        >
          <Panel className="p-4">
            <SectionLabel
              icon={BookOpen}
              label="Learning"
              color="text-indigo-400"
            />

            {personalInfo.learningFocus.map((f: string, i: number) => (
              <div key={i} className="flex gap-2 text-sm text-white/60 mb-2">
                <Terminal size={12} />
                {f}
              </div>
            ))}
          </Panel>

          <div className="rounded-2xl bg-white text-black p-5 flex flex-col justify-between">
            <ShieldCheck size={22} />

            <div>
              <p className="text-xs uppercase tracking-widest opacity-50">
                Status
              </p>
              <p className="text-sm font-bold mt-1">
                {personalInfo.availability}
              </p>
            </div>

            <Link
              href="/social"
              className="flex justify-between items-center mt-4 pt-4 border-t border-black/10"
            >
              <span className="text-xs uppercase">Contact</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
