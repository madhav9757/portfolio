"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Award,
  Users,
  Coffee,
  TrendingUp,
  Star,
  Zap,
  Target,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    id: 1,
    icon: Award,
    label: "Projects Completed",
    value: 15,
    suffix: "+",
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description: "Successfully delivered projects"
  },
  {
    id: 2,
    icon: Users,
    label: "Happy Clients",
    value: 8,
    suffix: "+",
    color: "from-emerald-500 to-green-500",
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    description: "Clients worldwide"
  },
  {
    id: 3,
    icon: Coffee,
    label: "Cups of Coffee",
    value: 500,
    suffix: "+",
    color: "from-amber-500 to-orange-500",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-500/10",
    description: "Fuel for productivity"
  },
  {
    id: 4,
    icon: TrendingUp,
    label: "Years Experience",
    value: 3,
    suffix: "+",
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
    description: "Professional experience"
  },
  {
    id: 5,
    icon: Star,
    label: "GitHub Repos",
    value: 40,
    suffix: "+",
    color: "from-yellow-500 to-amber-500",
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    description: "Open source contributions"
  },
  {
    id: 6,
    icon: Target,
    label: "Success Rate",
    value: 100,
    suffix: "%",
    color: "from-rose-500 to-red-500",
    iconColor: "text-rose-500",
    bgColor: "bg-rose-500/10",
    description: "Project completion rate"
  }
];

// Counter Animation Component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return (
    <span className="inline-flex items-baseline">
      <span ref={ref} className="tabular-nums">0</span>
      <span>{suffix}</span>
    </span>
  );
}

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const Icon = stat.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group"
    >
      <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl h-full">
        {/* Gradient Background Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
        
        {/* Animated Icon Background */}
        <motion.div
          className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${stat.bgColor} opacity-20 blur-2xl`}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <CardContent className="relative p-6">
          <div className="flex items-start justify-between mb-4">
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className={`p-3 rounded-xl ${stat.bgColor} ${stat.iconColor}`}
            >
              <Icon className="w-6 h-6" />
            </motion.div>

            {/* Sparkle Effect */}
            <motion.div
              animate={{
                opacity: [0, 1, 0],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3
              }}
            >
              <Sparkles className="w-4 h-4 text-yellow-500" />
            </motion.div>
          </div>

          {/* Counter */}
          <div className="mb-2">
            <h3 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </h3>
          </div>

          {/* Label */}
          <p className="text-base font-semibold text-foreground mb-1">
            {stat.label}
          </p>

          {/* Description */}
          <p className="text-xs text-muted-foreground">
            {stat.description}
          </p>

          {/* Progress Bar */}
          <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
              className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section className="relative py-24">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

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
          <Zap className="w-4 h-4 mr-2" />
          Achievements
        </Badge>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Numbers That{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Matter
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A snapshot of my journey in building impactful digital solutions
          and contributing to the developer community.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={stat.id} stat={stat} index={index} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg">Growing Every Day</p>
              <p className="text-sm text-muted-foreground">These numbers keep increasing!</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}