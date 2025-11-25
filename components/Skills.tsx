"use client";

import { motion, easeOut, easeInOut } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Database,
  Wrench,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const data = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    color: "from-blue-500 to-cyan-500",
    level: 95,
  },
  {
    category: "Backend",
    icon: Layers,
    items: ["Node.js", "Express", "Python", "Django", "REST APIs"],
    color: "from-green-500 to-emerald-500",
    level: 90,
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
    color: "from-purple-500 to-pink-500",
    level: 85,
  },
  {
    category: "AI & ML",
    icon: Sparkles,
    items: ["OpenAI API", "Prompt Engineering", "LangChain", "Vector DBs"],
    color: "from-orange-500 to-red-500",
    level: 80,
  },
  {
    category: "DevOps",
    icon: Wrench,
    items: ["Git", "Docker", "AWS", "CI/CD", "Vercel"],
    color: "from-indigo-500 to-blue-500",
    level: 75,
  },
  {
    category: "Tools & More",
    icon: TrendingUp,
    items: ["Figma", "VS Code", "Postman", "Jest", "WebSockets"],
    color: "from-pink-500 to-rose-500",
    level: 88,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut, // FIXED
    },
  },
};

export default function Skills() {
  return (
    <section className="py-16 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: easeInOut, // FIXED
          }}
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            🛠️ Tech Stack
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {data.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div key={skill.category} variants={itemVariants}>
              <Card className="rounded-2xl border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 group h-full overflow-hidden relative">
                {/* Hover BG Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5`}
                  />
                </div>

                <CardHeader className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      className={`p-2.5 rounded-xl bg-gradient-to-br ${skill.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>

                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {skill.category}
                    </CardTitle>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                      <span>Proficiency</span>
                      <span className="font-semibold">{skill.level}%</span>
                    </div>

                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.2,
                          ease: easeOut, // FIXED
                        }}
                      />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative">
                  <ul className="flex flex-wrap gap-2">
                    {skill.items.map((tech, i) => (
                      <motion.li
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + i * 0.05,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <span className="px-3 py-1.5 text-sm rounded-lg border-2 bg-card hover:bg-primary/10 hover:border-primary transition-all cursor-default font-medium shadow-sm">
                          {tech}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                {/* Hover corner light */}
                <motion.div
                  className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${skill.color} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Footer Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, ease: easeOut }}
        className="mt-12 text-center"
      >
        <p className="text-muted-foreground text-lg">
          Always learning and expanding my skillset with the latest technologies
        </p>

        <motion.div
          className="mt-4 inline-flex items-center gap-2 text-primary"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: easeInOut }}
        >
          <TrendingUp className="w-5 h-5" />
          <span className="font-semibold">Continuously Growing</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
