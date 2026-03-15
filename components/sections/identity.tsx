"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  PhoneCall,
  Github,
  Linkedin,
  GraduationCap,
  ArrowRight,
  MapPin,
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
        <div className="absolute -left-4 top-0 w-1.5 h-full bg-primary group-hover:scale-y-110 transition-transform duration-300" />

        <h3 className="text-4xl font-black flex items-center gap-4 mb-4 text-foreground tracking-tighter uppercase">
          <div className="p-3 rounded-2xl bg-transparent border-2 border-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]">
            <User className="text-primary" size={28} />
          </div>
          Professional Summary
        </h3>

        <p className="text-lg text-foreground/80 leading-relaxed max-w-5xl font-medium tracking-tight">
          {resumeData.summary}
        </p>
      </motion.div>

      {/* GRID SECTION - TAKES REMAINING SPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
        {/* CONTACT INFO CARD */}
        <motion.div variants={itemVariants} className="h-full">
          <Card className="h-full bg-transparent border-foreground/10 text-foreground hover:border-primary hover:shadow-xl group transition-all duration-300 flex flex-col">
            <CardHeader className="pb-6 pt-6 px-6">
              <CardTitle className="text-2xl font-black text-foreground flex items-center gap-4 uppercase tracking-tighter">
                <div className="p-2.5 rounded-xl bg-transparent border-2 border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                  <Mail size={24} />
                </div>
                Contact Network
              </CardTitle>
              <CardDescription className="text-foreground/50 font-black uppercase tracking-[0.3em] text-[9px] mt-2 px-0">
                Reach out for collaborations or inquiries
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-0 flex-1 overflow-y-auto custom-scrollbar pr-2">
              <div className="flex flex-col gap-3 h-full justify-center">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: resumeData.personalInfo.email,
                    href: `mailto:${resumeData.personalInfo.email}`,
                  },
                  {
                    icon: PhoneCall,
                    label: "Phone",
                    value: resumeData.personalInfo.phone,
                    href: `tel:${resumeData.personalInfo.phone}`,
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: "github.com/madhav9757",
                    href: "https://github.com/madhav9757",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "linkedin.com/in/madhavsemwal",
                    href: "https://linkedin.com/in/madhavsemwal",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={
                      item.label === "Email" || item.label === "Phone"
                        ? item.href
                        : item.href
                    }
                    target={
                      item.label === "GitHub" || item.label === "LinkedIn"
                        ? "_blank"
                        : "_self"
                    }
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-foreground/5 hover:bg-foreground/10 border-2 border-transparent hover:border-primary transition-all group/item shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-transparent border-2 border-foreground/10 group-hover/item:border-primary group-hover/item:text-primary transition-all">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-[9px] text-foreground/40 uppercase tracking-[0.2em] font-black mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-foreground font-black tracking-tight text-sm">
                          {item.value}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-foreground/20 group-hover/item:text-foreground group-hover/item:translate-x-2 transition-all"
                    />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* EDUCATION CARD */}
        <motion.div variants={itemVariants} className="h-full">
          <Card className="h-full bg-transparent border-foreground/10 text-foreground hover:border-primary hover:shadow-xl group transition-all duration-300 flex flex-col">
            <CardHeader className="pb-6 pt-6 px-6">
              <CardTitle className="text-2xl font-black text-foreground flex items-center gap-4 uppercase tracking-tighter">
                <div className="p-2.5 rounded-xl bg-transparent border-2 border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                  <GraduationCap size={24} />
                </div>
                Academic Journey
              </CardTitle>
              <CardDescription className="text-foreground/50 font-black uppercase tracking-[0.3em] text-[9px] mt-2 px-0">
                Current studies and academic background
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2 px-6 flex-1 border-l-4 border-primary/20 ml-8 pl-8 relative overflow-y-auto custom-scrollbar flex flex-col justify-center gap-10">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="relative group/edu">
                  <div className="absolute -left-[42px] top-2 w-4 h-4 rounded-full bg-background border-4 border-primary group-hover/edu:bg-primary transition-all z-10 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />

                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-black text-foreground tracking-tight uppercase group-hover/edu:text-foreground transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-foreground/70 font-black tracking-tight flex items-center gap-2 text-sm">
                      <MapPin size={16} className="text-foreground/40" />
                      {edu.institution}
                    </p>
                    <Badge className="mt-2 w-fit bg-foreground/5 text-foreground/60 border border-foreground/10 font-black tracking-[0.2em] py-0.5 px-2 uppercase text-[9px] rounded-md">
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
