"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Zap, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.15
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  },
} as const;

export default function NowSection() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center py-20 text-center space-y-10"
    >
      <motion.div variants={itemVariants} className="relative group">
        <div className="absolute inset-0 bg-brand-emerald/20 blur-3xl rounded-full group-hover:bg-brand-emerald/30 transition-colors duration-700 animate-pulse" />
        <div className="relative z-10 p-6 rounded-3xl bg-zinc-900/50 border border-brand-emerald/20 shadow-2xl backdrop-blur-sm">
          <Activity size={80} className="text-brand-emerald animate-pulse" />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4">
        <h3 className="text-5xl font-black text-white tracking-tighter uppercase italic">
          Current <span className="text-brand-emerald">Focus</span>
        </h3>
        <div className="h-1 w-24 bg-brand-emerald/30 mx-auto rounded-full" />
      </motion.div>

      <motion.p 
        variants={itemVariants}
        className="text-2xl md:text-3xl text-zinc-300 max-w-3xl leading-relaxed font-light italic px-4"
      >
         "{resumeData.personalInfo.focus}"
      </motion.p>
      
      <motion.div 
        variants={itemVariants}
        className="flex flex-wrap items-center justify-center gap-6 mt-4"
      >
        <Badge className="bg-brand-emerald/10 text-brand-emerald border-brand-emerald/20 text-xl px-8 py-4 rounded-2xl hover:bg-brand-emerald/20 transition-all cursor-default shadow-lg shadow-brand-emerald/5 flex items-center gap-3">
          <Zap size={20} /> Go Microservices
        </Badge>
        <Badge className="bg-brand-indigo/10 text-brand-indigo border-brand-indigo/20 text-xl px-8 py-4 rounded-2xl hover:bg-brand-indigo/20 transition-all cursor-default shadow-lg shadow-brand-indigo/5 flex items-center gap-3">
          <Target size={20} /> AI Agents
        </Badge>
      </motion.div>
    </motion.div>
  );
}

