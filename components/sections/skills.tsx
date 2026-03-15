import React from "react";
import { Cpu, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/lib/data";
import { getTechIcon } from "@/lib/tech-icons";

export default function SkillsSection() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h3 className="text-2xl font-bold flex items-center gap-2 mb-6 text-brand-purple">
        <Cpu /> Technical Arsenal
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(resumeData.competencies).map(([category, skills], idx) => (
          <Card key={idx} className="bg-transparent border-white/10 text-white hover:border-brand-purple/40 transition-colors">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-zinc-200 flex items-center gap-2">
                 <Terminal size={16} className="text-brand-purple" /> {category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <Badge key={i} className="flex items-center gap-1.5 bg-brand-purple/10 text-brand-purple border-brand-purple/20 px-3 py-1.5 font-medium hover:bg-brand-purple/20 transition-colors cursor-default">
                    {getTechIcon(skill)}
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
