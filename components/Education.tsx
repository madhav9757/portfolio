"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen,
  Award,
  TrendingUp
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = {
  degree: "B.E. in Computer Science",
  institution: "Savitribai Phule Pune University",
  location: "Pune, Maharashtra, India",
  duration: "2023 - 2027",
  status: "Ongoing",
  description: "Pursuing Bachelor of Engineering in Computer Science with focus on modern web technologies, algorithms, and software engineering principles.",
  highlights: [
    "Full-Stack Web Development",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Software Engineering Principles",
    "Cloud Computing & DevOps",
    "AI & Machine Learning Fundamentals"
  ],
  achievements: [
    "Building real-world projects alongside academic curriculum",
    "Active participation in coding communities and open-source",
    "Continuous learning through online courses and certifications",
    "Applying theoretical knowledge to practical freelance projects"
  ]
};

export default function Education() {
  return (
    <section className="relative py-24">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <Badge 
          variant="outline" 
          className="mb-6 px-4 py-2 border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full"
        >
          <GraduationCap className="w-4 h-4 mr-2" />
          Academic Background
        </Badge>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Education{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            & Learning
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Combining academic excellence with hands-on practical experience
          to build a strong foundation in computer science.
        </p>
      </motion.div>

      {/* Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 rounded-3xl overflow-hidden group">
          {/* Gradient Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <CardHeader className="relative pb-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              {/* Left: Institution Logo & Info */}
              <div className="flex items-start gap-4">
                {/* Logo */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg flex-shrink-0"
                >
                  <GraduationCap className="w-8 h-8" />
                </motion.div>

                {/* Degree & Institution */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-purple-500 transition-colors">
                    {education.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-2">
                    <span className="font-semibold text-foreground flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {education.institution}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {education.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Duration & Status */}
              <div className="flex flex-col gap-2">
                <Badge 
                  variant="outline" 
                  className="self-start bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400 whitespace-nowrap"
                >
                  <Calendar className="w-3 h-3 mr-2" />
                  {education.duration}
                </Badge>
                <Badge 
                  variant="outline" 
                  className="self-start bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400"
                >
                  <TrendingUp className="w-3 h-3 mr-2" />
                  {education.status}
                </Badge>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {education.description}
            </p>
          </CardHeader>

          <CardContent className="relative space-y-6">
            {/* Course Highlights */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Key Focus Areas
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {education.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-2 text-xs font-medium rounded-lg bg-muted hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10 hover:border-purple-500/20 border border-transparent transition-all cursor-default text-center"
                  >
                    {highlight}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Learning Approach
              </h4>
              <ul className="space-y-2">
                {education.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 text-sm leading-relaxed group/item"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border border-border/50">
          <BookOpen className="w-5 h-5 text-purple-500" />
          <span className="text-sm font-medium">Expected Graduation: 2027</span>
        </div>
      </motion.div>
    </section>
  );
}
