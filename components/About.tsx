"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, Lightbulb, TrendingUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const keyFacts = [
  {
    icon: Code,
    title: "Stack Expertise",
    description: "Next.js, Node.js, TypeScript, PostgreSQL, MongoDB.",
    color: "text-indigo-500",
  },
  {
    icon: Zap,
    title: "AI & Automation",
    description:
      "Generative AI, Prompt Engineering, OpenAI/Gemini APIs, LangChain.",
    color: "text-emerald-500",
  },
  {
    icon: Lightbulb,
    title: "Development Style",
    description: "Performance-first, clean architecture & TDD workflow.",
    color: "text-rose-500",
  },
  {
    icon: TrendingUp,
    title: "Goal",
    description: "Building scalable, intelligent & production-ready apps.",
    color: "text-yellow-600",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-extrabold mb-10 text-center tracking-tight"
      >
        Who is Madhav? 💡
      </motion.h2>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card className="rounded-2xl shadow-xl border-2 border-border/80 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border/80">
              {/* LEFT — Biography */}
              <div className="lg:col-span-2 p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Full-Stack & Generative AI
                </h3>

                <div className="space-y-4 text-base sm:text-lg leading-relaxed text-foreground/90">
                  <p>
                    I'm a motivated{" "}
                    <span className="font-semibold">Full-Stack Developer</span>{" "}
                    specialized in React, Next.js, Node.js and TypeScript. I
                    build fast, scalable and user-friendly applications using
                    SQL (PostgreSQL) and NoSQL (MongoDB).
                  </p>

                  <Separator className="my-4 lg:hidden" />

                  <p>
                    I’m deeply passionate about{" "}
                    <span className="font-semibold">Generative AI</span>,
                    working with prompt engineering, OpenAI & Gemini APIs,
                    LangChain, and automation-driven workflows to create
                    intelligent next-gen tools.
                  </p>

                  <p className="font-semibold text-sm text-muted-foreground">
                    I keep exploring new technologies, improving backend scaling
                    skills, and contributing to open-source.
                  </p>
                </div>
              </div>

              {/* RIGHT — Key Facts */}
              <div className="lg:col-span-1 p-6 sm:p-8 lg:p-10 bg-secondary/30">
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  Key Highlights
                </h3>

                <div className="space-y-6">
                  {keyFacts.map((fact, index) => (
                    <motion.div
                      key={fact.title}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 }}
                      className="flex items-start gap-4"
                    >
                      <fact.icon
                        size={26}
                        className={`mt-1 shrink-0 ${fact.color}`}
                      />

                      <div>
                        <h4 className="font-semibold text-base sm:text-lg">
                          {fact.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {fact.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
