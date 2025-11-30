"use client";

import { motion, cubicBezier } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react"; // Import type for better type safety

// --- DATA ---
interface SocialLink {
  icon: LucideIcon;
  name: string;
  href: string;
  a11yLabel: string; // Added a11yLabel
}

const socialLinks: SocialLink[] = [
  { 
    icon: Github, 
    name: "GitHub", 
    href: "https://github.com/yourusername",
    a11yLabel: "Link to GitHub profile"
  },
  { 
    icon: Linkedin, 
    name: "LinkedIn", 
    href: "https://linkedin.com/in/yourusername",
    a11yLabel: "Link to LinkedIn profile"
  },
  { 
    icon: Mail, 
    name: "Email", 
    href: "mailto:your@email.com",
    a11yLabel: "Send an email"
  },
];

interface Technology {
  name: string;
  href: string;
}

const technologies: Technology[] = [
  { name: "Next.js", href: "https://nextjs.org/" },
  { name: "Framer Motion", href: "https://www.framer.com/motion/" },
  // Optional: Add another one to test the separator
  // { name: "Tailwind CSS", href: "https://tailwindcss.com/" }, 
];

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: cubicBezier(0.25, 0.46, 0.45, 0.94) },
  },
};

const heartBeat = {
  // A small, subtle beat/pulse on initial view
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1], // Pulse effect
    transition: { 
      duration: 1.5, 
      ease: cubicBezier(0.42, 0, 0.58, 1),
      repeatType: "loop" as const,
      repeat: Infinity, 
      repeatDelay: 3 
    },
  },
};


// --- COMPONENT ---
interface FooterProps {
  developerName?: string;
}

export default function Footer({ developerName = "Your Name" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      // Added margin to viewport for earlier trigger on long pages
      viewport={{ once: true, margin: "0px 0px -50px 0px" }} 
      whileInView="visible"
      className="py-10 border-t border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT SECTION */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {/* Heartbeat animation added */}
              <motion.span variants={heartBeat} initial="initial" animate="animate">
                <Heart size={14} className="text-red-500 fill-red-500/70" />
              </motion.span>
              
              <span>Built with</span>

              {technologies.map((tech, i) => (
                <a
                  key={tech.name}
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  {tech.name}
                  {/* Better separator logic: only add separator if it's NOT the last item */}
                  {i < technologies.length - 1 && <span className="mx-1 text-muted-foreground">&</span>}
                </a>
              ))}
            </div>

            <p className="text-xs text-muted-foreground text-center md:text-left">
              &copy; {currentYear}{" "}
              <span className="font-semibold text-foreground">{developerName}</span>. All rights reserved.
            </p>
          </div>

          {/* SOCIALS */}
          <ul className="flex items-center gap-6">
            {socialLinks.map((item) => {
              // Destructure for cleaner access
              const { icon: Icon, name, href, a11yLabel } = item; 
              return (
                <motion.li
                  key={name} // Use name as key, or better, use a unique ID if available
                  whileHover={{ scale: 1.15 }} // Slightly increased hover scale
                  whileTap={{ scale: 0.9 }} // Slightly increased tap/click scale
                  transition={{ type: "spring", stiffness: 400, damping: 20 }} // Added transition for a snappier feel
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Accessibility enhancement: Add aria-label
                    aria-label={a11yLabel} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon size={24} /> {/* Increased icon size for better visibility/click target */}
                  </a>
                </motion.li>
              );
            })}
          </ul>

        </div>
      </div>
    </motion.footer>
  );
}