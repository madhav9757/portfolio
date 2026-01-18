"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  TrendingUp,
  Award,
  Zap,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    id: 1,
    role: "Web Developer",
    company: "Freelance / Remote",
    location: "Remote",
    duration: "2023 - Present",
    type: "Freelance",
    logo: "MS",
    website: "https://github.com/madhav9757",
    description: "Building responsive web applications and e-commerce solutions for clients worldwide.",
    achievements: [
      "Designed and launched a responsive e-commerce site with seamless user experience",
      "Developed comprehensive product catalogs with advanced filtering and search functionality",
      "Implemented interactive contact forms with email integration and validation",
      "Created dynamic media galleries with optimized image loading and lazy loading",
      "Built reusable component libraries to accelerate development across multiple projects",
      "Collaborated with clients to translate business requirements into technical solutions"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "TailwindCSS", "AWS S3"],
    highlights: ["E-commerce Development", "Client Management", "Full-Stack Solutions"]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Personal Projects",
    location: "Remote",
    duration: "2021 - 2023",
    type: "Self-Employed",
    logo: "PP",
    website: "https://github.com/madhav9757",
    description: "Developed multiple full-stack applications focusing on modern web technologies and AI integration.",
    achievements: [
      "Built NexChat - Real-time messaging app with user authentication and persistent chat history",
      "Created Discussly - Community forum platform with AWS S3 integration and moderator features",
      "Developed My-Movies - Movie data aggregator with Redux Toolkit state management",
      "Implemented Generative-AI experiments with OpenAI and Gemini API integrations",
      "Gained proficiency in React, Node.js, PostgreSQL, and MongoDB through hands-on projects",
      "Learned and applied modern development practices including Git, CI/CD, and Docker"
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "MongoDB", "Socket.io", "Redux", "OpenAI API"],
    highlights: ["Real-time Apps", "AI Integration", "Database Design"]
  }
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl overflow-hidden group">
        {/* Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <CardHeader className="relative pb-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            {/* Left: Company Logo & Info */}
            <div className="flex items-start gap-4">
              {/* Logo */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0"
              >
                {experience.logo}
              </motion.div>

              {/* Company & Role */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-500 transition-colors">
                  {experience.role}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-2">
                  <a 
                    href={experience.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-blue-500 transition-colors flex items-center gap-1"
                  >
                    {experience.company}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-xs">•</span>
                  <Badge variant="outline" className="text-xs">
                    {experience.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>

            {/* Right: Duration Badge */}
            <Badge 
              variant="outline" 
              className="self-start bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400 whitespace-nowrap"
            >
              <Calendar className="w-3 h-3 mr-2" />
              {experience.duration}
            </Badge>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <MapPin className="w-4 h-4" />
            {experience.location}
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-xs font-medium"
              >
                <Award className="w-3 h-3 text-blue-500" />
                {highlight}
              </div>
            ))}
          </div>
        </CardHeader>

        <CardContent className="relative space-y-6">
          {/* Achievements */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 text-sm leading-relaxed group/item"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-muted hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-500/20 border border-transparent transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section className="relative py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <Badge 
          variant="outline" 
          className="mb-6 px-4 py-2 border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full"
        >
          <Briefcase className="w-4 h-4 mr-2" />
          Career Journey
        </Badge>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Professional{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A timeline of my professional journey, highlighting key roles,
          achievements, and the technologies I've mastered along the way.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 -translate-x-1/2" />

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-10"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-background shadow-lg" />
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-md"
                />
              </motion.div>

              {/* Card */}
              <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                <ExperienceCard experience={experience} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-full px-8 hover:border-blue-500 hover:bg-blue-500/5 group"
        >
          <a href="/resume.pdf" download>
            <TrendingUp className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            View Complete Resume
          </a>
        </Button>
      </motion.div>
    </section>
  );
}