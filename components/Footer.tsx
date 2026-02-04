"use client";

import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  ArrowUp,
  Terminal,
  Sparkles,
  Code2,
  Coffee
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FooterProps {
  developerName?: string;
}

const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/madhav9757", 
    label: "GitHub",
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/in/madhavsemwal", 
    label: "LinkedIn",
    color: "hover:text-blue-600"
  },
  { 
    icon: Mail, 
    href: "mailto:madhavsemwal9@gmail.com", 
    label: "Email",
    color: "hover:text-red-500"
  }
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

const technologies = [
  { name: "React", href: "https://react.dev/" },
  { name: "Next.js", href: "https://nextjs.org/" },
  { name: "TypeScript", href: "https://www.typescriptlang.org/" },
  { name: "TailwindCSS", href: "https://tailwindcss.com/" },
  { name: "Framer Motion", href: "https://www.framer.com/motion/" }
];

export default function Footer({ developerName = "Madhav Semwal" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 border-t border-border/40 bg-muted/20">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1"
                >
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </motion.div>
              </div>
              <span className="text-2xl font-bold">{developerName}</span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Full-Stack Developer crafting exceptional digital experiences with modern technologies.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Code2 className="w-4 h-4" />
              <span>Building the future, one line at a time</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm hover:translate-x-1 inline-block"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Technologies</h3>
            <ul className="space-y-2">
              {technologies.map((tech) => (
                <li key={tech.name}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-blue-500 transition-colors text-sm hover:translate-x-1 inline-block"
                  >
                    → {tech.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Let's build something amazing together!
            </p>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl bg-muted hover:bg-muted/80 text-muted-foreground transition-all ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
            <Button
              onClick={() => scrollToSection("#contact")}
              size="sm"
              className="w-full rounded-xl bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40" />

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright & Credits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span>© {currentYear}</span>
              <span className="font-bold text-foreground">{developerName}</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.div>
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-600" />
            </div>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="rounded-full px-6 hover:border-blue-500 hover:bg-blue-500/5 group"
            >
              <span className="mr-2">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Extra Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pb-6 text-center"
        >
          <p className="text-xs text-muted-foreground">
            Designed & Developed by {developerName} • Powered by Next.js, React & TailwindCSS
          </p>
        </motion.div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="h-1 bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />
    </footer>
  );
}