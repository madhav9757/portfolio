"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  User, Rocket, Cpu, Activity, Mail, PhoneCall, 
  Github, Linkedin, ExternalLink, X, ArrowRight, 
  Sparkles, Code2, MapPin, Terminal, Briefcase, GraduationCap, Server
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { resumeData } from "@/lib/data";
import PixelBlast from "@/components/PixelBlast";

// SECTION COMPONENTS
import IdentitySection from "@/components/sections/identity";
import WorkSection from "@/components/sections/work";
import SkillsSection from "@/components/sections/skills";
import NowSection from "@/components/sections/now";

// --- CUSTOM HOOK FOR 3D TILT EFFECT ---
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

export default function EnhancedProfile() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt();

  const renderLayerContent = () => {
    switch (activeLayer) {
      case "identity":
        return <IdentitySection />;
      case "work":
        return <WorkSection />;
      case "skills":
        return <SkillsSection />;
      case "now":
        return <NowSection />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-zinc-950 overflow-hidden noise-overlay">
      
      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <PixelBlast
          variant="square"
          pixelSize={5}
          color="#a855f7"
          patternScale={8}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent={true} className={undefined} style={undefined}          />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        
        {/* 2. FLOATING NAVIGATION */}
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-8 z-50 flex gap-2 p-2 glass-panel rounded-full"
        >
          {["identity", "work", "skills", "now"].map((id) => (
            <button
              key={id}
              onClick={() => setActiveLayer(id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2
                ${activeLayer === id ? 'bg-white/10 text-white shadow-xl' : 'text-zinc-400 hover:text-white'}`}
            >
              {id === 'identity' && <User size={14} />}
              {id === 'work' && <Rocket size={14} />}
              {id === 'skills' && <Cpu size={14} />}
              {id === 'now' && <Activity size={14} />}
              <span className="capitalize">{id}</span>
            </button>
          ))}
        </motion.nav>

        {/* 3. THE INTERACTIVE GRID */}
        <AnimatePresence mode="wait">
          {!activeLayer && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-6xl perspective-1000"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            >
              {/* MAIN HERO CARD */}
              <motion.div
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onClick={() => setActiveLayer("identity")}
                className="md:col-span-8 md:row-span-2 glass-panel hover-card group p-12 flex flex-col justify-end cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-10 left-10 flex items-center gap-2 text-brand-emerald z-10">
                  <Terminal size={20} />
                  <span className="text-xs font-mono tracking-widest uppercase">System.Ready</span>
                </div>
                
                <h1 className="text-7xl md:text-9xl font-black text-gradient leading-none tracking-tighter z-10 relative">
                  {resumeData.personalInfo.name.split(" ")[0]}
                </h1>
                <p className="text-xl text-zinc-400 mt-4 max-w-md font-medium z-10 relative">
                  {resumeData.personalInfo.title} with a focus on <span className="text-brand-purple">Go</span> microservices and <span className="text-brand-indigo">GenAI</span>.
                </p>
                
                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <div className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                    <ArrowRight className="text-white" />
                  </div>
                </div>
              </motion.div>

              {/* PROJECT PREVIEW CARD */}
              <motion.div 
                onClick={() => setActiveLayer("work")}
                className="md:col-span-4 glass-panel hover-card p-8 flex flex-col justify-between cursor-pointer border-brand-indigo/20 relative overflow-hidden group"
              >
                <div className="absolute -right-6 -top-6 text-brand-indigo/10 transform rotate-12 group-hover:scale-110 transition-transform duration-700">
                  <Server size={140} />
                </div>
                <Rocket className="text-brand-indigo mb-8 relative z-10" size={32} />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-1">Projects & Exp</h3>
                  <p className="text-zinc-500 font-medium">
                    {resumeData.projects.slice(0, 2).map(p => p.title).join(", ")} & {resumeData.projects.length - 2} more.
                  </p>
                </div>
              </motion.div>

              {/* STACK PREVIEW CARD */}
              <motion.div 
                onClick={() => setActiveLayer("skills")}
                className="md:col-span-4 glass-panel hover-card p-8 flex flex-col justify-between cursor-pointer border-brand-purple/20 relative overflow-hidden group"
              >
                <div className="absolute -right-6 -bottom-6 text-brand-purple/10 transform -rotate-12 group-hover:scale-110 transition-transform duration-700">
                  <Code2 size={140} />
                </div>
                <Cpu className="text-brand-purple mb-8 relative z-10" size={32} />
                <div className="flex flex-wrap gap-2 relative z-10">
                  <Badge className="flex items-center gap-1.5 bg-brand-purple/20 text-brand-purple border-none px-3 py-1">
                    Go
                  </Badge>
                  <Badge className="flex items-center gap-1.5 bg-brand-indigo/20 text-brand-indigo border-none px-3 py-1">
                    React
                  </Badge>
                  <Badge className="flex items-center gap-1.5 bg-brand-emerald/20 text-brand-emerald border-none px-3 py-1">
                    Node.js
                  </Badge>
                  <Badge className="flex items-center gap-1.5 bg-white/10 text-white border-none px-3 py-1">
                    +{Object.values(resumeData.competencies).flat().length - 3}
                  </Badge>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4. MODAL LAYER */}
        <AnimatePresence>
          {activeLayer && (
            <motion.div 
              className="fixed inset-0 z-60 flex items-center justify-center p-4 md:p-6 bg-black/60"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            >
              <motion.div 
                layoutId={`module-${activeLayer}`}
                className="w-full max-w-5xl h-[90vh] md:h-[85vh] glass-panel rounded-2xl relative overflow-hidden flex flex-col border border-white/10 shadow-2xl"
              >
                <div className="absolute top-0 w-full h-1 bg-linear-to-r from-brand-emerald via-brand-indigo to-brand-purple" />
                
                <Button 
                  onClick={() => setActiveLayer(null)}
                  className="absolute top-4 md:top-6 right-4 md:right-6 z-50 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-lg"
                  variant="ghost" size="icon"
                >
                  <X size={20} />
                </Button>

                <ScrollArea className="flex-1 h-full">
                   <div className="p-6 md:p-12 max-w-4xl mx-auto py-12 md:py-16">
                      <h2 className="text-5xl md:text-7xl font-black mb-12 capitalize bg-clip-text text-transparent bg-linear-to-r from-white to-white/50">{activeLayer}</h2>
                      {renderLayerContent()}
                   </div>
                </ScrollArea>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}