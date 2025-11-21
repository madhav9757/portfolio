"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github, Star, GitFork, ArrowUpRight } from "lucide-react"; // Imported ArrowUpRight for the demo button
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  stars?: number;
  forks?: number;
  // NEW: Added a color key for dynamic styling
  color: { from: string; to: string };
};

const projects: Project[] = [
  {
    title: "Discussy — Real-Time Community Platform",
    description:
      "A modern full-stack community platform with authentication, role-based access, real-time discussions, profile editing, and a clean responsive UI. Built using production-level architecture.",
    tech: ["Next.js", "React", "MongoDB", "Node.js", "JWT", "TailwindCSS"],
    github: "https://github.com/madhav9757/Discussy",
    demo: "#",
    stars: 10,
    forks: 2,
    color: { from: "from-blue-600", to: "to-indigo-500" }, // Dynamic colors
  },
  {
    title: "NexChat — Real-Time Chat App",
    description:
      "A lightning-fast real-time chat application featuring private chats, typing indicators, online status tracking, message delivery states, and a clean UI built with Next.js & WebSockets.",
    tech: ["Next.js", "WebSocket", "Node.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/madhav9757/NexChat",
    demo: "#",
    stars: 8,
    forks: 1,
    color: { from: "from-green-600", to: "to-teal-500" },
  },
  {
    title: "Movie Finder — OMDb Search App",
    description:
      "A beautiful and responsive movie search interface using OMDb API. Supports dynamic searching, movie cards, loading states, and polished UI.",
    tech: ["React", "JavaScript", "OMDb API", "CSS"],
    github: "https://github.com/madhav9757/react-Movie-Search",
    demo: "#",
    stars: 5,
    forks: 1,
    color: { from: "from-purple-600", to: "to-pink-500" },
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  // 3D Tilt Effect Logic (Retained and improved)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [4, -4]); // Reduced rotation for subtlety
  const rotateY = useTransform(mouseX, [-100, 100], [-4, 4]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.6, // Slightly longer duration
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      // Reduced scale for a more polished hover effect
      whileHover={{ scale: 1.01 }} 
    >
      <Card className="border-2 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 bg-card group h-full relative">
        {/* Dynamic Gradient Header */}
        <div className={`relative h-48 bg-gradient-to-br ${project.color.from}/30 ${project.color.to}/30 overflow-hidden`}>
          {/* Subtle Dynamic Glow */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.color.from}/60 ${project.color.to}/60 opacity-50`}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Big Project Number */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className={`text-8xl font-black text-white/10 dark:text-black/10`}
              whileHover={{ scale: 1.1, rotate: 3 }}
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
            >
              0{index + 1}
            </motion.div>
          </div>

          {/* Git Stats (Styled for contrast) */}
          <div className="absolute top-4 right-4 flex gap-2">
            {project.stars !== undefined && (
              <Badge className="bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors">
                <Star className="w-3 h-3 mr-1 text-yellow-400 fill-yellow-400" />
                {project.stars}
              </Badge>
            )}
            {project.forks !== undefined && (
              <Badge className="bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors">
                <GitFork className="w-3 h-3 mr-1" />
                {project.forks}
              </Badge>
            )}
          </div>
        </div>

        {/* Text Section */}
        <CardHeader className="pt-6 pb-3">
          <CardTitle className="text-2xl font-extrabold group-hover:text-primary transition-colors tracking-tight">
            {project.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm"> {/* Increased line-clamp to 3 */}
            {project.description}
          </p>

          {/* Tech Stack Badges (Enhanced Styling) */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
              >
                <Badge 
                  variant="outline"
                  className="text-xs px-3 py-1 font-medium border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>

          {/* Buttons (Polished) */}
          <div className="flex gap-3 pt-2 border-t border-border/50">
            <Button asChild size="lg" className="flex-1 group font-semibold shadow-md" style={{ background: `linear-gradient(to right, ${project.color.from.replace('from-', '#')} 0%, ${project.color.to.replace('to-', '#')} 100%)` }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Source Code
              </a>
            </Button>

            <Button asChild variant="secondary" size="lg" className="flex-1 group font-semibold border-2 border-primary/20 hover:border-primary/50">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ArrowUpRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Live Demo
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Projects() {
  return (
    // Added ID for Navbar scroll-spy and max-width for better centering
    <section id="projects" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16" // Increased margin-bottom
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
            <Briefcase size={16} /> My Featured Work
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter">
          Explore My Digital Creations
        </h2>
        <p className="text-muted-foreground text-xl max-w-3xl mx-auto"> {/* Increased text size */}
          A curated collection of my best full-stack applications, real-time systems, and modern UI engineering projects.
        </p>
      </motion.div>

      {/* Project Grid (Enhanced Responsiveness) */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 perspective-1000">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* View More */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16" // Increased margin-top
      >
        <Button asChild variant="outline" size="lg" className="group text-lg font-semibold px-8 py-6 border-2">
          <a href="https://github.com/madhavsemwal" target="_blank" rel="noopener noreferrer">
            View All {projects.length}+ Projects on GitHub
            <ExternalLink className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}

// NOTE: Since the Briefcase icon was used in the main component, I added the import here:
import { Briefcase } from "lucide-react";