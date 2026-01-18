"use client";

import { motion, easeOut } from "framer-motion";
import Skills from "@/components/Skills";
import { BadgeCheck, Rocket, Star, ExternalLink, Sparkles } from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

export default function SkillPage() {
  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <Navbar />
      
      <main className="flex-grow relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 mt-16">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* PAGE HERO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <div className="flex justify-center mb-6">
              <BadgeItem icon={Sparkles} text="Technical Expertise" color="bg-primary/10 text-primary" delay={0.1} />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tighter">
              Stack <span className="text-primary">&</span> Expertise
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 leading-relaxed font-medium">
              A comprehensive deep-dive into my technical ecosystem. I specialize in building 
              high-performance web applications using the latest industry-standard technologies.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-8">
              <BadgeItem icon={BadgeCheck} text="Verified Skills" color="bg-blue-500/10 text-blue-600 dark:text-blue-400" delay={0.2} />
              <BadgeItem icon={Star} text="3+ Years Experience" color="bg-yellow-500/10 text-yellow-600 dark:text-yellow-500" delay={0.3} />
              <BadgeItem icon={Rocket} text="Always Improving" color="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" delay={0.4} />
            </div>
          </motion.div>

          {/* SKILLS COMPONENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card/30 backdrop-blur-md border border-border/50 rounded-[2.5rem] p-4 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-primary to-purple-500 opacity-50" />
            <Skills hideHeader={true} />
          </motion.div>

          {/* CTA SECTION */}
          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block p-1 rounded-3xl bg-gradient-to-b from-border/50 to-transparent mb-12">
              <div className="bg-card/80 backdrop-blur-sm rounded-[1.4rem] px-8 py-12 border border-border/50 shadow-2xl max-w-4xl mx-auto">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Ready to build something?
                </h3>
                <p className="text-muted-foreground mb-10 max-w-md mx-auto text-lg leading-relaxed">
                  I'm currently available for interesting freelance projects and collaborative opportunities. 
                  Let's create something extraordinary.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.a
                    href="/projects"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-bold shadow-xl shadow-primary/25 transition-shadow hover:shadow-primary/40"
                  >
                    View Projects <ExternalLink size={20} />
                  </motion.a>
                  
                  <motion.a
                    href="/#contact"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl bg-secondary text-secondary-foreground font-bold border border-border/50 hover:bg-secondary/80 transition-colors"
                  >
                    Get in Touch
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer developerName="Madhav Semwal" />
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