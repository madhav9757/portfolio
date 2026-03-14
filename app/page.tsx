"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Globe,
  Mail,
  Github,
  Twitter,
  ArrowRight,
  Briefcase,
  Code2,
  Zap,
  Layers,
  X,
  Activity,
  User,
  ExternalLink,
  Sparkles
} from "lucide-react";

// Mock Data
const PROFILE_DATA = {
  name: "Madhav",
  title: "Creative Technologist & Engineer",
  status: "Building next-gen interfaces",
  location: "New Delhi, IN",
  about:
    "I explore the intersection of design and engineering. Focusing on crafting fluid, intuitive, and unconventional digital experiences that challenge the status quo.",
  skills: ["React", "Next.js", "Framer Motion", "Go", "WebGL", "Gen AI", "UX Engineering"],
  experiences: [
    { role: "Senior Frontend Engineer", company: "TechCorp", year: "2024 - Present" },
    { role: "UI/UX Designer", company: "StudioX", year: "2022 - 2024" },
  ],
  projects: [
    { name: "AuthSphere", type: "Security", desc: "Next-gen authentication flow." },
    { name: "Syncra", type: "Real-time", desc: "Encrypted P2P messaging." },
  ],
};

const SECTIONS = [
  { id: "identity", title: "Identity", icon: <User className="w-4 h-4" /> },
  { id: "work", title: "Artifacts", icon: <Layers className="w-4 h-4" /> },
  { id: "skills", title: "Capability", icon: <Code2 className="w-4 h-4" /> },
  { id: "now", title: "Status", icon: <Activity className="w-4 h-4" /> },
];

