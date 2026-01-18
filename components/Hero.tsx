"use client";

import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Sparkles, 
  Rocket,
  ArrowRight,
  MousePointer2,
  Code2,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.12, 
      delayChildren: 0.3 
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

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
  },
];

const stats = [
  { number: "15+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" }
];

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Code Snippets */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-[10%] opacity-20"
        >
          <Code2 className="w-16 h-16 text-blue-500" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-[15%] opacity-20"
        >
          <Zap className="w-12 h-12 text-purple-500" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-[20%] opacity-20"
        >
          <Sparkles className="w-14 h-14 text-pink-500" />
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div  className="flex justify-center mb-8">
          <Badge 
            variant="outline" 
            className="px-5 py-2.5 border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 backdrop-blur-sm rounded-full hover:bg-blue-500/20 transition-colors cursor-pointer group"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-500 rounded-full mr-3"
            />
            <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            <span className="font-medium">Available for opportunities</span>
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.div  className="space-y-6 mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
            Building Digital
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Experiences
              </span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hi, I'm <span className="text-foreground font-semibold">Madhav Semwal</span>. 
            A Full-Stack Engineer specializing in building{" "}
            <span className="text-blue-500 font-medium">high-performance web applications</span> and{" "}
            <span className="text-purple-500 font-medium">AI-driven solutions</span>.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="h-14 px-8 text-base bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all group"
            >
              Let's Talk
              <Rocket className="ml-2 w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 text-base rounded-full border-2 hover:border-blue-500 hover:bg-blue-500/5 transition-all group"
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform" /> 
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex items-center justify-center gap-4 mb-16"
        >
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground transition-all ${social.color}`}
                aria-label={social.label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent mb-8" />
          
          <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-2xl mx-auto pt-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="text-center group cursor-default"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <MousePointer2 className="w-5 h-5" />
            <div className="text-xs uppercase tracking-widest">Scroll</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}