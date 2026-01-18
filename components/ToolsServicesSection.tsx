"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Rocket, 
  Wrench,
  Zap,
  Shield,
  TrendingUp,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Globe,
  Smartphone,
  Brain,
  Database,
  Cloud,
  LineChart,
  Settings,
  Lock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = [
  {
    id: 1,
    icon: Globe,
    title: "Web Application Development",
    description: "Full-stack web applications built with React, Next.js, and Node.js for optimal performance and user experience.",
    features: [
      "Responsive & Mobile-First Design",
      "SEO Optimization",
      "Progressive Web Apps (PWA)",
      "Real-time Features",
      "API Integration"
    ],
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    pricing: "From $3,000",
    timeline: "4-8 weeks",
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    id: 2,
    icon: Brain,
    title: "AI Integration & Development",
    description: "Integrate cutting-edge AI capabilities into your applications using OpenAI, LangChain, and custom LLM solutions.",
    features: [
      "Chatbot Development",
      "RAG Systems Implementation",
      "AI-Powered Features",
      "Natural Language Processing",
      "Custom AI Solutions"
    ],
    technologies: ["OpenAI", "LangChain", "Python", "Vector DBs"],
    pricing: "From $5,000",
    timeline: "6-10 weeks",
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    id: 3,
    icon: Smartphone,
    title: "Mobile-First Development",
    description: "Cross-platform mobile applications and responsive web apps that work seamlessly across all devices.",
    features: [
      "Cross-Platform Apps",
      "Native-like Performance",
      "Offline Functionality",
      "Push Notifications",
      "App Store Deployment"
    ],
    technologies: ["React Native", "Expo", "Firebase", "Redux"],
    pricing: "From $4,000",
    timeline: "8-12 weeks",
    color: "from-emerald-500 to-green-500",
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-500/10"
  },
  {
    id: 4,
    icon: Database,
    title: "Backend & API Development",
    description: "Scalable backend solutions with RESTful and GraphQL APIs, database design, and cloud infrastructure.",
    features: [
      "RESTful & GraphQL APIs",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "Microservices Architecture",
      "API Documentation"
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    pricing: "From $3,500",
    timeline: "4-8 weeks",
    color: "from-orange-500 to-amber-500",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  {
    id: 5,
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description: "Cloud infrastructure setup, CI/CD pipelines, containerization, and automated deployment workflows.",
    features: [
      "AWS/GCP/Azure Setup",
      "CI/CD Pipeline Implementation",
      "Docker & Kubernetes",
      "Monitoring & Logging",
      "Auto-scaling Configuration"
    ],
    technologies: ["AWS", "Docker", "GitHub Actions", "Terraform"],
    pricing: "From $2,500",
    timeline: "2-6 weeks",
    color: "from-slate-500 to-gray-500",
    iconColor: "text-slate-500",
    bgColor: "bg-slate-500/10"
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Improve your application's speed, efficiency, and user experience through comprehensive optimization.",
    features: [
      "Code Optimization",
      "Database Query Optimization",
      "Caching Strategies",
      "Bundle Size Reduction",
      "Performance Audits"
    ],
    technologies: ["Lighthouse", "Web Vitals", "Redis", "CDN"],
    pricing: "From $1,500",
    timeline: "1-3 weeks",
    color: "from-rose-500 to-red-500",
    iconColor: "text-rose-500",
    bgColor: "bg-rose-500/10"
  }
];

const tools = [
  { name: "VS Code", category: "Editor", icon: Code2, color: "text-blue-500" },
  { name: "Figma", category: "Design", icon: Palette, color: "text-purple-500" },
  { name: "GitHub", category: "Version Control", icon: Settings, color: "text-gray-900 dark:text-white" },
  { name: "Vercel", category: "Deployment", icon: Rocket, color: "text-black dark:text-white" },
  { name: "Docker", category: "Containerization", icon: Cloud, color: "text-blue-600" },
  { name: "Postman", category: "API Testing", icon: Zap, color: "text-orange-500" },
  { name: "MongoDB", category: "Database", icon: Database, color: "text-green-500" },
  { name: "Jira", category: "Project Management", icon: LineChart, color: "text-blue-600" }
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding your requirements, goals, and defining project scope.",
    icon: Sparkles
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Creating wireframes, mockups, and technical architecture plans.",
    icon: Palette
  },
  {
    step: "03",
    title: "Development",
    description: "Building your solution with clean code and best practices.",
    icon: Code2
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Comprehensive testing to ensure quality and reliability.",
    icon: Shield
  },
  {
    step: "05",
    title: "Deployment",
    description: "Launching your project with proper configuration and monitoring.",
    icon: Rocket
  },
  {
    step: "06",
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and continuous improvement.",
    icon: Wrench
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl overflow-hidden group">
        <CardHeader className="pb-4">
          {/* Icon */}
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className={`p-4 rounded-xl ${service.bgColor} ${service.iconColor} w-fit mb-4`}
          >
            <Icon className="w-8 h-8" />
          </motion.div>

          {/* Title */}
          <CardTitle className="text-2xl mb-2 group-hover:text-blue-500 transition-colors">
            {service.title}
          </CardTitle>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Pricing & Timeline */}
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="outline" className="bg-background/50">
              {service.pricing}
            </Badge>
            <Badge variant="outline" className="bg-background/50">
              {service.timeline}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Features */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Features Included
            </h4>
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium rounded-md bg-muted hover:bg-muted/80 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Button
            className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white group/btn"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function ToolsServicesSection() {
  return (
    <section className="relative py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <Badge 
          variant="outline" 
          className="mb-6 px-4 py-2 border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full"
        >
          <Wrench className="w-4 h-4 mr-2" />
          Services & Tools
        </Badge>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          What I{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Offer
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive development services powered by modern tools and
          cutting-edge technologies.
        </p>
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="services" className="max-w-7xl mx-auto">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 h-12">
          <TabsTrigger value="services" className="text-sm font-medium">Services</TabsTrigger>
          <TabsTrigger value="tools" className="text-sm font-medium">Tools</TabsTrigger>
          <TabsTrigger value="process" className="text-sm font-medium">Process</TabsTrigger>
        </TabsList>

        {/* Services Tab */}
        <TabsContent value="services" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </TabsContent>

        {/* Tools Tab */}
        <TabsContent value="tools" className="mt-0">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all rounded-2xl">
                    <CardContent className="p-6 text-center">
                      <Icon className={`w-12 h-12 mx-auto mb-3 ${tool.color}`} />
                      <h3 className="font-bold mb-1">{tool.name}</h3>
                      <p className="text-xs text-muted-foreground">{tool.category}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Card className="border-border/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 rounded-2xl inline-block">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">And many more tools</strong> in my arsenal to deliver the best solutions for your project!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Process Tab */}
        <TabsContent value="process" className="mt-0">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {process.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all rounded-2xl group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-6">
                          {/* Step Number */}
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                              {step.step}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Icon className="w-5 h-5 text-blue-500" />
                              <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                                {step.title}
                              </h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>

                          {/* Arrow */}
                          <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="w-6 h-6 text-blue-500" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg">Ready to Start Your Project?</p>
              <p className="text-sm text-muted-foreground">Let's discuss how I can help you achieve your goals</p>
            </div>
          </div>
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </motion.div>
    </section>
  );
}