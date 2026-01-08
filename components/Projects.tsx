"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  GitFork, 
  ExternalLink, 
  Briefcase, 
  Github, 
  ArrowRight,
  Loader2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  topics?: string[];
  fork: boolean;
  language?: string;
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
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/madhav9757/repos?sort=updated&per_page=50")
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);
        return res.json();
      })
      .then((data: Repo[]) => {
        const filtered = data
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(filtered.slice(0, 3));
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to sync with GitHub. Please try again later.");
      });
  }, []);

  if (error) {
    return (
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4 p-12 border-2 border-dashed rounded-3xl bg-destructive/5">
          <AlertCircle className="w-10 h-10 text-destructive" />
          <p className="text-destructive font-medium">{error}</p>
          <Button variant="outline" onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center mb-16"
      >
        <Badge variant="secondary" className="mb-4 px-4 py-1.5 rounded-full bg-primary/5 text-primary border-primary/10 hover:bg-primary/10 transition-colors">
          <Briefcase className="w-3.5 h-3.5 mr-2" />
          Engineering Portfolio
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Featured Open Source
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl">
          A selection of projects built with modern stacks, emphasizing clean architecture and scalability.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="wait">
          {!repos ? (
            Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="flex flex-col h-[320px] rounded-xl overflow-hidden">
                <CardHeader className="space-y-2">
                  <Skeleton className="h-6 w-2/3" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            ))
          ) : (
            repos.map((repo) => (
              <motion.div key={repo.id}  className="group">
                <Card className="h-full flex flex-col transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/5 rounded-xl">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="p-2.5 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Github className="w-5 h-5" />
                      </div>
                      <div className="flex gap-1.5">
                        <Badge variant="outline" className="text-[10px] font-semibold tracking-wider uppercase bg-background/50">
                          {repo.language || "TypeScript"}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold mt-4 leading-tight group-hover:text-primary transition-colors">
                      {repo.name.replace(/-/g, ' ')}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                      {repo.description || "Experimental project pushing the boundaries of modern web patterns."}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {(repo.topics?.slice(0, 3) || ["nextjs", "shadcn", "api"]).map((topic) => (
                        <span key={topic} className="text-[11px] font-medium text-muted-foreground/80 lowercase before:content-['#']">
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                        <span className="font-medium text-foreground">{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <GitFork className="w-4 h-4" />
                        <span className="font-medium text-foreground">{repo.forks_count}</span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button asChild variant="outline" className="w-full group/btn rounded-lg border-border/60 hover:border-primary hover:bg-primary/5 transition-all">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <span>Repository</span>
                        <ExternalLink className="w-4 h-4 ml-2 opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mt-16 space-y-4"
      >
        <Separator className="w-24 mb-4" />
        <Button asChild variant="ghost" className="group rounded-full px-6 py-6 hover:bg-primary/5 transition-all">
          <Link href="/projects" className="flex items-center gap-2 text-base font-medium">
            Explore Full Catalog 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}