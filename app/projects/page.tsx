"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, GitFork, ExternalLink, Briefcase, ArrowLeft, Search, Filter } from "lucide-react";
import Link from "next/link";

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
};

// Simple Skeleton Component for better UX during loading
const ProjectCardSkeleton = () => (
  <Card className="h-full flex flex-col border rounded-3xl overflow-hidden shadow-md">
    <CardHeader className="pt-6 pb-2">
      <Skeleton className="h-6 w-3/4 mb-2" />
    </CardHeader>
    <CardContent className="flex flex-col gap-4 flex-1">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-11/12" />
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-5 w-16 rounded-full" />
        <Skeleton className="h-5 w-20 rounded-full" />
      </div>
      <div className="flex items-center gap-3 pt-2 border-t border-border/30">
        <Skeleton className="h-5 w-14 rounded-full" />
        <Skeleton className="h-5 w-14 rounded-full" />
      </div>
      <div className="mt-auto">
        <Skeleton className="h-10 w-full" />
      </div>
    </CardContent>
  </Card>
);

export default function ProjectsPage() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<"stars" | "updated" | "name">("stars");

  useEffect(() => {
    fetch(
      "https://api.github.com/users/madhav9757/repos?sort=updated&per_page=100"
    )
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);
        return res.json();
      })
      .then((data: Repo[]) => {
        const filtered = data.filter((r) => !r.fork);
        setRepos(filtered);
      })
      .catch(() => setError("Could not load repositories from GitHub."));
  }, []);

  // Use useMemo for efficient filtering and sorting based on search term
  const filteredRepos = useMemo(() => {
    if (!repos) return [];
    
    let filtered = repos;

    // Apply search filter
    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      filtered = repos.filter(
        (repo) =>
          repo.name.toLowerCase().includes(lowerCaseSearch) ||
          repo.description?.toLowerCase().includes(lowerCaseSearch) ||
          repo.topics?.some((topic) => topic.toLowerCase().includes(lowerCaseSearch))
      );
    }

    // Apply sorting
    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "stars":
          return b.stargazers_count - a.stargazers_count;
        case "name":
          return a.name.localeCompare(b.name);
        case "updated":
          return 0; // Already sorted by updated from API
        default:
          return 0;
      }
    });
  }, [repos, searchTerm, sortBy]);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Sticky Controls & Back Button */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:backdrop-blur-lg py-4 mb-8 border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2 hover:bg-primary/10 transition-colors">
              <ArrowLeft size={16} />
              Back
            </Button>
          </Link>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 flex-1 w-full">
            <div className="relative w-full sm:flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                type="text"
                placeholder="Search by name, description, or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 h-10 border-border/60 focus:border-primary transition-colors"
              />
            </div>
            
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="h-4 w-4 text-muted-foreground hidden sm:block" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "stars" | "updated" | "name")}
                className="flex h-10 w-full sm:w-auto rounded-md border border-border/60 bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors cursor-pointer"
              >
                <option value="stars">Most Stars</option>
                <option value="name">Name (A-Z)</option>
                <option value="updated">Recently Updated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
          <Briefcase size={16} /> All Projects
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
          My GitHub Repositories
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {error
            ? "Could not load repositories. Please try again."
            : repos
            ? `Explore ${filteredRepos.length} of my ${repos.length} open-source projects, sorted and searchable.`
            : "Browse through my open-source contributions — neatly sorted and beautifully presented."}
        </p>
      </motion.div>

      {/* Conditional Rendering & Repo Grid */}
      {error ? (
        <p className="text-center text-red-500 font-bold">{error}</p>
      ) : !repos ? (
        // Skeleton Loading State
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredRepos.length === 0 && searchTerm ? (
        // No Results State
        <p className="text-center text-muted-foreground text-lg">
          No repositories found matching "{searchTerm}". Try a different search term.
        </p>
      ) : (
        // Main Repo Grid
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRepos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group h-full flex flex-col border-2 border-border/50 hover:border-primary/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-background/80">
                <CardHeader className="pt-6 pb-3 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {repo.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col gap-4 flex-1 pt-4">
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {repo.description || "No description provided."}
                  </p>

                  {/* Topics */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {repo.topics.slice(0, 4).map((topic) => (
                        <Badge
                          key={topic}
                          variant="outline"
                          className="text-xs px-2.5 py-1 font-medium border-primary/40 bg-primary/5 hover:bg-primary/10 transition-colors"
                        >
                          {topic}
                        </Badge>
                      ))}
                      {repo.topics.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs px-2.5 py-1 font-medium border-border/40 bg-muted/50"
                        >
                          +{repo.topics.length - 4}
                        </Badge>
                      )}
                    </div>
                  )}

                  {/* Stats */}
                  <div className="flex items-center gap-4 pt-3 border-t border-border/40">
                    <div className="flex items-center gap-1.5 text-sm">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm">
                      <GitFork className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold">{repo.forks_count}</span>
                    </div>
                  </div>

                  {/* Buttons (View on GitHub & Live Demo) */}
                  <div className="mt-auto flex gap-2 pt-2">
                    {repo.homepage && (
                      <Button
                        asChild
                        className="flex-1 font-semibold group/btn"
                        variant="secondary"
                      >
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-1.5 group-hover/btn:rotate-12 transition-transform" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      asChild
                      className="flex-1 font-semibold group/btn"
                      variant="default"
                    >
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                        <ExternalLink className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}