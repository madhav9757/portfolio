"use client";

import { motion } from "framer-motion"; // Import motion
import { Github, Linkedin, Mail, Heart, Bolt } from "lucide-react"; // Import Bolt
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Framer Motion variants for the overall footer
  const footerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.footer
      className="py-10 md:py-12 border-t border-border/50" // Used border-t for a cleaner look than a separate Separator
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright & Built With */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            
            {/* Built With Message */}
            <p className="text-sm font-medium text-foreground flex items-center gap-1.5">
              <Heart size={16} className="text-red-500 fill-red-500/80" />
              Built with
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-semibold">
                Next.js
              </a> 
              & 
              <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-semibold">
                Framer Motion
              </a>
            </p>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground tracking-wide">
              © {currentYear} John Doe. All rights reserved. | <span className="font-semibold text-primary/80">Full-Stack Developer</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
              aria-label="GitHub"
            >
              <Github size={22} /> {/* Increased icon size */}
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-500 transition-colors transform hover:scale-110 duration-200" // Added specific color hover
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:john.doe@example.com"
              className="text-muted-foreground hover:text-green-500 transition-colors transform hover:scale-110 duration-200" // Added specific color hover
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}