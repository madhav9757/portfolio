"use client";

import * as React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Code2,
  Database,
  Wrench,
  Layers,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Terminal,
  CheckCircle2,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Architecting performant, accessible web applications.",
    stack: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    level: 95,
    color: "bg-blue-500",
  },
  {
    title: "Backend",
    icon: Layers,
    description: "Robust server-side logic and modular architecture.",
    stack: ["Node.js", "Express", "Python", "Go"],
    level: 90,
    color: "bg-emerald-500",
  },
  {
    title: "Database",
    icon: Database,
    description: "Data modeling and query optimization.",
    stack: ["PostgreSQL", "MongoDB", "Prisma", "Redis"],
    level: 85,
    color: "bg-orange-500",
  },
  {
    title: "AI Integration",
    icon: Sparkles,
    description: "Leveraging LLMs and vector embeddings.",
    stack: ["OpenAI", "LangChain", "Pinecone", "RAG"],
    level: 80,
    color: "bg-purple-500",
  },
  {
    title: "Cloud & DevOps",
    icon: Wrench,
    description: "Automated deployment and cloud infrastructure.",
    stack: ["Docker", "AWS", "CI/CD", "Terraform"],
    level: 75,
    color: "bg-slate-500",
  },
  {
    title: "Core Workflow",
    icon: TrendingUp,
    description: "Agile methodologies and testing patterns.",
    stack: ["Git", "Jest", "Playwright", "Storybook"],
    level: 88,
    color: "bg-pink-500",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function Skills() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 -z-10 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[80rem] h-[30rem] flex-none opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-[radial-gradient(circle_at_center,var(--primary)_0,transparent_70%)]" />
      </div>

      <div className="mb-16 flex flex-col items-start gap-4">
        <Badge variant="outline" className="rounded-full border-primary/30 bg-primary/5 px-4 py-1 text-primary">
          <Terminal className="mr-2 h-3.5 w-3.5" />
          Technical Stack
        </Badge>

        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Expertise & Tools
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Consistently evolving with the ecosystem, I specialize in building 
              end-to-end applications with a focus on type-safety and scalability.
            </p>
          </div>
          <Button variant="outline" size="sm" className="hidden md:flex rounded-full">
            Technical CV <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <TooltipProvider delayDuration={100}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.title} variants={item}>
                <Card className="group relative h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="cursor-help">
                            <Badge variant="secondary" className="font-mono text-xs">
                              {skill.level}%
                            </Badge>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                          Core Proficiency
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    <CardTitle className="text-xl">{skill.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {skill.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                        <span>Proficiency</span>
                        <span>Expert</span>
                      </div>
                      <Progress value={skill.level} className="h-1.5" />
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {skill.stack.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center rounded-md border border-border/50 bg-background/50 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted"
                        >
                          <CheckCircle2 className="mr-1.5 h-3 w-3 text-primary/60" />
                          {tech}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </TooltipProvider>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 flex flex-col items-center gap-8"
      >
        <div className="flex items-center gap-4 w-full">
          <Separator className="flex-1" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
            End of Overview
          </span>
          <Separator className="flex-1" />
        </div>

        <Button asChild variant="ghost" className="group rounded-full hover:bg-primary/5">
          <Link href="/skill" className="flex items-center">
            View full technological roadmap
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}