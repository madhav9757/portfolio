"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Rocket,
  ExternalLink,
  X,
  Terminal,
  Monitor,
  Shield,
  MessageSquare,
  Share2,
  Brain,
  Music,
  ChevronRight,
  CalendarDays,
  Layers,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { resumeData } from "@/lib/data";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
type Project = (typeof resumeData.projects)[0];

/* ─────────────────────────────────────────────
   Project metadata
───────────────────────────────────────────── */
const projectMeta: Record<
  string,
  {
    icon: React.ElementType;
    accent: string; // tailwind border/text color class
    tag: string;
    span: string; // grid col-span
  }
> = {
  Syncra: {
    icon: Monitor,
    accent: "cyan",
    tag: "Real-Time",
    span: "col-span-12 md:col-span-6",
  },
  AuthSphere: {
    icon: Shield,
    accent: "indigo",
    tag: "Security",
    span: "col-span-12 md:col-span-6",
  },
  NexChat: {
    icon: MessageSquare,
    accent: "emerald",
    tag: "Messaging",
    span: "col-span-12 md:col-span-4",
  },
  Discussly: {
    icon: Share2,
    accent: "amber",
    tag: "Community",
    span: "col-span-12 md:col-span-4",
  },
  "AI Workflow Experiments": {
    icon: Brain,
    accent: "purple",
    tag: "GenAI",
    span: "col-span-12 md:col-span-4",
  },
  "Dynamic Music Streaming Platform": {
    icon: Music,
    accent: "rose",
    tag: "Streaming",
    span: "col-span-12",
  },
};

const accentMap: Record<
  string,
  { border: string; text: string; bg: string; dot: string }
> = {
  cyan: {
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    dot: "bg-cyan-400",
  },
  indigo: {
    border: "border-indigo-500/30",
    text: "text-indigo-400",
    bg: "bg-indigo-500/10",
    dot: "bg-indigo-400",
  },
  emerald: {
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    dot: "bg-emerald-400",
  },
  amber: {
    border: "border-amber-500/30",
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    dot: "bg-amber-400",
  },
  purple: {
    border: "border-purple-500/30",
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    dot: "bg-purple-400",
  },
  rose: {
    border: "border-rose-500/30",
    text: "text-rose-400",
    bg: "bg-rose-500/10",
    dot: "bg-rose-400",
  },
};

/* ─────────────────────────────────────────────
   Project Card
───────────────────────────────────────────── */
function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const meta = projectMeta[project.title] ?? {
    icon: Rocket,
    accent: "indigo",
    tag: "Project",
    span: "col-span-12 md:col-span-6",
  };
  const Icon = meta.icon;
  const ac = accentMap[meta.accent];

  return (
    <motion.button
      layout
      onClick={onClick}
      className={`${meta.span} group text-left h-full min-h-[170px] relative rounded-3xl border border-foreground/10 bg-foreground/5 backdrop-blur-md hover:bg-foreground/10 transition-all duration-500 overflow-hidden p-6 flex flex-col gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 hover:shadow-2xl hover:-translate-y-1`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Subtle glow top-right */}
      <div
        className={`pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${ac.bg}`}
      />
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br from-${ac.text.split('-')[1] || 'current'}-500/20 to-transparent pointer-events-none`} />

      {/* Header row */}
      <div className="flex items-start justify-between gap-2 relative z-10">
        <div className={`p-2 rounded-xl ${ac.bg} ${ac.text}`}>
          <Icon size={18} />
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <span
            className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${ac.bg} ${ac.text}`}
          >
            {meta.tag}
          </span>
          <ChevronRight
            size={14}
            className="opacity-0 group-hover:opacity-60 transition-opacity"
          />
        </div>
      </div>

      {/* Title */}
      <div className="relative z-10 mt-2">
        <h3 className="text-lg font-black uppercase tracking-tight text-foreground/90 leading-tight group-hover:text-foreground transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-medium text-foreground/50 mt-1 line-clamp-1">
          {project.subtitle}
        </p>
      </div>

      {/* First bullet */}
      <p className="text-[12px] text-foreground/60 font-medium leading-relaxed line-clamp-2 relative z-10 flex-1">
        {project.bullets[0]}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 relative z-10 mt-auto pt-2">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="text-[9px] font-bold uppercase tracking-wide px-2 py-1 rounded-sm bg-background/50 text-foreground/60 border border-foreground/10"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-[9px] font-bold uppercase tracking-wide px-2 py-1 rounded-sm bg-background/50 text-foreground/50 border border-transparent">
            +{project.tech.length - 4}
          </span>
        )}
      </div>
    </motion.button>
  );
}

