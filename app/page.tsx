"use client";

// app/page.tsx

import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/navbar/Navbar";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    // Responsive scroll margin for fixed navbar
    // scroll-mt-16 (64px) on mobile, scroll-mt-20 (80px) on tablet, scroll-mt-24 (96px) on desktop
    <section
      id={id}
      className={`scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      {/* NAVBAR - Fixed positioning handled in Navbar component */}
      <Navbar />

      {/* MAIN CONTENT */}
      {/* Responsive padding-top to account for fixed navbar */}
      {/* pt-20 (80px) mobile, pt-24 (96px) tablet, pt-28 (112px) desktop */}
      <main className="pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-24 md:pb-32 space-y-24 sm:space-y-32 md:space-y-48">
        <SectionWrapper id="home">
          <Hero />
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

      {/* Optional: Add a back to top button for better UX */}
      <BackToTop />
    </>
  );
}

// Optional: Back to top button component
function BackToTop() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
