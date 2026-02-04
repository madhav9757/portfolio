"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Zap, 
  Lightbulb, 
  TrendingUp, 
  User, 
  Heart,
  Coffee,
  Music,
  Plane,
  Book,
  Camera,
  Gamepad2,
  Target,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const keyFacts = [
  {
    icon: Code2,
    title: "Stack Expertise",
    description: "Next.js, TypeScript, PostgreSQL, Node.js & modern cloud infrastructure.",
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Zap,
    title: "AI & Automation",
    description: "Building RAG systems, LLM integrations & intelligent workflows.",
    color: "from-emerald-500 to-green-500",
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-500/10"
  },
  {
    icon: Lightbulb,
    title: "Development Philosophy",
    description: "Clean architecture, type-safety, and scalable patterns.",
    color: "from-amber-500 to-orange-500",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-500/10"
  },
  {
    icon: TrendingUp,
    title: "Primary Focus",
    description: "Building resilient, production-ready applications that scale.",
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10"
  }
];

const interests = [
  { icon: Coffee, label: "Coffee Enthusiast", color: "text-amber-600" },
  { icon: Music, label: "Music Lover", color: "text-purple-500" },
  { icon: Plane, label: "Travel", color: "text-blue-500" },
  { icon: Book, label: "Reading", color: "text-green-500" },
  { icon: Camera, label: "Photography", color: "text-pink-500" },
  { icon: Gamepad2, label: "Gaming", color: "text-red-500" }
];

const values = [
  {
    title: "Clean Code",
    description: "Writing maintainable, readable code that others love to work with"
  },
  {
    title: "Continuous Learning",
    description: "Always staying updated with the latest technologies and best practices"
  },
  {
    title: "User First",
    description: "Building products that solve real problems and delight users"
  },
  {
    title: "Collaboration",
    description: "Working effectively with teams and contributing to collective success"
  }
];

export default function About() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <Badge 
          variant="outline" 
          className="mb-6 px-4 py-2 border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full"
        >
          <User className="w-4 h-4 mr-2" />
          Get to Know Me
        </Badge>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          About{" "}
          <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Developer by day, problem solver always. Building digital experiences
          that make a difference.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Left Column: Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden sticky top-24">
            <CardContent className="p-6">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="relative w-32 h-32 mx-auto">
                  <Avatar className="w-full h-full border-4 border-background shadow-2xl">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Madhav" alt="Madhav Semwal" />
                    <AvatarFallback className="bg-linear-to-br from-blue-500 to-purple-600 text-white text-4xl font-bold">
                      MS
                    </AvatarFallback>
                  </Avatar>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                    className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-full blur-lg -z-10"
                  />
                  {/* Status Indicator */}
                  <div className="absolute bottom-2 right-2">
                    <div className="relative">
                      <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-green-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Name & Title */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-1">Madhav Semwal</h3>
                <p className="text-muted-foreground font-medium">Full Stack Developer</p>
                <p className="text-sm text-muted-foreground mt-1">📍 Pimpri, Maharashtra, IN</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 rounded-xl bg-muted/50">
                  <div className="text-2xl font-bold text-blue-500">3+</div>
                  <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-muted/50">
                  <div className="text-2xl font-bold text-purple-500">15+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </div>

              {/* Interests */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Interests
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {interests.map((interest, i) => {
                    const Icon = interest.icon;
                    return (
                      <motion.div
                        key={interest.label}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors group cursor-default"
                      >
                        <Icon className={`w-5 h-5 ${interest.color} group-hover:scale-110 transition-transform`} />
                        <span className="text-[10px] font-medium text-center">{interest.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  Available for opportunities
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column: Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Bio */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-linear-to-b from-blue-500 to-purple-600 rounded-full" />
                <h3 className="text-2xl font-bold">My Story</h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hey there! I'm a <span className="text-foreground font-semibold">motivated Full-Stack Developer</span> proficient in{" "}
                  <span className="text-foreground font-semibold">React, Next.js, and Node.js</span>. I have hands-on experience 
                  with SQL/NoSQL databases, RESTful APIs, and real-time communication, building scalable web applications 
                  that serve real users.
                </p>
                
                <p>
                  I'm particularly passionate about the intersection of{" "}
                  <span className="text-foreground font-semibold">web development and Generative AI</span>. Whether it's 
                  integrating OpenAI and Gemini-style APIs, designing effective prompts, or building intelligent UI workflows, 
                  I love exploring how AI can enhance user experiences and solve complex problems.
                </p>

                <p>
                  Currently pursuing my <span className="text-foreground font-semibold">B.E. in Computer Science</span> at 
                  Savitribai Phule Pune University, I'm constantly learning and applying new technologies. I believe in writing{" "}
                  <span className="text-foreground font-semibold">clean, maintainable code</span> and building products 
                  that make a real impact.
                </p>

                <div className="flex items-center gap-2 pt-4">
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                  <span className="text-foreground italic">
                    I love building products that make a difference!
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Facts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {keyFacts.map((fact, i) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all rounded-2xl h-full group">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-xl ${fact.bgColor} ${fact.iconColor} w-fit mb-4`}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <h4 className="font-bold text-lg mb-2 group-hover:text-blue-500 transition-colors">
                        {fact.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {fact.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Values */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-linear-to-b from-blue-500 to-purple-600 rounded-full" />
                <h3 className="text-2xl font-bold">Core Values</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, i) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <Target className="w-5 h-5 text-blue-500 mt-0.5 shrink-0 group-hover:rotate-180 transition-transform duration-500" />
                    <div>
                      <h4 className="font-semibold mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}