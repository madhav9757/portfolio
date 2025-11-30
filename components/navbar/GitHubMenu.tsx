"use client";

import { useState, useEffect } from "react";
import { Github as GitHubIcon, ExternalLink } from "lucide-react";
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
};

export default function GitHubMenu() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/madhav9757/repos?sort=updated&per_page=5")
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);
        return res.json();
      })
      .then((data: Repo[]) => setRepos(data.filter((r) => !r.fork).slice(0, 5)))
      .catch(() => setError("Could not load repositories"));
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-xl hover:bg-secondary/60 transition"
          aria-label="Open GitHub menu"
        >
          <GitHubIcon size={18} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-72 bg-background border border-border rounded-xl shadow-xl p-0 overflow-hidden"
      >
        {/* Header */}
        <div className="p-3 bg-muted/40 flex items-center gap-2 text-sm font-semibold">
          <GitHubIcon size={18} />
          <a
            href="https://github.com/madhav9757"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            madhav9757
          </a>
        </div>

        {/* Repo List */}
        <div className="max-h-80 overflow-y-auto">
          {error && (
            <p className="text-red-500 p-3 text-sm">{error}</p>
          )}

          {!repos && !error && (
            <div className="p-3 flex flex-col gap-3">
              {/* Skeleton loaders */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-4 bg-secondary rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-secondary/70 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          )}

          {repos?.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-3 transition rounded-lg hover:bg-secondary/50"
            >
              <p className="font-medium text-sm">{repo.name}</p>

              {repo.description ? (
                <p className="text-xs text-muted-foreground truncate mt-1">
                  {repo.description}
                </p>
              ) : (
                <p className="text-xs text-muted-foreground italic mt-1">
                  No description
                </p>
              )}
            </a>
          ))}
        </div>

        <Separator />

        {/* Footer */}
        <a
          href="https://github.com/madhav9757"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 flex items-center justify-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          View full GitHub <ExternalLink size={14} />
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
