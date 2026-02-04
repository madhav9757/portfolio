"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Filter, 
  Star, 
  GitFork, 
  ExternalLink, 
  Github, 
  Code2, 
  Sparkles,
  Zap,
  Layout,
  Terminal,
  Cpu,
  Globe,
  Blocks
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

export default function ProjectsPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"stars" | "name" | "updated">("stars");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/madhav9757/repos");
        if (!response.ok) throw new Error("Failed to fetch repositories");
        const data = await response.json();
        // Filter out forked repos and personal website
        setRepos(data.filter((r: any) => !r.fork && r.name !== "portfolio"));
      } catch (err) {
        setError("Could not load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const languageStats = useMemo(() => {
    if (!repos) return [];
    const counts: Record<string, number> = {};
    repos.forEach(r => r.language && (counts[r.language] = (counts[r.language] || 0) + 1));
    return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 6);
  }, [repos]);

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
      if (sortBy === "updated") return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      return 0;
    });
  }, [repos, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-background relative flex flex-col overflow-hidden selection:bg-primary/30">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 noise" />
      
      <Navbar />

      <main className="grow max-w-7xl mx-auto px-6 py-12 mt-12 relative">
        {/* Dynamic Background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.15),transparent_70%)]" 
          />
          <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Floating Shapes */}
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-40 right-20 text-primary/20"
          >
            <Blocks size={80} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }} 
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute bottom-40 left-20 text-purple-500/20"
          >
            <Cpu size={60} />
          </motion.div>
        </div>

        {/* Hero Section */}
        <header className="mb-12 text-center space-y-8 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold backdrop-blur-md mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
            Live Project Feed
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none"
            >
              CRAFTED <br />
              <span className="bg-linear-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent">
                WITH CODE
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed"
            >
              Exploring the boundaries of <span className="text-foreground">Full-Stack Development</span> and 
              <span className="text-foreground"> AI Engineering</span>, one repository at a time.
            </motion.p>
          </div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {languageStats.map(([lang, count], i) => (
              <motion.div
                key={lang}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Badge variant="outline" className="relative px-6 py-2.5 bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all rounded-2xl flex items-center gap-2 text-base shadow-lg">
                  <Code2 className="w-4 h-4 text-primary" />
                  <span className="font-bold">{lang}</span>
                  <span className="ml-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px]">{count}</span>
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </header>

        {/* Search & Futuristic Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative group max-w-5xl mx-auto mb-12"
        >
          {/* Glass Container */}
          <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-purple-500/20 to-blue-600/20 blur-3xl opacity-20 -z-10" />
          <div className="p-1 rounded-[2.5rem] bg-linear-to-b from-white/10 to-transparent border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch gap-2 bg-background/40 backdrop-blur-3xl rounded-[2.3rem] p-2">
              <div className="relative flex-1 group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input 
                  placeholder="Query projects by stack, name or tech..." 
                  className="pl-14 h-16 rounded-3xl bg-transparent border-none focus-visible:ring-0 text-xl font-medium placeholder:text-muted-foreground/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-2 px-2 pb-2 md:pb-0">
                <div className="h-10 w-px bg-border/50 hidden md:block" />
                <div className="flex items-center gap-3 bg-card/50 px-6 h-14 rounded-3xl border border-border/40 min-w-[200px]">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <select 
                    className="bg-transparent text-sm font-bold focus:outline-none cursor-pointer appearance-none pr-8 w-full"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                  >
                    <option value="stars">Popularity</option>
                    <option value="updated">Newest</option>
                    <option value="name">Alphabetical</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-center h-14 w-14 rounded-3xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                  <Terminal size={20} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Result Count Badge */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm font-bold text-muted-foreground">
            <Globe className="w-4 h-4 animate-spin-slow" />
            <span>EXPOSING {filteredRepos.length} REPOSITORIES</span>
          </div>
        </motion.div>

        {/* Repos Grid with Staggered Layout */}
        <div className="min-h-[600px] mt-24">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-[320px] rounded-[3rem] bg-card/30 animate-pulse border border-border/50" />
              ))}
            </div>
          ) : error ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-destructive/5 rounded-[3rem] border-2 border-dashed border-destructive/20 max-w-2xl mx-auto backdrop-blur-sm"
            >
              <Zap className="w-16 h-16 text-destructive mx-auto mb-6" />
              <h3 className="text-2xl font-black mb-4">{error}</h3>
              <Button onClick={() => window.location.reload()} size="lg" className="rounded-full px-10 font-bold">
                REFRESH SYSTEM
              </Button>
            </motion.div>
          ) : filteredRepos.length === 0 ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-40 bg-card/20 rounded-[4rem] border border-border/50 max-w-3xl mx-auto backdrop-blur-xl"
            >
              <Layout className="w-20 h-20 text-muted-foreground mx-auto mb-8 opacity-10" />
              <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase">No Signal Detected</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-sm mx-auto">Your query didn't match any archives in our neural network.</p>
              <Button onClick={() => setSearchTerm("")} variant="secondary" className="rounded-2xl px-8 font-bold text-primary">
                RESET TRANSMISSION
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredRepos.map((repo, i) => (
                  <motion.div
                    key={repo.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -30 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 15,
                      delay: i * 0.05 
                    }}
                    className="group"
                  >
                    <Link href={repo.html_url} target="_blank" className="block h-full">
                      <Card className="h-full border-border/40 bg-card/30 backdrop-blur-md hover:bg-card/60 hover:border-primary/40 hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.1)] transition-all duration-500 rounded-[3rem] overflow-hidden flex flex-col relative group">
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        {/* Status ID */}
                        <div className="absolute top-8 right-10 flex items-center gap-2">
                          <span className="text-[10px] font-black tracking-widest text-muted-foreground/50 group-hover:text-primary transition-colors">
                            ID: {repo.id.toString().slice(-4)}
                          </span>
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(var(--primary-rgb),1)] transition-all" />
                        </div>
                        
                        <CardHeader className="p-10 pb-6 relative">
                          <motion.div 
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            className="w-16 h-16 rounded-3xl bg-linear-to-br from-primary to-purple-600 p-0.5 mb-8 shadow-xl shadow-primary/20"
                          >
                            <div className="w-full h-full bg-background rounded-[1.4rem] flex items-center justify-center text-primary">
                              <Github className="w-8 h-8" />
                            </div>
                          </motion.div>
                          
                          <div className="space-y-2">
                            <CardTitle className="text-3xl font-black tracking-tighter truncate leading-tight">
                              {repo.name.toUpperCase()}
                            </CardTitle>
                            <div className="flex items-center gap-4 text-xs font-black tracking-widest text-primary/60">
                              <span className="flex items-center gap-1.5">
                                <Code2 size={14} />
                                {repo.language?.toUpperCase() || "CORE"}
                              </span>
                              <span className="w-1 h-1 rounded-full bg-border" />
                              <span className="flex items-center gap-1.5 uppercase">
                                <Sparkles size={14} />
                                LATEST
                              </span>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="px-10 pb-10 flex flex-col flex-1 relative">
                          <p className="text-muted-foreground font-medium text-lg line-clamp-3 mb-8 flex-1 leading-relaxed">
                            {repo.description || "Deploying professional architecture, scalable backend systems and high-fluidity user interfaces across this technical repository."}
                          </p>
                          
                          {/* Tags with Neon Hover */}
                          <div className="flex flex-wrap gap-2 mb-8">
                            {(repo.topics || []).slice(0, 4).map(topic => (
                              <Badge 
                                key={topic} 
                                variant="outline" 
                                className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest border-border/60 bg-muted/20 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors rounded-xl"
                              >
                                {topic}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between pt-8 border-t border-border/20">
                            <div className="flex items-center gap-6">
                              <div className="group/stat flex items-center gap-2">
                                <div className="p-2 rounded-xl bg-yellow-500/10 group-hover/stat:bg-yellow-500 group-hover/stat:text-white transition-all duration-300">
                                  <Star size={16} className="fill-current" />
                                </div>
                                <span className="font-black text-lg tracking-tighter">{repo.stargazers_count}</span>
                              </div>
                              <div className="group/stat flex items-center gap-2">
                                <div className="p-2 rounded-xl bg-primary/10 group-hover/stat:bg-primary group-hover/stat:text-white transition-all duration-300">
                                  <GitFork size={16} />
                                </div>
                                <span className="font-black text-lg tracking-tighter">{repo.forks_count}</span>
                              </div>
                            </div>
                            
                            <motion.div 
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-2 font-black text-xs tracking-[0.2em] text-primary"
                            >
                              OPEN ARCHIVE
                              <ExternalLink size={16} strokeWidth={3} />
                            </motion.div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </main>

      <Footer developerName="Madhav Semwal" />
      
      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
}