"use client";

import { motion, easeOut } from "framer-motion";
import Skills from "@/components/Skills";
import { BadgeCheck, Rocket, Star, ExternalLink } from "lucide-react";

export default function SkillPage() {
  return (
    <div className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* PAGE HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 tracking-tighter">
            Stack <span className="text-primary">&</span> Expertise
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
            I specialize in building high-performance web applications using the 
            latest industry-standard technologies. Here is my current toolkit.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            <BadgeItem icon={BadgeCheck} text="Verified Skills" color="bg-primary/10 text-primary" delay={0.2} />
            <BadgeItem icon={Star} text="3+ Years Experience" color="bg-yellow-500/10 text-yellow-600 dark:text-yellow-500" delay={0.3} />
            <BadgeItem icon={Rocket} text="Always Improving" color="bg-blue-500/10 text-blue-600 dark:text-blue-500" delay={0.4} />
          </div>
        </motion.div>

        {/* SKILLS COMPONENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-[2rem] p-4 sm:p-8"
        >
          <Skills />
        </motion.div>

        {/* CTA SECTION */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block p-1 rounded-2xl bg-muted/50 border border-border/50 mb-6">
            <div className="bg-background rounded-xl px-6 py-10 border border-border/50 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to build something?</h3>
              <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                See how I apply these skills in real-world scenarios across my portfolio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20"
                >
                  View Projects <ExternalLink size={18} />
                </motion.a>
                
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-bold"
                >
                  Get in Touch
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Sub-component for cleaner code
function BadgeItem({ icon: Icon, text, color, delay }: any) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`px-4 py-2 rounded-full ${color} text-xs sm:text-sm font-bold flex items-center gap-2 border border-current/10`}
    >
      <Icon className="w-4 h-4" /> 
      {text}
    </motion.span>
  );
}