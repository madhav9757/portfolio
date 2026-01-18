"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
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
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 800);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-pink-500/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section - Full Height */}
        <SectionWrapper id="home" className="pt-0">
          <Hero />
        </SectionWrapper>

        {/* Stats Section */}
        <SectionWrapper id="stats" className="py-20 md:py-32">
          <StatsSection />
        </SectionWrapper>

        {/* Projects Section */}
        <SectionWrapper id="projects" className="py-20 md:py-32">
          <Projects />
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper id="skills" className="py-20 md:py-32">
          <Skills />
        </SectionWrapper>

        {/* Experience Section */}
        <SectionWrapper id="experience" className="py-20 md:py-32">
          <Experience />
        </SectionWrapper>

        {/* Education Section */}
        <SectionWrapper id="education" className="py-20 md:py-32">
          <Education />
        </SectionWrapper>

        {/* About Section */}
        <SectionWrapper id="about" className="py-20 md:py-32">
          <About />
        </SectionWrapper>

        {/* Testimonials Section */}
        <SectionWrapper id="testimonials" className="py-20 md:py-32">
          <TestimonialsSection />
        </SectionWrapper>

        {/* Contact Section */}
        <SectionWrapper id="contact" className="py-20 md:py-32">
          <ContactForm />
        </SectionWrapper>
      </main>

      {/* Footer */}
      <Footer developerName="Madhav Semwal" />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Button
              size="icon"
              onClick={scrollToTop}
              className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl hover:shadow-blue-500/50 transition-all group"
            >
              <ArrowUp 
                size={20} 
                className="group-hover:-translate-y-1 transition-transform" 
              />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}