"use client";

import { useState, useEffect } from "react";
import { Github as GitHubIcon, ExternalLink, Star, GitFork } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  language: string | null;
};

export default function GitHubMenu() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.github.com/users/madhav9757/repos?sort=updated&per_page=10")
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);
        return res.json();
      })
      .then((data: Repo[]) => {
        // Filter out forks and get top 5
        const filteredRepos = data.filter((r) => !r.fork).slice(0, 5);
        setRepos(filteredRepos);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Could not load repositories");
        setIsLoading(false);
      });
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-xl hover:bg-secondary/60 transition h-9 w-9 sm:h-10 sm:w-10"
          aria-label="Open GitHub menu"
        >
          <GitHubIcon size={16} className="sm:hidden" />
          <GitHubIcon size={18} className="hidden sm:block" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-[calc(100vw-2rem)] max-w-[320px] sm:w-80 bg-background border border-border rounded-xl shadow-xl p-0 overflow-hidden"
        sideOffset={8}
      >
        {/* Header */}
        <div className="p-3 sm:p-4 bg-muted/40 flex items-center gap-2 text-sm sm:text-base font-semibold">
          <GitHubIcon size={16} className="sm:hidden" />
          <GitHubIcon size={18} className="hidden sm:block" />
          <a
            href="https://github.com/madhav9757"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline truncate"
          >
            madhav9757
          </a>
        </div>

        {/* Repo List */}
        <div className="max-h-[60vh] sm:max-h-80 overflow-y-auto">
          {/* Error State */}
          {error && (
            <div className="p-3 sm:p-4">
              <p className="text-destructive text-xs sm:text-sm">{error}</p>
            </div>
          )}

          {/* Loading State */}
          {isLoading && !error && (
            <div className="p-3 sm:p-4 flex flex-col gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="animate-pulse space-y-2">
                  <div className="h-4 bg-secondary rounded w-3/4"></div>
                  <div className="h-3 bg-secondary/70 rounded w-full"></div>
                  <div className="h-3 bg-secondary/50 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          )}

          {/* Repos List */}
          {repos && !isLoading && (
            <div className="divide-y divide-border">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-3 sm:px-4 sm:py-3.5 transition hover:bg-secondary/50 group"
                >
                  {/* Repo Name */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <p className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {repo.name}
                    </p>
                    <ExternalLink 
                      size={14} 
                      className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" 
                    />
                  </div>

                  {/* Description */}
                  {repo.description ? (
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                      {repo.description}
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground italic mb-2">
                      No description
                    </p>
                  )}

                  {/* Stats & Language */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={12} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} />
                      {repo.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Empty State */}
          {repos && repos.length === 0 && !isLoading && (
            <div className="p-6 text-center">
              <p className="text-sm text-muted-foreground">No repositories found</p>
            </div>
          )}
        </div>

        <Separator />

        {/* Footer */}
        <a
          href="https://github.com/madhav9757"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 sm:p-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-primary hover:underline hover:bg-secondary/30 transition"
        >
          View full GitHub 
          <ExternalLink size={12} className="sm:hidden" />
          <ExternalLink size={14} className="hidden sm:block" />
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}