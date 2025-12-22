"use client";

import { useState, useEffect } from "react";
import {
  Github as GitHubIcon,
  ExternalLink,
  Star,
  GitFork,
  Activity,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

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
          className="rounded-xl hover:bg-secondary/60 transition h-10 w-10 flex items-center justify-center"
          aria-label="Open GitHub menu"
        >
          <GitHubIcon size={20} className="text-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-[calc(100vw-2rem)] max-w-[360px] sm:w-80 bg-background border border-border rounded-xl shadow-xl p-0 overflow-hidden"
        sideOffset={8}
      >
        {/* Header */}
        <div className="p-4 bg-muted/40 flex items-center gap-2 text-base font-semibold animate-fadeIn">
          <GitHubIcon size={20} />
          <a
            href="https://github.com/madhav9757"
            target="_blank"
            rel="noopener noreferrer"
            className="truncate hover:underline"
          >
            madhav9757
          </a>
        </div>

        <div className="max-h-[60vh] sm:max-h-80 overflow-y-auto">
          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 text-destructive text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Loading */}
          {isLoading && !error && (
            <div className="p-4 flex flex-col gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="animate-pulse space-y-2">
                  <div className="h-4 bg-secondary rounded w-3/4"></div>
                  <div className="h-3 bg-secondary/70 rounded w-full"></div>
                  <div className="h-3 bg-secondary/50 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          )}

          {/* Repo List */}
          {repos && !isLoading && (
            <div className="divide-y divide-border">
              <AnimatePresence>
                {repos.map((repo) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="block px-4 py-3 transition hover:bg-secondary/50 group rounded-md"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-semibold text-sm text-foreground group-hover:text-primary line-clamp-1">
                        {repo.name}
                      </p>
                      <ExternalLink
                        size={16}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                    </div>

                    {repo.description ? (
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                        {repo.description}
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground italic mb-2">
                        No description
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      {repo.language && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <span
                            className="w-2 h-2 rounded-full inline-block"
                            style={{ backgroundColor: "#4ade80" }}
                          ></span>
                          {repo.language}
                        </Badge>
                      )}
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Star size={12} /> {repo.stargazers_count}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <GitFork size={12} /> {repo.forks_count}
                      </Badge>
                      {repo.fork && <Badge variant="secondary">Forked</Badge>}
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Empty */}
          {repos && repos.length === 0 && !isLoading && (
            <div className="p-6 text-center text-muted-foreground text-sm">
              No repositories found
            </div>
          )}
        </div>

        <Separator />

        {/* Footer */}
        <a
          href="https://github.com/madhav9757"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 flex items-center justify-center gap-2 text-sm font-medium text-primary hover:underline hover:bg-secondary/30 transition rounded-b-xl"
        >
          View full GitHub <ExternalLink size={16} />
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
