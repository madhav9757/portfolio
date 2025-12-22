"use client";
import { motion, Variants } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, CornerDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const socialIcons = [
    { icon: Github, href: "https://github.com/madhavsemwal", label: "GitHub", color: "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400" },
    { icon: Linkedin, href: "https://linkedin.com/in/madhavsemwal", label: "LinkedIn", color: "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" },
    { icon: Mail, href: "mailto:madhavsemwalofficial@gmail.com", label: "Email", color: "text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400" },
  ];

  const stats = [
    { number: "50+", label: "Projects Built" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Focus" }
  ];

  return (
    <motion.div
      id="home"
      className="relative py-20 md:py-32 max-w-5xl mx-auto text-center px-4 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute -top-1/3 -right-1/4 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/3 -left-1/4 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2], rotate: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Greeting */}
      <motion.div variants={itemVariants}>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide border border-primary/20">
          <CornerDownRight size={16} /> Welcome to my digital space
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1 variants={itemVariants} className="mt-6 text-6xl md:text-8xl font-extrabold leading-none tracking-tighter">
        Hi, I'm
        <span className="block mt-2">
          <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Madhav Semwal
          </span>
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.div variants={itemVariants} className="mt-8">
        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-4xl mx-auto">
          A <strong>Full-Stack Developer</strong> & Generative AI Enthusiast — crafting{" "}
          <motion.span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 inline-block" animate={{ scale: [1,1.03,1] }} transition={{ duration: 2.5, repeat: Infinity }}>scalable</motion.span>, modern, and{" "}
          <motion.span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 inline-block" animate={{ scale: [1,1.03,1] }} transition={{ duration: 2.5, repeat: Infinity, delay:0.8 }}>intelligent</motion.span> digital products.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div variants={itemVariants} className="mt-12 flex flex-wrap justify-center gap-5">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild size="lg" className="group px-8 py-7 text-lg font-semibold shadow-2xl shadow-primary/50 transition-all duration-300 hover:shadow-primary/80">
            <a href="#contact">
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild variant="outline" size="lg" className="px-8 py-7 text-lg font-medium border-2 hover:bg-secondary/50 transition-colors">
            <a href="/resume.pdf" download>
              <Download className="mr-2 w-5 h-5" /> Download Resume
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Social Icons */}
      <motion.div variants={itemVariants} className="mt-12 flex justify-center gap-4">
        {socialIcons.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.div key={social.label} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 + index*0.1, type: "spring", stiffness: 300, damping: 20 }} whileHover={{ scale:1.15, rotate:5 }} whileTap={{ scale:0.9 }}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className={`p-3 border-2 transition-all duration-300 hover:shadow-lg cursor-pointer`}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className={social.color}>
                      <Icon className="w-6 h-6" />
                    </a>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>{social.label}</TooltipContent>
              </Tooltip>
            </motion.div>
          )
        })}
      </motion.div>

      <Separator className="mt-12 max-w-md mx-auto bg-border/50" />

      {/* Stats */}
      <motion.div variants={itemVariants} className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div key={stat.label} className="text-center p-3" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 + index*0.15 }}>
            <motion.h3 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tighter">{stat.number}</motion.h3>
            <p className="text-sm md:text-base text-muted-foreground font-medium mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