/* ─────────────────────────────────────────────
   Detail Panel (slide-in drawer)
───────────────────────────────────────────── */
function DetailPanel({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const meta = projectMeta[project.title] ?? {
    icon: Rocket,
    accent: "indigo",
    tag: "Project",
    span: "",
  };
  const Icon = meta.icon;
  const ac = accentMap[meta.accent];

  return (
    <motion.div
      key="detail"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className="h-full flex flex-col bg-background border-l border-foreground/10 overflow-hidden"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-foreground/10 shrink-0 bg-foreground/5 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className={`p-2.5 rounded-xl ${ac.bg} ${ac.text} border ${ac.border}`}>
            <Icon size={20} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-foreground/50">
              {meta.tag}
            </p>
            <h2 className="text-lg font-black uppercase tracking-tight text-foreground leading-none mt-1.5">
              {project.title}
            </h2>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2.5 rounded-xl hover:bg-foreground/10 text-foreground/50 hover:text-foreground transition-all border border-transparent hover:border-foreground/10"
          aria-label="Close detail panel"
        >
          <X size={20} />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6 scrollbar-thin scrollbar-thumb-foreground/10">
        {/* Subtitle */}
        <p className="text-sm font-semibold text-foreground/50 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Tech stack */}
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-foreground/30 mb-2 flex items-center gap-1.5">
            <Layers size={10} /> Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className={`text-[10px] font-bold uppercase tracking-tight px-2.5 py-1 rounded-lg ${ac.bg} ${ac.text} border ${ac.border}`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <Separator className="bg-foreground/8" />

        {/* Bullets */}
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-foreground/30 mb-3 flex items-center gap-1.5">
            <Terminal size={10} /> Technical Details
          </p>
          <ul className="space-y-3">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 group/b">
                <div
                  className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${ac.dot} opacity-60 group-hover/b:opacity-100 transition-opacity`}
                />
                <p className="text-[12px] text-foreground/60 font-medium leading-relaxed group-hover/b:text-foreground/80 transition-colors">
                  {bullet}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer action */}
      <div className="px-6 py-4 border-t border-foreground/8 shrink-0">
        <a
          href="#"
          className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-black uppercase tracking-tight text-xs text-foreground bg-foreground/5 hover:bg-foreground hover:text-background border border-foreground/10 hover:border-foreground transition-all duration-300 group`}
        >
          <span>View Project</span>
          <ExternalLink
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
export default function WorkSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Split layout when detail is open */}
      <div
        className={`grid transition-all duration-500 ease-in-out gap-4 ${
          selected ? "grid-cols-1 lg:grid-cols-[1fr_360px]" : "grid-cols-1"
        }`}
        style={{ minHeight: "70vh" }}
      >
        {/* Left: experience + projects */}
        <div className="flex flex-col gap-4 min-w-0">
          {/* Experience block */}
      <div className="rounded-3xl border border-foreground/10 bg-foreground/5 backdrop-blur-xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
           <Briefcase size={120} />
        </div>
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="p-2.5 rounded-xl bg-foreground/10 text-foreground/70 border border-foreground/10">
            <Briefcase size={18} />
          </div>
          <h3 className="text-xs font-black uppercase tracking-[0.25em] text-foreground/60">
            Experience Log
          </h3>
        </div>

            <div className="space-y-4">
              {resumeData.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-5 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-foreground/20 border border-foreground/40 group-hover:bg-foreground/60 transition-colors" />
                  {/* Timeline line */}
                  {idx < resumeData.experience.length - 1 && (
                    <div className="absolute left-[3px] top-4 bottom-0 w-px bg-foreground/8" />
                  )}

                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-sm font-black text-foreground uppercase tracking-tight leading-tight">
                      {exp.role}
                    </h4>
                    <span className="text-[10px] font-bold text-foreground/35 whitespace-nowrap flex items-center gap-1 mt-0.5">
                      <CalendarDays size={9} />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="text-[12px] text-foreground/55 font-medium leading-relaxed"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-12 gap-3">
            {resumeData.projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onClick={() =>
                  setSelected(
                    selected?.title === project.title ? null : project,
                  )
                }
              />
            ))}
          </div>
        </div>

        {/* Right: detail panel */}
        <AnimatePresence>
          {selected && (
            <DetailPanel
              key={selected.title}
              project={selected}
              onClose={() => setSelected(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
