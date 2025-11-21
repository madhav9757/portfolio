"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Added a unique ID for React keys and a style property for visual differentiation
const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    duration: "Jan 2023 - Present",
    achievements: [
      "Built **microservices** serving 100K+ daily users, ensuring high availability and scalability.",
      "Optimized database queries and API response times, **improving performance by 60%**.",
      "Led a team of 4 engineers, mentoring junior members and conducting code reviews.",
      "Implemented **CI/CD pipelines** using GitHub Actions, reducing deployment time by 80%.",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Solutions Co.",
    duration: "Jun 2021 - Dec 2022",
    achievements: [
      "Successfully delivered **10+ client projects** using the MERN stack.",
      "Developed robust features including **payment and authentication integration** (Stripe/Auth0).",
      "Refactored front-end bundling, resulting in a **40% reduction in page load time**.",
    ],
  },
];

export default function Experience() {
  return (
    // Added an ID here for the scroll-spy logic in the Navbar
    <section id="experience" className="py-16 md:py-24"> 
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold mb-10 text-center tracking-tight"
        >
          My Journey 🚀
        </motion.h2>

        {/* Experience Cards (Timeline Wrapper) */}
        {/* Relative positioning is key for the absolute timeline line */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-border/80 rounded-full md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} // Alternating side animation
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                // Grid layout for alternating left/right on medium screens and up
                className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 relative items-start"
              >
                {/* Timeline Marker (Circle on the vertical line) */}
                <div className="absolute left-4 top-1.5 md:top-0 h-8 w-8 rounded-full bg-background border-4 border-primary z-10 flex items-center justify-center md:left-1/2 md:-translate-x-1/2">
                    <Briefcase size={16} className="text-primary" />
                </div>
                
                {/* The card content container. Conditional class for left/right alignment */}
                <div 
                    className={i % 2 === 0 ? "md:col-start-1 md:text-right" : "md:col-start-2"}
                >
                    <Card 
                        className={`w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                    >
                        <CardHeader className="pb-3 md:pt-6">
                            {/* Role and Company */}
                            <CardTitle className="text-2xl font-bold text-primary">
                                {exp.role}
                            </CardTitle>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                {exp.company}
                            </h3>

                            {/* Duration */}
                            <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                <Calendar size={16} className="text-primary/70" />
                                <span>{exp.duration}</span>
                            </div>
                        </CardHeader>

                        <CardContent className="pt-3 md:pb-6">
                            {/* Achievements List */}
                            <ul className="space-y-2 text-base">
                                {exp.achievements.map((a, index) => (
                                    <li
                                        key={index}
                                        className="relative pl-6 text-muted-foreground leading-relaxed"
                                    >
                                        <div className="absolute left-0 top-[6px] h-1.5 w-1.5 rounded-full bg-primary/80" /> {/* Smaller, subtler bullet */}
                                        <p dangerouslySetInnerHTML={{ __html: a }} /> {/* Use dangerouslySetInnerHTML to allow **bolding** */}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}