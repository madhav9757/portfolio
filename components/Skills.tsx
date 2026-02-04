"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Wrench,
  Layers,
  Sparkles,
  TrendingUp,
  Terminal,
  Zap,
  Cpu,
  Cloud
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skills = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Building responsive and performant user interfaces",
    stack: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Redux", level: 82 }
    ],
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    title: "Backend Development",
    icon: Layers,
    description: "Scalable server-side applications and APIs",
    stack: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 86 },
      { name: "REST APIs", level: 87 },
      { name: "Socket.io", level: 80 }
    ],
    color: "from-emerald-500 to-green-500",
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-500/10"
  },
  {
    title: "Database & Storage",
    icon: Database,
    description: "Data modeling and query optimization",
    stack: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 83 },
      { name: "Prisma", level: 78 },
      { name: "Redis", level: 72 }
    ],
    color: "from-orange-500 to-amber-500",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  {
    title: "AI & Machine Learning",
    icon: Sparkles,
    description: "Integrating AI models and LLMs",
    stack: [
      { name: "OpenAI API", level: 82 },
      { name: "Gemini API", level: 80 },
      { name: "Prompt Design", level: 85 },
      { name: "LangChain", level: 75 }
    ],
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Infrastructure and deployment automation",
    stack: [
      { name: "AWS (S3, EC2)", level: 78 },
      { name: "Docker", level: 75 },
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 76 }
    ],
    color: "from-slate-500 to-gray-500",
    iconColor: "text-slate-500",
    bgColor: "bg-slate-500/10"
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    description: "Development tools and best practices",
    stack: [
      { name: "VSCode", level: 92 },
      { name: "Responsive UI", level: 88 },
      { name: "TailwindCSS", level: 90 },
      { name: "Framer Motion", level: 83 }
    ],
    color: "from-rose-500 to-red-500",
    iconColor: "text-rose-500",
    bgColor: "bg-rose-500/10"
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl group">
        <CardHeader className="pb-4">
          {/* Icon & Title */}
          <div className="flex items-center justify-between mb-4">
            <motion.div 
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.5 }}
              className={`p-3 rounded-xl ${skill.bgColor} ${skill.iconColor} group-hover:scale-110 transition-transform`}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
            
            <Badge 
              variant="outline" 
              className="px-3 py-1 font-mono text-xs bg-background/50"
            >
              {Math.round(skill.stack.reduce((a, b) => a + b.level, 0) / skill.stack.length)}%
            </Badge>
          </div>

          <CardTitle className="text-xl mb-2">{skill.title}</CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {skill.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {skill.stack.map((tech, i) => (
            <motion.div 
              key={tech.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium">{tech.name}</span>
                <span className="text-muted-foreground font-mono text-xs">{tech.level}%</span>
              </div>
              
              <div className="relative h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-linear-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface SkillsProps {
  hideHeader?: boolean;
}

export default function Skills({ hideHeader = false }: SkillsProps) {
  return (
    <section className={`relative ${hideHeader ? 'py-0' : 'py-16'}`}>
      {/* Section Header */}
      {!hideHeader && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <Badge 
            variant="outline" 
            className="mb-6 px-4 py-2 border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full"
          >
            <Terminal className="w-4 h-4 mr-2" />
            Technical Stack
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Skills &{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Constantly evolving with the ecosystem, specializing in full-stack development
            with a focus on type-safety and scalability.
          </p>
        </motion.div>
      )}

      {/* Skills Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((skill, i) => (
          <SkillCard key={skill.title} skill={skill} index={i} />
        ))}
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border border-border/50">
          <Zap className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-medium">Always learning and adapting to new technologies</span>
        </div>
      </motion.div>
    </section>
  );
}