"use client";

import { motion, easeOut } from "framer-motion";
import Skills from "@/components/Skills";
import { BadgeCheck, Rocket, Star } from "lucide-react";

export default function SkillPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* PAGE HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            My Skills
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto px-4">
            A deeper look into the technologies and tools I use to build modern,
            scalable and high-performance applications.
          </p>

          {/* Badges - Responsive Layout */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 px-4">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 
              Verified Skills
            </motion.span>

            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 
              3+ Years Experience
            </motion.span>

            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-500 text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 
              Always Improving
            </motion.span>
          </div>
        </motion.div>

        {/* FULL SKILLS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
        >
          <Skills />
        </motion.div>

        {/* CTA SECTION */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3">
            Want to know more?
          </h3>
          
          <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 max-w-md mx-auto">
            Check out my projects to see these skills in action.
          </p>

          <motion.a
            href="/projects"
            className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.a>

          {/* Optional: Additional CTAs for mobile */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              Get in touch
            </a>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <a
              href="/experience"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              View experience
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}