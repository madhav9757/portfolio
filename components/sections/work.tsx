import React from "react";
import { Briefcase, Rocket, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { resumeData } from "@/lib/data";
import { getTechIcon } from "@/lib/tech-icons";

export default function WorkSection() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h3 className="text-2xl font-bold flex items-center gap-2 mb-6 text-brand-indigo">
          <Briefcase /> Experience
        </h3>
        <div className="space-y-8">
          {resumeData.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-brand-indigo/30">
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-brand-indigo shadow-[0_0_10px_rgba(var(--brand-indigo),0.5)]" />
              <h4 className="text-xl font-bold text-white tracking-wide">{exp.role}</h4>
              <p className="text-brand-indigo/80 text-sm mb-4 font-mono">{exp.period}</p>
              <ul className="list-none space-y-3 text-zinc-300">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-base leading-relaxed flex items-start gap-2">
                     <span className="text-brand-indigo mt-1.5 opacity-50">▹</span>
                     <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-white/10" />

      <div>
        <h3 className="text-2xl font-bold flex items-center gap-2 mb-6 text-brand-emerald">
          <Rocket /> Featured Projects
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {resumeData.projects.map((project, idx) => (
            <Card key={idx} className="bg-transparent border-white/10 text-white hover:bg-white/5 transition-all duration-300 hover:border-brand-emerald/30 group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-bold group-hover:text-brand-emerald transition-colors">{project.title}</CardTitle>
                    <CardDescription className="text-zinc-400 text-base mt-2">{project.subtitle}</CardDescription>
                  </div>
                  <Button size="icon" variant="ghost" className="rounded-full bg-white/5 hover:bg-brand-emerald/20 hover:text-brand-emerald text-zinc-400 transition-colors">
                    <ExternalLink size={18} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-zinc-300 list-none">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="leading-relaxed flex items-start gap-2">
                      <span className="text-brand-emerald mt-1.5 opacity-50">▹</span>
                      <span className="opacity-90">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 text-zinc-200 border-white/5 transition-colors px-3 py-1.5">
                      {getTechIcon(tech)}
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
