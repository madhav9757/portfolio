import React from "react";
import { Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/lib/data";

export default function NowSection() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-8 animate-in zoom-in-95 duration-500">
      <div className="relative">
        <div className="absolute inset-0 bg-brand-emerald/20 blur-3xl rounded-full" />
        <Activity size={80} className="text-brand-emerald relative z-10 animate-pulse" />
      </div>
      <h3 className="text-4xl font-black text-white">Current Focus</h3>
      <p className="text-2xl text-zinc-300 max-w-2xl leading-relaxed font-light">
         "{resumeData.personalInfo.focus}"
      </p>
      <div className="flex gap-4 mt-8">
        <Badge className="bg-brand-emerald/20 text-brand-emerald border-brand-emerald/30 text-lg px-6 py-3 rounded-full hover:bg-brand-emerald/30 transition-colors">Go Microservices</Badge>
        <Badge className="bg-brand-indigo/20 text-brand-indigo border-brand-indigo/30 text-lg px-6 py-3 rounded-full hover:bg-brand-indigo/30 transition-colors">AI Agents</Badge>
      </div>
    </div>
  );
}
