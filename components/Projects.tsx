"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  GitFork, 
  ExternalLink, 
  Github, 
  ArrowRight,
  Loader2,
  AlertCircle,
  Eye,
  TrendingUp,
  Code2,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  homepage?: string | null;
  topics?: string[];
  fork: boolean;
  language?: string;
  watchers_count: number;
  updated_at: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const ProjectCard = ({ repo }: { repo: Repo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <Card className="h-full flex flex-col transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 rounded-2xl overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-4">
            {/* Icon */}
            <motion.div 
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-xl bg-linear-to-br from-blue-500/10 to-purple-500/10 text-blue-500 group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white transition-all"
            >
              <Github className="w-6 h-6" />
            </motion.div>
            
            {/* Language Badge */}
            <Badge 
              variant="outline" 
              className="text-xs font-bold uppercase tracking-wider bg-background/50 border-blue-500/20"
            >
              {repo.language || "JavaScript"}
            </Badge>
          </div>
          
          <CardTitle className="text-xl font-bold leading-tight group-hover:text-blue-500 transition-colors line-clamp-1">
            {repo.name.replace(/-/g, ' ')}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-6">
            {repo.description || "A cutting-edge project showcasing modern web development practices and clean architecture patterns."}
          </p>
          
          {/* Topics */}
          {repo.topics && repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {repo.topics.slice(0, 3).map((topic) => (
                <span 
                  key={topic} 
                  className="px-2 py-1 text-[10px] font-medium rounded-md bg-muted hover:bg-muted/80 transition-colors"
                >
                  #{topic}
                </span>
              ))}
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6 mt-auto">
            <div className="flex items-center gap-2 group/stat hover:text-yellow-500 transition-colors">
              <Star className="w-4 h-4 group-hover/stat:fill-yellow-500" />
              <span className="font-medium">{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-2 group/stat hover:text-blue-500 transition-colors">
              <GitFork className="w-4 h-4" />
              <span className="font-medium">{repo.forks_count}</span>
            </div>
            <div className="flex items-center gap-2 group/stat hover:text-green-500 transition-colors">
              <Eye className="w-4 h-4" />
              <span className="font-medium">{repo.watchers_count}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button 
              asChild 
              className="flex-1 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/20 group/btn"
            >
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <span>View Code</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            {repo.homepage && (
              <Button 
                asChild 
                variant="outline" 
                size="icon" 
                className="rounded-xl hover:border-blue-500 hover:bg-blue-500/5"
              >
                <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectSkeleton = () => (
  <Card className="h-full flex flex-col rounded-2xl overflow-hidden">
    <CardHeader>
      <div className="flex justify-between items-start mb-4">
        <Skeleton className="h-12 w-12 rounded-xl" />
        <Skeleton className="h-6 w-20" />
      </div>
      <Skeleton className="h-6 w-3/4 mb-2" />
    </CardHeader>
    <CardContent className="flex-1 flex flex-col">
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-6" />
      <div className="flex gap-2 mb-6">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-16" />
      </div>
      <div className="mt-auto">
        <Skeleton className="h-10 w-full" />
      </div>
    </CardContent>
  </Card>
);

export default function Projects() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/madhav9757/repos?sort=updated&per_page=100")
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);
        return res.json();
      })
      .then((data: Repo[]) => {
        const filtered = data
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(filtered.slice(0, 6)); // Show top 6 projects
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load projects. Please try again later.");
      });
  }, []);

  if (error) {
    return (
      <section className="py-24">
        <div className="flex flex-col items-center justify-center space-y-4 p-12 border-2 border-dashed rounded-3xl bg-destructive/5">
          <AlertCircle className="w-12 h-12 text-destructive" />
          <p className="text-destructive font-medium text-center">{error}</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 relative">
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
          <Code2 className="w-4 h-4 mr-2" />
          Featured Work
        </Badge>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Recent{" "}
          <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of projects showcasing modern web development, 
          clean architecture, and cutting-edge technologies.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {!repos ? (
          Array.from({ length: 6 }).map((_, i) => (
            <ProjectSkeleton key={i} />
          ))
        ) : (
          repos.map((repo) => <ProjectCard key={repo.id} repo={repo} />)
        )}
      </motion.div>

      {/* View All Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex justify-center mt-16"
      >
        <Button 
          asChild 
          size="lg" 
          variant="outline"
          className="rounded-full px-8 hover:border-blue-500 hover:bg-blue-500/5 group"
        >
          <Link href="/projects">
            Explore All Projects
            <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}