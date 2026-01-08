"use client";

import { motion, Variants } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ArrowRight, 
  Sparkles, 
  MousePointer2,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.3 } 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const socialLinks = [
  { icon: Github, href: "https://github.com/madhavsemwal", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/madhavsemwal", label: "LinkedIn" },
  { icon: Mail, href: "mailto:madhavsemwalofficial@gmail.com", label: "Email" },
];

const stats = [
  { number: "50+", label: "Projects" },
  { number: "3+", label: "Years Exp." },
  { number: "100%", label: "Delivery" }
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background px-6">
      {/* Refined Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <motion.div
        id="home"
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <Badge variant="outline" className="px-4 py-1.5 border-primary/20 bg-primary/5 text-primary backdrop-blur-md rounded-full">
            <Sparkles className="w-3.5 h-3.5 mr-2 fill-primary/20" />
            Available for new opportunities
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-foreground">
            Building digital <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-600">
              experiences that matter.
            </span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm <span className="text-foreground font-semibold">Madhav Semwal</span>. 
            A Full-Stack Engineer specializing in high-performance web applications 
            and intelligent AI-driven solutions.
          </p>
        </motion.div>

        {/* Primary Actions */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="h-12 px-8 rounded-full shadow-lg shadow-primary/20 group">
            <a href="#contact">
              Let's Talk
              <Rocket className="ml-2 w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-full border-border/60 backdrop-blur-sm">
            <a href="/resume.pdf" download>
              <Download className="mr-2 w-4 h-4" /> 
              Resume
            </a>
          </Button>
        </motion.div>

        {/* Social & Stats Container */}
        <motion.div variants={itemVariants} className="mt-16 space-y-8">
          <div className="flex items-center justify-center gap-3">
            <TooltipProvider>
              {socialLinks.map((social) => (
                <Tooltip key={social.label}>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      asChild 
                      className="rounded-full w-12 h-12 border border-border/40 hover:border-primary/50 hover:bg-primary/5 transition-all"
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{social.label}</TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>

          <div className="relative pt-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-border" />
            <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-lg mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.number}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}