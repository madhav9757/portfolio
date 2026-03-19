"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  Mail,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Activity,
  Cpu,
  Share2,
  Lock,
  Wifi,
  Terminal,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

// --- DATA FOR THE SOCIAL HUB ---
const socialNodes = [
  {
    id: "github",
    name: "GitHub",
    handle: "madhav9757",
    icon: Github,
    color: "from-slate-800 to-slate-900",
    glow: "rgba(255, 255, 255, 0.1)",
    bg: "bg-linear-to-br from-slate-800/20 to-transparent",
    border: "border-slate-800/40",
    description: "Source code repository and open-source contributions.",
    stats: "24 Repos / 150+ Commits",
    href: "https://github.com/madhav9757",
    status: "Active",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "madhav-semwal",
    icon: Linkedin,
    color: "from-blue-600 to-blue-800",
    glow: "rgba(37, 99, 235, 0.3)",
    bg: "bg-linear-to-br from-blue-600/20 to-transparent",
    border: "border-blue-600/40",
    description: "Professional networking and career history.",
    stats: "500+ Connections",
    href: "https://linkedin.com/in/madhav-semwal-b40272377",
    status: "Verified",
  },
  {
    id: "twitter",
    name: "Twitter / X",
    handle: "@madhav_dev",
    icon: Twitter,
    color: "from-slate-900 to-black",
    glow: "rgba(255, 255, 255, 0.1)",
    bg: "bg-linear-to-br from-slate-900/20 to-transparent",
    border: "border-slate-900/40",
    description: "Tech thoughts and rapid coding updates.",
    stats: "Beta Uplink",
    href: "#",
    status: "Standby",
  },
  {
    id: "email",
    name: "Secure Email",
    handle: "Direct Line",
    icon: Mail,
    color: "from-emerald-600 to-emerald-800",
    glow: "rgba(16, 185, 129, 0.3)",
    bg: "bg-linear-to-br from-emerald-600/20 to-transparent",
    border: "border-emerald-600/40",
    description: "Encrypted communications channel.",
    stats: "P-GP Key Enabled",
    href: `mailto:${resumeData.personalInfo.email}`,
    status: "Encrypted",
  },
];

const SocialCard = ({ node }: { node: (typeof socialNodes)[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={node.href}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative block h-full group"
    >
      <Card className={`h-full ${node.bg} border-2 ${node.border} hover:border-foreground/30 transition-all duration-500 rounded-4xl overflow-hidden flex flex-col relative group shadow-none`}>
        {/* Background Gradient Glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
          style={{ background: `radial-gradient(circle at top right, ${node.glow}, transparent 70%)` }}
        />

        <CardHeader className="p-6 pb-2 relative z-10">
          <div className="flex justify-between items-start">
            <div className={`p-4 rounded-2xl bg-foreground/5 border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-all duration-500`}>
              <node.icon size={28} />
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10">
              <div className={`w-1.5 h-1.5 rounded-full ${node.status === 'Active' ? 'bg-emerald-500 animate-pulse' : node.status === 'Verified' ? 'bg-blue-500' : 'bg-amber-500'} `} />
              <span className="text-[9px] font-black uppercase tracking-widest text-foreground/40">{node.status}</span>
            </div>
          </div>
          
          <div className="mt-6">
            <CardTitle className="text-2xl font-black text-foreground uppercase tracking-tighter flex items-center gap-2 group-hover:gap-4 transition-all">
              {node.name}
              <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all" />
            </CardTitle>
            <span className="text-xs font-mono text-foreground/40 font-bold">{node.handle}</span>
          </div>
        </CardHeader>

        <CardContent className="p-6 pt-4 flex-1 flex flex-col justify-between relative z-10">
          <p className="text-sm font-medium text-foreground/60 leading-relaxed mb-6">
            {node.description}
          </p>
          
          <div className="flex items-center justify-between border-t border-foreground/5 pt-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-foreground/30">
              {node.stats}
            </span>
            <div className="flex gap-1">
               <div className="w-1 h-1 rounded-full bg-foreground/20" />
               <div className="w-1 h-1 rounded-full bg-foreground/20" />
               <div className="w-1 h-1 rounded-full bg-foreground/10" />
            </div>
          </div>
        </CardContent>

        {/* Dynamic scanline on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ top: "-100%" }}
              animate={{ top: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[80px] bg-linear-to-b from-transparent via-foreground/5 to-transparent pointer-events-none z-0"
            />
          )}
        </AnimatePresence>
      </Card>
    </motion.a>
  );
};

export default function SocialSection() {
  const [networkLatency, setNetworkLatency] = useState("12ms");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkLatency(`${Math.floor(Math.random() * 15 + 5)}ms`);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col gap-8 font-inter p-1"
    >
      {/* 1. HUD HEADER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <motion.div variants={itemVariants} className="lg:col-span-8">
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
            Connectivity <span className="text-foreground/20">Matrix</span>
          </h3>
          <p className="text-lg text-foreground/60 font-medium max-w-2xl leading-relaxed">
            Real-time uplink nodes for professional synergy, open-source documentation, and encrypted communications.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="lg:col-span-4 bg-foreground/3 border border-foreground/10 rounded-4xl p-6 flex flex-col justify-between h-full relative overflow-hidden group"
        >
          <div className="flex items-center justify-between mb-8">
             <div className="flex flex-col">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30">Latency</span>
               <span className="text-2xl font-black font-mono">{networkLatency}</span>
             </div>
             <div className="p-3 rounded-2xl bg-foreground/5">
                <Wifi size={20} className="text-emerald-500 animate-pulse" />
             </div>
          </div>
          
          <div className="space-y-2">
             <div className="h-1.5 w-full bg-foreground/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="h-full bg-foreground/20"
                />
             </div>
             <span className="text-[8px] font-black uppercase tracking-widest text-foreground/30">Direct Uplink Stability: Optimal</span>
          </div>
        </motion.div>
      </div>

      {/* 2. NODES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {socialNodes.map((node) => (
          <SocialCard key={node.id} node={node} />
        ))}
      </div>

      {/* 3. FUTURE UPLINKS & FOOTER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-auto">
         <motion.div 
           variants={itemVariants}
           className="lg:col-span-12 flex items-center justify-between bg-linear-to-r from-brand-emerald/20 to-transparent border border-brand-emerald/20 p-8 rounded-[2.5rem] relative overflow-hidden group shadow-none"
         >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-brand-emerald/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
            
            <div className="flex items-center gap-6 relative z-10">
               <div className="p-4 rounded-3xl bg-foreground text-background shadow-2xl">
                  <Share2 size={24} />
               </div>
               <div className="flex flex-col">
                  <h4 className="text-xl font-black uppercase tracking-tight">Broadcast Profile</h4>
                  <p className="text-xs font-medium text-foreground/40">Sync identity metadata across external networks.</p>
               </div>
            </div>

            <button className="px-8 py-4 bg-foreground/5 border border-foreground/10 hover:bg-foreground hover:text-background rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all relative z-10">
               Initiate Handshake
            </button>
         </motion.div>
      </div>
    </motion.div>
  );
}
