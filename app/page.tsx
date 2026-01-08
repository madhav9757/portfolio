"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Mouse } from "lucide-react";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * SectionWrapper: Standardizes spacing and scroll behavior across the site.
 * Includes a subtle fade-in animation as sections enter the viewport.
 */
function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`scroll-mt-24 sm:scroll-mt-32 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
}

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
      {/* Texture Overlay: Gives a premium paper/grain effect */}
      <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('/noise.svg')]" />
      
      {/* Background Decorative Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[40%] -right-[5%] w-[30%] h-[30%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-10 space-y-32 sm:space-y-48 md:space-y-64 pb-32">
        <SectionWrapper id="home" className="pt-20 md:pt-32">
          <Hero />
          {/* Scroll Indicator */}
          <div className="hidden md:flex flex-col items-center justify-center mt-20 animate-bounce opacity-20">
             <Mouse size={20} />
             <div className="w-0.5 h-4 bg-foreground mt-2 rounded-full" />
          </div>
        </SectionWrapper>

        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>

        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>

        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>

        <SectionWrapper id="about">
          <About />
        </SectionWrapper>

        <SectionWrapper id="contact">
          <ContactForm />
        </SectionWrapper>
      </main>

      <footer className="py-12 border-t border-border/40 bg-muted/20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2025 <span className="font-bold text-foreground">Madhav.dev</span>. Built with Next.js & Framer Motion.
          </p>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
             <a href="#" className="hover:text-primary transition-colors">Twitter</a>
             <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}

function BackToTop() {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-[100]"
        >
          <Button
            size="icon"
            variant="outline"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-md border-border/50 shadow-2xl hover:bg-primary hover:text-primary-foreground transition-all group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}