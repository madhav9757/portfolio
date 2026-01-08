"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Zap, 
  Lightbulb, 
  TrendingUp, 
  User, 
  ArrowUpRight,
  Terminal
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const keyFacts = [
  {
    icon: Code2,
    title: "Stack Expertise",
    description: "Next.js, TypeScript, PostgreSQL, & Node.js.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Zap,
    title: "AI & Automation",
    description: "RAG Systems, LLMs, & Agentic Workflows.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Lightbulb,
    title: "Development Style",
    description: "Clean architecture & Type-safe patterns.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: TrendingUp,
    title: "Primary Goal",
    description: "Building resilient, production-ready apps.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 max-w-7xl mx-auto px-6 lg:px-8 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 -z-10 h-full w-full opacity-20 [mask-image:radial-gradient(350px_250px_at_top_right,white,transparent)]">
        <div className="h-full w-full bg-primary/20" />
      </div>

      <div className="flex flex-col items-center text-center mb-16">
        <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/20 bg-primary/5 text-primary rounded-full">
          <User className="w-3.5 h-3.5 mr-2" />
          The Developer
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Who is Madhav?
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm rounded-[2rem] shadow-2xl shadow-primary/5">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border/60">
              
              {/* Left Column: Narrative Bio */}
              <div className="lg:col-span-7 p-8 md:p-12 lg:p-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-10 w-1 rounded-full bg-primary" />
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Full-Stack & Generative AI Developer
                  </h3>
                </div>

                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    I am a software engineer dedicated to bridge the gap between 
                    complex backend systems and intuitive user interfaces. Currently, 
                    my focus lies in <span className="text-foreground font-medium underline decoration-primary/30 decoration-2 underline-offset-4">Full-Stack Development</span> 
                    using the T3 stack and modern cloud infrastructures.
                  </p>

                  <p>
                    With the rise of <span className="text-foreground font-medium">Generative AI</span>, 
                    I've pivoted my research toward building AI-native products—leveraging 
                    vector databases, LangChain, and custom LLM orchestrations to automate 
                    business intelligence.
                  </p>

                  <div className="pt-6 flex flex-wrap gap-4">
                    <Button variant="secondary" size="sm" className="rounded-full">
                      <Terminal className="w-4 h-4 mr-2" />
                      View Tech Stack
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-full group">
                      Read more stories
                      <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Fact Grid */}
              <div className="lg:col-span-5 bg-muted/30 p-8 md:p-12">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground mb-10">
                  Key Highlights
                </h3>

                <div className="grid gap-8">
                  {keyFacts.map((fact, index) => (
                    <motion.div
                      key={fact.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group flex items-start gap-5"
                    >
                      <div className={`p-3 rounded-2xl transition-transform group-hover:scale-110 ${fact.bg} ${fact.color}`}>
                        <fact.icon size={22} strokeWidth={2.5} />
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-bold text-foreground leading-none">
                          {fact.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-snug">
                          {fact.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 p-6 rounded-2xl border border-dashed border-border bg-background/50">
                  <p className="text-xs font-medium text-muted-foreground italic text-center">
                    "I love experimenting with new tools to solve real-world problems 
                    through clean, impactful software."
                  </p>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      <div className="mt-12 flex justify-center opacity-40 grayscale transition-all hover:grayscale-0">
        <Separator className="w-1/2" />
      </div>
    </section>
  );
}