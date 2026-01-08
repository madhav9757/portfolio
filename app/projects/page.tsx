"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Star, 
  GitFork, 
  ExternalLink, 
  Briefcase, 
  ArrowLeft, 
  Search, 
  Filter, 
  Code2,
  Github,
  Globe
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

// --- Types ---
type Repo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  homepage?: string | null;
  topics?: string[];
  language: string | null;
  fork: boolean;
};

// --- Skeleton Loader ---
const ProjectCardSkeleton = () => (
  <Card className="h-full border rounded-3xl overflow-hidden shadow-sm">
    <CardHeader className="pt-6 pb-2"><Skeleton className="h-6 w-3/4" /></CardHeader>
    <CardContent className="space-y-4">
      <Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-2/3" />
      <div className="flex gap-2"><Skeleton className="h-5 w-12" /><Skeleton className="h-5 w-12" /></div>
      <div className="pt-4 border-t flex gap-4"><Skeleton className="h-4 w-10" /><Skeleton className="h-4 w-10" /></div>
      <Skeleton className="h-10 w-full rounded-xl" />
    </CardContent>
  </Card>
);

export default function ProjectsPage() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"stars" | "updated" | "name">("stars");

  useEffect(() => {
    fetch("https://api.github.com/users/madhav9757/repos?sort=updated&per_page=100")
      .then((res) => {
        if (!res.ok) throw new Error("GitHub limit reached or User not found");
        return res.json();
      })
      .then((data: Repo[]) => setRepos(data.filter((r) => !r.fork)))
      .catch(() => setError("Failed to sync with GitHub API."));
  }, []);

  // Language Stats Logic
  const languageStats = useMemo(() => {
    if (!repos) return [];
    const counts: Record<string, number> = {};
    repos.forEach(r => r.language && (counts[r.language] = (counts[r.language] || 0) + 1));
    return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
  }, [repos]);

  // Filtering & Sorting Logic
  const filteredRepos = useMemo(() => {
    if (!repos) return [];
    let filtered = repos.filter(r => 
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.topics?.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return [...filtered].sort((a, b) => {
      if (sortBy === "stars") return b.stargazers_count - a.stargazers_count;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0; // Default sorted by API
    });
  }, [repos, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Sticky Header */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Button variant="ghost" asChild size="sm" className="rounded-full">
            <Link href="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back</Link>
          </Button>

          <div className="flex-1 max-w-md relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input 
              placeholder="Search repositories..." 
              className="pl-10 h-9 rounded-full bg-muted/50 border-transparent focus:bg-background transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <select 
              className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="stars">Stars</option>
              <option value="name">Name</option>
              <option value="updated">Latest</option>
            </select>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-12">
        {/* Hero Section */}
        <header className="mb-16 text-center space-y-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center gap-2 mb-6">
            {languageStats.map(([lang, count]) => (
              <Badge key={lang} variant="outline" className="rounded-full px-3 py-1 bg-primary/5 border-primary/10">
                <Code2 className="w-3 h-3 mr-1 text-primary" /> {lang} <span className="ml-1 opacity-40 text-[10px]">{count}</span>
              </Badge>
            ))}
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">Code <span className="text-primary">&</span> Ship.</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A live feed of my open-source work, experimental tools, and production-ready templates.
          </p>
        </header>

        {/* Repos Grid */}
        <div className="min-h-[400px]">
          {error ? (
            <div className="text-center py-20 text-destructive">{error}</div>
          ) : !repos ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => <ProjectCardSkeleton key={i} />)}
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredRepos.map((repo) => (
                  <motion.div
                    key={repo.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="h-full flex flex-col group border-border/40 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all rounded-[2rem] overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start mb-2">
                          <div className="p-2 bg-muted rounded-xl group-hover:bg-primary/10 transition-colors">
                            <Github className="w-5 h-5 group-hover:text-primary" />
                          </div>
                          <div className="flex gap-3 text-xs font-bold text-muted-foreground">
                            <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-500 fill-amber-500" /> {repo.stargazers_count}</span>
                            <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> {repo.forks_count}</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl font-bold tracking-tight">{repo.name}</CardTitle>
                      </CardHeader>

                      <CardContent className="flex-1 flex flex-col space-y-4">
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {repo.description || "Experimental project with high-performance code architecture."}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5">
                          {repo.topics?.slice(0, 3).map(t => (
                            <Badge key={t} variant="secondary" className="text-[10px] uppercase font-bold tracking-wider px-2 py-0">#{t}</Badge>
                          ))}
                        </div>

                        <div className="mt-auto pt-4 flex gap-2">
                          <Button asChild className="flex-1 rounded-xl font-bold h-11 shadow-lg shadow-primary/10">
                            <a href={repo.html_url} target="_blank">Repository</a>
                          </Button>
                          {repo.homepage && (
                            <Button asChild variant="outline" size="icon" className="h-11 w-11 rounded-xl">
                              <a href={repo.homepage} target="_blank"><Globe className="w-4 h-4" /></a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}