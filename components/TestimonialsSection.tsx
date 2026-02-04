"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  ThumbsUp,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    company: "TechStart Inc.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "Madhav's expertise in full-stack development is exceptional. He delivered our project ahead of schedule with outstanding quality. His attention to detail and problem-solving skills are top-notch.",
    rating: 5,
    project: "SaaS Platform Development",
    tags: ["React", "Node.js", "AWS"]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content: "Working with Madhav was a game-changer for our project. His ability to understand complex requirements and translate them into elegant solutions is remarkable. Highly recommended!",
    rating: 5,
    project: "E-commerce Platform",
    tags: ["Next.js", "TypeScript", "Stripe"]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "CTO at DataFlow",
    company: "DataFlow Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content: "Madhav brought our AI-powered application to life with incredible precision. His knowledge of modern web technologies and AI integration is impressive. A true professional!",
    rating: 5,
    project: "AI Analytics Dashboard",
    tags: ["React", "Python", "OpenAI"]
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Founder",
    company: "StartupHub",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    content: "The quality of work and communication throughout the project was excellent. Madhav is not just a developer, but a problem solver who truly cares about delivering value.",
    rating: 5,
    project: "Mobile-First Web App",
    tags: ["React Native", "Firebase", "Redux"]
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Marketing Director",
    company: "GrowthCo",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    content: "Our website's performance improved dramatically after Madhav's optimization work. The results exceeded our expectations, and our conversion rate increased by 40%!",
    rating: 5,
    project: "Website Optimization",
    tags: ["Next.js", "SEO", "Performance"]
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <Star
            className={`w-4 h-4 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300 dark:text-gray-600"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 rounded-3xl">
        {/* Quote Icon Background */}
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
        <Quote className="absolute top-6 right-6 w-16 h-16 text-blue-500/10" />

        <CardContent className="relative p-8 md:p-10">
          {/* Rating & Project */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <StarRating rating={testimonial.rating} />
            <Badge 
              variant="outline" 
              className="bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400"
            >
              {testimonial.project}
            </Badge>
          </div>

          {/* Testimonial Content */}
          <blockquote className="text-lg md:text-xl leading-relaxed text-foreground mb-8 relative">
            <span className="text-blue-500 text-4xl font-serif absolute -left-2 -top-4">"</span>
            <p className="relative z-10 italic">{testimonial.content}</p>
            <span className="text-blue-500 text-4xl font-serif absolute -right-2 -bottom-8">"</span>
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-14 h-14 border-2 border-blue-500/20">
              <AvatarImage src={testimonial.image} alt={testimonial.name} />
              <AvatarFallback className="bg-linear-to-br from-blue-500 to-purple-600 text-white font-bold">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h4 className="font-bold text-lg">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {testimonial.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
          className="mb-6 px-4 py-2 border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Client Feedback
        </Badge>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          What Clients{" "}
          <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Say
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Don't just take my word for it - hear from the people I've worked with
          about their experience and results.
        </p>
      </motion.div>

      {/* Testimonial Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <div className="relative h-[500px] md:h-[450px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => paginate(-1)}
            className="rounded-full w-12 h-12 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-blue-500 w-8"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => paginate(1)}
            className="rounded-full w-12 h-12 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-4 rounded-2xl bg-linear-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-linear-to-r from-green-500 to-emerald-600 flex items-center justify-center">
              <ThumbsUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg">100% Satisfaction Rate</p>
              <p className="text-sm text-muted-foreground">From all completed projects</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}