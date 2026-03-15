"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Mail, PhoneCall, Github, Linkedin, GraduationCap, ArrowRight, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
} as const;

export default function IdentitySection() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      // h-full and flex-col ensure it stretches to fit its container without forcing a scroll
      className="h-full flex flex-col gap-6 font-sans overflow-hidden"
    >
      {/* ABOUT ME SECTION - COMPACT */}
      <motion.div variants={itemVariants} className="relative group shrink-0">
        <div className="absolute -left-4 top-0 w-1.5 h-full bg-[#00FF00] group-hover:scale-y-110 transition-transform duration-300" />
        
        <h3 className="text-2xl font-black flex items-center gap-3 mb-3 text-[#FFFF00] tracking-tight uppercase">
          <div className="p-2 rounded-xl bg-transparent border-2 border-[#00FF00]">
            <User className="text-[#00FF00]" size={20} />
          </div>
          Professional Summary
        </h3>
        
        {/* Adjusted text size to keep it from dominating vertical space */}
        <p className="text-base text-white leading-relaxed max-w-4xl font-medium tracking-wide">
          {resumeData.summary}
        </p>
      </motion.div>
      
      {/* GRID SECTION - TAKES REMAINING SPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
        
        {/* CONTACT INFO CARD */}
        <motion.div variants={itemVariants} className="h-full">
          {/* Made card background transparent */}
          <Card className="h-full bg-transparent border-white/20 text-white hover:border-[#00FFFF] hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] group transition-all duration-300 flex flex-col">
            <CardHeader className="pb-4 pt-5">
              <CardTitle className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tight">
                <div className="p-2 rounded-lg bg-transparent border border-[#00FFFF] text-[#00FFFF] group-hover:bg-[#00FFFF] group-hover:text-black transition-colors duration-300">
                  <Mail size={20} />
                </div>
                Contact Network
              </CardTitle>
              <CardDescription className="text-[#00FFFF] font-bold uppercase tracking-widest text-[10px] mt-1.5">
                Reach out for collaborations or inquiries
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 pt-0 flex-1 overflow-y-auto custom-scrollbar pr-2">
              <div className="flex flex-col gap-2 h-full justify-center">
                {[
                  { icon: Mail, label: "Email", value: resumeData.personalInfo.email, href: `mailto:${resumeData.personalInfo.email}` },
                  { icon: PhoneCall, label: "Phone", value: resumeData.personalInfo.phone, href: `tel:${resumeData.personalInfo.phone}` },
                  { icon: Github, label: "GitHub", value: "github.com/madhav9757", href: "https://github.com/madhav9757" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/madhavsemwal", href: "https://linkedin.com/in/madhavsemwal" },
                ].map((item, i) => (
                  <a 
                    key={i}
                    href={item.label === "Email" || item.label === "Phone" ? item.href : item.href}
                    target={item.label === "GitHub" || item.label === "LinkedIn" ? "_blank" : "_self"}
                    rel="noreferrer"
                    // Made list items transparent, snapping to neon borders on hover
                    className="flex items-center justify-between p-2.5 rounded-lg bg-transparent hover:bg-white/5 border border-white/10 hover:border-[#00FFFF] transition-all group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-md bg-transparent border border-white/20 group-hover/item:border-[#00FFFF] group-hover/item:text-[#00FFFF] transition-colors">
                        <item.icon size={16} />
                      </div>
                      <div>
                        <p className="text-[9px] text-[#FF00FF] uppercase tracking-widest font-black mb-0.5">{item.label}</p>
                        <p className="text-white font-bold tracking-wide text-xs">{item.value}</p>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-white/20 group-hover/item:text-[#00FFFF] group-hover/item:translate-x-1.5 transition-all" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* EDUCATION CARD */}
        <motion.div variants={itemVariants} className="h-full">
          {/* Made card background transparent */}
          <Card className="h-full bg-transparent border-white/20 text-white hover:border-[#FF00FF] hover:shadow-[0_0_30px_rgba(255,0,255,0.15)] group transition-all duration-300 flex flex-col">
            <CardHeader className="pb-4 pt-5">
              <CardTitle className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tight">
                <div className="p-2 rounded-lg bg-transparent border border-[#FF00FF] text-[#FF00FF] group-hover:bg-[#FF00FF] group-hover:text-black transition-colors duration-300">
                  <GraduationCap size={20} />
                </div>
                Academic Journey
              </CardTitle>
              <CardDescription className="text-[#FF00FF] font-bold uppercase tracking-widest text-[10px] mt-1.5">
                Current studies and academic background
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2 flex-1 border-l-2 border-[#FF00FF] ml-6 pl-6 relative overflow-y-auto custom-scrollbar flex flex-col justify-center gap-8">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="relative group/edu">
                  <div className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-black border-[3px] border-[#FF00FF] group-hover/edu:bg-[#FF00FF] transition-colors z-10" />
                  
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-lg font-black text-white tracking-wide uppercase group-hover/edu:text-[#FF00FF] transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-white font-bold tracking-wide flex items-center gap-2 text-sm">
                       <MapPin size={14} className="text-[#00FFFF]" />
                       {edu.institution}
                    </p>
                    <Badge className="mt-1 w-fit bg-transparent text-[#00FF00] border border-[#00FF00] font-mono font-bold tracking-widest py-0.5 px-2 uppercase text-[10px]">
                      {edu.period}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}