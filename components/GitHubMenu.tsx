"use client";

import { useEffect, useState } from "react";
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  Circle,
  ChevronRight,
  RefreshCcw,
  AlertTriangle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

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
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchRepos = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(
        "https://api.github.com/users/madhav9757/repos?sort=updated&per_page=10"
      );
      if (!res.ok) throw new Error();
      const data: Repo[] = await res.json();
      setRepos(data.filter((r) => !r.fork).slice(0, 5));
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-border/50 bg-background/70 backdrop-blur hover:bg-muted"
        >
          <Github className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={12}
        className="w-80 overflow-hidden rounded-xl border-border/50 bg-background/95 backdrop-blur"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background">
              <Github className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-none">
                madhav9757
              </p>
              <p className="text-xs text-muted-foreground">
                Recent repositories
              </p>
            </div>
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={fetchRepos}
              >
                <RefreshCcw
                  className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Refresh</TooltipContent>
          </Tooltip>
        </div>

        <ScrollArea className="max-h-[360px]">
          <div className="p-2">
            <AnimatePresence mode="wait">
              {loading ? (
                <div className="space-y-2 p-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-2 rounded-lg p-3">
                      <Skeleton className="h-4 w-2/3" />
                      <Skeleton className="h-3 w-full" />
                      <div className="flex gap-2">
                        <Skeleton className="h-3 w-10" />
                        <Skeleton className="h-3 w-10" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : error ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-3 py-10"
                >
                  <AlertTriangle className="h-6 w-6 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Failed to load repositories
                  </p>
                  <Button size="sm" variant="outline" onClick={fetchRepos}>
                    Retry
                  </Button>
                </motion.div>
              ) : (
                <div className="space-y-1">
                  {repos.map((repo, i) => (
                    <motion.a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group block rounded-lg border border-transparent p-3 transition hover:border-border hover:bg-muted/50"
                    >
                      <div className="flex items-center justify-between">
                        <p className="truncate text-sm font-medium group-hover:text-primary">
                          {repo.name}
                        </p>
                        <ChevronRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100 group-hover:translate-x-0.5" />
                      </div>

                      {repo.description && (
                        <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                          {repo.description}
                        </p>
                      )}

                      <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                        {repo.language && (
                          <div className="flex items-center gap-1.5">
                            <Circle className="h-2 w-2 fill-primary text-primary" />
                            {repo.language}
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {repo.stargazers_count}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="h-3 w-3" />
                          {repo.forks_count}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </ScrollArea>

        <Separator />

        <div className="p-2">
          <Button
            asChild
            variant="ghost"
            className="w-full justify-between"
          >
            <a
              href="https://github.com/madhav9757"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm font-medium">
                View all repositories
              </span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
