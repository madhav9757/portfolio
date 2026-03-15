import React from "react";
import { User, Mail, PhoneCall, Github, Linkedin, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/lib/data";

export default function IdentitySection() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h3 className="text-2xl font-bold flex items-center gap-2 mb-4 text-brand-emerald">
          <User /> About Me
        </h3>
        <p className="text-lg text-zinc-300 leading-relaxed text-justify">
          {resumeData.summary}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-transparent border-white/10 text-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-brand-indigo flex items-center gap-2">
              <User size={18} /> Contact Info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-300">
            <div className="flex items-center gap-3">
              <Mail className="text-zinc-500" size={16} />
              <span>{resumeData.personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <PhoneCall className="text-zinc-500" size={16} />
              <span>{resumeData.personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Github className="text-zinc-500" size={16} />
              <a href="#" className="hover:text-brand-indigo transition-colors">{resumeData.personalInfo.github}</a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="text-zinc-500" size={16} />
              <a href="#" className="hover:text-brand-indigo transition-colors">{resumeData.personalInfo.linkedin}</a>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-transparent border-white/10 text-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-brand-purple flex items-center gap-2">
              <GraduationCap size={18} /> Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-brand-purple/30 pl-4 py-1">
                <h4 className="font-bold text-lg">{edu.degree}</h4>
                <p className="text-zinc-400 text-sm mt-1">{edu.institution}</p>
                <Badge variant="outline" className="mt-2 text-zinc-500 border-zinc-700 bg-black/20">{edu.period}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