export default function ProfilePage() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-200 font-sans overflow-hidden selection:bg-white/20">
      {/* Subtle Background Glow tied to mouse position */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.03), transparent 40%)`,
        }}
      />

      {/* Noise overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.015] mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <main className="relative z-10 w-full h-screen flex flex-col items-center justify-center p-4 md:p-8">
        
        {/* Navigation / Filter */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-8 md:top-12 flex space-x-2 md:space-x-6 z-40 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 shadow-2xl"
        >
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveLayer(sec.id)}
              className="group flex items-center space-x-2 text-xs md:text-sm font-medium tracking-wide text-zinc-400 hover:text-white transition-colors px-3 py-1 rounded-full relative"
            >
              <span className="opacity-50 group-hover:opacity-100 transition-opacity">{sec.icon}</span>
              <span>{sec.title}</span>
              {activeLayer === sec.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.nav>

        {/* Dynamic Canvas Area */}
        <div className="relative w-full max-w-6xl h-[70vh] flex items-center justify-center">
          
          <AnimatePresence mode="popLayout">
            {!activeLayer && (
              <motion.div
                key="default-view"
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full h-full"
              >
                {/* Identity Module */}
                <motion.div 
                  layoutId="module-identity"
                  onClick={() => setActiveLayer("identity")}
                  className="md:col-span-7 md:row-span-2 group cursor-pointer relative overflow-hidden bg-linear-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-2xl border border-white/5 hover:border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-500 shadow-2xl flex flex-col justify-end"
                >
                  <div className="absolute top-8 right-8 flex items-center space-x-2 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full text-xs font-medium border border-green-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span>Focus Mode</span>
                  </div>
                  
                  <div className="space-y-4 relative z-10">
                    <motion.h1 
                      layoutId="title-name"
                      className="text-5xl md:text-8xl font-light tracking-tighter text-white"
                    >
                      {PROFILE_DATA.name}
                    </motion.h1>
                    <motion.p layoutId="title-role" className="text-xl md:text-2xl text-zinc-400 font-light flex items-center space-x-3">
                      <span>{PROFILE_DATA.title}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                      <span className="flex items-center text-zinc-500 text-lg"><MapPin className="w-4 h-4 mr-1" /> {PROFILE_DATA.location}</span>
                    </motion.p>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
                </motion.div>

                {/* Work / Artifacts Module */}
                <motion.div
                  layoutId="module-work"
                  onClick={() => setActiveLayer("work")}
                  className="md:col-span-5 md:row-span-1 cursor-pointer group bg-zinc-900/50 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
                  <div className="flex justify-between items-start text-zinc-500 group-hover:text-zinc-300 transition-colors relative z-10">
                    <Layers className="w-5 h-5" />
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-light text-zinc-200">2 Active <br/> Projects</h3>
                    <p className="text-sm text-zinc-500 mt-2">Latest: Syncra & AuthSphere</p>
                  </div>
                </motion.div>

                {/* Status / Now Module */}
                <motion.div
                  layoutId="module-now"
                  onClick={() => setActiveLayer("now")}
                  className="md:col-span-2 md:row-span-1 cursor-pointer group bg-zinc-900/50 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-3xl p-6 flex flex-col justify-between transition-all duration-500"
                >
                  <div className="flex justify-between items-start text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    <Activity className="w-5 h-5" />
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-zinc-300 leading-tight">Crafting UI</p>
                  </div>
                </motion.div>

                {/* Skills / Stack Module */}
                <motion.div
                  layoutId="module-skills"
                  onClick={() => setActiveLayer("skills")}
                  className="md:col-span-3 md:row-span-1 cursor-pointer group bg-zinc-900/50 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-3xl p-6 overflow-hidden relative transition-all duration-500"
                >
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[16px_16px]" />
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      <Zap className="w-5 h-5" />
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {PROFILE_DATA.skills.slice(0, 3).map(skill => (
                        <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-300">
                          {skill}
                        </span>
                      ))}
                      <span className="px-3 py-1 text-xs text-zinc-500 items-center flex">+{PROFILE_DATA.skills.length - 3} more</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expanded Detail Views */}
          <AnimatePresence>
            {activeLayer && (
              <motion.div
                key="expanded-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                className="absolute inset-0 z-20 flex items-center justify-center p-4"
              >
                {/* Overlay backdrop */}
                <motion.div 
                  className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveLayer(null)}
                />
                
                {/* Content Panel */}
                <motion.div
                  layoutId={`module-${activeLayer}`}
                  className="relative w-full h-[80vh] md:h-full bg-zinc-900/90 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-3xl p-8 md:p-16 overflow-y-auto overflow-hidden flex flex-col"
                >
                  <button 
                    onClick={() => setActiveLayer(null)}
                    className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-50 text-zinc-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="max-w-3xl mx-auto w-full h-full pt-12">
                    {activeLayer === "identity" && (
                      <div className="space-y-12 h-full flex flex-col justify-center">
                        <div>
                          <motion.h2 layoutId="title-name" className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-4">
                            {PROFILE_DATA.name}
                          </motion.h2>
                          <motion.p layoutId="title-role" className="text-2xl md:text-3xl text-zinc-400 font-light max-w-2xl leading-relaxed">
                            {PROFILE_DATA.about}
                          </motion.p>
                        </div>
                        <div className="flex space-x-6 text-zinc-500">
                          <a href="https://github.com/madhav9757" className="flex items-center space-x-2 hover:text-white transition-colors group">
                            <Github className="w-5 h-5" /> <span>GitHub</span>
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                          <a href="https://twitter.com/madhav9757" className="flex items-center space-x-2 hover:text-white transition-colors group">
                            <Twitter className="w-5 h-5" /> <span>Twitter</span>
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                          <a href="mailto:contact@example.com" className="flex items-center space-x-2 hover:text-white transition-colors group">
                            <Mail className="w-5 h-5" /> <span>Email</span>
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </div>
                      </div>
                    )}

                    {activeLayer === "skills" && (
                      <div className="space-y-12">
                        <div className="flex items-center space-x-4 text-zinc-400 mb-8">
                          <Code2 className="w-8 h-8" />
                          <h2 className="text-4xl font-light text-white tracking-tight">Capability Graph</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {PROFILE_DATA.skills.map((skill, i) => (
                            <motion.div 
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05 }}
                              key={skill} 
                              className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-colors"
                            >
                              <span className="text-lg text-zinc-300">{skill}</span>
                              <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-zinc-400 transition-colors" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeLayer === "now" && (
                      <div className="space-y-12">
                        <div className="flex items-center space-x-4 text-zinc-400 mb-8">
                          <Activity className="w-8 h-8" />
                          <h2 className="text-4xl font-light text-white tracking-tight">Chronicle</h2>
                        </div>
                        <div className="relative border-l border-zinc-800 ml-4 space-y-12 pb-12">
                          {PROFILE_DATA.experiences.map((exp, i) => (
                            <motion.div 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              key={i} 
                              className="relative pl-8"
                            >
                              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-zinc-400 ring-4 ring-zinc-900" />
                              <div className="space-y-2">
                                <span className="text-xs font-mono text-zinc-500">{exp.year}</span>
                                <h3 className="text-2xl font-light text-white">{exp.role}</h3>
                                <p className="text-lg text-zinc-400">{exp.company}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeLayer === "work" && (
                      <div className="space-y-12 h-full">
                        <div className="flex items-center space-x-4 text-zinc-400 mb-8">
                          <Layers className="w-8 h-8" />
                          <h2 className="text-4xl font-light text-white tracking-tight">Selected Artifacts</h2>
                        </div>
                        <div className="grid gap-6">
                          {PROFILE_DATA.projects.map((proj, i) => (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              key={i} 
                              className="p-8 bg-white/5 hover:bg-white/10 border border-white/5 rounded-3xl transition-colors group cursor-pointer flex flex-col md:flex-row md:items-center justify-between"
                            >
                              <div className="space-y-2">
                                <div className="flex items-center space-x-3 text-sm text-zinc-500 mb-2">
                                  <Sparkles className="w-4 h-4" />
                                  <span>{proj.type}</span>
                                </div>
                                <h3 className="text-3xl font-light text-white">{proj.name}</h3>
                                <p className="text-zinc-400 max-w-md">{proj.desc}</p>
                              </div>
                              <div className="mt-6 md:mt-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white text-zinc-500 group-hover:text-black transition-all">
                                <ArrowRight className="w-5 h-5 -rotate-45" />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer info minimal */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 text-zinc-600 text-xs font-mono flex items-center space-x-4"
        >
          <span>INTERACTION_MODEL_V2</span>
          <span className="w-1 h-1 bg-zinc-700 rounded-full" />
          <span>PORTFOLIO_OS</span>
        </motion.div>
      </main>
    </div>
  );
}