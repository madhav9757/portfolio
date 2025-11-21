import React from 'react';
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Wrench,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";

// The data structure remains the same
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

// Helper component replacements for Shadcn/UI components
// Mimics Shadcn's Card structure using pure Tailwind CSS
const Card = ({ children, className = "" }) => (
  <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-bold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const App = () => {
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
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="skills" className="py-16 relative min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 text-sm font-medium mb-4">
              🛠️ Tech Stack
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {data.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.category} variants={itemVariants}>
                <Card className="border-2 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 group h-full overflow-hidden relative transform hover:-translate-y-1">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5`}
                    />
                  </div>

                  <CardHeader className="relative">
                    <div className="flex items-center gap-4 mb-3">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <CardTitle className="text-2xl font-extrabold group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                        {skill.category}
                      </CardTitle>
                    </div>

                    {/* Proficiency Bar */}
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                        <span>Proficiency</span>
                        <span className="font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: 0.3,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative">
                    <ul className="flex flex-wrap gap-2.5">
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
                          whileHover={{ scale: 1.05, y: -1 }}
                          className="cursor-default"
                        >
                          <span className="px-4 py-1.5 text-sm rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700/50 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                            {tech}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>

                  {/* Hover Effect Corner */}
                  <motion.div
                    className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${skill.color} rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                  />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Always learning and expanding my skillset with the latest technologies
          </p>
          <motion.div
            className="mt-4 inline-flex items-center gap-2 text-indigo-500 dark:text-indigo-400 font-bold"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <TrendingUp className="w-5 h-5" />
            <span className="text-lg">Continuously Growing</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default App;